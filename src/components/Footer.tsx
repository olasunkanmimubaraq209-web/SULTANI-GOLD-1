import React, { useState } from 'react';
import { SULTANI_LOGO_PATH } from '../data/brandData.ts';
import { ShieldCheck, Lock, Check } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'shop' | 'about' | 'craftsmanship' | 'contact') => void;
  onOpenPolicy: (type: 'authenticity' | 'shipping' | 'returns') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPolicy }) => {
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
          {/* Col 1: Brand Anchor */}
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
                <span className="font-sans-luxe text-[9px] tracking-[0.26em] uppercase text-[#C6A15B] mt-0.5 block">
                  The Sovereign Standard
                </span>
              </div>
            </div>

            <p className="font-serif-luxe text-sm text-[#A89E90] italic leading-relaxed max-w-sm">
              Rooted in Northern Nigerian royal court heritage, hand-forged by generational Makera goldsmiths, and certified with peerless metallurgical assay standards.
            </p>

            <div className="flex items-center gap-4 text-xs font-sans-luxe text-[#C6A15B] pt-1">
              <span>Abuja</span>
              <span aria-hidden="true" className="text-stone-700">·</span>
              <span>Kano</span>
              <span aria-hidden="true" className="text-stone-700">·</span>
              <span>Lagos</span>
              <span aria-hidden="true" className="text-stone-700">·</span>
              <span>Dubai Liaison</span>
            </div>
          </div>

          {/* Col 2: The Collections */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-sans-luxe uppercase tracking-[0.2em] text-[#C6A15B] font-semibold block">
              The Collections
            </span>
            <ul className="space-y-2 text-xs font-sans-luxe text-[#B8AE9F]">
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  className="hover:text-[#F7F3EA] transition-colors cursor-pointer text-left"
                >
                  Royal Bridal Regalia (21K & 22K)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  className="hover:text-[#F7F3EA] transition-colors cursor-pointer text-left"
                >
                  Imperial Signets & Emerald Rings
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  className="hover:text-[#F7F3EA] transition-colors cursor-pointer text-left"
                >
                  Minted 24K (999.9) Investment Bullion
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  className="hover:text-[#F7F3EA] transition-colors cursor-pointer text-left"
                >
                  Everyday Sahelian Gold Torcs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('craftsmanship')}
                  className="hover:text-[#F7F3EA] transition-colors cursor-pointer text-left text-[#C6A15B]"
                >
                  The Makera Guild Story
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Client Care & Assurances */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-sans-luxe uppercase tracking-[0.2em] text-[#C6A15B] font-semibold block">
              Assurances
            </span>
            <ul className="space-y-2 text-xs font-sans-luxe text-[#B8AE9F]">
              <li>
                <button
                  onClick={() => onOpenPolicy('authenticity')}
                  className="hover:text-[#F7F3EA] transition-colors cursor-pointer text-left"
                >
                  Assay & Authenticity
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('shipping')}
                  className="hover:text-[#F7F3EA] transition-colors cursor-pointer text-left"
                >
                  Armored Courier Transit
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('returns')}
                  className="hover:text-[#F7F3EA] transition-colors cursor-pointer text-left"
                >
                  Lifetime Buyback Covenant
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#F7F3EA] transition-colors cursor-pointer text-left"
                >
                  VIP Viewing Booking
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Private Client Gazette Newsletter */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-sans-luxe uppercase tracking-[0.2em] text-[#C6A15B] font-semibold block">
              Private Client Salon
            </span>
            <p className="text-xs font-sans-luxe text-[#9E9385] leading-relaxed">
              Receive confidential dispatches on limited-edition minted ingot releases, royal bridal parures, and private viewings.
            </p>

            {isSubscribed ? (
              <div className="p-3 rounded bg-[#161411] border border-emerald-500/40 text-xs text-emerald-300 flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>You have been inscribed into the Sultani Private Salon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex">
                  <input
                    type="email"
                    required
                    placeholder="Enter confidential email..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-l bg-[#161411] border border-[#C6A15B]/30 focus:border-[#C6A15B] text-xs font-sans-luxe text-[#F7F3EA] placeholder-stone-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 bg-[#C6A15B] hover:bg-[#B38D46] text-[#11100E] text-xs font-sans-luxe font-semibold uppercase tracking-wider rounded-r transition-colors cursor-pointer shrink-0"
                  >
                    Join
                  </button>
                </div>
                <span className="text-[10px] text-stone-500 block">
                  Strict privacy protocol. Unsubscribe at any time.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Hallmarking Disclosures */}
        <div className="pt-8 border-t border-[#C6A15B]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-sans-luxe text-[#7A7266]">
          <div>
            © {new Date().getFullYear()} SULTANI GOLD MAISON D'OR. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>Certified Hausa Guild Metallurgy</span>
            </span>
            <span aria-hidden="true">·</span>
            <span>LBMA Grade Bullion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
