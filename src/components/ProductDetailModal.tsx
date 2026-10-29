import React, { useState } from 'react';
import { ProductItem, SULTANI_PACKAGING_PATH } from '../data/brandData.ts';
import { X, ShoppingBag, ShieldCheck, Truck, Award, Check, MessageSquare } from 'lucide-react';

interface ProductDetailModalProps {
  product: ProductItem | null;
  currency: 'NGN' | 'USD';
  onClose: () => void;
  onAddToCart: (product: ProductItem, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  currency,
  onClose,
  onAddToCart
}) => {
  if (!product) return null;

  const galleryImages = [
    product.image,
    ...(product.secondaryImage ? [product.secondaryImage] : []),
    ...(product.packagingImage ? [product.packagingImage] : [SULTANI_PACKAGING_PATH])
  ].filter(Boolean);

  const [activeImage, setActiveImage] = useState<string>(galleryImages[0]);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedRingSize, setSelectedRingSize] = useState<string>('Size 7 (Standard)');
  const [isAdded, setIsAdded] = useState(false);

  const formattedPrice = currency === 'NGN'
    ? `₦${(product.priceNGN * quantity).toLocaleString()}`
    : `$${(product.priceUSD * quantity).toLocaleString()} USD`;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleWhatsAppEnquiry = () => {
    const text = encodeURIComponent(
      `Salaam / Hello Sultani Gold Concierge. I am inquiring about acquiring "${product.title}" (${product.karat}, ${product.weightGrams}g, Code: ${product.id}). Please advise on private viewing availability or armored courier delivery.`
    );
    window.open(`https://wa.me/2349087858264?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#141210] border border-[#C6A15B]/40 rounded-lg shadow-2xl text-[#F7F3EA]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-stone-400 hover:text-white bg-[#1E1B17] hover:bg-[#28241F] rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
          {/* Left Column: Gallery */}
          <div className="md:col-span-6 space-y-4">
            <div className="relative aspect-square w-full rounded-md overflow-hidden bg-[#0A0A08] border border-[#C6A15B]/30">
              <img
                src={activeImage}
                alt={product.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-300"
              />
            </div>

            {/* Thumbnail Switcher */}
            {galleryImages.length > 1 && (
              <div className="flex gap-2.5">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-16 h-16 rounded overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImage === img ? 'border-[#C6A15B] scale-102' : 'border-[#C6A15B]/20 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Cultural Narrative Callout */}
            <div className="p-4 rounded bg-[#1A1815] border border-[#C6A15B]/20">
              <span className="text-[10px] font-sans-luxe uppercase tracking-widest text-[#C6A15B] font-semibold block mb-1">
                Royal Provenance & Heritage
              </span>
              <p className="font-serif-luxe text-xs text-[#D1C7B7] italic leading-relaxed">
                "{product.culturalStory}"
              </p>
            </div>
          </div>

          {/* Right Column: Purchase Module & Specifications */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-5">
            <div>
              {/* Unboxed Metadata Header */}
              <div className="flex items-center gap-2 text-xs font-sans-luxe uppercase tracking-wider text-[#C6A15B] font-semibold">
                <span>{product.category}</span>
                <span aria-hidden="true" className="text-stone-600">·</span>
                <span>{product.karat} Solid Gold</span>
                <span aria-hidden="true" className="text-stone-600">·</span>
                <span>{product.purity}</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F7F3EA] mt-1.5 leading-tight">
                {product.title}
              </h2>

              <p className="font-serif-luxe text-sm italic text-[#C4B7A5] mt-1">
                {product.hausaTitle}
              </p>

              {/* Price Display */}
              <div className="mt-4 pb-4 border-b border-[#C6A15B]/20 flex items-baseline gap-3">
                <span className="font-mono text-2xl sm:text-3xl font-bold text-[#E5D5B8] tabular-nums">
                  {formattedPrice}
                </span>
                <span className="text-xs text-[#9E9385]">
                  (Complimentary Armored Transit Included)
                </span>
              </div>

              <p className="font-sans-luxe text-xs sm:text-sm text-[#D1C7B7] mt-4 leading-relaxed">
                {product.description}
              </p>

              {/* Technical Specifications Table */}
              <div className="mt-5 p-3.5 bg-[#171512] rounded border border-[#C6A15B]/20 space-y-2 text-xs font-sans-luxe">
                <div className="flex justify-between py-1 border-b border-[#C6A15B]/10">
                  <span className="text-[#A19688]">Karat & Purity</span>
                  <span className="font-medium text-[#F7F3EA]">{product.karat} ({product.purity})</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#C6A15B]/10">
                  <span className="text-[#A19688]">Certified Weight</span>
                  <span className="font-mono font-bold text-[#E5D5B8] tabular-nums">{product.weightGrams} Grams</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#C6A15B]/10">
                  <span className="text-[#A19688]">Hallmark Laser Assay</span>
                  <span className="font-mono text-[11px] text-[#C6A15B]">{product.hallmark}</span>
                </div>
                {product.dimensions && (
                  <div className="flex justify-between py-1 border-b border-[#C6A15B]/10">
                    <span className="text-[#A19688]">Dimensions</span>
                    <span className="text-[#F7F3EA]">{product.dimensions}</span>
                  </div>
                )}
                <div className="flex justify-between py-1">
                  <span className="text-[#A19688]">Packaging Suite</span>
                  <span className="text-[#C6A15B]">Custom Velvet Box & Sultani Bags</span>
                </div>
              </div>

              {/* Ring Size Selector if Ring category */}
              {product.category === 'Fine Jewellery' && product.title.toLowerCase().includes('ring') && (
                <div className="mt-4">
                  <label className="block text-[11px] font-sans-luxe uppercase tracking-wider text-[#A89E90] mb-1.5">
                    Select Ring Size (Complimentary Atelier Custom Resizing)
                  </label>
                  <div className="grid grid-cols-4 gap-2 text-xs font-mono">
                    {['Size 6', 'Size 7 (Standard)', 'Size 8', 'Size 9', 'Size 10', 'Size 11'].map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setSelectedRingSize(sz)}
                        className={`py-1.5 px-2 rounded border transition-colors cursor-pointer text-center ${
                          selectedRingSize === sz
                            ? 'bg-[#C6A15B] text-[#11100E] font-bold border-[#C6A15B]'
                            : 'bg-[#1E1B17] text-[#D1C7B7] border-[#C6A15B]/20 hover:border-[#C6A15B]/50'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Stepper */}
              <div className="mt-5 flex items-center gap-4">
                <span className="text-xs font-sans-luxe uppercase tracking-wider text-[#A89E90]">
                  Quantity
                </span>
                <div className="flex items-center border border-[#C6A15B]/30 rounded bg-[#1B1815]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 text-sm hover:text-[#C6A15B] transition-colors cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 font-mono text-sm font-semibold tabular-nums">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 text-sm hover:text-[#C6A15B] transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-4">
              <button
                onClick={handleAdd}
                className={`w-full py-3.5 px-6 rounded text-xs font-sans-luxe font-semibold tracking-[0.18em] uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                  isAdded
                    ? 'bg-[#0D3B2E] text-white border border-emerald-400'
                    : 'bg-[#C6A15B] hover:bg-[#B38D46] text-[#11100E]'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added To Acquisition Bag</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add To Acquisition Bag</span>
                  </>
                )}
              </button>

              <button
                onClick={handleWhatsAppEnquiry}
                className="w-full py-3 px-6 rounded bg-[#1E1B17] hover:bg-[#28241F] border border-[#C6A15B]/40 hover:border-[#C6A15B] text-xs font-sans-luxe font-medium tracking-wider uppercase text-[#E5D5B8] hover:text-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#C6A15B]" />
                <span>Enquire via VIP Concierge (WhatsApp)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
