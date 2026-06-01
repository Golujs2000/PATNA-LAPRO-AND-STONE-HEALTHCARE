import { Link } from 'react-router-dom'
import { FiClock, FiPhone, FiCalendar, FiUser, FiAward, FiCheck } from 'react-icons/fi'
import { getInitials } from '../utils/helpers'

const DAYS_SHORT = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
const DAYS_FULL  = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

const ACCENT = {
  primary: {
    badge:   'bg-primary-600',
    qual:    'text-primary-600',
    dayPill: 'bg-primary-50 text-primary-700',
    bookBtn: 'bg-primary-600 hover:bg-primary-700 shadow-primary-600/25',
    viewBtn: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50',
    specTag: 'bg-primary-50 text-primary-700 border border-primary-200',
  },
  rose: {
    badge:   'bg-rose-500',
    qual:    'text-rose-500',
    dayPill: 'bg-rose-50 text-rose-600',
    bookBtn: 'bg-rose-500 hover:bg-rose-600 shadow-rose-500/25',
    viewBtn: 'border-2 border-rose-500 text-rose-500 hover:bg-rose-50',
    specTag: 'bg-rose-50 text-rose-600 border border-rose-200',
  },
}

const isObgyn = (doc) =>
  /gynaec|gynec|obstet|women|maternity/i.test(doc.specialty || '') ||
  (Array.isArray(doc.specialties) && doc.specialties.some(s => /gynaec|gynec|obstet|women|maternity/i.test(s)))

export default function DoctorCard({ doc, accent }) {
  const resolvedAccent = accent ?? (isObgyn(doc) ? 'rose' : 'primary')
  const c = ACCENT[resolvedAccent] || ACCENT.primary
  const qualDisplay = doc.qualification?.replace(/,?\s*Ex[\s\S]*$/i, '').trim()

  return (
    <div className="bg-white rounded-3xl border border-gray-100/90 shadow-card hover:shadow-card-hover overflow-hidden flex flex-col md:flex-row group hover:-translate-y-1 transition-all duration-300">

      {/* Left — image */}
      <div className="relative w-full md:w-56 shrink-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden min-h-[260px] md:min-h-auto flex items-center justify-center border-r border-gray-50">
        {doc.image ? (
          <img
            src={doc.image}
            alt={doc.name}
            loading="lazy"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 max-h-[300px] md:max-h-full"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center py-10">
            <div className={`w-20 h-20 ${c.badge} rounded-full flex items-center justify-center shadow-lg`}>
              <span className="font-bold text-white text-3xl">{getInitials(doc.name)}</span>
            </div>
          </div>
        )}

        {/* Experience badge */}
        {doc.experience && (
          <div className="absolute top-4 left-4 bg-navy-800 border border-navy-700/50 rounded-2xl px-3 py-2 flex items-center gap-2 shadow-xl z-20">
            <div className="w-8 h-8 rounded-xl bg-amber-500 flex items-center justify-center text-white flex-shrink-0">
              <FiAward className="w-4 h-4" />
            </div>
            <div>
              <p className="text-white font-black text-sm leading-none">{doc.experience}+ Yrs</p>
              <p className="text-primary-300 text-[9px] font-bold uppercase tracking-wider mt-0.5">Experience</p>
            </div>
          </div>
        )}
      </div>

      {/* Right — info */}
      <div className="flex-1 flex flex-col p-6 sm:p-7 min-w-0">

        {/* Header line with Specialty tag */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full ${c.specTag}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
            {doc.specialty}
          </span>
          {doc.consultationFee && (
            <span className="text-xs font-semibold text-gray-500 bg-gray-50 border border-gray-100 px-3 py-1 rounded-full">
              Fee: ₹{doc.consultationFee}
            </span>
          )}
        </div>

        <h3 className="font-heading font-black text-navy-800 text-2xl leading-tight mb-1 group-hover:text-primary-700 transition-colors">
          {doc.name}
        </h3>

        {qualDisplay && (
          <p className="text-primary-600 font-bold text-sm mb-3 tracking-wide uppercase">{qualDisplay}</p>
        )}

        {doc.bio && (
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4">{doc.bio}</p>
        )}

        {/* Position Details if they exist */}
        {(doc.currentPosition || doc.previousPosition) && (
          <div className="space-y-2 mb-4 bg-slate-50/60 rounded-xl p-3 border border-slate-100">
            {doc.currentPosition && (
              <div className="flex items-start gap-2 text-xs text-navy-800">
                <FiCheck className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span className="font-medium">{doc.currentPosition}</span>
              </div>
            )}
            {doc.previousPosition && (
              <div className="flex items-start gap-2 text-xs text-gray-600">
                <FiCheck className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                <span className="font-medium">{doc.previousPosition}</span>
              </div>
            )}
          </div>
        )}

        {/* Availability details */}
        <div className="grid sm:grid-cols-2 gap-3 mb-5 border-t border-gray-100 pt-4 text-xs text-gray-600">
          {doc.availableTime && (
            <div className="flex items-center gap-2">
              <FiClock className="w-4 h-4 shrink-0 text-primary-500" />
              <div>
                <p className="font-semibold text-navy-800">Timings</p>
                <p className="text-gray-500 mt-0.5">{doc.availableTime}</p>
              </div>
            </div>
          )}
          {Array.isArray(doc.availableDays) && doc.availableDays.length > 0 && (
            <div className="flex items-start gap-2">
              <FiCalendar className="w-4 h-4 shrink-0 text-primary-500 mt-0.5" />
              <div>
                <p className="font-semibold text-navy-800">Days Available</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {DAYS_SHORT.map((short, idx) =>
                    doc.availableDays.includes(DAYS_FULL[idx]) ? (
                      <span key={short} className={`px-1.5 py-0.5 rounded-md text-[9px] font-bold ${c.dayPill}`}>{short}</span>
                    ) : null
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-2">
          <Link
            to={`/doctors/${doc.id}`}
            className={`flex-1 text-center py-3 rounded-xl text-xs font-bold transition-all ${c.viewBtn}`}
          >
            View Doctor Profile
          </Link>
          <Link
            to={`/book-appointment?doctor=${encodeURIComponent(doc.name)}&dept=${encodeURIComponent(doc.specialty)}`}
            className={`flex-1 text-center py-3 text-white rounded-xl text-xs font-bold transition-all shadow-md ${c.bookBtn}`}
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  )
}
