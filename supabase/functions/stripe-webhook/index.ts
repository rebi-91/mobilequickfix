import Stripe from "npm:stripe@14";
import { createClient } from "npm:@supabase/supabase-js@2";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY")!);
const db = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);

Deno.serve(async (req) => {
  const body = await req.text();
  let event: Stripe.Event;
  try {
    event = await stripe.webhooks.constructEventAsync(
      body,
      req.headers.get("stripe-signature") ?? "",
      Deno.env.get("STRIPE_WEBHOOK_SECRET")!,
    );
  } catch {
    return new Response("Invalid signature", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const s = event.data.object as Stripe.Checkout.Session;
    const bookingId = s.metadata?.booking_id;
    if (bookingId && s.payment_status === "paid") {
      const { error } = await db.from("bookings").update({
        status: "paid",
        payment_status: "paid",
        amount_paid: (s.amount_total ?? 0) / 100,
        amount_due_now: 0,
      }).eq("id", bookingId);
      if (error) console.error(error);
    }
  }
  return new Response("ok", { status: 200 });
});
