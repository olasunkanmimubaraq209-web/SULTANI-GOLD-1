import React from 'react';
import { BRAND_ASSETS, SULTANI_LOGO_PATH, SULTANI_PACKAGING_PATH, SULTANI_RING_PATH } from '../data/brandData.ts';
import { ArrowRight, Shield, Award, Landmark, Crown } from 'lucide-react';

interface AboutViewProps {
  onExploreCollections: () => void;
  onBookViewing: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onExploreCollections,
  onBookViewing
}) => {
  return (
    <div className="bg-[#11100E] text-[#F7F3EA] min-h-screen py-12 lg:py-20 px-4 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-16 lg:space-y-24">
        {/* Editorial Title Banner */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-sans-luxe uppercase tracking-[0.28em] text-[#C6A15B] font-semibold">
            <Crown className="w-3.5 h-3.5" />
            <span>The Royal Heritage of SULTANI GOLD</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#F7F3EA] leading-tight">
            Forged in the Splendor of Kings
          </h1>
          <p className="font-serif-luxe text-lg sm:text-xl text-[#D8CEBF] italic max-w-2xl mx-auto leading-relaxed">
            "A legacy is not merely remembered; it is cast in pure gold and passed unbroken from one sovereign generation to the next."
          </p>
        </div>

        {/* Section 1: The Meaning of Sultani */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="md:col-span-6 space-y-5">
            <span className="text-xs font-sans-luxe uppercase tracking-widest text-[#C6A15B] font-semibold block">
              01. The Etymology of Majesty
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F7F3EA]">
              Why We Are Named SULTANI GOLD
            </h2>
            <div className="font-sans-luxe text-sm text-[#D1C7B7] space-y-4 leading-relaxed">
              <p>
                Derived from the historic royal title and Islamic Sahelian honorific <em>"Sultani"</em> (pertaining to the Sultan and the sovereign court), the name embodies courtly legitimacy, uncompromised honor, and peerless purity.
              </p>
              <p>
                Historically across the ancient trans-Saharan trade corridors that converged on Kano and the Sokoto Caliphate, a <em>"Sultani"</em> was also the prestigious gold dinar coin—minted with peerless chemical purity and accepted as universal sovereign currency from Timbuktu to Cairo and Constantinople.
              </p>
              <p>
                By joining this imperial designation with the global standard of <strong>Gold</strong>, our maison reclaims Africa's aristocratic gold heritage for the contemporary connoisseur.
              </p>
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="p-4 rounded-lg bg-gradient-to-br from-[#1C1A16] to-[#12110F] border border-[#C6A15B]/40 shadow-xl flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-lg bg-[#221F1A] p-3 border border-[#C6A15B]/30 flex items-center justify-center mb-4">
                <img
                  src={SULTANI_LOGO_PATH}
                  alt="Sultani Gold Crowned Emblem"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain filter drop-shadow-md"
                />
              </div>
              <h3 className="font-display text-lg font-bold text-[#F7F3EA] uppercase tracking-wider">
                The Crowned Monogram
              </h3>
              <p className="text-xs font-sans-luxe text-[#A89E90] mt-1 max-w-sm">
                The interlaced 'S' and 'G' surmounted by the triple-pointed coronet symbolizes the convergence of sovereign authority, sacred metallurgy, and eternal honor.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Northern Nigerian Royal Metallurgy */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="md:col-span-6 order-2 md:order-1">
            <div className="rounded-lg overflow-hidden border border-[#C6A15B]/30 bg-[#0A0A08] shadow-2xl">
              <img
                src={BRAND_ASSETS.heroNecklace}
                alt="22K Royal Hausa Filigree Gold Necklace"
                referrerPolicy="no-referrer"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-6 order-1 md:order-2 space-y-5">
            <span className="text-xs font-sans-luxe uppercase tracking-widest text-[#C6A15B] font-semibold block">
              02. Generational Lineage
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F7F3EA]">
              The Sacred Guild of the Makera
            </h2>
            <div className="font-sans-luxe text-sm text-[#D1C7B7] space-y-4 leading-relaxed">
              <p>
                In the historic quarters of Kano, Zaria, and Sokoto, master goldsmiths known as the <em>Makera</em> have tended ancestral kilns for over five hundred years. Their hereditary guild forged ceremonial coronation swords, royal bridle regalia for the majestic Durbar festivals, and sacred bridal dowry sets.
              </p>
              <p>
                Unlike mass-stamped commercial jewellery, each creation at Sultani Gold is sculpted by fourth- and fifth-generation hands using hand-drawn wire filigree, celestial granulation, and individual torch soldering.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: The Sovereign Unboxing & Presentation */}
        <div className="p-8 sm:p-12 rounded-lg bg-[#181613] border border-[#C6A15B]/30 space-y-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-sans-luxe uppercase tracking-widest text-[#C6A15B] font-semibold block">
              03. The Unboxing Ritual
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F7F3EA]">
              Every Detail Worthy of a Palace
            </h2>
            <p className="font-sans-luxe text-sm text-[#D1C7B7] leading-relaxed">
              From our custom deep-forest and gold-foil shopping suites to presentation suspension caskets and wax-sealed metallurgical assay dossiers, the Sultani Gold acquisition experience stands alongside the greatest high-jewellery maisons of Paris, London, and Geneva.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="rounded overflow-hidden border border-[#C6A15B]/30 bg-black">
              <img
                src={SULTANI_PACKAGING_PATH}
                alt="Sultani Gold Official Packaging Bags"
                className="w-full h-64 object-cover"
              />
              <div className="p-3 bg-[#1B1916] text-[11px] font-sans-luxe text-[#C6A15B] text-center font-medium">
                Official Sultani Gold Packaging Bags Suite
              </div>
            </div>

            <div className="rounded overflow-hidden border border-[#C6A15B]/30 bg-black">
              <img
                src={SULTANI_RING_PATH}
                alt="Sultani Sovereign Emerald Ring"
                className="w-full h-64 object-cover"
              />
              <div className="p-3 bg-[#1B1916] text-[11px] font-sans-luxe text-[#C6A15B] text-center font-medium">
                Sovereign Emerald Signet Ring in Custom Display Case
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center pt-8 space-y-4">
          <h3 className="font-display text-2xl font-semibold text-[#F7F3EA]">
            Experience The Atelier In Person
          </h3>
          <p className="font-serif-luxe text-sm text-[#A89E90] italic max-w-lg mx-auto">
            We welcome private clients, royal families, and bullion collectors to our VIP viewing suites in Abuja and Kano by advance appointment.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onExploreCollections}
              className="px-6 py-3 bg-[#C6A15B] hover:bg-[#B38D46] text-[#11100E] font-sans-luxe font-semibold text-xs tracking-wider uppercase rounded transition-colors cursor-pointer"
            >
              Explore Fine Collections
            </button>
            <button
              onClick={onBookViewing}
              className="px-6 py-3 bg-[#1A1815] hover:bg-[#25211B] text-[#E5D5B8] border border-[#C6A15B]/40 hover:border-[#C6A15B] font-sans-luxe font-medium text-xs tracking-wider uppercase rounded transition-colors cursor-pointer"
            >
              Request Private Viewing Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
