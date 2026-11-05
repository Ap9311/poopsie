import React, { useState } from 'react';
import { PIZZA_TOPPINGS } from '../data/menuData';
import { X, Phone, DollarSign, Sparkles, CheckCircle2 } from 'lucide-react';

interface CustomPizzaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomPizzaModal: React.FC<CustomPizzaModalProps> = ({ isOpen, onClose }) => {
  const [sauce, setSauce] = useState('Standard Tangy Tavern Red');
  const [crustStyle, setCrustStyle] = useState('Extra Lacy Cheddar Rim (Burnt Edge)');
  const [selectedToppings, setSelectedToppings] = useState<string[]>(['Sweet Italian Sausage', 'Onion', 'Green Pepper']);
  const [quantity, setQuantity] = useState(1);
  const [presetApplied, setPresetApplied] = useState<string>('The Beauty');

  if (!isOpen) return null;

  const BASE_PRICE = 9.75;
  const TOPPING_PRICE = 1.25;
  const unitPrice = BASE_PRICE + selectedToppings.length * TOPPING_PRICE;
  const totalPrice = unitPrice * quantity;

  const toggleTopping = (toppingName: string) => {
    setPresetApplied('');
    if (selectedToppings.includes(toppingName)) {
      setSelectedToppings(selectedToppings.filter((t) => t !== toppingName));
    } else {
      setSelectedToppings([...selectedToppings, toppingName]);
    }
  };

  const applyPreset = (name: string, toppings: string[]) => {
    setPresetApplied(name);
    setSelectedToppings(toppings);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FFFDF7] border-4 border-[#7A1C1C] max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#7A1C1C] hover:text-[#1C1514] p-1 focus:outline-none"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 space-y-1 border-b-2 border-[#1C1514] pb-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D97706] bg-[#1C1514] px-2 py-0.5">
            <Sparkles className="w-3.5 h-3.5" /> Interactive 10" Bar Pizza Builder
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1C1514]">
            Construct Your Custom South Shore Pie
          </h2>
          <p className="text-xs sm:text-sm text-[#52443F]">
            Edge-to-edge cheese baked in a 10-inch black steel pan. Base cheese $9.75 + $1.25 per topping.
          </p>
        </div>

        <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
          
          {/* Quick Presets */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#7A1C1C] block mb-2">
              Quick Local Favorites (One-Click Presets)
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => applyPreset('The Beauty', ['Sweet Italian Sausage', 'Onion', 'Green Pepper'])}
                className={`px-3 py-1.5 text-xs font-display font-bold uppercase tracking-wider border transition-colors ${
                  presetApplied === 'The Beauty'
                    ? 'bg-[#7A1C1C] text-white border-[#581111]'
                    : 'bg-[#F5EFE4] text-[#1C1514] border-[#D5C9B3] hover:border-[#7A1C1C]'
                }`}
              >
                ★ The Beauty ($14.25)
              </button>
              
              <button
                onClick={() => applyPreset('House Special', ['Pepperoni', 'Sweet Italian Sausage', 'Ground Beef (Hamburger)', 'Onion', 'Fresh Mushroom', 'Green Pepper'])}
                className={`px-3 py-1.5 text-xs font-display font-bold uppercase tracking-wider border transition-colors ${
                  presetApplied === 'House Special'
                    ? 'bg-[#7A1C1C] text-white border-[#581111]'
                    : 'bg-[#F5EFE4] text-[#1C1514] border-[#D5C9B3] hover:border-[#7A1C1C]'
                }`}
              >
                ★ House Special ($15.50)
              </button>

              <button
                onClick={() => applyPreset('The Sporkie', ['Sweet Italian Sausage', 'Hot Cherry Peppers'])}
                className={`px-3 py-1.5 text-xs font-display font-bold uppercase tracking-wider border transition-colors ${
                  presetApplied === 'The Sporkie'
                    ? 'bg-[#7A1C1C] text-white border-[#581111]'
                    : 'bg-[#F5EFE4] text-[#1C1514] border-[#D5C9B3] hover:border-[#7A1C1C]'
                }`}
              >
                ★ The Sporkie ($13.50)
              </button>
            </div>
          </div>

