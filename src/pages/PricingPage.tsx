import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  HelpCircle,
  FileText,
  Clock,
  ArrowRight
} from 'lucide-react';
import { CostCalculator } from '../components/CostCalculator';
import { STAFFING_PACKAGES, FAQS } from '../data/mockData';
import { AdPlaceholder } from '../components/AdPlaceholder';

interface PricingPageProps {
  onRequestCrewOpen: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onRequestCrewOpen }) => {
  const billingFaqs = FAQS.filter((f) => f.category === 'payroll' || f.category === 'employers');

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-slate-950 text-white py-14 sm:py-18 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 bg-slate-900 px-3 py-1 rounded border border-slate-800">
              Commercial Rate Structure
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Transparent Plumbing Crew Billing
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              No hidden agency surcharges. Every rate includes comprehensive W-2 employer burdens, high-limit statutory worker's compensation, liability coverage, and an unconditional 8-Hour Workmanship Guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Calculator Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CostCalculator
            onRequestQuoteWithDetails={() => {
              onRequestCrewOpen();
            }}
          />
        </div>
      </section>

      {/* What is Included in Every Bill Rate */}
      <section className="py-14 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold font-mono uppercase tracking-wider text-blue-600">
              Comprehensive Protection
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Included in Every Manstaff Bill Rate
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
              <div className="h-8 w-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Worker's Comp & Liability</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We carry statutory worker's comp tailored to high-risk commercial plumbing trades and $5M umbrella liability insurance.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
              <div className="h-8 w-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <FileText className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">W-2 Payroll & Taxes</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Full statutory payroll handling including employer FICA, FUTA, SUTA, and direct deposit handling every Friday.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
              <div className="h-8 w-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">8-Hour Workmanship Warranty</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                If any craftsman fails to meet productivity standards on day one, you are not billed for that shift and a replacement is deployed.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
              <div className="h-8 w-8 rounded-lg bg-slate-200 text-slate-800 flex items-center justify-center font-bold">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">24/7 Field Coordination</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated regional dispatcher managing shift rosters, attendance tracking, and immediate headcounts replacements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Staffing Packages */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold font-mono uppercase tracking-wider text-blue-600">
              Staffing Tiers
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Select Your Staffing Contract
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STAFFING_PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold uppercase text-blue-600">
                    {pkg.crewSize}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">{pkg.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 italic">{pkg.tagline}</p>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">{pkg.idealFor}</p>

                  <div className="mt-6 pt-6 border-t border-slate-100 space-y-2">
                    {pkg.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={onRequestCrewOpen}
                    className="w-full py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer"
                  >
                    Request {pkg.name} Proposal
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Billing FAQ */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900">
              Billing & Commercial Questions
            </h3>
          </div>
          <div className="space-y-4">
            {billingFaqs.map((faq) => (
              <div key={faq.id} className="p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                <h4 className="text-sm font-bold text-slate-900 mb-1">{faq.question}</h4>
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
