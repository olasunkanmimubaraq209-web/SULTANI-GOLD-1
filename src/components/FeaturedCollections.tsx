import React from 'react';
import { BRAND_ASSETS, SULTANI_RING_PATH, SULTANI_PACKAGING_PATH } from '../data/brandData.ts';
import { ArrowRight, ShieldCheck, Gem, Landmark, Sparkles } from 'lucide-react';

interface FeaturedCollectionsProps {
  onSelectCategory: (category: string) => void;
  onExploreAll: () => void;
}

export const FeaturedCollections: React.FC<FeaturedCollectionsProps> = ({
  onSelectCategory,
  onExploreAll
}) => {
  const collections = [
    {
      id: 'bridal',
      title: 'Royal Bridal Regalia',
      category: 'Bridal',
      subtitle: '21K & 22K Ceremonial Parures',
      description: 'Filigree collars, cascading chandelier earrings, and heirloom dowry suites forged for palace weddings and traditional blessings.',
      image: BRAND_ASSETS.bridalSet,
      badge: 'Imperial Ceremonial'
    },
    {
      id: 'rings',
      title: 'Imperial Signets & Rings',
      category: 'Fine Jewellery',
      subtitle: '18K & 21K Masculine & Sovereign Rings',
      description: 'Bold architectural signet rings centering deep green emerald-cut stones, hand-drawn wire domes, and stepped shoulders.',
      image: SULTANI_RING_PATH,
      badge: 'Bespoke Atelier'
    },
    {
      id: 'bullion',
      title: 'Minted Investment Bullion',
      category: 'Bullion',
      subtitle: '24K (999.9) Pure Physical Gold',
      description: 'LBMA-standard fine investment bars and hand-poured ingots with tamper-evident security assay packaging.',
      image: BRAND_ASSETS.bullionBars,
      badge: '999.9 Pure Gold'
    },
    {
      id: 'packaging',
      title: 'The Sovereign Unboxing',
      category: 'All',
      subtitle: 'Official Sultani Gold Suites',
      description: 'Custom emerald & gold foil presentation bags, velvet ring caskets, and wax-sealed archival assay certificates.',
      image: SULTANI_PACKAGING_PATH,
      badge: 'Signature Presentation'
    }
  ];

  return (
    <section className="bg-[#141210] py-16 lg:py-24 px-4 lg:px-8 border-b border-[#C6A15B]/20">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-sans-luxe uppercase tracking-[0.25em] text-[#C6A15B] font-semibold">
              Curated Ateliers
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F7F3EA] font-semibold tracking-tight">
              Four Pillars of Sovereign Gold
            </h2>
            <p className="font-serif-luxe text-base text-[#C4B7A5] italic">
              From ceremonial bridal adornment to institutional capital preservation, discover creations worthy of the Sultanate.
            </p>
          </div>

          <button
            onClick={onExploreAll}
            className="text-xs font-sans-luxe uppercase tracking-[0.16em] text-[#C6A15B] hover:text-[#F7F3EA] font-semibold flex items-center gap-2 group cursor-pointer pb-1"
          >
            <span>View Complete Catalog</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((col) => (
            <div
              key={col.id}
              onClick={() => onSelectCategory(col.category)}
              className="group relative rounded-lg overflow-hidden bg-[#1B1916] border border-[#C6A15B]/20 hover:border-[#C6A15B]/70 transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-md hover:shadow-2xl"
            >
              {/* Image Container with measured scrim */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-[#0D0C0A]">
                <img
                  src={col.image}
                  alt={col.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1916] via-transparent to-transparent opacity-90" />
                <div className="absolute top-3 left-3 text-[10px] font-sans-luxe uppercase tracking-widest text-[#E5D5B8] bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded border border-[#C6A15B]/30">
                  {col.badge}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                <div>
                  <span className="text-[10px] font-sans-luxe uppercase tracking-wider text-[#C6A15B] block font-medium">
                    {col.subtitle}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-[#F7F3EA] group-hover:text-[#C6A15B] transition-colors mt-1">
                    {col.title}
                  </h3>
                  <p className="font-sans-luxe text-xs text-[#A89E90] mt-2 leading-relaxed">
                    {col.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#C6A15B]/15 flex items-center justify-between text-xs font-sans-luxe text-[#C6A15B] group-hover:text-[#F7F3EA] transition-colors font-medium">
                  <span>Explore Atelier</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
