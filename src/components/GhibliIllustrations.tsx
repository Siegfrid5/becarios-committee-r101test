import React from 'react';

export const RedRibbon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 32 }) => (
  <svg
    width={size}
    height={size * 0.75}
    viewBox="0 0 48 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block drop-shadow-sm ${className}`}
  >
    {/* Left Loop */}
    <path
      d="M24 16 C18 6, 6 8, 4 18 C2 26, 12 28, 20 20 Z"
      fill="#C9402A"
      stroke="#9A2B18"
      strokeWidth="1.5"
    />
    {/* Right Loop */}
    <path
      d="M24 16 C30 6, 42 8, 44 18 C46 26, 36 28, 28 20 Z"
      fill="#C9402A"
      stroke="#9A2B18"
      strokeWidth="1.5"
    />
    {/* Left Ribbon Tail */}
    <path
      d="M21 21 C18 28, 12 32, 8 34 C12 30, 16 28, 21 21 Z"
      fill="#AB301B"
    />
    {/* Right Ribbon Tail */}
    <path
      d="M27 21 C30 28, 36 32, 40 34 C36 30, 32 28, 27 21 Z"
      fill="#AB301B"
    />
    {/* Center Knot */}
    <ellipse cx="24" cy="18" rx="4.5" ry="4" fill="#E25841" stroke="#9A2B18" strokeWidth="1.5" />
  </svg>
);

export const JijiCat: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    {/* Cat Ears */}
    <polygon points="20,18 26,4 32,18" fill="#1A2938" stroke="#0F1822" strokeWidth="1.5" />
    <polygon points="23,17 26,8 30,17" fill="#C9402A" opacity="0.7" />
    <polygon points="32,18 38,4 44,18" fill="#1A2938" stroke="#0F1822" strokeWidth="1.5" />
    <polygon points="34,17 38,8 41,17" fill="#C9402A" opacity="0.7" />

    {/* Head */}
    <ellipse cx="32" cy="24" rx="14" ry="12" fill="#1A2938" stroke="#0F1822" strokeWidth="1.5" />

    {/* Big expressive Jiji Eyes */}
    <ellipse cx="27" cy="23" rx="4.5" ry="5.5" fill="#FFFDF9" />
    <ellipse cx="37" cy="23" rx="4.5" ry="5.5" fill="#FFFDF9" />
    {/* Pupils */}
    <ellipse cx="27.5" cy="23" rx="2.5" ry="4" fill="#1A2938" />
    <ellipse cx="37.5" cy="23" rx="2.5" ry="4" fill="#1A2938" />
    {/* Catchlights */}
    <circle cx="26.5" cy="21.5" r="1.2" fill="#FFFFFF" />
    <circle cx="36.5" cy="21.5" r="1.2" fill="#FFFFFF" />

    {/* Little pink nose */}
    <polygon points="31,27 33,27 32,28.5" fill="#E25841" />

    {/* Red Collar */}
    <rect x="25" y="34" width="14" height="3" rx="1.5" fill="#C9402A" />

    {/* Body */}
    <path
      d="M24 37 C20 44, 20 54, 23 58 C26 60, 38 60, 41 58 C44 54, 44 44, 40 37 Z"
      fill="#1A2938"
      stroke="#0F1822"
      strokeWidth="1.5"
    />

    {/* Paws */}
    <ellipse cx="28" cy="58" rx="3.5" ry="2" fill="#2C4156" />
    <ellipse cx="36" cy="58" rx="3.5" ry="2" fill="#2C4156" />

    {/* Tail */}
    <path
      d="M40 54 C46 54, 52 48, 50 40 C48 36, 45 38, 47 43 C48 46, 45 50, 38 52"
      stroke="#1A2938"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
  </svg>
);

