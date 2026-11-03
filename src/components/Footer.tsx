import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, ShieldCheck, Award, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 text-white">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm">
                <Wrench className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                manstaff<span className="text-blue-400">plumbing</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Bridging premier mechanical contractors with certified commercial journeymen, industrial steamfitters, and specialized medical gas installers. Modeled on traditional European craftsmanship standards with nationwide rapid mobilization.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>OSHA 30 Compliant</span>
              </div>
              <span className="text-slate-700">·</span>
              <div className="flex items-center gap-1.5">
                <Award className="h-4 w-4 text-amber-400" />
                <span>100% License Verified</span>
              </div>
              <span className="text-slate-700">·</span>
              <span>EMR &lt; 0.72 Safety Rating</span>
            </div>
          </div>

          {/* Col 2: For Contractors */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              For Contractors
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/for-employers" className="hover:text-white transition-colors">
                  Hire Plumbing Crews
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">
                  Rate Cards & Crew Calculator
                </Link>
              </li>
              <li>
                <Link to="/trades" className="hover:text-white transition-colors">
                  Specialties Directory
                </Link>
              </li>
              <li>
                <Link to="/trades/commercial-journeyman-plumber" className="hover:text-white transition-colors">
                  Commercial Rough-in Teams
                </Link>
              </li>
              <li>
                <Link to="/trades/industrial-pipefitter-steamfitter" className="hover:text-white transition-colors">
                  Industrial Steamfitters
                </Link>
              </li>
              <li>
                <Link to="/trades/medgas-sanitary-piping" className="hover:text-white transition-colors">
                  ASSE 6010 MedGas Braziers
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: For Plumbers */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              For Plumbers
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/jobs" className="hover:text-white transition-colors">
                  Open Plumber Positions
                </Link>
              </li>
              <li>
                <Link to="/for-plumbers" className="hover:text-white transition-colors">
                  Why Work With Manstaff
                </Link>
              </li>
              <li>
                <Link to="/for-plumbers" className="hover:text-white transition-colors">
                  Per Diem & Travel Benefits
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  License Reciprocity Help
                </Link>
              </li>
              <li>
                <Link to="/my-dashboard" className="hover:text-white transition-colors">
                  Saved Jobs Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate & Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Dispatch & Headquarters
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
                <span>North American Central Dispatch & European Mobility Hub</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-slate-500 shrink-0" />
                <span className="font-mono text-slate-300">(800) 555-PLUMB</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-slate-500 shrink-0" />
                <span className="text-slate-300">dispatch@manstaffplumbing.com</span>
              </li>
              <li>
                <Link to="/contact" className="inline-block text-xs text-blue-400 hover:text-blue-300 underline font-medium pt-1">
                  Submit 24/7 Dispatch Ticket →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with legal notices */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} manstaffplumbing. All rights reserved. Commercial & Industrial Plumbing Staffing Solutions.
          </div>
          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <span>Equal Opportunity Employer</span>
            <span>·</span>
            <span>OSHA Certified Safety Program</span>
            <span>·</span>
            <span>State Board Verified</span>
            <span>·</span>
            <Link to="/about" className="hover:text-slate-200">About</Link>
            <span>·</span>
            <Link to="/faq" className="hover:text-slate-200">FAQ</Link>
            <span>·</span>
            <Link to="/contact" className="hover:text-slate-200">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
