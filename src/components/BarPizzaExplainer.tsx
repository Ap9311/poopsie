import React from 'react';
import { Flame, Disc, CheckCircle2 } from 'lucide-react';

export const BarPizzaExplainer: React.FC = () => {
  return (
    <section className="bg-[#1C1514] text-[#FBF8F1] py-12 px-4 sm:px-6 lg:px-8 border-y-4 border-[#D97706]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D97706] inline-flex items-center gap-1">
            <Disc className="w-3.5 h-3.5" /> What Is South Shore Bar Pizza?
          </span>
          <h3 className="font-display text-2xl sm:text-4xl font-bold text-[#FBF8F1]">
            10-Inch, Edge-to-Edge, No Border Crust
          </h3>
          <p className="text-sm sm:text-base text-[#C5BBAA]">
            If you're not from the South Shore of Massachusetts, here is why our pizza style has a loyal cult following:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-[#261D1B] p-6 border border-[#3D2C28] relative">
            <div className="w-10 h-10 bg-[#7A1C1C] text-[#D97706] flex items-center justify-center font-display text-xl font-bold mb-4">
              1
            </div>
            <h4 className="font-display text-lg font-bold text-[#FBF8F1] mb-2">10-Inch Black Steel Pan</h4>
            <p className="text-xs sm:text-sm text-[#C5BBAA] leading-relaxed">
              Every pie is individually baked in its own shallow 10-inch dark metal pan. The pan holds the heat and fries the buttered dough base to a light, crispy crunch.
            </p>
          </div>

          <div className="bg-[#261D1B] p-6 border border-[#7A1C1C] relative">
            <div className="w-10 h-10 bg-[#D97706] text-black flex items-center justify-center font-display text-xl font-bold mb-4">
              2
            </div>
            <h4 className="font-display text-lg font-bold text-[#FBF8F1] mb-2">Edge-To-Edge Cheese & Sauce</h4>
            <p className="text-xs sm:text-sm text-[#C5BBAA] leading-relaxed">
              Unlike Neapolitan or New York style, there is <strong>zero border crust left bare</strong>. Tomato sauce, toppings, and cheese are spread all the way to the rim.
            </p>
          </div>

          <div className="bg-[#261D1B] p-6 border border-[#3D2C28] relative">
            <div className="w-10 h-10 bg-[#7A1C1C] text-[#D97706] flex items-center justify-center font-display text-xl font-bold mb-4">
              3
            </div>
            <h4 className="font-display text-lg font-bold text-[#FBF8F1] mb-2 flex items-center gap-1.5">
              <span>Crispy Lacy Cheddar Burn</span>
              <Flame className="w-4 h-4 text-[#D97706]" />
            </h4>
            <p className="text-xs sm:text-sm text-[#C5BBAA] leading-relaxed">
              We use a sharp white cheddar cheese blend. When it hits the hot metal edge of the pan, it caramelizes into a dark, buttery, crunchy rim. (Ask for "Well Done" or "Lacy Edge"!).
            </p>
          </div>

        </div>

        <div className="mt-8 p-4 bg-[#2D1A17] border border-[#7A1C1C] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#E8E0D2]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#D97706] shrink-0" />
            <span><strong>Pro Tip:</strong> Most folks eat one whole 10-inch bar pizza per person. Ordering for two? Grab two pies!</span>
          </div>
          <a
            href="#menu"
            className="whitespace-nowrap font-display text-xs font-bold uppercase tracking-wider text-[#1C1514] bg-[#D97706] hover:bg-[#F59E0B] px-4 py-2 transition-colors"
          >
            Explore Menu & Prices
          </a>
        </div>

      </div>
    </section>
  );
};
