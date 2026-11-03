import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Wrench,
  CheckCircle2,
  ShieldCheck,
  Award,
  ArrowLeft,
  ArrowRight,
  HardHat,
  FileCheck2,
  Clock,
  Layers,
  Sparkles
} from 'lucide-react';
import { TRADE_SPECIALTIES, MOCK_JOBS } from '../data/mockData';
import { AdPlaceholder } from '../components/AdPlaceholder';

interface TradeDetailPageProps {
  onRequestCrewOpen: (trade?: string) => void;
  onApplyJobOpen: () => void;
}

export const TradeDetailPage: React.FC<TradeDetailPageProps> = ({
  onRequestCrewOpen,
  onApplyJobOpen
}) => {
  const { slug } = useParams<{ slug: string }>();
  const trade = TRADE_SPECIALTIES.find((t) => t.slug === slug);

  if (!trade) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Trade Specialty Not Found</h2>
        <p className="text-sm text-slate-500 mt-2">
          The requested trade specification does not exist in our directory.
        </p>
        <Link
          to="/trades"
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Return to Trades Directory</span>
        </Link>
      </div>
    );
  }

  const relatedJobs = MOCK_JOBS.filter((j) => j.tradeSpecialty === trade.title || j.category === trade.category);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Breadcrumb Header */}
      <div className="bg-slate-900 text-slate-300 py-3 border-b border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link to="/trades" className="hover:text-white transition-colors">
            Trades Directory
          </Link>
          <span className="text-slate-600">/</span>
          <span className="text-slate-400 capitalize">{trade.category}</span>
          <span className="text-slate-600">/</span>
          <span className="text-white font-medium">{trade.title}</span>
        </div>
      </div>

      {/* Hero section for trade */}
      <section className="bg-slate-950 text-white py-14 sm:py-18 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 bg-slate-900 px-3 py-1 rounded border border-slate-800">
                <span>{trade.category} DISCIPLINE</span>
                <span className="text-slate-600">·</span>
                <span>{trade.demandLevel}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {trade.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                {trade.fullDescription}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-300 font-mono">
                <div>
                  <span className="text-slate-500 uppercase block text-[10px]">Average Base Rate</span>
                  <span className="text-amber-400 font-bold text-base">{trade.payRangeHourly}</span>
                </div>
                <div className="h-8 w-px bg-slate-800 hidden sm:block" />
                <div>
                  <span className="text-slate-500 uppercase block text-[10px]">Mobilization SLA</span>
                  <span className="text-white font-bold text-base">48 Hours</span>
                </div>
                <div className="h-8 w-px bg-slate-800 hidden sm:block" />
                <div>
                  <span className="text-slate-500 uppercase block text-[10px]">Warranty</span>
                  <span className="text-emerald-400 font-bold text-base">8-Hr Workmanship</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => onRequestCrewOpen(trade.title)}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-xs"
                >
                  Request a {trade.title} Crew
                </button>
                <button
                  type="button"
                  onClick={onApplyJobOpen}
                  className="px-5 py-2.5 text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
                >
                  Apply as a Craftsman in this Trade
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
                <img
                  src={trade.image}
                  alt={trade.title}
                  className="w-full h-auto object-cover aspect-4/3"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Spec Details */}
      <section className="py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Certifications & Code Standards */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base">
                <Award className="h-5 w-5 text-amber-500" />
                <h3>Certifications & Code Rigor</h3>
              </div>
              <p className="text-xs text-slate-500">
                Credentials verified directly through state licensing databases and accredited training centers prior to deployment.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100">
                {trade.certificationsRequired.map((cert) => (
                  <div key={cert} className="flex items-start gap-2 text-xs text-slate-800">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{cert}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-[11px] font-mono uppercase font-semibold text-slate-500 mb-2">
                  Enforced Code Standards:
                </h4>
                <div className="space-y-1 text-xs text-slate-600 font-mono">
                  {trade.codeStandards.map((code) => (
                    <div key={code} className="bg-slate-50 px-2.5 py-1 rounded border border-slate-100">
                      {code}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Typical Projects */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base">
                <Layers className="h-5 w-5 text-blue-600" />
                <h3>Typical Project Deployments</h3>
              </div>
              <p className="text-xs text-slate-500">
                Standard facility and commercial building typologies staffed for this discipline.
              </p>
              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                {trade.typicalProjects.map((proj) => (
                  <div key={proj} className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs text-slate-800 font-medium">
                    {proj}
                  </div>
                ))}
              </div>
            </div>

            {/* Required Tool Loadout */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base">
                <Wrench className="h-5 w-5 text-slate-700" />
                <h3>Required Tool Loadout</h3>
              </div>
              <p className="text-xs text-slate-500">
                Tradesmen arrive on site equipped with professional tools and standard PPE to begin rough-in immediately.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100">
                {trade.toolsProvidedOrRequired.map((tool) => (
                  <div key={tool} className="flex items-start gap-2 text-xs text-slate-800">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related open positions for this trade */}
          {relatedJobs.length > 0 && (
            <div className="mt-14 pt-12 border-t border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-mono uppercase text-blue-600 font-bold">Active Demand</span>
                  <h3 className="text-xl font-bold text-slate-900">Open Positions in this Discipline</h3>
                </div>
                <Link to="/jobs" className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  <span>View all jobs</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedJobs.slice(0, 2).map((job) => (
                  <div key={job.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{job.title}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{job.location} · {job.payRateHourly}/hr</p>
                    </div>
                    <Link
                      to={`/jobs/${job.id}`}
                      className="px-3 py-1.5 text-xs font-semibold text-blue-600 border border-blue-200 rounded-md hover:bg-blue-50"
                    >
                      View Job
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Compact Reusable Advertisement Placeholder */}
      <AdPlaceholder />
    </div>
  );
};
