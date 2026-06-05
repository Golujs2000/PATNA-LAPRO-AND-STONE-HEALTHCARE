// ─────────────────────────────────────────────────────────────
// data/siteData.js
// Central configuration for Patna Lapro and Stone Healthcare.
// Update this file when clinic details change rather than
// hunting through components.
// ─────────────────────────────────────────────────────────────

export const siteData = {
  name: 'Patna Lapro and Stone Healthcare',
  shortName: 'Patna Lapro & Stone',
  tagline: 'Advanced Laparoscopic Surgery & Surgical Gastroenterology — Expertise You Can Trust',
  description:
    'Patna Lapro and Stone Healthcare, L-35, Road No. 12, Sri Krishna Nagar Kidwaipuri, Patna – advanced laparoscopic surgery, stone treatment, and gastroenterology care by Dr. Sanjeev Kumar (MBBS, MS, DNB). Sr. Consultant Medimax Hospital, Patna, Laparoscopic & Gastro Specialist, Ex-Gastro Surgeon (IGIMS, Patna), Ex-Surgeon (Safdarjung Hospital, New Delhi) with 27 years of experience.',
  founded: '2020',
  url: 'https://patna-lapro-stone-healthcare.web.app',
  logo: '/favicon.png',

  // ── Contact & Location ───────────────────────────────────────
  contact: {
    address: 'L-35, Road No. 12, Sri Krishna Nagar Kidwaipuri, Patna, 800001',
    phone: '9334097925',
    phone2: '9942282987',
    phone3: '7091145462',
    phone4: '06124502164',
    email: 'info@drsanjeevkumar.in',
    hours: 'Mon – Sat: 9:00 AM – 5:00 PM | Sun: Closed',
  },

  // ── Social Media Links ───────────────────────────────────────
  social: {
    facebook: 'https://facebook.com/patnalaprostonecare',
    instagram: 'https://instagram.com/patnalaprostonecare',
    twitter: 'https://twitter.com/patnalapro',
    youtube: 'https://youtube.com/@patnalaprostonecare',
    linkedin: 'https://linkedin.com/company/patnalaprostonecare',
  },

  // ── Team & Operational Stats ─────────────────────────────────
  team: {
    totalStaff: 10,
    nurses: 3,
    technicians: 3,
    pharmacist: true,
    ambulance: false,
    available247: false,
    consultationFee: 500,
  },

  // ── SEO Configuration ────────────────────────────────────────
  seo: {
    keywords: [
      'Patna Lapro and Stone Healthcare',
      'laparoscopic surgery Patna',
      'Dr Sanjeev Kumar surgeon Patna',
      'kidney stone treatment Patna',
      'laparoscopy specialist Patna Bihar',
      'liver specialist Patna',
      'pancreas specialist Patna',
      'jaundice treatment Patna',
      'stone surgery Patna',
      'gallbladder surgery Patna',
      'hernia surgery Patna',
      'appendix surgery Patna',
      'best surgeon Patna Bihar',
      'Medimax Hospital surgeon',
      'Sri Krishna Nagar Patna clinic',
      'DNB surgeon Patna',
      'MS surgeon Patna',
      'best laparoscopic surgeon in Patna',
      'gastro specialist Patna',
      'gallbladder stone surgery cost in Patna',
      'kidney stone removal Patna',
      'Dr Sanjeev Kumar Kidwaipuri',
      'gastrointestinal surgeon Patna',
      'Patna Lapro and Stone Healthcare contact number',
      'laparoscopy cost Patna',
      'kidney stone operation cost Patna',
      'best hospital for stone surgery Patna',
      'obstructive jaundice specialist Patna',
      'hernia treatment in Patna',
      'appendix surgery in Patna',
      'colorectal surgeon Patna',
      'piles laser surgery Patna',
      'fissure laser surgery Patna',
      'pancreatic stone treatment Patna',
      'ERCP for CBD stone Patna',
      'stomach cancer surgery Patna',
      'ascites treatment Patna',
      'hepatitis B treatment Patna',
      'hepatitis C treatment Patna',
      'biliary disorder specialist Patna',
    ],
    ogImage: '/og-image.jpg',
  },

  // ── Homepage Stats Counter ───────────────────────────────────
  stats: [
    { label: 'Satisfied Patients', value: 8000, suffix: '+' },
    { label: 'Years Experience', value: 27, suffix: '+' },
    { label: 'Successful Operations', value: 350, suffix: '+' },
    { label: 'Awards Received', value: 150, suffix: '+' },
  ],

  // ── Google Maps Embed ────────────────────────────────────────
  mapEmbed:
    'https://maps.google.com/maps?q=L-35,%20Road%20No.%2012,%20Sri%20Krishna%20Nagar%20Kidwaipuri,%20Patna,%20800001&t=&z=15&ie=UTF8&iwloc=&output=embed',

  // ── Departments / Specialties (used in appointment form) ─────
  departments: [
    'Laparoscopic Surgery',
    'Kidney Stone & Kidney Cancer',
    'Liver Disorders',
    'Pancreas Disorders',
    'Jaundice & Biliary Disorders',
    'General & Gastrointestinal Surgery',
    'Gastro-Intestinal Disorder',
    'Upper G.I. Endoscopy / Colonoscopy',
    'Colorectal Surgeon',
    'Piles, fissure and fistula in Ano',
    'Pancreatic stone',
    'Fissure Laser Surgery',
    'Gall bladder stone',
    'Liver',
    'ERCP — for CBD stone',
    'Stomach cancer',
    'Hernia',
    'Jaundice, Ascites & Biliary Disorder',
  ],

  // ── Facilities ───────────────────────────────────────────────
  facilities: [
    { name: 'I.C.U, Indoor & OPD Care', icon: '🏥' },
    { name: 'Laparoscopy for Abdominal Surgery', icon: '🔬' },
    { name: 'ICU Anaesthetic Support (24/7)', icon: '💉' },
    { name: 'Neurology & Neurosurgery', icon: '🧠' },
    { name: 'Advanced Stone PCNL/ERCP', icon: '🫘' },
    { name: 'General & Emergency Surgery', icon: '🚑' },
  ],
}

export default siteData
