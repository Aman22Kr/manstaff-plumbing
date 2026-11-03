import React, { useState } from 'react';
import {
  Wrench,
  DollarSign,
  Calendar,
  Award,
  ShieldCheck,
  CheckCircle2,
  Briefcase,
  TrendingUp,
  MapPin,
  ChevronRight,
  Plane
} from 'lucide-react';
import { saveJobApplication } from '../utils/storage';
import { FAQS } from '../data/mockData';
import { AdPlaceholder } from '../components/AdPlaceholder';

interface ForPlumbersPageProps {
  onApplyJobOpen: () => void;
}

export const ForPlumbersPage: React.FC<ForPlumbersPageProps> = ({ onApplyJobOpen }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('TX');
  const [currentLicense, setCurrentLicense] = useState('Journeyman Plumber (State Licensed)');
  const [yearsExperience, setYearsExperience] = useState(5);
  const [willingToTravel, setWillingToTravel] = useState(true);
  const [hasOwnTransportation, setHasOwnTransportation] = useState(true);
  const [notes, setNotes] = useState('');

  const [submittedId, setSubmittedId] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone || !city) return;

    const saved = saveJobApplication({
      jobTitle: 'Journeyman Talent Roster',
      fullName,
      email,
      phone,
      city,
      state,
      currentLicense,
      yearsExperience: Number(yearsExperience),
      specialties: ['Commercial DWV', 'Domestic Water Pressing'],
      willingToTravel,
      hasOwnTransportation,
      oshaCertified: true,
      medgasCertified: false,
      notes: notes.trim() ? notes : undefined
    });

    setSubmittedId(saved.id);
  };

  const plumberFaqs = FAQS.filter(f => f.category === 'plumbers' || f.category === 'payroll');

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Header */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 bg-slate-900 px-3 py-1 rounded border border-slate-800">
              Careers for Craftsmen
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Top Wages, Guaranteed Per Diem & Continuous Commercial Projects.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Join the nation's premier mechanical staffing network. We keep licensed commercial plumbers, industrial pipefitters, and medical gas specialists working on high-hour jobs with on-time weekly direct deposit.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-amber-400">
                <DollarSign className="h-4 w-4" /> $42.00 - $62.00 / Hour
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Plane className="h-4 w-4" /> Up to $150 / Day Per Diem (7 Days)
              </span>
              <span className="flex items-center gap-1.5 text-blue-400">
                <ShieldCheck className="h-4 w-4" /> Health, Dental & Vision Benefits
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Breakdown */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold font-mono uppercase tracking-wider text-blue-600">
              The Craftsman Standard
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Why Journeymen Plumbers Choose Manstaff
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
              <div className="h-10 w-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <DollarSign className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Direct Deposit Every Friday</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero waiting on contractor pay applications. Your hours are verified digitally and paid out via direct deposit every single Friday morning with transparent pay stubs.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
              <div className="h-10 w-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <Plane className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">7-Day Per Diem Allowances</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Traveling on surge jobs? Earn non-taxable daily per diem ($110 to $150/day) paid for all 7 days of the week on qualifying commercial placements.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
              <div className="h-10 w-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Seamless Project Transitions</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                No unpaid layoff gaps between jobs. 4 weeks before your current job wraps up, our dispatch team lines up your next high-hour commercial assignment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Ladder */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
              Advancement & Earning Potential
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight mt-1">
              Plumbing Trades Career Pathway
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              We invest in your licensing reciprocity, OSHA renewal, and specialty medgas credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-3">
              <span className="text-xs font-mono text-slate-400">STAGE 01</span>
              <h3 className="text-base font-bold text-white">Commercial Journeyman</h3>
              <div className="text-sm font-bold text-amber-400 font-mono">$42 - $50 / hr</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Rough-ins, cast iron DWV, domestic water copper press-fitting, commercial restrooms.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-3">
              <span className="text-xs font-mono text-slate-400">STAGE 02</span>
              <h3 className="text-base font-bold text-white">Industrial Steamfitter</h3>
              <div className="text-sm font-bold text-amber-400 font-mono">$46 - $56 / hr</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Boiler rooms, central plant hydronic loops, flanged steel piping, high-pressure test.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-3">
              <span className="text-xs font-mono text-slate-400">STAGE 03</span>
              <h3 className="text-base font-bold text-white">ASSE 6010 MedGas Brazer</h3>
              <div className="text-sm font-bold text-amber-400 font-mono">$50 - $62 / hr</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Hospital surgery suites, biopharma orbital welds, nitrogen purge copper installations.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-3">
              <span className="text-xs font-mono text-slate-400">STAGE 04</span>
              <h3 className="text-base font-bold text-white">Master Superintendent</h3>
              <div className="text-sm font-bold text-amber-400 font-mono">$60 - $75+ / hr</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Field leadership, BIM clash resolution, city inspector coordination, crew scheduling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Registration Form */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
            <div className="mb-6">
              <span className="text-xs font-bold font-mono uppercase tracking-wider text-blue-600">
                Direct Onboarding Form
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">
                Register with Manstaff Plumbing
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Fill in your credentials to join our active dispatch database. A recruiter will contact you to match open jobs.
              </p>
            </div>

            {submittedId ? (
              <div className="p-6 bg-white rounded-xl border border-slate-200 text-center space-y-3">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Application #{submittedId} Saved!</h3>
                <p className="text-xs text-slate-600">
                  We have logged your registration. Your profile is saved in your local dashboard and ready for dispatch.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmittedId(null)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  Register Another Craftsman
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Full Legal Name *</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. David Mueller"
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(555) 019-2831"
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="david.plumber@email.com"
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Current City & State *</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="City"
                        className="w-2/3 px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <select
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="w-1/3 px-2 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Current License Level</label>
                    <select
                      value={currentLicense}
                      onChange={(e) => setCurrentLicense(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Journeyman Plumber (State Licensed)">Journeyman Plumber (State Licensed)</option>
                      <option value="Master Plumber (Licensed)">Master Plumber (Licensed)</option>
                      <option value="Journeyman Pipefitter / Steamfitter">Journeyman Pipefitter / Steamfitter</option>
                      <option value="Certified MedGas Brazer / Installer">Certified MedGas Brazer / Installer</option>
                      <option value="Sprinkler Fitter (NICET / State)">Sprinkler Fitter (NICET / State)</option>
                      <option value="4th Year Plumber Apprentice">4th Year Plumber Apprentice</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Years of Commercial Experience</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="range"
                        min="1"
                        max="25"
                        value={yearsExperience}
                        onChange={(e) => setYearsExperience(Number(e.target.value))}
                        className="w-full accent-blue-600"
                      />
                      <span className="font-mono text-sm font-bold bg-white px-2 py-1 rounded border border-slate-200">
                        {yearsExperience} yrs
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3 text-xs text-slate-700">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={willingToTravel}
                      onChange={(e) => setWillingToTravel(e.target.checked)}
                      className="rounded text-blue-600 focus:ring-blue-500"
                    />
                    <span>Available to travel for per diem ($110-$150/day)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasOwnTransportation}
                      onChange={(e) => setHasOwnTransportation(e.target.checked)}
                      className="rounded text-blue-600 focus:ring-blue-500"
                    />
                    <span>Have hand tools & reliable transportation</span>
                  </label>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-2.5 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-xs"
                  >
                    Submit Plumber Registration
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Candidate FAQs */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold font-mono uppercase tracking-wider text-blue-600">
              Craftsman FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Frequently Asked Questions by Plumbers
            </h2>
          </div>

          <div className="space-y-4">
            {plumberFaqs.map((faq) => (
              <div key={faq.id} className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs">
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
