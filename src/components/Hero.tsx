import React from 'react';
import { Phone, Award, Utensils, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenCustomPizza: () => void;
  onGoToMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCustomPizza, onGoToMenu }) => {
  return (
    <section className="relative bg-[#1C1514] text-[#FBF8F1] overflow-hidden border-b-4 border-[#7A1C1C] max-w-full">
      {/* Background Image with Dark Scrim Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/images/poopsies_hero_bar_pizza_1793881043593.jpg')` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#1C1514] via-[#1C1514]/80 to-[#1C1514]/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24 max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center max-w-full">
          
          {/* Main Hero Copy Column */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 max-w-full">
            
            {/* Kicker badge / metadata line */}
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-sm font-semibold tracking-wider text-[#D97706] uppercase bg-[#2C1D1A] px-2.5 py-1 border border-[#4A322D] max-w-full overflow-hidden">
              <ShieldCheck className="w-4 h-4 text-[#D97706] shrink-0" />
              <span className="truncate">PEMBROKE, MA • EST. JULY 19, 1973</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#FBF8F1] leading-[1.08] text-balance max-w-full">
              The Best Bar Pizza <br className="hidden sm:inline" />
              <span className="text-[#D97706]">on the South Shore</span>
            </h1>

            {/* Subline */}
            <p className="text-base sm:text-lg lg:text-xl text-[#E8E0D2] font-normal leading-relaxed max-w-2xl">
              Family-run since 1973. Cash only. Dine-in or takeout. Crisp 10-inch black steel pan pizzas baked with cheddar cheese edge-to-edge.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-full">
              <a
                href="tel:7818265282"
                className="inline-flex items-center justify-center gap-2.5 bg-[#7A1C1C] hover:bg-[#962222] text-white px-6 sm:px-8 py-3.5 sm:py-4 font-display text-base sm:text-xl font-bold tracking-wider uppercase transition-colors border border-[#B92F2F] shadow-xl text-center"
              >
                <Phone className="w-5 h-5 text-[#D97706] fill-current shrink-0" />
                <span>Call to Order (781) 826-5282</span>
              </a>

              <button
                onClick={onGoToMenu}
                className="inline-flex items-center justify-center gap-2 bg-[#2E2422] hover:bg-[#3D302D] text-[#FBF8F1] hover:text-white px-5 sm:px-6 py-3.5 sm:py-4 font-display text-base sm:text-lg font-semibold tracking-wider uppercase transition-colors border border-[#4E3D39] text-center"
              >
                <Utensils className="w-5 h-5 text-[#C5BBAA] shrink-0" />
                <span>See Full Menu</span>
              </button>
            </div>

            {/* Key Quick Facts Row */}
            <div className="pt-4 grid grid-cols-3 gap-2 sm:gap-4 border-t border-[#3D2926] text-xs sm:text-sm text-[#C5BBAA] max-w-full">
              <div>
                <span className="block font-display text-base sm:text-xl font-bold text-[#FBF8F1]">54 YEARS</span>
                <span className="text-[10px] sm:text-xs">Family Owned</span>
              </div>
              <div className="border-l border-[#3D2926] pl-2 sm:pl-4">
                <span className="block font-display text-base sm:text-xl font-bold text-[#D97706]">CASH ONLY</span>
                <span className="text-[10px] sm:text-xs">ATM Inside</span>
              </div>
              <div className="border-l border-[#3D2926] pl-2 sm:pl-4">
                <span className="block font-display text-base sm:text-xl font-bold text-[#FBF8F1]">10" PAN</span>
                <span className="text-[10px] sm:text-xs">Lacy Edge</span>
              </div>
            </div>

            {/* Badges / Press Mentions */}
            <div className="pt-3 pb-1 flex flex-col sm:flex-row sm:items-center gap-2 text-xs text-[#A89A85] border-t border-[#2E2422] max-w-full">
              <span className="inline-flex items-center gap-1.5 font-semibold text-[#E8E0D2]">
                <Award className="w-4 h-4 text-[#D97706] shrink-0" /> Nextdoor Neighborhood Favorite (8 Yrs)
              </span>
              <span className="hidden sm:inline text-[#4E3D39]">|</span>
              <span className="text-[11px] sm:text-xs">Featured in <strong className="text-[#E8E0D2]">The Boston Globe</strong>, <strong className="text-[#E8E0D2]">Eater Boston</strong>, & <strong className="text-[#E8E0D2]">Boston Magazine</strong></span>
            </div>

          </div>

          {/* Hero Feature Card: The Beauty Bar Pizza Highlight */}
          <div className="lg:col-span-5 max-w-full">
            <div className="bg-[#241A18] border-2 border-[#7A1C1C] p-4 sm:p-5 shadow-2xl relative max-w-full">
              
              {/* Clean Card Header */}
              <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-[#3D2926]">
                <span className="bg-[#7A1C1C] text-white text-[10px] sm:text-xs font-display font-bold uppercase tracking-wider px-2 py-0.5">
                  South Shore Icon
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-[#D97706] bg-[#3B2816] px-2 py-0.5 border border-[#694827] shrink-0">
                  #1 TOP SELLER
                </span>
              </div>
              
              <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-square overflow-hidden bg-black mb-3.5 border border-[#3D2926] max-w-full">
                <img
                  src="/assets/images/poopsies_beauty_pizza_1793881046019.jpg"
                  alt="Poopsie's Beauty Bar Pizza with diced pepperoni, al dente onions, and burnt lacy cheddar crust"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2 max-w-full">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#FBF8F1]">THE BEAUTY</h3>
                  <span className="font-display text-base sm:text-lg font-bold text-[#D97706]">$8.75</span>
                </div>
                <p className="text-xs sm:text-sm text-[#C5BBAA] leading-relaxed">
                  Diced pepperoni with al dente onions, extra cheddar cheese blend, and dark crispy burnt edges.
                </p>
                <div className="pt-2 flex items-center justify-between border-t border-[#3D2926] text-xs">
                  <span className="text-[#A89A85]">10" Black Steel Pan</span>
                  <button
                    onClick={onOpenCustomPizza}
                    className="text-[#D97706] hover:text-[#F59E0B] font-bold uppercase underline underline-offset-4"
                  >
                    Build Custom Pie →
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
