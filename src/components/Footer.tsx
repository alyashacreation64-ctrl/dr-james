import React from 'react';
import {
  Phone,
  MapPin,
  Calendar,
  Shield,
  ArrowUp,
  ExternalLink,
  Facebook,
  Instagram,
  Youtube,
} from 'lucide-react';
import { PRACTICE_INFO, MEDICAL_SERVICES } from '../data/practiceData';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenLegal: (type: 'privacy' | 'terms' | 'accessibility') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F172A] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          {/* Practice Identity (Zone 1 - 4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xl font-bold text-white tracking-tight">
              {PRACTICE_INFO.doctorName}
            </h3>
            <p className="text-xs text-teal-400 font-semibold tracking-wider uppercase">
              Internal Medicine &middot; Preventive Cardiology &middot; Lipidology
            </p>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Providing personalized internal medicine and specialized cardiovascular prevention in Midtown Manhattan, focused on long-term wellness and metabolic vitality.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>110 E 55th St, 9th Floor, New York, NY 10022</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={PRACTICE_INFO.telLink} className="hover:text-white transition-colors font-mono font-semibold">
                  {PRACTICE_INFO.telephone}
                </a>
              </div>
            </div>

            {/* Social Media Links (Prompt Rule: Do not invent social accounts; link responsibly) */}
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                Practice Profiles & Inquiries
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={`https://www.facebook.com/search/top?q=Dr.+James+A.+Underberg`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-700"
                  aria-label="Facebook Profile Search for Dr. James A. Underberg"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={`https://www.instagram.com/explore/tags/preventivecardiology/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-700"
                  aria-label="Instagram Clinical Insights Tag"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={`https://www.youtube.com/results?search_query=Dr.+James+A.+Underberg+Lipidology`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-700"
                  aria-label="YouTube Medical Lectures & Discussions"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href={PRACTICE_INFO.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-teal-400 flex items-center gap-1 font-medium pl-1"
                >
                  <span>Google Reviews ({PRACTICE_INFO.googleRating} ★)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Nav Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-teal-400 transition-colors">
                  About the Doctor
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-400 transition-colors">
                  Clinical Services
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:text-teal-400 transition-colors">
                  Health Insights & Blog
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-teal-400 transition-colors">
                  Patient Reviews ({PRACTICE_INFO.googleRating} ★)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-teal-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-teal-400 transition-colors">
                  Midtown Location & Transit
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-teal-400 transition-colors">
                  Contact Office
                </a>
              </li>
            </ul>
          </div>

          {/* Medical Services (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Medical Specialties
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {MEDICAL_SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-teal-400 transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Booking & Office Action (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Appointments
            </h4>
            <p className="text-xs text-slate-400">
              Schedule your consultation online or speak with our coordinator.
            </p>
            <button
              type="button"
              onClick={onOpenBooking}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#0D9488] hover:bg-[#0f766e] text-white text-xs font-bold py-2.5 px-4 rounded-lg shadow-xs transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>

            <a
              href={PRACTICE_INFO.telLink}
              className="w-full inline-flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white text-xs font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>Call Office</span>
            </a>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; 2026 {PRACTICE_INFO.doctorName}. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-slate-200 transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => onOpenLegal('terms')}
              className="hover:text-slate-200 transition-colors underline-offset-4 hover:underline"
            >
              Terms of Use & Clinical Disclaimer
            </button>
            <button
              type="button"
              onClick={() => onOpenLegal('accessibility')}
              className="hover:text-slate-200 transition-colors underline-offset-4 hover:underline"
            >
              Accessibility Statement
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-teal-400 hover:text-teal-300 transition-colors"
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
