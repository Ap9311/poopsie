import React from 'react';
import { Flame, Disc, CheckCircle2 } from 'lucide-react';

export const BarPizzaExplainer: React.FC = () => {
  const cards = [
    {
      num: '1',
      title: '10-Inch Black Steel Pan',
      desc: 'Every pie is individually baked in its own shallow 10-inch dark metal pan. The pan holds heat and fries the buttered dough base to a light, crispy crunch.',
      borderColor: 'border-l-[#7A1C1C]',
      numBg: 'bg-[#7A1C1C] text-[#D97706]',
    },
    {
      num: '2',
      title: 'Edge-To-Edge Cheese & Sauce',
      desc: 'Unlike Neapolitan or NY style, there is zero border crust left bare. Tomato sauce, toppings, and cheese are spread all the way to the rim.',
      borderColor: 'border-l-[#D97706]',
      numBg: 'bg-[#D97706] text-black',
    },
    {
      num: '3',
      title: 'Crispy Lacy Cheddar Burn',
      desc: 'We use a sharp white cheddar cheese blend. When it hits the hot metal edge of the pan, it caramelizes into a dark, buttery, crunchy rim.',
      borderColor: 'border-l-[#7A1C1C]',
      numBg: 'bg-[#7A1C1C] text-[#D97706]',
      icon: <Flame className="w-4 h-4 text-[#D97706] shrink-0 inline ml-1" />,
    },
  ];

  // Repeat cards 3 times for a seamless infinite loop animation
  const marqueeCards = [...cards, ...cards, ...cards];

  return (
    <section className="bg-[#1C1514] text-[#FBF8F1] py-10 sm:py-16 border-y-4 border-[#D97706] max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#D97706] inline-flex items-center gap-1">
            <Disc className="w-3.5 h-3.5" /> What Is South Shore Bar Pizza?
          </span>
          <h3 className="font-display text-2xl sm:text-4xl font-bold text-[#FBF8F1] leading-tight">
            10-Inch, Edge-to-Edge, No Border Crust
          </h3>
          <p className="text-xs sm:text-base text-[#C5BBAA] leading-relaxed">
            If you're not from the South Shore of Massachusetts, here is why our pizza style has a loyal cult following:
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Swiping Marquee Animation (Right-to-Left) */}
      <div className="relative w-full overflow-hidden py-3 border-y border-[#3D2C28] bg-[#171110]">
        
        {/* Subtle Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#171110] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#171110] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee space-x-4 sm:space-x-6 px-4">
          {marqueeCards.map((card, idx) => (
            <div
              key={idx}
              className={`w-72 sm:w-88 shrink-0 bg-[#261D1B] p-4 sm:p-6 border-l-4 ${card.borderColor} border-y border-r border-[#3D2C28] shadow-md flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center gap-3 mb-2.5">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 ${card.numBg} shrink-0 flex items-center justify-center font-display text-base sm:text-xl font-bold`}>
                    {card.num}
                  </div>
                  <h4 className="font-display text-base sm:text-lg font-bold text-[#FBF8F1] leading-tight">
                    {card.title}
                    {card.icon}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#C5BBAA] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="p-3.5 sm:p-4 bg-[#2D1A17] border border-[#7A1C1C] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-[#E8E0D2] text-center sm:text-left">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#D97706] shrink-0" />
            <span><strong>Pro Tip:</strong> Most folks eat one whole 10-inch bar pizza per person. Ordering for two? Grab two pies!</span>
          </div>
          <a
            href="#menu"
            className="w-full sm:w-auto text-center whitespace-nowrap font-display text-xs font-bold uppercase tracking-wider text-[#1C1514] bg-[#D97706] hover:bg-[#F59E0B] px-4 py-2 transition-colors shrink-0"
          >
            Explore Menu & Prices
          </a>
        </div>
      </div>
    </section>
  );
};
