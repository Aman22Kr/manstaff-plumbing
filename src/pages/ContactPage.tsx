import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Send,
  MessageSquare,
  Building2
} from 'lucide-react';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const ContactPage: React.FC = () => {
  const [category, setCategory] = useState<'employer' | 'candidate' | 'general'>('employer');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-slate-950 text-white py-14 sm:py-18 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 bg-slate-900 px-3 py-1 rounded border border-slate-800">
              24/7 Nationwide Rapid Dispatch
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Contact Manstaff Plumbing
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Have an urgent surge staffing requirement or looking for your next high-hour commercial plumbing contract? Reach our dispatch desk 24 hours a day.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left 5 cols: Offices & Dispatch Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-900 text-white p-7 rounded-2xl border border-slate-800 shadow-md space-y-4">
                <span className="text-xs font-mono font-semibold text-amber-400 uppercase tracking-wider">
                  Emergency Dispatch Line
                </span>
                <div className="text-2xl font-bold font-mono text-white flex items-center gap-2">
                  <Phone className="h-6 w-6 text-amber-400" />
                  <span>(800) 555-PLUMB</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Direct line to on-call commercial coordinators for emergency headcounts, shift callouts, or jobsite inquiries.
                </p>
                <div className="pt-2 border-t border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-emerald-400" />
                  <span>Available 24 hours / 7 days a week</span>
                </div>
              </div>

              {/* Regional Hubs */}
              <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-slate-900">
                  Regional Operations & Mobility Hubs
                </h3>

                <div className="space-y-3.5 text-xs text-slate-600 divide-y divide-slate-100">
                  <div className="pt-1">
                    <strong className="text-slate-900 block font-medium">Texas & Gulf Coast Dispatch</strong>
                    <span>Austin & Houston Commercial Project Desks</span>
                    <span className="block text-slate-400 font-mono mt-0.5">Commercial high-rise & medical towers</span>
                  </div>

                  <div className="pt-3">
                    <strong className="text-slate-900 block font-medium">Midwest Industrial Office</strong>
                    <span>Columbus, OH & Chicago, IL</span>
                    <span className="block text-slate-400 font-mono mt-0.5">Semiconductor fabs, battery plants & boiler retrofit</span>
                  </div>

                  <div className="pt-3">
                    <strong className="text-slate-900 block font-medium">Mountain West Operations</strong>
                    <span>Denver, CO & Salt Lake City, UT</span>
                    <span className="block text-slate-400 font-mono mt-0.5">Healthcare ASSE 6010 & civil utilities</span>
                  </div>

                  <div className="pt-3">
                    <strong className="text-slate-900 block font-medium">European Craftsmanship Mobility Office</strong>
                    <span>St. Gallen / Zurich, Switzerland</span>
                    <span className="block text-slate-400 font-mono mt-0.5">International journeyman exchange & reciprocity</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 cols: Interactive Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs">
                <div className="mb-6">
                  <span className="text-xs font-bold font-mono uppercase tracking-wider text-blue-600">
                    Online Inquiry Ticket
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900 mt-1">
                    Send a Message to Commercial Dispatch
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Our team monitors incoming messages 24/7 with typical response time under 30 minutes.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 text-center space-y-4 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">Message Received!</h3>
                    <p className="text-xs text-slate-600 max-w-md mx-auto">
                      Thank you for contacting Manstaff Plumbing. An on-duty dispatcher has received your message and will reply via email or telephone shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Inquiry category selector */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Inquiry Nature
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        <button
                          type="button"
                          onClick={() => setCategory('employer')}
                          className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                            category === 'employer'
                              ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          Hire Plumbing Crew
                        </button>
                        <button
                          type="button"
                          onClick={() => setCategory('candidate')}
                          className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                            category === 'candidate'
                              ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          Plumber Career / Jobs
                        </button>
                        <button
                          type="button"
                          onClick={() => setCategory('general')}
                          className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                            category === 'general'
                              ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          General Question
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your name"
                          className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
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
                          placeholder="name@company.com"
                          className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(555) 000-0000"
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Message / Project Scope *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Please describe your jobsite requirements, timeline, or questions..."
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="pt-2 flex justify-end">
                      <button
                        type="submit"
                        className="px-6 py-2.5 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-xs"
                      >
                        Send Inquiry
                      </button>
                    </div>
                  </form>
                )}
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
