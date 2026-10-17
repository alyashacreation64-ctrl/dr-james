import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Navigation,
  Send,
  CheckCircle,
  AlertCircle,
  Shield,
  ArrowRight,
} from 'lucide-react';
import { PRACTICE_INFO } from '../data/practiceData';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredMethod: 'Phone',
    message: '',
    privacyConsent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a 10-digit phone number.';
    }
    if (!formData.privacyConsent) {
      newErrors.privacyConsent = 'You must confirm the privacy acknowledgment.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real communication protocol
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Practice Direct Lines & Call to Action */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700">
              <Mail className="w-4 h-4" />
              <span>Direct Office Communication</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] leading-tight text-balance">
              Your Health Deserves Thoughtful Attention.
            </h2>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Connect with the office to discuss appointments and learn more about available services.
            </p>

            {/* Direct Cards */}
            <div className="space-y-4 pt-2">
              <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      Office Telephone
                    </span>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">
                      {PRACTICE_INFO.telephone}
                    </p>
                  </div>
                </div>

                <a
                  href={PRACTICE_INFO.telLink}
                  className="inline-flex items-center gap-1.5 bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors shadow-2xs"
                >
                  <span>Call Now</span>
                </a>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      Practice Address
                    </span>
                    <p className="text-sm font-medium text-slate-900 mt-0.5">
                      110 E 55th St, 9th Floor, New York, NY 10022
                    </p>
                  </div>
                </div>

                <a
                  href={PRACTICE_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-teal-600" />
                  <span>Directions</span>
                </a>
              </div>
            </div>

            {/* Direct Booking Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0F172A] hover:bg-slate-800 text-white text-sm font-semibold px-6 py-3.5 rounded-xl transition-colors shadow-xs"
              >
                <Calendar className="w-4 h-4 text-teal-400" />
                <span>Request an Appointment Online</span>
              </button>
            </div>

            <div className="p-4 rounded-xl bg-slate-100/90 border border-slate-200 text-xs text-slate-600 space-y-1">
              <span className="font-bold text-slate-900 block">Office Scheduling & Inquiries</span>
              <p>
                Our scheduling coordinator is available Monday through Friday to answer questions regarding consultation availability, prior records, and visit logistics.
              </p>
            </div>
          </div>

          {/* Right Column: General Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-10">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Send an Office Message
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Our clinical team typically responds within one business day.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 text-center space-y-4 bg-teal-50/60 rounded-xl border border-teal-200">
                  <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">
                    Message Received
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-slate-800">{formData.fullName}</span>. Your message has been sent to our office team. We will contact you at{' '}
                    <span className="font-semibold text-slate-800">{formData.email}</span> or by telephone shortly.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          preferredMethod: 'Phone',
                          message: '',
                          privacyConsent: false,
                        });
                      }}
                      className="text-xs font-semibold text-teal-700 hover:underline"
                    >
                      Send another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-teal-600 ${
                          errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-slate-300 bg-white'
                        }`}
                        placeholder="e.g. Jane Doe"
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-teal-600 ${
                          errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-300 bg-white'
                        }`}
                        placeholder="jane.doe@example.com"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Telephone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-teal-600 ${
                          errors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-300 bg-white'
                        }`}
                        placeholder="(212) 555-0199"
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Preferred Contact Method
                      </label>
                      <div className="flex items-center gap-4 py-2">
                        <label className="inline-flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredMethod"
                            checked={formData.preferredMethod === 'Phone'}
                            onChange={() => setFormData({ ...formData, preferredMethod: 'Phone' })}
                            className="text-teal-600 focus:ring-teal-600"
                          />
                          <span>Phone</span>
                        </label>
                        <label className="inline-flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredMethod"
                            checked={formData.preferredMethod === 'Email'}
                            onChange={() => setFormData({ ...formData, preferredMethod: 'Email' })}
                            className="text-teal-600 focus:ring-teal-600"
                          />
                          <span>Email</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Inquiry or Message (Optional)
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                      placeholder="Please share general questions regarding office appointments or services. Please do not submit confidential medical records or acute symptom descriptions through this form."
                    />
                  </div>

                  {/* Privacy Consent Checkbox */}
                  <div className="pt-1">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.privacyConsent}
                        onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                        className="mt-1 h-4 w-4 rounded-sm border-slate-300 text-teal-600 focus:ring-teal-600"
                      />
                      <span className="text-xs text-slate-600 leading-normal">
                        I understand this form is for non-urgent appointment and practice inquiries only, and I agree not to transmit sensitive clinical records through an unencrypted web form.
                      </span>
                    </label>
                    {errors.privacyConsent && (
                      <p className="text-xs text-red-600 mt-1">{errors.privacyConsent}</p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0D9488] hover:bg-[#0f766e] disabled:opacity-70 text-white text-sm font-semibold px-8 py-3 rounded-lg transition-all shadow-xs"
                    >
                      {isSubmitting ? (
                        <span>Submitting inquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
