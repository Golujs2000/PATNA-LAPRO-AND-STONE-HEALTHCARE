import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FiHeart, FiTarget, FiEye,
  FiCheckCircle, FiPhone, FiCalendar, FiArrowRight,
  FiShield, FiStar,
} from 'react-icons/fi'
import SEO from '../components/SEO'
import { siteData } from '../data/siteData'

export default function About() {
  return (
    <>
      <SEO
        title={`About Us — ${siteData.name}`}
        description={`Learn about Patna Lapro and Stone Healthcare, Sri Krishna Nagar, Patna — led by Dr. Sanjeev Kumar (MBBS, MS, DNB), Sr. Consultant Medimax Hospital, Ex-Surgeon Safdarjung Hospital. Specialist in Laparoscopic Surgery, Stone Treatment, Liver & Pancreas disorders.`}
        keywords={['about Patna Lapro Stone Healthcare', 'Dr Sanjeev Kumar Patna', 'laparoscopic surgeon Patna', 'stone specialist Patna Bihar', 'liver specialist Patna', 'pancreas specialist Patna']}
      />

      <main className="flex-1 bg-white">
        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex items-center overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100/60 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-100/40 rounded-full blur-[100px]"></div>
          </div>
          
          <div className="container-max relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-primary-600 font-bold text-sm tracking-widest uppercase mb-3">
                  Patna's Leading Surgical Centre
                </motion.p>
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-black text-navy-800 leading-[1.1] mb-5 tracking-tight">
                  Advanced Surgery. <span className="text-primary-600">Expert Care.</span>
                </motion.h1>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 bg-white border border-primary-200 text-primary-800 text-sm font-semibold px-4 py-2 rounded-full shadow-sm mb-5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0"></span>Serving Patna — Expert Laparoscopic & Stone Care
                </motion.div>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-gray-600 text-base md:text-lg leading-relaxed mb-7 max-w-xl">
                  Patna Lapro and Stone Healthcare is Patna's trusted surgical centre, offering advanced laparoscopic surgery and comprehensive stone treatment — from kidney stones to gallbladder, hernia, liver, and pancreas care.
                </motion.p>
                
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-wrap gap-2.5 mb-8">
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-700 bg-white border border-primary-100 px-3 py-1.5 rounded-full shadow-sm">
                    <FiCalendar className="w-3.5 h-3.5 text-primary-500" />Est. 2020
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-700 bg-white border border-primary-100 px-3 py-1.5 rounded-full shadow-sm">
                    <FiShield className="w-3.5 h-3.5 text-primary-500" />MBBS, MS, DNB
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-700 bg-white border border-primary-100 px-3 py-1.5 rounded-full shadow-sm">
                    <FiStar className="w-3.5 h-3.5 text-primary-500" />Patna's #1 Stone Surgeon
                  </div>
                </motion.div>
                
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-4">
                  <Link className="btn-accent btn-shimmer gap-2 text-base px-8 py-4 shadow-lg shadow-accent-500/25 font-bold rounded-xl" to="/book-appointment">
                    <FiCalendar /> Book Appointment
                  </Link>
                  <a href={`tel:${siteData.contact.phone}`} className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-primary-50 border-2 border-primary-200 text-primary-700 font-semibold rounded-xl transition-all duration-200 text-base shadow-sm">
                    <FiPhone /> Call Now
                  </a>
                </motion.div>
              </div>
              
              <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="hidden lg:flex items-center justify-center relative">
                <div className="absolute w-[110%] h-[110%] bg-primary-100/25 rounded-full blur-[90px] -z-10"></div>
                <div className="relative w-full max-w-md">
                  <div className="relative rounded-3xl bg-gradient-to-br from-primary-50 via-white to-accent-50/60 border-2 border-primary-100/70 shadow-2xl shadow-primary-200/30 pt-6 pb-0 px-4">
                    <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-primary-400 rounded-tl-lg"></div>
                    <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-primary-400 rounded-tr-lg"></div>
                    <img alt="Dr. Sanjeev Kumar" className="w-full h-auto max-h-[460px] object-contain object-bottom relative z-10" src="/gallery/hospital-2.jpg" />
                    
                    <div className="absolute -bottom-16 left-3 right-3 z-20">
                      <div className="bg-white/90 backdrop-blur-md border border-primary-100 rounded-2xl shadow-xl px-5 py-4">
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div>
                            <h3 className="font-heading font-black text-base text-primary-900 leading-tight">Dr. Sanjeev Kumar</h3>
                            <p className="text-primary-600 font-bold text-[11px] tracking-wide uppercase mt-0.5">MBBS, MS, DNB</p>
                            <p className="text-gray-500 text-[11px] font-medium mt-0.5">Laparoscopic & Stone Surgeon</p>
                          </div>
                          <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 flex-shrink-0">
                            <FiStar className="w-4 h-4" />
                          </div>
                        </div>
                        <div className="h-px bg-gray-100 mb-3"></div>
                        <div className="grid grid-cols-3 divide-x divide-gray-100 text-center">
                          <div className="px-2">
                            <p className="font-heading font-black text-lg text-primary-700 leading-none">20+</p>
                            <p className="text-[10px] text-gray-400 font-semibold mt-0.5">Yrs Exp.</p>
                          </div>
                          <div className="px-2">
                            <p className="font-heading font-black text-lg text-primary-700 leading-none">15+</p>
                            <p className="text-[10px] text-gray-400 font-semibold mt-0.5">Specialities</p>
                          </div>
                          <div className="px-2">
                            <p className="font-heading font-black text-lg text-primary-700 leading-none">5K+</p>
                            <p className="text-[10px] text-gray-400 font-semibold mt-0.5">Surgeries</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Story ──────────────────────────────────────────────── */}
        <section className="section-padding bg-slate-50 border-t border-gray-100">
          <div className="container-max grid lg:grid-cols-2 gap-14 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative group">
              <div className="absolute -inset-4 bg-primary-100/50 rounded-[40px] blur-2xl group-hover:bg-primary-200/50 transition-colors duration-500"></div>
              <div className="relative overflow-hidden rounded-[32px] border-4 border-white shadow-2xl">
                <img 
                  alt="Patna Lapro and Stone Healthcare Upcoming Building" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                  src="https://firebasestorage.googleapis.com/v0/b/caresurgicalclinic-e545f.firebasestorage.app/o/gallery%2F1776843139506_care%20homepathic%20clinic%20upcoming%20building.webp?alt=media&token=2299429a-b9fb-41e2-abfe-d66e13703f1e"
                  style={{ minHeight: '400px' }} 
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl border border-primary-100 shadow-lg">
                  <p className="text-primary-700 font-bold text-xs uppercase tracking-widest">Future Vision</p>
                  <h4 className="text-navy-900 font-bold text-sm mt-0.5">Our Upcoming Clinic Building</h4>
                </div>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block bg-primary-100 text-primary-700 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4">Our Story</span>
              <h2 className="font-heading text-3xl md:text-4xl font-black text-navy-800 leading-tight mb-6">Building Trust, <span className="text-primary-600">One Patient at a Time</span></h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Patna Lapro and Stone Healthcare was established in <strong className="text-navy-800">2020</strong> at Sri Krishna Nagar Kidwaipuri, Patna with a focused mission — to bring world-class minimally invasive surgical care to every patient in Bihar.</p>
                <p>Led by <strong className="text-navy-800">Dr. Sanjeev Kumar</strong> (MBBS, MS, DNB — Laparoscopic & Stone Surgeon), the clinic provides advanced laparoscopic surgery, stone treatment (PCNL, URS, Laser), and expert care for liver & pancreas disorders.</p>
                <p>In just five years, we have grown to become one of Patna's most trusted surgical centres, serving over <strong className="text-navy-800">5,000 patients</strong> across 15+ specialities — from gallbladder surgery and hernia repair to complex kidney stones and jaundice management.</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 border rounded-full px-4 py-2 text-sm font-medium bg-blue-50 border-blue-200 text-blue-700">
                  <FiCheckCircle className="w-4 h-4" /> Laparoscopic Surgery
                </div>
                <div className="flex items-center gap-2 border rounded-full px-4 py-2 text-sm font-medium bg-primary-50 border-primary-200 text-primary-700">
                  <FiHeart className="w-4 h-4" /> Stone Treatment
                </div>
                <div className="flex items-center gap-2 border rounded-full px-4 py-2 text-sm font-medium bg-teal-50 border-teal-200 text-teal-700">
                  <FiShield className="w-4 h-4" /> Liver & Pancreas Care
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Mission & Vision ─────────────────────────────────── */}
        <section className="section-padding bg-white border-t border-gray-100">
          <div className="container-max">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <span className="inline-block bg-primary-100 text-primary-700 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Our Purpose</span>
              <h2 className="font-heading text-4xl md:text-5xl font-black text-navy-800 mt-2 leading-tight">Mission & <span className="text-primary-600">Vision</span></h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative bg-white rounded-3xl p-8 shadow-card border border-gray-100 overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary-400 to-primary-600 rounded-l-3xl"></div>
                <div className="w-14 h-14 bg-primary-50 border border-primary-200 rounded-2xl flex items-center justify-center mb-6">
                  <FiTarget className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-navy-800 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">To provide expert, evidence-based, and accessible surgical care to every patient in Bihar — using advanced laparoscopic techniques for minimal pain, rapid recovery, and lasting outcomes with the highest standards of safety.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="relative bg-white rounded-3xl p-8 shadow-card border border-gray-100 overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-accent-400 to-accent-600 rounded-l-3xl"></div>
                <div className="w-14 h-14 bg-accent-50 border border-accent-200 rounded-2xl flex items-center justify-center mb-6">
                  <FiEye className="w-7 h-7 text-accent-600" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-navy-800 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">To be Bihar's most trusted surgical centre — where patients receive world-class minimally invasive care, families feel genuinely supported, and every surgery is performed with precision, compassion, and clinical excellence.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50/40 border-t border-primary-100">
          <div className="container-max text-center">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="inline-block bg-primary-100 text-primary-700 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Get In Touch</span>
              <h2 className="font-heading text-4xl md:text-5xl font-black text-navy-800 mt-2 mb-4 leading-tight">Ready to Start <span className="text-primary-600">Your Healing Journey?</span></h2>
              <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">Book an appointment today or call us anytime. Dr. Sanjeev Kumar and our surgical team are here to help.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/book-appointment" className="btn-accent btn-shimmer gap-2 text-base px-8 py-4 shadow-lg shadow-accent-500/25 font-bold rounded-xl">
                  <FiCalendar /> Book Appointment
                </Link>
                <a href={`tel:${siteData.contact.phone}`} className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-primary-50 border-2 border-primary-200 text-primary-700 font-semibold rounded-xl transition-all duration-200 text-base shadow-sm">
                  <FiPhone /> Call Now
                </a>
                <Link to="/doctors" className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl transition-all duration-200 text-base shadow-sm">
                  Meet Our Doctors <FiArrowRight />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
