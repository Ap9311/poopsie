import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StorySection } from './components/StorySection';
import { BarPizzaExplainer } from './components/BarPizzaExplainer';
import { MenuSection } from './components/MenuSection';
import { VisitSection } from './components/VisitSection';
import { PressSection } from './components/PressSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { CustomPizzaModal } from './components/CustomPizzaModal';
import { Phone, DollarSign } from 'lucide-react';

type ViewMode = 'home' | 'menu' | 'story' | 'visit' | 'faq';

function getViewFromPath(pathname: string): ViewMode {
  const cleanPath = pathname.toLowerCase().replace(/\/$/, '');
  if (cleanPath === '/menu') return 'menu';
  if (cleanPath === '/story' || cleanPath === '/about') return 'story';
  if (cleanPath === '/visit' || cleanPath === '/location' || cleanPath === '/hours') return 'visit';
  if (cleanPath === '/faq') return 'faq';
  return 'home';
}

export default function App() {
  const [activeView, setActiveView] = useState<ViewMode>(() => getViewFromPath(window.location.pathname));
  const [isCustomPizzaOpen, setIsCustomPizzaOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setActiveView(getViewFromPath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (view: ViewMode, path: string) => {
    setActiveView(view);
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FBF8F1] text-[#1C1917] font-sans selection:bg-[#7A1C1C] selection:text-white flex flex-col relative pb-20 sm:pb-0 max-w-full overflow-x-hidden">
      
      {/* Sticky Header with Route Navigation */}
      <Header
        activeView={activeView}
        onNavigate={handleNavigate}
        onOpenCustomPizza={() => setIsCustomPizzaOpen(true)}
      />

      {/* Main View Renderer */}
      <main className="flex-1 max-w-full overflow-x-hidden">
        {activeView === 'home' && (
          <>
            <Hero
              onOpenCustomPizza={() => setIsCustomPizzaOpen(true)}
              onGoToMenu={() => handleNavigate('menu', '/menu')}
            />
            <BarPizzaExplainer />
            
            {/* Featured Compact Menu Section */}
            <MenuSection
              onOpenCustomPizza={() => setIsCustomPizzaOpen(true)}
              isCompactView={true}
              onViewFullMenu={() => handleNavigate('menu', '/menu')}
            />

            <StorySection />
            <VisitSection />
            <FAQSection />
            <PressSection />
          </>
        )}

        {activeView === 'menu' && (
          <div className="py-2 sm:py-4">
            <MenuSection
              onOpenCustomPizza={() => setIsCustomPizzaOpen(true)}
              isCompactView={false}
            />
          </div>
        )}

        {activeView === 'story' && (
          <div className="py-2 sm:py-4">
            <StorySection />
            <BarPizzaExplainer />
          </div>
        )}

        {activeView === 'visit' && (
          <div className="py-2 sm:py-4">
            <VisitSection />
          </div>
        )}

        {activeView === 'faq' && (
          <div className="py-2 sm:py-4">
            <FAQSection />
            <VisitSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Custom Pizza Builder Modal */}
      <CustomPizzaModal
        isOpen={isCustomPizzaOpen}
        onClose={() => setIsCustomPizzaOpen(false)}
      />

      {/* Floating Sticky Mobile Order Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1C1514] border-t-2 border-[#7A1C1C] px-3 py-2 flex items-center justify-between gap-2 shadow-2xl max-w-full">
        <div className="flex flex-col text-[10px] text-[#C5BBAA] shrink-0">
          <span className="font-display text-xs font-bold text-[#D97706] flex items-center gap-1">
            <DollarSign className="w-3 h-3 stroke-[3]" /> CASH ONLY
          </span>
          <span>Pembroke • Takeout</span>
        </div>

        <a
          href="tel:7818265282"
          className="flex-1 max-w-[200px] bg-[#7A1C1C] hover:bg-[#8B1E1E] text-white py-2 px-3 font-display text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 border border-[#A32A2A] shrink-0"
        >
          <Phone className="w-3.5 h-3.5 text-[#D97706] fill-current" />
          <span>Call (781) 826-5282</span>
        </a>
      </div>

    </div>
  );
}
