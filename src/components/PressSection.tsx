import React from 'react';
import { PRESS_REVIEWS } from '../data/menuData';
import { Quote, Award, Star } from 'lucide-react';

export const PressSection: React.FC = () => {
  // Duplicate array for seamless infinite marquee loop
  const marqueeReviews = [...PRESS_REVIEWS, ...PRESS_REVIEWS, ...PRESS_REVIEWS];

  return (
    <section id="press" className="py-16 bg-[#1C1514] text-[#FBF8F1] border-b-4 border-[#7A1C1C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs font-bold uppercase tracking-widest text-[#D97706] flex items-center justify-center gap-1.5">
            <Award className="w-4 h-4 text-[#D97706]" /> Accolades & Press Coverage
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#FBF8F1] border-double-amber pb-3 inline-block">
            What the Critics & Locals Say
          </h2>
          <p className="text-sm sm:text-base text-[#C5BBAA]">
            54 years of organic word-of-mouth acclaim from Boston food critics and Plymouth County families.
          </p>
        </div>

        {/* Publication Badges Strip */}
        <div className="mt-8 py-5 px-4 bg-[#261D1B] border border-[#3D2C28] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center justify-center text-center text-xs">
          <div className="space-y-0.5">
            <span className="font-display text-lg font-bold tracking-wider text-[#FBF8F1] block">
              EATER BOSTON
            </span>
            <span className="text-[10px] text-[#A89A85] uppercase tracking-wider">Essential Bar Pizza</span>
          </div>

          <div className="space-y-0.5 border-l border-[#3D2C28] pl-2">
            <span className="font-display text-lg font-bold tracking-wider text-[#FBF8F1] block">
              THE BOSTON GLOBE
            </span>
            <span className="text-[10px] text-[#A89A85] uppercase tracking-wider">Tavern Icon</span>
          </div>

          <div className="space-y-0.5 border-l border-[#3D2C28] pl-2">
            <span className="font-display text-lg font-bold tracking-wider text-[#FBF8F1] block">
              BOSTON MAGAZINE
            </span>
            <span className="text-[10px] text-[#A89A85] uppercase tracking-wider">Best of Boston</span>
          </div>

          <div className="space-y-0.5 border-l border-[#3D2C28] pl-2">
            <span className="font-display text-lg font-bold tracking-wider text-[#FBF8F1] block">
              PATRIOT LEDGER
            </span>
            <span className="text-[10px] text-[#A89A85] uppercase tracking-wider">South Shore Pride</span>
          </div>

          <div className="space-y-0.5 border-l border-[#3D2C28] pl-2 col-span-2 sm:col-span-1">
            <span className="font-display text-lg font-bold tracking-wider text-[#D97706] block">
              NEXTDOOR FAVORITE
            </span>
            <span className="text-[10px] text-[#A89A85] uppercase tracking-wider">8-Year Winner</span>
          </div>
        </div>

      </div>

      {/* Infinite Horizontal Swiping Marquee (Right-to-Left) */}
      <div className="relative w-full overflow-hidden py-4 border-y border-[#3D2C28] bg-[#171110]">
        
        {/* Subtle Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#171110] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#171110] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee space-x-6 px-4">
          {marqueeReviews.map((review, idx) => (
            <div
              key={idx}
              className="w-80 sm:w-96 shrink-0 bg-[#241A18] p-6 border border-[#3D2C28] shadow-md flex flex-col justify-between"
            >
              <div>
                <Quote className="w-6 h-6 text-[#7A1C1C] mb-2 opacity-80" />
                <p className="text-sm text-[#E8E0D2] font-normal italic leading-relaxed mb-4">
                  "{review.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#3D2C28] flex items-center justify-between">
                <span className="font-display text-sm font-bold text-[#D97706] uppercase tracking-wide">
                  {review.source}
                </span>
                <div className="flex gap-0.5 text-[#D97706]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="text-center mt-6">
        <span className="text-[11px] text-[#8C7B75]">
          Hover or tap any review to pause scrolling
        </span>
      </div>
    </section>
  );
};
