// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from './Header';
// import './HomePage.css';

// const MAIN_TEXT_COLOR = 'rgb(119, 128, 159)';
// const MAI_TEXT_COLOR = 'rgb(14, 75, 141)';
// const MAINS_TEXT_COLOR = 'rgb(14, 75, 141)';
// const MAIS_TEXT_COLOR = 'rgb(14, 75, 141)';
// const ACCENT_COLOR = '#00D364';
// const ACC_COLOR = 'rgb(42, 157, 239)';

// const chevronDown =
//   'https://zbcowibbhjynfpkqgupz.supabase.co/storage/v1/object/public/booking//down-chevron.png';

// // Titles that should show a "Coming Soon" badge and be non-clickable
// const COMING_SOON = new Set(['Yellow Fever']);

// // Mapping dropdown selections to service-page URLs with the appropriate tab param
// const NAV_LINKS: Record<string, string> = {
//   'All Services': '/services?tab=ALL',
//   'Travel Clinic': '/services?tab=TRAVEL',
//   'Private Treatments': '/services?tab=PRIVATE',
//   'NHS Treatments': '/services?tab=NHS',
//   'Pharmacy First': '/services?tab=PHARMACY',
// };

// const HERO_CARD_LINKS: Record<string, string> = {
//   'Weight loss clinic': '/weight-loss-clinic',
//   'Travel Clinic': '/travel-clinic',
//   'Ear wax removal': '/microsuction-earwax-removal',
// };

// const HERO_CARD_IMAGES: Record<string, string> = {
//   'Weight loss clinic':
//     'https://gpcdcgwgkciyogknekwp.supabase.co/storage/v1/object/public/pharmacy/weightclinic.jpg',
//   'Travel Clinic':
//     'https://clinic-digital.lon1.cdn.digitaloceanspaces.com/100/530057/yyrgMObVYh.webp',
//   'Ear wax removal':
//     'https://clearclinics.co.uk/wp-content/uploads/2023/10/earwax-removal-1024x561.jpg',
// };

// const EAR_PIERCING_SERVICE = {
//   title: 'Ear Piercing',
//   link: '/book/46',
//   sub: 'New service now available - Professional ear piercing for £40 .',
//   img:
//     'https://media.istockphoto.com/id/1500832940/photo/pharmacist-uses-a-specialized-piercing-gun-to-create-a-new-earlobe-piercing.jpg?s=612x612&w=0&k=20&c=xd0ka7W4LjBrgcc7otBcS4UbbwXFEzAycc08GfZ_kfo=',
// };

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
//       'https://lead-services-agency.fra1.cdn.digitaloceanspaces.com/4/101404/2-EtcvQ5-J.webp',
//   },
//   {
//     title: 'Private COVID-19 Vaccination',
//     link: '/book/45',
//     sub: 'Private COVID-19 Vaccination - £75 per dose',
//     img:
//       'https://aylestonepharmacy.co.uk/wp-content/uploads/2025/10/senior-male-patient-getting-vaccinated-coronavirus-scaled.jpg',
//   },
// ];

// const POPULAR_SERVICES = [
//   {
//     title: 'Weight loss clinic',
//     link: '/weight-loss-clinic',
//     sub: 'Achieve your weight goals.',
//     img:
//       'https://gpcdcgwgkciyogknekwp.supabase.co/storage/v1/object/public/pharmacy/weightclinic.jpg',
//   },
//   {
//     title: 'Ear Wax Removal',
//     link: '/microsuction-earwax-removal',
//     sub: 'Safe microsuction for clear, comfortable ears.',
//     img:
//       'https://lead-services-agency.fra1.cdn.digitaloceanspaces.com/4/123156/AHHct1yZUR.webp',
//   },
//   {
//     title: 'Travel Vaccinations',
//     link: '/travel-clinic',
//     sub: 'Comprehensive vaccine service for your trip.',
//     img:
//       'https://focus.independent.ie/thumbor/kZpypGnMeOe4CqXsAfQrkN28nCk=/0x8:1500x835/731x411/prod-mh-ireland/058221aa-c2c3-11ed-8d5b-0210609a3fe2.jpg',
//   },
//   {
//     title: 'Vitamin B12 Injection',
//     link: '/book/6',
//     sub: 'Restore energy and improve vitality.',
//     img:
//       'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fservices%2Fvitamin-b12-injection.webp&w=640&q=75',
//   },
//   {
//     title: 'Oral Contraception',
//     link: '/oral-contraceptives',
//     sub: 'Fast, confidential help when you need it.',
//     img:
//       'https://gpcdcgwgkciyogknekwp.supabase.co/storage/v1/object/public/pharmacy/pic.png',
//   },
//   {
//     title: 'Erectile dysfunction',
//     link: '/book/20',
//     sub: 'Effective solutions tailored to your needs.',
//     img:
//       'https://gpcdcgwgkciyogknekwp.supabase.co/storage/v1/object/public/pharmacy/ed.jpeg',
//   },
// ];

// const VACCINATIONS = [
//   {
//     title: 'Chickenpox',
//     link: '/book/31',
//     img:
//       'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fvaccines%2Fchickenpox.webp&w=1080&q=75',
//   },
//   {
//     title: 'Hepatitis A',
//     link: '/book/24',
//     img:
//       'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fvaccines%2Fhepatitis.webp&w=1080&q=75',
//   },
//   {
//     title: 'Typhoid',
//     link: '/book/26',
//     img:
//       'https://ysm-res.cloudinary.com/image/upload/ar_16:9,c_fill,dpr_3.0,f_auto,g_faces:auto,q_auto:eco,w_500/v1/yms/prod/d01914a4-5add-47e4-ba61-8681278f830a',
//   },
//   {
//     title: 'Yellow Fever',
//     link: '/book/4',
//     img:
//       'https://www.leamingtontravelclinic.co.uk/wp-content/uploads/2023/08/Yellow_fever2.jpg',
//   },
// ];

// const PHARMACY_FIRST = [
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

// const HomePage: React.FC = () => {
//   const [selection, setSelection] = useState<string>('All Services');
//   const navigate = useNavigate();

//   const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const pick = e.target.value;
//     setSelection(pick);

//     if (NAV_LINKS[pick]) {
//       navigate(NAV_LINKS[pick]);
//     }
//   };

//   return (
//     <>
//       <Header />

//       <main className="pt-header">
//         {/* Hero Section */}
//         <section className="container py-5 hero-section">
//           <div className="row align-items-center">
//             <div className="col-md-6">
//               <h1
//                 style={{
//                   color: MAIS_TEXT_COLOR,
//                   fontWeight: 700,
//                   fontSize: '2.5rem',
//                 }}
//               >
//                 Trusted <span style={{ color: ACCENT_COLOR }}>Pharmacy</span>
//                 <br />
//                 Care in <span style={{ color: ACC_COLOR }}>Coleshill</span>
//               </h1>

//               <p style={{ color: MAIN_TEXT_COLOR, margin: '1rem 0' }}>
//                 Explore our wide range of treatments or consult with our
//                 medical professionals.
//               </p>

//               <div className="mb-3">
//                 <select
//                   value={selection}
//                   onChange={handleSelect}
//                   className="form-select w-100"
//                 >
//                   {Object.keys(NAV_LINKS).map((opt) => (
//                     <option key={opt} value={opt}>
//                       {opt}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="mb-3">
//                 <button
//                   className="btn btn-start w-100"
//                   onClick={() => {
//                     const dest =
//                       NAV_LINKS[selection] || NAV_LINKS['All Services'];
//                     navigate(dest);
//                   }}
//                 >
//                   Get Started Now
//                 </button>
//               </div>

//               <a
//                 href="https://www.google.com/search?client=safari&rls=en&q=coleshill+pharmacy"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="btn btn-link p-0 d-flex align-items-center"
//                 style={{ textDecoration: 'none' }}
//               >
//                 <img
//                   src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_74x24dp.png"
//                   alt="Google"
//                   className="google-logo"
//                 />
//                 <span style={{ color: MAIS_TEXT_COLOR, marginLeft: 8 }}>
//                   ★★★★★ 4.3/5.0
//                 </span>
//               </a>
//             </div>

//             <div className="col-md-6 d-none d-md-flex hero-cards gap-3">
//               <div
//                 className="card stacked-card"
//                 style={{ width: 260, cursor: 'pointer' }}
//                 onClick={() => navigate(HERO_CARD_LINKS['Weight loss clinic'])}
//               >
//                 <div className="overflow-hidden" style={{ height: 220 }}>
//                   <img
//                     src={HERO_CARD_IMAGES['Weight loss clinic']}
//                     alt="Weight loss clinic"
//                     className="card-img"
//                   />
//                 </div>

//                 <div className="card-body d-flex justify-content-between align-items-center px-3">
//                   <small>Weight loss clinic</small>
//                   <img src={chevronDown} className="chevron-90" alt="" />
//                 </div>

//                 <div className="card-footer text-center">
//                   <button
//                     className="btn weight-select-btn"
//                     onClick={() =>
//                       navigate(HERO_CARD_LINKS['Weight loss clinic'])
//                     }
//                   >
//                     Select
//                   </button>
//                 </div>
//               </div>

//               <div className="d-flex flex-column gap-3">
//                 {['Travel Clinic', 'Ear wax removal'].map((key) => {
//                   const isSoon = COMING_SOON.has(key);

//                   return (
//                     <div
//                       key={key}
//                       className="card side-card"
//                       style={{
//                         cursor: isSoon ? 'default' : 'pointer',
//                       }}
//                       onClick={() => {
//                         if (!isSoon) navigate(HERO_CARD_LINKS[key]);
//                       }}
//                     >
//                       <div className="overflow-hidden" style={{ height: 140 }}>
//                         <img
//                           src={HERO_CARD_IMAGES[key]}
//                           alt={key}
//                           className="card-img"
//                         />
//                       </div>

