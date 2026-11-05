import React, { useState } from 'react';
import { MENU_ITEMS, MenuItem, PIZZA_TOPPINGS } from '../data/menuData';
import { Search, DollarSign, Sparkles, PlusCircle, AlertTriangle, ChevronRight } from 'lucide-react';

interface MenuSectionProps {
  onOpenCustomPizza: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onOpenCustomPizza }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'pizza' | 'grille' | 'starters' | 'sides'>('pizza');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterFavorites, setFilterFavorites] = useState(false);

  // Filter menu items
  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesTab = activeTab === 'all' || item.category === activeTab;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.tags && item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));
    const matchesFavorite = filterFavorites ? item.isLocalFavorite : true;
    return matchesTab && matchesSearch && matchesFavorite;
  });

  return (
    <section id="menu" className="py-16 sm:py-24 bg-tavern-grain border-b border-[#E0D7C6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#7A1C1C]">
            <span>Pembroke Tavern Menu</span>
            <span>•</span>
            <span className="text-[#D97706] bg-[#2E2422] px-2 py-0.5 text-[10px]">CASH ONLY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#1C1514] border-double-tavern pb-3 inline-block">
            Our Menu & Prices
          </h2>
          <p className="text-sm sm:text-base text-[#52443F]">
            10-inch, edge-to-edge, no border crust — that's South Shore style. Fresh dough baked daily in 54-year seasoned black steel pans.
          </p>
        </div>

        {/* CASH ONLY & ATM Callout Banner */}
        <div className="mb-10 bg-[#7A1C1C] text-white p-4 sm:p-5 border-2 border-[#581111] shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 bg-[#D97706] text-black shrink-0 flex items-center justify-center font-bold">
              <DollarSign className="w-6 h-6 stroke-[3]" />
            </div>
            <div>
              <h4 className="font-display text-lg font-bold tracking-wide uppercase">
                IMPORTANT REMINDER: WE ARE CASH ONLY
              </h4>
              <p className="text-xs sm:text-sm text-[#F9E8D9]">
                We do not take credit or debit cards. ATM is available inside the tavern right by the front door.
              </p>
            </div>
          </div>
          
          <button
            onClick={onOpenCustomPizza}
            className="whitespace-nowrap bg-[#D97706] hover:bg-[#F59E0B] text-[#1C1514] font-display text-xs sm:text-sm font-bold uppercase tracking-wider px-4 py-2.5 shadow transition-colors flex items-center gap-1.5"
          >
            <PlusCircle className="w-4 h-4" /> Build Custom 10" Pie
          </button>
        </div>

        {/* Filter Controls Row */}
        <div className="mb-8 space-y-4">
          
          {/* Category Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 p-1.5 bg-[#EFE9DC] border border-[#D5C9B3]">
            <button
              onClick={() => setActiveTab('pizza')}
              className={`px-4 py-2 text-xs sm:text-sm font-display font-bold uppercase tracking-wider transition-colors ${
                activeTab === 'pizza'
                  ? 'bg-[#7A1C1C] text-white shadow-sm'
                  : 'text-[#4A3E3B] hover:bg-[#E2D8C5]'
              }`}
            >
              🍕 Bar Pizzas (10")
            </button>
            <button
              onClick={() => setActiveTab('grille')}
              className={`px-4 py-2 text-xs sm:text-sm font-display font-bold uppercase tracking-wider transition-colors ${
                activeTab === 'grille'
                  ? 'bg-[#7A1C1C] text-white shadow-sm'
                  : 'text-[#4A3E3B] hover:bg-[#E2D8C5]'
              }`}
            >
              🍔 Grille & Burgers
            </button>
            <button
              onClick={() => setActiveTab('starters')}
              className={`px-4 py-2 text-xs sm:text-sm font-display font-bold uppercase tracking-wider transition-colors ${
                activeTab === 'starters'
                  ? 'bg-[#7A1C1C] text-white shadow-sm'
                  : 'text-[#4A3E3B] hover:bg-[#E2D8C5]'
              }`}
            >
              🍗 Starters & Salads
            </button>
            <button
              onClick={() => setActiveTab('sides')}
              className={`px-4 py-2 text-xs sm:text-sm font-display font-bold uppercase tracking-wider transition-colors ${
                activeTab === 'sides'
                  ? 'bg-[#7A1C1C] text-white shadow-sm'
                  : 'text-[#4A3E3B] hover:bg-[#E2D8C5]'
              }`}
            >
              🍟 Tavern Sides
            </button>
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-display font-bold uppercase tracking-wider transition-colors ${
                activeTab === 'all'
                  ? 'bg-[#7A1C1C] text-white shadow-sm'
                  : 'text-[#4A3E3B] hover:bg-[#E2D8C5]'
              }`}
            >
              Full Menu
            </button>
          </div>

          {/* Search bar & Local Favorites Filter */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#8C7B75]" />
              <input
                type="text"
                placeholder="Search menu (e.g. Beauty, burger, wings)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#FFFDF7] border border-[#C8BCAB] pl-9 pr-4 py-2 text-xs sm:text-sm text-[#1C1514] placeholder-[#8C7B75] focus:outline-none focus:border-[#7A1C1C]"
              />
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setFilterFavorites(!filterFavorites)}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider border transition-colors flex items-center gap-1.5 ${
                  filterFavorites
                    ? 'bg-[#D97706] text-black border-[#B45309]'
                    : 'bg-[#FFFDF7] text-[#4A3E3B] border-[#C8BCAB] hover:border-[#7A1C1C]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Local Favorites Only</span>
              </button>
              
              <span className="text-xs text-[#7A6B65]">
                Showing {filteredItems.length} items
              </span>
            </div>

          </div>

        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`p-5 bg-[#FFFDF7] border-2 transition-all shadow-sm relative flex flex-col justify-between ${
                item.isLocalFavorite
                  ? 'border-[#D97706] ring-1 ring-[#D97706]/30'
                  : 'border-[#DED5C5] hover:border-[#7A1C1C]'
              }`}
            >
              {/* Local Favorite Badge */}
              {item.isLocalFavorite && (
                <div className="absolute -top-3 left-4 bg-[#D97706] text-black text-[10px] font-display font-bold uppercase tracking-wider px-2.5 py-0.5 border border-[#B45309] flex items-center gap-1 shadow-sm">
                  <Sparkles className="w-3 h-3 fill-current" /> Local Favorite
                </div>
              )}

              <div>
                <div className="flex items-start justify-between gap-3 mb-2 pt-1">
                  <h3 className="font-display text-xl font-bold text-[#1C1514] leading-tight">
                    {item.name}
                  </h3>
                  <span className="font-display text-xl font-bold text-[#7A1C1C] shrink-0">
                    ${item.price.toFixed(2)}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#4A3E3B] leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Tags and CTA */}
              <div className="pt-3 border-t border-[#EFE9DC] flex items-center justify-between text-xs">
                <div className="flex flex-wrap gap-1">
                  {item.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] text-[#6E5D57] bg-[#F2EBDC] px-2 py-0.5 border border-[#E0D5C1]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {item.category === 'pizza' && (
                  <button
                    onClick={onOpenCustomPizza}
                    className="text-[#7A1C1C] hover:text-[#962222] font-display font-bold uppercase text-xs flex items-center gap-0.5 ml-auto"
                  >
                    <span>Order / Customize</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Create Your Own 10" Bar Pizza Box */}
        {(activeTab === 'pizza' || activeTab === 'all') && (
          <div className="mt-12 p-6 sm:p-8 bg-[#1C1514] text-[#FBF8F1] border-2 border-[#7A1C1C] shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-3">
                <div className="text-xs font-bold uppercase tracking-widest text-[#D97706]">
                  Build Your Own 10" Bar Pizza • Base Cheese $9.75
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#FBF8F1]">
                  Available Toppings ($1.25 Each)
                </h3>
                <p className="text-xs sm:text-sm text-[#C5BBAA]">
                  All pizzas are baked edge-to-edge in seasoned 10-inch pans. Add as many toppings as you like!
                </p>

                {/* Toppings Grid */}
                <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-xs text-[#E8E0D2]">
                  {PIZZA_TOPPINGS.map((top) => (
                    <div key={top.name} className="flex items-center gap-1.5 bg-[#2E2422] p-2 border border-[#40312E]">
                      <span className="text-[#D97706] font-bold">•</span>
                      <span>{top.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 bg-[#261D1B] p-6 border border-[#3D2C28] text-center space-y-4">
                <h4 className="font-display text-lg font-bold text-[#FBF8F1]">
                  Ready to Build Your Order?
                </h4>
                <p className="text-xs text-[#C5BBAA]">
                  Use our interactive pizza builder to calculate your total and create a clear order script to read when calling the tavern!
                </p>
                <button
                  onClick={onOpenCustomPizza}
                  className="w-full bg-[#D97706] hover:bg-[#F59E0B] text-black font-display font-bold text-sm uppercase tracking-wider py-3 shadow transition-colors"
                >
                  Launch Interactive Pizza Builder
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
