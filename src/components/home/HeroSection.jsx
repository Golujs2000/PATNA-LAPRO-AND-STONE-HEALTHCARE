import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiPhone, FiCalendar, FiActivity, FiShield, FiAward, FiCheckCircle } from 'react-icons/fi'
import { siteData } from '../../data/siteData'

const features = [
  { icon: FiActivity, label: 'Laparoscopic Surgery' },
  { icon: FiShield, label: 'Stone Treatment' },
  { icon: FiCheckCircle, label: 'Liver & Pancreas' },
  { icon: FiCalendar, label: 'Easy Booking' },
]

export default function HeroSection() {

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: 'url("/gallery/hospital-1.jpg")' }} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
        <svg className="absolute top-0 left-0 w-full h-full opacity-[0.025] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#0071d9"></circle>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-dots)"></rect>
        </svg>
      </div>

      <div className="container-max section-padding relative z-10 w-full !pt-20 pb-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* Left — copy */}
          <div className="order-1">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-primary-600 font-bold text-sm tracking-widest uppercase mb-3"
            >
              Patna's Advanced Surgical Centre
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-black text-navy-800 leading-[1.08] mb-5 tracking-tight"
            >
              Laparoscopy & Stone{' '}
              <span className="text-primary-600">Experts in Patna</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-primary-200 text-primary-800 text-sm font-semibold px-4 py-2 rounded-full shadow-md mb-5"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
              Sr. Consultant, Medimax Hospital, Patna | Ex-Gastro Surgeon, IGIMS | Ex-Surgeon, Safdarjung Hospital
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="text-gray-700 text-base md:text-lg leading-relaxed mb-7 max-w-xl"
            >
              Dr. Sanjeev Kumar (MBBS, MS, DNB) is a Laparoscopic & Gastro Specialist, Ex-Gastro Surgeon (IGIMS, Patna), Ex-Surgeon (Safdarjung Hospital, New Delhi), and Specialist in{' '}
              <strong className="text-navy-800">Jaundice, Stone, Pancreas & Liver</strong>{' '}
              at Patna Lapro & Stone Healthcare.
            </motion.p>

            {/* Pill badges below description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="flex flex-wrap gap-2.5 mb-8"
            >
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-700 bg-white/90 border border-primary-100 px-3 py-1.5 rounded-full shadow-sm">
                <FiAward className="w-3.5 h-3.5 text-primary-500" />
                27 Years Experience
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-700 bg-white/90 border border-primary-100 px-3 py-1.5 rounded-full shadow-sm">
                <FiShield className="w-3.5 h-3.5 text-primary-500" />
                MBBS, MS, DNB
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-700 bg-white/90 border border-primary-100 px-3 py-1.5 rounded-full shadow-sm">
                <FiActivity className="w-3.5 h-3.5 text-primary-500" />
                350+ Operations
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Link to="/book-appointment" className="btn-accent btn-shimmer gap-2 text-base px-8 py-4 shadow-lg shadow-accent-500/25 font-bold rounded-[5px]">
                <FiCalendar /> Book Appointment
              </Link>
              <a
                href={`tel:${siteData.contact.phone}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-primary-50 border-2 border-primary-200 text-primary-700 font-semibold rounded-[5px] transition-all duration-200 text-base shadow-sm"
              >
                <FiPhone /> Call Now
              </a>
            </motion.div>

            {/* Feature badges (border top) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="flex flex-wrap gap-2 pt-5 border-t border-gray-200/60"
            >
              {features.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-sm text-navy-700 font-semibold bg-white/80 border border-gray-200 px-3.5 py-2 rounded-full shadow-sm"
                >
                  <Icon className="w-3.5 h-3.5 text-primary-500 flex-shrink-0" />
                  {label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Doctor image card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.28 }}
            className="order-2 flex items-center justify-center relative"
          >
            {/* Decorative bg blob */}
            <div className="absolute w-[110%] h-[110%] bg-primary-100/25 rounded-full blur-[90px] -z-10 animate-pulse-slow" />

            <div className="relative w-full max-w-md flex flex-col items-center">
              {/* Doctor image with decorative frame */}
              <div className="relative">
                {/* Gradient ring behind image */}
                <div className="absolute -inset-2 bg-gradient-to-br from-primary-400 via-primary-600 to-accent-500 rounded-[28px] opacity-20 blur-sm" />
                <div className="relative overflow-hidden rounded-[22px] border-4 border-white shadow-2xl shadow-primary-900/20">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/patna-lapro-stone-healthcare.firebasestorage.app/o/gallery%2F1780307021434_DR.%20SANJEEV%20KUMAR%2002.webp?alt=media&token=e3b03b26-9e61-48d6-b9dd-48faa6646d13"
                    alt="Dr. Sanjeev Kumar"
                    className="w-full h-auto max-h-[420px] lg:max-h-[480px] object-cover object-top"
                  />
                </div>
                {/* Small decorative accent dots */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent-400 rounded-full opacity-60 blur-[2px]" />
                <div className="absolute -bottom-2 -left-2 w-5 h-5 bg-primary-400 rounded-full opacity-50 blur-[1px]" />
              </div>

              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative z-20 -mt-10 mx-4 w-[calc(100%-2rem)]"
              >
                <div className="bg-white/95 backdrop-blur-md border border-primary-100 rounded-2xl shadow-xl px-5 py-4">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-heading font-black text-base text-primary-900 leading-tight">Dr. Sanjeev Kumar</h3>
                      <p className="text-primary-600 font-bold text-[10px] tracking-wide uppercase mt-0.5">MBBS, MS, DNB</p>
                      <p className="text-gray-500 text-[11px] font-medium mt-0.5">Laparoscopic & Gastro Specialist</p>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 flex-shrink-0">
                      <FiAward className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="h-px bg-gray-100 mb-3" />
                  <div className="grid grid-cols-3 divide-x divide-gray-100 text-center">
                    <div className="px-2">
                      <p className="font-heading font-black text-lg text-primary-700 leading-none">27</p>
                      <p className="text-[10px] text-gray-400 font-semibold mt-0.5">Yrs Exp.</p>
                    </div>
                    <div className="px-2">
                      <p className="font-heading font-black text-lg text-primary-700 leading-none">350+</p>
                      <p className="text-[10px] text-gray-400 font-semibold mt-0.5">Operations</p>
                    </div>
                    <div className="px-2">
                      <p className="font-heading font-black text-lg text-primary-700 leading-none">8000+</p>
                      <p className="text-[10px] text-gray-400 font-semibold mt-0.5">Patients</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L1440 80V40C1200 80 960 0 720 40C480 80 240 0 0 40V80Z" fill="#031a40" />
        </svg>
      </div>
    </section>
  )
}
