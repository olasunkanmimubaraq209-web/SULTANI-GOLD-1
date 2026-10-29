import React, { useState } from 'react';
import { ProductItem } from '../data/brandData.ts';
import { X, ShieldCheck, CheckCircle2, Copy, Check, Lock, ArrowRight, MessageSquare } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: { product: ProductItem; quantity: number }[];
  currency: 'NGN' | 'USD';
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  currency,
  onOrderSuccess
}) => {
  if (!isOpen) return null;

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Abuja (Maitama / Asokoro)');
  const [address, setAddress] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState<'armored' | 'salon' | 'vault'>('armored');
  const [paymentMethod, setPaymentMethod] = useState<'wire' | 'card' | 'vault'>('wire');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderReference, setOrderReference] = useState('');
  const [copied, setCopied] = useState(false);

  const totalNGN = items.reduce((sum, item) => sum + (item.product.priceNGN * item.quantity), 0);
  const totalUSD = items.reduce((sum, item) => sum + (item.product.priceUSD * item.quantity), 0);

  const formattedTotal = currency === 'NGN'
    ? `₦${totalNGN.toLocaleString()}`
    : `$${totalUSD.toLocaleString()} USD`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    const ref = `SG-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderReference(ref);
    setOrderConfirmed(true);
    onOrderSuccess();
  };

  const copyRef = () => {
    navigator.clipboard.writeText(orderReference);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-fadeIn">
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-[#141210] border border-[#C6A15B]/40 rounded-lg shadow-2xl text-[#F7F3EA] p-6 sm:p-8"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-white bg-[#1E1B17] hover:bg-[#28241F] rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!orderConfirmed ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <span className="text-[10px] font-sans-luxe uppercase tracking-[0.25em] text-[#C6A15B] font-semibold block mb-1">
                Sovereign Acquisition Protocol
              </span>
              <h2 className="font-display text-2xl font-semibold text-[#F7F3EA]">
                Private Order & Courier Request
              </h2>
              <p className="font-serif-luxe text-xs text-[#A89E90] italic mt-1">
                Your acquisition is verified with individual metallurgical assay seals and dispatched via discreet armored courier.
              </p>
            </div>

            {/* Order Summary Strip */}
            <div className="p-4 rounded bg-[#1A1815] border border-[#C6A15B]/25 flex items-center justify-between">
              <div>
                <span className="text-xs text-[#A89E90] block">Items in Acquisition:</span>
                <span className="font-display text-sm text-[#F7F3EA] font-semibold">
                  {items.length} Piece{items.length === 1 ? '' : 's'} · Total Weight: {items.reduce((acc, i) => acc + (i.product.weightGrams * i.quantity), 0).toFixed(1)}g
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs text-[#A89E90] block">Total Valuation:</span>
                <span className="font-mono text-lg font-bold text-[#E5D5B8] tabular-nums">
                  {formattedTotal}
                </span>
              </div>
            </div>

            {/* Client Contact Details */}
            <div className="space-y-4">
              <h3 className="text-xs font-sans-luxe uppercase tracking-wider text-[#C6A15B] font-semibold">
                1. Client Identification
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#A89E90] mb-1">Full Name / Patron Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alhaji Mustapha / Hajiya Zainab"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded bg-[#171512] border border-[#C6A15B]/30 focus:border-[#C6A15B] text-xs font-sans-luxe text-[#F7F3EA] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#A89E90] mb-1">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+234 803 000 0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded bg-[#171512] border border-[#C6A15B]/30 focus:border-[#C6A15B] text-xs font-sans-luxe text-[#F7F3EA] focus:outline-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs text-[#A89E90] mb-1">Confidential Email Address</label>
                  <input
                    type="email"
                    placeholder="client@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded bg-[#171512] border border-[#C6A15B]/30 focus:border-[#C6A15B] text-xs font-sans-luxe text-[#F7F3EA] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Handover & Transit Method */}
            <div className="space-y-4">
              <h3 className="text-xs font-sans-luxe uppercase tracking-wider text-[#C6A15B] font-semibold">
                2. Handover & Courier Preference
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'armored', title: 'Armored Courier', desc: 'Direct to Private Residence' },
                  { id: 'salon', title: 'Private VIP Salon', desc: 'Maitama Suite, Abuja Handover' },
                  { id: 'vault', title: 'Vault Transfer', desc: 'Custody Handover in Kano' }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setDeliveryMethod(opt.id as any)}
                    className={`p-3 rounded text-left border transition-all cursor-pointer ${
                      deliveryMethod === opt.id
                        ? 'bg-[#25211B] border-[#C6A15B] text-white'
                        : 'bg-[#181613] border-[#C6A15B]/20 text-[#A89E90] hover:border-[#C6A15B]/50'
                    }`}
                  >
                    <span className="text-xs font-semibold block text-[#E5D5B8]">{opt.title}</span>
                    <span className="text-[10px] text-stone-400 block mt-0.5">{opt.desc}</span>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <label className="block text-xs text-[#A89E90] mb-1">City / Jurisdiction *</label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded bg-[#171512] border border-[#C6A15B]/30 focus:border-[#C6A15B] text-xs font-sans-luxe text-[#F7F3EA] focus:outline-none cursor-pointer"
                  >
                    <option value="Abuja (Maitama / Asokoro)">Abuja (Maitama / Asokoro / Wuse)</option>
                    <option value="Kano (Bompai / Old City)">Kano (Bompai / Old City Gate / Nassarawa)</option>
                    <option value="Lagos (Ikoyi / Victoria Island)">Lagos (Ikoyi / Victoria Island / Lekki)</option>
                    <option value="Port Harcourt (GRA)">Port Harcourt (GRA Phase 2)</option>
                    <option value="Kaduna / Katsina / Sokoto">Kaduna / Katsina / Sokoto</option>
                    <option value="International (Dubai / London / US)">International (Dubai / London / US)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-[#A89E90] mb-1">Private Address / Delivery Instructions</label>
                  <input
                    type="text"
                    placeholder="Private residence or secure office address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded bg-[#171512] border border-[#C6A15B]/30 focus:border-[#C6A15B] text-xs font-sans-luxe text-[#F7F3EA] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Payment Settlement Preference */}
            <div className="space-y-2">
              <h3 className="text-xs font-sans-luxe uppercase tracking-wider text-[#C6A15B] font-semibold">
                3. Preferred Settlement Method
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'wire', title: 'Direct Wire / NIBSS', desc: 'Official Corporate Vault Account' },
                  { id: 'card', title: 'Luxury Card Gateway', desc: 'Encrypted POS / Online' },
                  { id: 'vault', title: 'Bullion Clearing', desc: 'Vault Physical Settlement' }
                ].map((pm) => (
                  <button
                    key={pm.id}
                    type="button"
                    onClick={() => setPaymentMethod(pm.id as any)}
                    className={`p-2.5 rounded text-left border transition-all cursor-pointer ${
                      paymentMethod === pm.id
                        ? 'bg-[#25211B] border-[#C6A15B] text-white'
                        : 'bg-[#181613] border-[#C6A15B]/20 text-[#A89E90] hover:border-[#C6A15B]/50'
                    }`}
                  >
                    <span className="text-xs font-semibold block text-[#E5D5B8]">{pm.title}</span>
                    <span className="text-[9px] text-stone-400 block mt-0.5">{pm.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Special Instructions */}
            <div>
              <label className="block text-xs text-[#A89E90] mb-1">Special Atelier Notes (Ring Sizing / Wedding Date)</label>
              <textarea
                rows={2}
                placeholder="Mention ring size requirements or wedding timeline..."
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                className="w-full px-3.5 py-2 rounded bg-[#171512] border border-[#C6A15B]/30 focus:border-[#C6A15B] text-xs font-sans-luxe text-[#F7F3EA] focus:outline-none resize-none"
              />
            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 px-6 rounded bg-[#C6A15B] hover:bg-[#B38D46] text-[#11100E] font-sans-luxe font-semibold text-xs tracking-[0.18em] uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl"
              >
                <Lock className="w-4 h-4" />
                <span>Confirm Sovereign Order Request</span>
              </button>
              <p className="text-[11px] text-center text-[#9E9385] mt-2">
                A Sultani Gold Private Relationship Director will contact you within 30 minutes to verify assay documentation.
              </p>
            </div>
          </form>
        ) : (
          /* Order Confirmation View */
          <div className="py-8 text-center space-y-6 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#0D3B2E] border border-emerald-400/50 flex items-center justify-center mx-auto text-[#C6A15B]">
              <CheckCircle2 className="w-10 h-10 text-emerald-400" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-sans-luxe uppercase tracking-[0.25em] text-[#C6A15B] font-semibold">
                Sovereign Order Protocol Initiated
              </span>
              <h2 className="font-display text-3xl font-semibold text-[#F7F3EA]">
                Order Confirmed & Logged
              </h2>
              <p className="font-serif-luxe text-base text-[#D1C7B7] italic max-w-md mx-auto">
                Thank you, {fullName}. Your acquisition dossier has been assigned to the Sultani Gold Senior Concierge.
              </p>
            </div>

            {/* Reference Badge */}
            <div className="p-4 rounded-lg bg-[#181613] border border-[#C6A15B]/40 max-w-sm mx-auto flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#A89E90] block">Official Reference ID</span>
                <span className="font-mono text-lg font-bold text-[#E5D5B8]">{orderReference}</span>
              </div>
              <button
                onClick={copyRef}
                className="px-3 py-1.5 rounded bg-[#25211B] hover:bg-[#322c24] text-xs font-sans-luxe text-[#C6A15B] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy ID'}</span>
              </button>
            </div>

            <div className="p-4 rounded bg-[#161411] border border-[#C6A15B]/15 text-left text-xs text-[#A89E90] space-y-2 max-w-md mx-auto">
              <div className="flex items-center gap-2 text-[#E5D5B8] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#C6A15B]" />
                <span>Next Immediate Steps:</span>
              </div>
              <p>1. Our VIP Director will call or WhatsApp your phone ({phone}) to confirm delivery logistics and arrange insured armored transit.</p>
              <p>2. Physical assay certificates and gold-stamped luxury packaging suites are prepared in our vault.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={() => {
                  const text = encodeURIComponent(
                    `Salaam / Hello Sultani Gold Concierge. I just submitted Order ${orderReference} for ${fullName}. Please confirm receipt.`
                  );
                  window.open(`https://wa.me/2349087858264?text=${text}`, '_blank');
                }}
                className="py-3 px-6 rounded bg-[#0D3B2E] hover:bg-[#07241C] border border-emerald-500/40 text-xs font-sans-luxe font-medium text-emerald-200 tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#C6A15B]" />
                <span>Notify Concierge on WhatsApp</span>
              </button>

              <button
                onClick={onClose}
                className="py-3 px-6 rounded bg-[#C6A15B] hover:bg-[#B38D46] text-[#11100E] text-xs font-sans-luxe font-semibold tracking-wider uppercase transition-colors cursor-pointer"
              >
                Return To Atelier
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
