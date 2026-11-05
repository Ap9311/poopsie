import React, { useState } from 'react';
import { Phone, Menu as MenuIcon, X, DollarSign } from 'lucide-react';

interface HeaderProps {
  activeView: 'home' | 'menu' | 'story' | 'visit' | 'faq';
  onSelectView: (view: 'home' | 'menu' | 'story' | 'visit' | 'faq') => void;
  onOpenCustomPizza: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeView, onSelectView, onOpenCustomPizza }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (view: 'home' | 'menu' | 'story' | 'visit' | 'faq') => {
    onSelectView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Banner Notice for Cash Only */}
      <div className="bg-[#581111] text-[#FBF8F1] text-xs py-1.5 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2 border-b border-[#7A1C1C]">
        <span className="inline-flex items-center gap-1 font-bold bg-[#D97706] text-black px-1.5 py-0.5 text-[10px] uppercase rounded-none">
          <DollarSign className="w-3 h-3 stroke-[3]" /> CASH ONLY TAVERN
        </span>
        <span className="hidden sm:inline">• ATM Available Inside • No Delivery • No Reservations</span>
        <span className="sm:hidden">• ATM Inside</span>
      </div>

      <header className="sticky top-0 z-40 bg-[#1C1514] text-[#FBF8F1] border-b border-[#3D2926] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
          
          {/* Zone 1: Brand title & tagline lockup */}
          <button
            onClick={() => handleNav('home')}
            className="flex flex-col text-left group shrink-0 focus:outline-none"
          >
            <span className="font-display text-2xl sm:text-3xl font-bold tracking-wider text-[#FBF8F1] group-hover:text-[#D97706] transition-colors leading-none">
              POOPSIE'S
            </span>
            <span className="text-[10px] sm:text-xs text-[#C5BBAA] tracking-wider uppercase font-semibold font-sans mt-0.5">
              South Shore Bar Pizza since 1973
            </span>
          </button>

          {/* Zone 2: Navigation Links (View Switcher) */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-xs sm:text-sm font-semibold tracking-wide uppercase">
            <button
              onClick={() => handleNav('home')}
              className={`py-1.5 border-b-2 transition-colors whitespace-nowrap ${
                activeView === 'home'
                  ? 'text-[#D97706] border-[#D97706]'
                  : 'text-[#E8E0D2] border-transparent hover:text-[#D97706]'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNav('menu')}
              className={`py-1.5 border-b-2 transition-colors whitespace-nowrap ${
                activeView === 'menu'
                  ? 'text-[#D97706] border-[#D97706]'
                  : 'text-[#E8E0D2] border-transparent hover:text-[#D97706]'
              }`}
            >
              Full Menu & Prices
            </button>
            <button
              onClick={() => handleNav('story')}
              className={`py-1.5 border-b-2 transition-colors whitespace-nowrap ${
                activeView === 'story'
                  ? 'text-[#D97706] border-[#D97706]'
                  : 'text-[#E8E0D2] border-transparent hover:text-[#D97706]'
              }`}
            >
              Our 54-Year Story
            </button>
            <button
              onClick={() => handleNav('visit')}
              className={`py-1.5 border-b-2 transition-colors whitespace-nowrap ${
                activeView === 'visit'
                  ? 'text-[#D97706] border-[#D97706]'
                  : 'text-[#E8E0D2] border-transparent hover:text-[#D97706]'
              }`}
            >
              Hours & Location
            </button>
            <button
              onClick={() => handleNav('faq')}
              className={`py-1.5 border-b-2 transition-colors whitespace-nowrap ${
                activeView === 'faq'
                  ? 'text-[#D97706] border-[#D97706]'
                  : 'text-[#E8E0D2] border-transparent hover:text-[#D97706]'
              }`}
            >
              FAQ
            </button>
          </nav>

          {/* Zone 3: Primary Action & Phone CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenCustomPizza}
              className="hidden lg:inline-flex items-center justify-center px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-[#1C1514] bg-[#D97706] hover:bg-[#F59E0B] transition-colors shadow-sm"
            >
              Build Custom 10" Pie
            </button>

            <a
              href="tel:7818265282"
              className="inline-flex items-center gap-2 bg-[#7A1C1C] hover:bg-[#8B1E1E] text-white px-3.5 sm:px-5 py-2 sm:py-2.5 font-display text-xs sm:text-sm font-bold tracking-wide transition-colors border border-[#A32A2A] shadow-md"
            >
              <Phone className="w-4 h-4 fill-current text-[#D97706]" />
              <span className="whitespace-nowrap">Call (781) 826-5282</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#E8E0D2] hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#241A18] border-b border-[#3D2926] px-4 pt-3 pb-6 space-y-3">
            <nav className="flex flex-col space-y-1.5 text-sm font-display tracking-wider uppercase">
              <button
                onClick={() => handleNav('home')}
                className={`w-full text-left px-3 py-2 border-l-2 transition-colors ${
                  activeView === 'home'
                    ? 'text-[#D97706] bg-[#322320] border-[#D97706]'
                    : 'text-[#FBF8F1] border-transparent hover:bg-[#322320]'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNav('menu')}
                className={`w-full text-left px-3 py-2 border-l-2 transition-colors ${
                  activeView === 'menu'
                    ? 'text-[#D97706] bg-[#322320] border-[#D97706]'
                    : 'text-[#FBF8F1] border-transparent hover:bg-[#322320]'
                }`}
              >
                Full Menu & Prices
              </button>
              <button
                onClick={() => handleNav('story')}
                className={`w-full text-left px-3 py-2 border-l-2 transition-colors ${
                  activeView === 'story'
                    ? 'text-[#D97706] bg-[#322320] border-[#D97706]'
                    : 'text-[#FBF8F1] border-transparent hover:bg-[#322320]'
                }`}
              >
                Our 54-Year Story
              </button>
              <button
                onClick={() => handleNav('visit')}
                className={`w-full text-left px-3 py-2 border-l-2 transition-colors ${
                  activeView === 'visit'
                    ? 'text-[#D97706] bg-[#322320] border-[#D97706]'
                    : 'text-[#FBF8F1] border-transparent hover:bg-[#322320]'
                }`}
              >
                Hours & Location (Pembroke)
              </button>
              <button
                onClick={() => handleNav('faq')}
                className={`w-full text-left px-3 py-2 border-l-2 transition-colors ${
                  activeView === 'faq'
                    ? 'text-[#D97706] bg-[#322320] border-[#D97706]'
                    : 'text-[#FBF8F1] border-transparent hover:bg-[#322320]'
                }`}
              >
                FAQ (Gift Cards, Parking, etc.)
              </button>
            </nav>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCustomPizza();
                }}
                className="w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider text-[#1C1514] bg-[#D97706] hover:bg-[#F59E0B]"
              >
                Build Custom 10" Bar Pizza
              </button>
              <a
                href="tel:7818265282"
                className="w-full py-2.5 text-center font-display text-sm font-bold text-white bg-[#7A1C1C] hover:bg-[#8B1E1E] flex items-center justify-center gap-2 border border-[#A32A2A]"
              >
                <Phone className="w-4 h-4 text-[#D97706]" />
                Call (781) 826-5282 to Order
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
