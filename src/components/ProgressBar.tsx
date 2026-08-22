import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  current: number; // 1-indexed
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = Math.round(((current - 1) / total) * 100);

  return (
    <div className="w-full max-w-md mx-auto px-4 py-2">
      {/* Top labels */}
      <div className="flex items-center justify-between text-xs font-semibold text-ghibli-brown/80 mb-1.5 font-hand">
        <span className="flex items-center gap-1">
          <span className="text-ghibli-red font-bold font-sans">#{current}</span>
          <span>of {total} Questions</span>
        </span>
        <span className="text-ghibli-gold font-bold">
          {percentage}% Delivered
        </span>
      </div>

      {/* Progress track */}
      <div className="relative w-full h-3 bg-[#EAE0CD] rounded-full p-0.5 border border-[#DACBB0] shadow-inner">
        {/* Fill bar */}
        <motion.div
          className="h-full bg-gradient-to-r from-ghibli-gold to-ghibli-red rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${Math.max(6, percentage)}%` }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        />

        {/* Flying Kiki Broom Marker */}
        <motion.div
          className="absolute -top-3.5"
          initial={{ left: '0%' }}
          animate={{ left: `calc(${percentage}% - 14px)` }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        >
          <div className="flex flex-col items-center select-none">
            <span className="text-lg filter drop-shadow-sm transition-transform hover:scale-125">
              🧹
            </span>
          </div>
        </motion.div>
      </div>

      {/* Little cloud waypoints on the route */}
      <div className="flex justify-between items-center px-1 mt-1 text-[10px] text-ghibli-brown-light font-hand">
        <span>Town Square</span>
        <span>Gütiokipänja Bakery</span>
        <span>Clock Tower</span>
      </div>
    </div>
  );
};
