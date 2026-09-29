// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from './Header';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
// import './HomePageDesktop.css';

// const chevronDown = 'https://gpcdcgwgkciyogknekwp.supabase.co/storage/v1/object/public/pharmacy//chevron%20down.png';
// const ACCENT = '#00D364';
// const PRIMARY = '#0A1F44';
// const TEXT = '#1C2B39';

// const NAV_LINKS: Record<string,string> = {
//   'All Services': '/services?tab=ALL',
//   'Travel Clinic': '/services?tab=TRAVEL',
//   'Private Treatments': '/services?tab=PRIVATE',
//   'NHS Treatments': '/services?tab=NHS',
//   'Pharmacy First': '/services?tab=PHARMACY',
// };

// const HERO_CARD_LINKS: Record<string,string> = {
//   'Ear Piercing': '/book/46',
//   'Travel Clinic': '/travel-clinic',
//   'Ear Wax Removal': '/microsuction-earwax-removal',
// };

// const browseOptions = Object.keys(NAV_LINKS);

// const popularServices = [
//   {
//     title: 'Weight loss clinic',
//     link: '/weight-loss-clinic',
//     sub: 'Achieve your weight goals.',
//     img:
//       'https://gpcdcgwgkciyogknekwp.supabase.co/storage/v1/object/public/pharmacy/weightclinic.jpg',
//   },
//   {
//     title: 'Ear Wax Removal',
//     link: '/book/18',
//     sub: 'Safe microsuction for clear, comfortable ears.',
//     img:
//     'https://lead-services-agency.fra1.cdn.digitaloceanspaces.com/4/123156/AHHct1yZUR.webp',
//   },
//   {
//     title: 'Travel Vaccinations',
//     link: '/travel-clinic',
//     sub: 'Comprehensive vaccine service for your trip.',
//     img:
//     'https://focus.independent.ie/thumbor/kZpypGnMeOe4CqXsAfQrkN28nCk=/0x8:1500x835/731x411/prod-mh-ireland/058221aa-c2c3-11ed-8d5b-0210609a3fe2.jpg',
//   },
//   {
//     title: 'Vitamin B12 Injection',
//     link: '/book/6',
//     sub: 'Restore energy and improve vitality.',
//     img:
//     'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fservices%2Fvitamin-b12-injection.webp&w=640&q=75',
//   },
//   {
//     title: 'Oral Contraception',
//     link: '/oral-contraceptives',
//     sub: 'Fast, confidential help when you need it.',
//     img:
//     'https://gpcdcgwgkciyogknekwp.supabase.co/storage/v1/object/public/pharmacy/pic.png',
//   },
//   {
//     title: 'Erectile dysfunction',
//     link: '/book/20',
//     sub: 'Effective solutions tailored to your needs.',
//     img:
//       'https://gpcdcgwgkciyogknekwp.supabase.co/storage/v1/object/public/pharmacy/ed.jpeg',
//   },
// ];
// const covidvaccine = [
//   {
//     title: 'COVID vaccine',
//     link: '/book/16',
//     sub: 'Free COVID-19 booster for eligible patients (over 75).',
//     img:
//       'https://lead-services-agency.fra1.cdn.digitaloceanspaces.com/4/542160/8ruIf7vdRW.webp',
//   },
//   {
//     title: 'Flu jab',
//     link: '/book/14',
//     sub: 'Free NHS flu jab to keep you protected.',
//     img:
//     'https://lead-services-agency.fra1.cdn.digitaloceanspaces.com/4/101404/2-EtcvQ5-J.webp',
//   },
//   {
//     title: 'Private COVID-19 Vaccination',
//     link: '/book/45',
//     sub: 'Private COVID-19 Vaccination - £75 per dose',
//     img:
//     'https://aylestonepharmacy.co.uk/wp-content/uploads/2025/10/senior-male-patient-getting-vaccinated-coronavirus-scaled.jpg',
//   },
 
// ];


// const pharmacyFirst = [
//   {
//     title: 'Sinusitis',
//     link: '/book/21',
//     img:
//       'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fpharmacy-first%2Fsinusitis.webp&w=1200&q=75',
//     subtitle: 'Ages 12+',
//   },
//   {
//     title: 'Sore throat',
//     link: '/book/2',
//     img:
//       'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fpharmacy-first%2Fsore-throat.webp&w=1200&q=75',
//     subtitle: 'Ages 5+',
//   },
//   {
//     title: 'Earache',
//     link: '/book/19',
//     img:
//       'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fpharmacy-first%2Fearache.webp&w=1200&q=75',
//     subtitle: 'Ages 1–17',
//   },
//   {
//     title: 'Infected insect bite',
//     link: '/book/8',
//     img:
//       'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fpharmacy-first%2Finsect-bite.webp&w=1200&q=75',
//     subtitle: 'Ages 1+',
//   },
//   {
//     title: 'Impetigo',
//     link: '/book/7',
//     img:
//       'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fpharmacy-first%2Fimpetigo.webp&w=1200&q=75',
//     subtitle: 'Ages 1+',
//   },
//   {
//     title: 'Shingles',
//     link: '/book/44',
//     img:
//       'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fpharmacy-first%2Fshingles.webp&w=1200&q=75',
//     subtitle: 'Ages 18+',
//   },
//   {
//     title: 'Uncomplicated UTI (women)',
//     link: '/book/5',
//     img:
//       'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fpharmacy-first%2Futi.webp&w=1200&q=75',
//     subtitle: 'Women aged 16–64',
//   },
// ];

// export default function HomePageDesktop() {
//   const [sel, setSel] = useState('All Services');
//   const [pfIndex, setPfIndex] = useState(0);
//   const navigate = useNavigate();

//   const onBrowse = (e:React.ChangeEvent<HTMLSelectElement>) => {
//     setSel(e.target.value);
//     if (NAV_LINKS[e.target.value]) navigate(NAV_LINKS[e.target.value]);
//   };

