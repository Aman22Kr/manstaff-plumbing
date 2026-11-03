import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wrench, ShieldCheck, CheckCircle2, ChevronRight, HardHat, FileText } from 'lucide-react';
import { TRADE_SPECIALTIES } from '../data/mockData';
import { TradeCategory } from '../types';
import { AdPlaceholder } from '../components/AdPlaceholder';

interface TradesPageProps {
  onRequestCrewOpen: (trade?: string) => void;
}

export const TradesPage: React.FC<TradesPageProps> = ({ onRequestCrewOpen }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Specialties' },
    { id: 'commercial', label: 'Commercial DWV & Water' },
    { id: 'industrial', label: 'Industrial & Steam' },
    { id: 'healthcare', label: 'Medical Gas & Cleanroom' },
    { id: 'management', label: 'Master Superintendents' },
    { id: 'fire-protection', label: 'Fire Protection' },
    { id: 'civil-utilities', label: 'Civil Underground' },
  ];

  const filteredTrades = TRADE_SPECIALTIES.filter((t) => {
    if (selectedCategory === 'all') return true;
    return t.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-slate-950 text-white py-14 sm:py-18 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 bg-slate-900 px-3 py-1 rounded border border-slate-800">
              Technical Disciplines
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Plumbing & Mechanical Trades Directory
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore specialized trade disciplines staffed by Manstaff Plumbing. From ASME power piping and NFPA 99 medical gas to high-density commercial rough-ins, our craftsmen arrive verified and certified.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-200/80 rounded-xl mb-10 max-w-4xl">
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  selectedCategory === c.id
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Trade Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTrades.map((trade) => (
              <div
                key={trade.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                    <img
                      src={trade.image}
                      alt={trade.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-xs text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded">
                      {trade.demandLevel}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <span className="text-[11px] font-mono uppercase text-slate-500 font-semibold">
                        {trade.category}
                      </span>
                      <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mt-0.5">
                        <Link to={`/trades/${trade.slug}`}>
                          {trade.title}
                        </Link>
                      </h2>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {trade.shortDescription}
                    </p>

                    {/* Certifications preview */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                        Key Certifications:
                      </span>
                      <div className="space-y-1 text-slate-700">
                        {trade.certificationsRequired.slice(0, 2).map((cert) => (
                          <div key={cert} className="flex items-center gap-1.5 text-[11px]">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                            <span className="truncate">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-3 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase">Hourly Wage</div>
                    <div className="text-xs font-mono font-bold text-slate-900">{trade.payRangeHourly}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onRequestCrewOpen(trade.title)}
                      className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                    >
                      Request Crew
                    </button>
                    <Link
                      to={`/trades/${trade.slug}`}
                      className="p-1.5 text-slate-500 hover:text-slate-900 rounded-md hover:bg-slate-200"
                      title="View trade specification"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compact Reusable Advertisement Placeholder */}
      <AdPlaceholder />
    </div>
  );
};
