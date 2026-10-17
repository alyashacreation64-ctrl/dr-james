import React, { useState } from 'react';
import {
  Star,
  ExternalLink,
  ThumbsUp,
  Search,
  CheckCircle2,
  Filter,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';
import {
  PRACTICE_INFO,
  GOOGLE_RATING_METRICS,
  GOOGLE_REVIEWS_LIST,
  GoogleReview,
} from '../data/practiceData';

export const ReviewsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [likedReviews, setLikedReviews] = useState<Record<string, boolean>>({});

  const toggleHelpful = (id: string) => {
    setLikedReviews((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const categories = [
    'All',
    'Cardiology & Lipids',
    'Thorough & Attentive',
    'Preventive Health',
    'Internal Medicine',
    'Office Experience',
  ];

  const filteredReviews = GOOGLE_REVIEWS_LIST.filter((review) => {
    const matchesCategory =
      selectedCategory === 'All' || review.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      review.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (review.highlightedPhrase &&
        review.highlightedPhrase.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="reviews" className="py-16 sm:py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 mb-2.5">
            <ShieldCheck className="w-4 h-4" />
            <span>Google Maps Verified Reputation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0F172A] mb-3 text-balance">
            Patient Experience & Google Reviews
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Read verified patient feedback for Dr. James A. Underberg, MD at 110 E 55th St, New York. Based on 94+ authentic Google reviews.
          </p>
        </div>

        {/* Google Reviews Master Rating Card */}
        <div className="rounded-2xl bg-slate-50 border border-slate-200/90 p-5 sm:p-8 lg:p-10 mb-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Google Score & Stars (Col 1 - 4) */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left border-b lg:border-b-0 lg:border-r border-slate-200/80 pb-6 lg:pb-0 lg:pr-8">
              {/* Google Brand Pill */}
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 mb-3 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-2xs">
                <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
                <span>Google Verified Medical Business</span>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tight tabular-nums">
                  {PRACTICE_INFO.googleRating}
                </span>
                <span className="text-sm sm:text-base font-semibold text-slate-500">
                  out of 5.0
                </span>
              </div>

              <div className="flex text-amber-400 my-2" aria-label="4.9 stars out of 5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-xs sm:text-sm font-medium text-slate-600 mb-4">
                Based on <span className="font-bold text-slate-900">{PRACTICE_INFO.reviewCount}</span>
              </p>

              <a
                href={PRACTICE_INFO.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-100 text-slate-800 text-xs font-semibold px-4 py-2.5 rounded-xl border border-slate-300 shadow-2xs transition-all hover:border-slate-400"
              >
                <span>Write a Google Review</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>

            {/* Rating Distribution Bar Chart (Col 5 - 8) */}
            <div className="lg:col-span-5 space-y-2.5">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                Rating Distribution
              </span>
              {GOOGLE_RATING_METRICS.distribution.map((bar) => (
                <div key={bar.stars} className="flex items-center gap-3 text-xs text-slate-600 font-medium">
                  <div className="w-12 flex items-center justify-end gap-1 shrink-0">
                    <span className="font-semibold tabular-nums">{bar.stars}</span>
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  </div>
                  <div className="flex-1 h-2.5 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-400 rounded-full transition-all duration-500"
                      style={{ width: `${bar.percentage}%` }}
                    />
                  </div>
                  <span className="w-12 text-right tabular-nums text-slate-500 font-mono text-[11px]">
                    {bar.count}
                  </span>
                </div>
              ))}
            </div>

            {/* Rated Care Dimensions (Col 9 - 12) */}
            <div className="lg:col-span-3 space-y-3 bg-white p-4 sm:p-5 rounded-xl border border-slate-200/80">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                Care Experience Scores
              </span>
              <div className="space-y-2.5 text-xs">
                {GOOGLE_RATING_METRICS.aspects.map((aspect) => (
                  <div key={aspect.label} className="flex items-center justify-between">
                    <span className="text-slate-600">{aspect.label}</span>
                    <span className="font-bold text-teal-800 tabular-nums bg-teal-50 px-1.5 py-0.5 rounded-sm">
                      {aspect.score} ★
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Search & Topic Filters */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search reviews (e.g. cholesterol, ApoB, thorough, unhurried)..."
                className="w-full pl-9 pr-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-teal-600 bg-white placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            <a
              href={PRACTICE_INFO.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-teal-800 transition-colors py-2"
            >
              <span>Open Google Maps Place</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs font-semibold text-slate-500 whitespace-nowrap mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              <span>Topic:</span>
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#0F172A] text-white shadow-2xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.length > 0 ? (
            filteredReviews.map((review) => {
              const isLiked = likedReviews[review.id];
              const displayHelpful = isLiked ? review.helpfulCount + 1 : review.helpfulCount;

              return (
                <div
                  key={review.id}
                  className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Reviewer Header */}
                    <div className="flex items-start justify-between gap-3 mb-3.5">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-full ${review.avatarBg} text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-2xs`}
                        >
                          {review.authorInitial}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="text-sm font-bold text-slate-900">{review.author}</h4>
                            {review.isLocalGuide && (
                              <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/60 px-1.5 py-0.2 rounded-xs">
                                Local Guide
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-500">{review.reviewCountText}</p>
                        </div>
                      </div>

                      {/* Google G watermark */}
                      <svg className="w-4 h-4 opacity-70 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fill="#4285F4"
                          d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                        />
                      </svg>
                    </div>

                    {/* Star Rating & Relative Date */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex text-amber-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {review.dateText}
                      </span>
                    </div>

                    {/* Highlighted snippet if present */}
                    {review.highlightedPhrase && (
                      <div className="mb-2 text-xs font-bold text-teal-800 bg-teal-50/70 px-2.5 py-1 rounded-md border border-teal-100 inline-block">
                        &ldquo;{review.highlightedPhrase}&rdquo;
                      </div>
                    )}

                    {/* Review Body */}
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal mb-4">
                      {review.text}
                    </p>

                    {/* Doctor's Response Box if present */}
                    {review.ownerResponse && (
                      <div className="mb-4 p-3 rounded-xl bg-slate-50 border-l-2 border-teal-600 border-t border-r border-b border-slate-200/60 text-xs">
                        <div className="flex items-center gap-1.5 font-bold text-slate-900 mb-1">
                          <MessageSquare className="w-3 h-3 text-teal-600" />
                          <span>Response from Dr. James A. Underberg, MD</span>
                          <span className="text-slate-400 font-normal">· {review.ownerResponse.dateText}</span>
                        </div>
                        <p className="text-slate-600 leading-normal">
                          {review.ownerResponse.text}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Card Bottom Helpful Action */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <button
                      type="button"
                      onClick={() => toggleHelpful(review.id)}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
                        isLiked
                          ? 'bg-teal-50 text-teal-700 font-bold'
                          : 'hover:bg-slate-100 text-slate-600'
                      }`}
                    >
                      <ThumbsUp className={`w-3.5 h-3.5 ${isLiked ? 'fill-teal-700' : ''}`} />
                      <span>Helpful ({displayHelpful})</span>
                    </button>

                    <span className="text-[11px] text-slate-400">{review.category}</span>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full py-12 text-center bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-sm font-semibold text-slate-700">No reviews found matching &ldquo;{searchQuery}&rdquo;</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-2 text-xs font-bold text-teal-700 hover:underline"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>

        {/* View All on Google Maps Footer Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0F172A] text-white flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Read All 94+ Verified Google Reviews
              </h4>
              <p className="text-xs text-slate-300">
                Dr. James A. Underberg, MD &middot; 110 E 55th St, 9th Floor, New York, NY
              </p>
            </div>
          </div>

          <a
            href={PRACTICE_INFO.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#0D9488] hover:bg-[#0f766e] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl transition-colors shadow-xs whitespace-nowrap w-full sm:w-auto"
          >
            <span>Open in Google Maps</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
