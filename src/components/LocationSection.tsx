import React from 'react';
import {
  MapPin,
  Phone,
  Calendar,
  Navigation,
  Train,
  Clock,
  ExternalLink,
  Building2,
} from 'lucide-react';
import { PRACTICE_INFO } from '../data/practiceData';

interface LocationSectionProps {
  onOpenBooking: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="location" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Address, Telephone & Directions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700">
              <MapPin className="w-4 h-4" />
              <span>Office Location</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] leading-tight text-balance">
              Visit Our New York City Office
            </h2>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Located in the heart of Midtown East Manhattan, our private consultation suite provides a discreet, tranquil environment for comprehensive medical reviews.
            </p>

            {/* Address & Practice Details Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-5">
              <div className="flex items-start gap-3.5">
                <Building2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Dr. James A. Underberg, MD</h3>
                  <p className="text-sm text-slate-700 mt-0.5 font-medium">
                    110 E 55th St, 9th Floor
                  </p>
                  <p className="text-sm text-slate-600">
                    New York, NY 10022, USA
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-200/60">
                <Phone className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Telephone</span>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">
                    <a href={PRACTICE_INFO.telLink} className="hover:text-teal-700 transition-colors">
                      {PRACTICE_INFO.telephone}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-200/60">
                <Clock className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Consultation Hours</span>
                  <p className="text-sm text-slate-700 mt-0.5">
                    Monday &ndash; Friday &middot; By Prior Appointment
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-200/60">
                <Train className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Subway Transit</span>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                    Midtown East &middot; Lexington Ave / 53rd St (<span className="font-semibold text-slate-800">E, M</span>) &middot; 51st St (<span className="font-semibold text-slate-800">6</span>) &middot; 5th Ave / 59th St (<span className="font-semibold text-slate-800">N, R, W</span>)
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={PRACTICE_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#0F172A] hover:bg-slate-800 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors shadow-2xs whitespace-nowrap"
              >
                <Navigation className="w-4 h-4 text-teal-400" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 bg-[#0D9488] hover:bg-[#0f766e] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors shadow-2xs whitespace-nowrap"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>

          {/* Right Column: Embedded Responsive Map & Building Context */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-slate-200/90 shadow-lg bg-slate-100 flex flex-col">
              {/* Map view header bar */}
              <div className="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 font-medium">
                  <MapPin className="w-4 h-4 text-teal-400" />
                  <span>110 E 55th St, 9th Floor, New York, NY 10022</span>
                </div>
                <a
                  href={PRACTICE_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 font-semibold inline-flex items-center gap-1"
                >
                  <span>Open Full Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Embedded Google Maps View centered on 110 E 55th St */}
              <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full bg-slate-200">
                <iframe
                  title="Dr. James A. Underberg, MD Practice Location Map"
                  src="https://maps.google.com/maps?q=110+E+55th+St,+New+York,+NY+10022&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Bottom location accessibility helper */}
              <div className="p-4 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-600" />
                  <span>Building entrance between Park Avenue & Lexington Avenue</span>
                </div>
                <span className="text-slate-400">Elevator access to 9th Floor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
