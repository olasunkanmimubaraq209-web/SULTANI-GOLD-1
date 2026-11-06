import React, { useState } from 'react';
import { X, Sparkles, Shield, Compass, Scale, MessageCircle, CheckCircle2 } from 'lucide-react';

interface GoldGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GoldGuideModal: React.FC<GoldGuideModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'karat' | 'care' | 'sizing'>('karat');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-[#141210] border border-[#C6A15B]/40 rounded-lg shadow-2xl text-[#F7F3EA] max-h-[90vh] flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="p-6 border-b border-[#C6A15B]/20 flex items-start justify-between bg-[#191714]">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[10px] font-sans-luxe uppercase tracking-[0.2em] text-[#C6A15B] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>Buying Guidance</span>
            </div>
            <h2 className="font-display text-2xl font-semibold text-[#F7F3EA]">
              The Sultani Gold Guide
            </h2>
            <p className="text-xs font-sans-luxe text-[#B8AE9F]">
              Everything you need to choose with clarity, peace of mind and lasting confidence.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white rounded-full bg-[#201D19] transition-colors cursor-pointer"
            aria-label="Close Guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#C6A15B]/20 bg-[#171512] px-6 text-xs font-sans-luxe uppercase tracking-wider">
          <button
            onClick={() => setActiveTab('karat')}
            className={`py-3 px-4 font-medium transition-colors border-b-2 cursor-pointer ${
              activeTab === 'karat'
                ? 'border-[#C6A15B] text-[#C6A15B] font-semibold'
                : 'border-transparent text-stone-400 hover:text-white'
            }`}
          >
            Understanding Karat
          </button>
          <button
            onClick={() => setActiveTab('sizing')}
            className={`py-3 px-4 font-medium transition-colors border-b-2 cursor-pointer ${
              activeTab === 'sizing'
                ? 'border-[#C6A15B] text-[#C6A15B] font-semibold'
                : 'border-transparent text-stone-400 hover:text-white'
            }`}
          >
            Sizing & Fit
          </button>
          <button
            onClick={() => setActiveTab('care')}
            className={`py-3 px-4 font-medium transition-colors border-b-2 cursor-pointer ${
              activeTab === 'care'
                ? 'border-[#C6A15B] text-[#C6A15B] font-semibold'
                : 'border-transparent text-stone-400 hover:text-white'
            }`}
          >
            Care & Preservation
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-grow font-sans-luxe text-xs text-[#D1C7B7] leading-relaxed">
          {activeTab === 'karat' && (
            <div className="space-y-4">
              <p>
                Karat (K) indicates the proportion of pure gold in a piece. Pure gold is 24K. Blending pure gold with precious noble alloys enhances durability, structure and color depth for daily wear.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded bg-[#1C1A16] border border-[#C6A15B]/20 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm font-semibold text-[#F7F3EA]">18K (75.0% Gold)</span>
                    <span className="text-[10px] text-[#C6A15B] font-mono">750 Hallmark</span>
                  </div>
                  <p className="text-[11px] text-[#A89E90]">
                    The international high-jewellery gold standard. Excellent durability and rich warm tone, ideal for statement signet rings and gemstone settings.
                  </p>
                </div>

                <div className="p-3.5 rounded bg-[#1C1A16] border border-[#C6A15B]/20 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm font-semibold text-[#F7F3EA]">21K (87.5% Gold)</span>
                    <span className="text-[10px] text-[#C6A15B] font-mono">875 Hallmark</span>
                  </div>
                  <p className="text-[11px] text-[#A89E90]">
                    Prized in Middle Eastern and African traditions for its deep solar luster and balance of heirloom substance and enduring wearability.
                  </p>
                </div>

                <div className="p-3.5 rounded bg-[#1C1A16] border border-[#C6A15B]/20 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm font-semibold text-[#F7F3EA]">22K (91.6% Gold)</span>
                    <span className="text-[10px] text-[#C6A15B] font-mono">916 Hallmark</span>
                  </div>
                  <p className="text-[11px] text-[#A89E90]">
                    The royal ceremonial bridal preference. Intense golden warmth reserved for regal collars, chokers and heirloom wedding parures.
                  </p>
                </div>

                <div className="p-3.5 rounded bg-[#1C1A16] border border-[#C6A15B]/20 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm font-semibold text-[#F7F3EA]">24K (99.99% Pure)</span>
                    <span className="text-[10px] text-[#C6A15B] font-mono">999.9 Hallmark</span>
                  </div>
                  <p className="text-[11px] text-[#A89E90]">
                    Pure, unalloyed investment gold. Struck into minted bullion bars and ingots for generational wealth preservation and family treasuries.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'sizing' && (
            <div className="space-y-4">
              <p>
                A well-fitting piece should feel comfortable, secure and natural from day to evening. We offer complimentary sizing consultation and resizing on all Sultani creations.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded bg-[#1C1A16] border border-[#C6A15B]/20">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#F7F3EA] block">Ring Sizing</strong>
                    <span className="text-[11px] text-[#A89E90]">
                      Standard sizes run from US 5 to US 12. If you are between sizes, we recommend selecting the half size larger, especially for wider bands like our sovereign signet.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded bg-[#1C1A16] border border-[#C6A15B]/20">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#F7F3EA] block">Collar & Necklace Lengths</strong>
                    <span className="text-[11px] text-[#A89E90]">
                      Bridal collars come with discreet adjustable 4cm link extensions to ensure the necklace sits gracefully along your neckline.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded bg-[#1C1A16] border border-[#C6A15B]/20">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#F7F3EA] block">Private Concierge Fitting</strong>
                    <span className="text-[11px] text-[#A89E90]">
                      Visit our private salons in Abuja or Lagos for hands-on millimeter caliper sizing and ring gauge trials.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'care' && (
            <div className="space-y-4">
              <p>
                Fine gold retains its precious value forever with simple, mindful care. Each Sultani Gold piece arrives in our signature black jewellery box with plush velvet cushion and deep teal carrier bag.
              </p>

              <div className="space-y-3">
                <div className="p-3 rounded bg-[#1C1A16] border border-[#C6A15B]/20 space-y-1">
                  <span className="text-[#F7F3EA] font-semibold block">Daily Wear & Gentle Cleaning</span>
                  <p className="text-[11px] text-[#A89E90]">
                    Clean gently with warm water, mild fragrance-free soap, and an ultra-soft brush. Pat dry with the microfiber polishing cloth provided in your presentation box.
                  </p>
                </div>

                <div className="p-3 rounded bg-[#1C1A16] border border-[#C6A15B]/20 space-y-1">
                  <span className="text-[#F7F3EA] font-semibold block">Avoid Harsh Chemicals</span>
                  <p className="text-[11px] text-[#A89E90]">
                    Remove fine jewellery before swimming in chlorinated pools, applying perfumes or lotions, or handling household chemicals.
                  </p>
                </div>

                <div className="p-3 rounded bg-[#1C1A16] border border-[#C6A15B]/20 space-y-1">
                  <span className="text-[#F7F3EA] font-semibold block">Safe Storage</span>
                  <p className="text-[11px] text-[#A89E90]">
                    Store individual pieces separated in their signature Sultani black box to prevent scratching between harder gemstones and precious gold surfaces.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer with WhatsApp Link */}
        <div className="p-4 sm:p-5 border-t border-[#C6A15B]/20 bg-[#171512] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <span className="text-xs text-[#E5D5B8] font-medium block">
              Still have questions about karat, sizing or care?
            </span>
            <span className="text-[10px] text-stone-400">
              Our gold specialists are happy to advise you directly.
            </span>
          </div>

          <a
            href="https://wa.me/2349087858264?text=Hello%20Sultani%20Gold%2C%20I%20would%20like%20guidance%20on%20choosing%20the%20right%20gold%20piece."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 bg-[#0D3B2E] hover:bg-[#114b3b] text-emerald-100 border border-emerald-500/40 font-sans-luxe text-xs font-semibold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Consult on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
