// ─────────────────────────────────────────────────────────────
// data/siteData.js
// Central configuration for Patna Gastro, Lapro and Stone Healthcare.
// Update this file when clinic details change rather than
// hunting through components.
// ─────────────────────────────────────────────────────────────

export const siteData = {
  name: 'Patna Gastro, Lapro and Stone Healthcare',
  shortName: 'Patna Gastro, Lapro & Stone',
  tagline: 'Advanced Laparoscopic Surgery & Surgical Gastroenterology — Expertise You Can Trust',
  description:
    'Patna Gastro, Lapro and Stone Healthcare, L-35, Road No. 12, Sri Krishna Nagar Kidwaipuri, Patna – advanced laparoscopic surgery, stone treatment, and gastroenterology care by Dr. Sanjeev Kumar (MBBS, MS). Sr. Consultant Medimax Hospital, Patna, Laparoscopic & Gastro Specialist, Ex-Gastro Surgeon (IGIMS, Patna), Ex-Surgeon (Safdarjung Hospital, New Delhi) with 21 years of experience.',
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
      'Patna Gastro, Lapro and Stone Healthcare',
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
      'MS surgeon Patna',
      'best laparoscopic surgeon in Patna',
      'gastro specialist Patna',
      'gallbladder stone surgery cost in Patna',
      'kidney stone removal Patna',
      'Dr Sanjeev Kumar Kidwaipuri',
      'gastrointestinal surgeon Patna',
      'Patna Gastro, Lapro and Stone Healthcare contact number',
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
      'patients from Nepal',
      'patients from Jharkhand',
      'patients from Uttar Pradesh',
      'patients from UP',
      'laparoscopy specialist Nepal',
      'best stone surgeon Jharkhand',
      'gastro specialist Bihar districts',
    ],
    ogImage: '/og-image.jpg',
  },

  // ── Regional Reach ───────────────────────────────────────────
  reach: [
    {
      region: 'Nepal',
      title: 'International Care',
      description: 'Trusted by international patients from border cities and major hubs including Birgunj, Biratnagar, Janakpur, and Kathmandu seeking advanced laparoscopic surgery & liver care.',
      stat: 'Nepal Reach',
      highlight: 'Cross-Border Care',
      color: 'from-sky-500 to-blue-600',
      light: 'bg-sky-500/10 text-sky-600 border-sky-500/10'
    },
    {
      region: 'Jharkhand',
      title: 'Interstate Trust',
      description: 'Serving patients traveling from Ranchi, Dhanbad, Bokaro, Jamshedpur, and Hazaribagh for high-success laparoscopic stone surgeries and specialized gastroenterology.',
      stat: 'Jharkhand Reach',
      highlight: 'Interstate Hub',
      color: 'from-emerald-500 to-teal-600',
      light: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/10'
    },
    {
      region: 'Uttar Pradesh (UP)',
      title: 'Eastern UP Care',
      description: 'Eastern Uttar Pradesh cities like Gorakhpur, Varanasi, Deoria, Ghazipur, and Ballia rely on our clinic for expert surgical consultations under Dr. Sanjeev Kumar.',
      stat: 'UP Reach',
      highlight: 'Preferred Referral',
      color: 'from-amber-500 to-orange-600',
      light: 'bg-amber-500/10 text-amber-600 border-amber-500/10'
    },
    {
      region: 'Bihar Districts',
      title: 'Statewide Coverage',
      description: 'Deeply integrated across all 38 districts of Bihar (Patna, Gaya, Muzaffarpur, Bhagalpur, Darbhanga, Saharsa, Purnia, etc.) for secondary and tertiary laparoscopic care.',
      stat: '38 Districts',
      highlight: 'Statewide Reach',
      color: 'from-rose-500 to-pink-600',
      light: 'bg-rose-500/10 text-rose-600 border-rose-500/10'
    }
  ],

  // ── Homepage Stats Counter ───────────────────────────────────
  stats: [
    { label: 'Satisfied Patients', value: 50000, suffix: '+', emoji: '😊' },
    { label: 'Years Experience', value: 21, suffix: '+', emoji: '👨‍⚕️' },
    { label: 'Successful Operations', value: 10000, suffix: '+', emoji: '🩺' },
    { label: 'Awards Received', value: 150, suffix: '+', emoji: '🏆' },
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
