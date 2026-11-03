import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Wrench, Menu, X, Phone, Bookmark, ShieldAlert, ChevronRight } from 'lucide-react';
import { getSavedJobIds } from '../utils/storage';

interface NavbarProps {
  onRequestCrewOpen: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestCrewOpen }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [savedCount, setSavedCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      setSavedCount(getSavedJobIds().length);
    };
    updateCount();
    window.addEventListener('storage', updateCount);
    // Poll lightly for changes within same tab
    const interval = setInterval(updateCount, 1500);
    return () => {
      window.removeEventListener('storage', updateCount);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { name: 'For Employers', path: '/for-employers' },
    { name: 'Trades & Specialties', path: '/trades' },
    { name: 'Plumber Jobs', path: '/jobs' },
    { name: 'Pricing & Rates', path: '/pricing' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Utility Dispatch Top Strip */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-medium text-amber-400">
              <ShieldAlert className="h-3.5 w-3.5" />
              <span>Rapid Crew Dispatch</span>
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-slate-400 hidden sm:inline">
              Commercial & Industrial Certified Plumbers Mobilized in 48h
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Phone className="h-3 w-3 text-amber-400" />
              <span className="font-mono font-medium">(800) 555-PLUMB</span>
            </Link>
            <span className="text-slate-700">|</span>
            <Link
              to="/my-dashboard"
              className="flex items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors"
              title="View your saved jobs & requests"
            >
              <Bookmark className="h-3 w-3" />
              <span>Saved</span>
              {savedCount > 0 && (
                <span className="ml-0.5 text-[10px] font-bold text-amber-400 tabular-nums">
                  ({savedCount})
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: 3 Zones */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-2.5 text-slate-900 hover:opacity-90 transition-opacity whitespace-nowrap shrink-0 group"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 text-amber-400 shadow-sm border border-slate-800">
              <Wrench className="h-5 w-5 transform group-hover:-rotate-12 transition-transform duration-200" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-950 leading-none">
                manstaff<span className="text-blue-600">plumbing</span>
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-500 mt-0.5">
                Journeyman & Industrial Staffing
              </span>
            </div>
          </Link>

          {/* Zone 2: 4-5 Clean Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `whitespace-nowrap shrink-0 transition-colors hover:text-blue-600 py-1 border-b-2 ${
                    isActive
                      ? 'border-blue-600 text-blue-600 font-semibold'
                      : 'border-transparent text-slate-600'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onRequestCrewOpen}
              className="px-4.5 py-2.5 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 active:scale-98 transition-all shadow-sm whitespace-nowrap cursor-pointer flex items-center gap-1.5"
            >
              <span>Request a Crew</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={onRequestCrewOpen}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
            >
              Hire Crew
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-md hover:bg-slate-100"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              FAQ & Help
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Contact & Dispatch
            </Link>
            <Link
              to="/my-dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center justify-between"
            >
              <span>Saved Jobs & History</span>
              {savedCount > 0 && (
                <span className="text-xs bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">
                  {savedCount}
                </span>
              )}
            </Link>
          </nav>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestCrewOpen();
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-xs"
            >
              Request a Plumbing Crew
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
