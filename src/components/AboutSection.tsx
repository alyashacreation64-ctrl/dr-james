import React from 'react';
import { ArrowRight, Calendar, Heart, Shield, Stethoscope, CheckCircle2 } from 'lucide-react';
import { PRACTICE_INFO } from '../data/practiceData';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual / Practice Identity Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl bg-[#0F172A] text-white p-8 sm:p-10 shadow-xl overflow-hidden">
              {/* Subtle architectural background texture */}
              <div
                className="absolute inset-0 opacity-10 bg-[radial-gradient(#0D9488_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider">
                  <Stethoscope className="w-4 h-4" />
                  <span>Clinical Philosophy</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
                  Precision in diagnosis. <br className="hidden sm:inline" />
                  Foresight in prevention.
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Private medical care should offer more than hurried prescriptions. Dr. Underberg’s practice focuses on comprehensive evaluations that illuminate underlying physiological mechanisms, guiding proactive interventions that protect cardiovascular and metabolic health over decades.
                </p>

                <div className="pt-4 border-t border-slate-800 space-y-3.5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Comprehensive Diagnostic Reviews</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Meticulous synthesis of medical records, symptoms, and advanced laboratory biomarkers.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Cardiovascular & Lipid Specialization</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Targeted identification of atherogenic lipoproteins and hereditary cardiovascular risk.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Direct Physician Partnership</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Dedicated, unhurried time to review findings and discuss questions in depth.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Location</div>
                  <p className="text-sm font-medium text-slate-200 mt-1">{PRACTICE_INFO.address.full}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Narrative Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700">
              <span>About The Practice</span>
              <span aria-hidden="true">&middot;</span>
              <span>{PRACTICE_INFO.doctorName}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] leading-tight text-balance">
              Personalized Medicine. A More Proactive Approach to Health.
            </h2>

            <div className="space-y-4 text-base text-slate-600 leading-relaxed">
              <p>
                Modern healthcare too often defaults to a reactive posture—addressing clinical symptoms only after diseases have taken root. At our Midtown Manhattan office, Dr. James A. Underberg, MD provides an intentional, proactive alternative grounded in individualized internal medicine and specialized preventive cardiology.
              </p>
              <p>
                By integrating rigorous diagnostics with focused expertise in lipidology and cardiovascular risk assessment, Dr. Underberg partners with patients to construct comprehensive health roadmaps. Consultations delve into critical markers often overlooked in standard annual checkups, such as advanced cholesterol particle numbers (ApoB), lipoprotein(a), and subclinical vascular inflammation.
              </p>
              <p>
                Whether you are seeking thorough primary adult healthcare, management of complex cholesterol concerns, or a structured strategy for sustainable longevity, care is personalized to your distinct physiology and health goals.
              </p>
            </div>

            {/* Specialties Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <Stethoscope className="w-5 h-5 text-teal-700 mb-2" />
                <h4 className="text-sm font-bold text-slate-900">Internal Medicine</h4>
                <p className="text-xs text-slate-500 mt-1">Holistic adult medical care & multisystem evaluation.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <Heart className="w-5 h-5 text-teal-700 mb-2" />
                <h4 className="text-sm font-bold text-slate-900">Preventive Cardiology</h4>
                <p className="text-xs text-slate-500 mt-1">Preclinical vascular assessment & risk mitigation.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <Shield className="w-5 h-5 text-teal-700 mb-2" />
                <h4 className="text-sm font-bold text-slate-900">Lipidology</h4>
                <p className="text-xs text-slate-500 mt-1">Expert evaluation of cholesterol & lipid disorders.</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0F172A] hover:text-teal-700 transition-colors group"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-[#0D9488] hover:bg-[#0f766e] text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-2xs transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Request a Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