          {/* Crust Burn Level Selection */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[#1C1514] block mb-2">
              Pan Edge & Cheese Burn Level
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              {[
                'Standard Crisp Pan',
                'Extra Lacy Cheddar Rim (Burnt Edge)',
                'Well Done / Dark Burn',
              ].map((style) => (
                <button
                  key={style}
                  onClick={() => setCrustStyle(style)}
                  className={`p-2.5 text-left border font-semibold transition-colors ${
                    crustStyle === style
                      ? 'bg-[#1C1514] text-[#FBF8F1] border-[#1C1514]'
                      : 'bg-[#FFFDF7] text-[#3D322F] border-[#C8BCAB] hover:border-[#7A1C1C]'
                  }`}
                >
                  {crustStyle === style && <span className="text-[#D97706] mr-1">✓</span>}
                  {style}
                </button>
              ))}
            </div>
          </div>

          {/* Sauce Selection */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[#1C1514] block mb-2">
              Base Sauce
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              {[
                'Standard Tangy Tavern Red',
                'Garlic Butter Oil',
                'Poopsie Homemade Chili Base',
              ].map((s) => (
                <button
                  key={s}
                  onClick={() => setSauce(s)}
                  className={`p-2.5 text-left border font-semibold transition-colors ${
                    sauce === s
                      ? 'bg-[#1C1514] text-[#FBF8F1] border-[#1C1514]'
                      : 'bg-[#FFFDF7] text-[#3D322F] border-[#C8BCAB] hover:border-[#7A1C1C]'
                  }`}
                >
                  {sauce === s && <span className="text-[#D97706] mr-1">✓</span>}
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Toppings Checklist */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#1C1514]">
                Select Toppings (${TOPPING_PRICE.toFixed(2)} each)
              </label>
              <span className="text-xs text-[#7A1C1C] font-semibold">
                {selectedToppings.length} selected
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              {PIZZA_TOPPINGS.map((top) => {
                const isSelected = selectedToppings.includes(top.name);
                return (
                  <button
                    key={top.name}
                    onClick={() => toggleTopping(top.name)}
                    className={`p-2 text-left border transition-colors flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#7A1C1C] text-white border-[#581111]'
                        : 'bg-[#FFFDF7] text-[#3D322F] border-[#D5C9B3] hover:border-[#7A1C1C]'
                    }`}
                  >
                    <span>{top.name}</span>
                    {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#D97706] shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quantity selector */}
          <div className="flex items-center gap-4 pt-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1C1514]">Quantity:</span>
            <div className="flex items-center border border-[#1C1514]">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 bg-[#EFE9DC] hover:bg-[#D5C9B3] font-bold text-sm"
              >
                -
              </button>
              <span className="px-4 py-1 font-mono font-bold text-sm bg-white">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 bg-[#EFE9DC] hover:bg-[#D5C9B3] font-bold text-sm"
              >
                +
              </button>
            </div>
            <span className="text-xs text-[#7A6B65]">
              ${unitPrice.toFixed(2)} each × {quantity}
            </span>
          </div>

          {/* Real-time Order Script Box */}
          <div className="bg-[#1C1514] text-[#FBF8F1] p-4 border border-[#3D2C28] space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#D97706] block">
              Phone Script (Read when calling):
            </span>
            <p className="text-xs sm:text-sm font-sans leading-relaxed text-[#E8E0D2] bg-[#291F1D] p-3 border border-[#3D2C28] italic">
              "Hi! I'd like to order <strong>{quantity}</strong> 10-inch Bar Pizza{quantity > 1 ? 's' : ''} with{' '}
              <strong>
                {selectedToppings.length > 0 ? selectedToppings.join(', ') : 'Cheese Only'}
              </strong>
              , baked with <strong>{crustStyle}</strong>. Takeout, please!"
            </p>
          </div>

        </div>

        {/* Modal Footer & Call Action */}
        <div className="mt-6 pt-4 border-t-2 border-[#1C1514] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#6E5D57] uppercase font-bold">Total Estimated:</span>
              <span className="font-display text-2xl font-bold text-[#7A1C1C]">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <span className="text-[11px] text-[#D97706] font-semibold flex items-center gap-1">
              <DollarSign className="w-3.5 h-3.5 stroke-[3]" /> CASH ONLY ON PICKUP
            </span>
          </div>

          <a
            href="tel:7818265282"
            className="w-full sm:w-auto bg-[#7A1C1C] hover:bg-[#962222] text-white px-6 py-3 font-display text-base font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow transition-colors"
          >
            <Phone className="w-4 h-4 text-[#D97706] fill-current" />
            <span>Call (781) 826-5282 to Order Now</span>
          </a>
        </div>

      </div>
    </div>
  );
};
