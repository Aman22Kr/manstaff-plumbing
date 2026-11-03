import React from 'react';
import {
  Wrench,
  ShieldCheck,
  Award,
  Users,
  Building2,
  HardHat,
  Globe,
  CheckCircle2,
  Phone
} from 'lucide-react';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 bg-slate-900 px-3 py-1 rounded border border-slate-800">
              Our Heritage & Mission
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Elevating the Commercial Plumbing Trades
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Born from the European journeyman tradition of mobile master craftsmanship, Manstaff Plumbing bridges the critical skilled labor gap for North America's most demanding commercial and industrial mechanical contractors.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-4 text-sm text-slate-700 leading-relaxed">
              <span className="text-xs font-bold font-mono uppercase tracking-wider text-blue-600">
                The Journeyman Ethos
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Craftsmanship is Built on Trust and Rigor
              </h2>
              <p>
                In the European trade tradition, a "Journeyman" (Wandergeselle) is a certified craftsman who travels to contribute specialized skills to monumental construction projects.
              </p>
              <p>
                Manstaff Plumbing applied this time-tested philosophy to modern American mechanical contracting. When commercial construction boomed with multi-billion-dollar semiconductor fabs, hospital surgical wings, and residential towers, local labor pools became dangerously depleted.
              </p>
              <p>
                Rather than supplying untrained laborers, we established a dedicated network of licensed journeyman plumbers, certified ASME steamfitters, and ASSE 6010 medical gas braziers ready for immediate cross-state deployment with per diem and comprehensive benefits.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4 border-t border-slate-100 text-xs font-mono">
                <div>
                  <span className="text-slate-400 uppercase block text-[10px]">Founded On</span>
                  <span className="font-bold text-slate-900 text-sm">European Craft Traditions</span>
                </div>
                <div>
                  <span className="text-slate-400 uppercase block text-[10px]">Active Network</span>
                  <span className="font-bold text-slate-900 text-sm">1,400+ Verified Plumbers</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
                <img
                  src="/src/assets/images/hero_team_superintendent_1793747410406.jpg"
                  alt="Manstaff superintendent reviewing mechanical drawings on jobsite"
                  className="w-full h-auto object-cover aspect-16/10"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 bg-slate-900 text-white text-xs">
                  <span className="font-mono text-amber-400 text-[10px] uppercase block">Jobsite Leadership</span>
                  <p className="font-medium text-slate-200 mt-0.5">
                    Field superintendent reviewing isometric BIM drawings with local inspector.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
              Guiding Principles
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight mt-1">
              Our Core Operating Commitments
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-3">
              <div className="h-10 w-10 rounded-lg bg-blue-600/30 text-blue-400 flex items-center justify-center font-bold">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white">Skill Over Warm Bodies</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We never dispatch uncredentialed workers to mechanical jobs. Every tradesperson is verified with their home state licensing board before being mobilized.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-3">
              <div className="h-10 w-10 rounded-lg bg-emerald-600/30 text-emerald-400 flex items-center justify-center font-bold">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white">Uncompromising Safety</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Our EMR rating of 0.68 reflects a safety-first jobsite culture. OSHA 10/30 training is mandatory for all active field plumbers.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-3">
              <div className="h-10 w-10 rounded-lg bg-amber-600/30 text-amber-400 flex items-center justify-center font-bold">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white">Fair Trade Compensation</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We respect our craftsmen with industry-leading hourly rates, reliable per diem, medical coverage, and guaranteed direct deposit every Friday morning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Reusable Advertisement Placeholder */}
      <AdPlaceholder />
    </div>
  );
};
