import React, { useState } from 'react';
import { X, CheckCircle2, Award, Shield, FileText, Check } from 'lucide-react';
import { saveJobApplication } from '../utils/storage';
import { PlumbingJob } from '../types';

interface ApplyJobModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedJob?: PlumbingJob | null;
}

export const ApplyJobModal: React.FC<ApplyJobModalProps> = ({
  isOpen,
  onClose,
  selectedJob = null
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('TX');
  const [currentLicense, setCurrentLicense] = useState('Journeyman Plumber (State Licensed)');
  const [yearsExperience, setYearsExperience] = useState(6);
  const [willingToTravel, setWillingToTravel] = useState(true);
  const [hasOwnTransportation, setHasOwnTransportation] = useState(true);
  const [oshaCertified, setOshaCertified] = useState(true);
  const [medgasCertified, setMedgasCertified] = useState(false);
  const [notes, setNotes] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Full name is required';
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) errs.email = 'Valid email is required';
    if (!phone.trim() || phone.length < 7) errs.phone = 'Valid phone number is required';
    if (!city.trim()) errs.city = 'Current city is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const saved = saveJobApplication({
      jobId: selectedJob?.id,
      jobTitle: selectedJob ? selectedJob.title : 'General Journeyman Roster',
      fullName,
      email,
      phone,
      city,
      state,
      currentLicense,
      yearsExperience: Number(yearsExperience),
      specialties: ['Commercial Plumbing', 'Copper ProPress / Brazing'],
      willingToTravel,
      hasOwnTransportation,
      oshaCertified,
      medgasCertified,
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
        className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="apply-modal-title"
      >
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <div>
            <h3 id="apply-modal-title" className="text-base font-bold text-white leading-tight">
              {selectedJob ? `Apply: ${selectedJob.title}` : 'Register as a Manstaff Tradesman'}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {selectedJob ? `${selectedJob.location} · ${selectedJob.payRateHourly}/hr` : 'Direct deposit weekly, per diem, and nationwide placement'}
            </p>
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
              Application Successfully Registered!
            </h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Your tradesman record <strong className="font-mono text-blue-600">#{submittedId}</strong> has been saved. A Manstaff Trade Recruiter will verify your license with the state board and reach out for phone onboarding.
            </p>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-left text-xs space-y-1 max-w-sm mx-auto">
              <div><strong className="text-slate-700">Applicant:</strong> {fullName}</div>
              <div><strong className="text-slate-700">License:</strong> {currentLicense}</div>
              <div><strong className="text-slate-700">Experience:</strong> {yearsExperience} Years</div>
              <div><strong className="text-slate-700">Travel Status:</strong> {willingToTravel ? 'Willing to Travel (Per Diem Eligible)' : 'Local Only'}</div>
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. David Mueller"
                  className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.fullName ? 'border-red-500' : 'border-slate-300'
                  }`}
                />
                {errors.fullName && <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone Number (for SMS & Dispatch) *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(555) 012-3456"
                  className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.phone ? 'border-red-500' : 'border-slate-300'
                  }`}
                />
                {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="david.plumber@email.com"
                  className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.email ? 'border-red-500' : 'border-slate-300'
                  }`}
                />
                {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Current City & State *
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City"
                    className="w-2/3 px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <select
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-1/3 px-2 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
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
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Trade License / Credential Level
                </label>
                <select
                  value={currentLicense}
                  onChange={(e) => setCurrentLicense(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
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
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Years of Commercial / Industrial Experience
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={yearsExperience}
                    onChange={(e) => setYearsExperience(Number(e.target.value))}
                    className="w-full accent-blue-600"
                  />
                  <span className="font-mono text-sm font-bold bg-slate-100 px-2 py-1 rounded border border-slate-200 min-w-10 text-center">
                    {yearsExperience} yrs
                  </span>
                </div>
              </div>
            </div>

            {/* Checkboxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-slate-700">
              <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-slate-100/50">
                <input
                  type="checkbox"
                  checked={willingToTravel}
                  onChange={(e) => setWillingToTravel(e.target.checked)}
                  className="rounded text-blue-600 focus:ring-blue-500"
                />
                <span>Willing to travel for Per Diem ($110-$150/day)</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-slate-100/50">
                <input
                  type="checkbox"
                  checked={hasOwnTransportation}
                  onChange={(e) => setHasOwnTransportation(e.target.checked)}
                  className="rounded text-blue-600 focus:ring-blue-500"
                />
                <span>Reliable vehicle & hand tool loadout</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-slate-100/50">
                <input
                  type="checkbox"
                  checked={oshaCertified}
                  onChange={(e) => setOshaCertified(e.target.checked)}
                  className="rounded text-blue-600 focus:ring-blue-500"
                />
                <span>Have active OSHA 10 or OSHA 30 card</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-slate-100/50">
                <input
                  type="checkbox"
                  checked={medgasCertified}
                  onChange={(e) => setMedgasCertified(e.target.checked)}
                  className="rounded text-blue-600 focus:ring-blue-500"
                />
                <span>Have ASSE 6010 / AWS B2.2 brazer card</span>
              </label>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Certifications / Past Major Commercial Projects (Optional)
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Texas Journeyman #84920, experience with ProPress 4 inch, hospitals..."
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
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
                Submit Application
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
