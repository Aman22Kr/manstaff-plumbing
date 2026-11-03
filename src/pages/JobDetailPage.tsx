import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  MapPin,
  Clock,
  DollarSign,
  Bookmark,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  Award,
  HardHat,
  Briefcase
} from 'lucide-react';
import { MOCK_JOBS } from '../data/mockData';
import { toggleSaveJob, isJobSaved } from '../utils/storage';
import { PlumbingJob } from '../types';
import { AdPlaceholder } from '../components/AdPlaceholder';

interface JobDetailPageProps {
  onApplyJobOpen: (job: PlumbingJob) => void;
}

export const JobDetailPage: React.FC<JobDetailPageProps> = ({ onApplyJobOpen }) => {
  const { id } = useParams<{ id: string }>();
  const [, setRerender] = useState(0);

  const job = MOCK_JOBS.find((j) => j.id === id);

  if (!job) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Job Opening Not Found</h2>
        <p className="text-sm text-slate-500 mt-2">
          The requested plumbing position could not be located.
        </p>
        <Link
          to="/jobs"
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Open Positions</span>
        </Link>
      </div>
    );
  }

  const saved = isJobSaved(job.id);

  const handleToggle = () => {
    toggleSaveJob(job.id);
    setRerender((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Breadcrumb Header */}
      <div className="bg-slate-900 text-slate-300 py-3 border-b border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/jobs" className="hover:text-white transition-colors flex items-center gap-1">
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Job Board</span>
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400 capitalize">{job.category}</span>
            <span className="text-slate-600">/</span>
            <span className="text-white font-medium truncate max-w-xs">{job.title}</span>
          </div>

          <button
            type="button"
            onClick={handleToggle}
            className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs transition-colors ${
              saved ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'
            }`}
          >
            <Bookmark className="h-3.5 w-3.5" fill={saved ? 'currentColor' : 'none'} />
            <span>{saved ? 'Saved' : 'Save Position'}</span>
          </button>
        </div>
      </div>

      {/* Main Job Hero Banner */}
      <section className="bg-slate-950 text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="bg-blue-600/30 text-blue-400 px-2.5 py-1 rounded border border-blue-500/30 font-semibold uppercase">
                  {job.tradeSpecialty}
                </span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-400 flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" /> {job.location}
                </span>
                <span className="text-slate-500">·</span>
                <span className="text-amber-400 font-semibold">{job.hoursPerWeek}</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                {job.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 pt-2 font-mono text-xs text-slate-300">
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase">Base Hourly Rate</span>
                  <span className="text-xl font-bold text-white font-mono">{job.payRateHourly}/hr</span>
                </div>
                <div className="h-8 w-px bg-slate-800 hidden sm:block" />
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase">Daily Per Diem (7 Days)</span>
                  <span className="text-xl font-bold text-emerald-400 font-mono">{job.perDiemDaily}</span>
                </div>
                <div className="h-8 w-px bg-slate-800 hidden sm:block" />
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase">Duration & Start</span>
                  <span className="text-white font-bold">{job.duration}</span>
                </div>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => onApplyJobOpen(job)}
                className="px-6 py-3.5 text-sm font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-md transition-colors"
              >
                Apply for this Position
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left 8 cols: Scope, Responsibilities, Requirements */}
            <div className="lg:col-span-8 space-y-8">
              {/* Scope Description */}
              <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-lg font-bold text-slate-900">Project Overview</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {job.description}
                </p>
              </div>

              {/* Responsibilities */}
              <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-lg font-bold text-slate-900">Key Field Responsibilities</h3>
                <div className="space-y-2.5">
                  {job.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements & Licensing */}
              <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-lg font-bold text-slate-900">Requirements & Licensing</h3>
                <div className="space-y-2.5">
                  {job.requirements.map((req, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compensation & Benefits */}
              <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-lg font-bold text-slate-900">Pay, Overtime & Benefits</h3>
                <div className="space-y-2.5">
                  {job.benefits.map((ben, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <DollarSign className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{ben}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 4 cols: Sticky Quick Facts & Apply Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4 sticky top-24">
                <h4 className="text-sm font-bold text-slate-900 uppercase font-mono tracking-wider">
                  Quick Assignment Summary
                </h4>

                <div className="space-y-3 text-xs divide-y divide-slate-100">
                  <div className="pt-2 flex justify-between">
                    <span className="text-slate-500">Job ID</span>
                    <span className="font-mono font-bold text-slate-900">{job.id}</span>
                  </div>
                  <div className="pt-2 flex justify-between">
                    <span className="text-slate-500">Location</span>
                    <span className="font-medium text-slate-900">{job.location}</span>
                  </div>
                  <div className="pt-2 flex justify-between">
                    <span className="text-slate-500">Schedule</span>
                    <span className="font-medium text-slate-900">{job.hoursPerWeek}</span>
                  </div>
                  <div className="pt-2 flex justify-between">
                    <span className="text-slate-500">Overtime</span>
                    <span className="font-medium text-emerald-600">Available (1.5x)</span>
                  </div>
                  <div className="pt-2 flex justify-between">
                    <span className="text-slate-500">Payroll Cycle</span>
                    <span className="font-medium text-slate-900">Every Friday Direct Deposit</span>
                  </div>
                  <div className="pt-2 flex justify-between">
                    <span className="text-slate-500">Per Diem (7-Day)</span>
                    <span className="font-mono font-bold text-emerald-600">{job.perDiemDaily}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={() => onApplyJobOpen(job)}
                    className="w-full py-3 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors"
                  >
                    Apply Now for {job.id}
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2">
                    Takes under 3 minutes · Free license verification
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Reusable Advertisement Placeholder */}
      <AdPlaceholder />
    </div>
  );
};
