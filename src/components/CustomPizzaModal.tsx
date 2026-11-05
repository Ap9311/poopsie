import React, { useState } from 'react';
import { PIZZA_TOPPINGS } from '../data/menuData';
import { X, Phone, DollarSign, Sparkles, CheckCircle2 } from 'lucide-react';

interface CustomPizzaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomPizzaModal: React.FC<CustomPizzaModalProps> = ({ isOpen, onClose }) => {
  const [sauce, setSauce] = useState('Standard Tangy Red');
  const [crustStyle, setCrustStyle] = useState('Extra Lacy Cheddar Rim (Burnt Edge)');
  const [selectedToppings, setSelectedToppings] = useState<{ name: string; price: number }[]>([
    { name: 'Pepperoni', price: 0.75 },
    { name: 'Onion', price: 0.50 },
  ]);
  const [quantity, setQuantity] = useState(1);
  const [presetApplied, setPresetApplied] = useState<string>('The Beauty');

  if (!isOpen) return null;

  const BASE_PRICE = 7.50;
  const toppingsCost = selectedToppings.reduce((sum, t) => sum + t.price, 0);
  const unitPrice = BASE_PRICE + toppingsCost;
  const totalPrice = unitPrice * quantity;

  const toggleTopping = (topping: { name: string; price: number }) => {
    setPresetApplied('');
    const exists = selectedToppings.some((t) => t.name === topping.name);
    if (exists) {
      setSelectedToppings(selectedToppings.filter((t) => t.name !== topping.name));
    } else {
      setSelectedToppings([...selectedToppings, topping]);
    }
  };

  const applyPreset = (name: string, toppings: { name: string; price: number }[]) => {
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
            Build Your 10" South Shore Bar Pizza
          </h2>
          <p className="text-xs sm:text-sm text-[#52443F]">
            10-inch round, edge-to-edge cheese baked in seasoned black steel. Base cheese $7.50 + topping costs.
          </p>
        </div>

        <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
          
          {/* Quick Presets */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#7A1C1C] block mb-2">
              Signature Favorites (One-Click Presets)
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() =>
                  applyPreset('The Beauty', [
                    { name: 'Pepperoni', price: 0.75 },
                    { name: 'Onion', price: 0.50 },
                  ])
                }
                className={`px-3 py-1.5 text-xs font-display font-bold uppercase tracking-wider border transition-colors ${
                  presetApplied === 'The Beauty'
                    ? 'bg-[#7A1C1C] text-white border-[#581111]'
                    : 'bg-[#F5EFE4] text-[#1C1514] border-[#D5C9B3] hover:border-[#7A1C1C]'
                }`}
              >
                ★ The Beauty ($8.75)
              </button>

              <button
                onClick={() =>
                  applyPreset('House Special', [
                    { name: 'Pepperoni', price: 0.75 },
                    { name: 'Sausage', price: 0.75 },
                    { name: 'Onion', price: 0.50 },
                    { name: 'Mushroom', price: 1.00 },
                    { name: 'Pepper', price: 0.50 },
                  ])
                }
                className={`px-3 py-1.5 text-xs font-display font-bold uppercase tracking-wider border transition-colors ${
                  presetApplied === 'House Special'
                    ? 'bg-[#7A1C1C] text-white border-[#581111]'
                    : 'bg-[#F5EFE4] text-[#1C1514] border-[#D5C9B3] hover:border-[#7A1C1C]'
                }`}
              >
                ★ House Special ($9.75)
              </button>

              <button
                onClick={() =>
                  applyPreset('Greek', [
                    { name: 'Feta', price: 1.25 },
                    { name: 'Black Olive', price: 0.75 },
                    { name: 'Onion', price: 0.50 },
                  ])
                }
                className={`px-3 py-1.5 text-xs font-display font-bold uppercase tracking-wider border transition-colors ${
                  presetApplied === 'Greek'
                    ? 'bg-[#7A1C1C] text-white border-[#581111]'
                    : 'bg-[#F5EFE4] text-[#1C1514] border-[#D5C9B3] hover:border-[#7A1C1C]'
                }`}
              >
                ★ Greek ($10.25)
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

          {/* Toppings Checklist */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#1C1514]">
                Select Toppings
              </label>
              <span className="text-xs text-[#7A1C1C] font-semibold">
                {selectedToppings.length} selected
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              {PIZZA_TOPPINGS.map((top) => {
                const isSelected = selectedToppings.some((t) => t.name === top.name);
                return (
                  <button
                    key={top.name}
                    onClick={() => toggleTopping(top)}
                    className={`p-2 text-left border transition-colors flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#7A1C1C] text-white border-[#581111]'
                        : 'bg-[#FFFDF7] text-[#3D322F] border-[#D5C9B3] hover:border-[#7A1C1C]'
                    }`}
                  >
                    <span>{top.name} (+${top.price.toFixed(2)})</span>
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
              Phone Order Script (Read when calling):
            </span>
            <p className="text-xs sm:text-sm font-sans leading-relaxed text-[#E8E0D2] bg-[#291F1D] p-3 border border-[#3D2C28] italic">
              "Hi! I'd like to order <strong>{quantity}</strong> 10-inch Bar Pizza{quantity > 1 ? 's' : ''} with{' '}
              <strong>
                {selectedToppings.length > 0
                  ? selectedToppings.map((t) => t.name).join(', ')
                  : 'Cheese Only'}
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
            <span>Call (781) 826-5282 to Order</span>
          </a>
        </div>

      </div>
    </div>
  );
};
