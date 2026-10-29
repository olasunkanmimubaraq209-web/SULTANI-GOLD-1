import React, { useState } from 'react';
import { SULTANI_PRODUCTS, ProductItem } from '../data/brandData.ts';
import { Search, X, ArrowRight } from 'lucide-react';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: ProductItem) => void;
  currency: 'NGN' | 'USD';
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  currency
}) => {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  const results = query.trim() === ''
    ? SULTANI_PRODUCTS.slice(0, 4)
    : SULTANI_PRODUCTS.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.karat.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl bg-[#141210] border border-[#C6A15B]/40 rounded-lg shadow-2xl overflow-hidden text-[#F7F3EA]"
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#C6A15B]/20 flex items-center gap-3 bg-[#181613]">
          <Search className="w-5 h-5 text-[#C6A15B] shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search Sultani Gold pieces, emerald signets, bullion bars, or karats..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm font-sans-luxe text-[#F7F3EA] placeholder-stone-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-full bg-[#1E1B17] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          <span className="text-[10px] font-sans-luxe uppercase tracking-wider text-[#A89E90] px-2 block">
            {query.trim() === '' ? 'Curated Masterpieces' : `Found ${results.length} Matching Creations`}
          </span>

          {results.length > 0 ? (
            results.map((product) => {
              const formattedPrice = currency === 'NGN'
                ? `₦${product.priceNGN.toLocaleString()}`
                : `$${product.priceUSD.toLocaleString()} USD`;

              return (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="p-3 rounded bg-[#181613] hover:bg-[#201D19] border border-[#C6A15B]/15 hover:border-[#C6A15B]/50 transition-colors flex items-center justify-between cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-12 h-12 rounded object-cover border border-[#C6A15B]/30 shrink-0"
                    />
                    <div>
                      <span className="text-[10px] font-sans-luxe uppercase tracking-wider text-[#C6A15B] block">
                        {product.karat} · {product.weightGrams}g
                      </span>
                      <h4 className="font-display text-sm font-semibold text-[#F7F3EA] group-hover:text-[#C6A15B] transition-colors">
                        {product.title}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#E5D5B8] tabular-nums">
                      {formattedPrice}
                    </span>
                    <ArrowRight className="w-4 h-4 text-stone-500 group-hover:text-[#C6A15B] group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center text-xs text-stone-400">
              No creations found matching "{query}". Try searching "emerald", "collar", "bullion", or "22K".
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
