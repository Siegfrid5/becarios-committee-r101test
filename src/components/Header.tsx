import React from 'react';
import { Volume2, VolumeX, RotateCcw } from 'lucide-react';
import { RedRibbon } from './GhibliIllustrations';
import { sound } from '../utils/sound';

interface HeaderProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
  onReset: () => void;
  showReset: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  soundEnabled,
  onToggleSound,
  onReset,
  showReset,
}) => {
  return (
    <header className="w-full pt-4 pb-2 px-3 sm:px-6 max-w-2xl mx-auto flex items-center justify-between">
      {/* Brand / Logo */}
      <div className="flex items-center gap-2.5">
        <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-ghibli-border shadow-ghibli-sm shrink-0">
          <RedRibbon size={24} />
        </div>
        <div className="flex flex-col">
          <span className="font-serif font-bold text-sm sm:text-base leading-tight tracking-tight text-ghibli-navy flex items-center gap-1.5">
            Becarios de Santo Tomas
          </span>
          <span className="text-[11px] font-hand text-ghibli-brown-light tracking-wide">
            Aryo's Committee Sorting Test
          </span>
        </div>
      </div>

      {/* Header Actions */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {showReset && (
          <button
            onClick={() => {
              sound.playClick('low');
              onReset();
            }}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-white/80 hover:bg-white text-ghibli-brown text-xs font-semibold border border-ghibli-border shadow-sm transition-all hover:scale-105 active:scale-95 touch-manipulation"
            title="Restart Sorting Test"
            aria-label="Restart Sorting Test"
          >
            <RotateCcw className="w-3.5 h-3.5 text-ghibli-red" />
            <span className="hidden xs:inline sm:inline">Restart</span>
          </button>
        )}

        {/* Audio Toggle */}
        <button
          onClick={onToggleSound}
          className="flex items-center justify-center w-9 h-9 rounded-full bg-white/80 hover:bg-white text-ghibli-brown border border-ghibli-border shadow-sm transition-all hover:scale-105 active:scale-95 touch-manipulation"
          title={soundEnabled ? 'Mute Sound Chimes' : 'Enable Sound Chimes'}
          aria-label={soundEnabled ? 'Mute Sound Chimes' : 'Enable Sound Chimes'}
        >
          {soundEnabled ? (
            <Volume2 className="w-4 h-4 text-ghibli-green" />
          ) : (
            <VolumeX className="w-4 h-4 text-ghibli-brown-light" />
          )}
        </button>
      </div>
    </header>
  );
};
