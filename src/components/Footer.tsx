import React, { useState } from 'react';
import { SULTANI_LOGO_PATH } from '../data/brandData.ts';
import { ShieldCheck, Phone, Mail, MessageCircle, Instagram, Clock, MapPin, Check } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'shop' | 'about' | 'craftsmanship' | 'contact') => void;
  onOpenPolicy: (type: 'authenticity' | 'shipping' | 'returns') => void;
  onOpenGoldGuide?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPolicy,
  onOpenGoldGuide
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setIsSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-[#0C0B0A] text-[#F7F3EA] border-t border-[#C6A15B]/20 pt-16 pb-12 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand Anchor & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#1B1815] p-1 border border-[#C6A15B]/40 flex items-center justify-center">
                <img
                  src={SULTANI_LOGO_PATH}
                  alt="SULTANI GOLD"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-display text-lg font-bold tracking-[0.2em] text-[#F7F3EA] uppercase block leading-none">
                  SULTANI GOLD
                </span>
                <span className="font-sans-luxe text-[10px] tracking-[0.2em] uppercase text-[#C6A15B] mt-0.5 block font-medium">
                  Regal Elegance. Lasting Value.
                </span>
              </div>
            </div>

            <p className="font-serif-luxe text-sm text-[#A89E90] italic leading-relaxed max-w-sm">
              Gold jewellery crafted for the moments worth keeping: weddings, celebrations, gifts and everyday style.
            </p>

            {/* Address & Hours */}
            <div className="space-y-1.5 text-xs font-sans-luxe text-[#B8AE9F] pt-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C6A15B] shrink-0 mt-0.5" />
                <span>Maitama Diplomatic Quarter, Abuja & Victoria Island, Lagos</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                <span>Mon – Sat: 10:00 AM – 7:00 PM</span>
              </div>
            </div>
          </div>

          {/* Col 2: The Collections */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-sans-luxe uppercase tracking-[0.2em] text-[#C6A15B] font-semibold block">
              Collections
            </span>
            <ul className="space-y-2 text-xs font-sans-luxe text-[#B8AE9F]">
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  className="hover:text-[#F7F3EA] transition-colors cursor-pointer text-left"
                >
                  Everyday Elegance
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  className="hover:text-[#F7F3EA] transition-colors cursor-pointer text-left"
                >
                  Bridal & Celebration
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  className="hover:text-[#F7F3EA] transition-colors cursor-pointer text-left"
                >
                  Gifts Worth Giving
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  className="hover:text-[#F7F3EA] transition-colors cursor-pointer text-left"
                >
                  New Arrivals
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  className="hover:text-[#F7F3EA] transition-colors cursor-pointer text-left text-[#C6A15B]"
                >
                  View All Collections
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links & Guidance */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-sans-luxe uppercase tracking-[0.2em] text-[#C6A15B] font-semibold block">
              Links
            </span>
            <ul className="space-y-2 text-xs font-sans-luxe text-[#B8AE9F]">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#F7F3EA] transition-colors cursor-pointer text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  className="hover:text-[#F7F3EA] transition-colors cursor-pointer text-left"
                >
                  Collections
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenGoldGuide}
                  className="hover:text-[#F7F3EA] transition-colors cursor-pointer text-left text-[#C6A15B] font-medium"
                >
                  Gold Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#F7F3EA] transition-colors cursor-pointer text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('shipping')}
                  className="hover:text-[#F7F3EA] transition-colors cursor-pointer text-left"
                >
                  Delivery & Care
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Contact & Concierge */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-sans-luxe uppercase tracking-[0.2em] text-[#C6A15B] font-semibold block">
              Contact Us
            </span>
            <ul className="space-y-2 text-xs font-sans-luxe text-[#B8AE9F]">
              <li>
                <a
                  href="tel:+2349087858264"
                  className="hover:text-[#F7F3EA] transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>+234 (0) 908 785 8264</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:concierge@sultanigold.com"
                  className="hover:text-[#F7F3EA] transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>concierge@sultanigold.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2349087858264?text=Hello%20Sultani%20Gold%2C%20I%20would%20like%20to%20enquire%20about%20your%20jewellery%20collection."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-2 text-emerald-300"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp: +234 908 785 8264</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/sultanigold"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F7F3EA] transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>Instagram: @sultanigold</span>
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-2 px-3 bg-[#1B1815] hover:bg-[#23201C] border border-[#C6A15B]/30 hover:border-[#C6A15B] text-[11px] font-sans-luxe uppercase tracking-wider text-[#E5D5B8] rounded transition-colors text-center cursor-pointer"
              >
                Book Private Viewing
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Hallmarking Disclosures */}
        <div className="pt-8 border-t border-[#C6A15B]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-sans-luxe text-[#7A7266]">
          <div>
            © Sultani Gold. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>Certified Hallmark & Purity Assurance</span>
            </span>
            <span aria-hidden="true">·</span>
            <span>Regal Elegance. Lasting Value.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
