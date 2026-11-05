import React from 'react';
import { DIRECTORY_LINKS } from '../data/menuData';
import { MapPin, Phone, Mail, ExternalLink, DollarSign, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#140F0E] text-[#C5BBAA] pt-12 pb-8 border-t-2 border-[#3D2C28]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#2C1D1A]">
          
          {/* Brand & Summary */}
          <div className="md:col-span-4 space-y-4">
            <a href="#" className="inline-block">
              <span className="font-display text-3xl font-bold tracking-wider text-[#FBF8F1]">
                POOPSIE'S
              </span>
              <span className="block text-xs text-[#D97706] tracking-widest uppercase font-semibold">
                South Shore Bar Pizza since 1973
              </span>
            </a>
            
            <p className="text-xs sm:text-sm text-[#9E9088] leading-relaxed">
              Standalone, family-owned tavern run by Bob Thompson. Famous 10-inch edge-to-edge bar pizza, pub burgers, and cold draft beer.
            </p>

            <div className="inline-flex items-center gap-2 bg-[#281B18] px-3 py-1.5 border border-[#3D2C28] text-xs text-[#FBF8F1]">
              <DollarSign className="w-4 h-4 text-[#D97706] stroke-[3]" />
              <span><strong>CASH ONLY TAVERN</strong> • ATM Inside</span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3 text-xs sm:text-sm">
            <h4 className="font-display text-base font-bold text-[#FBF8F1] uppercase tracking-wider">
              Contact & Details
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

            <div className="pt-2 text-xs text-[#8C7B75]">
              <span>Price Range: <strong>$10–$20 per person</strong></span>
            </div>
          </div>

          {/* Directory Links & Social Media */}
          <div className="md:col-span-4 space-y-3 text-xs sm:text-sm">
            <h4 className="font-display text-base font-bold text-[#FBF8F1] uppercase tracking-wider">
              Directories & Local Listings
            </h4>
            
            <div className="flex flex-wrap gap-2 pt-1">
              {DIRECTORY_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#241A18] hover:bg-[#382825] text-[#E8E0D2] px-2.5 py-1 text-xs border border-[#3D2C28] transition-colors"
                >
                  <span>{link.name}</span>
                  <ExternalLink className="w-3 h-3 text-[#D97706]" />
                </a>
              ))}
            </div>

            <div className="pt-2 text-[11px] text-[#8C7B75]">
              <span className="block text-[#D97706] font-semibold">Closed Every Monday</span>
              <span>Dine-In & Takeout Only • No Reservations • Kids Welcome</span>
            </div>
          </div>

        </div>

        {/* Bottom Legal Line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A6B65] text-center sm:text-left">
          <div>
            <strong>Standish Pub, Inc.</strong> — Family owned and operated by the Thompson family since July 19, 1973.
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Pembroke, MA 02359</span>
            <span>•</span>
            <span>26 Dedicated Employees</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
