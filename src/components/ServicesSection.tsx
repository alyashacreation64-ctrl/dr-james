import React, { useState } from 'react';
import {
  Stethoscope,
  ShieldCheck,
  HeartPulse,
  Activity,
  ClipboardList,
  ArrowRight,
  Calendar,
  X,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { MEDICAL_SERVICES, MedicalService, PRACTICE_INFO } from '../data/practiceData';

interface ServicesSectionProps {
  onOpenBookingWithService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBookingWithService }) => {
  const [selectedService, setSelectedService] = useState<MedicalService | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope':
        return <Stethoscope className="w-6 h-6 text-teal-700" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-teal-700" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6 text-teal-700" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-teal-700" />;
      case 'ClipboardList':
        return <ClipboardList className="w-6 h-6 text-teal-700" />;
      default:
        return <Stethoscope className="w-6 h-6 text-teal-700" />;
    }
  };

  const handleBookService = (service: MedicalService) => {
    setSelectedService(null);
    if (onOpenBookingWithService) {
      onOpenBookingWithService(service.title);
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 mb-3">
            <span>Specialized Clinical Practice</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] mb-4 text-balance">
            Comprehensive Medical Care & Preventive Clinical Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Specialized consultations focused on early risk identification, individualized internal medicine care, and cardiovascular health management in Midtown Manhattan.
          </p>
        </div>

        {/* 5 Sophisticated Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {MEDICAL_SERVICES.map((service, index) => {
            const isFeatured = index === 2; // Cardiovascular & Lipid Health as marquee capability
            return (
              <div
                key={service.id}
                className={`relative rounded-2xl bg-white border transition-all duration-300 flex flex-col justify-between p-7 group hover:-translate-y-1 ${
                  isFeatured
                    ? 'border-teal-600/60 shadow-md ring-1 ring-teal-600/10 md:col-span-2 lg:col-span-1'
                    : 'border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-teal-50/80 border border-teal-100 flex items-center justify-center shrink-0 group-hover:bg-teal-100/80 transition-colors">
                      {getServiceIcon(service.iconName)}
                    </div>
                    {isFeatured && (
                      <span className="text-xs font-semibold text-teal-800 bg-teal-50/90 px-2.5 py-1 rounded-md border border-teal-200/60">
                        Core Specialty
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-800 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                    {service.clinicalFocus.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-teal-700 transition-colors py-1 group/btn"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleBookService(service)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-teal-700 hover:text-teal-900 bg-teal-50 hover:bg-teal-100/70 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Consult</span>
                  </button>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Practice Approach Summary / Call office */}
          <div className="rounded-2xl bg-[#0F172A] text-white p-7 flex flex-col justify-between border border-slate-800 shadow-md md:col-span-2 lg:col-span-1">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-5 text-teal-400">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Questions About Your Care?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Our Midtown staff is available to discuss visit preparation, prior records, and consultation scheduling directly by telephone.
              </p>
              <div className="space-y-2 text-xs text-slate-400 mb-6">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-300">Office Telephone:</span>
                  <a href={PRACTICE_INFO.telLink} className="text-teal-400 hover:underline font-mono">
                    {PRACTICE_INFO.telephone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-300">Location:</span>
                  <span>110 E 55th St, 9th Fl, NYC</span>
                </div>
              </div>
            </div>

            <a
              href={PRACTICE_INFO.telLink}
              className="w-full inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold py-2.5 rounded-lg transition-colors"
            >
              <span>Call Office Directly</span>
            </a>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          <div className="relative bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
                {getServiceIcon(selectedService.iconName)}
              </div>
              <div>
                <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider">
                  Clinical Service Overview
                </span>
                <h3 id="service-modal-title" className="text-xl sm:text-2xl font-bold text-slate-900">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <div className="space-y-5 text-sm text-slate-600 leading-relaxed mb-6 max-h-[60vh] overflow-y-auto pr-1">
              <p className="text-slate-800 font-medium">
                {selectedService.fullDescription}
              </p>

              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                  Clinical Evaluation Areas
                </h4>
                <ul className="space-y-2">
                  {selectedService.clinicalFocus.map((focus, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700">{focus}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
                <div>
                  <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider">What to Expect</h5>
                  <p className="text-xs text-slate-600 mt-1">{selectedService.whatToExpect}</p>
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Patient Preparation Note</h5>
                  <p className="text-xs text-slate-600 mt-1">{selectedService.preparationNote}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-slate-500 italic bg-amber-50/60 p-3 rounded-lg border border-amber-200/50">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  Consultation details and specific diagnostic procedures depend entirely on individualized clinical evaluation by Dr. Underberg.
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={PRACTICE_INFO.telLink}
                className="w-full sm:w-auto text-center text-xs font-semibold text-slate-600 hover:text-slate-900 px-4 py-2"
              >
                Questions? Call {PRACTICE_INFO.telephone}
              </a>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => handleBookService(selectedService)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-[#0D9488] hover:bg-[#0f766e] text-white text-xs font-semibold px-5 py-2 rounded-lg shadow-xs transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book This Consultation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