//   return (
//     <>
//       <Header />
//       <main className="desktop-page">
//         <section className="hero-section">
//           <div className="hero-text">
//             <h1>
//               Trusted <span style={{color:ACCENT}}>Pharmacy</span><br/>
//               Care in Coleshill
//             </h1>
//             <p>Explore our wide range of treatments or consult with our medical professionals.</p>
//             <div className="hero-controls">
//               <select value={sel} onChange={onBrowse} className="browse-select">
//                 {browseOptions.map(o=>(
//                   <option key={o} value={o}>{o}</option>
//                 ))}
//               </select>
//               <button
//                 className="btn-get-started"
//                 onClick={()=>navigate(NAV_LINKS[sel]||NAV_LINKS['All Services'])}
//               >
//                 Get Started Now
//               </button>
//             </div>
//             <div className="hero-rating">
//               <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_74x24dp.png"
//                    alt="Google logo"/>
//               <span>★★★★★ 4.3/5.0</span>
//             </div>
//           </div>
//            {/* …above */}
           
//            <div className="hero-cards">
//   {/* Big featured card on the left */}
//   <div
//     className="card featured-card"
//     onClick={() => navigate(HERO_CARD_LINKS['Ear Piercing'])}
//   >
//     <div className="card-image">
//       <img
//         src="https://media.istockphoto.com/id/1500832940/photo/pharmacist-uses-a-specialized-piercing-gun-to-create-a-new-earlobe-piercing.jpg?s=612x612&w=0&k=20&c=xd0ka7W4LjBrgcc7otBcS4UbbwXFEzAycc08GfZ_kfo="
//         alt="Ear Piercing"
//       />
//       <div className="card-overlay"></div>
//     </div>
//     <div className="card-footer">
//       <h4>Ear Piercing</h4>
//       <FontAwesomeIcon icon={faChevronRight} />
//     </div>
//   </div>

//   {/* Two smaller cards stacked vertically on the right */}
//   <div className="side-cards">
//     {['Travel Clinic', 'Ear Wax Removal'].map((key) => {
//       const imgUrl = key === 'Ear Wax Removal'
//         ? 'https://clearclinics.co.uk/wp-content/uploads/2023/10/earwax-removal-1024x561.jpg'
//         : 'https://focus.independent.ie/thumbor/kZpypGnMeOe4CqXsAfQrkN28nCk=/0x8:1500x835/731x411/prod-mh-ireland/058221aa-c2c3-11ed-8d5b-0210609a3fe2.jpg';
//       return (
//         <div
//           key={key}
//           className="card side-card"
//           onClick={() => navigate(HERO_CARD_LINKS[key])}
//         >
//           <div className="card-image">
//             <img src={imgUrl} alt={key} />
//             <div className="card-overlay"></div>
//           </div>
//           <div className="card-footer">
//             <h5>{key}</h5>
//             <FontAwesomeIcon icon={faChevronRight} />
//           </div>
//         </div>
//       );
//     })}
//   </div>
// </div>
//         </section>

//         <section className="popular-services">
//           <header>
//             <h2>Popular services</h2>
//             <button className="btn-start-sm" onClick={()=>navigate('/services')}>
//               See all services →
//             </button>
//           </header>
//           <div className="grid-3">
//             {popularServices.map(svc=>(
//               <div
//                 key={svc.title}
//                 className="card svc-card"
//                 onClick={()=>navigate(svc.link)}
//               >
//                 <div className="svc-img">
//                   <img src={svc.img} alt={svc.title}/>
//                 </div>
//                 <div className="svc-body">
//                   <h5>{svc.title}</h5>
//                   <p>{svc.sub}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="pharmacy-first">
//           <header>
//             <h2>Pharmacy First treatments</h2>
//             <div className="pf-controls">
//               <button
//                 onClick={()=>setPfIndex(i=>Math.max(0,i-1))}
//                 disabled={pfIndex===0}
//               >←</button>
//               <button
//                 onClick={()=>setPfIndex(i=>Math.min(pharmacyFirst.length-3,i+1))}
//                 disabled={pfIndex>=pharmacyFirst.length-3}
//               >→</button>
//             </div>
//           </header>
//           <div className="pf-track" style={{transform:`translateX(-${pfIndex*276}px)`}}>
//             {pharmacyFirst.map(svc=>(
//               <div key={svc.title} className="card pf-card" onClick={()=>navigate(svc.link)}>
//                 <div className="pf-img"><img src={svc.img} alt={svc.title}/></div>
//                 <div className="pf-body">
//                   <h5>{svc.title}</h5>
//                   <small>{svc.subtitle}</small>
//                   <button className="btn-start-sm2">Get started</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

            
//             <section className="popular-services">
//           <header>
//             <h2>Free NHS vaccination</h2>
//             {/* <button className="btn-start-sm" onClick={()=>navigate('/services')}>
//               See all services →
//             </button> */}
//           </header>
//           <div className="grid-3">
//             {covidvaccine.map(svc=>(
//               <div
//                 key={svc.title}
//                 className="card svc-card"
//                 onClick={()=>navigate(svc.link)}
//               >
//                 <div className="svc-img">
//                   <img src={svc.img} alt={svc.title}/>
//                 </div>
//                 <div className="svc-body">
//                   <h5>{svc.title}</h5>
//                   <p>{svc.sub}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="find-us">
//           <h2 style={{fontWeight: 700 }}>Find us</h2>
//           <div className="row align-items-center mt-4">
//             <div className="col-md-6">
//               <p>
//                 Contact us for travel vaccination, ear wax removal and a wide
//                 range of NHS or private services we offer.
//               </p>
//               <p>
//                 <strong>Phone:</strong> 01675 466014
//               </p>
//               <p>
//                 <strong>Email:</strong> coleshillpharmacy@gmail.com
//               </p>
//               <p>
//                 <strong>Address:</strong> 114–116 High St, Coleshill, Birmingham
//                 B46 3BJ
//               </p>
//               <p>
//                 <strong>Hours:</strong>
//                 <br />
//                 Monday–Friday 8:30 am–6 pm
//                 <br />
//                 Saturday 9 am–5:30 pm
//                 <br />
//                 Sunday Closed
//               </p>
//             </div>
//             <div className="col-md-6">
//               <iframe
//                 title="Coleshill Pharmacy Location"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.123456789!2d-1.7890123!3d52.5654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48776789abcdef12:0x3456789abcdef!2s114-116%20High%20St,%20Coleshill%20B46%203BJ,%20UK!5e0!3m2!1sen!2suk!4v1623456789012"
//                 width="100%"
//                 height="300"
//                 style={{ border: 0, borderRadius: '0.5rem', marginBottom: '30px' }}
//                 allowFullScreen
//                 loading="lazy"
//               />
//             </div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }
// / <reference types="vite/client" />
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


// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone, faCommentDots } from '@fortawesome/free-solid-svg-icons';
// import './HomePageDesktop.css';

// /* ------------------------------------------------------------------
//    Business details — replace the TODO placeholders before going live
// ------------------------------------------------------------------- */
// const PHONE_DISPLAY = '07572 424207';
// const PHONE_TEL = 'tel:+447572424207';
// const WHATSAPP_URL = 'https://wa.me/447572424207';

// /* Images live in /public/images (cut from the flyer) */
// const IMG = '/images/';

// const services = [
//   { img: 'mqf-service-1.jpg', label: 'Screen repairs' },
//   { img: 'mqf-service-2.jpg', label: 'Battery replacement' },
//   { img: 'mqf-service-3.jpg', label: 'Water damage' },
//   { img: 'mqf-service-4.jpg', label: 'General repairs' },
//   { img: 'mqf-service-5.jpg', label: 'All mobile brands' },
//   { img: 'mqf-service-6.jpg', label: 'Charging port repair' },
// ];

// export default function MobileQuickFix() {
//   return (
//     <div className="mq-page">
//       <h1 className="mq-sr">Mobile Quick Fix: fast, reliable, professional phone repairs at your door</h1>

//       {/* Desktop and tablet: the flyer exactly as designed */}
//       <section className="mq-flyer">
//         <img
//           src={`${IMG}mqf-flyer.jpg`}
//           alt="Mobile Quick Fix. Screen repairs, battery replacement, water damage, general repairs, all mobile brands and charging port repair for phones, tablets, laptops and gaming consoles. We come to your door for repair."
//         />
//       </section>

//       {/* Phones: the same flyer cut into pieces and stacked */}
//       <section className="mq-stack">
//         <img className="mq-logo" src={`${IMG}mqf-logo.jpg`} alt="Mobile Quick Fix. Fast, reliable, professional." />
//         <img className="mq-script" src={`${IMG}mqf-script.jpg`} alt="Get your device back in no time!" />

//         <ul className="mq-services">
//           {services.map(s => (
//             <li key={s.img}><img src={`${IMG}${s.img}`} alt={s.label} /></li>
//           ))}
//         </ul>

//         <img className="mq-strip" src={`${IMG}mqf-brands.jpg`} alt="We repair Apple, Samsung, Xiaomi, Huawei, Oppo, OnePlus and Motorola" />
//         <img className="mq-strip" src={`${IMG}mqf-categories.jpg`} alt="Phones, tablets, laptops, gaming consoles" />

//         <div className="mq-green">
//           <img className="mq-house" src={`${IMG}mqf-house.jpg`} alt="" />
//           <img className="mq-devices" src={`${IMG}mqf-devices.jpg`} alt="We come to your door for repair!" />
//         </div>
//       </section>

//       <div className="mq-contactbar">
//         <a href={PHONE_TEL} className="mq-cta"><FontAwesomeIcon icon={faPhone} /> Call {PHONE_DISPLAY}</a>
//         <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mq-cta mq-cta-ghost">
//           <FontAwesomeIcon icon={faCommentDots} /> WhatsApp for a quote
//         </a>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faChevronRight,
//   faChevronLeft,
//   faArrowRight,
//   faLocationDot,
//   faPhone,
//   faEnvelope,
// } from '@fortawesome/free-solid-svg-icons';
// import Header from './Header';
// import {
//   PHONE_DISPLAY,
//   PHONE_TEL,
//   EMAIL,
//   ADDRESS_LINE_1,
//   ADDRESS_LINE_2,
//   MAPS_EMBED,
//   MAPS_URL,
//   HOURS,
//   DAY_NAMES,
//   WEEK_ORDER,
//   hhmm,
//   ukNow,
//   useOpenStatus,
// } from './pharmacyHours';
// import './HomePageDesktop.css';

// /* ------------------------------------------------------------------ data */

// const NAV_LINKS: Record<string, string> = {
//   'All services': '/services?tab=ALL',
//   'Pharmacy First': '/services?tab=PHARMACY',
//   'NHS treatments': '/services?tab=NHS',
//   'Private treatments': '/services?tab=PRIVATE',
// };

// const heroSlides = [
//   {
//     tag: 'NHS',
//     title: 'Pharmacy First consultations',
//     link: '/services?tab=PHARMACY',
//     img: 'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fpharmacy-first%2Fsinusitis.webp&w=1200&q=75',
//   },
//   {
//     tag: 'NHS',
//     title: 'Free flu & COVID vaccinations',
//     link: '/services?tab=NHS',
//     img: 'https://lead-services-agency.fra1.cdn.digitaloceanspaces.com/4/101404/2-EtcvQ5-J.webp',
//   },
//   {
//     tag: 'NHS',
//     title: 'Meningitis B vaccination',
//     link: '/services?tab=NHS',
//     img: 'https://lead-services-agency.fra1.cdn.digitaloceanspaces.com/4/542160/8ruIf7vdRW.webp',
//   },
//   {
//     tag: 'NHS',
//     title: 'Free blood pressure checks',
//     link: '/book/15',
//     img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80&auto=format&fit=crop',
//   },
//   {
//     tag: 'NHS',
//     title: 'Oral contraception',
//     link: '/oral-contraceptives',
//     img: 'https://gpcdcgwgkciyogknekwp.supabase.co/storage/v1/object/public/pharmacy/pic.png',
//   },
// ];