//                       <div className="card-body d-flex justify-content-between align-items-center px-3">
//                         <small>{key}</small>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* New Ear Piercing Service */}
//         <section className="container py-5 bg-light rounded popular-services">
//           <div className="d-flex justify-content-between align-items-center mb-4">
//             <h2
//               style={{
//                 color: MAINS_TEXT_COLOR,
//                 fontWeight: 500,
//                 fontSize: '1.5rem',
//               }}
//             >
//               New in-store service
//             </h2>
//           </div>

//           <div className="row g-4">
//             <div className="col-sm-6 col-md-4">
//               <div
//                 className="card h-100 shadow-sm border-0"
//                 style={{
//                   cursor: 'pointer',
//                   position: 'relative',
//                 }}
//                 onClick={() => navigate(EAR_PIERCING_SERVICE.link)}
//               >
//                 <div style={{ height: 140, overflow: 'hidden' }}>
//                   <img
//                     src={EAR_PIERCING_SERVICE.img}
//                     alt={EAR_PIERCING_SERVICE.title}
//                     className="w-100 h-100"
//                     style={{
//                       objectFit: 'cover',
//                       transition: 'transform 0.3s',
//                     }}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.transform = 'scale(1.05)';
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.transform = 'scale(1)';
//                     }}
//                   />
//                 </div>

//                 <div className="card-body">
//                   <h5 className="card-title mb-1" style={{ fontSize: '1rem' }}>
//                     {EAR_PIERCING_SERVICE.title}
//                   </h5>
//                   <p className="text-muted small mb-0">
//                     {EAR_PIERCING_SERVICE.sub}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Free NHS Vaccination */}
//         <section className="container py-5 bg-light rounded popular-services">
//           <div className="d-flex justify-content-between align-items-center mb-4">
//             <h2
//               style={{
//                 color: MAINS_TEXT_COLOR,
//                 fontWeight: 500,
//                 fontSize: '1.5rem',
//               }}
//             >
//               Free NHS vaccination
//             </h2>
//           </div>

//           <div className="row g-4">
//             {covidvaccine.map((svc) => {
//               const isSoon = COMING_SOON.has(svc.title);

//               return (
//                 <div key={svc.title} className="col-sm-6 col-md-4">
//                   <div
//                     className={`card h-100 shadow-sm border-0 ${
//                       isSoon ? 'coming-soon' : ''
//                     }`}
//                     style={{
//                       cursor: isSoon ? 'default' : 'pointer',
//                       position: 'relative',
//                     }}
//                     onClick={() => {
//                       if (!isSoon) navigate(svc.link);
//                     }}
//                   >
//                     <div style={{ height: 140, overflow: 'hidden' }}>
//                       <img
//                         src={svc.img}
//                         alt={svc.title}
//                         className="w-100 h-100"
//                         style={{
//                           objectFit: 'cover',
//                           transition: 'transform 0.3s',
//                         }}
//                         onMouseEnter={(e) => {
//                           if (!isSoon) {
//                             e.currentTarget.style.transform = 'scale(1.05)';
//                           }
//                         }}
//                         onMouseLeave={(e) => {
//                           if (!isSoon) {
//                             e.currentTarget.style.transform = 'scale(1)';
//                           }
//                         }}
//                       />
//                     </div>

//                     {isSoon && (
//                       <div
//                         style={{
//                           position: 'absolute',
//                           top: 0,
//                           left: 0,
//                           right: 0,
//                           bottom: 0,
//                           background: 'rgba(227, 233, 233, 0.67)',
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                           fontWeight: 600,
//                           color: 'rgba(6, 133, 133, 0.67)',
//                           fontSize: '1.25rem',
//                           borderRadius: '0.25rem',
//                         }}
//                       >
//                         Coming Soon
//                       </div>
//                     )}

//                     <div className="card-body">
//                       <h5 className="card-title mb-1" style={{ fontSize: '1rem' }}>
//                         {svc.title}
//                       </h5>
//                       <p className="text-muted small mb-0">{svc.sub}</p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </section>

//         {/* Popular Services */}
//         <section className="container py-5 bg-light rounded popular-services">
//           <div className="d-flex justify-content-between align-items-center mb-4">
//             <h2
//               style={{
//                 color: MAINS_TEXT_COLOR,
//                 fontWeight: 500,
//                 fontSize: '1.5rem',
//               }}
//             >
//               Popular services
//             </h2>
//           </div>

//           <div className="row g-4">
//             {POPULAR_SERVICES.map((svc) => {
//               const isSoon = COMING_SOON.has(svc.title);

//               return (
//                 <div key={svc.title} className="col-sm-6 col-md-4">
//                   <div
//                     className={`card h-100 shadow-sm border-0 ${
//                       isSoon ? 'coming-soon' : ''
//                     }`}
//                     style={{
//                       cursor: isSoon ? 'default' : 'pointer',
//                       position: 'relative',
//                     }}
//                     onClick={() => {
//                       if (!isSoon) navigate(svc.link);
//                     }}
//                   >
//                     <div style={{ height: 140, overflow: 'hidden' }}>
//                       <img
//                         src={svc.img}
//                         alt={svc.title}
//                         className="w-100 h-100"
//                         style={{
//                           objectFit: 'cover',
//                           transition: 'transform 0.3s',
//                         }}
//                         onMouseEnter={(e) => {
//                           if (!isSoon) {
//                             e.currentTarget.style.transform = 'scale(1.05)';
//                           }
//                         }}
//                         onMouseLeave={(e) => {
//                           if (!isSoon) {
//                             e.currentTarget.style.transform = 'scale(1)';
//                           }
//                         }}
//                       />
//                     </div>

//                     {isSoon && (
//                       <div
//                         style={{
//                           position: 'absolute',
//                           top: 0,
//                           left: 0,
//                           right: 0,
//                           bottom: 0,
//                           background: 'rgba(227, 233, 233, 0.67)',
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                           fontWeight: 600,
//                           color: 'rgba(6, 133, 133, 0.67)',
//                           fontSize: '1.25rem',
//                           borderRadius: '0.25rem',
//                         }}
//                       >
//                         Coming Soon
//                       </div>
//                     )}

//                     <div className="card-body">
//                       <h5 className="card-title mb-1" style={{ fontSize: '1rem' }}>
//                         {svc.title}
//                       </h5>
//                       <p className="text-muted small mb-0">{svc.sub}</p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </section>

//         {/* Popular Vaccinations */}
//         {/* <section className="container py-5">
//           <h2
//             style={{
//               color: MAIN_TEXT_COLOR,
//               fontWeight: 700,
//               fontSize: '1.75rem',
//               marginBottom: '1rem',
//             }}
//           >
//             Popular <span style={{ color: MAIN_TEXT_COLOR }}>Vaccinations</span>
//           </h2>
//           <div className="row g-4">
//             {VACCINATIONS.map((vac) => {
//               const isSoon = COMING_SOON.has(vac.title);
//               return (
//                 <div key={vac.title} className="col-sm-6 col-md-3">
//                   <div
//                     className="position-relative rounded overflow-hidden shadow-sm"
//                     style={{
//                       height: 280,
//                       cursor: isSoon ? 'default' : 'pointer',
//                     }}
//                     onClick={() => {
//                       if (!isSoon) navigate(vac.link);
//                     }}
//                   >
//                     <img
//                       src={vac.img}
//                       className="w-100 h-100"
//                       style={{
//                         objectFit: 'cover',
//                         transition: 'transform 0.3s',
//                       }}
//                       onMouseEnter={(e) =>
//                         !isSoon && (e.currentTarget.style.transform = 'scale(1.05)')
//                       }
//                       onMouseLeave={(e) =>
//                         !isSoon && (e.currentTarget.style.transform = 'scale(1)')
//                       }
//                       alt={vac.title}
//                     />

//                     {isSoon && (
//                       <div
//                         style={{
//                           position: 'absolute',
//                           top: 0,
//                           left: 0,
//                           right: 0,
//                           bottom: 0,
//                           background: 'rgba(255,255,255,0.7)',
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                           fontSize: '1.25rem',
//                           fontWeight: 600,
//                           color: '#333',
//                           borderRadius: '0.25rem',
//                         }}
//                       >
//                         Coming Soon
//                       </div>
//                     )}

//                     <div
//                       style={{
//                         position: 'absolute',
//                         bottom: 0,
//                         left: 0,
//                         right: 0,
//                         padding: '1rem',
//                         background: 'linear-gradient(transparent, rgba(0,0,0,0.6))',
//                         color: '#fff',
//                       }}
//                     >
//                       <h5 style={{ margin: 0 }}>{vac.title}</h5>
//                       <small>Book vaccine →</small>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </section> */}

//         {/* Pharmacy First Carousel */}
//         <section
//           className="container-fluid px-4 pharmacy-first-carousel"
//           style={{ background: '#0F1637', color: '#fff', padding: '3rem 0' }}
//         >
//           <div className="d-flex justify-content-between align-items-center mb-3">
//             <h2 style={{ fontWeight: 700, fontSize: '2rem' }}>
//               Pharmacy First <span style={{ fontWeight: 400 }}>treatments</span>
//             </h2>
//           </div>

//           <p style={{ opacity: 0.8, marginBottom: '2rem' }}>
//             Free NHS advice and treatments for common conditions.
//           </p>

