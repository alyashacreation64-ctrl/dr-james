import React, { useState } from 'react';
import {
  BookOpen,
  Clock,
  ArrowRight,
  X,
  Share2,
  Check,
  Calendar,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import { HEALTH_ARTICLES, HealthArticle, PRACTICE_INFO } from '../data/practiceData';

interface HealthInsightsSectionProps {
  onOpenBooking: () => void;
}

export const HealthInsightsSection: React.FC<HealthInsightsSectionProps> = ({ onOpenBooking }) => {
  const [selectedArticle, setSelectedArticle] = useState<HealthArticle | null>(null);
  const [copied, setCopied] = useState(false);

  const handleShare = (article: HealthArticle) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `${window.location.origin}/#insights?article=${article.id}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="insights" className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 mb-3">
              <BookOpen className="w-4 h-4" />
              <span>Medical Education & Research</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] mb-3 text-balance">
              Health Insights & Clinical Perspectives
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Evidence-informed clinical discussions on cholesterol physiology, early cardiovascular risk prevention, and sustainable longevity practices.
            </p>
          </div>

          <div className="shrink-0 text-xs text-slate-500 font-medium">
            <span>Reviewed by Clinical Staff</span>
            <span className="mx-2">&middot;</span>
            <span>Educational Series</span>
          </div>
        </div>

        {/* 4 Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HEALTH_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="group bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-slate-800 text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-2xs">
                    {article.category}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{article.readTime}</span>
                    <span aria-hidden="true">&middot;</span>
                    <span>{article.publishDate}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors line-clamp-2 leading-snug mb-2.5">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(article)}
                  className="w-full inline-flex items-center justify-between text-xs font-bold text-teal-700 hover:text-teal-800 pt-3 border-t border-slate-100 transition-colors group/read"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 group-hover/read:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Disclaimer Callout Box */}
        <div className="mt-12 p-4 rounded-xl bg-slate-100/80 border border-slate-200 flex items-start gap-3 text-xs text-slate-500">
          <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
          <p>
            <span className="font-semibold text-slate-700">Educational Notice:</span> Articles published on this website are designed strictly for patient education and do not constitute individualized medical advice, clinical diagnosis, or a doctor-patient relationship. For personalized evaluation, schedule a clinical consultation with Dr. James A. Underberg, MD.
          </p>
        </div>
      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-reader-title"
        >
          <div className="relative bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
            {/* Header controls */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6 shrink-0">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                <span className="font-bold text-teal-700 uppercase tracking-wider">{selectedArticle.category}</span>
                <span aria-hidden="true">&middot;</span>
                <Clock className="w-3.5 h-3.5" />
                <span>{selectedArticle.readTime}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleShare(selectedArticle)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 p-2 rounded-lg hover:bg-slate-100 transition-colors"
                  title="Share link"
                >
                  {copied ? <Check className="w-4 h-4 text-teal-600" /> : <Share2 className="w-4 h-4" />}
                  <span>{copied ? 'Link Copied' : 'Share'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
                  aria-label="Close reader"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto pr-2 space-y-6">
              <div>
                <h1 id="article-reader-title" className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] leading-tight mb-4">
                  {selectedArticle.title}
                </h1>
                <p className="text-base text-slate-600 italic border-l-2 border-teal-600 pl-4 py-1">
                  {selectedArticle.summary}
                </p>
              </div>

              {/* Article Image Banner */}
              <div className="rounded-xl overflow-hidden aspect-[16/9] bg-slate-100">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Body paragraphs */}
              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                {selectedArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Key Takeaways */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Key Clinical Takeaways
                </h4>
                <ul className="space-y-2">
                  {selectedArticle.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Citations */}
              <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                <span className="font-semibold text-slate-700 uppercase tracking-wider block mb-1">
                  Scientific References & Guideline Sources:
                </span>
                {selectedArticle.sourceCitations.map((cite, idx) => (
                  <p key={idx}>&bull; {cite}</p>
                ))}
              </div>

              {/* Clinical Appointment Banner */}
              <div className="p-5 rounded-xl bg-teal-50/80 border border-teal-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Discuss Your Cardiovascular Profile
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Consult with Dr. Underberg at 110 E 55th St, Manhattan for personalized lipid analysis.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedArticle(null);
                    onOpenBooking();
                  }}
                  className="inline-flex items-center gap-1.5 bg-[#0D9488] hover:bg-[#0f766e] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors whitespace-nowrap shadow-xs"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation</span>
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-slate-100 mt-6 flex justify-end shrink-0">
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
