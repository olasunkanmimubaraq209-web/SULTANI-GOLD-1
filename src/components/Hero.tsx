import React from 'react';
import { BRAND_ASSETS, SULTANI_RING_PATH, SULTANI_PACKAGING_PATH } from '../data/brandData.ts';
import { ArrowRight, ShieldCheck, Award, Lock, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreCollections: () => void;
  onBookViewing: () => void;
  onSelectProduct: (productId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCollections,
  onBookViewing,
  onSelectProduct
}) => {
  return (
    <section className="relative bg-[#11100E] text-[#F7F3EA] overflow-hidden border-b border-[#C6A15B]/20">
      {/* Subtle Warm Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,161,91,0.08),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Editorial Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-sans-luxe uppercase tracking-[0.28em] text-[#C6A15B]">
              <span>Northern Nigerian Royal Metallurgy</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span>Imperial Editions</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F7F3EA] leading-[1.12]">
              The Sovereign Standard of <span className="text-[#C6A15B] font-semibold">Royal Gold</span>
            </h1>

            <p className="font-serif-luxe text-lg sm:text-xl text-[#D8CEBF] max-w-2xl leading-relaxed italic">
              "Woven in heritage, forged in sovereign majesty." Certified 18-karat to 24-karat fine jewellery, imperial bridal parures, and LBMA-grade investment bullion crafted with centuries of Hausa royal court artistry.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreCollections}
                className="px-7 py-3.5 bg-[#C6A15B] hover:bg-[#B38D46] text-[#11100E] font-sans-luxe font-semibold text-xs tracking-[0.18em] uppercase rounded-sm transition-all duration-200 flex items-center gap-2.5 shadow-md cursor-pointer group"
              >
                <span>Explore The Collections</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onBookViewing}
                className="px-6 py-3.5 bg-transparent hover:bg-white/5 text-[#EADFC9] border border-[#C6A15B]/50 hover:border-[#C6A15B] font-sans-luxe font-medium text-xs tracking-[0.18em] uppercase rounded-sm transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <span>Book Private Viewing</span>
              </button>
            </div>

            {/* 3 Sovereign Trust Pillars */}
            <div className="pt-8 border-t border-[#C6A15B]/15 grid grid-cols-1 sm:grid-cols-3 gap-5 text-left">
              <div>
                <span className="block text-[11px] font-sans-luxe font-semibold uppercase tracking-wider text-[#C6A15B]">
                  Purity & Assay
                </span>
                <span className="text-xs text-[#A89E90] mt-1 block">
                  18K, 21K, 22K & 24K (999.9) certified metallurgical fineness
                </span>
              </div>
              <div>
                <span className="block text-[11px] font-sans-luxe font-semibold uppercase tracking-wider text-[#C6A15B]">
                  Makera Guild
                </span>
                <span className="text-xs text-[#A89E90] mt-1 block">
                  Generational master goldsmiths from ancient Kano & Sokoto courts
                </span>
              </div>
              <div>
                <span className="block text-[11px] font-sans-luxe font-semibold uppercase tracking-wider text-[#C6A15B]">
                  Armored Courier
                </span>
                <span className="text-xs text-[#A89E90] mt-1 block">
                  Discreet armored vehicle transit across Nigeria & insured air cargo
                </span>
              </div>
            </div>
          </div>

          {/* Right Showcase Card Column: Spotlight on Sovereign Emerald Ring & Packaging */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg p-3 bg-gradient-to-b from-[#211E19] to-[#151310] border border-[#C6A15B]/40 shadow-2xl">
              <div className="relative aspect-4/3 sm:aspect-square overflow-hidden rounded bg-[#0A0A08] group">
                <img
                  src={SULTANI_RING_PATH}
                  alt="The Sultani Sovereign Emerald Signet Ring in 18K Gold"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 text-[10px] font-sans-luxe uppercase tracking-widest text-[#C6A15B] font-semibold mb-1">
                    <span>Masterpiece Spotlight · 18K Solid Gold</span>
                  </div>
                  <h3 className="font-display text-xl text-[#F7F3EA] font-semibold leading-tight">
                    The Sultani Sovereign Emerald Signet Ring
                  </h3>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/15">
                    <div className="text-xs font-mono text-[#D4AF37]">
                      <span>₦2,850,000</span>
                      <span className="text-stone-400 mx-1.5">/</span>
                      <span className="text-stone-300">$1,900 USD</span>
                    </div>
                    <button
                      onClick={() => onSelectProduct('sg-001')}
                      className="text-xs font-sans-luxe uppercase tracking-wider text-[#F7F3EA] hover:text-[#C6A15B] font-medium flex items-center gap-1 cursor-pointer"
                    >
                      <span>View Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Sub-strip showing Official Presentation Packaging */}
              <div className="mt-3 p-3 bg-[#191714] rounded border border-[#C6A15B]/20 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={SULTANI_PACKAGING_PATH}
                    alt="Official Sultani Gold Packaging Bags"
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 object-cover rounded border border-[#C6A15B]/30"
                  />
                  <div>
                    <span className="text-[11px] font-sans-luxe uppercase tracking-wider text-[#C6A15B] font-medium block">
                      The Sovereign Unboxing
                    </span>
                    <span className="text-xs text-[#A89E90]">
                      Each piece arrives in custom gold-stamped velvet suites
                    </span>
                  </div>
                </div>
                <button
                  onClick={onExploreCollections}
                  className="text-[11px] font-sans-luxe tracking-wider uppercase text-[#E5D5B8] hover:text-white underline underline-offset-4 shrink-0 cursor-pointer"
                >
                  View All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
