import React, { useState, useMemo } from 'react';
import { SULTANI_PRODUCTS, ProductItem } from '../data/brandData.ts';
import { ProductCard } from './ProductCard.tsx';
import { Search, SlidersHorizontal, Calculator, ArrowUpDown, X } from 'lucide-react';

interface ShopCatalogProps {
  currency: 'NGN' | 'USD';
  onQuickView: (product: ProductItem) => void;
  onAddToCart: (product: ProductItem) => void;
  onOpenCalculator: () => void;
  initialCategory?: string;
}

export const ShopCatalog: React.FC<ShopCatalogProps> = ({
  currency,
  onQuickView,
  onAddToCart,
  onOpenCalculator,
  initialCategory = 'All'
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedKarat, setSelectedKarat] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'weight'>('featured');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Bridal', 'Fine Jewellery', 'Bullion', 'Everyday Luxury'];
  const karats = ['All', '18K', '21K', '22K', '24K (999.9)'];

  const filteredProducts = useMemo(() => {
    return SULTANI_PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesKarat = selectedKarat === 'All' || product.karat === selectedKarat;
      const matchesSearch = searchQuery.trim() === '' ||
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.hausaTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.karat.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesKarat && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceNGN - b.priceNGN;
      if (sortBy === 'price-desc') return b.priceNGN - a.priceNGN;
      if (sortBy === 'weight') return b.weightGrams - a.weightGrams;
      return 0; // featured default
    });
  }, [selectedCategory, selectedKarat, sortBy, searchQuery]);

  return (
    <div className="bg-[#11100E] text-[#F7F3EA] min-h-screen py-10 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Editorial Collection Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-sans-luxe uppercase tracking-[0.25em] text-[#C6A15B] font-semibold">
            Maison Sultani · Haute Joaillerie & Bullion
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            The Sovereign Collections
          </h1>
          <p className="font-serif-luxe text-base sm:text-lg text-[#C8BFB2] italic">
            Certified gold creations hand-forged by hereditary Makera master goldsmiths, honoring Northern Nigerian royal court traditions.
          </p>
        </div>

        {/* Filters and Controls Bar */}
        <div className="p-4 sm:p-5 rounded-lg bg-[#181613] border border-[#C6A15B]/25 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Live Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C6A15B]" />
              <input
                type="text"
                placeholder="Search by piece, karat, or motif..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2 rounded bg-[#11100E] border border-[#C6A15B]/30 focus:border-[#C6A15B] text-xs font-sans-luxe text-[#F7F3EA] placeholder-stone-500 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 hover:text-white cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Actions (Gold Rate + Sort) */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenCalculator}
                className="px-3.5 py-2 rounded bg-[#201D19] border border-[#C6A15B]/40 hover:border-[#C6A15B] text-xs font-sans-luxe text-[#E5D5B8] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
              >
                <Calculator className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>Live Gold Calculator</span>
              </button>

              <div className="flex items-center gap-2 bg-[#11100E] border border-[#C6A15B]/30 rounded px-2.5 py-1.5 shrink-0">
                <ArrowUpDown className="w-3.5 h-3.5 text-[#C6A15B]" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent text-xs font-sans-luxe text-[#F7F3EA] focus:outline-none cursor-pointer"
                >
                  <option value="featured" className="bg-[#181613]">Featured Masterpieces</option>
                  <option value="price-asc" className="bg-[#181613]">Price: Low to High</option>
                  <option value="price-desc" className="bg-[#181613]">Price: High to Low</option>
                  <option value="weight" className="bg-[#181613]">Gold Weight: Heaviest First</option>
                </select>
              </div>
            </div>
          </div>

          {/* Category Tabs (Segmented Controls) */}
          <div className="pt-2 border-t border-[#C6A15B]/15 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-sans-luxe rounded transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#C6A15B] text-[#11100E] font-semibold shadow-xs'
                      : 'bg-[#11100E] text-[#C4B7A5] hover:text-[#F7F3EA] border border-[#C6A15B]/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Karat Fineness Filter */}
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-sans-luxe uppercase tracking-wider text-[#9E9385]">
                Fineness:
              </span>
              {karats.map((k) => (
                <button
                  key={k}
                  onClick={() => setSelectedKarat(k)}
                  className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors cursor-pointer ${
                    selectedKarat === k
                      ? 'bg-[#29241E] text-[#C6A15B] border border-[#C6A15B] font-bold'
                      : 'bg-[#11100E] text-stone-400 border border-stone-800 hover:text-white'
                  }`}
                >
                  {k}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs font-sans-luxe text-[#A89E90] px-1">
          <span>
            Displaying <strong className="text-[#F7F3EA]">{filteredProducts.length}</strong> authenticated sovereign creation{filteredProducts.length === 1 ? '' : 's'}
          </span>
          <span className="text-[11px] uppercase tracking-wider text-[#C6A15B]">
            All Items Include Armored Insured Transit
          </span>
        </div>

        {/* Products Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                currency={currency}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-lg bg-[#181613] border border-[#C6A15B]/20 space-y-4">
            <h3 className="font-display text-xl text-[#F7F3EA]">No Sovereign Pieces Match Your Query</h3>
            <p className="text-xs text-[#A89E90] max-w-md mx-auto">
              We could not find creations matching your current combination of category, karat fineness, or search terms.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedKarat('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-[#C6A15B] text-[#11100E] text-xs font-sans-luxe uppercase tracking-wider rounded font-semibold cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
