import React, { useState } from 'react';
import { Phone, Menu as MenuIcon, X, DollarSign } from 'lucide-react';

interface HeaderProps {
  activeView: 'home' | 'menu' | 'story' | 'visit' | 'faq';
  onNavigate: (view: 'home' | 'menu' | 'story' | 'visit' | 'faq', path: string) => void;
  onOpenCustomPizza: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeView, onNavigate, onOpenCustomPizza }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view: 'home' | 'menu' | 'story' | 'visit' | 'faq', path: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    onNavigate(view, path);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Banner Notice for Cash Only */}
      <div className="bg-[#581111] text-[#FBF8F1] text-[11px] sm:text-xs py-1 px-2 sm:px-4 text-center font-medium tracking-wide flex items-center justify-center gap-1.5 border-b border-[#7A1C1C] overflow-hidden">
        <span className="inline-flex items-center gap-1 font-bold bg-[#D97706] text-black px-1.5 py-0.5 text-[9px] sm:text-[10px] uppercase rounded-none shrink-0">
          <DollarSign className="w-3 h-3 stroke-[3]" /> CASH ONLY
        </span>
        <span className="truncate">ATM Inside • Dine-In & Takeout • No Delivery</span>
      </div>

      <header className="sticky top-0 z-40 bg-[#1C1514] text-[#FBF8F1] border-b border-[#3D2926] shadow-lg max-w-full">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Zone 1: Brand title & tagline lockup */}
          <a
            href="/"
            onClick={(e) => handleNavClick('home', '/', e)}
            className="flex flex-col text-left group shrink min-w-0 focus:outline-none"
          >
            <span className="font-display text-xl sm:text-2xl lg:text-3xl font-bold tracking-wider text-[#FBF8F1] group-hover:text-[#D97706] transition-colors leading-none truncate">
              POOPSIE'S
            </span>
            <span className="text-[9px] sm:text-xs text-[#C5BBAA] tracking-wider uppercase font-semibold font-sans mt-0.5 truncate">
              South Shore Bar Pizza • 1973
            </span>
          </a>

          {/* Zone 2: Navigation Links (Desktop Route Switcher) */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-7 text-xs sm:text-sm font-semibold tracking-wide uppercase shrink-0">
            <a
              href="/"
              onClick={(e) => handleNavClick('home', '/', e)}
              className={`py-1.5 border-b-2 transition-colors whitespace-nowrap ${
                activeView === 'home'
                  ? 'text-[#D97706] border-[#D97706]'
                  : 'text-[#E8E0D2] border-transparent hover:text-[#D97706]'
              }`}
            >
              Home
            </a>
            <a
              href="/menu"
              onClick={(e) => handleNavClick('menu', '/menu', e)}
              className={`py-1.5 border-b-2 transition-colors whitespace-nowrap ${
                activeView === 'menu'
                  ? 'text-[#D97706] border-[#D97706]'
                  : 'text-[#E8E0D2] border-transparent hover:text-[#D97706]'
              }`}
            >
              Full Menu & Prices
            </a>
            <a
              href="/story"
              onClick={(e) => handleNavClick('story', '/story', e)}
              className={`py-1.5 border-b-2 transition-colors whitespace-nowrap ${
                activeView === 'story'
                  ? 'text-[#D97706] border-[#D97706]'
                  : 'text-[#E8E0D2] border-transparent hover:text-[#D97706]'
              }`}
            >
              Our 54-Year Story
            </a>
            <a
              href="/visit"
              onClick={(e) => handleNavClick('visit', '/visit', e)}
              className={`py-1.5 border-b-2 transition-colors whitespace-nowrap ${
                activeView === 'visit'
                  ? 'text-[#D97706] border-[#D97706]'
                  : 'text-[#E8E0D2] border-transparent hover:text-[#D97706]'
              }`}
            >
              Hours & Location
            </a>
            <a
              href="/faq"
              onClick={(e) => handleNavClick('faq', '/faq', e)}
              className={`py-1.5 border-b-2 transition-colors whitespace-nowrap ${
                activeView === 'faq'
                  ? 'text-[#D97706] border-[#D97706]'
                  : 'text-[#E8E0D2] border-transparent hover:text-[#D97706]'
              }`}
            >
              FAQ
            </a>
          </nav>

          {/* Zone 3: Primary Action & Phone CTA */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <button
              onClick={onOpenCustomPizza}
              className="hidden lg:inline-flex items-center justify-center px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#1C1514] bg-[#D97706] hover:bg-[#F59E0B] transition-colors shadow-sm whitespace-nowrap"
            >
              Build Custom Pie
            </button>

            <a
              href="tel:7818265282"
              className="inline-flex items-center gap-1.5 bg-[#7A1C1C] hover:bg-[#8B1E1E] text-white px-2.5 sm:px-4 py-1.5 sm:py-2.5 font-display text-xs sm:text-sm font-bold tracking-wide transition-colors border border-[#A32A2A] shadow-md whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-[#D97706] shrink-0" />
              <span className="hidden xs:inline">(781) 826-5282</span>
              <span className="xs:hidden">Call</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-[#E8E0D2] hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#241A18] border-b border-[#3D2926] px-4 pt-3 pb-6 space-y-3 max-w-full overflow-hidden">
            <nav className="flex flex-col space-y-1 text-sm font-display tracking-wider uppercase">
              <a
                href="/"
                onClick={(e) => handleNavClick('home', '/', e)}
                className={`w-full text-left px-3 py-2 border-l-2 transition-colors ${
                  activeView === 'home'
                    ? 'text-[#D97706] bg-[#322320] border-[#D97706]'
                    : 'text-[#FBF8F1] border-transparent hover:bg-[#322320]'
                }`}
              >
                Home
              </a>
              <a
                href="/menu"
                onClick={(e) => handleNavClick('menu', '/menu', e)}
                className={`w-full text-left px-3 py-2 border-l-2 transition-colors ${
                  activeView === 'menu'
                    ? 'text-[#D97706] bg-[#322320] border-[#D97706]'
                    : 'text-[#FBF8F1] border-transparent hover:bg-[#322320]'
                }`}
              >
                Full Menu & Prices
              </a>
              <a
                href="/story"
                onClick={(e) => handleNavClick('story', '/story', e)}
                className={`w-full text-left px-3 py-2 border-l-2 transition-colors ${
                  activeView === 'story'
                    ? 'text-[#D97706] bg-[#322320] border-[#D97706]'
                    : 'text-[#FBF8F1] border-transparent hover:bg-[#322320]'
                }`}
              >
                Our 54-Year Story
              </a>
              <a
                href="/visit"
                onClick={(e) => handleNavClick('visit', '/visit', e)}
                className={`w-full text-left px-3 py-2 border-l-2 transition-colors ${
                  activeView === 'visit'
                    ? 'text-[#D97706] bg-[#322320] border-[#D97706]'
                    : 'text-[#FBF8F1] border-transparent hover:bg-[#322320]'
                }`}
              >
                Hours & Location (Pembroke)
              </a>
              <a
                href="/faq"
                onClick={(e) => handleNavClick('faq', '/faq', e)}
                className={`w-full text-left px-3 py-2 border-l-2 transition-colors ${
                  activeView === 'faq'
                    ? 'text-[#D97706] bg-[#322320] border-[#D97706]'
                    : 'text-[#FBF8F1] border-transparent hover:bg-[#322320]'
                }`}
              >
                FAQ (Gift Cards, Parking, etc.)
              </a>
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
