import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Home, Search, Phone, ArrowLeft } from 'lucide-react';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div className="flex-1 flex items-center justify-center p-6 py-20">
        <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-md text-center space-y-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-amber-400 mx-auto shadow-sm">
            <Wrench className="h-8 w-8 -rotate-45" />
          </div>

          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-wider">
              Error 404 · Pipe Disconnected
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Page Not Found
            </h1>
            <p className="text-xs text-slate-500 leading-relaxed pt-1">
              The page or resource you are looking for has been relocated or does not exist. Use the links below to resume your mechanical staffing search.
            </p>
          </div>

          <div className="pt-2 space-y-2">
            <Link
              to="/"
              className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Home className="h-4 w-4" />
              <span>Return to Homepage</span>
            </Link>

            <Link
              to="/jobs"
              className="w-full py-2.5 px-4 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Search className="h-4 w-4" />
              <span>Explore Open Plumber Positions</span>
            </Link>

            <Link
              to="/contact"
              className="w-full py-2.5 px-4 text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="h-4 w-4 text-slate-400" />
              <span>Contact 24/7 Dispatch Desk</span>
            </Link>
          </div>
        </div>
      </div>

      <AdPlaceholder />
    </div>
  );
};
