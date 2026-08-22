import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, ArrowLeft, ArrowRight, HelpCircle, Sparkles } from 'lucide-react';
import type { Question, AnswerType } from '../types';
import { sound } from '../utils/sound';

interface QuestionCardProps {
  question: Question;
  selectedAnswer?: AnswerType;
  onAnswer: (answer: AnswerType, questionId: number) => void;
  onPrev: () => void;
  onNext?: () => void;
  canPrev: boolean;
  canNext?: boolean;
  totalQuestions: number;
  allAnswered?: boolean;
  onViewResults?: () => void;
}

export const QuestionCard = ({
  question,
  selectedAnswer,
  onAnswer,
  onPrev,
  onNext,
  canPrev,
  canNext,
  totalQuestions,
  allAnswered = false,
  onViewResults,
}: QuestionCardProps) => {
  const [isLocked, setIsLocked] = useState(false);

  // Reset lock when question changes
  useEffect(() => {
    setIsLocked(false);
  }, [question.id]);

  // Support keyboard shortcuts (Y / N, Left/Right arrow)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLocked) return;

      if (e.key === 'y' || e.key === 'Y' || e.key === '1') {
        handleSelect('YES');
      } else if (e.key === 'n' || e.key === 'N' || e.key === '2') {
        handleSelect('NO');
      } else if (e.key === 'ArrowLeft' && canPrev) {
        sound.playClick('low');
        onPrev();
      } else if (e.key === 'ArrowRight' && canNext && onNext) {
        sound.playClick('low');
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [question.id, canPrev, canNext, isLocked]);

  const handleSelect = (answer: AnswerType) => {
    if (isLocked) return;
    setIsLocked(true);

    try {
      sound.playClick(answer === 'YES' ? 'high' : 'low');
    } catch {
      // ignore
    }

    // Call onAnswer immediately so state is updated
    onAnswer(answer, question.id);

    // Release transition lock after 180ms
    setTimeout(() => {
      setIsLocked(false);
    }, 180);
  };

  return (
    <div className="w-full max-w-lg mx-auto px-3 sm:px-4 py-1">
      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -15 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="parchment-card p-5 sm:p-7 border-2 border-ghibli-border shadow-ghibli relative"
        >
          {/* Top Stamp / Badge */}
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ghibli-gold-light border border-ghibli-gold/50 text-ghibli-brown font-hand text-xs font-bold shadow-sm">
              <span className="text-sm">✉️</span>
              <span>Letter #{question.number} of {totalQuestions}</span>
            </div>

            {question.categoryHint && (
              <span className="text-[11px] font-semibold text-ghibli-brown-light px-2 py-0.5 rounded bg-[#FAF6EE] border border-ghibli-border/60">
                {question.categoryHint}
              </span>
            )}
          </div>

          {/* Question Text in storybook font */}
          <div className="min-h-[85px] sm:min-h-[105px] flex items-center justify-center my-2 text-center">
            <h2 className="font-serif text-lg sm:text-2xl text-ghibli-navy font-semibold leading-snug">
              {question.text}
            </h2>
          </div>

          {/* Current Selection Status Banner if revisiting */}
          {selectedAnswer && (
            <div className="mb-3 text-center">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#FAF6EE] border border-ghibli-border text-ghibli-brown-light">
                Current choice: <strong className={selectedAnswer === 'YES' ? 'text-ghibli-green' : 'text-ghibli-red'}>{selectedAnswer}</strong>
                <span>(Tap to change)</span>
              </span>
            </div>
          )}

          {/* YES / NO Big Touch Buttons */}
          <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
            {/* YES Button */}
            <button
              onClick={() => handleSelect('YES')}
              className={`min-h-[60px] sm:min-h-[68px] p-3 rounded-2xl font-sans font-bold text-base sm:text-lg flex flex-col items-center justify-center gap-1 transition-all touch-manipulation relative overflow-hidden ${
                selectedAnswer === 'YES'
                  ? 'bg-ghibli-green text-white shadow-none ring-4 ring-ghibli-green/40'
                  : 'bg-[#457B59] hover:bg-[#39674A] text-white shadow-stamp-green active:translate-y-1 active:shadow-none'
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span>YES</span>
              </div>
              <span className="text-[10px] font-normal opacity-80 uppercase tracking-widest font-sans">
                (Press Y)
              </span>
            </button>

            {/* NO Button */}
            <button
              onClick={() => handleSelect('NO')}
              className={`min-h-[60px] sm:min-h-[68px] p-3 rounded-2xl font-sans font-bold text-base sm:text-lg flex flex-col items-center justify-center gap-1 transition-all touch-manipulation relative overflow-hidden ${
                selectedAnswer === 'NO'
                  ? 'bg-ghibli-red text-white shadow-none ring-4 ring-ghibli-red/40'
                  : 'bg-ghibli-red hover:bg-ghibli-red-hover text-white shadow-stamp active:translate-y-1 active:shadow-none'
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <X className="w-4 h-4 stroke-[3]" />
                </div>
                <span>NO</span>
              </div>
              <span className="text-[10px] font-normal opacity-80 uppercase tracking-widest font-sans">
                (Press N)
              </span>
            </button>
          </div>

          {/* Bottom Bar: Back Navigation and Hint */}
          <div className="mt-5 pt-3 border-t border-dashed border-ghibli-border/80 flex items-center justify-between">
            {canPrev ? (
              <button
                onClick={() => {
                  sound.playClick('low');
                  onPrev();
                }}
                className="flex items-center gap-1 text-xs font-semibold text-ghibli-brown-light hover:text-ghibli-red py-1 px-2 rounded hover:bg-white/60 transition-colors touch-manipulation"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous Letter</span>
              </button>
            ) : (
              <div />
            )}

            {canNext && onNext ? (
              <button
                onClick={() => {
                  sound.playClick('low');
                  onNext();
                }}
                className="flex items-center gap-1 text-xs font-semibold text-ghibli-brown-light hover:text-ghibli-red py-1 px-2 rounded hover:bg-white/60 transition-colors touch-manipulation"
              >
                <span>Next Letter</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <div className="flex items-center gap-1 text-[11px] text-ghibli-brown-light font-hand">
                <HelpCircle className="w-3 h-3 text-ghibli-gold" />
                <span>Choose your honest instinct</span>
              </div>
            )}
          </div>

          {/* Quick jump to results if all 11 are answered and user is backtracking */}
          {allAnswered && onViewResults && (
            <div className="mt-4 pt-3 border-t border-[#E8DCB8] text-center">
              <button
                onClick={onViewResults}
                className="w-full py-2.5 px-4 rounded-xl bg-ghibli-gold hover:bg-[#c98622] text-white font-bold text-xs sm:text-sm shadow-sm flex items-center justify-center gap-1.5 transition-all touch-manipulation"
              >
                <Sparkles className="w-4 h-4" />
                <span>All 11 Answered • View Committee Results</span>
              </button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
