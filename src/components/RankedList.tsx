import { useState } from 'react';
import { ChevronDown, ChevronUp, Trophy } from 'lucide-react';
import type { CommitteeScoreResult } from '../types';
import { CommitteeCard } from './CommitteeCard';
import { sound } from '../utils/sound';

interface RankedListProps {
  rankedCommittees: CommitteeScoreResult[];
}

export const RankedList = ({ rankedCommittees }: RankedListProps) => {
  const [expandedKey, setExpandedKey] = useState<string | null>(null);

  const toggleExpand = (key: string) => {
    try {
      sound.playClick('low');
    } catch {
      // ignore
    }
    setExpandedKey((prev) => (prev === key ? null : key));
  };

  return (
    <div className="w-full parchment-card p-4 sm:p-6 border-2 border-ghibli-border shadow-ghibli mt-6">
      {/* Title */}
      <div className="flex items-center justify-between pb-3 border-b border-[#E8DCB8]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-ghibli-gold-light border border-ghibli-gold/50 flex items-center justify-center text-ghibli-brown">
            <Trophy className="w-4 h-4 text-ghibli-gold" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-base sm:text-lg text-ghibli-navy leading-tight">
              All Committee Rankings
            </h4>
            <p className="text-[11px] text-ghibli-brown-light font-hand">
              Explore your 2nd and next best committee matches
            </p>
          </div>
        </div>
      </div>

      {/* List */}
      <div className="divide-y divide-[#EFE5D3] mt-2">
        {rankedCommittees.map((item) => {
          const isExpanded = expandedKey === item.committee.key;
          const isWinner = item.isTop;

          return (
            <div key={item.committee.key} className="py-3 transition-colors">
              {/* Row Header / Clickable Accordion Item */}
              <button
                onClick={() => toggleExpand(item.committee.key)}
                className="w-full text-left flex items-start gap-3 p-2 rounded-xl hover:bg-[#FAF6EE] transition-all touch-manipulation group"
              >
                {/* Rank Badge */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 shadow-sm border mt-0.5 ${
                    isWinner
                      ? 'bg-ghibli-gold text-white border-[#B87C20]'
                      : item.rank === 2
                      ? 'bg-[#CBD5E1] text-ghibli-navy border-[#94A3B8]'
                      : item.rank === 3
                      ? 'bg-[#E2C799] text-ghibli-brown border-[#C4A670]'
                      : 'bg-white text-ghibli-brown-light border-ghibli-border'
                  }`}
                >
                  #{item.rank}
                </div>

                {/* Symbol */}
                <span className="text-2xl shrink-0 mt-0.5">{item.committee.themeSymbol}</span>

                {/* Info & Score Progress with UNIFORM full-width bar container */}
                <div className="flex-1 min-w-0 pr-1">
                  {/* Top Line: Committee Name, Archetype & Points */}
                  <div className="flex items-baseline justify-between gap-2">
                    <div className="flex items-center gap-1.5 min-w-0 flex-wrap">
                      <span className="font-bold text-xs sm:text-sm text-ghibli-navy truncate group-hover:text-ghibli-red transition-colors">
                        {item.committee.name}
                      </span>
                      <span className="text-[11px] font-semibold text-ghibli-brown-light hidden xs:inline sm:inline">
                        • {item.committee.archetype}
                      </span>
                    </div>

                    <span className="text-xs font-bold text-ghibli-red shrink-0">
                      {item.score > 0 ? `+${item.score}` : item.score} pts
                    </span>
                  </div>

                  {/* Archetype visible on very small screens */}
                  <div className="text-[10px] font-medium text-ghibli-brown-light xs:hidden sm:hidden -mt-0.5 mb-1 truncate">
                    {item.committee.archetype}
                  </div>

                  {/* Dedicated 100% UNIFORM Width Progress Bar Container */}
                  <div className="w-full h-2.5 bg-[#EFE5D3] rounded-full overflow-hidden mt-1.5 shadow-inner">
                    <div
                      className="h-full rounded-full transition-all duration-500 ease-out"
                      style={{
                        width: `${item.matchPercentage}%`,
                        backgroundColor: item.committee.color?.primary || '#C9402A',
                      }}
                    />
                  </div>
                </div>

                {/* Chevron */}
                <div className="p-1 rounded-full text-ghibli-brown-light group-hover:text-ghibli-brown shrink-0 mt-1">
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>
              </button>

              {/* Expanded Card Details */}
              {isExpanded && (
                <div className="mt-2 pl-2 pr-1 pb-1">
                  <CommitteeCard
                    committee={item.committee}
                    score={item.score}
                    rank={item.rank}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
