import React from 'react';
import { BRAND_ASSETS, SULTANI_RING_PATH, SULTANI_RING_PACK_PATH, SULTANI_PACKAGING_PATH } from '../data/brandData.ts';
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
      id: 'everyday',
      title: 'Everyday Elegance',
      category: 'Everyday Luxury',
      subtitle: 'Day to Evening Refinement',
      description: 'Refined pieces that move easily from day to evening.',
      image: SULTANI_RING_PATH,
      badge: 'Everyday Luxury'
    },
    {
      id: 'bridal',
      title: 'Bridal & Celebration',
      category: 'Bridal',
      subtitle: 'Weddings & Milestone Occasions',
      description: 'Dignified, contemporary designs for weddings and milestone occasions.',
      image: BRAND_ASSETS.bridalSet,
      badge: 'Bridal & Celebration'
    },
    {
      id: 'gifts',
      title: 'Gifts Worth Giving',
      category: 'Fine Jewellery',
      subtitle: 'Anniversaries & Celebrations',
      description: 'Thoughtful choices for anniversaries, birthdays and special thank-yous.',
      image: SULTANI_RING_PACK_PATH,
      badge: 'Gifts Worth Giving'
    },
    {
      id: 'new-arrivals',
      title: 'New Arrivals',
      category: 'All',
      subtitle: 'Freshly Presented Editions',
      description: 'Our latest designs, freshly presented.',
      image: BRAND_ASSETS.heroNecklace,
      badge: 'New Arrivals'
    }
  ];

  return (
    <section className="bg-[#141210] py-16 lg:py-24 px-4 lg:px-8 border-b border-[#C6A15B]/20">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-sans-luxe uppercase tracking-[0.25em] text-[#C6A15B] font-semibold">
              Collections
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F7F3EA] font-semibold tracking-tight">
              Find Your Piece
            </h2>
            <p className="font-serif-luxe text-base text-[#C4B7A5] italic">
              From everyday quiet confidence to grand milestone celebrations, explore jewellery crafted for your story.
            </p>
          </div>

          <button
            onClick={onExploreAll}
            className="text-xs font-sans-luxe uppercase tracking-[0.16em] text-[#C6A15B] hover:text-[#F7F3EA] font-semibold flex items-center gap-2 group cursor-pointer pb-1"
          >
            <span>View All Collections</span>
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