//           <div
//             className="d-flex overflow-auto pharmacy-first-track"
//             style={{ gap: '16px' }}
//           >
//             {PHARMACY_FIRST.map((svc, idx) => (
//               <div
//                 key={idx}
//                 className="card text-center flex-shrink-0"
//                 style={{
//                   width: 250,
//                   height: 390,
//                   border: 'none',
//                   borderRadius: '0.75rem',
//                   backgroundColor: '#fff',
//                   boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//                 }}
//               >
//                 <div style={{ height: 220, overflow: 'hidden' }}>
//                   <img
//                     src={svc.img}
//                     alt={svc.title}
//                     className="w-100 h-100"
//                     style={{ objectFit: 'cover', transition: 'transform 0.3s' }}
//                     onMouseEnter={(e) =>
//                       (e.currentTarget.style.transform = 'scale(1.2)')
//                     }
//                     onMouseLeave={(e) =>
//                       (e.currentTarget.style.transform = 'scale(1)')
//                     }
//                   />
//                 </div>

//                 <div className="card-body">
//                   <h5 style={{ fontWeight: 600 }}>{svc.title}</h5>
//                   <p className="small mb-2">{svc.subtitle}</p>
//                   <button
//                     className="getstartedbtn"
//                     style={{ width: '88%', paddingBottom: '1rem' }}
//                     onClick={() => navigate(svc.link)}
//                   >
//                     Get started
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Find Us */}
//         <section id="find-us" className="container py-5 find-us">
//           <h2 style={{ color: MAI_TEXT_COLOR, fontWeight: 700 }}>Find us</h2>

//           <div className="row align-items-center mt-4">
//             <div className="col-md-6">
//               <p>
//                 Contact us for travel vaccination, ear wax removal, ear
//                 piercing and a wide range of NHS or private services we offer.
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
//                 style={{
//                   border: 0,
//                   borderRadius: '0.5rem',
//                   marginBottom: '30px',
//                 }}
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
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './HomePage.css';

// const MAIN_TEXT_COLOR = 'rgb(85, 98, 90)';
// const HEADING_COLOR = 'rgb(17, 17, 17)';
// const SECTION_TEXT_COLOR = 'rgb(10, 74, 28)';
// const ACCENT_COLOR = '#1E9E34';

// /* ------------------------------------------------------------------
//    Business details — replace the TODO placeholders before going live
// ------------------------------------------------------------------- */
// const PHONE_DISPLAY = '07572 424207';
// const PHONE_TEL = 'tel:+447572424207';
// const WHATSAPP_URL = 'https://wa.me/447572424207';

// /* Images cut from the flyer, stored in /public/images */
// const IMG = '/images/';

// // Mapping dropdown selections to booking URLs
// const NAV_LINKS: Record<string, string> = {
//   'All Repairs': '/book',
//   'Phone Repair': '/book?device=phone',
//   'Tablet Repair': '/book?device=tablet',
//   'Laptop Repair': '/book?device=laptop',
//   'Gaming Console Repair': '/book?device=console',
// };

// const HERO_CARD_LINKS: Record<string, string> = {
//   'We come to you': '/book?service=callout',
//   'Screen repairs': '/book?service=screen',
//   'Battery replacement': '/book?service=battery',
// };

// const REPAIRS = [
//   {
//     title: 'Screen Repairs',
//     link: '/book?service=screen',
//     sub: 'Cracked, black or unresponsive screens replaced.',
//     img: `${IMG}mqf-service-1.jpg`,
//   },
//   {
//     title: 'Battery Replacement',
//     link: '/book?service=battery',
//     sub: 'For phones that drain fast or switch off early.',
//     img: `${IMG}mqf-service-2.jpg`,
//   },
//   {
//     title: 'Water Damage',
//     link: '/book?service=water',
//     sub: 'Cleaning, drying and checks after a spill or drop.',
//     img: `${IMG}mqf-service-3.jpg`,
//   },
//   {
//     title: 'General Repairs',
//     link: '/book?service=general',
//     sub: 'Buttons, speakers, cameras, microphones and more.',
//     img: `${IMG}mqf-service-4.jpg`,
//   },
//   {
//     title: 'All Mobile Brands',
//     link: '/book',
//     sub: 'Not sure if we fix yours? Send us the model.',
//     img: `${IMG}mqf-service-5.jpg`,
//   },
//   {
//     title: 'Charging Port Repair',
//     link: '/book?service=charging',
//     sub: 'Loose cable, slow charging or no charging at all.',
//     img: `${IMG}mqf-service-6.jpg`,
//   },
// ];

// const HomePage: React.FC = () => {
//   const [selection, setSelection] = useState<string>('All Repairs');
//   const navigate = useNavigate();

//   const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const pick = e.target.value;
//     setSelection(pick);
//   };

//   return (
//     <>
//       {/* Header */}
//       <header className="mq-header">
//         <div className="container d-flex align-items-center justify-content-between">
//           <img src={`${IMG}mqf-logo.jpg`} alt="Mobile Quick Fix" className="mq-header-logo" onClick={() => navigate('/')} />
//           <a href={PHONE_TEL} className="btn mq-header-call">Call us</a>
//         </div>
//       </header>

//       <main className="mq-main">
//         {/* Hero Section */}
//         <section className="container py-4 hero-section">
//           <div className="row align-items-center">
//             <div className="col-md-6">
//               <img
//                 src={`${IMG}mqf-script.jpg`}
//                 alt="Get your device back in no time!"
//                 className="mq-hero-script mb-2"
//               />

//               <h1
//                 style={{
//                   color: HEADING_COLOR,
//                   fontWeight: 800,
//                   fontSize: '2.3rem',
//                   lineHeight: 1.1,
//                 }}
//               >
//                 Fast <span style={{ color: ACCENT_COLOR }}>Phone</span> Repairs
//                 <br />
//                 at Your <span style={{ color: ACCENT_COLOR }}>Door</span>
//               </h1>

//               <p style={{ color: MAIN_TEXT_COLOR, margin: '1rem 0' }}>
//                 Screens, batteries, charging ports and water damage for all
//                 major brands. We come to you and fix it on the spot.
//               </p>

//               <div className="mb-3">
//                 <select
//                   value={selection}
//                   onChange={handleSelect}
//                   className="form-select w-100"
//                   aria-label="What needs fixing?"
//                 >
//                   {Object.keys(NAV_LINKS).map((opt) => (
//                     <option key={opt} value={opt}>
//                       {opt}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="mb-3">
//                 <button
//                   className="btn btn-start w-100"
//                   onClick={() => navigate(NAV_LINKS[selection] || NAV_LINKS['All Repairs'])}
//                 >
//                   Get a Quote Now
//                 </button>
//               </div>

//               <div className="d-flex gap-2">
//                 <a href={PHONE_TEL} className="btn btn-outline-quick flex-fill">
//                   Call {PHONE_DISPLAY}
//                 </a>
//                 <a
//                   href={WHATSAPP_URL}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="btn btn-outline-quick flex-fill"
//                 >
//                   WhatsApp
//                 </a>
//               </div>
//             </div>

//             {/* Hero cards (tablet and desktop only, like the pharmacy site) */}
//             <div className="col-md-6 d-none d-md-flex hero-cards gap-3">
//               <div
//                 className="card stacked-card"
//                 style={{ width: 260, cursor: 'pointer' }}
//                 onClick={() => navigate(HERO_CARD_LINKS['We come to you'])}
//               >
//                 <div className="overflow-hidden mq-green-bg" style={{ height: 220 }}>
//                   <img src={`${IMG}mqf-house.jpg`} alt="We come to your door" className="card-img" />
//                 </div>
//                 <div className="card-body px-3">
//                   <small>We come to your door</small>
//                 </div>
//                 <div className="card-footer text-center">
//                   <button className="btn weight-select-btn">Book a call-out</button>
//                 </div>
//               </div>

//               <div className="d-flex flex-column gap-3">
//                 {['Screen repairs', 'Battery replacement'].map((key, i) => (
//                   <div
//                     key={key}
//                     className="card side-card"
//                     style={{ cursor: 'pointer' }}
//                     onClick={() => navigate(HERO_CARD_LINKS[key])}
//                   >
//                     <div className="overflow-hidden bg-white" style={{ height: 140 }}>
//                       <img
//                         src={`${IMG}mqf-service-${i + 1}.jpg`}
//                         alt={key}
//                         className="card-img card-img-contain"
//                       />
//                     </div>
//                     <div className="card-body px-3">
//                       <small>{key}</small>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* We come to you */}
//         <section className="container py-4">
//           <div
//             className="card border-0 shadow-sm mq-callout-card overflow-hidden"
//             onClick={() => navigate(HERO_CARD_LINKS['We come to you'])}
//           >
//             <img src={`${IMG}mqf-devices.jpg`} alt="We come to your door for repair! Phones, tablets, laptops and consoles." className="w-100" />
//             <div className="card-body">
//               <h5 className="card-title mb-1" style={{ fontSize: '1.05rem', color: '#fff' }}>
//                 No shop trip needed
//               </h5>
//               <p className="small mb-0" style={{ color: '#CFEFD8' }}>
//                 Pick a time and place, home or work, and we'll bring the parts and fix it there.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Repairs */}
//         <section className="container py-5 bg-light rounded popular-services">
//           <div className="d-flex justify-content-between align-items-center mb-4">
//             <h2 style={{ color: SECTION_TEXT_COLOR, fontWeight: 600, fontSize: '1.5rem' }}>
//               What we repair
//             </h2>
//           </div>

