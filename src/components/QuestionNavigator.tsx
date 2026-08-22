import React from 'react';
import { Check } from 'lucide-react';
import type { AnswerType } from '../types';
import { sound } from '../utils/sound';

interface QuestionNavigatorProps {
  currentIndex: number; // 0-indexed
  total: number;
  answers: Record<number, AnswerType>;
  onSelectQuestion: (index: number) => void;
}

export const QuestionNavigator: React.FC<QuestionNavigatorProps> = ({
  currentIndex,
  total,
  answers,
  onSelectQuestion,
}) => {
  return (
    <div className="w-full max-w-lg mx-auto px-3 sm:px-4 mb-2">
      <div className="flex items-center justify-between gap-1 sm:gap-1.5 p-1.5 sm:p-2 rounded-xl bg-white/70 backdrop-blur-sm border border-ghibli-border/80 shadow-sm overflow-x-auto">
        {Array.from({ length: total }, (_, i) => {
          const qNumber = i + 1;
          const isCurrent = i === currentIndex;
          const isAnswered = !!answers[qNumber];
          const answerVal = answers[qNumber];

          return (
            <button
              key={qNumber}
              onClick={() => {
                sound.playClick('low');
                onSelectQuestion(i);
              }}
              title={`Jump to Question ${qNumber}${isAnswered ? ` (${answerVal})` : ' (Unanswered)'}`}
              className={`relative flex-1 min-w-[26px] h-8 sm:h-9 rounded-lg font-bold text-xs sm:text-sm flex items-center justify-center transition-all touch-manipulation ${
                isCurrent
                  ? 'bg-ghibli-navy text-white shadow-md scale-105 ring-2 ring-ghibli-gold'
                  : isAnswered
                  ? answerVal === 'YES'
                    ? 'bg-ghibli-green-light text-ghibli-green border border-ghibli-green/40 hover:bg-ghibli-green/20'
                    : 'bg-ghibli-red-light text-ghibli-red border border-ghibli-red/40 hover:bg-ghibli-red/20'
                  : 'bg-[#FAF6EE] text-ghibli-brown-light border border-ghibli-border/60 hover:bg-white'
              }`}
            >
              <span>{qNumber}</span>
              {isAnswered && !isCurrent && (
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-ghibli-gold text-white flex items-center justify-center text-[8px]">
                  <Check className="w-2 h-2 stroke-[3]" />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
