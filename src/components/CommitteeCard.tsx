import { Sparkles, CheckCircle2, Award } from 'lucide-react';
import type { CommitteeInfo } from '../types';
import { RedRibbon } from './GhibliIllustrations';

interface CommitteeCardProps {
  committee: CommitteeInfo;
  isTopMatch?: boolean;
  score?: number;
  rank?: number;
  expandedDefault?: boolean;
}

export const CommitteeCard = ({
  committee,
  isTopMatch = false,
  score,
  rank,
}: CommitteeCardProps) => {
  if (!committee) return null;

  const color = committee.color || {
    primary: '#C9402A',
    light: '#FDF0ED',
    border: '#F5BDB2',
    tagBg: '#FCE0D9',
    tagText: '#9A2B18',
  };

  const tasks = committee.whatYoullDo || [];

  return (
    <div
      className={`parchment-card p-5 sm:p-7 border-2 transition-all relative overflow-hidden ${
        isTopMatch
          ? 'border-ghibli-gold shadow-ghibli-lg ring-2 ring-ghibli-gold/30 bg-gradient-to-b from-[#FFFDF9] to-[#FDF8EE]'
          : 'border-ghibli-border shadow-ghibli'
      }`}
    >
      {/* Decorative Top Ribbon for Top Match */}
      {isTopMatch && (
        <div className="absolute top-0 right-0">
          <div className="bg-ghibli-gold text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-bl-xl shadow-sm flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            <span>Best Match</span>
          </div>
        </div>
      )}

      {/* Header section with Icon, Name, Archetype */}
      <div className="flex items-start gap-3.5 mb-4">
        <div
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl shrink-0 shadow-sm border"
          style={{
            backgroundColor: color.light,
            borderColor: color.border,
          }}
        >
          {committee.themeSymbol || '✨'}
        </div>

        <div className="flex-1 pr-14">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span
              className="text-xs font-bold px-2.5 py-0.5 rounded-full border shadow-sm"
              style={{
                backgroundColor: color.tagBg,
                color: color.tagText,
                borderColor: color.border,
              }}
            >
              Archetype: {committee.archetype}
            </span>

            {rank !== undefined && (
              <span className="text-[11px] font-bold text-ghibli-brown-light font-hand">
                Rank #{rank}
              </span>
            )}
          </div>

          <h3 className="font-serif font-bold text-xl sm:text-2xl text-ghibli-navy mt-1 leading-tight">
            {committee.name}
          </h3>

          {score !== undefined && (
            <div className="text-xs font-semibold text-ghibli-brown-light mt-0.5">
              Score: <span className="text-ghibli-red font-bold">{score > 0 ? `+${score}` : score} pts</span>
            </div>
          )}
        </div>
      </div>

      {/* "Why it fits you" Section */}
      <div className="mt-3 p-3.5 sm:p-4 rounded-xl bg-[#FAF6EE] border border-ghibli-border/70">
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ghibli-red mb-1.5 font-sans">
          <Award className="w-4 h-4" />
          <span>Why it fits you</span>
        </div>
        <p className="text-xs sm:text-sm text-ghibli-brown leading-relaxed">
          {committee.whyItFits}
        </p>
      </div>

      {/* "What you'll do here" Section */}
      <div className="mt-4 pt-3 border-t border-dashed border-[#E5D7C0]">
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ghibli-navy mb-2 font-sans">
          <RedRibbon size={16} />
          <span>What you’ll do here</span>
        </div>

        <ul className="space-y-2">
          {tasks.map((task, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-ghibli-brown leading-relaxed">
              <CheckCircle2
                className="w-4 h-4 shrink-0 mt-0.5"
                style={{ color: color.primary }}
              />
              <span>{task}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
