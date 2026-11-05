import React from 'react';
import { PRESS_REVIEWS } from '../data/menuData';
import { Quote, Award, Star } from 'lucide-react';

export const PressSection: React.FC = () => {
  return (
    <section id="press" className="py-16 bg-[#1C1514] text-[#FBF8F1] border-b-4 border-[#7A1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D97706] flex items-center justify-center gap-1">
            <Award className="w-4 h-4 text-[#D97706]" /> Accolades & Local Love
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#FBF8F1] border-double-amber pb-3 inline-block">
            What the South Shore Says
          </h2>
          <p className="text-sm sm:text-base text-[#C5BBAA]">
            No paid advertising. Just 54 years of word-of-mouth praise from pizza obsessives, food critics, and local families.
          </p>
        </div>

        {/* Publication Logos Strip */}
        <div className="mb-12 py-6 px-4 bg-[#261D1B] border border-[#3D2C28] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-center text-center">
          <div className="space-y-1">
            <span className="font-display text-lg sm:text-xl font-bold tracking-wider text-[#FBF8F1] block">
              EATER BOSTON
            </span>
            <span className="text-[10px] text-[#A89A85] uppercase tracking-widest">Essential Bar Pizza</span>
          </div>
          
          <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-[#3D2C28] pt-3 sm:pt-0">
            <span className="font-display text-lg sm:text-xl font-bold tracking-wider text-[#FBF8F1] block">
              THE BOSTON GLOBE
            </span>
            <span className="text-[10px] text-[#A89A85] uppercase tracking-widest">Tavern Icon</span>
          </div>

          <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-[#3D2C28] pt-3 sm:pt-0">
            <span className="font-display text-lg sm:text-xl font-bold tracking-wider text-[#FBF8F1] block">
              BOSTON MAGAZINE
            </span>
            <span className="text-[10px] text-[#A89A85] uppercase tracking-widest">Best of Boston</span>
          </div>

          <div className="space-y-1 border-t md:border-t-0 md:border-l border-[#3D2C28] pt-3 md:pt-0">
            <span className="font-display text-lg sm:text-xl font-bold tracking-wider text-[#FBF8F1] block">
              PATRIOT LEDGER
            </span>
            <span className="text-[10px] text-[#A89A85] uppercase tracking-widest">South Shore Pride</span>
          </div>

          <div className="space-y-1 border-t md:border-t-0 md:border-l border-[#3D2C28] pt-3 md:pt-0 col-span-2 sm:col-span-1">
            <span className="font-display text-lg sm:text-xl font-bold tracking-wider text-[#D97706] block">
              NEXTDOOR FAVORITE
            </span>
            <span className="text-[10px] text-[#A89A85] uppercase tracking-widest">8 Years (2017–2024)</span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRESS_REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="bg-[#241A18] p-6 border border-[#3D2C28] relative flex flex-col justify-between"
            >
              <Quote className="w-8 h-8 text-[#7A1C1C] mb-3 opacity-60" />
              
              <blockquote className="text-sm text-[#E8E0D2] font-normal italic leading-relaxed mb-6">
                "{review.quote}"
              </blockquote>

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
    </section>
  );
};