// const popularServices = [
//   {
//     title: 'Blood Pressure Check',
//     link: '/book/15',
//     tag: 'NHS',
//     sub: 'Free check for over-40s, results while you wait.',
//     img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&auto=format&fit=crop',
//   },
//   {
//     title: 'Health Check',
//     link: '/health-check',
//     tag: 'NHS',
//     sub: 'A simple review of your overall health and risk factors.',
//     img: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80&auto=format&fit=crop',
//   },
//   {
//     title: 'Oral Contraception',
//     link: '/oral-contraceptives',
//     tag: 'NHS',
//     sub: 'Fast, confidential help when you need it.',
//     img: 'https://gpcdcgwgkciyogknekwp.supabase.co/storage/v1/object/public/pharmacy/pic.png',
//   },
// ];

// const vaccinations = [
//   {
//     title: 'COVID vaccine',
//     link: '/book/16',
//     tag: 'NHS',
//     sub: 'Free COVID-19 booster for eligible patients (over 75).',
//     img: 'https://lead-services-agency.fra1.cdn.digitaloceanspaces.com/4/542160/8ruIf7vdRW.webp',
//   },
//   {
//     title: 'Flu jab',
//     link: '/book/14',
//     tag: 'NHS',
//     sub: 'Free NHS flu jab to keep you protected.',
//     img: 'https://lead-services-agency.fra1.cdn.digitaloceanspaces.com/4/101404/2-EtcvQ5-J.webp',
//   },
//   {
//     title: 'Private COVID-19 vaccination',
//     link: '/book/45',
//     tag: 'Private',
//     sub: '£75 per dose, no eligibility criteria.',
//     img: 'https://aylestonepharmacy.co.uk/wp-content/uploads/2025/10/senior-male-patient-getting-vaccinated-coronavirus-scaled.jpg',
//   },
// ];

// const pharmacyFirst = [
//   { title: 'Sinusitis', link: '/book/21', subtitle: 'Ages 12+', img: 'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fpharmacy-first%2Fsinusitis.webp&w=1200&q=75' },
//   { title: 'Sore throat', link: '/book/2', subtitle: 'Ages 5+', img: 'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fpharmacy-first%2Fsore-throat.webp&w=1200&q=75' },
//   { title: 'Earache', link: '/book/19', subtitle: 'Ages 1–17', img: 'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fpharmacy-first%2Fearache.webp&w=1200&q=75' },
//   { title: 'Infected insect bite', link: '/book/8', subtitle: 'Ages 1+', img: 'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fpharmacy-first%2Finsect-bite.webp&w=1200&q=75' },
//   { title: 'Impetigo', link: '/book/7', subtitle: 'Ages 1+', img: 'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fpharmacy-first%2Fimpetigo.webp&w=1200&q=75' },
//   { title: 'Shingles', link: '/book/44', subtitle: 'Ages 18+', img: 'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fpharmacy-first%2Fshingles.webp&w=1200&q=75' },
//   { title: 'Uncomplicated UTI (women)', link: '/book/5', subtitle: 'Women aged 16–64', img: 'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fpharmacy-first%2Futi.webp&w=1200&q=75' },
// ];

// /* ------------------------------------------------------------- component */

// export default function HomePageDesktop() {
//   const navigate = useNavigate();
//   const [sel, setSel] = useState('');
//   const [slide, setSlide] = useState(0);
//   const [pfIndex, setPfIndex] = useState(0);
//   const paused = useRef(false);
//   const status = useOpenStatus();
//   const uk = ukNow();

//   const maxIndex = Math.max(0, pharmacyFirst.length - 3);

//   useEffect(() => {
//     if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
//     const id = window.setInterval(() => {
//       if (!paused.current) setSlide(s => (s + 1) % heroSlides.length);
//     }, 3000);
//     return () => window.clearInterval(id);
//   }, []);

//   const go = () => navigate(NAV_LINKS[sel] || NAV_LINKS['All services']);

//   const card = (svc: { title: string; link: string; tag: string; sub: string; img: string }) => (
//     <article
//       key={svc.title}
//       className="cp-svc"
//       role="link"
//       tabIndex={0}
//       onClick={() => navigate(svc.link)}
//       onKeyDown={e => { if (e.key === 'Enter') navigate(svc.link); }}
//     >
//       <div className="cp-svc-img"><img src={svc.img} alt={svc.title} loading="lazy" /></div>
//       <div className="cp-svc-body">
//         <span className={svc.tag === 'NHS' ? 'cp-tag cp-tag-nhs' : 'cp-tag cp-tag-private'}>
//           {svc.tag}
//         </span>
//         <h3>{svc.title}</h3>
//         <p>{svc.sub}</p>
//       </div>
//     </article>
//   );

//   return (
//     <div className="cp-page">
//       <Header />

//       {/* ---------------------------------------------------------- hero */}
//       <section className="cp-hero">
//         <div className="cp-shell">
//           <div>
//             <div className="cp-locpill"><i />92 Windmill Ln, Castlecroft WV3 8HG</div>

//             <h1>
//               <span className="cp-line">
//                 Your{' '}
//                 <span className="cp-underline">
//                   Trusted
//                   <svg viewBox="0 0 300 14" preserveAspectRatio="none" aria-hidden="true">
//                     <path d="M3 10 C 70 2, 190 2, 297 7" fill="none" stroke="#00D364" strokeWidth="7" strokeLinecap="round" />
//                   </svg>
//                 </span>
//               </span>
//               <span className="cp-line">Pharmacy in Castlecroft.</span>
//               <span className="cp-line">
//                 <span className="cp-nhs">NHS</span> <span className="cp-amp">&amp;</span>{' '}
//                 <span className="cp-priv">Private</span> Care.
//               </span>
//             </h1>

