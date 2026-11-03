import React from 'react';
import { ExternalLink, ShieldCheck } from 'lucide-react';

interface AdPlaceholderProps {
  className?: string;
}

export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ className = '' }) => {
  return (
    <aside
      aria-label="Industry Partner Announcement"
      className={`w-full max-w-6xl mx-auto my-8 px-4 ${className}`}
    >
      <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-gradient-to-r from-slate-50 via-slate-100/80 to-slate-50 p-4 sm:p-5 text-slate-700">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-slate-200 text-slate-700">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-500">
                  Industry Partner Spotlight
                </span>
                <span className="text-slate-300">·</span>
                <span className="text-[10px] text-slate-400">Advertisement Placeholder</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-800">
                National Mechanical & Piping Equipment Directory — Certified Tools, ProPress Rigs & Safety Gear
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-2">
            <span className="text-xs text-slate-500 hidden md:inline">Partner directory slot</span>
            <button
              type="button"
              onClick={() => {}}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 transition-colors shadow-xs"
            >
              <span>Learn More</span>
              <ExternalLink className="h-3.5 w-3.5 text-slate-500" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
