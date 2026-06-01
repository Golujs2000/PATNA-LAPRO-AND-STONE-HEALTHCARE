// ─────────────────────────────────────────────────────────────
// pages/Home.jsx
// The main homepage — composes all home section components.
// ─────────────────────────────────────────────────────────────

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiMapPin, FiPhone, FiMail, FiCalendar } from 'react-icons/fi'
import SEO from '../components/SEO'
import { useSpecialities } from '../hooks/useSpecialities'
import HeroSection from '../components/home/HeroSection'
import StatsCounter from '../components/home/StatsCounter'
import WhyChooseUs from '../components/home/WhyChooseUs'
import ServicesSection from '../components/home/ServicesSection'
import FeaturedDoctors from '../components/home/FeaturedDoctors'
import Testimonials from '../components/home/Testimonials'
import BlogPreview from '../components/home/BlogPreview'
import GalleryStrip from '../components/home/GalleryStrip'
import { siteData } from '../data/siteData'

const hospitalSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: siteData.name,
  url: siteData.url,
  logo: `${siteData.url}/patna-lapro-logo.png`,
  description: siteData.description,
  telephone: `+91${siteData.contact.phone}`,
  email: siteData.contact.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'L-35, Road No. 12, Sri Krishna Nagar Kidwaipuri',
    addressLocality: 'Patna',
    addressRegion: 'Bihar',
    postalCode: '800001',
    addressCountry: 'IN',
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '09:00', closes: '17:00' },
  ],
  medicalSpecialty: [],
  availableService: [],
  sameAs: [siteData.social.facebook, siteData.social.instagram],
}

export default function Home() {
  const { specialities } = useSpecialities()
  const specNames = specialities.map(s => s.name)

  return (
    <>
      <SEO
        description="Patna Lapro and Stone Healthcare — Advanced Laparoscopic Surgery, Kidney Stone Treatment, Jaundice & Liver Specialist in Patna, Bihar. Dr. Sanjeev Kumar (MBBS, MS, DNB), Sr. Consultant Medimax Hospital, Patna, Ex-Gastro Surgeon (IGIMS, Patna), Ex-Surgeon Safdarjung Hospital. Call: 06124502164."
        keywords={['laparoscopic surgery Patna', 'Dr Sanjeev Kumar', 'kidney stone treatment Patna', 'gallbladder stone Patna', 'jaundice specialist Patna', 'liver specialist Patna', 'stone hospital Patna Bihar']}
        jsonLd={{
          ...hospitalSchema,
          medicalSpecialty: specNames.length > 0 ? specNames : ['Laparoscopic Surgery', 'Urology', 'General Surgery', 'Gastroenterology'],
          availableService: specNames.length > 0
            ? specNames.map(name => ({ '@type': 'MedicalTherapy', name }))
            : hospitalSchema.availableService
        }}

      />

      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Stats ticker */}
      <StatsCounter />

      {/* 3. Specialities / Services */}
      <ServicesSection />

      {/* 4. Why Choose Us */}
      <WhyChooseUs />

      {/* 6. Featured Doctors */}
      <FeaturedDoctors />

      {/* 7. World Class Facility */}
      <GalleryStrip />

      {/* 8. Patient Testimonials */}
      <Testimonials />

      {/* 9. Blog / Health Tips */}
      <BlogPreview />

      {/* 11. Location */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-primary-100 text-primary-700 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Find Us
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-black text-navy-800 mt-2">Our Location</h2>
            <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">Conveniently located in the heart of the city with ample parking.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-96 rounded-[5px] overflow-hidden shadow-xl border border-gray-100 ring-1 ring-primary-100"
            >
              <iframe
                src={siteData.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Patna Lapro & Stone Healthcare Location"
              />
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              {[
                { icon: FiMapPin, label: 'Address',  value: siteData.contact.address,   href: null,                                    color: 'bg-blue-50 text-blue-600' },
                { icon: FiPhone,  label: 'Phone',    value: siteData.contact.phone,      href: `tel:${siteData.contact.phone}`,         color: 'bg-green-50 text-green-600' },
                { icon: FiMail,   label: 'Email',    value: siteData.contact.email,      href: `mailto:${siteData.contact.email}`,      color: 'bg-purple-50 text-purple-600' },
              ].map(({ icon: Icon, label, value, href, color }) => (
                <div key={label} className="flex gap-4 p-4 bg-white rounded-[5px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`w-12 h-12 ${color} rounded-[5px] flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-800 text-sm mb-0.5">{label}</h4>
                    {href ? (
                      <a href={href} className="text-gray-600 text-sm hover:text-primary-600 transition-colors">{value}</a>
                    ) : (
                      <p className="text-gray-600 text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-primary-600/25 mt-2"
              >
                <FiCalendar /> Get Directions &amp; Contact
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
