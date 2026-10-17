import React from 'react';
import { X, Shield, FileText, Eye, AlertTriangle } from 'lucide-react';
import { PRACTICE_INFO } from '../data/practiceData';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'accessibility' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div className="relative bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 shrink-0 mb-4">
          <div className="flex items-center gap-2.5">
            {type === 'privacy' && <Shield className="w-5 h-5 text-teal-700" />}
            {type === 'terms' && <FileText className="w-5 h-5 text-teal-700" />}
            {type === 'accessibility' && <Eye className="w-5 h-5 text-teal-700" />}
            <h3 id="legal-modal-title" className="text-xl font-bold text-slate-900">
              {type === 'privacy' && 'Privacy Policy & Data Practices'}
              {type === 'terms' && 'Terms of Use & Clinical Disclaimer'}
              {type === 'accessibility' && 'Accessibility Statement'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto pr-2 space-y-4 text-sm text-slate-600 leading-relaxed">
          {type === 'privacy' && (
            <>
              <p>
                <strong>Effective Date:</strong> October 2026. This Privacy Policy outlines the information collection and handling practices for the web presence of {PRACTICE_INFO.doctorName} (110 E 55th St, 9th Floor, New York, NY 10022).
              </p>
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                1. Information We Collect
              </h4>
              <p>
                We only collect information voluntarily provided by visitors when submitting an appointment request or contact inquiry, including full name, telephone number, email address, and general scheduling preferences.
              </p>
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                2. No Sensitive Health Information via Web Forms
              </h4>
              <p>
                To safeguard patient confidentiality, web forms on this site are designed exclusively for administrative scheduling. Patients are instructed not to submit detailed clinical histories, insurance documentation, or medical diagnostic scans through web forms.
              </p>
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                3. Information Sharing
              </h4>
              <p>
                We do not sell, rent, or commercialize patient contact information. Contact details are used strictly by our practice staff to coordinate clinical consultations and communicate appointment logistics.
              </p>
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                4. Questions
              </h4>
              <p>
                For questions regarding data practices or to update your contact information, contact our office at {PRACTICE_INFO.telephone}.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                1. No Doctor-Patient Relationship
              </h4>
              <p>
                Viewing this website, reading educational health articles, or transmitting an appointment inquiry does not establish a physician-patient relationship with Dr. James A. Underberg, MD. A formal physician-patient relationship is established only upon an in-person or authorized clinical consultation.
              </p>
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                2. Educational Nature of Content
              </h4>
              <p>
                All editorial articles, clinical descriptions, and educational materials are published for general informational purposes only and must not be interpreted as individualized medical advice or specific treatment plans.
              </p>
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                3. No Guarantees
              </h4>
              <p>
                Medicine is an individualized science. Dr. Underberg does not make claims of guaranteed medical cures or predetermined diagnostic outcomes.
              </p>
            </>
          )}

          {type === 'accessibility' && (
            <>
              <p>
                {PRACTICE_INFO.doctorName} is committed to digital accessibility and ensuring that our website provides full access to individuals with disabilities, in compliance with WCAG 2.2 AA guidelines.
              </p>
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                Accessibility Features
              </h4>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>High-contrast typography adhering to WCAG AA color contrast standards.</li>
                <li>Fully keyboard-navigable interactive controls, modals, and accordions.</li>
                <li>Clear ARIA landmark labels, focus rings, and screen-reader semantics.</li>
                <li>Respect for <code className="text-xs bg-slate-100 px-1 py-0.5 rounded">prefers-reduced-motion</code> system preferences.</li>
              </ul>
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                Accessibility Feedback
              </h4>
              <p>
                If you encounter any difficulty navigating this website, please call our office directly at {PRACTICE_INFO.telephone} so our staff can assist you with scheduling or information.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-100 mt-4 flex justify-end shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
