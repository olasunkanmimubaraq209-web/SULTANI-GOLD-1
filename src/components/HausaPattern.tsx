import React from 'react';

export const HausaReliefPattern: React.FC<{
  className?: string;
  opacity?: number;
  color?: string;
}> = ({ className = '', opacity = 0.08, color = '#D4AF37' }) => {
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle at 50% 50%, transparent 45%, ${color} 46%, transparent 48%),
                          linear-gradient(45deg, transparent 48%, ${color} 50%, transparent 52%),
                          linear-gradient(-45deg, transparent 48%, ${color} 50%, transparent 52%)`,
        backgroundSize: '36px 36px',
        opacity: opacity,
      }}
      aria-hidden="true"
    />
  );
};

export const HausaBorderFrame: React.FC<{
  children: React.ReactNode;
  className?: string;
  borderColor?: string;
}> = ({ children, className = '', borderColor = '#D4AF37' }) => {
  return (
    <div className={`relative p-6 border border-[#D4AF37]/30 bg-white/70 backdrop-blur-xs ${className}`}>
      {/* Corner Filigree Accents inspired by Hausa palace crenellations */}
      <div
        className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2"
        style={{ borderColor }}
      />
      <div
        className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2"
        style={{ borderColor }}
      />
      <div
        className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2"
        style={{ borderColor }}
      />
      <div
        className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2"
        style={{ borderColor }}
      />
      {children}
    </div>
  );
};
