import React from 'react';
import { MapPin, Phone, Mail, ExternalLink, DollarSign } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#140F0E] text-[#C5BBAA] pt-12 pb-8 border-t-2 border-[#3D2C28]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#2C1D1A]">
          
          {/* Brand & Summary */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="inline-block">
              <span className="font-display text-3xl font-bold tracking-wider text-[#FBF8F1]">
                POOPSIE'S
              </span>
              <span className="block text-xs text-[#D97706] tracking-widest uppercase font-semibold">
                South Shore Bar Pizza since 1973
              </span>
            </a>
            
            <p className="text-xs sm:text-sm text-[#9E9088] leading-relaxed max-w-md">
              A 54-year Pembroke tradition. Cash-only tavern serving 10-inch edge-to-edge bar pizzas, half-pound flat-top burgers, and cold beers.
            </p>

            <div className="inline-flex items-center gap-2 bg-[#281B18] px-3 py-1.5 border border-[#3D2C28] text-xs text-[#FBF8F1]">
              <DollarSign className="w-4 h-4 text-[#D97706] stroke-[3]" />
              <span><strong>CASH ONLY TAVERN</strong> • ATM Inside</span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3 text-xs sm:text-sm">
            <h4 className="font-display text-base font-bold text-[#FBF8F1] uppercase tracking-wider">
              Contact & Location
            </h4>
            
            <div className="flex items-start gap-2 text-[#C5BBAA]">
              <MapPin className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
              <span>243 Church St # A, Pembroke, MA 02359</span>
            </div>

            <div className="flex items-center gap-2 text-[#C5BBAA]">
              <Phone className="w-4 h-4 text-[#D97706] shrink-0" />
              <a href="tel:7818265282" className="hover:text-white transition-colors font-mono font-bold text-base text-[#FBF8F1]">
                (781) 826-5282
              </a>
            </div>

            <div className="flex items-center gap-2 text-[#C5BBAA]">
              <Mail className="w-4 h-4 text-[#D97706] shrink-0" />
              <a href="mailto:donthompson@poopsies.com" className="hover:text-white transition-colors underline">
                donthompson@poopsies.com
              </a>
            </div>
          </div>

          {/* Social Links & Hours Quick Look */}
          <div className="md:col-span-3 space-y-3 text-xs sm:text-sm">
            <h4 className="font-display text-base font-bold text-[#FBF8F1] uppercase tracking-wider">
              Follow & Connect
            </h4>
            
            <div>
              <a
                href="https://facebook.com/BestBarPizza"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1B2738] hover:bg-[#25374E] text-[#60A5FA] px-3.5 py-2 font-display text-xs font-bold uppercase tracking-wider transition-colors border border-[#2B3E59]"
              >
                <span>facebook.com/BestBarPizza</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="pt-2 text-xs text-[#8C7B75]">
              <span className="block text-[#D97706] font-semibold">Closed Every Monday</span>
              <span>Tue–Thu 11:30–10 | Fri–Sat 11:30–11 | Sun 12–9</span>
            </div>
          </div>

        </div>

        {/* Bottom Legal Line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A6B65] text-center sm:text-left">
          <div>
            <strong>Standish Pub, Inc.</strong> — Family owned and operated since 1973.
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Pembroke, MA 02359</span>
            <span>•</span>
            <span>South Shore Bar Pizza Classic</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
