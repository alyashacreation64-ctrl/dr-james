import React from 'react';
import { Calendar, Phone, Star, ShieldCheck, HeartPulse, Stethoscope, ArrowRight } from 'lucide-react';
import { PRACTICE_INFO } from '../data/practiceData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9]">
      {/* Delicate background architectural lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem]"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative, Credibility & Conversion CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed Metadata Trust Kicker */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-slate-600 mb-4 sm:mb-5">
              <span className="text-teal-700 tracking-wide font-medium">Midtown Manhattan Practice</span>
              <span aria-hidden="true" className="text-slate-300">&middot;</span>
              <div className="flex items-center gap-1.5 text-slate-800">
                <div className="flex text-amber-400" aria-label="4.9 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold tabular-nums text-slate-900">{PRACTICE_INFO.googleRating}</span>
                <span className="text-slate-500 font-normal">({PRACTICE_INFO.reviewCount})</span>
              </div>
            </div>

            {/* Primary Headline with balanced wrap */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.25rem] font-extrabold tracking-tight text-[#0F172A] leading-[1.15] sm:leading-[1.12] mb-5 sm:mb-6 max-w-2xl text-balance">
              {PRACTICE_INFO.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl mb-8 font-normal">
              {PRACTICE_INFO.subheadline}
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 bg-[#0D9488] hover:bg-[#0f766e] text-white text-base font-semibold px-7 py-3.5 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 active:scale-[0.98] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 whitespace-nowrap"
              >
                <Calendar className="w-5 h-5" aria-hidden="true" />
                <span>Book Appointment</span>
              </button>

              <a
                href={PRACTICE_INFO.telLink}
                className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-base font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 hover:border-slate-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-400 whitespace-nowrap shadow-2xs"
              >
                <Phone className="w-5 h-5 text-teal-600" aria-hidden="true" />
                <span>Call {PRACTICE_INFO.telephone}</span>
              </a>
            </div>

            {/* Stated Medical Specializations Strip */}
            <div className="pt-6 border-t border-slate-200/90 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-teal-50 rounded-lg text-teal-700 shrink-0 mt-0.5">
                  <Stethoscope className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800">Internal Medicine</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Comprehensive adult health management</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-teal-50 rounded-lg text-teal-700 shrink-0 mt-0.5">
                  <HeartPulse className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800">Preventive Cardiology</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Early vascular risk stratification</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-teal-50 rounded-lg text-teal-700 shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800">Lipidology</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Advanced cholesterol & ApoB analysis</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Architectural Medical Interior & Office Anchor */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer container with restrained radius and crisp hairline border */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-xl shadow-slate-900/5 group">
                <div className="aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] relative overflow-hidden bg-slate-100">
                  <img
                    src="/images/clinic_interior.jpg"
                    alt="Dr. James A. Underberg Medical Consultation Office in Midtown Manhattan"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    loading="eager"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if needed
                      (e.currentTarget as HTMLImageElement).src = '/images/clinic_interior_architectural_1792246618028.jpg';
                    }}
                  />
                  {/* Subtle vignette gradient for crisp depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />
                </div>

                {/* Overlaid location & practice badge inside photo frame */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                  <div className="flex items-center justify-between text-xs font-medium text-slate-200 mb-1">
                    <span>Midtown East, Manhattan</span>
                    <span>110 E 55th St &middot; 9th Floor</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm sm:text-base font-semibold text-white">
                      Private Consultations & Specialized Care
                    </p>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 text-xs font-medium text-teal-300 hover:text-white transition-colors"
                    >
                      <span>Directions</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Verified Practice Callout Card */}
              <div className="mt-4 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-700 shrink-0 font-bold text-sm">
                    JA
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{PRACTICE_INFO.doctorName}</h3>
                    <p className="text-xs text-slate-500">New York, NY &middot; {PRACTICE_INFO.address.zip}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-semibold text-slate-700">Accepting Consultations</div>
                  <button
                    onClick={onOpenBooking}
                    className="text-xs font-bold text-teal-700 hover:text-teal-800 underline underline-offset-2"
                  >
                    Request Date
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Pillar KPI Banner below the hero split */}
        <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-1">
            <span className="text-2xl lg:text-3xl font-extrabold text-[#0F172A] tracking-tight tabular-nums">4.9 / 5.0</span>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">Verified Google Rating across 94+ reviews</p>
          </div>
          <div className="space-y-1">
            <span className="text-2xl lg:text-3xl font-extrabold text-[#0F172A] tracking-tight">Midtown East</span>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">110 E 55th St, 9th Fl, Manhattan</p>
          </div>
          <div className="space-y-1">
            <span className="text-2xl lg:text-3xl font-extrabold text-[#0F172A] tracking-tight">3 Focus Areas</span>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">Internal Medicine, Prevention, Lipidology</p>
          </div>
          <div className="space-y-1">
            <span className="text-2xl lg:text-3xl font-extrabold text-[#0F172A] tracking-tight">Direct Access</span>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">Unhurried diagnostic consultations</p>
          </div>
        </div>
      </div>
    </section>
  );
};
