import Stripe from "npm:stripe@14";
import { createClient } from "npm:@supabase/supabase-js@2";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });

/* Must match the price table names used on the site */
const TABLES: Record<string, string> = {
  phone: "smartphone", tablet: "tablet", macbook: "macbook", laptop: "laptop", console: "console",
};
/* Must match SERVICE_METHODS and DEPOSIT in the site code */
const FEES: Record<string, number> = { postal: 12, callout: 20 };
const DEPOSIT = 10;

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY")!);
const db = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
const SITE_URL = Deno.env.get("SITE_URL")!;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  try {
    const b = await req.json();
    const table = TABLES[b.device];
    const fee = FEES[b.method];
    if (!table || fee === undefined) return json({ error: "Booking details are not valid" }, 400);

    /* Prices come from the database, never from the browser */
    const { data: priceRow } = await db
      .from(table).select("*")
      .eq("brand", b.brand).eq("model", b.model)
      .limit(1).maybeSingle();

    const prices: Record<string, number | null> = {};
    let repairsTotal = 0;
    let onRequest = false;
    for (const key of (b.repairKeys ?? []) as string[]) {
      const v = priceRow?.[key];
      const n = v === null || v === undefined || v === "" ? NaN : Number(v);
      prices[key] = Number.isFinite(n) ? n : null;
      if (Number.isFinite(n)) repairsTotal += n;
      else onRequest = true;
    }

    const grand = repairsTotal + fee;
    const payFull = b.payOption === "full" && !onRequest;
    const dueNow = payFull ? grand : DEPOSIT;

    /* Save the booking with the server-calculated totals */
    const row = {
      ...b.booking,
      repairs: (b.booking?.repairs ?? []).map((r: { key: string; label: string }) => ({
        ...r, price: prices[r.key] ?? null,
      })),
      repairs_total: repairsTotal,
      has_on_request: onRequest,
      service_fee: fee,
      grand_total: grand,
      pay_option: payFull ? "full" : "deposit",
      amount_due_now: dueNow,
      amount_paid: 0,
      status: "awaiting_payment",
      payment_status: "unpaid",
    };
    const { data: saved, error } = await db.from("bookings").insert(row).select("id").single();
    if (error || !saved) {
      console.error(error);
      return json({ error: "We couldn't save your booking" }, 500);
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: b.customerEmail || undefined,
      line_items: [{
        quantity: 1,
        price_data: {
          currency: "gbp",
          unit_amount: Math.round(dueNow * 100),
          product_data: {
            name: `${b.deviceName} repair`,
            description: payFull ? "Full payment" : `Deposit. The rest is paid after the repair.`,
          },
        },
      }],
      metadata: { booking_id: String(saved.id) },
      payment_intent_data: { metadata: { booking_id: String(saved.id) } },
      success_url: `${SITE_URL}/book?paid=1&booking=${saved.id}`,
      cancel_url: `${SITE_URL}/book?cancelled=1`,
    });

    return json({ url: session.url });
  } catch (e) {
    console.error(e);
    return json({ error: "The payment page couldn't be opened" }, 500);
  }
});
