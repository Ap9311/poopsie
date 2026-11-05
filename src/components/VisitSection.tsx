import React from 'react';
import { MapPin, Phone, Clock, DollarSign, Ban, Car, Users, Info, ExternalLink } from 'lucide-react';

export const VisitSection: React.FC = () => {
  return (
    <section id="visit" className="py-12 sm:py-24 bg-[#F5EFE4] border-b border-[#E0D7C6] max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with clear spacing between kicker and main heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2 sm:space-y-4">
          <div className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#7A1C1C] block">
            Find Us in Pembroke, MA
          </div>
          <h2 className="font-display text-2xl sm:text-5xl font-bold text-[#1C1514] border-double-tavern pb-2 sm:pb-3 inline-block leading-tight">
            Hours & Location
          </h2>
          <p className="text-xs sm:text-base text-[#52443F] leading-relaxed">
            Located right on Church Street (Route 139). Pull up, grab a booth, or call in your takeout order.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Column 1: Location & Contact Info */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            
            <div className="bg-[#FFFDF7] p-4 sm:p-8 border-2 border-[#1C1514] shadow-md space-y-4 sm:space-y-6">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1C1514] border-b border-[#E8DFC9] pb-2 sm:pb-3">
                Tavern Address & Phone
              </h3>

              <div className="space-y-4">
                
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#7A1C1C] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#D97706]" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#7A1C1C] block mb-0.5">Address</span>
                    <strong className="text-sm sm:text-base text-[#1C1514] block">Poopsie's</strong>
                    <address className="not-italic text-xs sm:text-sm text-[#4A3E3B] leading-snug">
                      243 Church St # A<br />
                      Pembroke, MA 02359
                    </address>
                    <a
                      href="https://maps.google.com/?q=243+Church+St+A,+Pembroke,+MA+02359"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#7A1C1C] hover:text-[#962222] mt-1.5 underline"
                    >
                      <span>Get Driving Directions</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-[#E8DFC9]">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#7A1C1C] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#D97706]" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#7A1C1C] block mb-0.5">Phone Order Line</span>
                    <a
                      href="tel:7818265282"
                      className="text-lg sm:text-2xl font-display font-bold text-[#1C1514] hover:text-[#7A1C1C] transition-colors block"
                    >
                      (781) 826-5282
                    </a>
                    <span className="text-[10px] sm:text-xs text-[#7A6B65]">Tap phone number to call directly</span>
                  </div>
                </div>

              </div>

              {/* Tavern Policy Checklist */}
              <div className="pt-3 sm:pt-4 border-t border-[#E8DFC9] space-y-2">
                <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#1C1514] mb-2">Tavern Policies & Details</h4>
                <div className="grid grid-cols-2 gap-2 text-[11px] sm:text-xs text-[#3D322F]">
                  <div className="flex items-center gap-1 font-semibold text-[#7A1C1C]">
                    <DollarSign className="w-3.5 h-3.5 text-[#D97706] stroke-[3] shrink-0" />
                    <span>CASH ONLY (ATM)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Ban className="w-3.5 h-3.5 text-[#8C7B75] shrink-0" />
                    <span>No Delivery</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Ban className="w-3.5 h-3.5 text-[#8C7B75] shrink-0" />
                    <span>No Reservations</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Car className="w-3.5 h-3.5 text-[#8C7B75] shrink-0" />
                    <span>Free Parking</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#8C7B75] shrink-0" />
                    <span>Dine-In & Takeout</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Info className="w-3.5 h-3.5 text-[#8C7B75] shrink-0" />
                    <span>Kids Welcome</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Interactive Static Map Placeholder Card */}
            <div className="bg-[#1C1514] text-[#FBF8F1] p-3 sm:p-4 border border-[#3D2C28] shadow-md">
              <div className="relative aspect-[16/9] bg-[#2E2422] flex flex-col items-center justify-center p-3 sm:p-4 text-center border border-[#4E3D39] overflow-hidden">
                <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-[#D97706] mb-1.5" />
                <span className="font-display text-base sm:text-lg font-bold">243 Church St # A, Pembroke</span>
                <span className="text-[10px] sm:text-xs text-[#C5BBAA] mt-0.5">Route 139 Pembroke • Free Parking</span>
                <a
                  href="https://maps.google.com/?q=243+Church+St+A,+Pembroke,+MA+02359"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2.5 bg-[#7A1C1C] hover:bg-[#962222] text-white px-3.5 py-1.5 font-display text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow transition-colors inline-flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          {/* Column 2: Hours Table (Targeted by Selector 5) */}
          <div className="lg:col-span-7">
            
            <div className="bg-[#FFFDF7] border-2 border-[#1C1514] p-4 sm:p-8 shadow-md space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-[#E8DFC9] pb-3 gap-2">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1C1514] flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#7A1C1C] shrink-0" /> Weekly Hours
                  </h3>
                  <span className="text-[11px] sm:text-xs text-[#7A6B65]">Kitchen opens daily at 11:30 AM (12 PM Sunday)</span>
                </div>
                
                <span className="bg-[#581111] text-[#FBF8F1] text-[10px] sm:text-xs font-display font-bold uppercase px-2.5 py-0.5 self-start sm:self-auto">
                  Est. 1973
                </span>
              </div>

              {/* Hours Table */}
              <div className="divide-y divide-[#EFE9DC] text-xs sm:text-base">
                
                {/* MONDAY CLOSED ROW */}
                <div className="py-2.5 px-2.5 bg-[#FCE8E8] border-l-4 border-[#7A1C1C] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <strong className="font-display text-base sm:text-lg text-[#7A1C1C]">MONDAY</strong>
                    <span className="text-[10px] sm:text-xs text-[#7A1C1C] font-semibold">(Rest & Pan Seasoning)</span>
                  </div>
                  <span className="font-display text-xs sm:text-base font-bold text-[#7A1C1C] uppercase px-2 py-0.5 bg-[#7A1C1C] text-white shrink-0">
                    CLOSED
                  </span>
                </div>

                <div className="py-2.5 px-2.5 flex items-center justify-between">
                  <span className="font-display font-semibold text-[#1C1514]">Tuesday</span>
                  <span className="font-mono text-xs sm:text-sm font-semibold text-[#3D322F]">11:30 AM – 10:00 PM</span>
                </div>

                <div className="py-2.5 px-2.5 flex items-center justify-between">
                  <span className="font-display font-semibold text-[#1C1514]">Wednesday</span>
                  <span className="font-mono text-xs sm:text-sm font-semibold text-[#3D322F]">11:30 AM – 10:00 PM</span>
                </div>

                <div className="py-2.5 px-2.5 flex items-center justify-between">
                  <span className="font-display font-semibold text-[#1C1514]">Thursday</span>
                  <span className="font-mono text-xs sm:text-sm font-semibold text-[#3D322F]">11:30 AM – 10:00 PM</span>
                </div>

                <div className="py-2.5 px-2.5 bg-[#FFF9ED] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="font-display font-bold text-[#1C1514]">Friday</span>
                    <span className="text-[9px] sm:text-[11px] font-semibold text-[#D97706] bg-[#2E2422] px-1 py-0.5">FISH & CHIPS</span>
                  </div>
                  <span className="font-mono text-xs sm:text-sm font-bold text-[#1C1514] shrink-0">11:30 AM – 11:00 PM</span>
                </div>

                <div className="py-2.5 px-2.5 bg-[#FFF9ED] flex items-center justify-between">
                  <span className="font-display font-bold text-[#1C1514]">Saturday</span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-[#1C1514]">11:30 AM – 11:00 PM</span>
                </div>

                <div className="py-2.5 px-2.5 flex items-center justify-between">
                  <span className="font-display font-semibold text-[#1C1514]">Sunday</span>
                  <span className="font-mono text-xs sm:text-sm font-semibold text-[#3D322F]">12:00 PM – 9:00 PM</span>
                </div>

              </div>

              {/* Call to action box */}
              <div className="mt-4 sm:mt-6 p-3.5 sm:p-4 bg-[#1C1514] text-[#FBF8F1] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <div>
                  <h4 className="font-display text-base sm:text-lg font-bold text-[#D97706]">Calling in Takeout?</h4>
                  <p className="text-[11px] sm:text-xs text-[#C5BBAA]">Give us 15–20 minutes during peak dinner hours.</p>
                </div>
                <a
                  href="tel:7818265282"
                  className="w-full sm:w-auto bg-[#7A1C1C] hover:bg-[#962222] text-white px-4 py-2 sm:px-5 sm:py-2.5 font-display text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors shrink-0"
                >
                  Call (781) 826-5282
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
