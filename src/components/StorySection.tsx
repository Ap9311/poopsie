import React from 'react';
import { ShieldCheck, Users, Calendar, Award } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-12 sm:py-24 bg-[#FBF8F1] border-b border-[#E0D7C6] max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-8 sm:mb-12 text-center max-w-3xl mx-auto space-y-2 sm:space-y-3">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#7A1C1C] block">
            Standalone, Family-Owned & Operated Since 1973
          </span>
          <h2 className="font-display text-2xl sm:text-5xl font-bold text-[#1C1514] border-double-tavern pb-2 sm:pb-3 inline-block leading-tight">
            54 Years of Pembroke History
          </h2>
          <p className="text-xs sm:text-lg text-[#52443F] font-normal leading-relaxed pt-1 sm:pt-2">
            No frills. No delivery. Cash only. Just authentic South Shore bar pizza, great tavern food, and 54 years of New England family tradition.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Photos & Fact Callout Stack */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-[#1C1514] p-1.5 sm:p-2 border border-[#D5C9B3] shadow-md">
                <div className="aspect-[4/3] overflow-hidden bg-[#241A18]">
                  <img
                    src="/assets/images/poopsies_pizza_pans_1793881044372.jpg"
                    alt="Seasoned black steel 10-inch bar pizza pans stacked at Poopsie's"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[10px] sm:text-[11px] font-sans text-[#E8E0D2] mt-1.5 text-center italic">
                  Pans older than kitchen manager Tony Malaguti (38)!
                </p>
              </div>

              <div className="bg-[#1C1514] p-1.5 sm:p-2 border border-[#D5C9B3] shadow-md">
                <div className="aspect-[4/3] overflow-hidden bg-[#241A18]">
                  <img
                    src="/assets/images/poopsies_tavern_interior_1793881044863.jpg"
                    alt="Original booth seating at Poopsie's Pembroke MA tavern"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[10px] sm:text-[11px] font-sans text-[#E8E0D2] mt-1.5 text-center italic">
                  243 Church St booth room since July 19, 1973.
                </p>
              </div>
            </div>

            {/* Quick Fact Grid */}
            <div className="bg-[#FFFDF7] p-3.5 sm:p-5 border-2 border-[#1C1514] grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-[#3D322F]">
              <div>
                <span className="text-[9px] sm:text-[10px] font-bold uppercase text-[#7A1C1C] block">FOUNDED</span>
                <strong className="text-xs sm:text-sm font-display text-[#1C1514] block">July 19, 1973</strong>
                <span className="text-[#6E5D57] text-[10px] sm:text-xs">Don Thompson</span>
              </div>
              <div className="border-l border-[#E8DFC9] pl-3">
                <span className="text-[9px] sm:text-[10px] font-bold uppercase text-[#7A1C1C] block">CURRENT OWNER</span>
                <strong className="text-xs sm:text-sm font-display text-[#1C1514] block">Bob Thompson</strong>
                <span className="text-[#6E5D57] text-[10px] sm:text-xs">Don's Son (2nd Gen)</span>
              </div>
              <div className="border-l border-[#E8DFC9] pl-3 col-span-2 sm:col-span-1">
                <span className="text-[9px] sm:text-[10px] font-bold uppercase text-[#7A1C1C] block">STAFF</span>
                <strong className="text-xs sm:text-sm font-display text-[#1C1514] block">~26 Employees</strong>
                <span className="text-[#6E5D57] text-[10px] sm:text-xs">Decades of Service</span>
              </div>
            </div>

          </div>

          {/* Narrative Text (Targeted by Selector 6) */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-[#2D2422]">
            
            <div className="bg-[#FFFDF7] p-4 sm:p-8 border-2 border-[#7A1C1C] shadow-sm relative space-y-3 sm:space-y-4">
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-[#E8DFC9] pb-3 gap-1">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#7A1C1C]">
                  Standish Pub, Inc. • Pembroke, MA
                </span>
                <span className="bg-[#7A1C1C] text-white text-[9px] sm:text-[10px] font-display font-bold uppercase px-2 py-0.5">
                  54 Years Running
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-3xl font-bold text-[#1C1514] leading-snug">
                "Named After Don's Pet Name for His Late Wife"
              </h3>

              <div className="space-y-3 sm:space-y-4 text-xs sm:text-base leading-relaxed text-[#3D322F]">
                <p>
                  On <strong>July 19, 1973</strong>, Don Thompson opened the doors at 243 Church Street. He named the tavern after his late wife's affectionate pet name—<strong>"Poopsie"</strong>. Don envisioned a friendly, no-nonsense tavern where South Shore families could enjoy a cold drink and an individual 10-inch bar pizza.
                </p>

                <p>
                  Today, Don's son <strong>Bob Thompson</strong> carries on the second-generation family legacy. Supported by a dedicated crew of ~26 employees—many who have worked behind the bar and kitchen for decades—Poopsie's remains completely standalone and independent.
                </p>

                <p className="bg-[#FFF8EA] p-3 border-l-4 border-[#D97706] text-xs sm:text-sm text-[#4E3D39] italic">
                  Fun Fact: Some of our seasoned black steel baking pans have been in continuous daily use since before kitchen manager <strong>Tony Malaguti</strong> (age 38) was even born!
                </p>

                <p>
                  We stick to what made us a South Shore institution: cash only, no reservations, zero border crust, and the crisp cheddar burn you can't find anywhere else.
                </p>
              </div>

              {/* Corporate details */}
              <div className="pt-3 border-t border-[#E8DFC9] grid grid-cols-2 sm:grid-cols-3 gap-2 text-[10px] sm:text-[11px] text-[#6E5D57]">
                <div>
                  <strong className="block text-[#1C1514]">Entity:</strong> Standish Pub, Inc.
                </div>
                <div>
                  <strong className="block text-[#1C1514]">Pres:</strong> R. Donald Thompson
                </div>
                <div>
                  <strong className="block text-[#1C1514]">BBB Rating:</strong> A+ Accredited File
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
