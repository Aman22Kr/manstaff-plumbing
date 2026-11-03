import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Bookmark,
  Building2,
  FileText,
  Trash2,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import {
  getSavedJobIds,
  toggleSaveJob,
  getStoredCrewRequests,
  getStoredJobApplications,
  clearAllLocalData
} from '../utils/storage';
import { MOCK_JOBS } from '../data/mockData';
import { PlumbingJob, CrewRequestData, PlumberApplicationData } from '../types';
import { AdPlaceholder } from '../components/AdPlaceholder';

interface DashboardPageProps {
  onApplyJobOpen: (job: PlumbingJob) => void;
  onRequestCrewOpen: () => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({
  onApplyJobOpen,
  onRequestCrewOpen
}) => {
  const [activeTab, setActiveTab] = useState<'saved' | 'crew_requests' | 'applications'>('saved');
  const [savedJobIds, setSavedJobIds] = useState<string[]>([]);
  const [crewRequests, setCrewRequests] = useState<CrewRequestData[]>([]);
  const [applications, setApplications] = useState<PlumberApplicationData[]>([]);

  const loadData = () => {
    setSavedJobIds(getSavedJobIds());
    setCrewRequests(getStoredCrewRequests());
    setApplications(getStoredJobApplications());
  };

  useEffect(() => {
    loadData();
  }, []);

  const savedJobs = MOCK_JOBS.filter((j) => savedJobIds.includes(j.id));

  const handleRemoveSaved = (jobId: string) => {
    toggleSaveJob(jobId);
    loadData();
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear your local storage history?')) {
      clearAllLocalData();
      loadData();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-slate-950 text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                Client-Side Storage Dashboard
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mt-2">
                My Saved Jobs & Dispatch Tickets
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Persisted securely in your browser localStorage. Track your saved positions and staffing inquiries.
              </p>
            </div>

            {(savedJobs.length > 0 || crewRequests.length > 0 || applications.length > 0) && (
              <button
                type="button"
                onClick={handleClearAll}
                className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-rose-300 border border-rose-900/50 hover:bg-rose-950/40 rounded-lg transition-colors"
              >
                <Trash2 className="h-3.5 w-3.5" />
                <span>Clear Local Data</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Tabs */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-3 mb-6 overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab('saved')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'saved'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200'
              }`}
            >
              Saved Jobs ({savedJobs.length})
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('crew_requests')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'crew_requests'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200'
              }`}
            >
              Staffing Crew Requests ({crewRequests.length})
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('applications')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'applications'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200'
              }`}
            >
              My Applications ({applications.length})
            </button>
          </div>

          {/* Tab 1: Saved Jobs */}
          {activeTab === 'saved' && (
            <div>
              {savedJobs.length === 0 ? (
                <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center space-y-3">
                  <Bookmark className="h-8 w-8 text-slate-300 mx-auto" />
                  <h3 className="text-base font-bold text-slate-900">No Saved Positions Yet</h3>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    Click the bookmark icon on any job posting in the job board to save it for quick reference here.
                  </p>
                  <Link
                    to="/jobs"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 mt-2"
                  >
                    <span>Browse Commercial Job Board</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {savedJobs.map((job) => (
                    <div
                      key={job.id}
                      className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col justify-between shadow-xs"
                    >
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <span className="text-[11px] font-mono text-slate-500">{job.location}</span>
                            <h4 className="text-base font-bold text-slate-900 mt-0.5 line-clamp-1">{job.title}</h4>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemoveSaved(job.id)}
                            className="text-slate-400 hover:text-rose-600 p-1"
                            title="Remove from saved"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 flex items-center justify-between text-xs font-mono">
                          <span className="font-bold text-slate-900">{job.payRateHourly}/hr</span>
                          <span className="text-emerald-600 font-semibold">{job.perDiemDaily}</span>
                        </div>
                      </div>

                      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                        <Link
                          to={`/jobs/${job.id}`}
                          className="text-xs font-semibold text-slate-600 hover:text-slate-900"
                        >
                          View Details
                        </Link>
                        <button
                          type="button"
                          onClick={() => onApplyJobOpen(job)}
                          className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Crew Requests */}
          {activeTab === 'crew_requests' && (
            <div>
              {crewRequests.length === 0 ? (
                <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center space-y-3">
                  <Building2 className="h-8 w-8 text-slate-300 mx-auto" />
                  <h3 className="text-base font-bold text-slate-900">No Crew Staffing Requests Logged</h3>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    When you submit a request for commercial journeymen or industrial pipefitters, your tracking ticket will appear here.
                  </p>
                  <button
                    type="button"
                    onClick={onRequestCrewOpen}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 mt-2"
                  >
                    <span>Request a Plumbing Crew</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {crewRequests.map((req) => (
                    <div
                      key={req.id}
                      className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <span className="font-mono font-bold text-blue-600 text-sm">{req.id}</span>
                          <span className="text-slate-300">·</span>
                          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                            {req.status}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-slate-900">
                          {req.numberOfWorkers}x {req.tradeRequired}
                        </h4>
                        <div className="text-xs text-slate-500 flex flex-wrap gap-x-4 gap-y-1">
                          <span>Jobsite: {req.jobLocationCity}, {req.jobLocationState}</span>
                          <span>Company: {req.companyName}</span>
                          <span>Timeline: {req.startDate}</span>
                          <span>Submitted: {new Date(req.submittedAt).toLocaleDateString()}</span>
                        </div>
                      </div>

                      <div className="text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100 max-w-xs">
                        <span className="font-semibold text-slate-800 block">Dispatch Status:</span>
                        <span>Logged in 48h emergency dispatch queue. Dedicated account director reviewing candidate cards.</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Tab 3: Applications */}
          {activeTab === 'applications' && (
            <div>
              {applications.length === 0 ? (
                <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center space-y-3">
                  <FileText className="h-8 w-8 text-slate-300 mx-auto" />
                  <h3 className="text-base font-bold text-slate-900">No Applications Submitted</h3>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    When you register as a journeyman or apply for an open commercial project, your application history will be tracked here.
                  </p>
                  <Link
                    to="/for-plumbers"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 mt-2"
                  >
                    <span>Register as a Craftsman</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {applications.map((app) => (
                    <div
                      key={app.id}
                      className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <span className="font-mono font-bold text-blue-600 text-sm">{app.id}</span>
                          <span className="text-slate-300">·</span>
                          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                            {app.status}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-slate-900">
                          {app.jobTitle || 'General Journeyman Roster'}
                        </h4>
                        <div className="text-xs text-slate-500 flex flex-wrap gap-x-4 gap-y-1">
                          <span>Applicant: {app.fullName}</span>
                          <span>License: {app.currentLicense}</span>
                          <span>Experience: {app.yearsExperience} yrs</span>
                          <span>Travel: {app.willingToTravel ? 'Yes (Per Diem)' : 'Local'}</span>
                        </div>
                      </div>

                      <div className="text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100 max-w-xs">
                        <span className="font-semibold text-slate-800 block">Recruiting Status:</span>
                        <span>State board license validation initiated. Phone screening coordinator assigned.</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Compact Reusable Advertisement Placeholder */}
      <AdPlaceholder />
    </div>
  );
};
