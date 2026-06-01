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
    phone: '06124502164',
    phone2: '9942282987',
    phone3: '7091145462',
    phone4: '6207661707',
    phone5: '9334097925',
    email: 'patnalapro@gmail.com',
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
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.6!2d85.1376!3d25.6093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM2JzMzLjUiTiA4NcKwMDgnMTUuNCJF!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin',

  // ── Departments / Specialties (used in appointment form) ─────
  departments: [
    'Laparoscopic Surgery',
    'Kidney Stone & Kidney Cancer',
    'Gallbladder Surgery (Cholecystectomy)',
    'Liver Surgery & Disorders',
    'Pancreas Surgery & Disorders',
    'Jaundice & Biliary (ERCP)',
    'Hernia Surgery by Laparoscopy',
    'Ovarian Cyst & Uterus (Laparoscopy)',
    'Gastroesophageal Reflux Disease (GERD)',
    'Stomach & Large Bowel Cancer Surgery',
    'Thyroid Surgery',
    'AV Fistula Surgery (Dialysis)',
    'Neurology & Neurosurgery',
    'Bariatric Surgery for Obesity',
    'Piles, Fistula & Anal Fissure Surgery',
    'Pediatric Congenital Defect Surgery',
    'General & Emergency GI Surgery',
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
