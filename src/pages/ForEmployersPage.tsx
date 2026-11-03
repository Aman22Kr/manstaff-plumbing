import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Users,
  Clock,
  Award,
  AlertCircle,
  FileCheck,
  ArrowRight,
  HardHat,
  Scale,
  Building2
} from 'lucide-react';
import { STAFFING_PACKAGES, FAQS, TRADE_SPECIALTIES } from '../data/mockData';
import { saveCrewRequest } from '../utils/storage';
import { AdPlaceholder } from '../components/AdPlaceholder';

interface ForEmployersPageProps {
  onRequestCrewOpen: () => void;
}

export const ForEmployersPage: React.FC<ForEmployersPageProps> = ({ onRequestCrewOpen }) => {
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('TX');
  const [tradeRequired, setTradeRequired] = useState('Commercial Journeyman Plumber');
  const [numberOfWorkers, setNumberOfWorkers] = useState(6);
  const [startDate, setStartDate] = useState('Within 7 Days');
  const [estimatedDuration, setEstimatedDuration] = useState('3-6 Months');
  const [notes, setNotes] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!companyName.trim()) errs.companyName = 'Company name required';
    if (!contactName.trim()) errs.contactName = 'Contact name required';
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) errs.email = 'Valid corporate email required';
    if (!phone.trim() || phone.length < 7) errs.phone = 'Valid phone required';
    if (!city.trim()) errs.city = 'City required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const saved = saveCrewRequest({
      companyName,
      contactName,
      email,
      phone,
      jobLocationCity: city,
      jobLocationState: state,
      projectType: 'Commercial Mechanical Contract',
      tradeRequired,
      numberOfWorkers: Number(numberOfWorkers),
      startDate,
      estimatedDuration,
      notes: notes.trim() ? notes : undefined
    });

    setSubmittedId(saved.id);
  };

  const employerFaqs = FAQS.filter(f => f.category === 'employers' || f.category === 'licensing');

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Header */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 bg-slate-900 px-3 py-1 rounded border border-slate-800">
              Contractor Solutions
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Certified Commercial Plumbing Crews Dispatched in 48 Hours.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We eliminate the labor shortage for MEP and general mechanical contractors. Deploy verified journeymen, pipefitters, and superintendents who read your drawings and pass inspections the first time.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="h-4 w-4" /> 100% State Board Verified
              </span>
              <span className="flex items-center gap-1.5 text-blue-400">
                <ShieldCheck className="h-4 w-4" /> 8-Hour Workmanship Guarantee
              </span>
              <span className="flex items-center gap-1.5 text-amber-400">
                <Award className="h-4 w-4" /> W-2 Payroll & $5M Liability Included
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Staffing Models */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold font-mono uppercase tracking-wider text-blue-600">
              Flexible Deployment Models
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Engineered for Project Deadlines
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STAFFING_PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-7 border flex flex-col justify-between ${
                  pkg.recommended
                    ? 'border-blue-600 ring-2 ring-blue-600/20 bg-slate-50/50 shadow-md'
                    : 'border-slate-200 bg-white shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
                      {pkg.crewSize}
                    </span>
                    {pkg.recommended && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-blue-600 text-white font-mono">
                        Most Requested
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{pkg.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 italic">{pkg.tagline}</p>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">{pkg.idealFor}</p>

                  <div className="mt-6 pt-6 border-t border-slate-200 space-y-2.5">
                    {pkg.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={onRequestCrewOpen}
                    className={`w-full py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                      pkg.recommended
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                  >
                    Select {pkg.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 4-Tier Vetting Protocol */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
              Risk Mitigation & Quality Standard
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight mt-1">
              Our 4-Step Verification Protocol
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              Unlike generic temp agencies that dispatch untrained labor, Manstaff enforces strict technical vetting before any tradesman sets foot on your jobsite.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-3">
              <div className="h-8 w-8 rounded-lg bg-blue-600/30 text-blue-400 flex items-center justify-center font-mono font-bold text-sm">
                01
              </div>
              <h3 className="text-base font-bold text-white">Primary Source License Check</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct API and database verification with state licensing boards (e.g. TSBPE, DORA, IDPH) to verify active standing, zero disciplinary sanctions, and expiration validity.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-3">
              <div className="h-8 w-8 rounded-lg bg-blue-600/30 text-blue-400 flex items-center justify-center font-mono font-bold text-sm">
                02
              </div>
              <h3 className="text-base font-bold text-white">Isometric & Code Audit</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Evaluation of isometric blueprint reading, pipe takeoff math, DWV stack sizing rules, and commercial press-fitting standards (ProPress, MegaPress, Victaulic).
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-3">
              <div className="h-8 w-8 rounded-lg bg-blue-600/30 text-blue-400 flex items-center justify-center font-mono font-bold text-sm">
                03
              </div>
              <h3 className="text-base font-bold text-white">OSHA & Safety Record</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Mandatory OSHA 10 or OSHA 30 construction card verification, aerial lift certification (if applicable), and clean safety performance history.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-3">
              <div className="h-8 w-8 rounded-lg bg-blue-600/30 text-blue-400 flex items-center justify-center font-mono font-bold text-sm">
                04
              </div>
              <h3 className="text-base font-bold text-white">8-Hour Workmanship Warranty</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                If any dispatched tradesperson fails to match your standards on their first shift, inform us within 8 hours. You are not billed and an immediate replacement is mobilized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Matrix */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold font-mono uppercase tracking-wider text-blue-600">
              Contractor Advantage
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Why Mechanical Contractors Choose Manstaff
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border border-slate-200 rounded-xl overflow-hidden shadow-xs">
              <thead className="bg-slate-900 text-white font-mono text-xs uppercase">
                <tr>
                  <th className="p-4">Criteria</th>
                  <th className="p-4 bg-blue-900 text-amber-400 font-bold">Manstaff Plumbing</th>
                  <th className="p-4 text-slate-300">Generic Temp Agencies</th>
                  <th className="p-4 text-slate-300">Direct In-House Hiring</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold text-slate-900">Trade Specialization</td>
                  <td className="p-4 bg-blue-50/50 font-bold text-blue-700">100% Plumbing & Pipefitting Only</td>
                  <td className="p-4 text-slate-600">General day labor & mixed trades</td>
                  <td className="p-4 text-slate-600">Specific, but hard to source</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold text-slate-900">License Verification</td>
                  <td className="p-4 bg-blue-50/50 font-bold text-blue-700">Primary Source State Board Checked</td>
                  <td className="p-4 text-slate-600">Unverified self-reported resumes</td>
                  <td className="p-4 text-slate-600">Time-consuming HR burden</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold text-slate-900">Dispatch Speed</td>
                  <td className="p-4 bg-blue-50/50 font-bold text-blue-700">48 - 72 Hours Mobilization</td>
                  <td className="p-4 text-slate-600">3 - 7 days (unreliable quality)</td>
                  <td className="p-4 text-slate-600">4 - 8 weeks job posting cycle</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold text-slate-900">Per Diem & Travel Logistics</td>
                  <td className="p-4 bg-blue-50/50 font-bold text-blue-700">Turnkey Managed by Manstaff</td>
                  <td className="p-4 text-slate-600">Contractor must coordinate</td>
                  <td className="p-4 text-slate-600">High administrative expense</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold text-slate-900">Performance Warranty</td>
                  <td className="p-4 bg-blue-50/50 font-bold text-blue-700">8-Hour Zero Cost Guarantee</td>
                  <td className="p-4 text-slate-600">No guarantee</td>
                  <td className="p-4 text-slate-600">Costly severance & turnover</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Embedded Crew Request Form */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 p-8 sm:p-10 rounded-2xl border border-slate-800 shadow-xl">
            <div className="mb-8">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
                Direct Contractor Dispatch Ticket
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
                Request Your Commercial Plumbing Crew
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Fill out project requirements below. A dedicated commercial dispatch director will review candidate licenses and call with rate proposals in under 2 hours.
              </p>
            </div>

            {submittedId ? (
              <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 text-center space-y-4">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Request #{submittedId} Confirmed!</h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Your request for {numberOfWorkers} {tradeRequired} in {city}, {state} has been received and saved to your client dashboard.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmittedId(null)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Company Name *</label>
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Apex Mechanical Contractors"
                      className="w-full px-3 py-2 text-sm bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.companyName && <p className="text-[11px] text-red-400 mt-1">{errors.companyName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Contact Name & Title *</label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Mark Vance, VP of Field Operations"
                      className="w-full px-3 py-2 text-sm bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.contactName && <p className="text-[11px] text-red-400 mt-1">{errors.contactName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Corporate Email *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="mark.vance@apexmechanical.com"
                      className="w-full px-3 py-2 text-sm bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(512) 555-0199"
                      className="w-full px-3 py-2 text-sm bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Jobsite City & State *</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="City"
                        className="w-2/3 px-3 py-2 text-sm bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <select
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="w-1/3 px-2 py-2 text-sm bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="TX">TX</option>
                        <option value="CO">CO</option>
                        <option value="OH">OH</option>
                        <option value="IL">IL</option>
                        <option value="AZ">AZ</option>
                        <option value="UT">UT</option>
                        <option value="FL">FL</option>
                        <option value="OTHER">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Trade Specialization</label>
                    <select
                      value={tradeRequired}
                      onChange={(e) => setTradeRequired(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {TRADE_SPECIALTIES.map((t) => (
                        <option key={t.id} value={t.title}>
                          {t.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Plumbers Required: <span className="font-mono text-amber-400 font-bold">{numberOfWorkers}</span>
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="30"
                      value={numberOfWorkers}
                      onChange={(e) => setNumberOfWorkers(Number(e.target.value))}
                      className="w-full accent-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Mobilization Timeline</label>
                    <select
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Emergency (48 Hours)">Emergency (48 Hours)</option>
                      <option value="Within 7 Days">Within 7 Days</option>
                      <option value="Within 2-3 Weeks">Within 2-3 Weeks</option>
                      <option value="1+ Month (Future Phase)">1+ Month (Future Phase)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Scope Details / Notes (Optional)</label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Specific welding/brazing requirements, shift hours, badging rules..."
                    className="w-full px-3 py-2 text-sm bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="pt-3 flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-2.5 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-md transition-colors"
                  >
                    Submit Contractor Dispatch Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Employer FAQs */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold font-mono uppercase tracking-wider text-blue-600">
              Contractor FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Frequently Asked Questions by Contractors
            </h2>
          </div>

          <div className="space-y-4">
            {employerFaqs.map((faq) => (
              <div key={faq.id} className="p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                <h4 className="text-sm font-bold text-slate-900 mb-2">{faq.question}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
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
