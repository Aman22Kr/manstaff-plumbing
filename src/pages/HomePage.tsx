import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Wrench,
  ShieldCheck,
  CheckCircle,
  Clock,
  MapPin,
  DollarSign,
  ArrowRight,
  Bookmark,
  Users,
  HardHat,
  Award,
  Flame,
  FileCheck2,
  ChevronRight,
  FlameKindling
} from 'lucide-react';
import { TRADE_SPECIALTIES, MOCK_JOBS, TESTIMONIALS } from '../data/mockData';
import { toggleSaveJob, isJobSaved } from '../utils/storage';
import { YouTubePlaceholder } from '../components/YouTubePlaceholder';
import { CostCalculator } from '../components/CostCalculator';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { PlumbingJob } from '../types';

interface HomePageProps {
  onRequestCrewOpen: () => void;
  onApplyJobOpen: (job?: PlumbingJob) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onRequestCrewOpen, onApplyJobOpen }) => {
  const [jobCategoryFilter, setJobCategoryFilter] = useState<'all' | 'commercial' | 'industrial' | 'healthcare'>('all');
  const [, setRerender] = useState(0);

  const handleToggleSave = (jobId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleSaveJob(jobId);
    setRerender((prev) => prev + 1);
  };

  const filteredJobs = MOCK_JOBS.filter((j) => {
    if (jobCategoryFilter === 'all') return true;
    return j.category === jobCategoryFilter;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-24">
        {/* Subtle radial ambient gradient */}
        <div 
          className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]"
          aria-hidden="true"
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Proposition */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-amber-400 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-md">
                <HardHat className="h-4 w-4" />
                <span>Premier Commercial & Industrial Plumbing Staffing</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-balance leading-tight">
                Elite Journeyman Plumbers & Pipefitters on Demand.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Manstaff Plumbing mobilizes vetted, state-licensed commercial journeymen, industrial steamfitters, and ASSE 6010 medical gas braziers nationwide in 48 hours. Keep your project on the critical path with zero inspection delays.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={onRequestCrewOpen}
                  className="px-6 py-3.5 text-sm font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 active:scale-98 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request a Plumbing Crew</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <Link
                  to="/jobs"
                  className="px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700 rounded-lg hover:bg-slate-800 hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <span>Find Plumber Positions</span>
                  <Wrench className="h-4 w-4 text-amber-400" />
                </Link>
              </div>

              {/* Trust Subtext */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  <span>100% State Board Verified</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-blue-400" />
                  <span>8-Hour Workmanship Guarantee</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="h-4 w-4 text-amber-400" />
                  <span>OSHA 30 Safety Program</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Impact Visual Asset */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
                <img
                  src="/src/assets/images/hero_plumbing_journeyman_1793747409684.jpg"
                  alt="Commercial journeyman plumbers installing copper piping manifolds on jobsite"
                  className="w-full h-auto object-cover aspect-4/3 sm:aspect-16/9 lg:aspect-4/3 group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Floating caption card */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-xs text-slate-200">
                  <div className="flex items-center justify-between font-mono text-[11px] text-amber-400 mb-1">
                    <span>AUSTIN COMMERCIAL HIGH-RISE</span>
                    <span>12-MAN CREW DEPLOYED</span>
                  </div>
                  <p className="font-medium text-white">
                    Domestic water manifold rough-in & high-density cast iron DWV risers installed with zero leak callbacks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Proof Strip */}
      <section className="bg-white border-y border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            <div className="pt-4 sm:pt-0 sm:px-4 text-center sm:text-left">
              <div className="text-3xl font-extrabold text-slate-950 font-mono tracking-tight">
                1,420<span className="text-blue-600">+</span>
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">
                Journeymen Placed
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Across 28 states & international projects
              </p>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-4 text-center sm:text-left">
              <div className="text-3xl font-extrabold text-slate-950 font-mono tracking-tight">
                48<span className="text-blue-600">h</span>
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">
                Rapid Crew Dispatch
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Emergency surge crews on stand-by
              </p>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-4 text-center sm:text-left">
              <div className="text-3xl font-extrabold text-slate-950 font-mono tracking-tight">
                98.4<span className="text-blue-600">%</span>
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">
                Pass First Inspection
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Rigorous code & isometric verification
              </p>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-4 text-center sm:text-left">
              <div className="text-3xl font-extrabold text-slate-950 font-mono tracking-tight text-emerald-600">
                0.68
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">
                EMR Safety Rating
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Far superior to national trade average
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Pathway: How It Works */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold font-mono uppercase tracking-wider text-blue-600">
              Streamlined Staffing Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1 text-balance">
              Engineered for General Contractors & Master Craftsmen
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3">
              Whether you are an MEP mechanical contractor racing an inspection deadline or a licensed journeyman seeking top-tier hourly pay with per diem, Manstaff streamlines the process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pathway 1: For Contractors */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-semibold text-blue-600 uppercase">For Employers</span>
                      <h3 className="text-xl font-bold text-slate-900">Hire a Plumbing Crew</h3>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">4-Step Model</span>
                </div>

                <div className="space-y-4 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white text-xs font-mono font-bold">1</span>
                    <div>
                      <strong className="text-slate-900">Define Scope & Trade:</strong> Specify crew size, license requirements, and timeline using our instant request form.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white text-xs font-mono font-bold">2</span>
                    <div>
                      <strong className="text-slate-900">Primary Source License Verification:</strong> We verify state licenses, OSHA cards, and safety records prior to dispatch.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white text-xs font-mono font-bold">3</span>
                    <div>
                      <strong className="text-slate-900">Mobilization in 48 Hours:</strong> Plumbers arrive with hand tools, PPE, and ready to install on day one.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white text-xs font-mono font-bold">4</span>
                    <div>
                      <strong className="text-slate-900">8-Hour Workmanship Guarantee:</strong> If any tradesperson does not meet your bar on shift 1, you pay nothing.
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100 mt-6">
                <button
                  type="button"
                  onClick={onRequestCrewOpen}
                  className="w-full py-3 px-4 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Request Crew Proposal</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Pathway 2: For Plumbers */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-800">
                      <Wrench className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-semibold text-amber-700 uppercase">For Tradespeople</span>
                      <h3 className="text-xl font-bold text-slate-900">Join Manstaff Roster</h3>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">High Earning</span>
                </div>

                <div className="space-y-4 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-slate-950 text-xs font-mono font-bold">1</span>
                    <div>
                      <strong className="text-slate-900">Register Credentials:</strong> Upload your license, certifications, and project experience in 3 minutes.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-slate-950 text-xs font-mono font-bold">2</span>
                    <div>
                      <strong className="text-slate-900">High-Hour Commercial Jobs:</strong> Access 50-60 hour projects paying $42-$62/hr + daily per diem.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-slate-950 text-xs font-mono font-bold">3</span>
                    <div>
                      <strong className="text-slate-900">Guaranteed Weekly Direct Deposit:</strong> On-time payroll every Friday with full transparency and W-2 withholdings.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-slate-950 text-xs font-mono font-bold">4</span>
                    <div>
                      <strong className="text-slate-900">Continuous Pipeline:</strong> Transition from one major project to the next without downtime or layoff gaps.
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100 mt-6">
                <button
                  type="button"
                  onClick={() => onApplyJobOpen()}
                  className="w-full py-3 px-4 text-sm font-semibold text-slate-900 bg-amber-400 hover:bg-amber-500 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Apply as a Journeyman</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Bento Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold font-mono uppercase tracking-wider text-blue-600">
                Mechanical Trades Index
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                Plumbing & Piping Specialties
              </h2>
            </div>
            <Link
              to="/trades"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              <span>Explore all trade specifications</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRADE_SPECIALTIES.slice(0, 6).map((trade) => (
              <div
                key={trade.id}
                className="group rounded-xl border border-slate-200 bg-white overflow-hidden hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                    <img
                      src={trade.image}
                      alt={trade.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-mono px-2 py-0.5 rounded font-medium">
                      {trade.demandLevel}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="text-xs font-mono text-slate-500 uppercase tracking-wide">
                      {trade.category}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {trade.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {trade.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="font-mono font-semibold text-slate-900">
                    {trade.payRangeHourly}
                  </div>
                  <Link
                    to={`/trades/${trade.slug}`}
                    className="font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    <span>View Specs</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Open Jobs with Live Filter Tabs */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold font-mono uppercase tracking-wider text-blue-600">
                Active Jobsite Openings
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                Featured Commercial Positions
              </h2>
            </div>

            {/* Interactive Filter Tabs (Buttons with click handlers per frontend-design constitution) */}
            <div className="flex items-center gap-1 p-1 bg-slate-200 rounded-lg self-start md:self-auto">
              <button
                type="button"
                onClick={() => setJobCategoryFilter('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  jobCategoryFilter === 'all'
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Openings
              </button>
              <button
                type="button"
                onClick={() => setJobCategoryFilter('commercial')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  jobCategoryFilter === 'commercial'
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Commercial
              </button>
              <button
                type="button"
                onClick={() => setJobCategoryFilter('industrial')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  jobCategoryFilter === 'industrial'
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Industrial
              </button>
              <button
                type="button"
                onClick={() => setJobCategoryFilter('healthcare')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  jobCategoryFilter === 'healthcare'
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Medical Gas
              </button>
            </div>
          </div>

          {/* Job Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.slice(0, 6).map((job) => {
              const saved = isJobSaved(job.id);
              return (
                <div
                  key={job.id}
                  className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-sm transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                          <MapPin className="h-3.5 w-3.5 text-slate-400" />
                          <span>{job.location}</span>
                          <span aria-hidden="true">·</span>
                          <span>{job.hoursPerWeek}</span>
                        </div>
                        <Link
                          to={`/jobs/${job.id}`}
                          className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors line-clamp-1"
                        >
                          {job.title}
                        </Link>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => handleToggleSave(job.id, e)}
                        className={`p-1.5 rounded-md border transition-colors ${
                          saved
                            ? 'bg-amber-50 border-amber-200 text-amber-600'
                            : 'border-slate-200 text-slate-400 hover:text-slate-700'
                        }`}
                        title={saved ? 'Remove from saved' : 'Save job'}
                      >
                        <Bookmark className="h-4 w-4" fill={saved ? 'currentColor' : 'none'} />
                      </button>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="bg-slate-50 rounded-lg p-3 border border-slate-100 flex items-center justify-between text-xs">
                      <div>
                        <div className="text-[10px] uppercase font-mono text-slate-500">Hourly Wage</div>
                        <div className="font-mono font-bold text-slate-900">{job.payRateHourly}/hr</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] uppercase font-mono text-slate-500">Per Diem</div>
                        <div className="font-mono font-bold text-emerald-600">{job.perDiemDaily}</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <Link
                      to={`/jobs/${job.id}`}
                      className="text-xs font-semibold text-slate-600 hover:text-slate-900"
                    >
                      View Details
                    </Link>
                    <button
                      type="button"
                      onClick={() => onApplyJobOpen(job)}
                      className="px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors cursor-pointer"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/jobs"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-800 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 shadow-xs"
            >
              <span>View All Open Commercial Positions ({MOCK_JOBS.length})</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Cost Calculator Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold font-mono uppercase tracking-wider text-blue-600">
              Budget Planning & Transparency
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Estimate Your Plumbing Crew Rates
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Configure trade discipline, crew headcount, and project duration for instant transparent billing estimates.
            </p>
          </div>

          <CostCalculator
            onRequestQuoteWithDetails={() => {
              onRequestCrewOpen();
            }}
          />
        </div>
      </section>

      {/* Video Case Study & Media Area (with compliant YouTube blank placeholder) */}
      <section className="py-16 sm:py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
                Field Dispatch Case Study
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                How Manstaff Mobilized a 40-Journeyman Mechanical Crew in 72 Hours.
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                When a major Midwestern hospital expansion risked millions in liquidated damages after an MEP subcontractor collapsed, Manstaff deployed qualified ASSE 6010 braziers and journeymen within 3 days.
              </p>
              <div className="pt-2 space-y-2 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>40 certified journeymen & 2 superintendents deployed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Zero OSHA recordables over 9-month project run</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Hospital surgical suites commissioned on schedule</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <YouTubePlaceholder
                title="Mobilizing 40 Certified Journeymen Plumbers for Commercial Medical Center Expansion"
                duration="5:14"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold font-mono uppercase tracking-wider text-blue-600">
              Verified Industry Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Trusted by Leading Contractors & Craftsmen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((test) => (
              <div
                key={test.id}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider mb-3">
                    {test.metric}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    "{test.quote}"
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100">
                  <div className="font-bold text-sm text-slate-900">{test.author}</div>
                  <div className="text-xs text-slate-500">{test.role} · {test.organization}</div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">{test.location}</div>
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
