import React from 'react';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-16 sm:py-24 bg-[#FBF8F1] border-b border-[#E0D7C6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Double Rule */}
        <div className="mb-12 text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#7A1C1C]">
            Family Owned & Operated Since 1973
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#1C1514] border-double-tavern pb-3 inline-block">
            Our 54-Year Story
          </h2>
          <p className="text-base sm:text-lg text-[#52443F] font-normal leading-relaxed pt-2">
            No fancy corporate buzzwords. No deep-dish gimmicks. Just honest Pembroke tavern hospitality and 10-inch bar pizzas made the exact same way for over five decades.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Photos Stack */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-[#1C1514] p-2 border border-[#D5C9B3] shadow-md">
                <div className="aspect-[4/3] overflow-hidden bg-[#241A18]">
                  <img
                    src="/src/assets/images/poopsies_pizza_pans_1793881044372.jpg"
                    alt="Stack of seasoned 10-inch black steel bar pizza pans at Poopsie's"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[11px] font-sans text-[#8C7B75] mt-2 text-center italic">
                  Seasoned pan stack — older than the kitchen manager.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="bg-[#1C1514] p-2 border border-[#D5C9B3] shadow-md">
                <div className="aspect-[4/3] overflow-hidden bg-[#241A18]">
                  <img
                    src="/src/assets/images/poopsies_tavern_interior_1793881044863.jpg"
                    alt="Poopsie's traditional New England tavern interior and booth seating"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[11px] font-sans text-[#8C7B75] mt-2 text-center italic">
                  The original Church Street tavern booth room.
                </p>
              </div>
            </div>
          </div>

          {/* Narrative Text */}
          <div className="lg:col-span-6 space-y-6 text-[#2D2422]">
            
            <div className="bg-[#FFFDF7] p-6 sm:p-8 border-2 border-[#7A1C1C] shadow-sm relative">
              <div className="text-xs font-bold uppercase tracking-wider text-[#7A1C1C] mb-2">
                July 19, 1973 • Pembroke, Massachusetts
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1C1514] mb-4">
                "Named After Don's Pet Name for His Late Wife"
              </h3>

              <div className="space-y-4 text-base leading-relaxed text-[#3D322F]">
                <p>
                  On July 19, 1973, Don Thompson opened the doors at 243 Church Street. He named the place after his late wife’s pet name—<strong>"Poopsie"</strong>. Don wanted a cozy, no-nonsense neighborhood pub where South Shore families and workers could grab an ice-cold draft beer and an individual 10-inch bar pizza.
                </p>

                <p>
                  Five decades later, Don's son <strong>Bob Thompson</strong> runs the tavern with the exact same commitment to old-school Pembroke tradition. Many of our cooks, bartenders, and servers have been behind the counter for 20 to 30 years. They know our regular customers by name and how dark they like their pizza edges.
                </p>

                <p>
                  Our 10-inch black steel baking pans have been seasoned by millions of pizzas over 54 years. We don't mess with what works: fresh dough, our tangy tomato sauce, real cheddar blend, crisp edges, and cash on the barrelhead.
                </p>
              </div>

              {/* Founder Signoff box */}
              <div className="mt-6 pt-4 border-t border-[#E8DFC9] flex flex-wrap items-center justify-between gap-4 text-xs">
                <div>
                  <span className="font-display font-bold text-[#1C1514] text-sm block">Standish Pub, Inc.</span>
                  <span className="text-[#6E5D57]">Don Thompson (Founder) & Bob Thompson (2nd Generation)</span>
                </div>
                <div className="bg-[#7A1C1C] text-white px-3 py-1 font-display font-bold uppercase text-[11px]">
                  54 Years & Counting
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
