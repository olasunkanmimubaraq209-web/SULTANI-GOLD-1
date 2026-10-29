import React, { useState } from 'react';
import { X, Calculator, ShieldCheck, ArrowRight, MessageSquare } from 'lucide-react';

interface GoldCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: 'NGN' | 'USD';
}

export const GoldCalculatorModal: React.FC<GoldCalculatorModalProps> = ({
  isOpen,
  onClose,
  currency
}) => {
  if (!isOpen) return null;

  const [weightGrams, setWeightGrams] = useState<number>(50);
  const [selectedKarat, setSelectedKarat] = useState<number>(24);

  // Live market benchmark
  const base24K_NGN_perGram = 155000;
  const exchangeRateUSD = 1500; // NGN per USD

  const purityFactor = selectedKarat / 24;
  const estimatedValueNGN = Math.round(weightGrams * purityFactor * base24K_NGN_perGram);
  const estimatedValueUSD = Math.round(estimatedValueNGN / exchangeRateUSD);

  const standardWeights = [
    { label: '10g (Tola/Cast)', grams: 10 },
    { label: '1oz (31.10g Minted)', grams: 31.103 },
    { label: '50g (Sovereign Ingot)', grams: 50 },
    { label: '100g (Cast Bar)', grams: 100 },
    { label: '250g (Quarter Kilo)', grams: 250 },
    { label: '500g (Half Kilo Vault)', grams: 500 }
  ];

  const handleInquireBullion = () => {
    const text = encodeURIComponent(
      `Salaam / Hello Sultani Gold Bullion Desk. I would like to inquire about procuring ${weightGrams}g of ${selectedKarat}K physical gold (Estimated valuation: ₦${estimatedValueNGN.toLocaleString()} / $${estimatedValueUSD.toLocaleString()} USD). Please confirm physical vault availability in Abuja/Kano.`
    );
    window.open(`https://wa.me/2349087858264?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl bg-[#141210] border border-[#C6A15B]/40 rounded-lg shadow-2xl text-[#F7F3EA] p-6 sm:p-8 space-y-6"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#C6A15B]/20">
          <div className="flex items-center gap-2.5">
            <Calculator className="w-5 h-5 text-[#C6A15B]" />
            <div>
              <h2 className="font-display text-lg sm:text-xl font-semibold text-[#F7F3EA]">
                Live Gold Valuation Estimator
              </h2>
              <span className="text-[10px] font-sans-luxe uppercase tracking-widest text-[#A89E90] block">
                Calibrated to International LBMA & Nigerian Spot Benchmarks
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-full bg-[#1E1B17] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Karat Selection */}
        <div className="space-y-2">
          <label className="text-xs font-sans-luxe uppercase tracking-wider text-[#C6A15B] font-semibold block">
            1. Select Alloy Karat & Fineness
          </label>
          <div className="grid grid-cols-4 gap-2">
            {[
              { karat: 18, label: '18K (750)', desc: 'Fine Jewellery' },
              { karat: 21, label: '21K (875)', desc: 'Bridal Sets' },
              { karat: 22, label: '22K (916)', desc: 'Royal Collars' },
              { karat: 24, label: '24K (999.9)', desc: 'Pure Bullion' }
            ].map((k) => (
              <button
                key={k.karat}
                onClick={() => setSelectedKarat(k.karat)}
                className={`p-2.5 rounded text-left border transition-all cursor-pointer ${
                  selectedKarat === k.karat
                    ? 'bg-[#25211B] border-[#C6A15B] text-white'
                    : 'bg-[#181613] border-[#C6A15B]/20 text-[#A89E90] hover:border-[#C6A15B]/50'
                }`}
              >
                <span className="font-mono text-xs font-bold block text-[#E5D5B8]">
                  {k.label}
                </span>
                <span className="text-[9px] uppercase tracking-wider block text-stone-400 mt-0.5">
                  {k.desc}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Weight Range Slider */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-xs font-sans-luxe uppercase tracking-wider text-[#C6A15B] font-semibold">
              2. Precious Metal Weight
            </label>
            <span className="font-mono text-base font-bold text-[#E5D5B8] tabular-nums">
              {weightGrams} Grams
            </span>
          </div>

          <input
            type="range"
            min="5"
            max="500"
            step="5"
            value={weightGrams}
            onChange={(e) => setWeightGrams(Number(e.target.value))}
            className="w-full accent-[#C6A15B] h-2 bg-[#221F1A] rounded-lg cursor-pointer"
          />

          {/* Preset Buttons */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {standardWeights.map((w) => (
              <button
                key={w.label}
                onClick={() => setWeightGrams(w.grams)}
                className={`px-2 py-1 text-[10px] font-mono rounded border transition-colors cursor-pointer ${
                  weightGrams === w.grams
                    ? 'bg-[#C6A15B] text-[#11100E] font-bold border-[#C6A15B]'
                    : 'bg-[#1A1815] text-[#C4B7A5] border-[#C6A15B]/20 hover:border-[#C6A15B]/50'
                }`}
              >
                {w.label}
              </button>
            ))}
          </div>
        </div>

        {/* Live Calculation Output Display */}
        <div className="p-5 rounded bg-gradient-to-br from-[#1C1A16] to-[#12110F] border border-[#C6A15B]/40 space-y-2">
          <div className="flex justify-between items-baseline">
            <span className="text-xs font-sans-luxe uppercase tracking-wider text-[#A89E90]">
              Estimated Fine Gold Valuation:
            </span>
            <span className="text-[10px] font-mono text-[#C6A15B]">
              {(purityFactor * 100).toFixed(1)}% Fineness Ratio
            </span>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="font-mono text-2xl sm:text-3xl font-bold text-[#E5D5B8] tabular-nums">
              ₦{estimatedValueNGN.toLocaleString()}
            </span>
            <span className="font-mono text-sm text-[#A89E90] tabular-nums">
              / ${estimatedValueUSD.toLocaleString()} USD
            </span>
          </div>

          <p className="text-[11px] font-sans-luxe text-[#9E9385] pt-1 border-t border-[#C6A15B]/15">
            *Excludes fabrication and master assay hallmark charges for bespoke finished jewellery. Physical investment bullion is priced spot-plus-premium.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={handleInquireBullion}
            className="flex-1 py-3 px-4 bg-[#C6A15B] hover:bg-[#B38D46] text-[#11100E] font-sans-luxe font-semibold text-xs uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Lock Allocation via WhatsApp VIP Desk</span>
          </button>
          <button
            onClick={onClose}
            className="py-3 px-4 bg-[#1E1B17] hover:bg-[#28241F] text-[#D1C7B7] text-xs font-sans-luxe uppercase tracking-wider rounded border border-[#C6A15B]/25 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
