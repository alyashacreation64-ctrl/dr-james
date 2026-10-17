import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HealthInsightsSection } from './components/HealthInsightsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { LegalModals } from './components/LegalModals';
import { Calendar, Phone } from 'lucide-react';
import { PRACTICE_INFO } from './data/practiceData';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [activeLegalModal, setActiveLegalModal] = useState<
    'privacy' | 'terms' | 'accessibility' | null
  >(null);

  const handleOpenBooking = (serviceName?: string) => {
    setPreselectedService(serviceName);
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
    setPreselectedService(undefined);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans selection:bg-teal-500/20 selection:text-slate-900 pb-16 md:pb-0">
      {/* Sticky Navigation Header */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main className="grow">
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* About the Doctor & Practice Approach */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* Specialized Medical Services (5 Cards + Detail Modal) */}
        <ServicesSection onOpenBookingWithService={(serviceName) => handleOpenBooking(serviceName)} />

        {/* Why Patients Choose This Practice (4 Pillars) */}
        <WhyChooseUs />

        {/* Health Insights & Medical Blog (4 Articles + Reader Modal) */}
        <HealthInsightsSection onOpenBooking={() => handleOpenBooking()} />

        {/* Patient Reviews & Verified Social Proof */}
        <ReviewsSection />

        {/* Frequently Asked Questions */}
        <FaqSection onOpenBooking={() => handleOpenBooking()} />

        {/* Midtown Manhattan Location & Map */}
        <LocationSection onOpenBooking={() => handleOpenBooking()} />

        {/* Contact Practice Section */}
        <ContactSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Global Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenLegal={(type) => setActiveLegalModal(type)}
      />

      {/* Interactive 5-Step Appointment Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={handleCloseBooking}
        preselectedService={preselectedService}
      />

      {/* Legal & Policy Modals */}
      <LegalModals
        type={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />

      {/* Mobile-Only Sticky Floating Action Bar (stays under 15% mobile viewport height) */}
      <aside aria-label="Mobile quick actions" className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-4 py-2.5 shadow-lg flex items-center justify-between gap-3">
        <a
          href={PRACTICE_INFO.telLink}
          className="flex-1 inline-flex items-center justify-center gap-2 border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold py-2.5 rounded-lg transition-colors whitespace-nowrap"
        >
          <Phone className="w-4 h-4 text-teal-600" />
          <span>Call Office</span>
        </a>

        <button
          type="button"
          onClick={() => handleOpenBooking()}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0D9488] hover:bg-[#0f766e] text-white text-xs font-bold py-2.5 rounded-lg transition-colors shadow-xs whitespace-nowrap"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Consult</span>
        </button>
      </aside>
    </div>
  );
}
