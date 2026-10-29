import React from 'react';
import { X, ShieldCheck, Truck, RefreshCw, Award, Lock } from 'lucide-react';

interface PolicyModalProps {
  type: 'authenticity' | 'shipping' | 'returns' | null;
  onClose: () => void;
}

export const PolicyModals: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl bg-[#141210] border border-[#C6A15B]/40 rounded-lg shadow-2xl text-[#F7F3EA] p-6 sm:p-8 space-y-5"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-white rounded-full bg-[#1E1B17] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'authenticity' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#C6A15B]" />
              <h3 className="font-display text-xl font-semibold text-[#F7F3EA]">
                100% Certified Assay & Authenticity Guarantee
              </h3>
            </div>
            <div className="text-xs font-sans-luxe text-[#D1C7B7] space-y-3 leading-relaxed">
              <p>
                Every single piece of Sultani Gold bears official laser hallmarks certifying its precious metal fineness (750 for 18K, 875 for 21K, 916 for 22K, and 999.9 for 24K pure bullion).
              </p>
              <p>
                Our metallurgy is independently verified by accredited assayer laboratories using both non-destructive X-ray fluorescence spectrometry (XRF) and traditional fire assay. Each acquisition is delivered with an archival Certificate of Authenticity signed by our Master Metallurgist.
              </p>
              <p>
                We provide a lifetime legal guarantee on the gold content of all Sultani creations.
              </p>
            </div>
          </div>
        )}

        {type === 'shipping' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Truck className="w-6 h-6 text-[#C6A15B]" />
              <h3 className="font-display text-xl font-semibold text-[#F7F3EA]">
                Armored Courier & Insured Transit Protocol
              </h3>
            </div>
            <div className="text-xs font-sans-luxe text-[#D1C7B7] space-y-3 leading-relaxed">
              <p>
                <strong>Nigeria Nationwide Delivery:</strong> High-value shipments are dispatched via dedicated armored logistics services (G4S / Brink's partner escorts) directly to your private residence or bank vault in Abuja, Kano, Lagos, Port Harcourt, and major cities.
              </p>
              <p>
                <strong>Handover Protocol:</strong> The recipient must provide government-issued photographic identification matching the order dossier. Deliveries are made in unmarked, tamper-evident security bags.
              </p>
              <p>
                <strong>Worldwide Freight:</strong> International orders are dispatched via fully insured priority air cargo with dual-custody tracking.
              </p>
            </div>
          </div>
        )}

        {type === 'returns' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <RefreshCw className="w-6 h-6 text-[#C6A15B]" />
              <h3 className="font-display text-xl font-semibold text-[#F7F3EA]">
                Lifetime Buyback & Exchange Covenant
              </h3>
            </div>
            <div className="text-xs font-sans-luxe text-[#D1C7B7] space-y-3 leading-relaxed">
              <p>
                <strong>Lifetime Bullion Buyback:</strong> All Sultani 24K (999.9) investment bars and ingots in their original tamper-evident packaging are eligible for immediate repurchase at the prevailing spot market rate.
              </p>
              <p>
                <strong>Fine Jewellery Exchange:</strong> Unworn fine jewellery pieces in pristine condition may be exchanged or upgraded within 14 days of delivery.
              </p>
              <p>
                <strong>Complimentary Resizing:</strong> All Sultani rings and signets include complimentary lifetime sizing adjustments at our Abuja and Kano ateliers.
              </p>
            </div>
          </div>
        )}

        <div className="pt-2 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded bg-[#C6A15B] text-[#11100E] font-sans-luxe font-semibold text-xs uppercase tracking-wider cursor-pointer"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
