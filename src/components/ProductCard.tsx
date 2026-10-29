import React, { useState } from 'react';
import { ProductItem } from '../data/brandData.ts';
import { Eye, ShoppingBag, Check } from 'lucide-react';

interface ProductCardProps {
  product: ProductItem;
  currency: 'NGN' | 'USD';
  onQuickView: (product: ProductItem) => void;
  onAddToCart: (product: ProductItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  currency,
  onQuickView,
  onAddToCart
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const formattedPrice = currency === 'NGN'
    ? `₦${product.priceNGN.toLocaleString()}`
    : `$${product.priceUSD.toLocaleString()} USD`;

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onQuickView(product)}
      className="group flex flex-col bg-[#171512] rounded-md border border-[#C6A15B]/20 hover:border-[#C6A15B]/60 transition-all duration-300 overflow-hidden cursor-pointer shadow-xs hover:shadow-xl"
    >
      {/* Product Image Area */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-[#0D0C0A]">
        <img
          src={isHovered && product.secondaryImage ? product.secondaryImage : product.image}
          alt={product.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Hover Action Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-between p-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="px-3 py-1.5 bg-[#1B1815]/90 hover:bg-[#11100E] text-[#F7F3EA] text-xs font-sans-luxe rounded transition-colors flex items-center gap-1.5 border border-[#C6A15B]/40 cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Quick View</span>
          </button>

          <button
            onClick={handleAdd}
            className={`px-3 py-1.5 text-xs font-sans-luxe rounded transition-all flex items-center gap-1.5 cursor-pointer ${
              isAdded
                ? 'bg-[#0D3B2E] text-white border border-emerald-400'
                : 'bg-[#C6A15B] hover:bg-[#B38D46] text-[#11100E] font-medium'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add to Bag</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Card Content & Metadata */}
      <div className="p-4 flex flex-col flex-grow justify-between bg-[#151311]">
        <div>
          {/* Clean Unboxed Metadata (Zero-Pill Rule) */}
          <div className="flex items-center gap-2 text-[11px] font-sans-luxe uppercase tracking-wider text-[#C6A15B] font-medium">
            <span>{product.karat} Solid Gold</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span>{product.weightGrams}g</span>
          </div>

          <h3 className="font-display text-base font-semibold text-[#F7F3EA] group-hover:text-[#C6A15B] transition-colors mt-1.5 line-clamp-1">
            {product.title}
          </h3>

          <p className="text-[11px] font-serif-luxe italic text-[#A69C8E] line-clamp-1 mt-0.5">
            {product.hausaTitle}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-[#C6A15B]/15 flex items-center justify-between">
          <span className="font-mono text-sm font-bold text-[#E5D5B8] tabular-nums">
            {formattedPrice}
          </span>
          <span className="text-[10px] font-sans-luxe uppercase tracking-wider text-[#A89E90]">
            In Stock
          </span>
        </div>
      </div>
    </div>
  );
};
