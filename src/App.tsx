/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SULTANI_PRODUCTS, ProductItem, CLIENT_TESTIMONIALS, SULTANI_PACKAGING_PATH, SULTANI_RING_PATH } from './data/brandData.ts';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { FeaturedCollections } from './components/FeaturedCollections.tsx';
import { ProductCard } from './components/ProductCard.tsx';
import { ProductDetailModal } from './components/ProductDetailModal.tsx';
import { ShopCatalog } from './components/ShopCatalog.tsx';
import { AboutView } from './components/AboutView.tsx';
import { CraftsmanshipView } from './components/CraftsmanshipView.tsx';
import { ContactView } from './components/ContactView.tsx';
import { CartDrawer } from './components/CartDrawer.tsx';
import { CheckoutModal } from './components/CheckoutModal.tsx';
import { GoldCalculatorModal } from './components/GoldCalculatorModal.tsx';
import { QuickSearchModal } from './components/QuickSearchModal.tsx';
import { PolicyModals } from './components/PolicyModals.tsx';
import { Footer } from './components/Footer.tsx';
import { ArrowRight, ShieldCheck, Truck, Award, Sparkles, Star } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'shop' | 'about' | 'craftsmanship' | 'contact'>('home');
  const [currency, setCurrency] = useState<'NGN' | 'USD'>('NGN');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [cartItems, setCartItems] = useState<{ product: ProductItem; quantity: number }[]>(() => {
    try {
      const saved = localStorage.getItem('sultani_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [activePolicy, setActivePolicy] = useState<'authenticity' | 'shipping' | 'returns' | null>(null);
  const [shopCategory, setShopCategory] = useState<string>('All');

  // Persist cart to local storage
  useEffect(() => {
    try {
      localStorage.setItem('sultani_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  // Scroll to top when page changes
  const navigateTo = (page: 'home' | 'shop' | 'about' | 'craftsmanship' | 'contact', category: string = 'All') => {
    setCurrentPage(page);
    setShopCategory(category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (product: ProductItem, quantity: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as { product: ProductItem; quantity: number }[]
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleOrderSuccess = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#11100E] text-[#F7F3EA] font-sans-luxe flex flex-col selection:bg-[#C6A15B]/30 selection:text-white">
      {/* Primary Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={(p) => navigateTo(p)}
        currency={currency}
        setCurrency={setCurrency}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* VIEW 1: HOME ATELIER */}
        {currentPage === 'home' && (
          <div className="space-y-0">
            {/* Cinematic Hero */}
            <Hero
              onExploreCollections={() => navigateTo('shop')}
              onBookViewing={() => navigateTo('contact')}
              onSelectProduct={(id) => {
                const prod = SULTANI_PRODUCTS.find((p) => p.id === id);
                if (prod) setSelectedProduct(prod);
              }}
            />

            {/* 4 Sovereign Collections Grid */}
            <FeaturedCollections
              onSelectCategory={(cat) => navigateTo('shop', cat)}
              onExploreAll={() => navigateTo('shop')}
            />

            {/* Featured Masterpieces Carousel / Grid */}
            <section className="py-16 lg:py-24 px-4 lg:px-8 max-w-7xl mx-auto space-y-10">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="space-y-2">
                  <span className="text-xs font-sans-luxe uppercase tracking-[0.25em] text-[#C6A15B] font-semibold">
                    The Sovereign Showcase
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl text-[#F7F3EA] font-semibold tracking-tight">
                    Featured Masterpieces
                  </h2>
                  <p className="font-serif-luxe text-base text-[#C4B7A5] italic">
                    Hand-forged fine gold creations currently available for acquisition or private viewing.
                  </p>
                </div>
                <button
                  onClick={() => navigateTo('shop')}
                  className="text-xs font-sans-luxe uppercase tracking-[0.16em] text-[#C6A15B] hover:text-[#F7F3EA] font-semibold flex items-center gap-1.5 cursor-pointer pb-1"
                >
                  <span>View All 8 Masterpieces</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {SULTANI_PRODUCTS.slice(0, 4).map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    currency={currency}
                    onQuickView={(p) => setSelectedProduct(p)}
                    onAddToCart={(p) => handleAddToCart(p, 1)}
                  />
                ))}
              </div>
            </section>

            {/* Brand Story Editorial Split Section */}
            <section className="bg-[#161411] py-16 lg:py-24 px-4 lg:px-8 border-y border-[#C6A15B]/20">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <span className="text-xs font-sans-luxe uppercase tracking-[0.25em] text-[#C6A15B] font-semibold block">
                    Centuries of Courtly Dignity
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F7F3EA] leading-tight">
                    Where Royal Hausa Heritage Meets Modern Fine Jewelry
                  </h2>
                  <div className="font-sans-luxe text-sm text-[#D1C7B7] space-y-4 leading-relaxed">
                    <p>
                      For more than five centuries, the royal courts of Kano, Katsina, and the Sokoto Caliphate were celebrated across the Islamic world for peerless gold metallurgy. Master goldsmiths of the <em>Makera</em> guild held pride of place, handcrafting ceremonial regalia for royal coronation banquets and majestic Durbar festivals.
                    </p>
                    <p>
                      <strong>SULTANI GOLD</strong> was founded to preserve and elevate this sovereign standard. Every signet ring, bridal parure, and investment bar is created with verified metallurgical assay, honoring our ancestors while setting a new international benchmark for contemporary African luxury.
                    </p>
                  </div>

                  <div className="pt-2 flex items-center gap-6">
                    <button
                      onClick={() => navigateTo('about')}
                      className="px-6 py-3 bg-[#C6A15B] hover:bg-[#B38D46] text-[#11100E] font-sans-luxe font-semibold text-xs tracking-wider uppercase rounded transition-colors cursor-pointer"
                    >
                      Read Our Full Story
                    </button>
                    <button
                      onClick={() => navigateTo('craftsmanship')}
                      className="text-xs font-sans-luxe tracking-wider uppercase text-[#E5D5B8] hover:text-white underline underline-offset-4 cursor-pointer"
                    >
                      Explore The Metallurgy
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="rounded overflow-hidden border border-[#C6A15B]/30 bg-black aspect-3/4">
                      <img
                        src={SULTANI_RING_PATH}
                        alt="18K Sultani Emerald Signet Ring"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3 bg-[#11100E] rounded border border-[#C6A15B]/20 text-center">
                      <span className="text-[11px] font-sans-luxe text-[#C6A15B] font-medium block">
                        The Sovereign Signet
                      </span>
                      <span className="text-[10px] text-stone-400">18K Solid Gold & Emerald</span>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6">
                    <div className="rounded overflow-hidden border border-[#C6A15B]/30 bg-black aspect-3/4">
                      <img
                        src={SULTANI_PACKAGING_PATH}
                        alt="Sultani Gold Custom Luxury Packaging"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3 bg-[#11100E] rounded border border-[#C6A15B]/20 text-center">
                      <span className="text-[11px] font-sans-luxe text-[#C6A15B] font-medium block">
                        Palace Packaging Suite
                      </span>
                      <span className="text-[10px] text-stone-400">Deep Emerald & Gold Foil</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Client Testimonials Strip */}
            <section className="py-16 lg:py-24 px-4 lg:px-8 max-w-7xl mx-auto space-y-10">
              <div className="text-center space-y-2 max-w-xl mx-auto">
                <span className="text-xs font-sans-luxe uppercase tracking-[0.25em] text-[#C6A15B] font-semibold">
                  Patron Reflections
                </span>
                <h2 className="font-display text-3xl font-semibold text-[#F7F3EA]">
                  Trusted by Noble Families & Collectors
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {CLIENT_TESTIMONIALS.map((t) => (
                  <div
                    key={t.id}
                    className="p-6 rounded-lg bg-[#161411] border border-[#C6A15B]/25 flex flex-col justify-between space-y-4 shadow-sm"
                  >
                    <div className="space-y-3">
                      <div className="flex gap-1 text-[#C6A15B]">
                        {[...Array(5)].map((_, idx) => (
                          <Star key={idx} className="w-3.5 h-3.5 fill-[#C6A15B]" />
                        ))}
                      </div>
                      <p className="font-serif-luxe text-sm text-[#D8CEBF] italic leading-relaxed">
                        "{t.quote}"
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#C6A15B]/15">
                      <span className="font-display text-xs font-semibold text-[#F7F3EA] block">
                        {t.name}
                      </span>
                      <span className="text-[10px] font-sans-luxe text-[#A89E90] block">
                        {t.role} · {t.location}
                      </span>
                      <span className="text-[10px] font-mono text-[#C6A15B] block mt-1">
                        Commission: {t.piece}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* VIEW 2: SHOP / CATALOG */}
        {currentPage === 'shop' && (
          <ShopCatalog
            currency={currency}
            initialCategory={shopCategory}
            onQuickView={(p) => setSelectedProduct(p)}
            onAddToCart={(p) => handleAddToCart(p, 1)}
            onOpenCalculator={() => setIsCalculatorOpen(true)}
          />
        )}

        {/* VIEW 3: ROYAL HERITAGE STORY */}
        {currentPage === 'about' && (
          <AboutView
            onExploreCollections={() => navigateTo('shop')}
            onBookViewing={() => navigateTo('contact')}
          />
        )}

        {/* VIEW 4: CRAFTSMANSHIP & METALLURGY */}
        {currentPage === 'craftsmanship' && (
          <CraftsmanshipView
            onExploreCollections={() => navigateTo('shop')}
            onOpenCalculator={() => setIsCalculatorOpen(true)}
          />
        )}

        {/* VIEW 5: VIP CONCIERGE & APPOINTMENTS */}
        {currentPage === 'contact' && <ContactView />}
      </main>

      {/* Global Modals & Drawers */}
      <ProductDetailModal
        product={selectedProduct}
        currency={currency}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(p, qty) => {
          handleAddToCart(p, qty);
          setIsCartOpen(true);
        }}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        currency={currency}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        currency={currency}
        onOrderSuccess={handleOrderSuccess}
      />

      <GoldCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        currency={currency}
      />

      <QuickSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setSelectedProduct(p)}
        currency={currency}
      />

      <PolicyModals
        type={activePolicy}
        onClose={() => setActivePolicy(null)}
      />

      {/* Comprehensive Luxury Footer */}
      <Footer
        onNavigate={(p) => navigateTo(p)}
        onOpenPolicy={(pol) => setActivePolicy(pol)}
      />
    </div>
  );
}