//             <p className="cp-hero-sub">
//               Pharmacy First, vaccinations and free <b>NHS services</b> on Windmill Lane.
//               Here for the whole of Castlecroft.
//             </p>

//             <div className="cp-picker">
//               <select
//                 aria-label="Choose a service"
//                 value={sel}
//                 onChange={e => setSel(e.target.value)}
//               >
//                 <option value="">Choose a service</option>
//                 {Object.keys(NAV_LINKS).map(o => <option key={o} value={o}>{o}</option>)}
//               </select>
//               <button className="cp-go" onClick={go}>
//                 Get Started <FontAwesomeIcon icon={faArrowRight} />
//               </button>
//             </div>

//             <div className="cp-rating">
//               <div className="cp-avatars">
//                 <span style={{ background: '#BFEFD6' }}>S</span>
//                 <span style={{ background: '#BBD5F5' }}>J</span>
//                 <span style={{ background: '#F6DFB0' }}>A</span>
//               </div>
//               <span className="cp-stars">★★★★★</span>
//               <span className="cp-rating-text">· rated <b>5.0</b> on Google</span>
//             </div>
//           </div>

//           <div
//             className="cp-showcase"
//             onMouseEnter={() => { paused.current = true; }}
//             onMouseLeave={() => { paused.current = false; }}
//           >
//             <div className="cp-welcome">👋 Welcome to Castlecroft Pharmacy</div>
//             <div className="cp-slides">
//               {heroSlides.map((s, i) => (
//                 <div
//                   key={s.title}
//                   className={i === slide ? 'cp-slide is-active' : 'cp-slide'}
//                   aria-hidden={i !== slide}
//                   onClick={() => navigate(s.link)}
//                 >
//                   <img src={s.img} alt={s.title} />
//                   <div className="cp-slide-veil" />
//                   <div className="cp-slide-copy">
//                     <div className="cp-eyebrow">{s.tag}</div>
//                     <h3>{s.title}</h3>
//                     <span>Find out more <FontAwesomeIcon icon={faArrowRight} /></span>
//                   </div>
//                 </div>
//               ))}
//               <div className="cp-dots">
//                 {heroSlides.map((s, i) => (
//                   <button
//                     key={s.title}
//                     className={i === slide ? 'is-active' : ''}
//                     onClick={() => setSlide(i)}
//                     aria-label={`Show ${s.title}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------------------------------------------- popular services */}
//       <section className="cp-section">
//         <div className="cp-shell">
//           <div className="cp-head">
//             <div>
//               <h2>Popular services</h2>
//               <p>Book online in a couple of minutes, or call us and we'll find you a slot.</p>
//             </div>
//             <button className="cp-link" onClick={() => navigate('/services')}>See all services</button>
//           </div>
//           <div className="cp-grid">{popularServices.map(card)}</div>
//         </div>
//       </section>

//       {/* ----------------------------------------------- pharmacy first */}
//       <section className="cp-section">
//         <div className="cp-shell">
//          <div className="cp-pf-band">
//           <div className="cp-head">
//             <div>
//               <h2>Pharmacy First treatments</h2>
//               <p>Common conditions treated free on the NHS — no GP appointment needed.</p>
//             </div>
//             <div className="cp-rail-controls">
//               <button onClick={() => setPfIndex(i => Math.max(0, i - 1))} disabled={pfIndex === 0} aria-label="Previous">
//                 <FontAwesomeIcon icon={faChevronLeft} />
//               </button>
//               <button onClick={() => setPfIndex(i => Math.min(maxIndex, i + 1))} disabled={pfIndex >= maxIndex} aria-label="Next">
//                 <FontAwesomeIcon icon={faChevronRight} />
//               </button>
//             </div>
//           </div>
//           <div className="cp-viewport">
//             <div className="cp-track" style={{ transform: `translateX(-${pfIndex * 276}px)` }}>
//               {pharmacyFirst.map(svc => (
//                 <article key={svc.title} className="cp-pf" onClick={() => navigate(svc.link)}>
//                   <div className="cp-pf-img"><img src={svc.img} alt={svc.title} loading="lazy" /></div>
//                   <div className="cp-pf-body">
//                     <h3>{svc.title}</h3>
//                     <small>{svc.subtitle}</small>
//                     <button className="cp-pf-btn">Get started</button>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           </div>
//          </div>
//         </div>
//       </section>

//       {/* ------------------------------------------------- vaccinations */}
//       <section className="cp-section">
//         <div className="cp-shell">
//           <div className="cp-head">
//             <div>
//               <h2>Flu &amp; COVID vaccinations</h2>
//               <p>Free on the NHS if you're eligible, private appointments if you're not.</p>
//             </div>
//           </div>
//           <div className="cp-grid">{vaccinations.map(card)}</div>
//         </div>
//       </section>

//       {/* ------------------------------------------------------ find us */}
//       <section className="cp-section cp-section-alt">
//         <div className="cp-shell">
//           <div className="cp-findcard">
//             <div className="cp-find-info">
//               <h2>Find us</h2>
//               <p className="cp-find-lead">
//                 We're on Windmill Lane in the heart of Castlecroft. Walk in for advice,
//                 or book ahead and we'll have a private consultation room ready.
//               </p>

//               <ul className="cp-contact">
//                 <li>
//                   <span className="cp-contact-ico"><FontAwesomeIcon icon={faLocationDot} /></span>
//                   <div>
//                     <strong>{ADDRESS_LINE_1}</strong>
//                     <span>{ADDRESS_LINE_2}</span>
//                   </div>
//                 </li>
//                 <li>
//                   <span className="cp-contact-ico"><FontAwesomeIcon icon={faPhone} /></span>
//                   <div>
//                     <strong><a href={PHONE_TEL}>{PHONE_DISPLAY}</a></strong>
//                     <span>Speak to the pharmacy team</span>
//                   </div>
//                 </li>
//                 <li>
//                   <span className="cp-contact-ico"><FontAwesomeIcon icon={faEnvelope} /></span>
//                   <div>
//                     <strong><a href={`mailto:${EMAIL}`}>{EMAIL}</a></strong>
//                     <span>We aim to reply the same working day</span>
//                   </div>
//                 </li>
//               </ul>

