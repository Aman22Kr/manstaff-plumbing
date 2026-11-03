import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  MapPin,
  Clock,
  DollarSign,
  Bookmark,
  SlidersHorizontal,
  Flame,
  CheckCircle2,
  Calendar,
  X
} from 'lucide-react';
import { MOCK_JOBS } from '../data/mockData';
import { toggleSaveJob, isJobSaved, addRecentSearch, getRecentSearches } from '../utils/storage';
import { PlumbingJob, TradeCategory } from '../types';
import { AdPlaceholder } from '../components/AdPlaceholder';

interface JobsPageProps {
  onApplyJobOpen: (job: PlumbingJob) => void;
}

export const JobsPage: React.FC<JobsPageProps> = ({ onApplyJobOpen }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedState, setSelectedState] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'pay' | 'urgent'>('newest');
  const [, setRerender] = useState(0);

  const statesAvailable = useMemo(() => {
    const set = new Set<string>();
    MOCK_JOBS.forEach((j) => set.add(j.state));
    return Array.from(set).sort();
  }, []);

  const handleToggleSave = (jobId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleSaveJob(jobId);
    setRerender((prev) => prev + 1);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      addRecentSearch(searchQuery.trim());
    }
  };

  const filteredJobs = useMemo(() => {
    return MOCK_JOBS.filter((job) => {
      // Query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = job.title.toLowerCase().includes(q);
        const matchesLoc = job.location.toLowerCase().includes(q);
        const matchesTrade = job.tradeSpecialty.toLowerCase().includes(q);
        const matchesDesc = job.description.toLowerCase().includes(q);
        if (!matchesTitle && !matchesLoc && !matchesTrade && !matchesDesc) {
          return false;
        }
      }

      // Category filter
      if (selectedCategory !== 'all' && job.category !== selectedCategory) {
        return false;
      }

      // State filter
      if (selectedState !== 'all' && job.state !== selectedState) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'urgent') {
        return (b.urgent ? 1 : 0) - (a.urgent ? 1 : 0);
      }
      if (sortBy === 'pay') {
        const extractNum = (s: string) => {
          const match = s.match(/\$(\d+)/);
          return match ? parseInt(match[1], 10) : 0;
        };
        return extractNum(b.payRateHourly) - extractNum(a.payRateHourly);
      }
      return 0; // Default order
    });
  }, [searchQuery, selectedCategory, selectedState, sortBy]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedState('all');
    setSortBy('newest');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-slate-950 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 bg-slate-900 px-3 py-1 rounded border border-slate-800">
              Commercial Trades Dispatch
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Journeyman Plumbing Job Board
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore high-hour commercial rough-in, industrial steamfitting, and healthcare medgas projects. All jobs feature guaranteed weekly direct deposit and non-taxable daily per diem for traveling tradesmen.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters Bar */}
      <section className="sticky top-18 z-30 bg-white border-b border-slate-200 shadow-xs py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by job title, trade, city, or code (e.g. MedGas, Austin, Steamfitter)..."
                className="w-full pl-10 pr-8 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-700"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Specialty dropdown */}
            <div className="w-full md:w-48">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="all">All Disciplines</option>
                <option value="commercial">Commercial</option>
                <option value="industrial">Industrial</option>
                <option value="healthcare">Medical Gas</option>
                <option value="management">Superintendent</option>
                <option value="fire-protection">Fire Protection</option>
                <option value="civil-utilities">Civil Utilities</option>
              </select>
            </div>

            {/* State filter */}
            <div className="w-full md:w-36">
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="all">All States</option>
                {statesAvailable.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="w-full md:w-40">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="newest">Sort: Newest</option>
                <option value="pay">Sort: Highest Pay</option>
                <option value="urgent">Sort: Urgent Surge</option>
              </select>
            </div>
          </form>
        </div>
      </section>

      {/* Main Results */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6 text-xs text-slate-500">
            <div>
              Showing <strong className="text-slate-900 font-mono">{filteredJobs.length}</strong> active openings
              {(searchQuery || selectedCategory !== 'all' || selectedState !== 'all') && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="ml-3 text-blue-600 hover:underline font-semibold"
                >
                  Clear all filters
                </button>
              )}
            </div>
            <div className="hidden sm:block">
              Per diem provided for qualifying non-local tradesmen
            </div>
          </div>

          {filteredJobs.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">No Matching Positions Found</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                No active projects match your specific filter criteria. You can clear filters or register with our general talent roster to be alerted when matching jobs open.
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => {
                const saved = isJobSaved(job.id);
                return (
                  <div
                    key={job.id}
                    className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-sm transition-all"
                  >
                    <div className="space-y-4">
                      {/* Top row */}
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                            <MapPin className="h-3.5 w-3.5 text-slate-400" />
                            <span>{job.location}</span>
                            <span aria-hidden="true">·</span>
                            <span>{job.hoursPerWeek}</span>
                          </div>
                          <Link
                            to={`/jobs/${job.id}`}
                            className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors mt-1 block line-clamp-1"
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

                      {/* Pay & Per Diem Box */}
                      <div className="bg-slate-50 rounded-lg p-3 border border-slate-100 grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <div className="text-[10px] font-mono uppercase text-slate-500">Hourly Wage</div>
                          <div className="font-mono font-bold text-slate-900 text-sm">
                            {job.payRateHourly}
                            <span className="text-[10px] text-slate-500 font-normal">/hr</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] font-mono uppercase text-slate-500">Per Diem</div>
                          <div className="font-mono font-bold text-emerald-600 text-sm">
                            {job.perDiemDaily}
                          </div>
                        </div>
                      </div>

                      {/* Description preview */}
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {job.description}
                      </p>

                      {/* Details pills / tags */}
                      <div className="space-y-1.5 text-xs text-slate-500 border-t border-slate-100 pt-3">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-slate-400" />
                          <span>Start: <strong className="text-slate-700">{job.startDate}</strong></span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5 text-slate-400" />
                          <span>Duration: <strong className="text-slate-700">{job.duration}</strong></span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom actions */}
                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                      <Link
                        to={`/jobs/${job.id}`}
                        className="text-xs font-semibold text-slate-600 hover:text-slate-900"
                      >
                        Job Details
                      </Link>
                      <button
                        type="button"
                        onClick={() => onApplyJobOpen(job)}
                        className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors cursor-pointer"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Compact Reusable Advertisement Placeholder */}
      <AdPlaceholder />
    </div>
  );
};
