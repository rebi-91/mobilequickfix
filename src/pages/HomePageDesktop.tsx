
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMobileScreenButton,
  faLaptop,
  faTabletScreenButton,
  faGamepad,
  faMagnifyingGlass,
  faArrowLeft,
  faXmark,
  faPhone,
  faCommentDots,
  faChevronRight,
  faFolder,
  faMapLocationDot,
  faGear,
  faCalendarDays,
  faCamera,
  faImage,
  faClock,
  faCompass,
  faBook,
  faLanguage,
  faHeartPulse,
  faNoteSticky,
  faMusic,
  faKey,
  faEnvelope,
  faSignal,
  faWifi,
  faCheck,
  faChevronLeft,
  faCaretRight,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import './HomePageDesktop.css';
import HomePageMobile from './HomePageMobile';

/* ------------------------------------------------------------------
   Business details
------------------------------------------------------------------- */
export const PHONE_DISPLAY = '07572 424207';
export const PHONE_TEL = 'tel:+447572424207';
const WHATSAPP_NUMBER = '447572424207';

/* ------------------------------------------------------------------
   Devices, brands and repairs
------------------------------------------------------------------- */
export type DeviceKey = 'phone' | 'macbook' | 'tablet' | 'laptop' | 'console';

export const DEVICES: { key: DeviceKey; label: string; icon: IconDefinition; modelHint: string }[] = [
  { key: 'macbook', label: 'MacBook', icon: faLaptop, modelHint: 'e.g. MacBook Air M1 2020' },
  { key: 'phone', label: 'Smartphone', icon: faMobileScreenButton, modelHint: 'e.g. iPhone 13 or Galaxy S22' },
  { key: 'tablet', label: 'Tablet', icon: faTabletScreenButton, modelHint: 'e.g. iPad 9th gen or Galaxy Tab A8' },
  { key: 'laptop', label: 'Laptop', icon: faLaptop, modelHint: 'e.g. HP Pavilion 15 or Dell XPS 13' },
  { key: 'console', label: 'Console', icon: faGamepad, modelHint: 'e.g. PS5, Switch OLED or Xbox Series X' },
];

const BRANDS: Record<DeviceKey, string[]> = {
  phone: [
    'Apple', 'Google', 'Samsung', 'Huawei', 'Oppo', 'OnePlus', 'Motorola', 'Honor',
    'Asus', 'Blackview', 'Cubot', 'Doogee', 'Infinix', 'Realme', 'Tecno', 'Ulefone',
    'Nokia', 'LG', 'Vivo', 'Vodafone', 'TCL', 'Xiaomi', 'Sony',
  ],
  macbook: ['MacBook Air', 'MacBook Pro'],
  tablet: ['Apple', 'Samsung', 'Amazon', 'Honor', 'Xiaomi', 'Lenovo'],
  laptop: ['HP', 'Lenovo', 'Samsung', 'Microsoft', 'Alienware', 'Huawei', 'Razer', 'Acer', 'Asus', 'Dell', 'MSI'],
  console: ['Sony PlayStation', 'Nintendo', 'Microsoft Xbox'],
};

export type Repair = { key: string; label: string; sub: string };

/* Each key is also the price column name in that gadget's Supabase table */
export const REPAIRS: Record<DeviceKey, Repair[]> = {
  phone: [
    { key: 'screen', label: 'Screen Repair (Standard)', sub: 'Cracked, black or not responding to touch' },
    { key: 'oled', label: 'Soft OLED Screen Replacement', sub: 'Premium OLED screen that matches originals colour, brightness and feel' },
    { key: 'battery', label: 'Battery replacement', sub: 'Drains fast or switches off early' },
    { key: 'charging', label: 'Charging port', sub: 'Loose cable, slow or no charging' },
    { key: 'water', label: 'Water damage', sub: 'Dropped in water or had a spill' },
    { key: 'backglass', label: 'Back Glass', sub: 'Cracked back panel' },
    { key: 'camera', label: 'Back Camera', sub: 'Blurry, cracked lens or not working' },
  ],
  tablet: [
    { key: 'screen', label: 'Screen Repair', sub: 'Cracked, black or not responding to touch' },
    { key: 'battery', label: 'Battery replacement', sub: 'Drains fast or switches off early' },
    { key: 'charging', label: 'Charging port', sub: 'Loose cable, slow or no charging' },
    { key: 'water', label: 'Water damage', sub: 'Dropped in water or had a spill' },
    { key: 'housing', label: 'Housing', sub: 'Cracked back panel' },
    { key: 'camera', label: 'Camera', sub: 'Blurry, cracked lens or not working' },
  ],
  macbook: [
    { key: 'screen', label: 'Screen Repair', sub: '' },
    { key: 'battery', label: 'Battery replacement', sub: 'Drains fast or switches off early' },
    { key: 'charging', label: 'Charging port', sub: 'Loose cable, slow or no charging' },
    { key: 'water', label: 'Water damage', sub: 'Dropped in water or had a spill' },
    { key: 'camera', label: 'Camera', sub: 'Blurry, cracked lens or not working' },
  ],
  laptop: [
    { key: 'screen', label: 'Screen Repair', sub: '' },
    { key: 'battery', label: 'Battery replacement', sub: 'Drains fast or switches off early' },
    { key: 'charging', label: 'Charging port', sub: 'Loose cable, slow or no charging' },
    { key: 'water', label: 'Water damage', sub: 'Dropped in water or had a spill' },
    { key: 'camera', label: 'Camera', sub: 'Blurry, cracked lens or not working' },
  ],
  console: [
    { key: 'hdmi', label: 'HDMI port', sub: 'No picture on the TV' },
    { key: 'overheating', label: 'Overheating or loud fan', sub: 'Clean, repaste and service' },
    { key: 'disc', label: 'Disc Drive repair', sub: 'Won’t read or eject discs' },
    { key: 'controller', label: 'Controller', sub: 'Stick drift or buttons not working' },
    { key: 'charging', label: 'Charging or USB port', sub: 'Won’t charge or connect' },
    { key: 'power', label: 'Power supply/No Power supply', sub: 'No lights, no power' },
  ],
};

/* Heading on the blue bar above the repair list */
export const REPAIR_GROUP_TITLE: Record<DeviceKey, string> = {
  phone: 'Common repairs',
  tablet: 'Common repairs',
  macbook: 'Common repairs',
  laptop: 'Common repairs',
  console: 'Game console repairs',
};

/* ------------------------------------------------------------------
   PRICES come from Supabase: one table per gadget type.
   Each row is one model (brand + model), each repair key is a column.
   An empty price shows as "Price on request".
   A table that doesn't exist yet (e.g. tablet) just shows
   "Price on request" for everything.
------------------------------------------------------------------- */
const PRICE_TABLES: Record<DeviceKey, string> = {
  phone: 'smartphone',
  tablet: 'tablet',
  macbook: 'macbook',
  laptop: 'laptop',
  console: 'console',
};

const SUPABASE_URL = (import.meta.env.VITE_SUPABASE_URL as string | undefined)?.replace(/\/+$/, '');
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

/* Card payments: a small Supabase Edge Function (create-checkout) starts a
   Stripe Checkout page. It works out the amount itself from your price
   tables, so nobody can change the price in their browser. */
const CHECKOUT_URL = SUPABASE_URL ? `${SUPABASE_URL}/functions/v1/create-checkout` : '';

type Prices = Record<string, number>;

async function fetchPrices(device: DeviceKey, brand: string, model: string): Promise<Prices> {
  if (!SUPABASE_URL || !SUPABASE_KEY) return {};
  const url =
    `${SUPABASE_URL}/rest/v1/${PRICE_TABLES[device]}?select=*` +
    `&brand=eq.${encodeURIComponent(brand)}&model=eq.${encodeURIComponent(model)}&limit=1`;
  const headers: Record<string, string> = { apikey: SUPABASE_KEY };
  if (SUPABASE_KEY.startsWith('eyJ')) headers.Authorization = `Bearer ${SUPABASE_KEY}`;

  const res = await fetch(url, { headers });
  if (!res.ok) return {};
  const [row] = (await res.json()) as Record<string, unknown>[];
  const prices: Prices = {};
  if (!row) return prices;
  for (const { key } of REPAIRS[device]) {
    const value = row[key];
    if (value !== null && value !== undefined && value !== '' && Number.isFinite(Number(value))) {
      prices[key] = Number(value);
    }
  }
  return prices;
}

/* Tax shown by the "Incl. TAX" switch. Prices in Supabase are the price
   the customer pays. 0 = no VAT; use 0.2 if you add 20% VAT. */
const TAX_RATE = 0;

/* 89 or 89.99 (no £ sign), for the big price tags */
const amount = (n: number) =>
  n.toLocaleString('en-GB', { minimumFractionDigits: Number.isInteger(n) ? 0 : 2, maximumFractionDigits: 2 });

/* £89 or £89.99 */
export const money = (n: number) =>
  new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: Number.isInteger(n) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(n);

/* ------------------------------------------------------------------
   Brand logos (optional). Put files in /public/images/brands/
   If a file is missing, the brand name shows instead.
------------------------------------------------------------------- */
const slug = (t: string) => t.toLowerCase().replace(/[^a-z0-9]/g, '');
/* ------------------------------------------------------------------
   MODEL LISTS ARE READ AUTOMATICALLY FROM IMAGE FILES.
   Put pictures in:  public/images/brands/<device>/<brand>/<Model name>.png
     <device> = phone, macbook, tablet, laptop or console
     <brand>  = the brand, e.g. apple, samsung, google, sony
     file     = the model name exactly as it should appear,
                e.g. "iPhone 15 Pro.png" or "Galaxy S24 Ultra.jpg"
   Example:  public/images/brands/phone/apple/iPhone 15 Pro.png
   Optional: start a file name with a number to set the order,
             e.g. "01 iPhone 17.png" (the number isn't shown).
   Then redeploy. New folders and pictures appear on their own.
------------------------------------------------------------------- */
export type ModelEntry = { name: string; url: string; order: number };

