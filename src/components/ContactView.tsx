import React, { useState } from 'react';
import { BOUTIQUE_LOCATIONS } from '../data/brandData.ts';
import { MessageSquare, Phone, Mail, MapPin, Clock, Calendar, CheckCircle2, ShieldCheck, Copy, Check } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [boutique, setBoutique] = useState('Abuja (Capital VIP Suite)');
  const [service, setService] = useState('Bespoke Bridal Regalia Consultation');
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [appointmentId, setAppointmentId] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const id = `VIP-${Math.floor(10000 + Math.random() * 90000)}`;
    setAppointmentId(id);
    setBookingConfirmed(true);
  };

  const copyId = () => {
    navigator.clipboard.writeText(appointmentId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#11100E] text-[#F7F3EA] min-h-screen py-12 lg:py-20 px-4 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-sans-luxe uppercase tracking-[0.25em] text-[#C6A15B] font-semibold">
            Private Client Services
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-[#F7F3EA]">
            The Sultani VIP Concierge
          </h1>
          <p className="font-serif-luxe text-base sm:text-lg text-[#C8BFB2] italic">
            Schedule a private viewing in our diplomatic suites or request bespoke bullion allocation with total discretion.
          </p>
        </div>

        {/* 2-Column Split: Booking Form vs Atelier Locations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Interactive Booking Form */}
          <div className="lg:col-span-7 bg-[#161411] border border-[#C6A15B]/30 rounded-lg p-6 sm:p-8 shadow-xl">
            {!bookingConfirmed ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-[#C6A15B]/20 pb-4">
                  <h2 className="font-display text-xl font-semibold text-[#F7F3EA]">
                    Request Private Viewing or Commission
                  </h2>
                  <p className="font-sans-luxe text-xs text-[#9E9385] mt-1">
                    Please provide your contact details. A Senior Client Director will confirm suite availability.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#A89E90] mb-1">Your Full Name / Title *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alhaji Sanusi / Dr. Fatima"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded bg-[#11100E] border border-[#C6A15B]/30 focus:border-[#C6A15B] text-xs font-sans-luxe text-[#F7F3EA] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#A89E90] mb-1">WhatsApp / Telephone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+234 803 000 0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded bg-[#11100E] border border-[#C6A15B]/30 focus:border-[#C6A15B] text-xs font-sans-luxe text-[#F7F3EA] focus:outline-none"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs text-[#A89E90] mb-1">Confidential Email Address</label>
                    <input
                      type="email"
                      placeholder="client@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded bg-[#11100E] border border-[#C6A15B]/30 focus:border-[#C6A15B] text-xs font-sans-luxe text-[#F7F3EA] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#A89E90] mb-1">Select Private Salon</label>
                    <select
                      value={boutique}
                      onChange={(e) => setBoutique(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded bg-[#11100E] border border-[#C6A15B]/30 focus:border-[#C6A15B] text-xs font-sans-luxe text-[#F7F3EA] focus:outline-none cursor-pointer"
                    >
                      <option value="Abuja (Capital VIP Suite)">Abuja (Maitama Diplomatic Suite)</option>
                      <option value="Kano (Heritage Atelier)">Kano (Bompai Archival Atelier)</option>
                      <option value="Virtual VIP Video Consultation">Virtual VIP Video Consultation</option>
                      <option value="Private Residence Armored Viewing">Private Residence Armored Viewing</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-[#A89E90] mb-1">Consultation Interest</label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded bg-[#11100E] border border-[#C6A15B]/30 focus:border-[#C6A15B] text-xs font-sans-luxe text-[#F7F3EA] focus:outline-none cursor-pointer"
                    >
                      <option value="Bespoke Bridal Regalia Consultation">Bespoke Bridal Regalia Consultation</option>
                      <option value="Sovereign Signet Ring Commission">Sovereign Signet Ring Commission</option>
                      <option value="Physical 24K Bullion Acquisition">Physical 24K Bullion Acquisition</option>
                      <option value="Family Heirloom Assay & Remounting">Family Heirloom Assay & Remounting</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#A89E90] mb-1">Preferred Viewing Date & Timing</label>
                  <input
                    type="text"
                    placeholder="e.g. Next Tuesday afternoon (2:00 PM)"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded bg-[#11100E] border border-[#C6A15B]/30 focus:border-[#C6A15B] text-xs font-sans-luxe text-[#F7F3EA] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#A89E90] mb-1">Specific Requirements / Security Protocol</label>
                  <textarea
                    rows={3}
                    placeholder="Provide any specific preferences, wedding date, or ring sizing inquiries..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2 rounded bg-[#11100E] border border-[#C6A15B]/30 focus:border-[#C6A15B] text-xs font-sans-luxe text-[#F7F3EA] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded bg-[#C6A15B] hover:bg-[#B38D46] text-[#11100E] font-sans-luxe font-semibold text-xs tracking-[0.18em] uppercase transition-all duration-200 cursor-pointer shadow-lg"
                >
                  Submit Private Appointment Request
                </button>
              </form>
            ) : (
              <div className="py-8 text-center space-y-6 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <div className="space-y-1">
                  <h3 className="font-display text-2xl font-semibold text-[#F7F3EA]">
                    Appointment Request Received
                  </h3>
                  <p className="font-serif-luxe text-sm text-[#D1C7B7] italic">
                    Our Maitama Senior Relationship Director will contact you at {phone} within two hours.
                  </p>
                </div>

                <div className="p-4 rounded bg-[#11100E] border border-[#C6A15B]/30 max-w-xs mx-auto flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase text-[#A89E90] block">VIP Pass ID</span>
                    <span className="font-mono text-base font-bold text-[#E5D5B8]">{appointmentId}</span>
                  </div>
                  <button
                    onClick={copyId}
                    className="px-2.5 py-1 rounded bg-[#221F1A] text-xs text-[#C6A15B] flex items-center gap-1 cursor-pointer"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <button
                    onClick={() => {
                      const text = encodeURIComponent(
                        `Salaam / Hello Sultani Gold Concierge. I just submitted VIP Appointment ${appointmentId} for ${name} at ${boutique}. Please confirm suite scheduling.`
                      );
                      window.open(`https://wa.me/2349087858264?text=${text}`, '_blank');
                    }}
                    className="py-2.5 px-5 rounded bg-[#0D3B2E] text-xs font-sans-luxe text-emerald-200 uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-[#C6A15B]" />
                    <span>WhatsApp Direct Line</span>
                  </button>
                  <button
                    onClick={() => setBookingConfirmed(false)}
                    className="py-2.5 px-5 rounded bg-[#221F1A] text-xs font-sans-luxe text-[#C4B7A5] uppercase tracking-wider cursor-pointer"
                  >
                    New Request
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Physical Boutique Salons */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-1">
              <span className="text-xs font-sans-luxe uppercase tracking-widest text-[#C6A15B] font-semibold">
                Physical Salons & Ateliers
              </span>
              <h3 className="font-display text-xl font-semibold text-[#F7F3EA]">
                Our Viewing Suites
              </h3>
            </div>

            {BOUTIQUE_LOCATIONS.map((loc) => (
              <div
                key={loc.city}
                className="p-5 rounded-lg bg-[#161411] border border-[#C6A15B]/25 space-y-3"
              >
                <div className="flex items-start justify-between">
                  <h4 className="font-display text-base font-semibold text-[#F7F3EA]">
                    {loc.city}
                  </h4>
                  <span className="text-[10px] font-sans-luxe uppercase tracking-wider text-[#C6A15B] bg-[#221F1A] px-2 py-0.5 rounded border border-[#C6A15B]/30">
                    {loc.type}
                  </span>
                </div>

                <div className="space-y-2 text-xs font-sans-luxe text-[#C4B7A5]">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                    <span>{loc.hours}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#C6A15B] shrink-0" />
                    <span className="font-mono">{loc.phone}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#C6A15B] shrink-0" />
                    <span>{loc.email}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#C6A15B]/15 flex flex-wrap gap-1.5">
                  {loc.services.map((srv) => (
                    <span
                      key={srv}
                      className="text-[10px] font-sans-luxe text-[#9E9385] bg-[#11100E] px-2 py-0.5 rounded"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
