/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  SULTANI_PRODUCTS,
  ProductItem,
  CLIENT_TESTIMONIALS,
  SULTANI_PACKAGING_PATH,
  SULTANI_RING_PATH,
  SULTANI_RING_PACK_PATH,
  BRAND_ASSETS
} from './data/brandData.ts';
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
import { GoldGuideModal } from './components/GoldGuideModal.tsx';
import { Footer } from './components/Footer.tsx';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
  Star,
  MessageCircle,
  Heart,
  Calendar,
  Gift,
  Clock,
  CheckCircle2
} from 'lucide-react';

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
  const [isGoldGuideOpen, setIsGoldGuideOpen] = useState(false);
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
        {/* VIEW 1: HOME LANDING PAGE */}
        {currentPage === 'home' && (
          <div className="space-y-0">
            {/* 1. HERO SECTION */}
            <Hero
              onExploreCollections={() => navigateTo('shop')}
              onBookViewing={() => navigateTo('contact')}
              onSelectProduct={(id) => {
                const prod = SULTANI_PRODUCTS.find((p) => p.id === id);
                if (prod) setSelectedProduct(prod);
              }}
            />

            {/* 2. BRAND INTRODUCTION */}
            <section className="py-20 lg:py-28 px-4 lg:px-8 max-w-4xl mx-auto text-center space-y-6">
              <span className="text-xs font-sans-luxe uppercase tracking-[0.28em] text-[#C6A15B] font-semibold block">
                Brand Introduction
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F7F3EA] tracking-tight">
                More Than an Accessory
              </h2>
              <div className="w-12 h-px bg-[#C6A15B]/50 mx-auto" />
              <div className="font-serif-luxe text-lg sm:text-xl text-[#D8CEBF] space-y-5 leading-relaxed italic max-w-3xl mx-auto">
                <p>
                  Gold has always marked the moments that matter. At Sultani Gold, we present each piece with the care it deserves, bringing together regal elegance, quiet confidence and lasting value.
                </p>
                <p>
                  Whether you are choosing something for yourself or for someone you love, we are here to make the experience as memorable as the jewellery.
                </p>
              </div>
            </section>

            {/* 3. COLLECTIONS */}
            <FeaturedCollections
              onSelectCategory={(cat) => navigateTo('shop', cat)}
              onExploreAll={() => navigateTo('shop')}
            />

            {/* 4. WHY SULTANI GOLD */}
            <section className="bg-[#151310] py-20 lg:py-24 px-4 lg:px-8 border-y border-[#C6A15B]/20">
              <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center space-y-3 max-w-2xl mx-auto">
                  <span className="text-xs font-sans-luxe uppercase tracking-[0.28em] text-[#C6A15B] font-semibold">
                    Why Sultani Gold
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F7F3EA]">
                    Considered in Every Detail
                  </h2>
                  <p className="font-serif-luxe text-base text-[#C4B7A5] italic">
                    A timeless philosophy guiding how we create, present, and stand behind every creation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Pillar 1: Elegance */}
                  <div className="p-6 rounded-lg bg-[#191714] border border-[#C6A15B]/20 space-y-3 hover:border-[#C6A15B]/60 transition-colors">
                    <span className="text-[10px] font-sans-luxe uppercase tracking-widest text-[#C6A15B] font-semibold block">
                      01 · Distinction
                    </span>
                    <h3 className="font-display text-lg font-semibold text-[#F7F3EA]">
                      Elegance
                    </h3>
                    <p className="font-sans-luxe text-xs text-[#B8AE9F] leading-relaxed">
                      Quiet confidence in every piece, never loud.
                    </p>
                  </div>

                  {/* Pillar 2: Trust */}
                  <div className="p-6 rounded-lg bg-[#191714] border border-[#C6A15B]/20 space-y-3 hover:border-[#C6A15B]/60 transition-colors">
                    <span className="text-[10px] font-sans-luxe uppercase tracking-widest text-[#C6A15B] font-semibold block">
                      02 · Transparency
                    </span>
                    <h3 className="font-display text-lg font-semibold text-[#F7F3EA]">
                      Trust
                    </h3>
                    <p className="font-sans-luxe text-xs text-[#B8AE9F] leading-relaxed">
                      Clear information on materials, weight, pricing, care and delivery.
                    </p>
                  </div>

                  {/* Pillar 3: Heritage */}
                  <div className="p-6 rounded-lg bg-[#191714] border border-[#C6A15B]/20 space-y-3 hover:border-[#C6A15B]/60 transition-colors">
                    <span className="text-[10px] font-sans-luxe uppercase tracking-widest text-[#C6A15B] font-semibold block">
                      03 · Provenance
                    </span>
                    <h3 className="font-display text-lg font-semibold text-[#F7F3EA]">
                      Heritage
                    </h3>
                    <p className="font-sans-luxe text-xs text-[#B8AE9F] leading-relaxed">
                      A subtle nod to regal and cultural richness.
                    </p>
                  </div>

                  {/* Pillar 4: Quality */}
                  <div className="p-6 rounded-lg bg-[#191714] border border-[#C6A15B]/20 space-y-3 hover:border-[#C6A15B]/60 transition-colors">
                    <span className="text-[10px] font-sans-luxe uppercase tracking-widest text-[#C6A15B] font-semibold block">
                      04 · Standards
                    </span>
                    <h3 className="font-display text-lg font-semibold text-[#F7F3EA]">
                      Quality
                    </h3>
                    <p className="font-sans-luxe text-xs text-[#B8AE9F] leading-relaxed">
                      Careful presentation and attention to craft.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. OCCASIONS */}
            <section className="py-20 lg:py-24 px-4 lg:px-8 max-w-7xl mx-auto space-y-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-3 max-w-2xl">
                  <span className="text-xs font-sans-luxe uppercase tracking-[0.28em] text-[#C6A15B] font-semibold">
                    Occasions
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F7F3EA]">
                    Made for Moments Worth Keeping
                  </h2>
                  <p className="font-serif-luxe text-base text-[#D1C7B7] italic leading-relaxed">
                    Some pieces do more than complete a look. They become part of your story: the wedding day, the first anniversary, the gift that says what words cannot.
                  </p>
                </div>

                <button
                  onClick={() => navigateTo('shop')}
                  className="px-6 py-3.5 bg-[#C6A15B] hover:bg-[#B38D46] text-[#11100E] font-sans-luxe font-semibold text-xs tracking-wider uppercase rounded-sm transition-colors cursor-pointer self-start md:self-auto shrink-0 shadow-md"
                >
                  Shop by Occasion
                </button>
              </div>

              {/* 4 Occasion Showcase Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Occasion 1: The Wedding Day */}
                <div
                  onClick={() => navigateTo('shop', 'Bridal')}
                  className="group p-5 rounded-lg bg-[#161411] border border-[#C6A15B]/20 hover:border-[#C6A15B]/70 transition-all cursor-pointer flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-full bg-[#201D18] flex items-center justify-center text-[#C6A15B]">
                      <Heart className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-[#F7F3EA] group-hover:text-[#C6A15B] transition-colors">
                      The Wedding Day
                    </h3>
                    <p className="text-xs font-sans-luxe text-[#A89E90] leading-relaxed">
                      Dignified bridal collars, chandelier drops, and ceremonial parures that honor marital covenants and family blessings.
                    </p>
                  </div>
                  <span className="text-[11px] font-sans-luxe uppercase tracking-wider text-[#C6A15B] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Explore Bridal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Occasion 2: The First Anniversary */}
                <div
                  onClick={() => navigateTo('shop', 'Fine Jewellery')}
                  className="group p-5 rounded-lg bg-[#161411] border border-[#C6A15B]/20 hover:border-[#C6A15B]/70 transition-all cursor-pointer flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-full bg-[#201D18] flex items-center justify-center text-[#C6A15B]">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-[#F7F3EA] group-hover:text-[#C6A15B] transition-colors">
                      The First Anniversary
                    </h3>
                    <p className="text-xs font-sans-luxe text-[#A89E90] leading-relaxed">
                      Solid 18K sovereign emerald signets and tailored gold bands celebrating shared growth, endurance and devotion.
                    </p>
                  </div>
                  <span className="text-[11px] font-sans-luxe uppercase tracking-wider text-[#C6A15B] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Explore Rings</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Occasion 3: Gifts Worth Giving */}
                <div
                  onClick={() => navigateTo('shop', 'Fine Jewellery')}
                  className="group p-5 rounded-lg bg-[#161411] border border-[#C6A15B]/20 hover:border-[#C6A15B]/70 transition-all cursor-pointer flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-full bg-[#201D18] flex items-center justify-center text-[#C6A15B]">
                      <Gift className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-[#F7F3EA] group-hover:text-[#C6A15B] transition-colors">
                      Gifts Worth Giving
                    </h3>
                    <p className="text-xs font-sans-luxe text-[#A89E90] leading-relaxed">
                      Thoughtful choices for birthdays, milestones and sincere thank-yous, presented ready to delight from the first glance.
                    </p>
                  </div>
                  <span className="text-[11px] font-sans-luxe uppercase tracking-wider text-[#C6A15B] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Explore Gifts</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Occasion 4: Everyday Style */}
                <div
                  onClick={() => navigateTo('shop', 'Everyday Luxury')}
                  className="group p-5 rounded-lg bg-[#161411] border border-[#C6A15B]/20 hover:border-[#C6A15B]/70 transition-all cursor-pointer flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-full bg-[#201D18] flex items-center justify-center text-[#C6A15B]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-[#F7F3EA] group-hover:text-[#C6A15B] transition-colors">
                      Everyday Style
                    </h3>
                    <p className="text-xs font-sans-luxe text-[#A89E90] leading-relaxed">
                      Fluid torc bangles, filigree dome rings and radiant earrings designed to move naturally from business to evening ease.
                    </p>
                  </div>
                  <span className="text-[11px] font-sans-luxe uppercase tracking-wider text-[#C6A15B] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Explore Everyday</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </section>

            {/* FEATURED PRODUCT SHOWCASE CAROUSEL */}
            <section className="py-12 lg:py-16 px-4 lg:px-8 max-w-7xl mx-auto space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-sans-luxe uppercase tracking-[0.25em] text-[#C6A15B] font-semibold">
                    Featured Designs
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl text-[#F7F3EA] font-semibold">
                    Pieces Ready for Acquisition
                  </h3>
                </div>
                <button
                  onClick={() => navigateTo('shop')}
                  className="text-xs font-sans-luxe uppercase tracking-[0.16em] text-[#C6A15B] hover:text-[#F7F3EA] font-semibold flex items-center gap-1.5 cursor-pointer pb-1"
                >
                  <span>View All Pieces</span>
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

            {/* 6. UNBOXING EXPERIENCE */}
            <section className="bg-[#14120F] py-20 lg:py-24 px-4 lg:px-8 border-y border-[#C6A15B]/20">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className="lg:col-span-5 space-y-5">
                  <span className="text-xs font-sans-luxe uppercase tracking-[0.28em] text-[#C6A15B] font-semibold block">
                    Unboxing Experience
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F7F3EA] leading-tight">
                    Presented Like the Occasion It Is
                  </h2>
                  <p className="font-serif-luxe text-base text-[#D8CEBF] italic leading-relaxed">
                    Every Sultani Gold piece arrives in a signature black jewellery box with gold detailing, carried home in our deep teal bag. From the moment it is handed over, it feels like a gift.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => navigateTo('shop')}
                      className="px-6 py-3 bg-[#C6A15B] hover:bg-[#B38D46] text-[#11100E] font-sans-luxe font-semibold text-xs tracking-wider uppercase rounded-sm transition-colors cursor-pointer shadow-md"
                    >
                      Explore The Pieces
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Signature Box */}
                  <div className="rounded-lg overflow-hidden border border-[#C6A15B]/30 bg-[#0A0A08] shadow-xl group">
                    <div className="aspect-4/3 overflow-hidden">
                      <img
                        src={SULTANI_RING_PACK_PATH}
                        alt="Signature Black Jewellery Box with Gold Detailing"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-3.5 bg-[#171512] border-t border-[#C6A15B]/20 text-center">
                      <span className="text-xs font-sans-luxe uppercase tracking-wider text-[#C6A15B] font-semibold block">
                        Signature Black Box
                      </span>
                      <span className="text-[11px] text-[#A89E90]">
                        Plush velvet cushion with gold detailing
                      </span>
                    </div>
                  </div>

                  {/* Deep Teal Bag */}
                  <div className="rounded-lg overflow-hidden border border-[#C6A15B]/30 bg-[#0A0A08] shadow-xl group">
                    <div className="aspect-4/3 overflow-hidden">
                      <img
                        src={SULTANI_PACKAGING_PATH}
                        alt="Deep Teal Sultani Gold Bag"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-3.5 bg-[#171512] border-t border-[#C6A15B]/20 text-center">
                      <span className="text-xs font-sans-luxe uppercase tracking-wider text-[#C6A15B] font-semibold block">
                        Deep Teal Carrier Bag
                      </span>
                      <span className="text-[11px] text-[#A89E90]">
                        Gold crowned monogram detailing
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. BUYING GUIDANCE */}
            <section className="py-20 lg:py-24 px-4 lg:px-8 max-w-4xl mx-auto text-center space-y-6">
              <span className="text-xs font-sans-luxe uppercase tracking-[0.28em] text-[#C6A15B] font-semibold block">
                Buying Guidance
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F7F3EA]">
                Buy with Confidence
              </h2>
              <div className="w-12 h-px bg-[#C6A15B]/50 mx-auto" />
              <p className="font-serif-luxe text-base sm:text-lg text-[#D1C7B7] max-w-2xl mx-auto leading-relaxed italic">
                New to buying gold jewellery? We are happy to explain karat, care and sizing, so you can choose with clarity and peace of mind.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => setIsGoldGuideOpen(true)}
                  className="px-7 py-3.5 bg-[#C6A15B] hover:bg-[#B38D46] text-[#11100E] font-sans-luxe font-semibold text-xs tracking-wider uppercase rounded-sm transition-colors cursor-pointer shadow-md"
                >
                  Read Our Gold Guide
                </button>
                <a
                  href="https://wa.me/2349087858264?text=Hello%20Sultani%20Gold%2C%20I%20would%20like%20guidance%20on%20choosing%20the%20right%20gold%20piece."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#0D3B2E]/80 hover:bg-[#0D3B2E] text-emerald-100 border border-emerald-500/40 font-sans-luxe font-medium text-xs tracking-wider uppercase rounded-sm transition-colors cursor-pointer flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Ask on WhatsApp</span>
                </a>
              </div>
            </section>

            {/* 8. TESTIMONIALS */}
            <section className="bg-[#151310] py-20 lg:py-24 px-4 lg:px-8 border-y border-[#C6A15B]/20">
              <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center space-y-2 max-w-xl mx-auto">
                  <span className="text-xs font-sans-luxe uppercase tracking-[0.28em] text-[#C6A15B] font-semibold">
                    Testimonials
                  </span>
                  <h2 className="font-display text-3xl font-semibold text-[#F7F3EA]">
                    Words from Our Customers
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {CLIENT_TESTIMONIALS.map((t) => (
                    <div
                      key={t.id}
                      className="p-6 rounded-lg bg-[#191714] border border-[#C6A15B]/25 flex flex-col justify-between space-y-5 shadow-sm"
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
                        <span className="font-display text-sm font-semibold text-[#F7F3EA] block">
                          {t.name}
                        </span>
                        <span className="text-[11px] font-sans-luxe text-[#A89E90] block">
                          {t.location}
                        </span>
                        <span className="text-[10px] font-mono text-[#C6A15B] block mt-1">
                          Piece: {t.piece}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 9. FINAL CALL TO ACTION */}
            <section className="py-20 lg:py-28 px-4 lg:px-8 max-w-5xl mx-auto text-center space-y-6">
              <span className="text-xs font-sans-luxe uppercase tracking-[0.28em] text-[#C6A15B] font-semibold block">
                Sultani Gold
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F7F3EA] tracking-tight">
                Your Moments. Your Legacy. Your Gold.
              </h2>
              <p className="font-serif-luxe text-base sm:text-lg text-[#D1C7B7] max-w-2xl mx-auto leading-relaxed italic">
                Send us a message for product details, pricing and availability. We would love to help you find the right piece.
              </p>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://wa.me/2349087858264?text=Hello%20Sultani%20Gold%2C%20I%20would%20like%20to%20enquire%20about%20product%20details%2C%20pricing%20and%20availability."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 bg-[#0D3B2E] hover:bg-[#114b3b] text-emerald-100 border border-emerald-500/40 font-sans-luxe font-semibold text-xs tracking-wider uppercase rounded-sm transition-colors flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Message Us</span>
                </a>
                <button
                  onClick={() => navigateTo('shop')}
                  className="px-8 py-3.5 bg-[#C6A15B] hover:bg-[#B38D46] text-[#11100E] font-sans-luxe font-semibold text-xs tracking-wider uppercase rounded-sm transition-colors cursor-pointer shadow-md"
                >
                  Browse the Collection
                </button>
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

      <GoldGuideModal
        isOpen={isGoldGuideOpen}
        onClose={() => setIsGoldGuideOpen(false)}
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

      {/* 10. COMPREHENSIVE LUXURY FOOTER */}
      <Footer
        onNavigate={(p) => navigateTo(p)}
        onOpenPolicy={(pol) => setActivePolicy(pol)}
        onOpenGoldGuide={() => setIsGoldGuideOpen(true)}
      />
    </div>
  );
}