/* The website build lists every picture in the brands folders
   (brands/<device>/<brand>/picture). Brand logos sitting directly in
   brands/ are not affected. */
const MODEL_FILES = import.meta.glob(
  '/public/images/brands/*/*/*.{png,jpg,jpeg,webp,avif,PNG,JPG,JPEG,WEBP}',
  { eager: true, query: '?url', import: 'default' },
) as Record<string, string>;

if (import.meta.env.DEV && Object.keys(MODEL_FILES).length === 0) {
  console.warn('[Booking] No model pictures found. Put them in public/images/brands/<device>/<brand>/<Model name>.png');
}

/* Folder names that count as each device type */
const DEVICE_FOLDERS: Record<string, DeviceKey> = {
  smartphone: 'phone', smartphones: 'phone', phone: 'phone', phones: 'phone', mobile: 'phone', mobiles: 'phone',
  macbook: 'macbook', macbooks: 'macbook',
  tablet: 'tablet', tablets: 'tablet', ipad: 'tablet',
  laptop: 'laptop', laptops: 'laptop',
  console: 'console', consoles: 'console',
};

/* Match a folder name like "apple" or "sony" to a brand already on the page;
   anything new becomes an extra brand button (e.g. "nothing" -> "Nothing") */
const brandForFolder = (device: DeviceKey, folder: string) => {
  const key = slug(folder);
  const known = BRANDS[device];
  return (
    known.find((b) => slug(b) === key) ??
    known.find((b) => slug(b).startsWith(key)) ??
    folder.replace(/[-_]+/g, ' ').trim().replace(/\b\w/g, (c) => c.toUpperCase())
  );
};

export const MODELS: Record<string, ModelEntry[]> = {};
const EXTRA_BRANDS: Record<DeviceKey, string[]> = { phone: [], macbook: [], tablet: [], laptop: [], console: [] };

for (const [path, url] of Object.entries(MODEL_FILES)) {
  const parts = path.split('/');
  const file = parts[parts.length - 1];
  const brandFolder = parts[parts.length - 2];
  const device = DEVICE_FOLDERS[slug(parts[parts.length - 3])];
  if (!device) continue;

  const brand = brandForFolder(device, brandFolder);
  if (!BRANDS[device].includes(brand) && !EXTRA_BRANDS[device].includes(brand)) EXTRA_BRANDS[device].push(brand);

  const base = file.replace(/\.[^.]+$/, '');
  const numbered = base.match(/^(\d{1,3})[\s._-]+(.+)$/);
  const name = (numbered ? numbered[2] : base).replace(/_/g, ' ').trim();
  const key = `${device}:${brand}`;
  if (!MODELS[key]) MODELS[key] = [];
  MODELS[key].push({ name, url, order: numbered ? Number(numbered[1]) : Number.MAX_SAFE_INTEGER });
}
for (const list of Object.values(MODELS)) {
  list.sort((x, y) => x.order - y.order || x.name.localeCompare(y.name, undefined, { numeric: true }));
}

/* Search inside the selected brand's models.
   "iphone17", "17 pro", "Pro 17" and "iPhone 17" all find the iPhone 17 Pro. */
const squash = (t: string) => t.toLowerCase().replace(/[^a-z0-9]/g, '');
export const modelMatches = (name: string, query: string) => {
  const n = squash(name);
  const words = query.toLowerCase().split(/\s+/).map(squash).filter(Boolean);
  return n.includes(squash(query)) || (words.length > 0 && words.every((w) => n.includes(w)));
};

/* Brand buttons for a device: the usual list plus any new brand folders */
export const brandsFor = (device: DeviceKey) => [...BRANDS[device], ...EXTRA_BRANDS[device]];

/* Every model on the site, so the main search box can suggest them */
export type SearchHit = { device: DeviceKey; brand: string; entry: ModelEntry };
const ALL_MODELS: SearchHit[] = Object.entries(MODELS).flatMap(([key, list]) => {
  const i = key.indexOf(':');
  const device = key.slice(0, i) as DeviceKey;
  const brand = key.slice(i + 1);
  return list.map((entry) => ({ device, brand, entry }));
});
const findModels = (query: string, limit = 6): SearchHit[] => {
  const q = query.trim();
  if (q.length < 2) return [];
  return ALL_MODELS
    .filter((h) => modelMatches(h.entry.name, q) || modelMatches(`${h.brand} ${h.entry.name}`, q))
    .slice(0, limit);
};
export const deviceLabel = (k: DeviceKey) => DEVICES.find((d) => d.key === k)?.label ?? '';

/* ------------------------------------------------------------------
   FINALIZE STEP SETTINGS: change these to suit your shop
------------------------------------------------------------------- */
export type MethodKey = 'postal' | 'callout';
export type ServiceMethod = { key: MethodKey; title: string; sub: string; fee: number };
export const SERVICE_METHODS: ServiceMethod[] = [
  { key: 'postal', title: 'Nationwide Postal Repair', sub: '24 - 48 Hours Process time', fee: 12 },
  { key: 'callout', title: 'Call-Out Repair', sub: 'Birmingham & Solihull Covered', fee: 20 },
];
/* Where customers post their device (shown under Postal Repair) */
export const POSTAL_ADDRESS = {
  area: 'EDGBASTON',
  lines: ['Apex House 1st Floor, 3 Embassy Drive', 'Calthorpe Road', 'B15 1TR', 'Birmingham'],
};
export const CALLOUT_SLOTS = ['09:00 — 12:00', '18:00 — 21:00'];
export const DEPOSIT = 10;
export const TERMS_URL = '/terms';
export const COUNTRIES = ['United Kingdom', 'Ireland'];
export const WHEN_OPTIONS = ['As soon as possible', 'Today', 'Tomorrow morning', 'Tomorrow afternoon', 'Tomorrow evening', 'This weekend', 'Other'];

const EMPTY_FORM = {
  firstName: '', lastName: '', phone: '', email: '', company: '', notes: '',
  house: '', street: '', city: '', postcode: '', country: '',
  when: 'As soon as possible', otherDate: '', otherTime: '',
};
export type FormData = typeof EMPTY_FORM;

