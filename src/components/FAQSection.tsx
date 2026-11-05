import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, DollarSign, Gift, Car, Users, Ban, Baby } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  icon: React.ReactNode;
}

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-cards');

  const faqs: FAQItem[] = [
    {
      id: 'faq-gift-cards',
      question: 'Do you sell gift cards?',
      answer: 'Yes! Physical gift certificates are available for purchase directly at the tavern bar during normal business hours. Since we are a cash-only tavern, gift certificates must also be purchased with cash.',
      category: 'Tavern Services',
      icon: <Gift className="w-4 h-4 text-[#D97706]" />,
    },
    {
      id: 'faq-parking',
      question: 'Is there a parking lot on site?',
      answer: 'Yes, Poopsie\'s has a dedicated private parking lot right outside our building at 243 Church Street. Additional street parking is available along Route 139 if the main lot is full during peak weekend hours.',
      category: 'Location & Parking',
      icon: <Car className="w-4 h-4 text-[#D97706]" />,
    },
    {
      id: 'faq-large-groups',
      question: 'Can I host a large group or party?',
      answer: 'We operate on a first-come, first-served basis for dine-in seating (no reservations). For groups larger than 6 to 8 people, we recommend arriving right when we open (11:30 AM Tuesday–Saturday or 12:00 PM Sunday) so our team can seat your party together in adjacent booth sections.',
      category: 'Dining In',
      icon: <Users className="w-4 h-4 text-[#D97706]" />,
    },
    {
      id: 'faq-[#cash-only]',
      question: 'Why are you cash only and is there an ATM inside?',
      answer: 'Poopsie\'s has operated as a traditional cash-only tavern since Don Thompson opened the doors in 1973. Keeping things simple allows us to keep pizza prices honest and fast. We have an on-site ATM right near the front entrance for your convenience.',
      category: 'Payment',
      icon: <DollarSign className="w-4 h-4 text-[#D97706]" />,
    },
    {
      id: 'faq-delivery',
      question: 'Do you offer online ordering or delivery?',
      answer: 'We do not offer delivery or third-party delivery apps (DoorDash, UberEats, etc.). All takeout orders must be called in directly to our phone line at (781) 826-5282 and picked up at the tavern bar.',
      category: 'Takeout',
      icon: <Ban className="w-4 h-4 text-[#D97706]" />,
    },
    {
      id: 'faq-kids',
      question: 'Are kids allowed in the tavern?',
      answer: 'Absolutely! Families have been coming to Poopsie\'s for generations. High chairs and booster seats are available upon request, and our menu features kid-approved items like individual cheese pies, grilled hot dogs, and burgers.',
      category: 'Family & Atmosphere',
      icon: <Baby className="w-4 h-4 text-[#D97706]" />,
    },
  ];

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-tavern-grain border-b border-[#E0D7C6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-[#7A1C1C]">
            Common Tavern Questions
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#1C1514] border-double-tavern pb-3 inline-block">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#52443F]">
            Everything you need to know before visiting or calling in a takeout order at Poopsie's.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-[#FFFDF7] border-2 transition-colors ${
                  isOpen ? 'border-[#7A1C1C] shadow-md' : 'border-[#DED5C5] hover:border-[#7A1C1C]'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#1C1514] text-white flex items-center justify-center shrink-0">
                      {faq.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A1C1C] block">
                        {faq.category}
                      </span>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-[#1C1514]">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <div className="text-[#7A1C1C] shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-[#EFE9DC] text-sm text-[#3D322F] leading-relaxed">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Footer Banner inside FAQ */}
        <div className="mt-10 p-6 bg-[#1C1514] text-[#FBF8F1] border-2 border-[#7A1C1C] text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-display text-xl font-bold text-[#FBF8F1]">
              Have a question not listed here?
            </h4>
            <p className="text-xs sm:text-sm text-[#C5BBAA] mt-1">
              Give the tavern a quick call during open hours or drop us an email.
            </p>
          </div>

          <a
            href="tel:7818265282"
            className="whitespace-nowrap bg-[#7A1C1C] hover:bg-[#962222] text-white px-6 py-3 font-display text-sm font-bold uppercase tracking-wider transition-colors shadow"
          >
            Call (781) 826-5282
          </a>
        </div>

      </div>
    </section>
  );
};
