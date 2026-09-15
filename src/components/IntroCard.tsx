import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Compass, X, CheckCircle2, Award } from 'lucide-react';
import { KikiFlying, RedRibbon, BakerySign, FloatingCloud } from './GhibliIllustrations';
import { COMMITTEES } from '../data/committees';
import type { CommitteeInfo, CommitteeKey } from '../types';
import { sound } from '../utils/sound';

interface IntroCardProps {
  onStart: () => void;
}

export const IntroCard = ({ onStart }: IntroCardProps) => {
  const [selectedCommittee, setSelectedCommittee] = useState<CommitteeInfo | null>(null);

  const handleOpenCommittee = (key: CommitteeKey) => {
    try {
      sound.playClick('high');
    } catch {
      // ignore
    }
    setSelectedCommittee(COMMITTEES[key]);
  };

  const handleCloseCommittee = () => {
    try {
      sound.playClick('low');
    } catch {
      // ignore
    }
    setSelectedCommittee(null);
  };

  const committeeKeys: CommitteeKey[] = [
    'MEMBERSHIPS_AND_COMMUNICATIONS',
    'OPERATIONS',
    'CREATIVES',
    'DOCUMENTATIONS',
    'RESEARCH_AND_EVALUATIONS',
    'WAYS_AND_MEANS',
    'ALUMNI_AFFAIRS',
    'COMMUNITY_SERVICE',
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
        {/* Top banner */}
        <div className="flex justify-center mb-3">
          <BakerySign />
        </div>

        {/* Hero Artwork with Seamless Passing Clouds and Wind Wisps */}
        <div className="relative flex justify-center items-center py-2 sm:py-4 overflow-hidden w-full max-w-md mx-auto min-h-[145px]">
          {/* Gentle background circle highlight */}
          <div className="absolute w-44 h-44 rounded-full bg-ghibli-gold-light/70 blur-xl -z-0" />

          {/* Background Passing Cloud 1 (Upper sky) */}
          <motion.div
            className="absolute top-1 left-1/2 pointer-events-none z-0"
            animate={{
              x: [240, -250],
              opacity: [0, 0.65, 0.65, 0.65, 0],
            }}
            transition={{
              duration: 8.5,
              repeat: Infinity,
              ease: 'linear',
              times: [0, 0.18, 0.5, 0.85, 1],
            }}
          >
            <FloatingCloud width={75} opacity={0.65} />
          </motion.div>

          {/* Background Passing Cloud 2 (Lower sky, larger) */}
          <motion.div
            className="absolute bottom-1 left-1/2 pointer-events-none z-0"
            animate={{
              x: [250, -260],
              opacity: [0, 0.55, 0.55, 0.55, 0],
            }}
            transition={{
              duration: 10.5,
              delay: 3.2,
              repeat: Infinity,
              ease: 'linear',
              times: [0, 0.18, 0.5, 0.85, 1],
            }}
          >
            <FloatingCloud width={90} opacity={0.55} />
          </motion.div>

          {/* Background Passing Cloud 3 (Mid sky puff) */}
          <motion.div
            className="absolute top-1/3 left-1/2 pointer-events-none z-0"
            animate={{
              x: [230, -240],
              opacity: [0, 0.5, 0.5, 0.5, 0],
            }}
            transition={{
              duration: 7.2,
              delay: 5.0,
              repeat: Infinity,
              ease: 'linear',
              times: [0, 0.18, 0.5, 0.85, 1],
            }}
          >
            <FloatingCloud width={55} opacity={0.5} />
          </motion.div>

          {/* Background Passing Cloud 4 (Fast small trailing cloud) */}
          <motion.div
            className="absolute top-2/3 left-1/2 pointer-events-none z-0"
            animate={{
              x: [240, -240],
              opacity: [0, 0.45, 0.45, 0.45, 0],
            }}
            transition={{
              duration: 8.0,
              delay: 1.6,
              repeat: Infinity,
              ease: 'linear',
              times: [0, 0.18, 0.5, 0.85, 1],
            }}
          >
            <FloatingCloud width={45} opacity={0.45} />
          </motion.div>

          {/* Passing Wind Wisp 1 (Above hat - streaming breeze) */}
          <motion.div
            className="absolute top-2 left-1/2 pointer-events-none z-10"
            animate={{
              x: [220, -240],
              opacity: [0, 0.8, 0.8, 0.8, 0],
            }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: 'linear',
              times: [0, 0.15, 0.5, 0.85, 1],
            }}
          >
            <svg width="70" height="14" viewBox="0 0 70 14" fill="none">
              <path d="M 68 7 C 52 3, 34 11, 16 6 C 8 3, 3 7, 1 6" stroke="#DF9B35" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </motion.div>

          {/* Passing Wind Wisp 2 (Under broom - long golden & cream stream) */}
          <motion.div
            className="absolute bottom-3 left-1/2 pointer-events-none z-10"
            animate={{
              x: [230, -250],
              opacity: [0, 0.78, 0.78, 0.78, 0],
            }}
            transition={{
              duration: 3.8,
              delay: 1.8,
              repeat: Infinity,
              ease: 'linear',
              times: [0, 0.15, 0.5, 0.85, 1],
            }}
          >
            <svg width="85" height="12" viewBox="0 0 85 12" fill="none">
              <path d="M 83 6 C 63 3, 40 8, 20 5 C 10 3, 3 7, 1 6" stroke="#E5A43D" strokeWidth="2" strokeLinecap="round" />
              <path d="M 58 10 C 44 9, 30 11, 16 8" stroke="#FAF6EE" strokeWidth="1.6" strokeLinecap="round" opacity="0.9" />
            </svg>
          </motion.div>

          {/* Passing Wind Wisp 3 (Mid-body swoosh past broomstick) */}
          <motion.div
            className="absolute top-1/2 left-1/2 pointer-events-none z-10"
            animate={{
              x: [210, -230],
              y: [0, -4, 2, 0],
              opacity: [0, 0.75, 0.75, 0.75, 0],
            }}
            transition={{
              duration: 4.6,
              delay: 0.8,
              repeat: Infinity,
              ease: 'linear',
              times: [0, 0.15, 0.5, 0.85, 1],
            }}
          >
            <svg width="55" height="16" viewBox="0 0 55 16" fill="none">
              <path d="M 53 9 C 40 4, 25 13, 12 8 C 6 6, 2 8, 1 11" stroke="#DF9B35" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </motion.div>

          {/* Passing Wind Wisp 4 (Forward breeze ahead of flight) */}
          <motion.div
            className="absolute top-1/4 left-1/2 pointer-events-none z-10"
            animate={{
              x: [225, -245],
              opacity: [0, 0.72, 0.72, 0.72, 0],
            }}
            transition={{
              duration: 4.8,
              delay: 2.6,
              repeat: Infinity,
              ease: 'linear',
              times: [0, 0.15, 0.5, 0.85, 1],
            }}
          >
            <svg width="65" height="10" viewBox="0 0 65 10" fill="none">
              <path d="M 63 5 C 48 2, 32 7, 16 4 C 8 2, 2 5, 1 5" stroke="#FAF6EE" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </motion.div>

          {/* Aryo flying on broomstick */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 1.5, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
            >
              <KikiFlying width={155} height={105} />
            </motion.div>
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

        {/* 8 Clickable Committee Preview Badges */}
        <div className="mt-5 pt-4 border-t border-dashed border-[#E0D2BA]">
          <div className="flex items-center justify-between gap-1 text-xs font-semibold text-ghibli-brown-light font-hand mb-2.5 px-1">
            <span className="flex items-center gap-1">
              <Compass className="w-3.5 h-3.5 text-ghibli-gold" />
              <span>8 Committees to Match</span>
            </span>
            <span className="text-[11px] text-ghibli-red font-sans font-bold">
              (Tap any to preview)
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {committeeKeys.map((key) => {
              const comm = COMMITTEES[key];
              return (
                <button
                  key={key}
                  onClick={() => handleOpenCommittee(key)}
                  className="flex items-center gap-1.5 p-2 sm:p-2.5 rounded-xl bg-[#FAF6EE] hover:bg-white border border-ghibli-border/70 hover:border-ghibli-red/50 text-left text-[11px] sm:text-xs font-semibold text-ghibli-brown shadow-sm hover:shadow-md hover:scale-102 active:scale-98 transition-all touch-manipulation group"
                >
                  <span className="text-base shrink-0 group-hover:scale-110 transition-transform">
                    {comm.themeSymbol}
                  </span>
                  <span className="truncate group-hover:text-ghibli-red transition-colors">
                    {comm.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="mt-6 sm:mt-7 flex flex-col items-center">
          <button
            onClick={() => {
              try {
                sound.playPageTurn();
              } catch {
                // ignore
              }
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

      {/* Committee Details Modal / Bottom Sheet */}
      <AnimatePresence>
        {selectedCommittee && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-ghibli-navy/50 backdrop-blur-sm animate-fadeIn">
            {/* Backdrop click to dismiss */}
            <div
              className="absolute inset-0"
              onClick={handleCloseCommittee}
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative z-10 w-full max-w-lg parchment-card p-5 sm:p-7 max-h-[85vh] overflow-y-auto border-2 border-ghibli-gold shadow-ghibli-lg"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseCommittee}
                className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-[#FAF6EE] hover:bg-ghibli-red-light border border-ghibli-border flex items-center justify-center text-ghibli-brown hover:text-ghibli-red transition-colors touch-manipulation"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4 stroke-[2.5]" />
              </button>

              {/* Header */}
              <div className="flex items-start gap-3 mb-4 pr-8">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0 shadow-sm border"
                  style={{
                    backgroundColor: selectedCommittee.color.light,
                    borderColor: selectedCommittee.color.border,
                  }}
                >
                  {selectedCommittee.themeSymbol}
                </div>

                <div>
                  <span
                    className="text-[11px] font-bold px-2.5 py-0.5 rounded-full border shadow-sm inline-block mb-1"
                    style={{
                      backgroundColor: selectedCommittee.color.tagBg,
                      color: selectedCommittee.color.tagText,
                      borderColor: selectedCommittee.color.border,
                    }}
                  >
                    Archetype: {selectedCommittee.archetype}
                  </span>

                  <h3 className="font-serif font-bold text-lg sm:text-xl text-ghibli-navy leading-tight">
                    {selectedCommittee.name}
                  </h3>
                </div>
              </div>

              {/* Why It Fits */}
              <div className="p-3.5 rounded-xl bg-[#FAF6EE] border border-ghibli-border/70 mb-4">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ghibli-red mb-1 font-sans">
                  <Award className="w-3.5 h-3.5" />
                  <span>Committee Overview</span>
                </div>
                <p className="text-xs sm:text-sm text-ghibli-brown leading-relaxed">
                  {selectedCommittee.whyItFits}
                </p>
              </div>

              {/* What You'll Do */}
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ghibli-navy mb-2 font-sans">
                  <RedRibbon size={16} />
                  <span>What You’ll Do Here</span>
                </div>

                <ul className="space-y-2 mb-5">
                  {selectedCommittee.whatYoullDo.map((task, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-ghibli-brown leading-relaxed"
                    >
                      <CheckCircle2
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: selectedCommittee.color.primary }}
                      />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons inside modal */}
              <div className="pt-3 border-t border-dashed border-[#E5D7C0] flex items-center justify-between gap-2">
                <button
                  onClick={handleCloseCommittee}
                  className="px-4 py-2 rounded-full bg-[#FAF6EE] hover:bg-ghibli-parchment text-ghibli-brown font-bold text-xs border border-ghibli-border transition-colors touch-manipulation"
                >
                  Close Preview
                </button>

                <button
                  onClick={() => {
                    handleCloseCommittee();
                    onStart();
                  }}
                  className="px-5 py-2 rounded-full bg-ghibli-red hover:bg-ghibli-red-hover text-white font-bold text-xs shadow-stamp hover:shadow-none transition-all flex items-center gap-1.5 touch-manipulation"
                >
                  <span>Take Quiz Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
