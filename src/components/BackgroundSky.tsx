import React from 'react';
import { FloatingCloud } from './GhibliIllustrations';

export const BackgroundSky: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-gradient-to-b from-[#EAF2F8] via-[#FAF6EE] to-[#F5EADB]">
      {/* Subtle storybook paper grain texture */}
      <div className="absolute inset-0 opacity-40 storybook-grain" />

      {/* Floating Animated Clouds */}
      <div className="absolute top-8 left-[-10%] animate-[drift_50s_linear_infinite] opacity-60">
        <FloatingCloud width={180} opacity={0.7} />
      </div>
      
      <div className="absolute top-28 left-[-20%] animate-[drift_65s_linear_infinite] [animation-delay:15s] opacity-50">
        <FloatingCloud width={140} opacity={0.6} />
      </div>

      <div className="absolute top-64 left-[-15%] animate-[drift_75s_linear_infinite] [animation-delay:30s] opacity-40">
        <FloatingCloud width={220} opacity={0.5} />
      </div>

      {/* Warm seaside sun glow */}
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-gradient-to-br from-[#FFE79A]/40 to-transparent blur-3xl" />

      {/* Distant gentle hillside silhouettes at the very bottom */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full h-16 sm:h-24 opacity-25"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,80 C150,40 350,110 500,70 C700,20 900,90 1200,50 L1200,120 L0,120 Z"
          fill="#457B59"
        />
        <path
          d="M0,95 C200,65 400,115 650,85 C900,45 1050,105 1200,80 L1200,120 L0,120 Z"
          fill="#DF9B35"
          opacity="0.4"
        />
      </svg>
    </div>
  );
};
