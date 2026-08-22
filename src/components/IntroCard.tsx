import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Compass } from 'lucide-react';
import { KikiFlying, JijiCat, RedRibbon, BakerySign } from './GhibliIllustrations';
import { sound } from '../utils/sound';

interface IntroCardProps {
  onStart: () => void;
}

export const IntroCard: React.FC<IntroCardProps> = ({ onStart }) => {
  const committeesList = [
    { name: 'Membership & Comms', icon: '💌' },
    { name: 'Operations', icon: '⚙️' },
    { name: 'Creatives', icon: '🎨' },
    { name: 'Documentations', icon: '📷' },
    { name: 'Research & Eval', icon: '📜' },
    { name: 'Ways & Means', icon: '🪙' },
    { name: 'Alumni Affairs', icon: '🕊️' },
    { name: 'Community Service', icon: '🌱' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-xl mx-auto px-4 py-3"
    >
      {/* Main Vintage Parcel Container */}
      <div className="parchment-card p-5 sm:p-8 border-2 border-ghibli-border shadow-ghibli relative overflow-hidden">
        {/* Top bakery decorative ribbon */}
        <div className="flex justify-center mb-3">
          <BakerySign />
        </div>

        {/* Hero Artwork */}
        <div className="relative flex justify-center items-center py-2 sm:py-4">
          {/* Gentle background circle highlight */}
          <div className="absolute w-44 h-44 rounded-full bg-ghibli-gold-light/60 blur-xl -z-0" />
          
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 1.5, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
            >
              <KikiFlying width={140} height={80} />
            </motion.div>
          </div>

          {/* Jiji in the corner */}
          <div className="absolute right-1 bottom-1 sm:right-3 sm:bottom-3 opacity-90">
            <JijiCat size={44} />
          </div>
        </div>

        {/* Titles & Headings */}
        <div className="text-center mt-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-ghibli-red-light border border-ghibli-red/30 text-ghibli-red text-xs font-bold tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Becarios de Santo Tomas</span>
          </div>

          <h1 className="font-title text-2xl sm:text-3xl text-ghibli-navy leading-tight tracking-tight font-bold">
            Committee Sorting Test
          </h1>

          <p className="mt-2.5 text-sm sm:text-base text-ghibli-brown font-serif italic max-w-md mx-auto leading-relaxed">
            “We each have our own special delivery in life.”
          </p>

          <p className="mt-2 text-xs sm:text-sm text-ghibli-brown/80 max-w-md mx-auto leading-relaxed">
            Answer 11 quick questions to uncover your committee calling, your leadership archetype, and where your passions can flourish!
          </p>
        </div>

        {/* 8 Committee Preview Badges */}
        <div className="mt-5 pt-4 border-t border-dashed border-[#E0D2BA]">
          <div className="flex items-center justify-center gap-1 text-xs font-semibold text-ghibli-brown-light font-hand mb-2.5">
            <Compass className="w-3.5 h-3.5 text-ghibli-gold" />
            <span>8 Committees to Match</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
            {committeesList.map((comm) => (
              <div
                key={comm.name}
                className="flex items-center gap-1.5 p-2 rounded-lg bg-[#FAF6EE] border border-ghibli-border/60 text-left text-[11px] sm:text-xs font-semibold text-ghibli-brown"
              >
                <span className="text-sm shrink-0">{comm.icon}</span>
                <span className="truncate">{comm.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="mt-6 sm:mt-7 flex flex-col items-center">
          <button
            onClick={() => {
              sound.playPageTurn();
              onStart();
            }}
            className="w-full sm:w-auto min-w-[240px] px-8 py-3.5 rounded-full bg-ghibli-red hover:bg-ghibli-red-hover text-white font-sans font-bold text-base shadow-stamp hover:shadow-none hover:translate-y-0.5 transition-all flex items-center justify-center gap-3 touch-manipulation group"
          >
            <RedRibbon size={20} className="filter brightness-125" />
            <span>Begin Sorting Delivery</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <p className="text-[11px] text-ghibli-brown-light mt-2 font-hand">
            Takes less than 2 minutes • 11 simple Yes/No questions
          </p>
        </div>
      </div>
    </motion.div>
  );
};