//               <div className="cp-hours">
//                 <div className="cp-hours-top">
//                   <h3>Opening hours</h3>
//                   <span className={status.open ? 'cp-status' : 'cp-status is-closed'}>
//                     <i />{status.open ? 'Open now' : 'Closed now'}
//                   </span>
//                 </div>
//                 <ul>
//                   {WEEK_ORDER.map(d => {
//                     const h = HOURS[d];
//                     return (
//                       <li key={d} className={d === uk.day ? 'is-today' : ''}>
//                         <span>{DAY_NAMES[d]}</span>
//                         <span>{h ? `${hhmm(h[0])} – ${hhmm(h[1])}` : 'Closed'}</span>
//                       </li>
//                     );
//                   })}
//                 </ul>
//               </div>

//               <div className="cp-find-actions">
//                 <a className="cp-btn-primary" href={MAPS_URL} target="_blank" rel="noreferrer">
//                   Get directions <FontAwesomeIcon icon={faArrowRight} />
//                 </a>
//                 <a className="cp-btn-ghost" href={PHONE_TEL}>Call the pharmacy</a>
//               </div>
//             </div>

//             <div className="cp-find-map">
//               <iframe
//                 title="Castlecroft Pharmacy location"
//                 src={MAPS_EMBED}
//                 allowFullScreen
//                 loading="lazy"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from './Header';
// import './HomePageDesktop.css';

// const chevronDown =
//   'https://zbcowibbhjynfpkqgupz.supabase.co/storage/v1/object/public/booking//down-chevron.png';
// const MAIN_TEXT_COLOR = 'rgb(28, 43, 57)'; // #1C2B39

// // Hero select options
// const browseServicesOptions = [
//   'All Services',
//   'Travel Clinic',
//   'Private Treatments',
//   'NHS Treatments',
//   'Pharmacy First',
// ];

// // Pharmacy First carousel data
// const pharmacyFirstData = [
//   {
//     title: 'Sinusitis',
//     subtitle: 'Ages 12+',
//     img:
//       'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fpharmacy-first%2Fsinusitis.webp&w=1200&q=75',
//   },
//   {
//     title: 'Sore throat',
//     subtitle: 'Ages 5+',
//     img:
//       'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fpharmacy-first%2Fsore-throat.webp&w=1200&q=75',
//   },
//   {
//     title: 'Earache',
//     subtitle: 'Ages 1 to 17',
//     img:
//       'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fpharmacy-first%2Fearache.webp&w=1200&q=75',
//   },
//   {
//     title: 'Infected insect bite',
//     subtitle: 'Ages 1+',
//     img:
//       'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fpharmacy-first%2Finsect-bite.webp&w=1200&q=75',
//   },
//   {
//     title: 'Impetigo',
//     subtitle: 'Ages 1+',
//     img:
//       'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fpharmacy-first%2Fimpetigo.webp&w=1200&q=75',
//   },
//   {
//     title: 'Shingles',
//     subtitle: 'Ages 18+',
//     img:
//       'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fpharmacy-first%2Fshingles.webp&w=1200&q=75',
//   },
//   {
//     title: 'Uncomplicated UTI (women)',
//     subtitle: 'Women aged 16–64',
//     img:
//       'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fpharmacy-first%2Futi.webp&w=1200&q=75',
//   },
// ];

// const pfVisibleCount = 3;
// const cardWidth = 260;
// const cardGap = 16;
// const maxPfIndex = pharmacyFirstData.length - pfVisibleCount;

// const HomePage: React.FC = () => {
//   const [selection, setSelection] = useState<string>('');
//   const [pfIndex, setPfIndex] = useState<number>(0);
//   const navigate = useNavigate();

//   const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const val = e.target.value;
//     setSelection(val);
//     if (val === 'All Services') navigate('/services');
//     else if (val === 'Travel Clinic') navigate('/travel-clinic');
//   };

//   const slugify = (str: string) =>
//     str
//       .toLowerCase()
//       .replace(/[()]/g, '')
//       .replace(/[^a-z0-9]+/g, '-')
//       .replace(/^-+|-+$/g, '');

//   return (
//     <>
//       <Header />

//       <main className="pt-header">
//         {/* Hero */}
//         <section className="container py-5">
//           <div className="row align-items-center">
//             <div className="col-md-6 hero-text">
//               <h1 style={{ color: MAIN_TEXT_COLOR, fontWeight: 700, fontSize: '2.5rem' }}>
//                 Trusted <span style={{ color: '#00D364' }}>Pharmacy</span><br />
//                 Care In Coleshill
//               </h1>
//               <p style={{ color: MAIN_TEXT_COLOR, margin: '1rem 0' }}>
//                 Explore our wide range of treatments or consult with our medical professionals.
//               </p>
//               <div className="d-flex align-items-center mb-3">
//                 <select
//                   value={selection}
//                   onChange={handleSelect}
//                   className="form-select me-3"
//                   style={{ maxWidth: 200 }}
//                 >
//                   <option value="">Select a service</option>
//                   {browseServicesOptions.map(opt => (
//                     <option key={opt} value={opt}>{opt}</option>
//                   ))}
//                 </select>
//                 <button className="btn btn-start">Get Started Now</button>
//               </div>
//               <div className="d-flex align-items-center">
//                 <img
//                   src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_74x24dp.png"
//                   alt="Google"
//                   className="google-logo"
//                 />
//                 <span style={{ color: MAIN_TEXT_COLOR }}>★★★★★ 4.9/5.0</span>
//               </div>
//             </div>

