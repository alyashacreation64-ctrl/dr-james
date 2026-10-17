import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, Calendar, ArrowRight } from 'lucide-react';
import { FAQ_ITEMS, PRACTICE_INFO } from '../data/practiceData';

interface FaqSectionProps {
  onOpenBooking: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking }) => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Title & Office Contact Card */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700">
              <HelpCircle className="w-4 h-4" />
              <span>Patient Inquiries</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] leading-tight text-balance">
              Frequently Asked Questions
            </h2>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Find transparent information regarding consultations, appointment scheduling, insurance verification, and office visits with Dr. Underberg.
            </p>

            {/* Assistance card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-4">
              <h3 className="text-base font-bold text-slate-900">
                Have a specific question?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our office coordinator is pleased to assist with insurance verification, scheduling inquiries, and consultation logistics.
              </p>

              <div className="pt-2 space-y-2.5">
                <a
                  href={PRACTICE_INFO.telLink}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0F172A] hover:bg-slate-800 text-white text-xs font-semibold py-2.5 rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4 text-teal-400" />
                  <span>Call {PRACTICE_INFO.telephone}</span>
                </a>

                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full inline-flex items-center justify-center gap-2 border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-semibold py-2.5 rounded-lg transition-colors"
                >
                  <Calendar className="w-4 h-4 text-teal-600" />
                  <span>Request Appointment</span>
                </button>
              </div>

              <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-100 text-center">
                Office Hours: Monday – Friday &middot; By Scheduled Appointment
              </div>
            </div>
          </div>

          {/* Right Column: Accordion Questions */}
          <div className="lg:col-span-7 space-y-4">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-slate-200/90 overflow-hidden transition-all duration-200 hover:border-slate-300 shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-600"
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {item.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'bg-teal-50 text-teal-700 rotate-180' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${item.id}`}
                      className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-50 animate-in fade-in duration-150"
                    >
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
