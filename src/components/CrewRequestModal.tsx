import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, Wrench, Calendar, Building2, User, Phone, Mail, MapPin } from 'lucide-react';
import { saveCrewRequest } from '../utils/storage';
import { TRADE_SPECIALTIES } from '../data/mockData';

interface CrewRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTrade?: string;
}

export const CrewRequestModal: React.FC<CrewRequestModalProps> = ({
  isOpen,
  onClose,
  defaultTrade = 'Commercial Journeyman Plumber'
}) => {
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('TX');
  const [projectType, setProjectType] = useState('Commercial High-Rise / Office');
  const [tradeRequired, setTradeRequired] = useState(defaultTrade);
  const [numberOfWorkers, setNumberOfWorkers] = useState(4);
  const [startDate, setStartDate] = useState('Within 7 Days');
  const [estimatedDuration, setEstimatedDuration] = useState('3-6 Months');
  const [notes, setNotes] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!companyName.trim()) errs.companyName = 'Company name is required';
    if (!contactName.trim()) errs.contactName = 'Contact name is required';
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) errs.email = 'Valid corporate email required';
    if (!phone.trim() || phone.length < 7) errs.phone = 'Valid phone number required';
    if (!city.trim()) errs.city = 'Jobsite city is required';
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
      projectType,
      tradeRequired,
      numberOfWorkers: Number(numberOfWorkers),
      startDate,
      estimatedDuration,
      notes: notes.trim() ? notes : undefined
    });

    setSubmittedId(saved.id);
  };

  const handleResetAndClose = () => {
    setSubmittedId(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="crew-modal-title"
      >
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-white">
              <Wrench className="h-4 w-4" />
            </div>
            <div>
              <h3 id="crew-modal-title" className="text-base font-bold text-white leading-tight">
                Request a Plumbing Crew
              </h3>
              <p className="text-xs text-slate-400">
                Manstaff Rapid Dispatch · Pre-vetted journeymen dispatched in 48 hours
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        {submittedId ? (
          <div className="p-8 text-center space-y-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">
              Staffing Request Received!
            </h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Your ticket <strong className="font-mono text-blue-600">#{submittedId}</strong> has been logged in your local dashboard and dispatched to our regional commercial account director.
            </p>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-left text-xs space-y-1.5 max-w-md mx-auto">
              <div><strong className="text-slate-700">Trade:</strong> {tradeRequired} ({numberOfWorkers} craftsmen)</div>
              <div><strong className="text-slate-700">Jobsite:</strong> {city}, {state}</div>
              <div><strong className="text-slate-700">Timeline:</strong> {startDate} · Duration: {estimatedDuration}</div>
              <div><strong className="text-slate-700">Contact:</strong> {contactName} ({phone})</div>
            </div>
            <p className="text-xs text-slate-500">
              A dispatcher will review license availability and contact you with candidate profiles and exact rate cards within 2 hours.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Company / Mechanical Contractor *
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Apex Mechanical LLC"
                    className={`w-full pl-9 pr-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.companyName ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                </div>
                {errors.companyName && <p className="text-[11px] text-red-600 mt-1">{errors.companyName}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Contact Person & Title *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. Mark Vance, VP Operations"
                    className={`w-full pl-9 pr-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.contactName ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                </div>
                {errors.contactName && <p className="text-[11px] text-red-600 mt-1">{errors.contactName}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Corporate Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="mvance@apexmech.com"
                    className={`w-full pl-9 pr-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.email ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                </div>
                {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Direct Phone *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(512) 555-0199"
                    className={`w-full pl-9 pr-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.phone ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                </div>
                {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Jobsite City *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Austin"
                    className={`w-full pl-9 pr-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.city ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                </div>
                {errors.city && <p className="text-[11px] text-red-600 mt-1">{errors.city}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Jobsite State
                </label>
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="TX">Texas (TX)</option>
                  <option value="CO">Colorado (CO)</option>
                  <option value="OH">Ohio (OH)</option>
                  <option value="IL">Illinois (IL)</option>
                  <option value="AZ">Arizona (AZ)</option>
                  <option value="UT">Utah (UT)</option>
                  <option value="FL">Florida (FL)</option>
                  <option value="GA">Georgia (GA)</option>
                  <option value="NC">North Carolina (NC)</option>
                  <option value="OTHER">Other State / Nationwide</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Primary Trade Required
                </label>
                <select
                  value={tradeRequired}
                  onChange={(e) => setTradeRequired(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  {TRADE_SPECIALTIES.map((t) => (
                    <option key={t.id} value={t.title}>
                      {t.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Number of Plumbers Needed
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={numberOfWorkers}
                    onChange={(e) => setNumberOfWorkers(Number(e.target.value))}
                    className="w-full accent-blue-600"
                  />
                  <span className="font-mono text-sm font-bold bg-slate-100 px-2.5 py-1 rounded border border-slate-200 min-w-10 text-center">
                    {numberOfWorkers}
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Mobilization Timeline
                </label>
                <select
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="Immediate (48 Hours)">Immediate (Emergency 48 Hours)</option>
                  <option value="Within 7 Days">Within 7 Days</option>
                  <option value="Within 2-3 Weeks">Within 2-3 Weeks</option>
                  <option value="1+ Month (Future Phase)">1+ Month (Future Phase)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Estimated Project Duration
                </label>
                <select
                  value={estimatedDuration}
                  onChange={(e) => setEstimatedDuration(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="1-3 Months (Surge / Rough-in)">1-3 Months (Surge / Rough-in)</option>
                  <option value="3-6 Months">3-6 Months</option>
                  <option value="6-12 Months">6-12 Months</option>
                  <option value="12+ Months (Full Project)">12+ Months (Full Project)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Project Scope / Specific Code or Rigging Requirements (Optional)
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Hospital medical gas nitrogen brazing, ProPress certification required, 58-hour schedule..."
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-900 flex items-start gap-2">
              <AlertCircle className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
              <span>
                <strong>Manstaff 8-Hour Workmanship Guarantee:</strong> Every dispatched journeyman is covered by our full shift guarantee. If unsatisfied, you will not be billed for their initial 8 hours.
              </span>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-xs"
              >
                Submit Crew Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
