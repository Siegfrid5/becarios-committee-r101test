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
  width = 140,
  height = 98,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 -16 140 106"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    {/* Broom Bristles (Straw Tail - fully enclosing back, no stick protruding) */}
    <path
      d="M 25 66 C 16 63, 10 63, 4 67 C 2 73, 5 81, 12 82 C 18 82, 22 75, 26 71 Z"
      fill="#DF9B35"
      stroke="#8C6D58"
      strokeWidth="1.5"
    />
    <path d="M 23 68 L 7 70" stroke="#AB7120" strokeWidth="1" />
    <path d="M 24 69 L 8 76" stroke="#AB7120" strokeWidth="1" />
    <path d="M 24 70 L 13 80" stroke="#AB7120" strokeWidth="1" />

    {/* Broom Neck Binding (Twine Wrap) */}
    <rect x="23" y="65" width="4.5" height="7" rx="1" fill="#C9402A" transform="rotate(-12 23 65)" />

    {/* Broom Handle (Stick starts strictly at neck binding, NEVER protrudes at back) */}
    <path d="M 25 68 L 126 44" stroke="#8C6D58" strokeWidth="5.5" strokeLinecap="round" />

    {/* Delivery Parcel on broom behind rider */}
    <rect x="33" y="58" width="14" height="11" rx="2" fill="#F4E8D1" stroke="#8C6D58" strokeWidth="1.2" transform="rotate(-13 33 58)" />
    <line x1="33" y1="64" x2="47" y2="61" stroke="#C9402A" strokeWidth="1.2" />
    <circle cx="40" cy="62" r="2" fill="#C9402A" />

    {/* Far Arm (Left Arm) reaching forward to broom */}
    <path
      d="M 58 48 C 62 52, 68 54, 73 57 L 71 62 C 65 59, 59 56, 56 51 Z"
      fill="#3D8E3F"
      stroke="#25662A"
      strokeWidth="1.2"
    />
    {/* Far Hand (Left Hand gripping broom handle) */}
    <ellipse cx="74" cy="56" rx="4" ry="4" fill="#E5C6A0" stroke="#CCA87E" strokeWidth="1" />

    {/* Torso (Green Mascot Shirt connected under head and resting on broom) */}
    <path
      d="M 62 46 C 54 48, 48 55, 48 62 C 54 64, 66 61, 70 58 C 73 56, 75 50, 76 46 Z"
      fill="#4CA852"
      stroke="#2D6B32"
      strokeWidth="1.5"
    />
    {/* Red inner collar / scarf */}
    <path d="M 66 48 L 69 56 L 72 48 Z" fill="#C9402A" stroke="#9A2B18" strokeWidth="1" />

    {/* Near Arm (Right Arm extending from shoulder to front hand) */}
    <path
      d="M 72 47 C 76 47, 82 48, 86 50 L 85 57 C 80 56, 74 55, 70 53 Z"
      fill="#4CA852"
      stroke="#2D6B32"
      strokeWidth="1.5"
    />
    {/* Near Hand (Right Hand gripping broom handle) */}
    <ellipse cx="88" cy="53" rx="4.5" ry="4.5" fill="#E5C6A0" stroke="#CCA87E" strokeWidth="1" />
    <path d="M 85 51 Q 88 49, 91 52" stroke="#CCA87E" strokeWidth="1" fill="none" />

    {/* Aryo's Head Group */}
    <g id="aryo-head">
      {/* Left Ear */}
      <path
        d="M 47 26 C 39 24, 37 40, 47 44"
        fill="#E5C6A0"
        stroke="#CCA87E"
        strokeWidth="1.8"
      />
      <path
        d="M 45 30 C 41 31, 41 38, 45 40"
        stroke="#B88C5E"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 44 35 C 42 36, 42 37, 44 38"
        stroke="#B88C5E"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />

      {/* Right Ear */}
      <path
        d="M 91 26 C 99 24, 101 40, 91 44"
        fill="#E5C6A0"
        stroke="#CCA87E"
        strokeWidth="1.8"
      />
      <path
        d="M 93 30 C 97 31, 97 38, 93 40"
        stroke="#B88C5E"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 94 35 C 96 36, 96 37, 94 38"
        stroke="#B88C5E"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />

      {/* Face Base (Rounded mascot head with proportional compact chin) */}
      <ellipse cx="69" cy="34" rx="22" ry="18" fill="#E5C6A0" stroke="#CCA87E" strokeWidth="1.5" />

      {/* Mascot Hair Base */}
      <path
        d="M 47 31 C 46 22, 50 18, 54 16 C 60 15, 78 15, 84 16 C 89 18, 91 22, 91 31 C 91 38, 89 44, 88 45 C 88 38, 87 25, 84 24 C 80 29, 73 28, 69 23 C 65 27, 58 27, 54 23 C 52 28, 51 39, 50 45 C 49 40, 48 36, 47 31 Z"
        fill="#2A2B36"
        stroke="#1A1B22"
        strokeWidth="1.2"
      />

      {/* Wizard Hat (Matching reference image: dark purple, notched crease cone, orange belt & buckle) */}
      {/* 1. Hat Cone with reference notch */}
      <path
        d="M 54 12 L 66 -12 L 85 -1 L 75 -1 L 84 12 Z"
        fill="#41374F"
        stroke="#16131C"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* 2. Orange Belt */}
      <rect
        x="52"
        y="12"
        width="34"
        height="6"
        fill="#EA8B27"
        stroke="#16131C"
        strokeWidth="1.8"
      />

      {/* 3. Gold Buckle (Outer rectangle with black center) */}
      <rect
        x="63.5"
        y="9.5"
        width="11"
        height="11"
        rx="1.5"
        fill="#EA8B27"
        stroke="#16131C"
        strokeWidth="2"
      />
      <rect
        x="66.5"
        y="12.5"
        width="5"
        height="5"
        fill="#16131C"
      />

      {/* 4. Hat Brim (Seamlessly hugging forehead with flared pointed wings) */}
      <path
        d="M 38 24 Q 69 29, 100 24 L 86 18 Q 69 21, 52 18 Z"
        fill="#41374F"
        stroke="#16131C"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Front Forehead Bangs peeking seamlessly below hat brim */}
      <path
        d="M 54 26 C 60 29, 67 29, 72 25 C 68 31, 61 33, 54 26 Z"
        fill="#2A2B36"
      />
      <path
        d="M 68 27 C 73 30, 79 30, 83 26 C 80 30, 74 31, 68 27 Z"
        fill="#23242E"
      />

      {/* Eyebrows (Thick arched mascot brows) */}
      <path
        d="M 53 28 Q 59 24, 64 27"
        stroke="#1E1E26"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 74 27 Q 79 24, 85 28"
        stroke="#1E1E26"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Natural Warm Human/Mascot Eyes */}
      {/* Left Eye */}
      <ellipse cx="59" cy="34" rx="4.8" ry="6.2" fill="#291D1A" stroke="#1A1210" strokeWidth="1" />
      <ellipse cx="59" cy="35" rx="3.6" ry="4.4" fill="#3B2A26" />
      <ellipse cx="59" cy="34" rx="2.4" ry="3" fill="#1C1311" />
      <circle cx="57.6" cy="32" r="0.9" fill="#FFFFFF" opacity="0.65" />

      {/* Right Eye */}
      <ellipse cx="79" cy="34" rx="4.8" ry="6.2" fill="#291D1A" stroke="#1A1210" strokeWidth="1" />
      <ellipse cx="79" cy="35" rx="3.6" ry="4.4" fill="#3B2A26" />
      <ellipse cx="79" cy="34" rx="2.4" ry="3" fill="#1C1311" />
      <circle cx="77.6" cy="32" r="0.9" fill="#FFFFFF" opacity="0.65" />

      {/* Nose (Sculpted mascot nose) */}
      <polygon points="67.5,32 70.5,32 69,39" fill="#CCA87E" stroke="#B88C5E" strokeWidth="0.8" />
      <polygon points="69,32 70.5,32 69,39" fill="#BA8D5E" />

      {/* Mouth (Lowered closer to jawline) */}
      <path
        d="M 57 44 Q 69 47, 81 44 Q 69 52, 57 44 Z"
        fill="#8E1F2C"
        stroke="#68121B"
        strokeWidth="1.2"
      />
      {/* Tongue inside mouth */}
      <path
        d="M 62 48 Q 69 46, 76 48 Q 69 51.5, 62 48 Z"
        fill="#D64858"
      />
    </g>
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
    <span className="text-sm">✨</span>
    <span>Becarios Committee Sorting</span>
    <span className="text-sm">💌</span>
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