//           <div className="row g-3">
//             {REPAIRS.map((svc) => (
//               <div key={svc.title} className="col-6 col-md-4">
//                 <div
//                   className="card h-100 shadow-sm border-0"
//                   style={{ cursor: 'pointer' }}
//                   onClick={() => navigate(svc.link)}
//                 >
//                   <div className="bg-white mq-repair-img">
//                     <img src={svc.img} alt={svc.title} className="w-100 h-100" />
//                   </div>
//                   <div className="card-body">
//                     <p className="text-muted small mb-0">{svc.sub}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Brands and devices */}
//         <section className="container py-5 bg-light rounded popular-services">
//           <div className="d-flex justify-content-between align-items-center mb-4">
//             <h2 style={{ color: SECTION_TEXT_COLOR, fontWeight: 600, fontSize: '1.5rem' }}>
//               Brands and devices we fix
//             </h2>
//           </div>

//           <div className="card border-0 shadow-sm p-3">
//             <img src={`${IMG}mqf-brands.jpg`} alt="Apple, Samsung, Xiaomi, Huawei, Oppo, OnePlus and Motorola" className="w-100 mb-3" />
//             <img src={`${IMG}mqf-categories.jpg`} alt="Phones, tablets, laptops and gaming consoles" className="w-100" />
//           </div>
//         </section>

//         {/* Contact */}
//         <section className="container py-5">
//           <div className="mq-contact-card text-center">
//             <h2 style={{ color: '#fff', fontWeight: 700, fontSize: '1.5rem' }}>Get a free quote</h2>
//             <p style={{ color: '#CFEFD8' }} className="mb-3">
//               Send us your device model and what's wrong. We'll reply with a price and a time.
//             </p>
//             <a href={PHONE_TEL} className="btn btn-start w-100 mb-2">Call {PHONE_DISPLAY}</a>
//             <a
//               href={WHATSAPP_URL}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="btn btn-outline-light w-100 mq-rounded"
//             >
//               WhatsApp us
//             </a>
//           </div>
//         </section>
//       </main>

//       {/* Sticky call bar on phones */}
//       <div className="mq-sticky-bar d-md-none">
//         <a href={PHONE_TEL}>Call now</a>
//         <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp</a>
//       </div>
//     </>
//   );
// };

// export default HomePage;

/* ------------------------------------------------------------------
   HomePageMobile: the phone version of the booking page.
   It uses exactly the same design as the desktop page (same tiles, cards,
   tick boxes, text boxes, colours and wording from HomePageDesktop.css),
   laid out for narrow screens with Bootstrap's grid.

   HomePageDesktop.tsx shows this automatically on screens under 768px and
   passes in all of its state and actions as "b", so prices, search,
   Stripe and WhatsApp work exactly the same as on desktop.
------------------------------------------------------------------- */
import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faMagnifyingGlass,
  faChevronLeft,
  faChevronRight,
  faCaretRight,
  faCheck,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import {
  DEVICES,
  REPAIRS,
  REPAIR_GROUP_TITLE,
  MODELS,
  SERVICE_METHODS,
  POSTAL_ADDRESS,
  CALLOUT_SLOTS,
  DEPOSIT,
  TERMS_URL,
  COUNTRIES,
  WHEN_OPTIONS,
  PHONE_DISPLAY,
  PHONE_TEL,
  money,
  money2,
  modelMatches,
  brandsFor,
  brandLogo,
  deviceLabel,
  dayKey,
  longDate,
  ImgOr,
  Tile,
  DeviceIcon,
  OtherPhoneIcon,
  MethodIcon,
  ModelHelp,
} from './HomePageDesktop';
import BookingPage from './HomePageDesktop';
import type { DeviceKey, Repair, SearchHit, MethodKey, FormData, ServiceMethod, ModelEntry } from './HomePageDesktop';
import './HomePage.css';

/* ---------- Small pieces that match the desktop page exactly ---------- */
const STEPS: [string, string][] = [['Select', 'device'], ['Select', 'repair'], ['Finalize', 'order']];

/* 89 or 89.99 (no £ sign), for the big price tags */
const amount = (n: number) =>
  n.toLocaleString('en-GB', { minimumFractionDigits: Number.isInteger(n) ? 0 : 2, maximumFractionDigits: 2 });

/* Square tick box */
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

/* Phone with a blue question mark ("What model do I have?") */
const HelpPhoneIcon: React.FC<{ className?: string }> = ({ className = 'bk-help-svg' }) => (
  <svg className={className} viewBox="0 0 64 72" aria-hidden="true">
    <rect x="12" y="4" width="34" height="62" rx="4" fill="none" stroke="currentColor" strokeWidth="2.4" />
    <path d="M24 5.5h10v2.5H24z" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M25 60h8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    <circle cx="46" cy="30" r="10" className="bk-help-q-bg" />
    <text x="46" y="35" textAnchor="middle" className="bk-help-q-text">?</text>
  </svg>
);

/* Everything the phone layout needs from the booking page */
export type MobileState = {
  step: 1 | 2 | 3;
  setStep: (s: 1 | 2 | 3) => void;
  device: DeviceKey | null;
  setDevice: (d: DeviceKey) => void;
  brand: string | null;
  setBrand: (b: string) => void;
  model: string;
  setModel: (m: string) => void;
  modelImg: string | null;
  setModelImg: (u: string | null) => void;
  otherModel: boolean;
  setOtherModel: (v: boolean) => void;
  modelSearch: string;
  setModelSearch: (v: string) => void;
  search: string;
  setSearch: (v: string) => void;
  searchOpen: boolean;
  setSearchOpen: (v: boolean) => void;
  activeHit: number;
  setActiveHit: (v: number) => void;
  hits: SearchHit[];
  pickHit: (h: SearchHit) => void;
  handleSearch: (e: React.FormEvent) => void;
  showHelp: boolean;
  setShowHelp: (v: boolean) => void;
  loadingKey: string | null;
  withSpinner: (key: string, action: () => void) => void;
  scrollTop: () => void;
  goBack: () => void;
  deviceName: string;
  deviceInfo: { label: string; modelHint: string } | null;
  repairs: string[];
  toggleRepair: (k: string) => void;
  selected: Repair[];
  priceOf: (k: string) => number | undefined;
  pricesLoading: boolean;
  repairHint: string;
  getQuote: () => void;
  bookNow: () => void;
  totalText: string;
  grandText: string;
  grandTotal: number;
  fee: number;
  methodInfo: ServiceMethod | null;
  method: MethodKey | null;
  chooseMethod: (k: MethodKey) => void;
  custDate: string;
  chooseDate: (k: string) => void;
  slot: string;
  setSlot: (s: string) => void;
  slotPast: (s: string) => boolean;
  days: Date[];
  dayStart: number;
  setDayStart: React.Dispatch<React.SetStateAction<number>>;
  todayKey: string;
  orderOpen: boolean;
  setOrderOpen: React.Dispatch<React.SetStateAction<boolean>>;
  form: FormData;
  setField: (k: keyof FormData, v: string) => void;
  invalid: string[];
  customerType: 'private' | 'business';
  setCustomerType: (v: 'private' | 'business') => void;
  payOption: 'deposit' | 'full';
  setPayOption: (v: 'deposit' | 'full') => void;
  canPayFull: boolean;
  terms: boolean;
  setTerms: (v: boolean) => void;
  error: string;
  payFailed: boolean;
  paying: boolean;
  payText: string;
  sendBooking: () => void;
  sendWhatsApp: (line: string) => void;
};

