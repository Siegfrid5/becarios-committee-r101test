import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { RotateCcw, Share2, Sparkles, Check, ChevronDown, ChevronUp, Heart } from 'lucide-react';
import type { CalculationResult } from '../types';
import { CommitteeCard } from './CommitteeCard';
import { RankedList } from './RankedList';
import { RedRibbon, JijiCat, BakerySign } from './GhibliIllustrations';
import { generateShareText } from '../utils/scoring';
import { QUESTIONS } from '../data/questions';
import { sound } from '../utils/sound';

interface ResultViewProps {
  result: CalculationResult;
  onRetake: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({ result, onRetake }) => {
  const [copied, setCopied] = useState(false);
  const [showReview, setShowReview] = useState(false);

  useEffect(() => {
    // Play celebratory chime sound
    sound.playCelebration();

    // Trigger Ghibli confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C9402A', '#DF9B35', '#457B59', '#1A2938', '#FFFFFF'],
      });
    } catch {
      // safe fallback
    }
  }, []);

  const handleCopy = async () => {
    sound.playClick('high');
    const text = generateShareText(result);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const isTied = result.topCommittees.length > 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-xl mx-auto px-3 sm:px-4 py-2 pb-12"
    >
      {/* Top Banner */}
      <div className="text-center mb-5">
        <div className="flex justify-center mb-2">
          <BakerySign />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-ghibli-gold-light border border-ghibli-gold/50 text-ghibli-brown font-hand text-xs font-bold shadow-sm mb-2">
          <Sparkles className="w-3.5 h-3.5 text-ghibli-gold" />
          <span>Delivery Complete! Your Calling Has Arrived</span>
        </div>

        <h1 className="font-title text-2xl sm:text-3xl text-ghibli-navy font-bold">
          Your Committee Match
        </h1>

        <p className="text-xs sm:text-sm text-ghibli-brown/80 font-serif italic mt-1">
          {isTied
            ? '✨ You have balanced strengths suited for multiple committees!'
            : '✨ Here is the committee where your natural gifts shine brightest!'}
        </p>
      </div>

      {/* Top Match Result Card(s) with "OR" divider if tied */}
      <div className="space-y-4">
        {result.topCommittees.map((committee, index) => (
          <React.Fragment key={committee.key}>
            {index > 0 && (
              <div className="flex items-center justify-center my-4">
                <div className="flex items-center gap-3 w-full max-w-xs">
                  <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent to-ghibli-red/50" />
                  <div className="px-4 py-1 rounded-full bg-ghibli-red text-white font-title text-sm sm:text-base tracking-widest uppercase shadow-stamp">
                    OR
                  </div>
                  <div className="flex-1 h-[2px] bg-gradient-to-l from-transparent to-ghibli-red/50" />
                </div>
              </div>
            )}

            <CommitteeCard
              committee={committee}
              isTopMatch={true}
              score={result.scores[committee.key]}
              rank={1}
            />
          </React.Fragment>
        ))}
      </div>

      {/* Action Buttons: Share & Retake */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
        {/* Share Button */}
        <button
          onClick={handleCopy}
          className="w-full sm:w-auto px-6 py-3 rounded-full bg-ghibli-gold hover:bg-[#c98622] text-white font-sans font-bold text-sm shadow-md hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2 touch-manipulation"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              <span>Result Copied to Clipboard!</span>
            </>
          ) : (
            <>
              <Share2 className="w-4 h-4" />
              <span>Copy & Share Your Result</span>
            </>
          )}
        </button>

        {/* Retake Button */}
        <button
          onClick={() => {
            sound.playPageTurn();
            onRetake();
          }}
          className="w-full sm:w-auto px-6 py-3 rounded-full bg-white hover:bg-ghibli-parchment text-ghibli-brown font-sans font-bold text-sm border-2 border-ghibli-border shadow-sm hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2 touch-manipulation"
        >
          <RotateCcw className="w-4 h-4 text-ghibli-red" />
          <span>Retake Sorting Test</span>
        </button>
      </div>

      {/* Full Ranked Leaderboard */}
      <RankedList rankedCommittees={result.allRanked} />

      {/* Answer Review Section Accordion */}
      <div className="parchment-card p-4 sm:p-5 border-2 border-ghibli-border shadow-ghibli mt-5">
        <button
          onClick={() => {
            sound.playClick('low');
            setShowReview(!showReview);
          }}
          className="w-full flex items-center justify-between text-left text-xs sm:text-sm font-bold text-ghibli-navy font-serif"
        >
          <div className="flex items-center gap-2">
            <RedRibbon size={18} />
            <span>Review Your 11 Answers</span>
          </div>
          {showReview ? (
            <ChevronUp className="w-4 h-4 text-ghibli-brown-light" />
          ) : (
            <ChevronDown className="w-4 h-4 text-ghibli-brown-light" />
          )}
        </button>

        {showReview && (
          <div className="mt-3 pt-3 border-t border-[#E8DCB8] space-y-2">
            {QUESTIONS.map((q) => {
              const ans = result.answers[q.id];
              return (
                <div
                  key={q.id}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-[#FAF6EE] border border-ghibli-border/60 text-xs text-ghibli-brown gap-2"
                >
                  <span className="flex-1 font-medium">
                    <strong className="text-ghibli-navy">Q{q.number}:</strong> {q.text}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-full font-bold text-[11px] shrink-0 ${
                      ans === 'YES'
                        ? 'bg-ghibli-green text-white'
                        : 'bg-ghibli-red text-white'
                    }`}
                  >
                    {ans || 'N/A'}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Footer message with Jiji */}
      <div className="text-center mt-8 text-xs text-ghibli-brown-light font-hand flex flex-col items-center gap-2">
        <JijiCat size={38} />
        <p className="flex items-center gap-1">
          Made with <Heart className="w-3 h-3 text-ghibli-red fill-ghibli-red inline" /> for Becarios de Santo Tomas
        </p>
      </div>
    </motion.div>
  );
};
