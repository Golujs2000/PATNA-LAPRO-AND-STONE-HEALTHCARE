// ─────────────────────────────────────────────────────────────
// data/siteData.js
// Central configuration for Patna Lapro and Stone Healthcare.
// Update this file when clinic details change rather than
// hunting through components.
// ─────────────────────────────────────────────────────────────

export const siteData = {
  name: 'Patna Lapro and Stone Healthcare',
  shortName: 'Patna Lapro & Stone',
  tagline: 'Advanced Laparoscopic Surgery & Stone Treatment — Expertise You Can Trust',
  description:
    'Patna Lapro and Stone Healthcare, L-35, Road No. 12, Sri Krishna Nagar Kidwaipuri, Patna – advanced laparoscopic surgery, stone treatment, and liver & pancreas care by Dr. Sanjeev Kumar (MBBS, MS, DNB). Sr. Consultant at Medimax Hospital, Ex-Surgeon VMMC College & Safdarjung Hospital, New Delhi.',
  founded: '2020',
  url: 'https://patna-lapro-stone-healthcare.web.app',
  logo: '/favicon.png',

  // ── Contact & Location ───────────────────────────────────────
  contact: {
    address: 'L-35, Road No. 12, Sri Krishna Nagar Kidwaipuri, Patna, 800001',
    phone: '9942282987',
    phone2: '7091145462',
    phone3: '6207661707',
    phone4: '93340979025',
    phone5: '06124502164',
    email: 'patnalapro@gmail.com',
    hours: 'Mon – Sat: 9:00 AM – 6:00 PM | Sun: By Appointment Only',
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
    { label: 'Happy Patients', value: 10000, suffix: '+' },
    { label: 'Years Experience', value: 20, suffix: '+' },
    { label: 'Successful Surgeries', value: 5000, suffix: '+' },
    { label: 'Specialities', value: 15, suffix: '+' },
  ],

  // ── Google Maps Embed ────────────────────────────────────────
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.6!2d85.1376!3d25.6093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM2JzMzLjUiTiA4NcKwMDgnMTUuNCJF!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin',

  // ── Departments / Specialties (used in appointment form) ─────
  departments: [
    'Laparoscopic Surgery',
    'Kidney & Ureteric Stone',
    'Gallbladder Stone / Cholecystectomy',
    'Liver Disorders',
    'Pancreas Disorders',
    'Jaundice & Bile Duct',
    'Hernia Surgery',
    'Appendicitis Surgery',
    'Gastrointestinal Surgery',
    'Colorectal Surgery',
    'General Surgery',
    'Emergency Surgery',
    'Pre & Post Operative Care',
  ],

  // ── Facilities ───────────────────────────────────────────────
  facilities: [
    { name: 'Laparoscopic OT', icon: '🔬' },
    { name: 'Advanced Diagnostics', icon: '🩻' },
    { name: 'OPD Consultation', icon: '🏥' },
    { name: 'Online Appointment', icon: '📱' },
    { name: 'Emergency Care', icon: '🚑' },
    { name: 'Post-Op Recovery', icon: '💊' },
  ],
}

export default siteData