const MobileLayout: React.FC<{ b: MobileState }> = ({ b }) => {
  const {
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
  } = b;

  /* Hide the floating Book bar while the Book button in "Service(s) Selected"
     is on screen, so the two buttons never sit on top of each other */
  const bookBtnRef = useRef<HTMLButtonElement>(null);
  const [bookBtnVisible, setBookBtnVisible] = useState(false);
  useEffect(() => {
    const el = bookBtnRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(([entry]) => setBookBtnVisible(entry.isIntersecting), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, [step, device]);

  /* Bring any error message into view */
  useEffect(() => {
    if (error) document.getElementById('bk-m-error')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [error]);

  const modelKey = device && brand ? `${device}:${brand}` : '';
  const hasModels = Boolean(modelKey && MODELS[modelKey]);

  /* Same totals as the desktop "Service(s) Selected" box */
  const priceText = (k: string) => {
    const p = priceOf(k);
    return p != null ? money(p) : 'Price on request';
  };
  const pricedTotal = selected.reduce((sum, r) => sum + (priceOf(r.key) ?? 0), 0);
  const anyPriced = selected.some((r) => priceOf(r.key) != null);
  const onRequestCount = selected.filter((r) => priceOf(r.key) == null).length;
  const totalNote = anyPriced && onRequestCount
    ? `Plus ${onRequestCount} repair${onRequestCount > 1 ? 's' : ''} priced on request`
    : '';

  const goToStep = (n: 1 | 2 | 3) => {
    setStep(n);
    scrollTop();
  };

  const backButton = (
    <button className="bk-back" onClick={goBack} aria-label="Go back">
      <FontAwesomeIcon icon={faArrowLeft} />
    </button>
  );

  const devicePicture = (className: string, imgClass: string) => (
    <span className={className}>
      {modelImg && device ? (
        <ImgOr src={modelImg} alt="" className={imgClass}><DeviceIcon k={device} /></ImgOr>
      ) : device ? (
        <DeviceIcon k={device} />
      ) : null}
    </span>
  );

  return (
    <div className={`bk-page bk-m ${step === 2 && selected.length ? 'has-mobile-bar' : ''}`}>
      <div className="container-fluid px-3">
        <h2 className="bk-page-title">Use the system below to get a price or book your repair!</h2>

        {/* Stepper (finished steps can be tapped to go back) */}
        <ol className="bk-stepper" aria-label="Booking progress">
          {STEPS.map(([a, bWord], i) => {
            const label = `${a} ${bWord}`;
            const n = (i + 1) as 1 | 2 | 3;
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
                onClick={canGo ? () => goToStep(n) : undefined}
                onKeyDown={canGo ? (e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    goToStep(n);
                  }
                } : undefined}
              >
                <span className="bk-stepper-dot">{n}</span>
                <span className="bk-stepper-label">{a} <b>{bWord}</b></span>
              </li>
            );
          })}
        </ol>

        {/* ---------------- Step 1: Select device ---------------- */}
        {step === 1 && (
          <>
            <div className="bk-heading">
              {backButton}
              <h1>Which <b>Gadget</b> do you have?</h1>
            </div>

            {!brand && (
              <div className="bk-search-panel">
                <form className="bk-search-main" onSubmit={handleSearch}>
                  <label htmlFor="bk-m-search" className="bk-lead">
                    <span className="bk-dot" />Start typing <b>Model name</b>, or <b>Model number</b> directly
                  </label>
                  <div className="bk-search">
                    <input
                      id="bk-m-search"
                      value={search}
                      onChange={(e) => { setSearch(e.target.value); setSearchOpen(true); setActiveHit(-1); }}
                      onFocus={() => setSearchOpen(true)}
                      onBlur={() => setSearchOpen(false)}
                      placeholder="11 Pro, or iPhone 11"
                      autoComplete="off"
                      enterKeyHint="search"
                      role="combobox"
                      aria-expanded={searchOpen && hits.length > 0}
                      aria-controls="bk-m-suggest"
                    />
                    <button type="submit" aria-label="Search">
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                  </div>
                  {searchOpen && hits.length > 0 && (
                    <ul id="bk-m-suggest" className="bk-suggest" role="listbox">
                      {hits.map((h, i) => (
                        <li
                          key={`${h.device}:${h.brand}:${h.entry.name}`}
                          role="option"
                          aria-selected={i === activeHit}
                          className={`bk-suggest-item ${i === activeHit ? 'is-active' : ''}`}
                          onMouseDown={(e) => e.preventDefault()}
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

            {/* Gadget type */}
            {!device && (
              <>
                <p className="bk-lead"><span className="bk-dot" />Or select your <b>Gadget type</b></p>
                <div className="row row-cols-2 g-3 mb-4">
                  {DEVICES.map((d) => (
                    <div className="col" key={d.key}>
                      <Tile className={`bk-tile bk-tile-device ${loadingKey === d.key ? 'is-selected' : ''}`} onClick={() => withSpinner(d.key, () => setDevice(d.key))} label={d.label} busy={loadingKey === d.key}>
                        {loadingKey === d.key ? <span className="bk-spinner" aria-label="Loading" /> : (
                          <>
                            <DeviceIcon k={d.key} />
                            <span className="bk-device-label">{d.label}</span>
                          </>
                        )}
                      </Tile>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Brand */}
            {device && !brand && (
              <>
                <p className="bk-lead"><span className="bk-dot" />Select a <b>Brand</b></p>
                <div className="row row-cols-3 g-2 mb-4">
                  {brandsFor(device).map((br) => (
                    <div className="col" key={br}>
                      <Tile className={`bk-tile bk-tile-brand ${loadingKey === br ? 'is-selected' : ''}`} onClick={() => withSpinner(br, () => { setBrand(br); setOtherModel(false); setModelSearch(''); scrollTop(); })} label={br} busy={loadingKey === br}>
                        {loadingKey === br ? <span className="bk-spinner" aria-label="Loading" /> : (
                          <ImgOr src={brandLogo(br, device)} alt={br} className="bk-brand-logo">
                            {br}
                          </ImgOr>
                        )}
                      </Tile>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Model list */}
            {device && brand && hasModels && !otherModel && (() => {
              const list = MODELS[modelKey];
              const q = modelSearch.trim();
              const shown = q ? list.filter((m) => modelMatches(m.name, q)) : list;
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
                        value={modelSearch}
                        onChange={(e) => setModelSearch(e.target.value)}
                        placeholder="Start typing or Select one"
                        aria-label={`Search ${brand} models`}
                        autoComplete="off"
                      />
                    </label>
                  </div>

                  <div className="row row-cols-2 g-3 mb-4">
                    {items.map((m) => {
                      if (m === '__help') return (
                        <div className="col" key="__help">
                          <Tile className="bk-tile bk-tile-model bk-tile-model-help" onClick={() => setShowHelp(true)} label="What model do I have?">
                            <HelpPhoneIcon className="bk-model-help-icon" />
                            <span className="bk-model-help-text">What model do I have?</span>
                          </Tile>
                        </div>
                      );
                      if (m === '__other') return (
                        <div className="col" key="__other">
                          <Tile
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
                        </div>
                      );
                      return (
                        <div className="col" key={m.name}>
                          <Tile
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
                        </div>
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

            {/* Type your own model */}
            {device && brand && (!hasModels || otherModel) && (
              <div className="bk-card">
                <label htmlFor="bk-m-model" className="bk-lead">
                  <span className="bk-dot" />{otherModel ? 'Type your model' : 'Model (optional, helps us bring the right part)'}
                </label>
                <input
                  id="bk-m-model"
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

        {/* ---------------- Step 2: Select repair ---------------- */}
        {step === 2 && device && (
          <>
            <div className="bk-device-head">
              {backButton}
              {devicePicture('bk-device-pic', 'bk-device-img')}
              <div className="bk-device-info">
                <h1 className="bk-device-title">{deviceName}</h1>
                <span className="bk-device-type">{deviceInfo?.label}</span>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-12">
                <div className="bk-repair-top">
                  <p className="bk-lead bk-repair-lead"><span className="bk-dot" />Select <b>repair</b></p>
                </div>

                {/* On phones the repair list is always open, so this bar is just a heading */}
                <div className="bk-repair-group">
                  <span className="bk-repair-group-icon"><DeviceIcon k={device} /></span>
                  <span className="bk-repair-group-title">{REPAIR_GROUP_TITLE[device]}</span>
                  <span className="bk-repair-group-count">{REPAIRS[device].length} repairs</span>
                </div>

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

                {repairHint && <p className="bk-error bk-repair-hint" role="alert">{repairHint}</p>}
              </div>

              <div className="col-12">
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
                  <button ref={bookBtnRef} type="button" className="bk-book-btn" onClick={bookNow}>
                    <b>Book Repair Now</b>
                    <small>{selected.length ? 'Next: your details' : 'Select which service?'}</small>
                  </button>
                </aside>
              </div>
            </div>

            {/* Floating total + Book bar (same as desktop on small screens) */}
            {selected.length > 0 && (
              <div className={`bk-mobile-bar ${bookBtnVisible ? 'is-hidden' : ''}`} aria-hidden={bookBtnVisible || undefined}>
                <div className="bk-mobile-bar-info">
                  <small>{selected.length} repair{selected.length > 1 ? 's' : ''} selected</small>
                  <b>{pricesLoading ? '…' : totalText}</b>
                </div>
                <button type="button" className="bk-mobile-bar-btn" onClick={bookNow} tabIndex={bookBtnVisible ? -1 : undefined}>Book Repair Now</button>
              </div>
            )}
          </>
        )}

        {/* ---------------- Step 3: Finalize appointment ---------------- */}
        {step === 3 && device && (
          <div className="bk-fin">
            <div className="bk-heading bk-fin-heading">
              {backButton}
              <h1>Finalize <b>appointment</b></h1>
            </div>

            {/* Your device and order summary first on phones */}
            <div className="bk-fin-device">
              {devicePicture('bk-fin-pic', 'bk-fin-img')}
              <div>
                <h2 className="bk-fin-name">{deviceName}</h2>
                <span className="bk-fin-sub">repair</span>
              </div>
            </div>

            <div className="bk-order" id="bk-m-order">
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
            <button type="button" className="bk-order-toggle" onClick={() => setOrderOpen((o) => !o)} aria-expanded={orderOpen} aria-controls="bk-m-order">
              {orderOpen ? 'hide order' : 'view order'}
            </button>

            {/* Service method */}
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
                        <Field id="m-house" label="House number" required invalid={invalid.includes('house')}>
                          <input id="m-house" className="bk-fl-input" value={form.house} onChange={(e) => setField('house', e.target.value)} autoComplete="address-line1" />
                        </Field>
                        <Field id="m-street" label="Streetname" required invalid={invalid.includes('street')}>
                          <input id="m-street" className="bk-fl-input" value={form.street} onChange={(e) => setField('street', e.target.value)} autoComplete="address-line2" />
                        </Field>
                        <Field id="m-city" label="City" required invalid={invalid.includes('city')}>
                          <input id="m-city" className="bk-fl-input" value={form.city} onChange={(e) => setField('city', e.target.value)} autoComplete="address-level2" />
                        </Field>
                        <Field id="m-post" label="Postcode" required invalid={invalid.includes('postcode')}>
                          <input id="m-post" className="bk-fl-input" value={form.postcode} onChange={(e) => setField('postcode', e.target.value.toUpperCase())} autoComplete="postal-code" />
                        </Field>
                        <Field id="m-country" label="Country" required full invalid={invalid.includes('country')}>
                          <select id="m-country" className="bk-fl-input" value={form.country} onChange={(e) => setField('country', e.target.value)} autoComplete="country-name">
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

            {/* Your details */}
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
                  <Field id="m-company" label="Company name" required full invalid={invalid.includes('company')}>
                    <input id="m-company" className="bk-fl-input" value={form.company} onChange={(e) => setField('company', e.target.value)} autoComplete="organization" />
                  </Field>
                )}
                <Field id="m-first" label="First name" required invalid={invalid.includes('firstName')}>
                  <input id="m-first" className="bk-fl-input" value={form.firstName} onChange={(e) => setField('firstName', e.target.value)} autoComplete="given-name" />
                </Field>
                <Field id="m-last" label="Last name" required invalid={invalid.includes('lastName')}>
                  <input id="m-last" className="bk-fl-input" value={form.lastName} onChange={(e) => setField('lastName', e.target.value)} autoComplete="family-name" />
                </Field>
                <Field id="m-phone" label="Phone number" required full invalid={invalid.includes('phone')}>
                  <input id="m-phone" className="bk-fl-input" type="tel" inputMode="tel" value={form.phone} onChange={(e) => setField('phone', e.target.value)} autoComplete="tel" />
                </Field>
                <Field id="m-email" label="Email" required full invalid={invalid.includes('email')}>
                  <input id="m-email" className="bk-fl-input" type="email" inputMode="email" value={form.email} onChange={(e) => setField('email', e.target.value)} autoComplete="email" />
                </Field>

                {method !== 'callout' && (
                  <>
                    <Field id="m-when" label="When suits you?" full>
                      <select id="m-when" className="bk-fl-input" value={form.when} onChange={(e) => setField('when', e.target.value)}>
                        {WHEN_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                      </select>
                    </Field>
                    {form.when === 'Other' && (
                      <>
                        <Field id="m-odate" label="Date" required invalid={invalid.includes('otherDate')}>
                          <input id="m-odate" className="bk-fl-input" type="date" min={todayKey} value={form.otherDate} onChange={(e) => setField('otherDate', e.target.value)} />
                        </Field>
                        <Field id="m-otime" label="Time" required invalid={invalid.includes('otherTime')}>
                          <input id="m-otime" className="bk-fl-input" type="time" value={form.otherTime} onChange={(e) => setField('otherTime', e.target.value)} />
                        </Field>
                      </>
                    )}
                  </>
                )}

                <Field id="m-notes" label="Notes" full>
                  <textarea id="m-notes" className="bk-fl-input" rows={4} value={form.notes} onChange={(e) => setField('notes', e.target.value)} />
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

              <Tile className="bk-cb-row bk-terms" onClick={() => setTerms(!terms)} pressed={terms}>
                <Check on={terms} />
                <span>
                  I accept the{' '}
                  <a href={TERMS_URL} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>terms &amp; conditions</a>
                </span>
              </Tile>

              <p className="bk-fin-total">Total <b>{grandText}</b></p>
              {error && <p id="bk-m-error" className="bk-error bk-fin-error" role="alert">{error}</p>}

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
        )}
      </div>

      {showHelp && <ModelHelp onClose={() => setShowHelp(false)} />}
    </div>
  );
};

/* If your router shows HomePageMobile directly (with no "b"), hand over to the
   booking page. It holds all the state, and on phones it renders the layout
   above with everything filled in. */
const HomePageMobile: React.FC<{ b?: MobileState }> = ({ b }) =>
  b ? <MobileLayout b={b} /> : <BookingPage />;

export default HomePageMobile;

// // src/pages/auth/HomePage.tsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from './Header';
// import './HomePage.css';

// const MAIN_TEXT_COLOR = 'rgb(52, 78, 102)';
// const ACCENT_COLOR    = '#00D364';
// const ACC_COLOR    = 'rgb(42, 157, 239)';
// const chevronDown     =
//   'https://zbcowibbhjynfpkqgupz.supabase.co/storage/v1/object/public/booking//down-chevron.png';

// // ===== 1) Centralised route definitions =====
// const NAV_LINKS: Record<string,string> = {
//   'All Services':        '/services',
//   'Travel Clinic':       '/book/3',
//   'Private Treatments':  '/services?tab=PRIVATE',
//   'NHS Treatments':      '/services?tab=NHS',
//   'Pharmacy First':      '/services?tab=PHARMACY',
// };

// const HERO_CARD_LINKS: Record<string,string> = {
//   'Weight loss service': '/book/13',
//   'Travel Clinic':       '/book/3',
//   'Ear wax removal':     '/book/19',
// };

// const POPULAR_SERVICES = [
//   {
//     title: 'Weight loss management',
//     link:  '/book/13',
//     sub:   'Achieve your weight goals.',
//     img:   'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fservices%2Fweight-loss-4.webp&w=640&q=75',
//   },
//   {
//     title: 'Erectile dysfunction',
//     link:  '/book/21',
//     sub:   'Effective solutions tailored to your needs.',
//     img:   'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fservices%2Fed-3.webp&w=640&q=75',
//   },
//   {
//     title: 'Oral Contraception',
//     link:  '/book/14',
//     sub:   'Fast, confidential help when you need it.',
//     img:   'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fservices%2Fmorning-after-pill.webp&w=640&q=75',
//   },
//   {
//     title: 'Flu vaccination',
//     link:  '/book/15',
//     sub:   'Stay protected this season with a quick flu jab.',
//     img:   'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fservices%2Fflu-vaccine.webp&w=640&q=75',
//   },
//   {
//     title: 'Hair Loss',
//     link:  '/book/7',
//     sub:   'Support for healthier, fuller hair.',
//     img:   'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fservices%2Fhair-loss-2.webp&w=640&q=75',
//   },
//   {
//     title: 'Vitamin B12 Injection',
//     link:  '/book/6',
//     sub:   'Restore energy and improve vitality.',
//     img:   'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fservices%2Fvitamin-b12-injection.webp&w=640&q=75',
//   },
// ];

// const VACCINATIONS = [
//   {
//     title: 'Chickenpox',
//     link:  '/book/31',
//     img:   'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fvaccines%2Fchickenpox.webp&w=1080&q=75',
//   },
//   {
//     title: 'Hepatitis A',
//     link:  '/book/23',
//     img:   'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fvaccines%2Fhepatitis.webp&w=1080&q=75',
//   },
//   {
//     title: 'Typhoid',
//     link:  '/book/24',
//     img:   'https://ysm-res.cloudinary.com/image/upload/ar_16:9,c_fill,dpr_3.0,f_auto,g_faces:auto,q_auto:eco,w_500/v1/yms/prod/d01914a4-5add-47e4-ba61-8681278f830a',
//   },
//   {
//     title: 'Yellow Fever',
//     link:  '/book/25',
//     img:   'https://www.leamingtontravelclinic.co.uk/wp-content/uploads/2023/08/Yellow_fever2.jpg',
//   },
// ];

// const PHARMACY_FIRST = [
//   {
//     title: 'Sinusitis',
//     link:  '/book/26',
//     img:   'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fpharmacy-first%2Fsinusitis.webp&w=1200&q=75',
//   },
//   {
//     title: 'Sore throat',
//     link:  '/book/27',
//     img:   'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fpharmacy-first%2Fsore-throat.webp&w=1200&q=75',
//   },
//   {
//     title: 'Earache',
//     link:  '/book/28',
//     img:   'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fpharmacy-first%2Fearache.webp&w=1200&q=75',
//   },
//   {
//     title: 'Infected insect bite',
//     link:  '/book/29',
//     img:   'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fpharmacy-first%2Finsect-bite.webp&w=1200&q=75',
//   },
//   {
//     title: 'Impetigo',
//     link:  '/book/30',
//     img:   'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fpharmacy-first%2Fimpetigo.webp&w=1200&q=75',
//   },
//   {
//     title: 'Shingles',
//     link:  '/book/31',
//     img:   'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fpharmacy-first%2Fshingles.webp&w=1200&q=75',
//   },
//   {
//     title: 'Uncomplicated UTI (women)',
//     link:  '/book/32',
//     img:   'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fpharmacy-first%2Futi.webp&w=1200&q=75',
//   },
// ];

// const HomePage: React.FC = () => {
//   const [selection, setSelection] = useState<string>('');
//   const navigate = useNavigate();

//   const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const pick = e.target.value;
//     setSelection(pick);
//     if (NAV_LINKS[pick]) {
//       navigate(NAV_LINKS[pick]);
//     }
//   };

//   // simple slugify fallback
//   const slugify = (str: string) =>
//     str.toLowerCase().replace(/[()]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');

//   return (
//     <>
//       <Header />

//       <main className="pt-header">

//         {/* Hero Section */}
//         <section className="container py-5 hero-section">
//           <div className="row align-items-center">
//             {/* Left Column */}
//             <div className="col-md-6 pt-header">
//               <h1 style={{ color: MAIN_TEXT_COLOR, fontWeight: 700, fontSize: '2.5rem' }}>
//                 Trusted <span style={{ color: ACCENT_COLOR }}>Pharmacy</span><br/>
//                 Care in <span style={{ color: ACC_COLOR }}>Coleshill</span>
//               </h1>
//               <p style={{ color: MAIN_TEXT_COLOR, margin: '1rem 0' }}>
//                 Explore our wide range of treatments or consult with our medical professionals.
//               </p>

//               <div className="mb-3">
//                 <select
//                   value={selection}
//                   onChange={handleSelect}
//                   className="form-select w-100"
//                 >
//                   <option value="">Select a service</option>
//                   {Object.keys(NAV_LINKS).map(opt => (
//                     <option key={opt} value={opt}>{opt}</option>
//                   ))}
//                 </select>
//               </div>

//               <div className="mb-3">
//                 <button
//                   className="btn btn-start w-100"
//                   onClick={() => navigate('/services')}
//                 >
//                   Get Started Now
//                 </button>
//               </div>

//               <div className="d-flex align-items-center">
//                 <img
//                   src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_74x24dp.png"
//                   alt="Google"
//                   className="google-logo"
//                 />
//                 <span style={{ color: MAIN_TEXT_COLOR, marginLeft: 8 }}>
//                   ★★★★★ 4.9/5.0
//                 </span>
//               </div>
//             </div>

//             {/* Right Column (desktop only) */}
//             <div className="col-md-6 d-none d-md-flex hero-cards gap-3">
//               <div
//                 className="card stacked-card"
//                 style={{ width: 260, cursor: 'pointer' }}
//                 onClick={() => navigate(HERO_CARD_LINKS['Weight loss service'])}
//               >
//                 <div className="overflow-hidden" style={{ height: 220 }}>
//                   <img
//                     src="https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fweight-loss%2F1.webp&w=3840&q=90"
//                     alt="Weight loss service"
//                     className="card-img"
//                   />
//                 </div>
//                 <div className="card-body d-flex justify-content-between align-items-center px-3">
//                   <small>Weight loss service</small>
//                   <img src={chevronDown} className="chevron-90" alt="" />
//                 </div>
//                 <div className="card-footer text-center">
//                   <button
//                     className="btn weight-select-btn"
//                     onClick={() => navigate(HERO_CARD_LINKS['Weight loss service'])}
//                   >
//                     Select
//                   </button>
//                 </div>
//               </div>

//               <div className="d-flex flex-column gap-3">
//                 {['Travel Clinic','Ear wax removal'].map(key => (
//                   <div
//                     key={key}
//                     className="card side-card"
//                     style={{ cursor: 'pointer' }}
//                     onClick={() => navigate(HERO_CARD_LINKS[key])}
//                   >
//                     <div className="overflow-hidden" style={{ height: 140 }}>
//                       <img
//                         src={`https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fservices%2F${slugify(key)}.webp&w=1200&q=75`}
//                         alt={key}
//                         className="card-img"
//                       />
//                     </div>
//                     <div className="card-body d-flex justify-content-between align-items-center px-3">
//                       <small>{key}</small>
//                       <img src={chevronDown} className="chevron-90" alt="" />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Popular Services */}
//         <section className="container py-5 bg-light rounded popular-services">
//           <div className="d-flex justify-content-between align-items-center mb-4">
//             <h2 style={{ color: MAIN_TEXT_COLOR }}>Popular services</h2>
//           </div>
//           <div className="row g-4">
//             {POPULAR_SERVICES.map((svc, i) => (
//               <div key={i} className="col-sm-6 col-md-4">
//                 <div
//                   className="card h-100 shadow-sm border-0"
//                   style={{ cursor: 'pointer' }}
//                   onClick={() => navigate(svc.link)}
//                 >
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
//         <section className="container py-5">
//           <h2 style={{ color: MAIN_TEXT_COLOR, fontWeight: 700, fontSize: '1.75rem', marginBottom: '1rem' }}>
//             Popular <span style={{ color: MAIN_TEXT_COLOR }}>Vaccinations</span>
//           </h2>
//           <div className="row g-4">
//             {VACCINATIONS.map((vac, i) => (
//               <div key={i} className="col-sm-6 col-md-3">
//                 <div
//                   className="position-relative rounded overflow-hidden shadow-sm"
//                   style={{ height: 280, cursor: 'pointer' }}
//                   onClick={() => navigate(vac.link)}
//                 >
//                   <img
//                     src={vac.img}
//                     className="w-100 h-100"
//                     style={{ objectFit: 'cover', transition: 'transform 0.3s' }}
//                     onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
//                     onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
//                     alt={vac.title}
//                   />
//                   <div
//                     style={{
//                       position: 'absolute',
//                       bottom: 0,
//                       left: 0,
//                       right: 0,
//                       padding: '1rem',
//                       background: 'linear-gradient(transparent, rgba(0,0,0,0.6))',
//                       color: '#fff',
//                     }}
//                   >
//                     <h5 style={{ margin: 0 }}>{vac.title}</h5>
//                     <small>Book vaccine →</small>
//                   </div>
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
//           </div>
//           <p style={{ opacity: 0.8, marginBottom: '2rem' }}>
//             Free NHS advice and treatments for common conditions.
//           </p>
//           <div className="d-flex overflow-auto pharmacy-first-track" style={{ gap: '16px' }}>
//             {PHARMACY_FIRST.map((svc, idx) => (
//               <div
//                 key={idx}
//                 className="card text-center flex-shrink-0"
//                 style={{ width: 260, border: 'none', borderRadius: '0.75rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
//               >
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
//                   <p className="small mb-2">Ages: see pharmacy first</p>
//                   <button
//                     className="btn btn-primary btn-sm"
//                     style={{ width: '80%', margin: '0 auto', padding: '0.4rem 0' }}
//                     onClick={() => navigate(`/pharmacy-first/${svc.slug}`)}
//                   >
//                     Get started
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Find Us */}
//         <section className="container py-5 find-us">
//           <h2 style={{ color: MAIN_TEXT_COLOR, fontWeight: 700 }}>Find us</h2>
//           <div className="row align-items-center mt-4">
//             <div className="col-md-6">
//               <p>Contact us for Travel vaccination, ear wax removal and a wide range of NHS or private services we offer.</p>
//               <p><strong>Phone:</strong> 01675 466014</p>
//               <p><strong>Email:</strong> coleshillpharmacy@nhs.com</p>
//               <p><strong>Address:</strong> 114–116 High St, Coleshill, Birmingham B46 3BJ</p>
//               <p>
//                 <strong>Hours:</strong><br/>
//                 Monday–Friday 8:30 am–6 pm<br/>
//                 Saturday 9 am–5:30 pm<br/>
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
// };

// export default HomePage;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from './Header';
// import './HomePage.css';

// const chevronDown =
//   'https://zbcowibbhjynfpkqgupz.supabase.co/storage/v1/object/public/booking//down-chevron.png';
// const MAIN_TEXT_COLOR = 'rgb(28, 43, 57)';

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

// const HomePage: React.FC = () => {
//   const [selection, setSelection] = useState<string>('');
//   const navigate = useNavigate();

//   const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const val = e.target.value;
//     setSelection(val);
//     if (val === 'All Services') navigate('/services');
//     else if (val === 'Travel Clinic') navigate('/travel-clinic');
//     else if (val === 'Private Treatments') navigate('/private-treatments');
//     else if (val === 'NHS Treatments') navigate('/nhs-treatments');
//     else if (val === 'Pharmacy First') navigate('/pharmacy-first');
//   };

//   // Slugify for general use
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
//         <section className="container py-5 hero-section">
//           <div className="row align-items-center">
//             <div className="col-md-6 hero-text">
//               <h1
//                 style={{
//                   color: MAIN_TEXT_COLOR,
//                   fontWeight: 700,
//                   fontSize: '2.5rem',
//                 }}
//               >
//                 Trusted <span style={{ color: '#00D364' }}>Pharmacy</span>
//                 <br />
//                 Care In Coleshill
//               </h1>
//               <p style={{ color: MAIN_TEXT_COLOR, margin: '1rem 0' }}>
//                 Explore our wide range of treatments or consult with our medical professionals.
//               </p>
//               <div className="mb-3">
//                 <select
//                   value={selection}
//                   onChange={handleSelect}
//                   className="form-select w-100"
//                 >
//                   <option value="">Select a service</option>
//                   {browseServicesOptions.map((opt) => (
//                     <option key={opt} value={opt}>
//                       {opt}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="mb-3">
//                 <button className="btn btn-start w-100">Get Started Now</button>
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

//             {/* Hero cards only on desktop */}
//             <div className="col-md-6 hero-cards d-none d-md-flex gap-3">
//               {/* Desktop: clicking this stacked card goes to '/weight-loss-clinic' */}
//               <div
//                 className="card stacked-card"
//                 style={{ width: 260, height: 220 * 2 + 16, cursor: 'pointer' }}
//                 onClick={() => navigate('/weight-loss-clinic')}
//               >
//                 <div className="overflow-hidden flex-grow-1">
//                   <img
//                     src="https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fweight-loss%2F1.webp&w=3840&q=90"
//                     alt="Weight loss service"
//                     className="card-img"
//                     style={{ cursor: 'pointer' }}
//                     onClick={() => navigate('/weight-loss-clinic')}
//                   />
//                 </div>
//                 <div className="card-body d-flex justify-content-between align-items-center px-3">
//                   <small style={{ fontWeight: 500 }}>Weight loss service</small>
//                   <img src={chevronDown} className="chevron-90" alt="" />
//                 </div>
//                 {/* New "Select" button below description */}
//                 <div className="card-footer text-center">
//                   <button
//                     className="btn weight-select-btn"
//                     onClick={() => navigate('/weight-loss-clinic')}
//                   >
//                     Select
//                   </button>
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
//                     <img src={chevronDown} className="chevron-90" alt="" />
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
//                     <img src={chevronDown} className="chevron-90" alt="" />
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
//                 <div
//                   className="card h-100 shadow-sm border-0"
//                   style={{ cursor: 'pointer' }}
//                   onClick={() => navigate(`/${slugify(svc.title)}`)}
//                 >
//                   <div style={{ height: 140, overflow: 'hidden' }}>
//                     <img
//                       src={svc.img}
//                       alt={svc.title}
//                       className="w-100 h-100"
//                       style={{
//                         objectFit: 'cover',
//                         transition: 'transform 0.3s',
//                       }}
//                       onMouseEnter={(e) =>
//                         (e.currentTarget.style.transform = 'scale(1.05)')
//                       }
//                       onMouseLeave={(e) =>
//                         (e.currentTarget.style.transform = 'scale(1)')
//                       }
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
//         <section className="container py-5">
//           <h2
//             style={{
//               color: MAIN_TEXT_COLOR,
//               fontWeight: 700,
//               fontSize: '1.75rem',
//               marginBottom: '1rem',
//             }}
//           >
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
//                     className="w-100 h-100"
//                     style={{
//                       objectFit: 'cover',
//                       transition: 'transform 0.3s',
//                     }}
//                     onMouseEnter={(e) =>
//                       (e.currentTarget.style.transform = 'scale(1.05)')
//                     }
//                     onMouseLeave={(e) =>
//                       (e.currentTarget.style.transform = 'scale(1)')
//                     }
//                     alt={vac.title}
//                   />
//                   <div
//                     style={{
//                       position: 'absolute',
//                       bottom: 0,
//                       left: 0,
//                       right: 0,
//                       padding: '1rem',
//                       background: 'linear-gradient(transparent, rgba(0,0,0,0.6))',
//                       color: '#fff',
//                     }}
//                   >
//                     <h5 style={{ margin: 0 }}>{vac.title}</h5>
//                     <small>Book vaccine →</small>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Pharmacy First Carousel */}
//         <section
//           className="container-fluid px-4 pharmacy-first-carousel"
//           style={{ background: '#0F1637', color: '#fff', padding: '4rem 0' }}
//         >
//           <div className="d-flex justify-content-between align-items-center mb-3">
//             <h2 style={{ fontWeight: 700, fontSize: '2rem' }}>
//               Pharmacy First <span style={{ fontWeight: 400 }}>treatments</span>
//             </h2>
//           </div>
//           <p style={{ opacity: 0.8, marginBottom: '2rem' }}>
//             Free NHS advice and treatments for common conditions.
//           </p>
//           <div
//             className="d-flex overflow-auto pharmacy-first-track"
//             style={{ gap: '16px' }}
//           >
//             {pharmacyFirstData.map((svc, idx) => (
//               <div
//                 key={idx}
//                 className="card text-center flex-shrink-0"
//                 style={{
//                   width: 260,
//                   border: 'none',
//                   borderRadius: '0.75rem',
//                   boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//                 }}
//               >
//                 <div style={{ height: 180, overflow: 'hidden' }}>
//                   <img
//                     src={svc.img}
//                     alt={svc.title}
//                     className="w-100 h-100"
//                     style={{
//                       objectFit: 'cover',
//                       transition: 'transform 0.3s',
//                     }}
//                     onMouseEnter={(e) =>
//                       (e.currentTarget.style.transform = 'scale(1.05)')
//                     }
//                     onMouseLeave={(e) =>
//                       (e.currentTarget.style.transform = 'scale(1)')
//                     }
//                   />
//                 </div>
//                 <div className="card-body">
//                   <h5 style={{ fontWeight: 600 }}>{svc.title}</h5>
//                   <p className="small mb-2">{svc.subtitle}</p>
//                   <button
//                     className="btn btn-primary btn-sm"
//                     style={{ width: '80%', margin: '0 auto', padding: '0.4rem 0' }}
//                     onClick={() =>
//                       navigate(
//                         `/pharmacy-first/${svc.title.toLowerCase().replace(/ /g, '-')}`
//                       )
//                     }
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
//               <p>
//                 Contact us for Travel vaccination, ear wax removal and a wide range
//                 of NHS or private services we offer.
//               </p>
//               <p>
//                 <strong>Phone:</strong> 01675 466014
//               </p>
//               <p>
//                 <strong>Email:</strong> coleshillpharmacy@nhs.com
//               </p>
//               <p>
//                 <strong>Address:</strong> 114–116 High St, Coleshill, Birmingham B46
//                 3BJ
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
// };

// export default HomePage;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from './Header';
// import './HomePage.css';

// const chevronDown =
//   'https://zbcowibbhjynfpkqgupz.supabase.co/storage/v1/object/public/booking//down-chevron.png';
// const MAIN_TEXT_COLOR = 'rgb(28, 43, 57)';

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

// const HomePage: React.FC = () => {
//   const [selection, setSelection] = useState<string>('');
//   const navigate = useNavigate();

//   const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const val = e.target.value;
//     setSelection(val);
//     if (val === 'All Services') navigate('/services');
//     else if (val === 'Travel Clinic') navigate('/travel-clinic');
//     else if (val === 'Private Treatments') navigate('/private-treatments');
//     else if (val === 'NHS Treatments') navigate('/nhs-treatments');
//     else if (val === 'Pharmacy First') navigate('/pharmacy-first');
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
//         <section className="container py-5 hero-section">
//           <div className="row align-items-center">
//             <div className="col-md-6 hero-text">
//               <h1 style={{ color: MAIN_TEXT_COLOR, fontWeight: 700, fontSize: '2.5rem' }}>
//                 Trusted <span style={{ color: '#00D364' }}>Pharmacy</span><br />
//                 Care In Coleshill
//               </h1>
//               <p style={{ color: MAIN_TEXT_COLOR, margin: '1rem 0' }}>
//                 Explore our wide range of treatments or consult with our medical professionals.
//               </p>
//               <div className="mb-3">
//                 <select
//                   value={selection}
//                   onChange={handleSelect}
//                   className="form-select w-100"
//                 >
//                   <option value="">Select a service</option>
//                   {browseServicesOptions.map(opt => (
//                     <option key={opt} value={opt}>{opt}</option>
//                   ))}
//                 </select>
//               </div>
//               <div className="mb-3">
//                 <button className="btn btn-start w-100">Get Started Now</button>
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

//             {/* Hero cards only on desktop */}
//             <div className="col-md-6 hero-cards d-none d-md-flex gap-3">
//               <div className="card stacked-card" style={{ width: 260, height: 220 * 2 + 16 }}>
//                 <div className="overflow-hidden flex-grow-1">
//                   <img
//                     src="https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fweight-loss%2F1.webp&w=3840&q=90"
//                     alt="Weight loss service"
//                     className="card-img"
//                   />
//                 </div>
//                 <div className="card-body d-flex justify-content-between align-items-center px-3">
//                   <small style={{ fontWeight: 500 }}>Weight loss service</small>
//                   <img src={chevronDown} className="chevron-90" alt="" />
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
//                     <img src={chevronDown} className="chevron-90" alt="" />
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
//                     <img src={chevronDown} className="chevron-90" alt="" />
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

//         <section className="container py-5">
//           <h2
//              style={{
//               color: MAIN_TEXT_COLOR,
//               fontWeight: 700,
//               fontSize: '1.75rem',
//               marginBottom: '1rem',
//             }}
//           >
//             Popular <span style={{ color: MAIN_TEXT_COLOR }}>Vaccinations</span>
//           </h2>
//           <div className="row g-4">
//             {[
//               { title: 'Chickenpox', img: 'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fvaccines%2Fchickenpox.webp&w=1080&q=75' },
//               { title: 'Hepatitis A', img: 'https://www.chathampharmacy.co.uk/_next/image?url=%2Fimages%2Fvaccines%2Fhepatitis.webp&w=1080&q=75' },
//               { title: 'Typhoid', img: 'https://ysm-res.cloudinary.com/image/upload/ar_16:9,c_fill,dpr_3.0,f_auto,g_faces:auto,q_auto:eco,w_500/v1/yms/prod/d01914a4-5add-47e4-ba61-8681278f830a' },
//               { title: 'Yellow Fever', img: 'https://www.leamingtontravelclinic.co.uk/wp-content/uploads/2023/08/Yellow_fever2.jpg' },
//             ].map((vac, i) => (
//               <div key={i} className="col-sm-6 col-md-3">
//                 <div
//                   className="position-relative rounded overflow-hidden shadow-sm"
//                   style={{ height: 280, cursor: 'pointer' }}
//                   onClick={() => navigate(`/vaccinations/${slugify(vac.title)}`)}
//                 >
//                   <img
//                     src={vac.img}
//                     className="w-100 h-100"
//                     style={{ objectFit: 'cover', transition: 'transform 0.3s' }}
//                     onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
//                     onMouseLeave={	e => (e.currentTarget.style.transform = 'scale(1)')}
//                     alt={vac.title}
//                   />
//                   <div
//                     style={{
//                       position: 'absolute',
//                       bottom: 0,
//                       left: 0,
//                       right: 0,
//                       padding: '1rem',
//                       background: 'linear-gradient(transparent, rgba(0,0,0,0.6))',
//                       color: '#fff',
//                     }}
//                   >
//                     <h5 style={{ margin: 0 }}>{vac.title}</h5>
//                     <small>Book vaccine →</small>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//          </section>

//         {/* Pharmacy First Carousel */}
//         <section className="container-fluid px-4 pharmacy-first-carousel" style={{ background: '#0F1637', color: '#fff', padding: '4rem 0' }}>
//           <div className="d-flex justify-content-between align-items-center mb-3">
//             <h2 style={{ fontWeight: 700, fontSize: '2rem' }}>
//               Pharmacy First <span style={{ fontWeight: 400 }}>treatments</span>
//             </h2>
//             {/* Removed chevron buttons entirely */}
//           </div>
//           <p style={{ opacity: 0.8, marginBottom: '2rem' }}>
//             Free NHS advice and treatments for common conditions.
//           </p>
//           <div className="d-flex overflow-auto pharmacy-first-track" style={{ gap: '16px' }}>
//             {pharmacyFirstData.map((svc, idx) => (
//               <div key={idx} className="card text-center flex-shrink-0" style={{ width: 260, border: 'none', borderRadius: '0.75rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
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
// };

// export default HomePage;