export const KikiFlying: React.FC<{ className?: string; width?: number; height?: number }> = ({
  className = '',
  width = 120,
  height = 70,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 120 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    {/* Broom Handle */}
    <path d="M12 52 L110 24" stroke="#8C6D58" strokeWidth="4.5" strokeLinecap="round" />

    {/* Broom Bristles (Straw Tail) */}
    <path
      d="M8 53 C2 57, 4 64, 14 62 C22 60, 26 50, 28 48 L14 44 Z"
      fill="#DF9B35"
      stroke="#8C6D58"
      strokeWidth="1.5"
    />
    <path d="M12 48 L22 55" stroke="#AB7120" strokeWidth="1" />
    <path d="M10 54 L24 57" stroke="#AB7120" strokeWidth="1" />
    <path d="M14 60 L26 52" stroke="#AB7120" strokeWidth="1" />

    {/* Delivery Bag hanging on broom */}
    <rect x="36" y="44" width="16" height="14" rx="2" fill="#D98A4B" stroke="#9E4E1C" strokeWidth="1.5" />
    <line x1="36" y1="49" x2="52" y2="49" stroke="#9E4E1C" strokeWidth="1.5" />
    <path d="M44 40 L44 44" stroke="#7A3B12" strokeWidth="1.5" />

    {/* Kiki's Black Witch Dress */}
    <path
      d="M58 24 C54 30, 48 38, 46 44 C56 46, 72 44, 76 38 C74 32, 70 26, 66 22 Z"
      fill="#1A2938"
      stroke="#0F1822"
      strokeWidth="1.5"
    />

    {/* Kiki's Head / Hair */}
    <circle cx="70" cy="18" r="8" fill="#3D291D" />
    <ellipse cx="72" cy="19" rx="4" ry="4" fill="#FCEBD5" />

    {/* Kiki's Big Red Bow */}
    <g transform="translate(62, 5) scale(0.65)">
      {/* Left Wing */}
      <path d="M14 10 C8 2, -2 4, 0 14 C2 20, 10 18, 14 12 Z" fill="#C9402A" stroke="#9A2B18" strokeWidth="1.5" />
      {/* Right Wing */}
      <path d="M14 10 C20 2, 30 4, 28 14 C26 20, 18 18, 14 12 Z" fill="#C9402A" stroke="#9A2B18" strokeWidth="1.5" />
      {/* Center Knot */}
      <ellipse cx="14" cy="11" rx="3" ry="3" fill="#E25841" />
    </g>

    {/* Jiji peeking from delivery bag */}
    <ellipse cx="50" cy="40" rx="3.5" ry="3.5" fill="#1A2938" />
    <polygon points="48,37 49,33 51,37" fill="#1A2938" />
    <polygon points="51,37 53,33 54,37" fill="#1A2938" />
    <circle cx="49" cy="40" r="0.8" fill="#FFFDF9" />
    <circle cx="52" cy="40" r="0.8" fill="#FFFDF9" />

    {/* Wind / flight speed lines */}
    <path d="M88 18 C96 16, 104 18, 114 16" stroke="#DF9B35" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" />
    <path d="M96 28 C104 28, 110 30, 118 29" stroke="#E8DCB8" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const DeliveryParcel: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 36 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    {/* Parcel box */}
    <rect x="6" y="10" width="36" height="30" rx="3" fill="#F4E8D1" stroke="#8C6D58" strokeWidth="2" />
    {/* Twine vertical */}
    <line x1="24" y1="10" x2="24" y2="40" stroke="#C9402A" strokeWidth="2" />
    {/* Twine horizontal */}
    <line x1="6" y1="25" x2="42" y2="25" stroke="#C9402A" strokeWidth="2" />
    {/* Wax Seal Center */}
    <circle cx="24" cy="25" r="5" fill="#C9402A" stroke="#9A2B18" strokeWidth="1.5" />
    <circle cx="24" cy="25" r="2.5" fill="#E25841" />
    {/* Vintage Postage Stamp top right */}
    <rect x="30" y="13" width="8" height="9" fill="#FFFDF9" stroke="#DF9B35" strokeWidth="1" strokeDasharray="1 1" />
    <circle cx="34" cy="17" r="2" fill="#DF9B35" />
  </svg>
);

export const BakerySign: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ghibli-gold-light border border-ghibli-gold/40 text-ghibli-brown text-xs font-semibold tracking-wide uppercase shadow-sm ${className}`}>
    <span className="text-base">🥖</span>
    <span>Gütiokipänja Committee Service</span>
    <span className="text-base">🥐</span>
  </div>
);

export const FloatingCloud: React.FC<{ className?: string; width?: number; opacity?: number }> = ({
  className = '',
  width = 100,
  opacity = 0.5,
}) => (
  <svg
    width={width}
    height={width * 0.5}
    viewBox="0 0 100 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity }}
    className={`pointer-events-none select-none ${className}`}
  >
    <path
      d="M20 40 C10 40, 5 32, 12 25 C10 18, 20 10, 30 15 C36 8, 52 6, 60 14 C70 8, 85 12, 85 22 C94 24, 96 34, 88 40 Z"
      fill="#FFFFFF"
      stroke="#E8DCB8"
      strokeWidth="1"
    />
  </svg>
);
