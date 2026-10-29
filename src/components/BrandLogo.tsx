import React from 'react';
import { SULTANI_LOGO_PATH } from '../data/brandData.ts';

export interface LogoProps {
  variant?: 'primary' | 'horizontal' | 'symbol' | 'monogram' | 'engraving' | 'foil' | 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  brandName?: string;
  tagline?: string;
  className?: string;
}

export const HausaArchSymbol: React.FC<{
  size?: number;
  color?: string;
  accentColor?: string;
  isFoil?: boolean;
}> = ({ size = 64, color = 'currentColor', accentColor = '#D4AF37', isFoil = false }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-300"
    >
      <defs>
        {isFoil && (
          <linearGradient id="goldFoilGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F9E8B2" />
            <stop offset="30%" stopColor="#D4AF37" />
            <stop offset="60%" stopColor="#AA7F1D" />
            <stop offset="85%" stopColor="#F3DC96" />
            <stop offset="100%" stopColor="#C59B27" />
          </linearGradient>
        )}
      </defs>

      {/* Outer Traditional Northern Hausa Arch Portal */}
      <path
        d="M20 88V44C20 27.4315 33.4315 14 50 14C66.5685 14 80 27.4315 80 44V88"
        stroke={isFoil ? "url(#goldFoilGrad)" : color}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Stepped Inner Arch Profile (Gidan Rumfa Palace relief inspired) */}
      <path
        d="M28 88V46C28 33.8497 37.8497 24 50 24C62.1503 24 72 33.8497 72 46V88"
        stroke={isFoil ? "url(#goldFoilGrad)" : color}
        strokeWidth="1.8"
        strokeDasharray="4 2"
        strokeLinecap="round"
      />

      {/* Interlocking Central Diamond & Eternal Knot (Daurin Gwarmai) */}
      <path
        d="M50 32L66 50L50 68L34 50Z"
        stroke={isFoil ? "url(#goldFoilGrad)" : accentColor}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Internal Geometric Filigree / Monogram 'Z' Lattice */}
      <path
        d="M40 44H60L40 56H60"
        stroke={isFoil ? "url(#goldFoilGrad)" : color}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Sovereign Finial / Keystone Diamond on Apex */}
      <polygon
        points="50,7 54,12 50,17 46,12"
        fill={isFoil ? "url(#goldFoilGrad)" : accentColor}
      />

      {/* Foundation Base Plinth */}
      <path
        d="M14 88H86"
        stroke={isFoil ? "url(#goldFoilGrad)" : color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const BrandLogo: React.FC<LogoProps> = ({
  variant = 'primary',
  size = 'md',
  brandName = 'ZINARIYA',
  tagline = 'HAUTE JOAILLERIE & MAISON D\'OR',
  className = ''
}) => {
  const isDark = variant === 'dark';
  const isFoil = variant === 'foil';
  const isEngraving = variant === 'engraving';
  const isLight = variant === 'light';

  // Sizing map
  const symbolSizes = {
    sm: 36,
    md: 56,
    lg: 80,
    xl: 110
  };

  const currentSymbolSize = symbolSizes[size];

  // Base text color
  let textColor = isDark ? '#FBF9F5' : isFoil ? '#D4AF37' : '#121316';
  let subColor = isDark ? '#D4AF37' : isFoil ? '#ECD79C' : '#6A6864';
  let symbolColor = isDark ? '#D4AF37' : isFoil ? '#D4AF37' : '#0D3B2E';
  let accentColor = '#D4AF37';

  if (isLight) {
    textColor = '#FBF9F5';
    subColor = '#D4AF37';
    symbolColor = '#D4AF37';
    accentColor = '#FFFFFF';
  }

  if (variant === 'engraving') {
    return (
      <div className={`inline-flex items-center gap-2 border border-stone-400/40 px-3 py-1.5 rounded-sm bg-stone-100/80 font-mono text-[11px] uppercase tracking-widest text-stone-700 shadow-inner ${className}`}>
        <HausaArchSymbol size={18} color="#4A453E" accentColor="#4A453E" />
        <span className="font-semibold">{brandName}</span>
        <span className="text-stone-400">·</span>
        <span>916 · 22K</span>
        <span className="text-stone-400">·</span>
        <span className="text-[9px] text-stone-500">MINT ASSAY</span>
      </div>
    );
  }

  if (variant === 'monogram') {
    return (
      <div className={`inline-flex flex-col items-center ${className}`}>
        <div className="relative p-2 rounded-xl border border-[#D4AF37]/40 bg-white shadow-md">
          {brandName.includes('SULTANI') ? (
            <img
              src={SULTANI_LOGO_PATH}
              alt="Sultani Gold Monogram"
              referrerPolicy="no-referrer"
              className="object-contain"
              style={{ width: currentSymbolSize, height: currentSymbolSize }}
            />
          ) : (
            <HausaArchSymbol size={currentSymbolSize} color="#FBF9F5" accentColor="#D4AF37" isFoil={true} />
          )}
        </div>
      </div>
    );
  }

  if (variant === 'symbol') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {brandName.includes('SULTANI') ? (
          <img
            src={SULTANI_LOGO_PATH}
            alt="Sultani Gold Emblem"
            referrerPolicy="no-referrer"
            className="object-contain filter drop-shadow-xs"
            style={{ width: currentSymbolSize, height: currentSymbolSize }}
          />
        ) : (
          <HausaArchSymbol
            size={currentSymbolSize}
            color={symbolColor}
            accentColor={accentColor}
            isFoil={isFoil}
          />
        )}
      </div>
    );
  }

  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center gap-3.5 ${className}`}>
        {brandName.includes('SULTANI') ? (
          <img
            src={SULTANI_LOGO_PATH}
            alt="Sultani Gold Emblem"
            referrerPolicy="no-referrer"
            className="object-contain"
            style={{ width: Math.round(currentSymbolSize * 0.75), height: Math.round(currentSymbolSize * 0.75) }}
          />
        ) : (
          <HausaArchSymbol
            size={Math.round(currentSymbolSize * 0.75)}
            color={symbolColor}
            accentColor={accentColor}
            isFoil={isFoil}
          />
        )}
        <div className="flex flex-col">
          <span
            className="font-display font-medium tracking-[0.22em] uppercase leading-none"
            style={{ color: textColor, fontSize: size === 'sm' ? '1rem' : size === 'lg' ? '1.75rem' : '1.35rem' }}
          >
            {brandName}
          </span>
          <span
            className="font-sans-luxe text-[9px] tracking-[0.28em] uppercase mt-1 opacity-80"
            style={{ color: subColor }}
          >
            {tagline}
          </span>
        </div>
      </div>
    );
  }

  // Primary Vertical / Stacked Logo
  return (
    <div className={`inline-flex flex-col items-center text-center ${className}`}>
      {brandName.includes('SULTANI') ? (
        <div className="relative flex items-center justify-center" style={{ width: currentSymbolSize, height: currentSymbolSize }}>
          <img
            src={SULTANI_LOGO_PATH}
            alt="Sultani Gold Monogram"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain filter drop-shadow-xs"
          />
        </div>
      ) : (
        <HausaArchSymbol
          size={currentSymbolSize}
          color={symbolColor}
          accentColor={accentColor}
          isFoil={isFoil}
        />
      )}
      <div className="mt-3 flex flex-col items-center">
        <h1
          className="font-display font-medium tracking-[0.26em] uppercase leading-tight"
          style={{
            color: textColor,
            fontSize: size === 'sm' ? '1.15rem' : size === 'lg' ? '2.25rem' : size === 'xl' ? '3rem' : '1.65rem'
          }}
        >
          {brandName}
        </h1>
        <div className="flex items-center gap-2 mt-1.5 opacity-90">
          <span className="w-4 h-[1px] bg-[#D4AF37]/60" />
          <span
            className="font-sans-luxe text-[9.5px] tracking-[0.34em] uppercase font-medium"
            style={{ color: subColor }}
          >
            {tagline}
          </span>
          <span className="w-4 h-[1px] bg-[#D4AF37]/60" />
        </div>
      </div>
    </div>
  );
};
