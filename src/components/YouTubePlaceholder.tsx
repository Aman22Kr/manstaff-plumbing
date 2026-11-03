import React from 'react';
import { Play, Video } from 'lucide-react';

interface YouTubePlaceholderProps {
  title?: string;
  duration?: string;
  className?: string;
}

export const YouTubePlaceholder: React.FC<YouTubePlaceholderProps> = ({
  title = "Case Study: Mobilizing 40 Certified Journeymen Plumbers for Commercial Medical Center",
  duration = "4:32",
  className = ""
}) => {
  return (
    <div className={`w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-lg ${className}`}>
      {/* 16:9 aspect ratio container */}
      <div className="relative aspect-video w-full bg-slate-900 flex flex-col items-center justify-center p-6 text-center select-none">
        {/* Subtle grid background pattern */}
        <div 
          className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]"
          aria-hidden="true"
        />

        {/* Video stream blank placeholder indicator */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-800/90 text-amber-500 border border-slate-700/80 shadow-inner group-hover:scale-105 transition-transform mb-4">
            <Play className="h-7 w-7 fill-amber-500/80 translate-x-0.5" />
          </div>

          <div className="max-w-md px-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-amber-400/90 mb-1">
              <Video className="h-3.5 w-3.5" />
              <span>Video Presentation Placeholder</span>
            </span>
            <h4 className="text-base sm:text-lg font-semibold text-slate-100 line-clamp-2">
              {title}
            </h4>
            <p className="mt-2 text-xs text-slate-400">
              YouTube embed disabled per reference specification. Blank high-fidelity placeholder maintaining exact 16:9 layout.
            </p>
          </div>
        </div>

        {/* Bottom time and scrubber mock bar */}
        <div className="absolute bottom-0 inset-x-0 bg-slate-950/80 backdrop-blur-xs px-4 py-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/60">
          <span className="font-mono">00:00 / {duration}</span>
          <span className="text-[10px] uppercase tracking-wider text-slate-500">1080p HD Industrial Stream</span>
        </div>
      </div>
    </div>
  );
};
