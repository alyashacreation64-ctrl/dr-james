import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, ArrowUpRight } from 'lucide-react';
import { PRACTICE_INFO } from '../data/practiceData';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3'
          : 'bg-white/80 backdrop-blur-xs border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Display font, clean single line) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="#"
              className="group flex flex-col focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-600 rounded-sm"
              aria-label="Dr. James A. Underberg, MD Homepage"
            >
              <span className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-slate-900 group-hover:text-teal-700 transition-colors whitespace-nowrap">
                {PRACTICE_INFO.doctorName}
              </span>
              <span className="text-[11px] sm:text-xs text-slate-500 font-medium tracking-normal hidden md:inline-block">
                Internal Medicine &middot; Preventive Cardiology &middot; Lipidology
              </span>
            </a>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600"
            aria-label="Primary Navigation"
          >
            <a
              href="#about"
              className="hover:text-slate-900 transition-colors whitespace-nowrap py-1 border-b-2 border-transparent hover:border-teal-600"
            >
              About
            </a>
            <a
              href="#services"
              className="hover:text-slate-900 transition-colors whitespace-nowrap py-1 border-b-2 border-transparent hover:border-teal-600"
            >
              Services
            </a>
            <a
              href="#insights"
              className="hover:text-slate-900 transition-colors whitespace-nowrap py-1 border-b-2 border-transparent hover:border-teal-600"
            >
              Health Insights
            </a>
            <a
              href="#reviews"
              className="hover:text-slate-900 transition-colors whitespace-nowrap py-1 border-b-2 border-transparent hover:border-teal-600"
            >
              Patient Reviews
            </a>
            <a
              href="#faq"
              className="hover:text-slate-900 transition-colors whitespace-nowrap py-1 border-b-2 border-transparent hover:border-teal-600"
            >
              FAQs
            </a>
            <a
              href="#contact"
              className="hover:text-slate-900 transition-colors whitespace-nowrap py-1 border-b-2 border-transparent hover:border-teal-600"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: Primary Actions (Phone + Book Appointment) */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <a
              href={PRACTICE_INFO.telLink}
              className="hidden sm:inline-flex items-center gap-1.5 md:gap-2 text-xs md:text-sm font-medium text-slate-700 hover:text-teal-700 transition-colors px-2 py-1.5 focus-visible:ring-2 focus-visible:ring-teal-600 rounded-md"
              title="Call the Midtown Office"
            >
              <Phone className="w-4 h-4 text-teal-600" aria-hidden="true" />
              <span className="font-semibold tabular-nums">{PRACTICE_INFO.telephone}</span>
            </a>

            <button
              onClick={onOpenBooking}
              type="button"
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#0D9488] hover:bg-[#0f766e] text-white text-xs sm:text-sm font-semibold px-3 py-2 sm:px-5 sm:py-2.5 rounded-lg shadow-xs hover:shadow-sm transition-all duration-200 active:scale-[0.98] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
              <span className="hidden sm:inline">Book Appointment</span>
              <span className="sm:hidden">Book</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-teal-600"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-x-0 top-full bg-white border-b border-slate-200 shadow-xl transition-all max-h-[calc(100vh-4.5rem)] overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="px-6 py-6 space-y-4">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Practice Specialties
              </span>
              <p className="text-sm font-medium text-slate-800 mt-1">
                Internal Medicine &middot; Preventive Cardiology &middot; Lipidology
              </p>
            </div>

            <nav className="flex flex-col space-y-3">
              {[
                { name: 'Home', href: '#' },
                { name: 'About the Doctor', href: '#about' },
                { name: 'Medical Services', href: '#services' },
                { name: 'Health Insights', href: '#insights' },
                { name: 'Patient Reviews', href: '#reviews' },
                { name: 'Frequently Asked Questions', href: '#faq' },
                { name: 'Office & Contact', href: '#contact' },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-base font-medium text-slate-800 hover:text-teal-700 py-2 border-b border-slate-50 transition-colors"
                >
                  <span>{item.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </nav>

            <div className="pt-4 space-y-3">
              <a
                href={PRACTICE_INFO.telLink}
                className="w-full flex items-center justify-center gap-2 border border-slate-200 text-slate-800 hover:bg-slate-50 font-semibold py-3 rounded-lg text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-teal-600" />
                <span>Call {PRACTICE_INFO.telephone}</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#0D9488] hover:bg-[#0f766e] text-white font-semibold py-3 rounded-lg text-sm transition-colors shadow-xs"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment Online</span>
              </button>
            </div>

            <div className="text-xs text-slate-500 pt-2 text-center">
              110 E 55th St, 9th Floor, New York, NY 10022
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