//             <div className="col-md-6 hero-cards d-flex gap-3">
//               <div className="card stacked-card" style={{ width: cardWidth, height: 220 * 2 + cardGap }}>
//                 <div className="overflow-hidden flex-grow-1">
//                   <img
//                     src="https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fweight-loss%2F1.webp&w=3840&q=90"
//                     alt="Weight loss service"
//                     className="card-img"
//                   />
//                 </div>
//                 <div className="card-body d-flex justify-content-between align-items-center px-3">
//                   <small style={{ fontWeight: 500 }}>Weight loss service</small>
//                   <img src={chevronDown} alt="" className="chevron-90" />
//                 </div>
//               </div>

//               <div className="d-flex flex-column gap-3">
//                 <div className="card side-card">
//                   <div className="overflow-hidden" style={{ height: 140 }}>
//                     <img
//                       src="https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fservices%2Ftravel-clinic.webp&w=1200&q=75"
//                       alt="Travel Clinic"
//                       className="card-img"
//                     />
//                   </div>
//                   <div className="card-body d-flex justify-content-between align-items-center px-3">
//                     <small style={{ fontWeight: 500 }}>Travel Clinic</small>
//                     <img src={chevronDown} alt="" className="chevron-90" />
//                   </div>
//                 </div>
//                 <div className="card side-card">
//                   <div className="overflow-hidden" style={{ height: 140 }}>
//                     <img
//                       src="https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fservices%2Fearwax-removal.webp&w=1200&q=75"
//                       alt="Ear wax removal"
//                       className="card-img"
//                     />
//                   </div>
//                   <div className="card-body d-flex justify-content-between align-items-center px-3">
//                     <small style={{ fontWeight: 500 }}>Ear wax removal</small>
//                     <img src={chevronDown} alt="" className="chevron-90" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Popular services */}
//         <section className="container py-5 bg-light rounded popular-services">
//           <div className="d-flex justify-content-between align-items-center mb-4">
//             <h2 style={{ color: MAIN_TEXT_COLOR }}>Popular services</h2>
//             <button className="btn btn-link text-decoration-none" style={{ color: MAIN_TEXT_COLOR }}>
//               See all services
//             </button>
//           </div>
//           <div className="row g-4">
//             {[
//               {
//                 title: 'Weight loss management',
//                 sub: 'Achieve your weight goals.',
//                 img:
//                   'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fservices%2Fweight-loss-4.webp&w=640&q=75',
//               },
//               {
//                 title: 'Erectile dysfunction',
//                 sub: 'Effective solutions tailored to your needs.',
//                 img:
//                   'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fservices%2Fed-3.webp&w=640&q=75',
//               },
//               {
//                 title: 'Oral Contraception',
//                 sub: 'Fast, confidential help when you need it.',
//                 img:
//                   'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fservices%2Fmorning-after-pill.webp&w=640&q=75',
//               },
//               {
//                 title: 'Flu vaccination',
//                 sub: 'Stay protected this season with a quick flu jab.',
//                 img:
//                   'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fservices%2Fflu-vaccine.webp&w=640&q=75',
//               },
//               {
//                 title: 'Hair Loss',
//                 sub: 'Support for healthier, fuller hair.',
//                 img:
//                   'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fservices%2Fhair-loss-2.webp&w=640&q=75',
//               },
//               {
//                 title: 'Vitamin B12 Injection',
//                 sub: 'Restore energy and improve vitality.',
//                 img:
//                   'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fservices%2Fvitamin-b12-injection.webp&w=640&q=75',
//               },
//             ].map((svc, i) => (
//               <div key={i} className="col-sm-6 col-md-4">
//                 <div className="card h-100 shadow-sm border-0">
//                   <div style={{ height: 140, overflow: 'hidden' }}>
//                     <img
//                       src={svc.img}
//                       alt={svc.title}
//                       className="w-100 h-100"
//                       style={{ objectFit: 'cover', transition: 'transform 0.3s' }}
//                       onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
//                       onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
//                     />
//                   </div>
//                   <div className="card-body">
//                     <h5 className="card-title mb-1" style={{ fontSize: '1rem' }}>
//                       {svc.title}
//                     </h5>
//                     <p className="text-muted small mb-0">{svc.sub}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Popular Vaccinations */}
//         <section className="container py-5 popular-vaccinations">
//           <h2 style={{ color: MAIN_TEXT_COLOR, fontWeight: 700, fontSize: '1.75rem', marginBottom: '1rem' }}>
//             Popular <span style={{ color: MAIN_TEXT_COLOR }}>Vaccinations</span>
//           </h2>
//           <div className="row g-4">
//             {[
//               {
//                 title: 'Chickenpox',
//                 img:
//                   'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fvaccines%2Fchickenpox.webp&w=1080&q=75',
//               },
//               {
//                 title: 'Hepatitis A',
//                 img:
//                   'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fvaccines%2Fhepatitis.webp&w=1080&q=75',
//               },
//               {
//                 title: 'Typhoid',
//                 img:
//                   'https://ysm-res.cloudinary.com/image/upload/ar_16:9,c_fill,dpr_3.0,f_auto,g_faces:auto,q_auto:eco,w_500/v1/yms/prod/d01914a4-5add-47e4-ba61-8681278f830a',
//               },
//               {
//                 title: 'Yellow Fever',
//                 img:
//                   'https://www.leamingtontravelclinic.co.uk/wp-content/uploads/2023/08/Yellow_fever2.jpg',
//               },
//             ].map((vac, i) => (
//               <div key={i} className="col-sm-6 col-md-3">
//                 <div
//                   className="position-relative rounded overflow-hidden shadow-sm"
//                   style={{ height: 280, cursor: 'pointer' }}
//                   onClick={() => navigate(`/vaccinations/${slugify(vac.title)}`)}
//                 >
//                   <img
//                     src={vac.img}
//                     alt={vac.title}
//                     className="w-100 h-100"
//                     style={{ objectFit: 'cover', transition: 'transform 0.3s' }}
//                     onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
//                     onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
//                   />
//                   <div className="vac-overlay">
//                     <h5 className="vac-title">{vac.title}</h5>
//                     <small>Book vaccine →</small>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* How it works */}
//         <section className="container py-5 how-it-works">
//           <h2 style={{ color: MAIN_TEXT_COLOR, fontWeight: 700, fontSize: '2rem' }}>
//             How it <span style={{ color: MAIN_TEXT_COLOR }}>works</span>
//           </h2>
//           <div className="row gy-4 mt-4">
//             {[
//               {
//                 icon:
//                   'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fhow-it-works%2F1.webp&w=256&q=75',
//                 title: 'Book an appointment',
//                 text:
//                   'Save yourself from waiting in the queue, book an appointment online or by phone.',
//               },
//               {
//                 icon:
//                   'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fhow-it-works%2F2.webp&w=256&q=75',
//                 title: 'Attend your consultation',
//                 text:
//                   'Our clinicians are highly proficient in providing principal care to patients.',
//               },
//               {
//                 icon:
//                   'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fhow-it-works%2F3.webp&w=256&q=75',
//                 title: 'Receive treatment',
//                 text:
//                   'Collect your medications or treatments in-store or choose home delivery.',
//               },
//             ].map((step, i) => (
//               <div key={i} className="col-md-4">
//                 <div className="card h-100 p-4 shadow-sm border-0" style={{ borderRadius: '0.75rem' }}>
//                   <img src={step.icon} alt={step.title} style={{ width: 48, height: 48, marginBottom: '1rem' }} />
//                   <h5 style={{ fontWeight: 600, marginBottom: '0.75rem' }}>{step.title}</h5>
//                   <p style={{ color: MAIN_TEXT_COLOR, lineHeight: 1.4 }}>{step.text}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Pharmacy First Carousel */}
//         <section className="container-fluid px-4 pharmacy-first-carousel" style={{ background: '#0F1637', color: '#fff', padding: '4rem 0' }}>
//           <div className="d-flex justify-content-between align-items-center mb-3">
//             <h2 style={{ fontWeight: 700, fontSize: '2rem' }}>
//               Pharmacy First <span style={{ fontWeight: 400 }}>treatments</span>
//             </h2>
//             <div className="carousel-controls">
//               <button
//                 onClick={() => setPfIndex(i => Math.max(0, i - 1))}
//                 disabled={pfIndex === 0}
//                 className="carousel-prev"
//               >
//                 <img src={chevronDown} alt="Prev" style={{ transform: 'rotate(-90deg)' }} />
//               </button>
//               <button
//                 onClick={() => setPfIndex(i => Math.min(maxPfIndex, i + 1))}
//                 disabled={pfIndex === maxPfIndex}
//                 className="carousel-next"
//               >
//                 <img src={chevronDown} alt="Next" style={{ transform: 'rotate(90deg)' }} />
//               </button>
//             </div>
//           </div>
//           <p style={{ opacity: 0.8, marginBottom: '2rem' }}>
//             Free NHS advice and treatments for common conditions.
//           </p>
//           <div
//             className="d-flex overflow-auto pharmacy-first-track"
//             style={{
//               gap: `${cardGap}px`,
//               transform: `translateX(-${pfIndex * (cardWidth + cardGap)}px)`,
//               transition: 'transform 0.3s ease',
//             }}
//           >
//             {pharmacyFirstData.map((svc, idx) => (
//               <div key={idx} className="card text-center flex-shrink-0" style={{ width: cardWidth, border: 'none', borderRadius: '0.75rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
//                 <div style={{ height: 180, overflow: 'hidden' }}>
//                   <img
//                     src={svc.img}
//                     alt={svc.title}
//                     className="w-100 h-100"
//                     style={{ objectFit: 'cover', transition: 'transform 0.3s' }}
//                     onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
//                     onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
//                   />
//                 </div>
//                 <div className="card-body">
//                   <h5 style={{ fontWeight: 600 }}>{svc.title}</h5>
//                   <p className="small mb-2">{svc.subtitle}</p>
//                   <button
//                     className="btn btn-primary btn-sm"
//                     style={{ width: '80%', margin: '0 auto', padding: '0.4rem 0' }}
//                     onClick={() => navigate(`/pharmacy-first/${svc.title.toLowerCase().replace(/ /g, '-')}`)}
//                   >
//                     Get started
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Find us */}
//         <section className="container py-5 find-us">
//           <h2 style={{ color: MAIN_TEXT_COLOR, fontWeight: 700 }}>Find us</h2>
//           <div className="row align-items-center mt-4">
//             <div className="col-md-6">
//               <p>Contact us for Travel vaccination, ear wax removal and a wide range of NHS or private services we offer.</p>
//               <p><strong>Phone:</strong> 01675 466014</p>
//               <p><strong>Email:</strong> coleshillpharmacy@nhs.com</p>
//               <p><strong>Address:</strong> 114–116 High St, Coleshill, Birmingham B46 3BJ</p>
//               <p>
//                 <strong>Hours:</strong><br />
//                 Monday–Friday 8:30 am–6 pm<br />
//                 Saturday 9 am–5:30 pm<br />
//                 Sunday Closed
//               </p>
//             </div>
//             <div className="col-md-6">
//               <iframe
//                 title="Coleshill Pharmacy Location"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.123456789!2d-1.7890123!3d52.5654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48776789abcdef12:0x3456789abcdef!2s114-116%20High%20St,%20Coleshill%20B46%203BJ,%20UK!5e0!3m2!1sen!2suk!4v1623456789012"
//                 width="100%"
//                 height="300"
//                 style={{ border: 0, borderRadius: '0.5rem' }}
//                 allowFullScreen
//                 loading="lazy"
//               />
//             </div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// };

// export default HomePage;
