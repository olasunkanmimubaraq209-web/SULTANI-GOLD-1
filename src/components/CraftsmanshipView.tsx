import React from 'react';
import { BRAND_ASSETS, SULTANI_LOGO_PATH } from '../data/brandData.ts';
import { ShieldCheck, Award, Flame, Sparkles, Scale, Lock } from 'lucide-react';

interface CraftsmanshipViewProps {
  onExploreCollections: () => void;
  onOpenCalculator: () => void;
}

export const CraftsmanshipView: React.FC<CraftsmanshipViewProps> = ({
  onExploreCollections,
  onOpenCalculator
}) => {
  const karatSpectrum = [
    {
      karat: '24K Fine Gold',
      fineness: '999.9 Purity',
      percentage: '99.99%',
      role: 'Investment Bullion & Sacred Ingots',
      description: 'The purest chemical expression of gold. Solar, soft, and unreactive. Forged strictly for sovereign treasury bars and family vault reserves.',
      colorHex: '#FFDF00'
    },
    {
      karat: '22K Sovereign Gold',
      fineness: '916 Hallmark',
      percentage: '91.6%',
      role: 'Royal Bridal Collars & Regal Torcs',
      description: 'The historic benchmark of Northern Nigerian royalty. Retains the deep warm solar amber hue while providing the tensile stability needed for complex filigree wirework.',
      colorHex: '#D4AF37'
    },
    {
      karat: '21K Ceremonial Gold',
      fineness: '875 Hallmark',
      percentage: '87.5%',
      role: 'Bridal Parures & Heavy Bangles',
      description: 'The universal bridal standard throughout the Sahel, North Africa, and the Middle East. Perfectly balances brilliant gold saturation with structural durability.',
      colorHex: '#C59B27'
    },
    {
      karat: '18K Fine Gold',
      fineness: '750 Hallmark',
      percentage: '75.0%',
      role: 'Signet Rings & Precision Gem Settings',
      description: 'Engineered for architectural daily luxury. Alloyed with pure copper and silver to securely hold faceted emeralds and withstand daily wear.',
      colorHex: '#AA7F1D'
    }
  ];

  const craftStages = [
    {
      step: '01',
      title: 'Ancestral Crucible Smelting',
      description: 'Raw certified grains are melted at 1,064°C in clay-graphite crucibles using precise induction furnaces to ensure homogenous crystalline structure.'
    },
    {
      step: '02',
      title: 'Hand Wire-Drawing & Filigree',
      description: 'Master goldsmiths pull gold ingots through graduated steel drawplates until fine threads as slender as silk are achieved, then twist them into intricate sacred knot motifs.'
    },
    {
      step: '03',
      title: 'Architectural Mounting & Gem Setting',
      description: 'Each octagonal emerald and diamond accent is set by hand under optical microscopes with stepped bezel shoulders and milgrain detailing.'
    },
    {
      step: '04',
      title: 'Laser Assay & Cryptographic Seal',
      description: 'Every creation undergoes X-ray fluorescence spectrometry (XRF) and is stamped with the official Sultani Gold crown hallmark and individual serialized certificate.'
    }
  ];

  return (
    <div className="bg-[#11100E] text-[#F7F3EA] min-h-screen py-12 lg:py-20 px-4 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-16 lg:space-y-24">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-sans-luxe uppercase tracking-[0.28em] text-[#C6A15B] font-semibold">
            Haute Joaillerie & Metallurgy
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-[#F7F3EA]">
            The Science & Art of Royal Gold
          </h1>
          <p className="font-serif-luxe text-lg text-[#C8BFB2] italic max-w-2xl mx-auto">
            From crucible smelting to microscopic laser assay: the rigorous standards behind every Sultani Gold creation.
          </p>
        </div>

        {/* Karat Fineness Spectrum */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-sans-luxe uppercase tracking-widest text-[#C6A15B] font-semibold block">
                Purity Hierarchy
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F7F3EA] mt-1">
                The Sovereign Karat Spectrum
              </h2>
            </div>
            <button
              onClick={onOpenCalculator}
              className="text-xs font-sans-luxe uppercase tracking-wider text-[#C6A15B] hover:text-[#F7F3EA] underline underline-offset-4 cursor-pointer"
            >
              Launch Live Valuation Estimator
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {karatSpectrum.map((item) => (
              <div
                key={item.karat}
                className="p-5 rounded-lg bg-[#181613] border border-[#C6A15B]/25 flex flex-col justify-between space-y-4 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#C6A15B] bg-[#221F1A] px-2 py-0.5 rounded border border-[#C6A15B]/30">
                      {item.fineness}
                    </span>
                    <span className="font-mono text-xs text-stone-400">
                      {item.percentage}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-semibold text-[#F7F3EA] mt-3">
                    {item.karat}
                  </h3>
                  <span className="text-[11px] font-sans-luxe uppercase tracking-wider text-[#A89E90] block mt-0.5">
                    {item.role}
                  </span>
                  <p className="text-xs font-sans-luxe text-[#B8AE9F] mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#C6A15B]/15 text-[10px] uppercase tracking-widest text-[#C6A15B]">
                  Certified Laboratory Assay
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Crafting Stages */}
        <div className="p-8 sm:p-12 rounded-lg bg-[#161411] border border-[#C6A15B]/30 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-sans-luxe uppercase tracking-widest text-[#C6A15B] font-semibold">
              The Atelier Method
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F7F3EA]">
              From Raw Grain to Sovereign Masterpiece
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {craftStages.map((stage) => (
              <div key={stage.step} className="space-y-2">
                <span className="font-mono text-xl font-bold text-[#C6A15B] block">
                  {stage.step}.
                </span>
                <h4 className="font-display text-sm font-semibold text-[#F7F3EA]">
                  {stage.title}
                </h4>
                <p className="text-xs font-sans-luxe text-[#9E9385] leading-relaxed">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Care & Preservation Guide */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 space-y-4">
            <span className="text-xs font-sans-luxe uppercase tracking-widest text-[#C6A15B] font-semibold block">
              Generational Longevity
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F7F3EA]">
              Preserving Your Sultani Gold
            </h2>
            <p className="font-sans-luxe text-xs sm:text-sm text-[#D1C7B7] leading-relaxed">
              Fine gold is eternal, but high-karat alloys require dignified care to preserve their polished luster and delicate filigree wirework.
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans-luxe">
            <div className="p-4 rounded bg-[#181613] border border-[#C6A15B]/20 space-y-1">
              <span className="font-semibold text-[#E5D5B8] block">1. Ultrasonic & Steam Cleaning</span>
              <p className="text-[#9E9385]">We offer complimentary lifetime ultrasonic cleaning and inspection at our Maitama and Kano viewing salons.</p>
            </div>
            <div className="p-4 rounded bg-[#181613] border border-[#C6A15B]/20 space-y-1">
              <span className="font-semibold text-[#E5D5B8] block">2. Individual Velvet Storage</span>
              <p className="text-[#9E9385]">Always store each piece in its original Sultani suspension casket to prevent scratches from harder gemstones.</p>
            </div>
            <div className="p-4 rounded bg-[#181613] border border-[#C6A15B]/20 space-y-1">
              <span className="font-semibold text-[#E5D5B8] block">3. Chemical Discipline</span>
              <p className="text-[#9E9385]">Avoid chlorine, harsh household bleach, and swimming pools, which can embrittle solder joints over time.</p>
            </div>
            <div className="p-4 rounded bg-[#181613] border border-[#C6A15B]/20 space-y-1">
              <span className="font-semibold text-[#E5D5B8] block">4. Annual Prong & Clasp Inspection</span>
              <p className="text-[#9E9385]">Our master goldsmiths re-tension safety catches and bezel settings before major ceremonial occasions.</p>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="text-center pt-4">
          <button
            onClick={onExploreCollections}
            className="px-8 py-3.5 bg-[#C6A15B] hover:bg-[#B38D46] text-[#11100E] font-sans-luxe font-semibold text-xs tracking-widest uppercase rounded transition-colors cursor-pointer shadow-lg"
          >
            Explore Masterpiece Catalog
          </button>
        </div>
      </div>
    </div>
  );
};
