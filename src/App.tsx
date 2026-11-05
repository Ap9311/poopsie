import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StorySection } from './components/StorySection';
import { BarPizzaExplainer } from './components/BarPizzaExplainer';
import { MenuSection } from './components/MenuSection';
import { VisitSection } from './components/VisitSection';
import { PressSection } from './components/PressSection';
import { Footer } from './components/Footer';
import { CustomPizzaModal } from './components/CustomPizzaModal';
import { Phone, DollarSign } from 'lucide-react';

export default function App() {
  const [isCustomPizzaOpen, setIsCustomPizzaOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FBF8F1] text-[#1C1917] font-sans selection:bg-[#7A1C1C] selection:text-white flex flex-col relative pb-16 sm:pb-0">
      
      {/* Sticky Header */}
      <Header onOpenCustomPizza={() => setIsCustomPizzaOpen(true)} />

      {/* Main Content Flow */}
      <main className="flex-1">
        <Hero onOpenCustomPizza={() => setIsCustomPizzaOpen(true)} />
        <BarPizzaExplainer />
        <StorySection />
        <MenuSection onOpenCustomPizza={() => setIsCustomPizzaOpen(true)} />
        <VisitSection />
        <PressSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Custom Pizza Builder Modal */}
      <CustomPizzaModal
        isOpen={isCustomPizzaOpen}
        onClose={() => setIsCustomPizzaOpen(false)}
      />

      {/* Floating Sticky Mobile Order Bar (Mobile-first requirement: Phone number always tappable) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1C1514] border-t-2 border-[#7A1C1C] px-3 py-2 flex items-center justify-between gap-2 shadow-2xl">
        <div className="flex flex-col text-[10px] text-[#C5BBAA]">
          <span className="font-display text-xs font-bold text-[#D97706] flex items-center gap-1">
            <DollarSign className="w-3 h-3 stroke-[3]" /> CASH ONLY
          </span>
          <span>Pembroke • Dine-in & Takeout</span>
        </div>

        <a
          href="tel:7818265282"
          className="flex-1 max-w-[200px] bg-[#7A1C1C] hover:bg-[#8B1E1E] text-white py-2 px-3 font-display text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 border border-[#A32A2A]"
        >
          <Phone className="w-3.5 h-3.5 text-[#D97706] fill-current" />
          <span>Call (781) 826-5282</span>
        </a>
      </div>

    </div>
  );
}
