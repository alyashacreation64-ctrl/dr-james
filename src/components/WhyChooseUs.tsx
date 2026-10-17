import React from 'react';
import { UserCheck, ShieldAlert, Heart, Compass, Check } from 'lucide-react';
import { TRUST_PILLARS, PRACTICE_INFO } from '../data/practiceData';

export const WhyChooseUs: React.FC = () => {
  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-teal-700" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-teal-700" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-teal-700" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-teal-700" />;
      default:
        return <UserCheck className="w-5 h-5 text-teal-700" />;
    }
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 mb-3">
            <span>Practice Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] mb-4 text-balance">
            A Thoughtful Clinical Model Grounded in Medical Rigor
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Our practice is intentionally structured around direct communication, comprehensive diagnostic evaluations, and long-term preventive strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRUST_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-5 shadow-2xs">
                  {getPillarIcon(pillar.iconName)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-medium text-slate-500">
                <Check className="w-3.5 h-3.5 text-teal-600" />
                <span>Verified clinical focus</span>
              </div>
            </div>
          ))}
        </div>

        {/* Practice Trust Adjacency Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs uppercase tracking-wider text-teal-400 font-bold">
              Patient Satisfaction & Reputation
            </div>
            <p className="text-base sm:text-lg font-semibold text-white">
              {PRACTICE_INFO.googleRating} ★ average across {PRACTICE_INFO.reviewCount} for Dr. James A. Underberg, MD
            </p>
          </div>

          <a
            href={PRACTICE_INFO.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg border border-white/20 transition-colors whitespace-nowrap"
          >
            <span>Read Google Reviews</span>
          </a>
        </div>
      </div>
    </section>
  );
};
