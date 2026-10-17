import React, { useState, useEffect, useId } from 'react';
import {
  X,
  Calendar as CalendarIcon,
  Clock,
  User,
  Mail,
  Phone,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  AlertCircle,
  FileText,
  Shield,
  Download,
} from 'lucide-react';
import { PRACTICE_INFO, MEDICAL_SERVICES } from '../data/practiceData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);

  // Form State
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [visitType, setVisitType] = useState<string>(
    preselectedService || 'Internal Medicine Consultation'
  );

  const [patientName, setPatientName] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientStatus, setPatientStatus] = useState<'New' | 'Returning'>('New');

  const [visitReason, setVisitReason] = useState('');
  const [privacyAgreed, setPrivacyAgreed] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  // Update preselected service if passed
  useEffect(() => {
    if (preselectedService) {
      setVisitType(preselectedService);
    }
  }, [preselectedService]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Available slots
  const TIME_SLOTS = [
    '09:00 AM',
    '10:15 AM',
    '11:30 AM',
    '01:30 PM',
    '02:45 PM',
    '04:00 PM',
  ];

  // Generate the next 14 business days
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    let current = new Date(today);
    current.setDate(current.getDate() + 1); // Start tomorrow

    while (dates.length < 10) {
      const dayOfWeek = current.getDay();
      // 0 = Sun, 6 = Sat
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        dates.push({
          raw: current.toISOString().split('T')[0],
          display: current.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
          }),
          dayName: current.toLocaleDateString('en-US', { weekday: 'short' }),
          dayNum: current.getDate(),
          monthName: current.toLocaleDateString('en-US', { month: 'short' }),
        });
      }
      current.setDate(current.getDate() + 1);
    }
    return dates;
  };

  const availableDates = getAvailableDates();

  // Validate Step 1
  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!selectedDate) newErrors.date = 'Please select a preferred consultation date.';
    if (!selectedTime) newErrors.time = 'Please select an available appointment time slot.';
    if (!visitType) newErrors.visitType = 'Please select a consultation type.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validate Step 2
  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (!patientName.trim()) newErrors.patientName = 'Full name is required.';
    if (!patientEmail.trim()) {
      newErrors.patientEmail = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(patientEmail)) {
      newErrors.patientEmail = 'Please provide a valid email format.';
    }
    if (!patientPhone.trim()) {
      newErrors.patientPhone = 'Phone number is required.';
    } else if (patientPhone.replace(/\D/g, '').length < 10) {
      newErrors.patientPhone = 'Please provide a valid 10-digit telephone number.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validate Step 3
  const validateStep3 = () => {
    const newErrors: Record<string, string> = {};
    if (!privacyAgreed) {
      newErrors.privacyAgreed = 'You must confirm the privacy notice to proceed.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    } else if (step === 3 && validateStep3()) {
      setStep(4);
    }
  };

  const handleBack = () => {
    if (step > 1 && step < 5) {
      setStep((step - 1) as 1 | 2 | 3 | 4);
    }
  };

  const handleFinalSubmit = () => {
    setIsSubmitting(true);
    // Simulate real booking protocol
    setTimeout(() => {
      const code = 'JAU-' + Math.floor(100000 + Math.random() * 900000);
      setConfirmationCode(code);
      setIsSubmitting(false);
      setStep(5);
    }, 700);
  };

  const resetAndClose = () => {
    setStep(1);
    setSelectedDate('');
    setSelectedTime('');
    setPatientName('');
    setPatientEmail('');
    setPatientPhone('');
    setVisitReason('');
    setPrivacyAgreed(false);
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col my-4">
        {/* Modal Top Banner */}
        <div className="px-6 py-5 bg-[#0F172A] text-white flex items-center justify-between shrink-0">
          <div>
            <div className="text-xs text-teal-400 font-bold uppercase tracking-wider">
              Practice Appointment System
            </div>
            <h2 id="booking-modal-title" className="text-lg sm:text-xl font-bold text-white mt-0.5">
              Request a Consultation &middot; {PRACTICE_INFO.doctorName}
            </h2>
          </div>

          <button
            type="button"
            onClick={resetAndClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-400"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator (Steps 1 to 4) */}
        {step < 5 && (
          <div className="px-5 sm:px-6 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs text-slate-500 font-medium">
            {/* Mobile View: Clean compact step counter & title */}
            <div className="sm:hidden flex items-center gap-2">
              <span className="bg-teal-600 text-white px-2 py-0.5 rounded-sm font-bold text-[11px]">
                Step {step} of 4
              </span>
              <span className="font-semibold text-slate-800 text-xs">
                {step === 1 && 'Date & Time'}
                {step === 2 && 'Patient Details'}
                {step === 3 && 'Visit Context'}
                {step === 4 && 'Review & Confirm'}
              </span>
            </div>

            {/* Tablet & Desktop View: Full breadcrumb progression */}
            <div className="hidden sm:flex items-center gap-2">
              <span className={`px-2 py-0.5 rounded-sm font-bold ${step === 1 ? 'bg-teal-600 text-white' : 'text-slate-700'}`}>
                1. Date & Time
              </span>
              <span>&rarr;</span>
              <span className={`px-2 py-0.5 rounded-sm font-bold ${step === 2 ? 'bg-teal-600 text-white' : 'text-slate-700'}`}>
                2. Contact
              </span>
              <span>&rarr;</span>
              <span className={`px-2 py-0.5 rounded-sm font-bold ${step === 3 ? 'bg-teal-600 text-white' : 'text-slate-700'}`}>
                3. Details
              </span>
              <span>&rarr;</span>
              <span className={`px-2 py-0.5 rounded-sm font-bold ${step === 4 ? 'bg-teal-600 text-white' : 'text-slate-700'}`}>
                4. Review
              </span>
            </div>
            <span className="hidden sm:inline font-mono text-slate-400">Step {step}/4</span>
          </div>
        )}

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto max-h-[70vh]">
          {/* STEP 1: Date, Time & Visit Type */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  1. Select Consultation Type <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    'Internal Medicine Consultation',
                    'Preventive Cardiology & Lipid Evaluation',
                    'Comprehensive Health Screening',
                    'Personalized Wellness Planning',
                    'Chronic Disease Follow-up',
                  ].map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setVisitType(service)}
                      className={`p-3 rounded-xl border text-left transition-all text-xs font-semibold ${
                        visitType === service
                          ? 'border-teal-600 bg-teal-50/70 text-teal-900 ring-1 ring-teal-600/30'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    2. Select Consultation Date <span className="text-red-500">*</span>
                  </label>
                  <span className="text-[11px] text-slate-500">Business Days Only (Mon &ndash; Fri)</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {availableDates.map((d) => {
                    const isSelected = selectedDate === d.raw;
                    return (
                      <button
                        key={d.raw}
                        type="button"
                        onClick={() => setSelectedDate(d.raw)}
                        className={`p-2.5 rounded-xl border text-center transition-all ${
                          isSelected
                            ? 'bg-teal-600 border-teal-600 text-white shadow-xs'
                            : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <div className="text-[11px] uppercase font-semibold">{d.dayName}</div>
                        <div className="text-lg font-bold tabular-nums leading-tight my-0.5">{d.dayNum}</div>
                        <div className="text-[10px] text-slate-400 group-hover:text-slate-600">{d.monthName}</div>
                      </button>
                    );
                  })}
                </div>
                {errors.date && <p className="text-xs text-red-600 mt-1.5">{errors.date}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  3. Select Preferred Time Slot <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {TIME_SLOTS.map((slot) => {
                    const isSelected = selectedTime === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`p-2.5 rounded-xl border text-center text-xs font-bold tabular-nums transition-all flex items-center justify-center gap-2 ${
                          isSelected
                            ? 'bg-[#0F172A] border-[#0F172A] text-white shadow-xs'
                            : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <Clock className="w-3.5 h-3.5" />
                        <span>{slot}</span>
                      </button>
                    );
                  })}
                </div>
                {errors.time && <p className="text-xs text-red-600 mt-1.5">{errors.time}</p>}
              </div>
            </div>
          )}

          {/* STEP 2: Patient Contact Information */}
          {step === 2 && (
            <div className="space-y-5">
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  Patient Contact Details
                </h3>
                <p className="text-xs text-slate-500">
                  Please provide your direct contact details so our office team can reach you.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="booking-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Full Legal Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      id="booking-name"
                      type="text"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      placeholder="Jane Doe"
                      className={`w-full pl-10 pr-3.5 py-2.5 rounded-lg border text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-teal-600 ${
                        errors.patientName ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                      }`}
                    />
                  </div>
                  {errors.patientName && <p className="text-xs text-red-600 mt-1">{errors.patientName}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="booking-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        id="booking-email"
                        type="email"
                        value={patientEmail}
                        onChange={(e) => setPatientEmail(e.target.value)}
                        placeholder="jane.doe@example.com"
                        className={`w-full pl-10 pr-3.5 py-2.5 rounded-lg border text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-teal-600 ${
                          errors.patientEmail ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                        }`}
                      />
                    </div>
                    {errors.patientEmail && <p className="text-xs text-red-600 mt-1">{errors.patientEmail}</p>}
                  </div>

                  <div>
                    <label htmlFor="booking-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Telephone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        id="booking-phone"
                        type="tel"
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        placeholder="(212) 555-0199"
                        className={`w-full pl-10 pr-3.5 py-2.5 rounded-lg border text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-teal-600 ${
                          errors.patientPhone ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                        }`}
                      />
                    </div>
                    {errors.patientPhone && <p className="text-xs text-red-600 mt-1">{errors.patientPhone}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Patient Status
                  </label>
                  <div className="flex items-center gap-6 p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <label className="inline-flex items-center gap-2 text-sm text-slate-800 cursor-pointer">
                      <input
                        type="radio"
                        name="patientStatus"
                        checked={patientStatus === 'New'}
                        onChange={() => setPatientStatus('New')}
                        className="text-teal-600 focus:ring-teal-600"
                      />
                      <span className="font-medium">New Patient</span>
                    </label>

                    <label className="inline-flex items-center gap-2 text-sm text-slate-800 cursor-pointer">
                      <input
                        type="radio"
                        name="patientStatus"
                        checked={patientStatus === 'Returning'}
                        onChange={() => setPatientStatus('Returning')}
                        className="text-teal-600 focus:ring-teal-600"
                      />
                      <span className="font-medium">Returning Patient</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Visit Information & Privacy Notice */}
          {step === 3 && (
            <div className="space-y-5">
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  Visit Background & Privacy Guidance
                </h3>
                <p className="text-xs text-slate-500">
                  Provide brief context regarding your appointment goals.
                </p>
              </div>

              <div>
                <label htmlFor="booking-reason" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Primary Reason for Visit (Optional)
                </label>
                <textarea
                  id="booking-reason"
                  rows={3}
                  value={visitReason}
                  onChange={(e) => setVisitReason(e.target.value)}
                  placeholder="e.g. Annual comprehensive physical, cholesterol review, preventive cardiovascular evaluation, second opinion..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                />
              </div>

              {/* Crucial Privacy Notice */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider">
                  <Shield className="w-4 h-4 text-teal-700" />
                  <span>Confidentiality & Privacy Advisory</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Please do not transmit sensitive clinical diagnostics, insurance card photos, or detailed private medical records through this appointment request form. Clinical documentation and medical history should be provided directly to the physician during your consultation.
                </p>
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={privacyAgreed}
                    onChange={(e) => setPrivacyAgreed(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded-sm border-slate-300 text-teal-600 focus:ring-teal-600"
                  />
                  <span className="text-xs text-slate-700 leading-normal">
                    I acknowledge that this submission is an appointment request that will be verified by the office, and I confirm that I have not entered sensitive medical history into this form. <span className="text-red-500">*</span>
                  </span>
                </label>
                {errors.privacyAgreed && (
                  <p className="text-xs text-red-600 mt-1">{errors.privacyAgreed}</p>
                )}
              </div>
            </div>
          )}

          {/* STEP 4: Review & Confirmation */}
          {step === 4 && (
            <div className="space-y-5">
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  Review Appointment Request Summary
                </h3>
                <p className="text-xs text-slate-500">
                  Please verify your selected appointment schedule and contact information before submitting.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/90 space-y-3.5 text-sm">
                <div className="flex justify-between items-start pb-3 border-b border-slate-200">
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                    Consultation Type:
                  </span>
                  <span className="font-bold text-slate-900 text-right">{visitType}</span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                    Requested Date:
                  </span>
                  <span className="font-bold text-slate-900 tabular-nums">
                    {new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                    Requested Time:
                  </span>
                  <span className="font-bold text-teal-800 tabular-nums">{selectedTime}</span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                    Patient Name & Status:
                  </span>
                  <span className="font-medium text-slate-900">
                    {patientName} ({patientStatus} Patient)
                  </span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                    Contact Details:
                  </span>
                  <span className="font-medium text-slate-900 text-right">
                    {patientPhone} &middot; {patientEmail}
                  </span>
                </div>

                {visitReason && (
                  <div className="pt-1">
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block mb-1">
                      Reason for Visit:
                    </span>
                    <p className="text-xs text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200">
                      {visitReason}
                    </p>
                  </div>
                )}
              </div>

              <div className="p-3.5 rounded-lg bg-teal-50 border border-teal-200 text-xs text-teal-900">
                <span className="font-bold">Next Step:</span> Upon clicking Confirm, our office staff will review doctor availability and reach out to verify any clinical records or insurance questions before locking in your appointment.
              </div>
            </div>
          )}

          {/* STEP 5: Success State */}
          {step === 5 && (
            <div className="py-6 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-teal-50 border-2 border-teal-500 text-teal-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  Request Successfully Submitted
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">
                  Appointment Request Received
                </h3>
                <div className="inline-block mt-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 font-mono text-xs text-slate-700">
                  Confirmation Reference: <span className="font-bold text-slate-900">{confirmationCode}</span>
                </div>
              </div>

              <div className="max-w-md mx-auto p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2 text-slate-700">
                <div className="flex justify-between">
                  <span className="text-slate-500">Patient:</span>
                  <span className="font-semibold text-slate-900">{patientName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Service:</span>
                  <span className="font-semibold text-slate-900">{visitType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Date & Time:</span>
                  <span className="font-semibold text-slate-900">
                    {selectedDate} at {selectedTime}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Office Location:</span>
                  <span className="font-semibold text-slate-900">110 E 55th St, 9th Fl, NYC</span>
                </div>
              </div>

              <div className="max-w-md mx-auto text-xs text-slate-500 leading-relaxed text-left p-3.5 bg-amber-50/70 border border-amber-200/60 rounded-xl space-y-1">
                <span className="font-bold text-amber-900 block">Follow-Up Instructions:</span>
                <p>
                  1. Our scheduling coordinator will telephone you at <span className="font-semibold text-slate-800">{patientPhone}</span> or email <span className="font-semibold text-slate-800">{patientEmail}</span> within 1 business day to confirm and answer questions.
                </p>
                <p>
                  2. Prior to your consultation, please gather a current medication list and any recent laboratory or cardiac diagnostics.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ASUMMARY:Appointment Request with Dr. James A. Underberg, MD%0ADESCRIPTION:Consultation at 110 E 55th St, 9th Floor, New York, NY 10022%0ALOCATION:110 E 55th St, 9th Floor, New York, NY 10022%0AEND:VEVENT%0AEND:VCALENDAR`}
                  download="dr-underberg-appointment-request.ics"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors"
                >
                  <Download className="w-4 h-4 text-slate-500" />
                  <span>Save to Calendar (.ics)</span>
                </a>

                <button
                  type="button"
                  onClick={resetAndClose}
                  className="w-full sm:w-auto bg-[#0D9488] hover:bg-[#0f766e] text-white text-xs font-bold px-6 py-2.5 rounded-lg transition-colors shadow-xs"
                >
                  Return to Website
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls (Steps 1 to 4) */}
        {step < 5 && (
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            {step < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 bg-[#0D9488] hover:bg-[#0f766e] text-white text-xs font-bold px-6 py-2.5 rounded-lg transition-colors shadow-xs"
              >
                <span>Continue</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                disabled={isSubmitting}
                onClick={handleFinalSubmit}
                className="inline-flex items-center gap-2 bg-[#0D9488] hover:bg-[#0f766e] disabled:opacity-70 text-white text-xs font-bold px-7 py-2.5 rounded-lg transition-all shadow-xs"
              >
                {isSubmitting ? (
                  <span>Submitting Request...</span>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Confirm Appointment Request</span>
                  </>
                )}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
