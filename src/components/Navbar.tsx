import React from 'react';
import { SULTANI_LOGO_PATH } from '../data/brandData.ts';
import { ShoppingBag, Search, Calculator, ShieldCheck, ChevronRight } from 'lucide-react';

interface NavbarProps {
  currentPage: 'home' | 'shop' | 'about' | 'craftsmanship' | 'contact';
  setCurrentPage: (page: 'home' | 'shop' | 'about' | 'craftsmanship' | 'contact') => void;
  currency: 'NGN' | 'USD';
  setCurrency: (c: 'NGN' | 'USD') => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  currency,
  setCurrency,
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenCalculator
}) => {
  return (
    <div className="sticky top-0 z-40 bg-[#11100E] text-[#F7F3EA] border-b border-[#C6A15B]/20">
      {/* Top Luxury Announcement Bar */}
      <div className="bg-[#181614] border-b border-[#C6A15B]/15 px-4 py-2 text-[11px] font-sans-luxe text-[#D1C7B7] tracking-wider">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
            <span className="hidden sm:inline">Complimentary Armored Courier across Nigeria</span>
            <span className="sm:hidden">Armored Courier Nationwide</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span>Worldwide Insured Air Freight</span>
          </div>
          <div className="flex items-center gap-4 text-[10px] tracking-widest uppercase">
            <span className="text-[#C6A15B] font-medium hidden md:inline">Private VIP Suites: Maitama, Abuja & Kano</span>
            <button
              onClick={() => setCurrentPage('contact')}
              className="text-[#E5D5B8] hover:text-[#C6A15B] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Book Viewing</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar (Strict 3-zone contract) */}
      <header className="px-4 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
          {/* Zone 1: Single element Brand Wordmark & Official Emblem */}
          <button
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-3.5 group cursor-pointer text-left whitespace-nowrap shrink-0"
          >
            <div className="relative w-10 h-10 lg:w-11 lg:h-11 rounded-lg bg-gradient-to-br from-[#24211D] to-[#161412] p-1 border border-[#C6A15B]/40 shadow-sm flex items-center justify-center overflow-hidden">
              <img
                src={SULTANI_LOGO_PATH}
                alt="SULTANI GOLD Crowned Emblem"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain filter drop-shadow group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg lg:text-xl font-bold tracking-[0.22em] text-[#F7F3EA] group-hover:text-[#C6A15B] transition-colors uppercase leading-none">
                SULTANI GOLD
              </span>
              <span className="font-sans-luxe text-[9px] tracking-[0.3em] uppercase text-[#C6A15B] mt-1 font-medium">
                Maison D'Or · Haute Joaillerie
              </span>
            </div>
          </button>

          {/* Zone 2: 5 clean, single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-sans-luxe tracking-[0.14em] uppercase font-medium text-[#C8BFB2]">
            <button
              onClick={() => setCurrentPage('home')}
              className={`hover:text-[#F7F3EA] transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1 ${
                currentPage === 'home' ? 'text-[#C6A15B] font-semibold border-b-2 border-[#C6A15B]' : ''
              }`}
            >
              Atelier
            </button>
            <button
              onClick={() => setCurrentPage('shop')}
              className={`hover:text-[#F7F3EA] transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1 ${
                currentPage === 'shop' ? 'text-[#C6A15B] font-semibold border-b-2 border-[#C6A15B]' : ''
              }`}
            >
              Collections
            </button>
            <button
              onClick={() => setCurrentPage('about')}
              className={`hover:text-[#F7F3EA] transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1 ${
                currentPage === 'about' ? 'text-[#C6A15B] font-semibold border-b-2 border-[#C6A15B]' : ''
              }`}
            >
              Royal Heritage
            </button>
            <button
              onClick={() => setCurrentPage('craftsmanship')}
              className={`hover:text-[#F7F3EA] transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1 ${
                currentPage === 'craftsmanship' ? 'text-[#C6A15B] font-semibold border-b-2 border-[#C6A15B]' : ''
              }`}
            >
              Craftsmanship
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className={`hover:text-[#F7F3EA] transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1 ${
                currentPage === 'contact' ? 'text-[#C6A15B] font-semibold border-b-2 border-[#C6A15B]' : ''
              }`}
            >
              VIP Concierge
            </button>
          </nav>

          {/* Zone 3: Luxury Utilities & Actions */}
          <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
            {/* Live Gold Valuation Estimator Button */}
            <button
              onClick={onOpenCalculator}
              title="Interactive Gold Value Estimator"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#1F1C18] border border-[#C6A15B]/30 hover:border-[#C6A15B] text-xs font-sans-luxe text-[#E5D5B8] hover:text-white transition-colors cursor-pointer"
            >
              <Calculator className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span className="text-[11px] font-medium tracking-wider">Gold Rate</span>
            </button>

            {/* Quick Search */}
            <button
              onClick={onOpenSearch}
              title="Search collections"
              aria-label="Search collections"
              className="p-2 text-[#C8BFB2] hover:text-[#C6A15B] hover:bg-[#1E1B17] rounded-md transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Currency Switcher */}
            <div className="flex items-center bg-[#1D1B17] border border-[#C6A15B]/25 rounded-md p-0.5 text-[11px] font-mono">
              <button
                onClick={() => setCurrency('NGN')}
                className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                  currency === 'NGN' ? 'bg-[#C6A15B] text-[#11100E] font-bold' : 'text-[#AFA495] hover:text-white'
                }`}
              >
                NGN
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                  currency === 'USD' ? 'bg-[#C6A15B] text-[#11100E] font-bold' : 'text-[#AFA495] hover:text-white'
                }`}
              >
                USD
              </button>
            </div>

            {/* Shopping Bag Trigger */}
            <button
              onClick={onOpenCart}
              aria-label="View Shopping Bag"
              className="relative p-2 text-[#C8BFB2] hover:text-[#C6A15B] hover:bg-[#1E1B17] rounded-md transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5 text-[#E5D5B8]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C6A15B] text-[#11100E] text-[10px] font-bold font-mono w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Strip */}
      <div className="lg:hidden flex items-center justify-around py-2.5 px-3 border-t border-[#C6A15B]/15 bg-[#141210] text-[11px] font-sans-luxe uppercase tracking-wider text-[#B8AE9F]">
        <button
          onClick={() => setCurrentPage('home')}
          className={`cursor-pointer ${currentPage === 'home' ? 'text-[#C6A15B] font-semibold' : ''}`}
        >
          Atelier
        </button>
        <button
          onClick={() => setCurrentPage('shop')}
          className={`cursor-pointer ${currentPage === 'shop' ? 'text-[#C6A15B] font-semibold' : ''}`}
        >
          Collections
        </button>
        <button
          onClick={() => setCurrentPage('about')}
          className={`cursor-pointer ${currentPage === 'about' ? 'text-[#C6A15B] font-semibold' : ''}`}
        >
          Heritage
        </button>
        <button
          onClick={() => setCurrentPage('craftsmanship')}
          className={`cursor-pointer ${currentPage === 'craftsmanship' ? 'text-[#C6A15B] font-semibold' : ''}`}
        >
          Craft
        </button>
        <button
          onClick={() => setCurrentPage('contact')}
          className={`cursor-pointer ${currentPage === 'contact' ? 'text-[#C6A15B] font-semibold' : ''}`}
        >
          Concierge
        </button>
      </div>
    </div>
  );
};
