import React, { useState, useMemo } from 'react';
import { Calculator, ShieldCheck, ArrowRight, DollarSign, Users, Clock, Calendar } from 'lucide-react';

interface CostCalculatorProps {
  onRequestQuoteWithDetails?: (details: { trade: string; size: number; weeks: number }) => void;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({ onRequestQuoteWithDetails }) => {
  const [selectedTrade, setSelectedTrade] = useState('Commercial Journeyman Plumber');
  const [crewSize, setCrewSize] = useState(4);
  const [hoursPerWeek, setHoursPerWeek] = useState(50);
  const [durationWeeks, setDurationWeeks] = useState(12);
  const [includePerDiem, setIncludePerDiem] = useState(true);

  const tradeRates: Record<string, { hourlyBase: number; billRate: number }> = {
    'Commercial Journeyman Plumber': { hourlyBase: 46, billRate: 68 },
    'Industrial Pipefitter & Steamfitter': { hourlyBase: 50, billRate: 74 },
    'Medical Gas & Sanitary Piping Specialist': { hourlyBase: 54, billRate: 82 },
    'Master Plumber & Mechanical Superintendent': { hourlyBase: 65, billRate: 95 },
    'Fire Protection & Sprinkler Fitter': { hourlyBase: 45, billRate: 66 },
    'Civil Underground Utility Plumber': { hourlyBase: 44, billRate: 64 },
  };

  const currentTradeRate = tradeRates[selectedTrade] || tradeRates['Commercial Journeyman Plumber'];

  const calculations = useMemo(() => {
    const regularHours = Math.min(40, hoursPerWeek);
    const overtimeHours = Math.max(0, hoursPerWeek - 40);
    const regularRate = currentTradeRate.billRate;
    const overtimeRate = regularRate * 1.5;

    const weeklyBillPerWorker = (regularHours * regularRate) + (overtimeHours * overtimeRate);
    const perDiemWeeklyPerWorker = includePerDiem ? (125 * 7) : 0;
    const totalWeeklyPerWorker = weeklyBillPerWorker + perDiemWeeklyPerWorker;

    const totalWeeklyCrew = totalWeeklyPerWorker * crewSize;
    const totalProjectEstimate = totalWeeklyCrew * durationWeeks;

    return {
      regularHours,
      overtimeHours,
      regularRate,
      overtimeRate,
      weeklyBillPerWorker,
      perDiemWeeklyPerWorker,
      totalWeeklyCrew,
      totalProjectEstimate,
    };
  }, [selectedTrade, crewSize, hoursPerWeek, durationWeeks, includePerDiem, currentTradeRate]);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
      <div className="bg-slate-900 text-white p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
              <Calculator className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Interactive Plumbing Crew Cost Estimator
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Transparent commercial billing rates · Includes statutory taxes, W-2 payroll, and $5M liability insurance
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-3 py-1.5 rounded-lg font-mono">
            <ShieldCheck className="h-4 w-4" />
            <span>Guaranteed Fixed Billing</span>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Trade Specialty */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 font-mono">
              1. Select Plumbing / Mechanical Trade
            </label>
            <select
              value={selectedTrade}
              onChange={(e) => setSelectedTrade(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm font-medium border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50"
            >
              {Object.keys(tradeRates).map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Crew Size Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider font-mono flex items-center gap-1.5">
                <Users className="h-4 w-4 text-slate-400" />
                <span>2. Crew Size</span>
              </label>
              <span className="text-base font-bold text-blue-600 font-mono">
                {crewSize} Journeymen
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="30"
              value={crewSize}
              onChange={(e) => setCrewSize(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
              <span>1 Journeyman</span>
              <span>10 Crew</span>
              <span>20 Crew</span>
              <span>30 Crew</span>
            </div>
          </div>

          {/* Schedule / Hours per week */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider font-mono flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-slate-400" />
                <span>3. Work Schedule / Hours Per Week</span>
              </label>
              <span className="text-sm font-bold text-slate-800 font-mono">
                {hoursPerWeek} hrs/wk ({Math.max(0, hoursPerWeek - 40)} hrs OT)
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[40, 50, 60].map((h) => (
                <button
                  key={h}
                  type="button"
                  onClick={() => setHoursPerWeek(h)}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                    hoursPerWeek === h
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  {h === 40 ? '40 hrs (Standard)' : h === 50 ? '50 hrs (5x10s)' : '60 hrs (6x10s Surge)'}
                </button>
              ))}
            </div>
          </div>

          {/* Project Duration in Weeks */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider font-mono flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-slate-400" />
                <span>4. Project Duration</span>
              </label>
              <span className="text-sm font-bold text-slate-800 font-mono">
                {durationWeeks} Weeks (~{Math.round(durationWeeks / 4.3)} Months)
              </span>
            </div>
            <input
              type="range"
              min="2"
              max="52"
              value={durationWeeks}
              onChange={(e) => setDurationWeeks(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
              <span>2 wks (Rough-in surge)</span>
              <span>12 wks (Quarter)</span>
              <span>26 wks (6 mos)</span>
              <span>52 wks (Full year)</span>
            </div>
          </div>

          {/* Per Diem Toggle */}
          <div className="pt-2 border-t border-slate-200">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={includePerDiem}
                onChange={(e) => setIncludePerDiem(e.target.checked)}
                className="h-4 w-4 rounded text-blue-600 focus:ring-blue-500"
              />
              <div className="text-xs">
                <span className="font-semibold text-slate-800">
                  Include Travel Per Diem ($125/day per worker for traveling tradesmen)
                </span>
                <p className="text-slate-500">
                  Required if mobilizing non-local licensed craftsmen to fill critical regional labor shortages.
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Breakdown Card (5 cols) */}
        <div className="lg:col-span-5 bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold font-mono uppercase tracking-wider text-slate-500">
              Estimated Rate Summary
            </span>
            <div className="mt-3 space-y-3 text-sm">
              <div className="flex justify-between items-center py-1.5 border-b border-slate-200">
                <span className="text-slate-600">Standard Bill Rate (40h)</span>
                <span className="font-mono font-bold text-slate-900">${calculations.regularRate}.00 / hr</span>
              </div>
              {calculations.overtimeHours > 0 && (
                <div className="flex justify-between items-center py-1.5 border-b border-slate-200">
                  <span className="text-slate-600">Overtime Bill Rate (1.5x)</span>
                  <span className="font-mono font-bold text-slate-900">${calculations.overtimeRate}.00 / hr</span>
                </div>
              )}
              {includePerDiem && (
                <div className="flex justify-between items-center py-1.5 border-b border-slate-200">
                  <span className="text-slate-600">Per Diem (7 days/wk)</span>
                  <span className="font-mono font-bold text-slate-900">${calculations.perDiemWeeklyPerWorker} / wk / man</span>
                </div>
              )}
              <div className="flex justify-between items-center py-1.5 border-b border-slate-200">
                <span className="text-slate-600">Weekly Total Per Plumber</span>
                <span className="font-mono font-bold text-slate-900">
                  ${Math.round(calculations.weeklyBillPerWorker + calculations.perDiemWeeklyPerWorker).toLocaleString()}
                </span>
              </div>
            </div>

            {/* Big totals */}
            <div className="mt-6 p-4 rounded-xl bg-slate-900 text-white space-y-3">
              <div>
                <span className="text-[11px] font-mono uppercase text-slate-400">
                  Estimated Weekly Crew Investment ({crewSize} Plumbers)
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono mt-0.5">
                  ${Math.round(calculations.totalWeeklyCrew).toLocaleString()}
                  <span className="text-xs text-slate-400 font-normal ml-1">/ week</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <span className="text-[11px] font-mono uppercase text-slate-400">
                  Estimated {durationWeeks}-Week Project Budget
                </span>
                <div className="text-xl sm:text-2xl font-bold text-white font-mono mt-0.5">
                  ${Math.round(calculations.totalProjectEstimate).toLocaleString()}
                </div>
              </div>
            </div>

            <p className="mt-3 text-[11px] text-slate-500 leading-normal">
              * Rates include W-2 payroll burden, worker's compensation insurance, statutory FICA/FUTA, and 8-Hour Workmanship Replacement Guarantee.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200">
            <button
              type="button"
              onClick={() => {
                if (onRequestQuoteWithDetails) {
                  onRequestQuoteWithDetails({
                    trade: selectedTrade,
                    size: crewSize,
                    weeks: durationWeeks
                  });
                }
              }}
              className="w-full py-3 px-4 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-98 transition-all rounded-lg shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Lock In This Crew Rate / Request Proposal</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