/* £ 198.00 */
export const money2 = (n: number) =>
  `£ ${n.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
/* 2026-09-29 <-> dates */
export const dayKey = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const fromKey = (k: string) => {
  const [y, m, d] = k.split('-').map(Number);
  return new Date(y, m - 1, d);
};
/* "Tuesday 29-09-2026" */
export const longDate = (k: string) => {
  const d = fromKey(k);
  return `${d.toLocaleDateString('en-GB', { weekday: 'long' })} ${String(d.getDate()).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(2, '0')}-${d.getFullYear()}`;
};

/* Progress is kept if the page is refreshed (cleared when the browser tab closes) */
const SAVE_KEY = 'bk-progress';
type Saved = {
  step: 1 | 2 | 3;
  device: DeviceKey | null;
  brand: string | null;
  model: string;
  modelImg: string | null;
  repairs: string[];
  form: Partial<FormData>;
  method: MethodKey | null;
  payOption: 'deposit' | 'full';
  customerType: 'private' | 'business';
  custDate: string;
  slot: string;
};
const loadSaved = (): Partial<Saved> => {
  try {
    return JSON.parse(sessionStorage.getItem(SAVE_KEY) || '{}') as Partial<Saved>;
  } catch {
    return {};
  }
};

/* UK phone numbers and postcodes */
const phoneOk = (t: string) => /^(\+44|0044|0)\d{9,10}$/.test(t.replace(/[\s()-]/g, ''));
const emailOk = (t: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(t.trim());
const postcodeOk = (t: string) => /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i.test(t.trim());


/* Use a different logo file for a brand on one device type */
const LOGO_OVERRIDES: Record<string, string> = { 'laptop:Huawei': 'huawei-laptop' };
export const brandLogo = (name: string, device?: string | null) =>
  `/images/brands/${LOGO_OVERRIDES[`${device}:${name}`] ?? slug(name)}.png`;
const helpImg = (tab: string, i: number) => `/images/brands/${tab}-${i + 1}.png`;

export const ImgOr: React.FC<{ src: string; alt: string; className?: string; children: React.ReactNode }> = ({ src, alt, className, children }) => {
  const [failed, setFailed] = useState(false);
  if (failed) return <>{children}</>;
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} loading="lazy" />;
};

/* Clickable tile. Uses a div so your site-wide <button> styles
   (fixed height, pill corners) can't squash it. */
export const Tile: React.FC<{
  className: string;
  onClick: () => void;
  label?: string;
  busy?: boolean;
  pressed?: boolean;
  expanded?: boolean;
  children: React.ReactNode;
}> = ({ className, onClick, label, busy, pressed, expanded, children }) => (
  <div
    role="button"
    tabIndex={0}
    className={className}
    onClick={onClick}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick();
      }
    }}
    aria-label={label}
    aria-busy={busy || undefined}
    aria-pressed={pressed}
    aria-expanded={expanded}
  >
    {children}
  </div>
);

/* Square tick box used on the Finalize step */
const Check: React.FC<{ on: boolean }> = ({ on }) => (
  <span className={`bk-cb ${on ? 'is-on' : ''}`} aria-hidden="true">
    {on && <FontAwesomeIcon icon={faCheck} />}
  </span>
);

/* Text box with its label sitting on the border */
const Field: React.FC<{ id: string; label: string; required?: boolean; invalid?: boolean; full?: boolean; children: React.ReactNode }> = ({ id, label, required, invalid, full, children }) => (
  <div className={`bk-fl ${full ? 'is-full' : ''} ${invalid ? 'is-invalid' : ''}`}>
    <label htmlFor={id}>{label}{required && <span className="bk-req">*</span>}</label>
    {children}
  </div>
);

/* Icons for the service methods */
export const MethodIcon: React.FC<{ k: MethodKey }> = ({ k }) => {
  const common = { viewBox: '0 0 48 48', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, className: 'bk-method-icon', 'aria-hidden': true };
  if (k === 'postal') return (
    <svg {...common}><path d="M24 6 42 14v20L24 42 6 34V14z" /><path d="M6 14l18 8 18-8M24 22v20" /><path d="M15 10l18 8v7" /></svg>
  );
  return (
    <svg {...common}>
      <rect x="11" y="4" width="22" height="40" rx="3" /><path d="M19 39h6" />
      <path d="M31 33s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z" fill="#fff" /><circle cx="31" cy="22" r="2.5" />
    </svg>
  );
};

/* Outline device icons */
export const DeviceIcon: React.FC<{ k: DeviceKey }> = ({ k }) => {
  const common = { viewBox: '0 0 64 64', fill: 'none', stroke: 'currentColor', strokeWidth: 2.2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, className: 'bk-line-icon' };
  if (k === 'phone') return (
    <svg {...common}><rect x="21" y="6" width="22" height="50" rx="4" /><path d="M28 7.5h8v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1z" /><path d="M26 51h4M32 51h2" /></svg>
  );
  if (k === 'tablet') return (
    <svg {...common}><rect x="13" y="6" width="38" height="52" rx="4" /><rect x="17" y="12" width="30" height="41" rx="1" /><path d="M28 9h1M31 9h5" /><path d="M47 30v6" /></svg>
  );
  if (k === 'console') return (
    <svg {...common}>
      <rect x="40" y="6" width="15" height="50" /><circle cx="47.5" cy="13" r="2.5" /><path d="M47.5 21v3M47.5 27v8" />
      <path d="M15 34h18c6 0 9 4 9 10 0 5-1 10-4 11-3 1-5-1-7-4l-2-3h-10l-2 3c-2 3-4 5-7 4-3-1-4-6-4-11 0-6 3-10 9-10z" />
      <path d="M24 34v-6M12 44h6M15 41v6" /><circle cx="31" cy="42" r="1.4" /><circle cx="34" cy="45" r="1.4" /><circle cx="28" cy="45" r="1.4" /><circle cx="31" cy="48" r="1.4" />
    </svg>
  );
  return (
    <svg {...common}>
      <rect x="11" y="14" width="42" height="29" rx="2" /><rect x="15" y="18" width="34" height="21" />
      <path d="M5 46h54v2a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z" /><path d="M28 46v1.5h8V46" />
      <path d="M19 26l5-5M19 31l3-3M24 26l3-3" />
    </svg>
  );
};

/* Phone with a blue question mark (used for "What model do I have?") */
const HelpPhoneIcon: React.FC<{ className?: string }> = ({ className = 'bk-help-svg' }) => (
  <svg className={className} viewBox="0 0 64 72" aria-hidden="true">
    <rect x="12" y="4" width="34" height="62" rx="4" fill="none" stroke="currentColor" strokeWidth="2.4" />
    <path d="M24 5.5h10v2.5H24z" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M25 60h8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    <circle cx="46" cy="30" r="10" className="bk-help-q-bg" />
    <text x="46" y="35" textAnchor="middle" className="bk-help-q-text">?</text>
  </svg>
);

/* Phone with a big question mark on the screen (used for "Other Model") */
export const OtherPhoneIcon: React.FC = () => (
  <svg className="bk-model-icon bk-model-icon-other" viewBox="0 0 64 72" aria-hidden="true">
    <rect x="15" y="4" width="34" height="62" rx="4" fill="none" stroke="currentColor" strokeWidth="2.4" />
    <path d="M27 5.5h10v2.5H27z" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M28 60h8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    <text x="32" y="44" textAnchor="middle" className="bk-other-q">?</text>
  </svg>
);

/* Guess the device from a typed model name */
function guessDevice(text: string): DeviceKey {
  const t = text.toLowerCase();
  if (/macbook/.test(t)) return 'macbook';
  if (/ipad|tab\b|tab |galaxy tab|fire hd|kindle|matepad/.test(t)) return 'tablet';
  if (/ps[345]|playstation|xbox|switch|nintendo|steam deck/.test(t)) return 'console';
  if (/laptop|thinkpad|pavilion|xps|inspiron|latitude|ideapad|surface laptop|zenbook|vivobook|aspire|chromebook|omen|legion|rog|alienware|razer blade/.test(t)) return 'laptop';
  return 'phone';
}

/* ------------------------------------------------------------------
   "What model do I have?" modal with drawn phone screens
------------------------------------------------------------------- */
type App = { name: string; color: string; icon: IconDefinition };
type Row = { label: string; value?: string; badge?: string };
type Screen =
  | { kind: 'home'; dark?: boolean; apps: App[]; hi: string }
  | { kind: 'list'; dark?: boolean; title: string; back?: string; header?: string; rows: Row[]; hi: number[] }
  | { kind: 'window'; title: string; rows: Row[]; hi: number[] }
  | { kind: 'label'; rows: Row[]; hi: number[] };

const IOS_APPS: App[] = [
  { name: 'Files', color: '#1C7CF4', icon: faFolder },
  { name: 'Maps', color: '#34A853', icon: faMapLocationDot },
  { name: 'Settings', color: '#8E8E93', icon: faGear },
  { name: 'Calendar', color: '#FF3B30', icon: faCalendarDays },
  { name: 'Camera', color: '#3A3A3C', icon: faCamera },
  { name: 'Photos', color: '#FF9F0A', icon: faImage },
  { name: 'Clock', color: '#1C1C1E', icon: faClock },
  { name: 'Safari', color: '#0A84FF', icon: faCompass },
  { name: 'Books', color: '#FF9500', icon: faBook },
  { name: 'Translate', color: '#5E5CE6', icon: faLanguage },
  { name: 'Phone', color: '#30D158', icon: faPhone },
  { name: 'Messages', color: '#30D158', icon: faCommentDots },
];

const ANDROID_APPS: App[] = [
  { name: 'Health', color: '#19A974', icon: faHeartPulse },
  { name: 'Notes', color: '#E8453C', icon: faNoteSticky },
  { name: 'Music', color: '#5A6CF2', icon: faMusic },
  { name: 'Gallery', color: '#D6336C', icon: faImage },
  { name: 'Pass', color: '#2B59C3', icon: faKey },
  { name: 'Email', color: '#E8453C', icon: faEnvelope },
  { name: 'Camera', color: '#3A3A3C', icon: faCamera },
  { name: 'Settings', color: '#4C6EF5', icon: faGear },
];

type HelpTab = 'ios' | 'android';

const HELP: Record<HelpTab, { title: string; steps: { text: React.ReactNode; screen: Screen }[] }> = {
  ios: {
    title: 'iPhone or iPad',
    steps: [
      { text: <>Go to the <b>Settings</b> app on your iPhone or iPad.</>,
        screen: { kind: 'home', apps: IOS_APPS, hi: 'Settings' } },
      { text: <>Tap <b>General</b> in Settings, then tap <b>About</b>.</>,
        screen: { kind: 'list', title: 'General', back: 'Settings', hi: [0], rows: [
          { label: 'About' }, { label: 'Software Update', badge: '1' }, { label: 'AirDrop' },
          { label: 'AirPlay & Handoff' }, { label: 'Picture in Picture' } ] } },
      { text: <>At <b>Model Name</b> you’ll see the model. To search by model code, tap <b>Model Number</b> to see the code starting with A.</>,
        screen: { kind: 'list', title: 'About', back: 'General', hi: [2, 3], rows: [
          { label: 'Name', value: 'My iPhone 13' }, { label: 'iOS Version', value: '17.6' },
          { label: 'Model Name', value: 'iPhone 13' }, { label: 'Model Number', value: 'MLPF3B/A' },
          { label: 'Serial Number', value: 'F2LXQ7K9N1' } ] } },
    ],
  },
  android: {
    title: 'Android phone or tablet',
    steps: [
      { text: <>Go to your home screen and tap the <b>Settings</b> icon.</>,
        screen: { kind: 'home', dark: true, apps: ANDROID_APPS, hi: 'Settings' } },
      { text: <>Look for <b>About phone</b>, <b>About tablet</b>, <b>Device information</b> or something similar.</>,
        screen: { kind: 'list', dark: true, title: 'Settings', hi: [3], rows: [
          { label: 'Accessibility', value: 'TalkBack, Mono audio' }, { label: 'Software update', value: 'Download and install' },
          { label: 'Tips and user manual', value: 'Useful tips' }, { label: 'About phone', value: 'Status, Phone name' } ] } },
      { text: <>In <b>About phone</b> you’ll find the <b>model name</b> and <b>model code</b>.</>,
        screen: { kind: 'list', dark: true, title: 'About phone', header: 'Galaxy S22 Ultra', hi: [1, 2], rows: [
          { label: 'Phone number', value: '+44 7700 900123' }, { label: 'Product name', value: 'Galaxy S22 Ultra' },
          { label: 'Model name', value: 'SM-S908B/DS' }, { label: 'Serial number', value: 'R5CT21ABCDE' } ] } },
    ],
  },
};

const StatusBar: React.FC = () => (
  <div className="ph-status">
    <span>14:24</span>
    <span className="ph-status-icons"><FontAwesomeIcon icon={faSignal} /><FontAwesomeIcon icon={faWifi} /><span className="ph-batt">100</span></span>
  </div>
);

const DrawnScreen: React.FC<{ screen: Screen }> = ({ screen }) => {
  if (screen.kind === 'home') {
    return (
      <div className={`ph ph-home ${screen.dark ? 'is-dark' : 'is-ios'}`}>
        <StatusBar />
        <div className="ph-apps">
          {screen.apps.map((a) => (
            <div key={a.name} className={`ph-app ${a.name === screen.hi ? 'is-hi' : ''}`}>
              <span className="ph-app-icon" style={{ background: a.color }}><FontAwesomeIcon icon={a.icon} /></span>
              <span className="ph-app-name">{a.name}</span>
            </div>
          ))}
        </div>
        {screen.dark && <div className="ph-nav"><span>‹</span><span>○</span><span>|||</span></div>}
      </div>
    );
  }
  if (screen.kind === 'list') {
    return (
      <div className={`ph ph-list ${screen.dark ? 'is-dark' : 'is-light'}`}>
        <StatusBar />
        <div className="ph-bar">
          {screen.back && <span className="ph-back">‹ {screen.back}</span>}
          <span className="ph-title">{screen.title}</span>
        </div>
        {screen.header && <div className="ph-header">{screen.header}</div>}
        <div className="ph-rows">
          {screen.rows.map((r, i) => (
            <div key={i} className={`ph-row ${screen.hi.includes(i) ? 'is-hi' : ''}`}>
              <span className="ph-row-label">{r.label}</span>
              {r.value && <span className="ph-row-value">{r.value}</span>}
              {r.badge && <span className="ph-badge">{r.badge}</span>}
              {!r.value && !r.badge && <span className="ph-chev">›</span>}
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (screen.kind === 'window') {
    return (
      <div className="ph-window">
        <div className="ph-window-bar"><i /><i /><i /><span>{screen.title}</span></div>
        <div className="ph-rows">
          {screen.rows.map((r, i) => (
            <div key={i} className={`ph-row ${screen.hi.includes(i) ? 'is-hi' : ''}`}>
              <span className="ph-row-label">{r.label}</span>
              {r.value && <span className="ph-row-value">{r.value}</span>}
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="ph-label">
      <div className="ph-label-sticker">
        <div className="ph-barcode" />
        {screen.rows.map((r, i) => (
          <div key={i} className={`ph-label-row ${screen.hi.includes(i) ? 'is-hi' : ''}`}>
            <b>{r.label}:</b> {r.value}
          </div>
        ))}
      </div>
    </div>
  );
};

const CLOSE_MS = 350; /* keep in step with the bk-lift animation in the CSS */

export const ModelHelp: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [tab, setTab] = useState<HelpTab>('ios');
  const [closing, setClosing] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  /* Stop the page behind scrolling while the popup is open */
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  /* Play the slide-up animation, then remove the popup */
  const close = () => {
    if (closing) return;
    setClosing(true);
    window.setTimeout(onClose, CLOSE_MS);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  return (
    <div className={`bk-modal-backdrop ${closing ? 'is-closing' : ''}`} onClick={close}>
      <div className="bk-modal" role="dialog" aria-modal="true" aria-labelledby="bk-help-title" onClick={(e) => e.stopPropagation()}>
        <button ref={closeRef} className="bk-modal-close" onClick={close} aria-label="Close">
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <div className="bk-tabs" role="tablist">
          {(Object.keys(HELP) as HelpTab[]).map((k) => (
            <button key={k} role="tab" aria-selected={tab === k} className={`bk-tab ${tab === k ? 'is-active' : ''}`} onClick={() => setTab(k)}>
              {k === 'ios' ? 'Apple iOS' : 'Android'}
            </button>
          ))}
        </div>

        <h2 id="bk-help-title" className="bk-modal-title">
          Find <b>Model</b> or <b>Model number</b>
        </h2>

        <ol className="bk-help-steps">
          {HELP[tab].steps.map((s, i) => (
            <li key={`${tab}-${i}`} className="bk-help-step">
              <div className="bk-help-text">
                <span className="bk-help-num">Step {i + 1}</span>
                <p>{s.text}</p>
              </div>
              <div className="bk-help-screen" aria-hidden="true">
                <ImgOr src={helpImg(tab, i)} alt={`Step ${i + 1}`} className="bk-help-img">
                  <DrawnScreen screen={s.screen} />
                </ImgOr>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------
   Booking page
------------------------------------------------------------------- */
const STEPS: [string, string][] = [['Select', 'device'], ['Select', 'repair'], ['Finalize', 'order']];

/* Phones use the Bootstrap mobile layout (same breakpoint as Bootstrap's "md") */
const MOBILE_QUERY = '(max-width: 767.98px)';
const useIsMobile = () => {
  const [mobile, setMobile] = useState(() => typeof window !== 'undefined' && window.matchMedia(MOBILE_QUERY).matches);
  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const onChange = () => setMobile(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return mobile;
};

const BookingPage: React.FC = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const isMobile = useIsMobile();

  const [saved] = useState(loadSaved);
  const [step, setStep] = useState<1 | 2 | 3>(saved.device ? saved.step ?? 1 : 1);
  const [device, setDevice] = useState<DeviceKey | null>(saved.device ?? null);
  const [brand, setBrand] = useState<string | null>(saved.brand ?? null);
  const [model, setModel] = useState(saved.model ?? '');
  const [modelImg, setModelImg] = useState<string | null>(saved.modelImg ?? null);
  const [search, setSearch] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeHit, setActiveHit] = useState(-1);
  const [repairs, setRepairs] = useState<string[]>(saved.repairs ?? []);
  const [showHelp, setShowHelp] = useState(false);
  const [loadingKey, setLoadingKey] = useState<string | null>(null);
  const [modelSearch, setModelSearch] = useState('');
  const [otherModel, setOtherModel] = useState(false);
  const [repairsOpen, setRepairsOpen] = useState(true);
  const [repairHint, setRepairHint] = useState('');
  const [prices, setPrices] = useState<Prices>({});
  const [pricesLoading, setPricesLoading] = useState(false);
  const [inclTax, setInclTax] = useState(true);
  const modelSearchRef = useRef<HTMLInputElement>(null);

  /* Short loading spinner inside the tapped button, then show the next options */
  const withSpinner = (key: string, action: () => void) => {
    if (loadingKey) return;
    setLoadingKey(key);
    window.setTimeout(() => {
      action();
      setLoadingKey(null);
    }, 700);
  };
  const [form, setForm] = useState<FormData>({ ...EMPTY_FORM, ...(saved.form ?? {}) });
  const [method, setMethod] = useState<MethodKey | null>(saved.method ?? null);
  const [custDate, setCustDate] = useState(saved.custDate && saved.custDate >= dayKey(new Date()) ? saved.custDate : '');
  const [slot, setSlot] = useState(saved.slot ?? '');
  const [dayStart, setDayStart] = useState(0);
  const [customerType, setCustomerType] = useState<'private' | 'business'>(saved.customerType ?? 'private');
  const [payOption, setPayOption] = useState<'deposit' | 'full'>(saved.payOption ?? 'full');
  const [paying, setPaying] = useState(false);
  const [payFailed, setPayFailed] = useState(false);
  const paidReturn = params.get('paid') === '1';
  const [terms, setTerms] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const [error, setError] = useState('');
  const [invalid, setInvalid] = useState<string[]>([]);
  const hits = useMemo(() => findModels(search), [search]);

  /* Save progress so a refresh doesn't lose it */
  useEffect(() => {
    try {
      sessionStorage.setItem(SAVE_KEY, JSON.stringify({ step, device, brand, model, modelImg, repairs, form, method, custDate, slot, payOption, customerType }));
    } catch {
      /* private browsing: nothing to do */
    }
  }, [step, device, brand, model, modelImg, repairs, form, method, custDate, slot, payOption, customerType]);

  const setField = (key: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setInvalid((v) => v.filter((k) => k !== key));
  };

  /* Put the cursor in the model search box when a model list opens (not on phones,
     where it would pop the keyboard up) */
  useEffect(() => {
    if (brand && !otherModel && modelSearchRef.current && window.matchMedia('(pointer: fine)').matches) {
      modelSearchRef.current.focus({ preventScroll: true });
    }
  }, [brand, otherModel]);

  /* Pre-select from links like /book?device=phone&service=screen */
  useEffect(() => {
    const d = params.get('device') as DeviceKey | null;
    const s = params.get('service');
    if (d && DEVICES.some((x) => x.key === d)) setDevice(d);
    if (s && s !== 'callout') setRepairs([s]);
  }, [params]);

  /* Look up this model's prices once we reach the repair step */
  const onRepairStep = step >= 2;
  useEffect(() => {
    const m = model.trim();
    if (!onRepairStep || !device || !brand || !m) {
      setPrices({});
      setPricesLoading(false);
      return;
    }
    let live = true;
    setPricesLoading(true);
    fetchPrices(device, brand, m)
      .then((p) => live && setPrices(p))
      .catch(() => live && setPrices({}))
      .finally(() => live && setPricesLoading(false));
    return () => {
      live = false;
    };
  }, [onRepairStep, device, brand, model]);

  const deviceInfo = useMemo(() => DEVICES.find((d) => d.key === device) || null, [device]);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const goBack = () => {
    setError('');
    setRepairHint('');
    if (step === 3) return setStep(2);
    if (step === 2) return setStep(1);
    if (brand && otherModel) return setOtherModel(false);
    if (brand) {
      setModelSearch('');
      setModel('');
      setModelImg(null);
      return setBrand(null);
    }
    if (device) return setDevice(null);
    navigate('/');
  };

  /* Clicking a finished step in the stepper jumps back to it */
  const goToStep = (n: 1 | 2 | 3) => {
    setError('');
    setRepairHint('');
    setStep(n);
    scrollTop();
  };

  /* A suggestion from the main search: jump straight to its repairs and prices */
  const pickHit = (h: SearchHit) => {
    setDevice(h.device);
    setBrand(h.brand);
    setModel(h.entry.name);
    setModelImg(h.entry.url);
    setOtherModel(false);
    setModelSearch('');
    setSearch('');
    setSearchOpen(false);
    setActiveHit(-1);
    setRepairs((r) => r.filter((k) => REPAIRS[h.device].some((x) => x.key === k)));
    setStep(2);
    scrollTop();
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const text = search.trim();
    if (!text) return;
    const hit = hits[activeHit] ?? hits[0];
    if (hit) return pickHit(hit);
    setSearchOpen(false);
    const d = guessDevice(text);
    setDevice(d);
    setBrand(null);
    setModel(text);
    setModelImg(null);
    setRepairs((r) => r.filter((k) => REPAIRS[d].some((x) => x.key === k)));
    setStep(2);
    scrollTop();
  };

  const toggleRepair = (key: string) => {
    setRepairHint('');
    setRepairs((r) => (r.includes(key) ? r.filter((k) => k !== key) : [...r, key]));
  };

  /* "Honor" + "X70" -> "Honor X70", but "Honor" + "Honor X5c Plus" stays "Honor X5c Plus" */
  const deviceName = (() => {
    const m = model.trim();
    if (brand && m.toLowerCase().startsWith(brand.toLowerCase())) return m;
    return [brand, m].filter(Boolean).join(' ') || deviceInfo?.label || 'Device';
  })();

  /* Selected repairs and their prices (after the Incl. TAX switch) */
  const selected = device ? REPAIRS[device].filter((r) => repairs.includes(r.key)) : [];
  const priceOf = (key: string) => {
    const p = prices[key];
    if (p == null) return undefined;
    return inclTax ? p : Math.round((p / (1 + TAX_RATE)) * 100) / 100;
  };
  const priceText = (key: string) => {
    const p = priceOf(key);
    return p != null ? money(p) : 'Price on request';
  };
  const pricedTotal = selected.reduce((sum, r) => sum + (priceOf(r.key) ?? 0), 0);
  const anyPriced = selected.some((r) => priceOf(r.key) != null);
  const onRequestCount = selected.filter((r) => priceOf(r.key) == null).length;
  const totalText = !selected.length ? '-' : anyPriced ? money(pricedTotal) : 'On request';
  const totalNote =
    anyPriced && onRequestCount
      ? `Plus ${onRequestCount} repair${onRequestCount > 1 ? 's' : ''} priced on request`
      : '';

  /* Finalize step: service method, date, totals */
  const todayKey = dayKey(new Date());
  const methodInfo = SERVICE_METHODS.find((m) => m.key === method) ?? null;
  const fee = methodInfo?.fee ?? 0;
  const grandTotal = pricedTotal + fee;
  const grandText = anyPriced || fee ? money2(grandTotal) : 'On request';
  const days = Array.from({ length: 8 }, (_, i) => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + dayStart + i);
    return d;
  });
  /* Today's slots that have already started can't be booked */
  const slotPast = (s: string, dateKey = custDate) => dateKey === todayKey && Number(s.slice(0, 2)) <= new Date().getHours();
  const chooseMethod = (k: MethodKey) => {
    setError('');
    setMethod((m) => (m === k ? null : k));
    if (k === 'callout' && !custDate) setCustDate(todayKey);
  };
  const chooseDate = (k: string) => {
    setCustDate(k);
    if (slot && slotPast(slot, k)) setSlot('');
  };

  /* "Get A Quote": send the chosen repairs and prices on WhatsApp */
  const getQuote = () => {
    const lines = [
      'Hi Mobile Quick Fix, could I get a quote please?',
      '',
      `Device: ${deviceName}`,
      `Repair: ${selected.map((r) => `${r.label} (${pricesLoading ? 'price on request' : priceText(r.key).toLowerCase()})`).join(', ') || 'Not sure'}`,
      anyPriced && !pricesLoading ? `Total: ${money(pricedTotal)}${onRequestCount ? ' + price on request' : ''}` : '',
    ].filter(Boolean);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
  };

  const bookNow = () => {
    if (!selected.length) {
      setRepairsOpen(true);
      setRepairHint('Pick at least one repair above to continue.');
      return;
    }
    setStep(3);
    scrollTop();
  };

  /* Back from Stripe without paying */
  useEffect(() => {
    if (params.get('cancelled') === '1') {
      setStep(3);
      setError('Payment cancelled. You have not been charged.');
    }
  }, [params]);

  /* Repairs priced "on request" can't be paid in full online, only the deposit */
  const canPayFull = pricesLoading || onRequestCount === 0;
  useEffect(() => {
    if (!canPayFull && payOption === 'full') setPayOption('deposit');
  }, [canPayFull, payOption]);

  /* When the customer wants the repair, in words */
  const whenText =
    method === 'callout' ? (custDate ? `${longDate(custDate)}${slot ? `, ${slot}` : ''}` : '')
    : form.when === 'Other' ? (form.otherDate ? `${longDate(form.otherDate)} at ${form.otherTime}` : '')
    : form.when;
  const payText = payOption === 'deposit'
    ? `deposit of ${money2(DEPOSIT)}, the rest after the repair`
    : `full amount of ${money2(grandTotal)}`;

  const bookingMessage = (paymentLine: string) => [
    'Hi Mobile Quick Fix, I’d like to book a repair.',
    '',
    `Device: ${deviceName}`,
    `Repair: ${selected.map((r) => `${r.label} (${priceText(r.key).toLowerCase()})`).join(', ') || 'Not sure'}`,
    `Service: ${methodInfo?.title} (${money2(fee)})`,
    `${method === 'callout' ? 'Appointment' : 'When'}: ${whenText}`,
    `Total: ${money2(grandTotal)}${onRequestCount ? ' + price on request' : ''}`,
    `Payment: ${paymentLine}`,
    '',
    `Customer: ${customerType === 'business' ? `Business (${form.company})` : 'Private'}`,
    `Name: ${form.firstName} ${form.lastName}`,
    `Phone: ${form.phone}`,
    `Email: ${form.email}`,
    `Address: ${form.house} ${form.street}, ${form.city}, ${form.postcode.toUpperCase()}, ${form.country}`,
    form.notes ? `Notes: ${form.notes}` : '',
  ].filter((l, i, a) => l !== '' || a[i - 1] !== '').join('\n');

  const sendWhatsApp = (paymentLine: string) => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(bookingMessage(paymentLine))}`, '_blank', 'noopener');
  };

  /* Checks the form. Returns true when everything is filled in correctly. */
  const validate = () => {
    const fail = (m: string) => { setError(m); return false; };
    const need: (keyof FormData)[] = ['firstName', 'lastName', 'phone', 'email'];
    if (customerType === 'business') need.push('company');
    if (method) need.push('house', 'street', 'city', 'postcode', 'country');
    if (method !== 'callout' && form.when === 'Other') need.push('otherDate', 'otherTime');
    const missing = need.filter((k) => !form[k].trim());
    const bad: string[] = [...missing];
    if (form.phone.trim() && !phoneOk(form.phone)) bad.push('phone');
    if (form.email.trim() && !emailOk(form.email)) bad.push('email');
    if (method && form.postcode.trim() && !postcodeOk(form.postcode)) bad.push('postcode');
    setInvalid(bad);

    if (!method) return fail('Please choose Postal Repair or Call-Out Repair.');
    if (method === 'callout' && (!custDate || !slot)) return fail('Please pick a date and time for your call-out.');
    if (missing.length) return fail('Please fill in the boxes marked in red.');
    if (bad.includes('phone')) return fail('Please check your phone number. It should be a UK number, like 07700 900123.');
    if (bad.includes('email')) return fail('Please check your email address.');
    if (bad.includes('postcode')) return fail('Please check your postcode, for example SW1A 1AA.');
    if (!terms) return fail('Please accept the terms & conditions.');
    setError('');
    return true;
  };

  /* Ask the Edge Function for a Stripe Checkout page, then go there */
  const payWithStripe = async () => {
    const failed = (why: string) => {
      setError(`${why} You can send your booking on WhatsApp instead.`);
      setPayFailed(true);
      setPaying(false);
    };
    if (!CHECKOUT_URL || !SUPABASE_KEY) return failed('Card payments aren’t switched on yet.');
    setPaying(true);
    setPayFailed(false);
    try {
      const headers: Record<string, string> = { 'Content-Type': 'application/json', apikey: SUPABASE_KEY };
      if (SUPABASE_KEY.startsWith('eyJ')) headers.Authorization = `Bearer ${SUPABASE_KEY}`;
      const res = await fetch(CHECKOUT_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          device, brand, model: model.trim(), deviceName, repairs, method, payOption,
          when: whenText,
          customer: {
            type: customerType, company: form.company, firstName: form.firstName, lastName: form.lastName,
            phone: form.phone, email: form.email, notes: form.notes,
            address: `${form.house} ${form.street}, ${form.city}, ${form.postcode.toUpperCase()}, ${form.country}`,
          },
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { url?: string; error?: string };
      if (!res.ok || !data.url) return failed(data.error ? `${data.error}.` : 'The payment page couldn’t be opened.');
      window.location.href = data.url;
    } catch {
      failed('The payment page couldn’t be opened.');
    }
  };

  const sendBooking = () => {
    if (paying || !validate()) return;
    payWithStripe();
  };

  /* After paying: clear everything for the next customer */
  const startOver = () => {
    try { sessionStorage.removeItem(SAVE_KEY); } catch { /* nothing to clear */ }
    window.location.href = window.location.pathname;
  };

  const heading =
    step === 1 ? <>Which <b>Gadget</b> do you have?</>
    : step === 2 ? <>Select your <b>repair</b></>
    : <>Finalize your <b>order</b></>;

  if (paidReturn) {
    return (
      <div className="bk-page">
        <div className="bk-wrap">
          <div className="bk-success">
            <span className="bk-success-icon"><FontAwesomeIcon icon={faCheck} /></span>
            <h1>Payment received</h1>
            <p>
              Thank you{form.firstName ? `, ${form.firstName}` : ''}! Your {methodInfo ? methodInfo.title : 'repair'} for
              the <b>{deviceName}</b> is booked{method === 'callout' && whenText ? ` for ${whenText}` : ''}.
            </p>
            <p className="bk-success-small">Your receipt will be emailed to you. Tap below to send us your booking details on WhatsApp so we can get started.</p>
            <button type="button" className="bk-confirm" onClick={() => sendWhatsApp(`Paid by card: ${payText}`)}>
              Send details on WhatsApp
            </button>
            <button type="button" className="bk-link bk-success-again" onClick={startOver}>Book another repair</button>
          </div>
        </div>
      </div>
    );
  }

  /* Phones get the Bootstrap version in HomePageMobile.tsx (same state and logic) */
  if (isMobile) {
    return (
      <HomePageMobile
        b={{
      step,
      setStep,
      device,
      setDevice,
      brand,
      setBrand,
      model,
      setModel,
      modelImg,
      setModelImg,
      otherModel,
      setOtherModel,
      modelSearch,
      setModelSearch,
      search,
      setSearch,
      searchOpen,
      setSearchOpen,
      activeHit,
      setActiveHit,
      hits,
      pickHit,
      handleSearch,
      showHelp,
      setShowHelp,
      loadingKey,
      withSpinner,
      scrollTop,
      goBack,
      deviceName,
      deviceInfo,
      repairs,
      toggleRepair,
      selected,
      priceOf,
      pricesLoading,
      repairHint,
      getQuote,
      bookNow,
      totalText,
      grandText,
      grandTotal,
      fee,
      methodInfo,
      method,
      chooseMethod,
      custDate,
      chooseDate,
      slot,
      setSlot,
      slotPast,
      days,
      dayStart,
      setDayStart,
      todayKey,
      orderOpen,
      setOrderOpen,
      form,
      setField,
      invalid,
      customerType,
      setCustomerType,
      payOption,
      setPayOption,
      canPayFull,
      terms,
      setTerms,
      error,
      payFailed,
      paying,
      payText,
      sendBooking,
      sendWhatsApp,
        }}
      />
    );
  }

  return (
    <div className={`bk-page ${step === 2 && selected.length ? 'has-mobile-bar' : ''}`}>
      <div className="bk-wrap">
        <h2 className="bk-page-title">Use the system below to get a price or book your repair!</h2>

        {/* Stepper */}
        <ol className="bk-stepper" aria-label="Booking progress">
          {STEPS.map(([a, b], i) => {
            const label = `${a} ${b}`;
            const n = i + 1;
            const state = n < step ? 'is-done' : n === step ? 'is-current' : '';
            const canGo = n < step;
            return (
              <li
                key={label}
                className={`bk-stepper-item ${state} ${canGo ? 'is-clickable' : ''}`}
                aria-current={n === step ? 'step' : undefined}
                role={canGo ? 'button' : undefined}
                tabIndex={canGo ? 0 : undefined}
                aria-label={canGo ? `Back to ${label}` : undefined}
                onClick={canGo ? () => goToStep(n as 1 | 2 | 3) : undefined}
                onKeyDown={canGo ? (e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    goToStep(n as 1 | 2 | 3);
                  }
                } : undefined}
              >
                <span className="bk-stepper-dot">{n}</span>
                <span className="bk-stepper-label">{a} <b>{b}</b></span>
              </li>
            );
          })}
        </ol>

        {/* Heading with back button. On the repair step it shows the chosen device. */}
        {step === 2 && device ? (
          <div className="bk-device-head">
            <button className="bk-back" onClick={goBack} aria-label="Go back">
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <span className="bk-device-pic">
              {modelImg ? (
                <ImgOr src={modelImg} alt="" className="bk-device-img">
                  <DeviceIcon k={device} />
                </ImgOr>
              ) : (
                <DeviceIcon k={device} />
              )}
            </span>
            <div className="bk-device-info">
              <h1 className="bk-device-title">{deviceName}</h1>
              <span className="bk-device-type">{deviceInfo?.label}</span>
            </div>
          </div>
        ) : step !== 3 ? (
          <div className="bk-heading">
            <button className="bk-back" onClick={goBack} aria-label="Go back">
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <h1>{heading}</h1>
          </div>
        ) : null}

        {/* ---------------- Step 1 ---------------- */}
        {step === 1 && (
          <>
            {!brand && (
              <div className="bk-search-panel">
                <form className="bk-search-main" onSubmit={handleSearch}>
                  <label htmlFor="bk-search" className="bk-lead">
                    <span className="bk-dot" />Start typing <b>Model name</b>, or <b>Model number</b> directly
                  </label>
                  <div className="bk-search">
                    <input
                      id="bk-search"
                      value={search}
                      onChange={(e) => { setSearch(e.target.value); setSearchOpen(true); setActiveHit(-1); }}
                      onFocus={() => setSearchOpen(true)}
                      onBlur={() => setSearchOpen(false)}
                      onKeyDown={(e) => {
                        if (!hits.length) return;
                        if (e.key === 'ArrowDown') { e.preventDefault(); setSearchOpen(true); setActiveHit((i) => (i + 1) % hits.length); }
                        else if (e.key === 'ArrowUp') { e.preventDefault(); setActiveHit((i) => (i <= 0 ? hits.length - 1 : i - 1)); }
                        else if (e.key === 'Escape') setSearchOpen(false);
                      }}
                      placeholder="11 Pro, or iPhone 11"
                      autoComplete="off"
                      role="combobox"
                      aria-expanded={searchOpen && hits.length > 0}
                      aria-controls="bk-suggest"
                      aria-activedescendant={activeHit >= 0 ? `bk-hit-${activeHit}` : undefined}
                    />
                    <button type="submit" aria-label="Search">
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                  </div>
                  {searchOpen && hits.length > 0 && (
                    <ul id="bk-suggest" className="bk-suggest" role="listbox">
                      {hits.map((h, i) => (
                        <li
                          key={`${h.device}:${h.brand}:${h.entry.name}`}
                          id={`bk-hit-${i}`}
                          role="option"
                          aria-selected={i === activeHit}
                          className={`bk-suggest-item ${i === activeHit ? 'is-active' : ''}`}
                          onMouseDown={(e) => e.preventDefault()}
                          onMouseEnter={() => setActiveHit(i)}
                          onClick={() => pickHit(h)}
                        >
                          <img src={h.entry.url} alt="" className="bk-suggest-img" loading="lazy" />
                          <span className="bk-suggest-text">
                            <span className="bk-suggest-name">{h.entry.name}</span>
                            <span className="bk-suggest-meta">{h.brand} · {deviceLabel(h.device)}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </form>
                <Tile className="bk-help-btn" onClick={() => setShowHelp(true)}>
                  <HelpPhoneIcon />
                  What model do I have?
                </Tile>
              </div>
            )}

            {!device && (
              <>
                <p className="bk-lead"><span className="bk-dot" />Or select your <b>Gadget type</b></p>
                <div className="bk-grid bk-grid-devices">
                  {DEVICES.map((d) => (
                    <Tile key={d.key} className={`bk-tile bk-tile-device ${loadingKey === d.key ? 'is-selected' : ''}`} onClick={() => withSpinner(d.key, () => setDevice(d.key))} label={d.label} busy={loadingKey === d.key}>
                      {loadingKey === d.key ? <span className="bk-spinner" aria-label="Loading" /> : (
                        <>
                          <DeviceIcon k={d.key} />
                          <span className="bk-device-label">{d.label}</span>
                        </>
                      )}
                    </Tile>
                  ))}
                </div>
              </>
            )}

            {device && !brand && (
              <>
                <p className="bk-lead"><span className="bk-dot" />Select a <b>Brand</b></p>
                <div className="bk-grid bk-grid-brands">
                  {brandsFor(device).map((b) => (
                    <Tile key={b} className={`bk-tile bk-tile-brand ${loadingKey === b ? 'is-selected' : ''}`} onClick={() => withSpinner(b, () => { setBrand(b); setOtherModel(false); setModelSearch(''); scrollTop(); })} label={b} busy={loadingKey === b}>
                      {loadingKey === b ? <span className="bk-spinner" aria-label="Loading" /> : (
                        <ImgOr src={brandLogo(b, device)} alt={b} className="bk-brand-logo">
                          {b}
                        </ImgOr>
                      )}
                    </Tile>
                  ))}
                </div>
              </>
            )}

            {device && brand && MODELS[`${device}:${brand}`] && !otherModel && (() => {
              const list = MODELS[`${device}:${brand}`];
              const q = modelSearch.trim();
              const shown = q ? list.filter((m) => modelMatches(m.name, q)) : list;
              /* Same order as the reference: help tile first, "Other Model" starts row two.
                 While searching, only the help tile and the matches are shown. */
              const items: ('__help' | '__other' | ModelEntry)[] = q
                ? ['__help', ...shown]
                : ['__help', ...shown.slice(0, 4), '__other', ...shown.slice(4)];
              return (
                <>
                  <div className="bk-models-head">
                    <h2 className="bk-models-title">
                      Supported Models
                      <span className="bk-count">{shown.length}</span>
                      {q && <span className="bk-total">{list.length} Total</span>}
                    </h2>
                    <label className="bk-model-search">
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                      <input
                        ref={modelSearchRef}
                        value={modelSearch}
                        onChange={(e) => setModelSearch(e.target.value)}
                        placeholder="Start typing or Select one"
                        aria-label={`Search ${brand} models`}
                        autoComplete="off"
                      />
                    </label>
                  </div>

                  <div className="bk-grid bk-grid-models">
                    {items.map((m) => {
                      if (m === '__help') return (
                        <Tile key="__help" className="bk-tile bk-tile-model bk-tile-model-help" onClick={() => setShowHelp(true)} label="What model do I have?">
                          <HelpPhoneIcon className="bk-model-help-icon" />
                          <span className="bk-model-help-text">What model do I have?</span>
                        </Tile>
                      );
                      if (m === '__other') return (
                        <Tile
                          key="__other"
                          className={`bk-tile bk-tile-model ${loadingKey === '__other' ? 'is-selected' : ''}`}
                          onClick={() => withSpinner('__other', () => { setModel(''); setModelImg(null); setOtherModel(true); })}
                          label="Other model"
                          busy={loadingKey === '__other'}
                        >
                          {loadingKey === '__other' ? <span className="bk-spinner" aria-label="Loading" /> : (
                            <>
                              <span className="bk-model-pic"><OtherPhoneIcon /></span>
                              <span className="bk-model-name">Other Model</span>
                              <span className="bk-model-sub">Can’t Find My Model!</span>
                            </>
                          )}
                        </Tile>
                      );
                      return (
                        <Tile
                          key={m.name}
                          className={`bk-tile bk-tile-model ${loadingKey === m.name ? 'is-selected' : ''}`}
                          onClick={() => withSpinner(m.name, () => { setModel(m.name); setModelImg(m.url); setStep(2); scrollTop(); })}
                          label={m.name}
                          busy={loadingKey === m.name}
                        >
                          {loadingKey === m.name ? <span className="bk-spinner" aria-label="Loading" /> : (
                            <>
                              <span className="bk-model-pic">
                                <ImgOr src={m.url} alt="" className="bk-model-img">
                                  <DeviceIcon k={device} />
                                </ImgOr>
                              </span>
                              <span className="bk-model-name">{m.name}</span>
                            </>
                          )}
                        </Tile>
                      );
                    })}
                  </div>

                  {q && shown.length === 0 && (
                    <p className="bk-no-match">
                      No {brand} model matches “{modelSearch}”.{' '}
                      <button className="bk-link" onClick={() => { setModel(modelSearch); setModelImg(null); setOtherModel(true); }}>
                        Book it as “{modelSearch}”
                      </button>
                    </p>
                  )}
                </>
              );
            })()}

            {device && brand && (!MODELS[`${device}:${brand}`] || otherModel) && (
              <div className="bk-card">
                <label htmlFor="bk-model" className="bk-lead">
                  <span className="bk-dot" />{otherModel ? 'Type your model' : 'Model (optional, helps us bring the right part)'}
                </label>
                <input
                  id="bk-model"
                  className="bk-input"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  placeholder={deviceInfo?.modelHint}
                />
                <div className="bk-row">
                  <button className="bk-link" onClick={() => setShowHelp(true)}>How do I find my model?</button>
                  <button className="bk-primary" onClick={() => { setStep(2); scrollTop(); }}>Continue</button>
                </div>
              </div>
            )}
          </>
        )}

        {/* ---------------- Step 2 ---------------- */}
        {step === 2 && device && (
          <>
          <div className="bk-repair-layout">
            <div className="bk-repair-main">
              <div className="bk-repair-top">
                <p className="bk-lead bk-repair-lead"><span className="bk-dot" />Select <b>repair</b></p>
                <label className="bk-tax">
                  {/* <span>Incl. TAX</span> */}
                  {/* <input type="checkbox" role="switch" checked={inclTax} onChange={(e) => setInclTax(e.target.checked)} /> */}
                  {/* <span className="bk-switch" aria-hidden="true" /> */}
                </label>
              </div>

              <Tile
                className="bk-repair-group"
                onClick={() => setRepairsOpen((o) => !o)}
                expanded={repairsOpen}
                label={`${REPAIR_GROUP_TITLE[device]}, ${REPAIRS[device].length} repairs`}
              >
                <span className="bk-repair-group-icon"><DeviceIcon k={device} /></span>
                <span className="bk-repair-group-title">{REPAIR_GROUP_TITLE[device]}</span>
                <span className="bk-repair-group-count">{REPAIRS[device].length} repairs</span>
                <FontAwesomeIcon icon={faChevronRight} className="bk-repair-group-chev" />
              </Tile>

              {repairsOpen && (
                <div className="bk-repair-list">
                  {REPAIRS[device].map((r) => {
                    const on = repairs.includes(r.key);
                    const p = priceOf(r.key);
                    return (
                      <Tile key={r.key} className={`bk-repair-card ${on ? 'is-selected' : ''}`} pressed={on} onClick={() => toggleRepair(r.key)}>
                        <span className="bk-check" aria-hidden="true" />
                        <span className="bk-repair-text">
                          <strong>{r.label}</strong>
                          {r.sub && <small>{r.sub}</small>}
                        </span>
                        {pricesLoading ? (
                          <span className="bk-price is-loading" aria-label="Loading price">…</span>
                        ) : p != null ? (
                          <span className="bk-price has-price" aria-label={money(p)}><sup>£</sup>{amount(p)}</span>
                        ) : (
                          <span className="bk-price">price on<br />request</span>
                        )}
                      </Tile>
                    );
                  })}
                </div>
              )}

              {repairHint && <p className="bk-error bk-repair-hint" role="alert">{repairHint}</p>}
            </div>

            <aside className="bk-quote" aria-live="polite">
              <h2 className="bk-quote-title">Service(s) Selected</h2>
              <p className="bk-quote-device">{deviceName}</p>

              {selected.length > 0 && (
                <ul className="bk-quote-list">
                  {selected.map((r) => (
                    <li key={r.key}>
                      <span>{r.label}</span>
                      <span className="bk-quote-right">
                        <span className="bk-quote-price">{pricesLoading ? '…' : priceText(r.key)}</span>
                        <button type="button" className="bk-quote-remove" onClick={() => toggleRepair(r.key)} aria-label={`Remove ${r.label}`}>
                          <FontAwesomeIcon icon={faXmark} />
                        </button>
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="bk-quote-row">
                <span>sub-total</span>
                <span>{selected.length && anyPriced ? money(pricedTotal) : '-'}</span>
              </div>

              <div className="bk-quote-total">
                <span>Total</span>
                <span>{pricesLoading && selected.length ? '…' : totalText}</span>
              </div>
              {totalNote && !pricesLoading && <p className="bk-quote-note">{totalNote}</p>}

              <button type="button" className="bk-quote-btn" onClick={getQuote}>
                <b>Get A Quote</b>
                <small>Send your repairs to us on WhatsApp</small>
              </button>
              <button type="button" className="bk-book-btn" onClick={bookNow}>
                <b>Book Repair Now</b>
                <small>{selected.length ? 'Next: your details' : 'Select which service?'}</small>
              </button>
            </aside>
          </div>

          {selected.length > 0 && (
            <div className="bk-mobile-bar">
              <div className="bk-mobile-bar-info">
                <small>{selected.length} repair{selected.length > 1 ? 's' : ''} selected</small>
                <b>{pricesLoading ? '…' : totalText}</b>
              </div>
              <button type="button" className="bk-mobile-bar-btn" onClick={bookNow}>Book Repair Now</button>
            </div>
          )}
          </>
        )}

        {/* ---------------- Step 3: Finalize appointment ---------------- */}
        {step === 3 && device && (
          <div className="bk-fin">
            {/* Left: service method */}
            <div className="bk-fin-left">
              <div className="bk-heading bk-fin-heading">
                <button className="bk-back" onClick={goBack} aria-label="Go back">
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <h1>Finalize <b>appointment</b></h1>
              </div>

              <h3 className="bk-fin-label">Select Service Method</h3>

              {SERVICE_METHODS.map((m) => {
                const on = method === m.key;
                return (
                  <div key={m.key} className={`bk-method ${on ? 'is-selected' : ''}`}>
                    <Tile className="bk-method-head" onClick={() => chooseMethod(m.key)} pressed={on} label={`${m.title}, ${money2(m.fee)}`}>
                      <MethodIcon k={m.key} />
                      <span className="bk-method-text">
                        <span className="bk-method-title">{m.title} <span className="bk-badge">{money2(m.fee)}</span></span>
                        <span className="bk-method-sub">{m.sub}</span>
                      </span>
                      <Check on={on} />
                    </Tile>

                    {on && (
                      <div className="bk-method-body">
                        {m.key === 'callout' && (
                          <>
                            <div className="bk-line">
                              <span className="bk-line-dot" />
                              <span>Select <b>Date</b></span>
                              <span className="bk-line-rule" />
                              <button type="button" className="bk-arrow" onClick={() => setDayStart((d) => Math.max(0, d - 8))} disabled={dayStart === 0} aria-label="Earlier dates">
                                <FontAwesomeIcon icon={faChevronLeft} />
                              </button>
                              <button type="button" className="bk-arrow" onClick={() => setDayStart((d) => Math.min(56, d + 8))} disabled={dayStart >= 56} aria-label="Later dates">
                                <FontAwesomeIcon icon={faChevronRight} />
                              </button>
                            </div>
                            <div className="bk-days">
                              {days.map((d) => {
                                const k = dayKey(d);
                                return (
                                  <Tile key={k} className={`bk-day ${custDate === k ? 'is-selected' : ''}`} pressed={custDate === k} onClick={() => chooseDate(k)} label={longDate(k)}>
                                    <span>{d.toLocaleDateString('en-GB', { weekday: 'short' })}</span>
                                    <b>{String(d.getDate()).padStart(2, '0')}</b>
                                  </Tile>
                                );
                              })}
                            </div>

                            <div className="bk-line">
                              <span className="bk-line-dot" />
                              <span>Select <b>Time</b></span>
                              <span className="bk-line-rule" />
                            </div>
                            <div className="bk-slots">
                              {CALLOUT_SLOTS.map((t) => {
                                const past = slotPast(t);
                                return (
                                  <Tile
                                    key={t}
                                    className={`bk-slot ${slot === t ? 'is-selected' : ''} ${past ? 'is-disabled' : ''}`}
                                    pressed={slot === t}
                                    onClick={() => { if (!past) setSlot(t); }}
                                    label={past ? `${t}, no longer available today` : t}
                                  >
                                    {t}
                                  </Tile>
                                );
                              })}
                            </div>
                          </>
                        )}

                        <div className="bk-line">
                          <span className="bk-line-dot" />
                          <span>Your <b>Address</b></span>
                          <span className="bk-line-rule" />
                        </div>
                        <div className="bk-fl-grid">
                          <Field id="f-house" label="House number" required invalid={invalid.includes('house')}>
                            <input id="f-house" className="bk-fl-input" value={form.house} onChange={(e) => setField('house', e.target.value)} autoComplete="address-line1" />
                          </Field>
                          <Field id="f-street" label="Streetname" required invalid={invalid.includes('street')}>
                            <input id="f-street" className="bk-fl-input" value={form.street} onChange={(e) => setField('street', e.target.value)} autoComplete="address-line2" />
                          </Field>
                          <Field id="f-city" label="City" required invalid={invalid.includes('city')}>
                            <input id="f-city" className="bk-fl-input" value={form.city} onChange={(e) => setField('city', e.target.value)} autoComplete="address-level2" />
                          </Field>
                          <Field id="f-post" label="Postcode" required invalid={invalid.includes('postcode')}>
                            <input id="f-post" className="bk-fl-input" value={form.postcode} onChange={(e) => setField('postcode', e.target.value.toUpperCase())} autoComplete="postal-code" />
                          </Field>
                          <Field id="f-country" label="Country" required full invalid={invalid.includes('country')}>
                            <select id="f-country" className="bk-fl-input" value={form.country} onChange={(e) => setField('country', e.target.value)} autoComplete="country-name">
                              <option value="">-- Select --</option>
                              {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
                            </select>
                          </Field>
                        </div>

                        {m.key === 'postal' && (
                          <div className="bk-post-addr">
                            <span className="bk-post-area">{POSTAL_ADDRESS.area}</span>
                            <span className="bk-post-lines">
                              {POSTAL_ADDRESS.lines.map((l) => <span key={l}>{l}</span>)}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right: order summary and your details */}
            <div className="bk-fin-right">
              <div className="bk-fin-device">
                <span className="bk-fin-pic">
                  {modelImg ? (
                    <ImgOr src={modelImg} alt="" className="bk-fin-img">
                      <DeviceIcon k={device} />
                    </ImgOr>
                  ) : (
                    <DeviceIcon k={device} />
                  )}
                </span>
                <div>
                  <h2 className="bk-fin-name">{deviceName}</h2>
                  <span className="bk-fin-sub">repair</span>
                </div>
              </div>

              <div className="bk-order" id="bk-order">
                <p className="bk-order-device">{deviceName}</p>

                {orderOpen && (
                  <>
                    <ul className="bk-order-lines">
                      {selected.map((r) => {
                        const p = priceOf(r.key);
                        return (
                          <li key={r.key}>
                            <span>{r.label}</span>
                            <span className="bk-order-box">{pricesLoading ? '…' : p != null ? money2(p).slice(2) : 'On request'}</span>
                          </li>
                        );
                      })}
                      {methodInfo && (
                        <li>
                          <span>{methodInfo.title}</span>
                          <span className="bk-order-box">{money2(fee).slice(2)}</span>
                        </li>
                      )}
                    </ul>
                    <div className="bk-order-row">
                      <span>sub-total</span>
                      <span>{money2(grandTotal).slice(2)}</span>
                    </div>
                  </>
                )}

                <div className="bk-order-total">
                  <span>Total</span>
                  <span>{pricesLoading ? '…' : grandText}</span>
                </div>
                {onRequestCount > 0 && !pricesLoading && (
                  <p className="bk-order-note">+ {onRequestCount} repair{onRequestCount > 1 ? 's' : ''} priced on request</p>
                )}

                <div className="bk-order-method">
                  {methodInfo ? (
                    <>
                      <span>{methodInfo.title}</span>
                      {method === 'callout' && custDate && (
                        <b>
                          Appointment on {longDate(custDate)}
                          {slot && <><br />at {slot}</>}
                        </b>
                      )}
                    </>
                  ) : (
                    <span></span>
                  )}
                </div>
              </div>
              <button type="button" className="bk-order-toggle" onClick={() => setOrderOpen((o) => !o)} aria-expanded={orderOpen} aria-controls="bk-order">
                {orderOpen ? 'hide order' : 'view order'}
              </button>

              <div className="bk-fin-form">
                <div className="bk-cb-group">
                  <Tile className="bk-cb-row" onClick={() => setCustomerType('private')} pressed={customerType === 'private'}>
                    <Check on={customerType === 'private'} />Private
                  </Tile>
                  <Tile className="bk-cb-row" onClick={() => setCustomerType('business')} pressed={customerType === 'business'}>
                    <Check on={customerType === 'business'} />Business
                  </Tile>
                </div>

                <div className="bk-fl-grid">
                  {customerType === 'business' && (
                    <Field id="f-company" label="Company name" required full invalid={invalid.includes('company')}>
                      <input id="f-company" className="bk-fl-input" value={form.company} onChange={(e) => setField('company', e.target.value)} autoComplete="organization" />
                    </Field>
                  )}
                  <Field id="f-first" label="First name" required invalid={invalid.includes('firstName')}>
                    <input id="f-first" className="bk-fl-input" value={form.firstName} onChange={(e) => setField('firstName', e.target.value)} autoComplete="given-name" />
                  </Field>
                  <Field id="f-last" label="Last name" required invalid={invalid.includes('lastName')}>
                    <input id="f-last" className="bk-fl-input" value={form.lastName} onChange={(e) => setField('lastName', e.target.value)} autoComplete="family-name" />
                  </Field>
                  <Field id="f-phone" label="Phone number" required invalid={invalid.includes('phone')}>
                    <input id="f-phone" className="bk-fl-input" type="tel" inputMode="tel" value={form.phone} onChange={(e) => setField('phone', e.target.value)} autoComplete="tel" />
                  </Field>
                  <Field id="f-email" label="Email" required invalid={invalid.includes('email')}>
                    <input id="f-email" className="bk-fl-input" type="email" inputMode="email" value={form.email} onChange={(e) => setField('email', e.target.value)} autoComplete="email" />
                  </Field>

                  {method !== 'callout' && (
                    <>
                      <Field id="f-when" label="When suits you?" full>
                        <select id="f-when" className="bk-fl-input" value={form.when} onChange={(e) => setField('when', e.target.value)}>
                          {WHEN_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                        </select>
                      </Field>
                      {form.when === 'Other' && (
                        <>
                          <Field id="f-odate" label="Date" required invalid={invalid.includes('otherDate')}>
                            <input id="f-odate" className="bk-fl-input" type="date" min={todayKey} value={form.otherDate} onChange={(e) => setField('otherDate', e.target.value)} />
                          </Field>
                          <Field id="f-otime" label="Time" required invalid={invalid.includes('otherTime')}>
                            <input id="f-otime" className="bk-fl-input" type="time" value={form.otherTime} onChange={(e) => setField('otherTime', e.target.value)} />
                          </Field>
                        </>
                      )}
                    </>
                  )}

                  <Field id="f-notes" label="Notes" full>
                    <textarea id="f-notes" className="bk-fl-input" rows={4} value={form.notes} onChange={(e) => setField('notes', e.target.value)} />
                  </Field>
                </div>

                {methodInfo && (
                  <>
                    <h3 className="bk-fin-h">Select Payment Option <span className="bk-req">*</span></h3>
                    <div className="bk-pay">
                      <Tile className="bk-pay-row" onClick={() => setPayOption('deposit')} pressed={payOption === 'deposit'}>
                        <Check on={payOption === 'deposit'} />
                        <span className="bk-pay-text">
                          <b>Pay only the deposit – {money2(DEPOSIT)} now</b>
                          <small>Pay the remaining amount after the repair</small>
                        </span>
                      </Tile>
                      <Tile className={`bk-pay-row ${canPayFull ? '' : 'is-disabled'}`} onClick={() => { if (canPayFull) setPayOption('full'); }} pressed={payOption === 'full'}>
                        <Check on={payOption === 'full'} />
                        <span className="bk-pay-text">
                          <b>Pay the full amount – {money2(grandTotal)} now</b>
                          <small>{canPayFull ? 'No payment due after the repair' : 'Not available: a repair is priced on request'}</small>
                        </span>
                      </Tile>
                    </div>

                    <h3 className="bk-fin-h">Select Payment Method <span className="bk-req">*</span></h3>
                    <div className="bk-paymethod">
                      <span className="bk-radio" aria-hidden="true" />
                      <span className="bk-paymethod-text">Secure Card Payment via Stripe</span>
                      <span className="bk-paylogos">
                        <ImgOr src="/images/payments/payment-logos.png" alt="Visa, Mastercard and 21 more" className="bk-paylogos-img">
                          <span className="bk-paylogo bk-paylogo-text">Visa · Mastercard +21</span>
                        </ImgOr>
                      </span>
                    </div>
                  </>
                )}

                <Tile className="bk-cb-row bk-terms" onClick={() => setTerms((t) => !t)} pressed={terms}>
                  <Check on={terms} />
                  <span>
                    I accept the{' '}
                    <a href={TERMS_URL} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>terms &amp; conditions</a>
                  </span>
                </Tile>

                <p className="bk-fin-total">Total <b>{grandText}</b></p>
                {error && <p className="bk-error bk-fin-error" role="alert">{error}</p>}

                <div className="bk-fin-actions">
                  <button type="button" className="bk-confirm" onClick={sendBooking} disabled={paying}>
                    {paying ? 'Opening secure payment…' : <>Confirm Appointment <FontAwesomeIcon icon={faCaretRight} /></>}
                  </button>
                </div>
                {payFailed && (
                  <p className="bk-fin-call">
                    <button type="button" className="bk-link" onClick={() => sendWhatsApp(`not paid yet, would like to pay the ${payText}`)}>
                      Send my booking on WhatsApp instead
                    </button>
                  </p>
                )}
                <p className="bk-fin-call">Prefer to talk? <a href={PHONE_TEL}>Call {PHONE_DISPLAY}</a></p>
              </div>
            </div>
          </div>
        )}
      </div>

      {showHelp && <ModelHelp onClose={() => setShowHelp(false)} />}
    </div>
  );
};

export default BookingPage;

