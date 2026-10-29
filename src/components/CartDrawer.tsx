import React from 'react';
import { ProductItem } from '../data/brandData.ts';
import { X, Trash2, ArrowRight, ShieldCheck, ShoppingBag } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: { product: ProductItem; quantity: number }[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onProceedToCheckout: () => void;
  currency: 'NGN' | 'USD';
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  currency
}) => {
  if (!isOpen) return null;

  const totalNGN = items.reduce((sum, item) => sum + (item.product.priceNGN * item.quantity), 0);
  const totalUSD = items.reduce((sum, item) => sum + (item.product.priceUSD * item.quantity), 0);

  const formattedTotal = currency === 'NGN'
    ? `₦${totalNGN.toLocaleString()}`
    : `$${totalUSD.toLocaleString()} USD`;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-xs animate-fadeIn">
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md h-full bg-[#141210] border-l border-[#C6A15B]/40 text-[#F7F3EA] shadow-2xl flex flex-col justify-between"
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#C6A15B]/20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#C6A15B]" />
            <div>
              <h2 className="font-display text-lg font-semibold text-[#F7F3EA]">
                Acquisition Bag
              </h2>
              <span className="text-[10px] font-sans-luxe uppercase tracking-wider text-[#A89E90]">
                {items.length} Sovereign Creation{items.length === 1 ? '' : 's'}
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

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <ShoppingBag className="w-12 h-12 text-[#C6A15B]/40 mx-auto" />
              <p className="font-display text-base text-[#F7F3EA]">Your Bag is Currently Empty</p>
              <p className="text-xs text-[#9E9385] max-w-xs mx-auto">
                Explore our fine collections of royal bridal parures, 18K signet rings, and 24K bullion bars.
              </p>
            </div>
          ) : (
            items.map(({ product, quantity }) => {
              const itemTotal = currency === 'NGN'
                ? `₦${(product.priceNGN * quantity).toLocaleString()}`
                : `$${(product.priceUSD * quantity).toLocaleString()} USD`;

              return (
                <div
                  key={product.id}
                  className="p-3.5 rounded bg-[#181613] border border-[#C6A15B]/20 flex gap-3.5 items-start justify-between"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-16 h-16 rounded object-cover border border-[#C6A15B]/30 shrink-0"
                  />
                  <div className="flex-1 min-w-0 pr-2">
                    <span className="text-[10px] font-sans-luxe uppercase tracking-wider text-[#C6A15B] font-semibold block">
                      {product.karat} · {product.weightGrams}g
                    </span>
                    <h4 className="font-display text-sm font-semibold text-[#F7F3EA] truncate">
                      {product.title}
                    </h4>
                    <span className="font-mono text-xs font-bold text-[#E5D5B8] block mt-1 tabular-nums">
                      {itemTotal}
                    </span>

                    {/* Quantity Stepper */}
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-[#C6A15B]/25 rounded bg-[#11100E] text-xs">
                        <button
                          onClick={() => onUpdateQuantity(product.id, -1)}
                          className="px-2 py-0.5 hover:text-[#C6A15B] transition-colors cursor-pointer"
                        >
                          -
                        </button>
                        <span className="px-2 font-mono font-semibold">{quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(product.id, 1)}
                          className="px-2 py-0.5 hover:text-[#C6A15B] transition-colors cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => onRemoveItem(product.id)}
                        className="text-stone-500 hover:text-rose-400 p-1 cursor-pointer transition-colors"
                        title="Remove piece"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Drawer Footer & Checkout Action */}
        {items.length > 0 && (
          <div className="p-5 border-t border-[#C6A15B]/20 bg-[#161411] space-y-3">
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs text-[#A89E90]">
                <span>Armored Courier & Insurance:</span>
                <span className="text-[#C6A15B] font-medium uppercase text-[11px] tracking-wider">
                  Complimentary
                </span>
              </div>
              <div className="flex justify-between items-baseline pt-1 border-t border-[#C6A15B]/10">
                <span className="text-sm font-sans-luxe uppercase tracking-wider text-[#F7F3EA] font-semibold">
                  Total Valuation:
                </span>
                <span className="font-mono text-xl font-bold text-[#E5D5B8] tabular-nums">
                  {formattedTotal}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onProceedToCheckout}
                className="w-full py-3.5 px-6 rounded bg-[#C6A15B] hover:bg-[#B38D46] text-[#11100E] font-sans-luxe font-semibold text-xs tracking-[0.16em] uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Proceed To Order Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[10px] text-[#A89E90] pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>Assayed & Hallmarked · Armored White-Glove Handover</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
