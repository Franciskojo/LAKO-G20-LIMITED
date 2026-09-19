import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  CheckCircle, 
  Building,
  Target,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export const AboutDirector = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Leadership Card & Verified Badge */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Leadership Profile Box */}
            <div className="glass-card rounded-3xl p-8 border-slate-800 text-center relative overflow-hidden">
              
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/10 rounded-full blur-2xl pointer-events-none"></div>

              {/* Avatar / Portrait Representation */}
              <div className="relative mx-auto w-36 h-36 mb-6">
                <div className="w-full h-full rounded-3xl bg-gradient-to-tr from-brand-600 to-brand-500 p-1 shadow-glow-orange">
                  <div className="w-full h-full rounded-[22px] bg-slate-900 flex flex-col items-center justify-center text-white">
                    <span className="font-display font-black text-4xl text-brand-400">UA</span>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Director</span>
                  </div>
                </div>
                
                {/* Verified Pill */}
                <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-2 rounded-xl shadow-lg border-2 border-slate-900" title="Verified Executive Director">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>

              {/* Name & Title */}
              <h3 className="text-2xl font-black text-white font-display">
                {COMPANY_INFO.executiveDirector.name}
              </h3>
              <p className="text-sm font-bold text-brand-400 uppercase tracking-wider mt-0.5">
                {COMPANY_INFO.executiveDirector.title}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                LAKO G20 LIMITED • Accra, Ghana
              </p>

              {/* Business Card Reference Card */}
              <div className="mt-6 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-left space-y-2.5 text-xs">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider pb-1 border-b border-slate-800 flex justify-between items-center">
                  <span>Executive Direct Lines</span>
                  <span className="text-emerald-400">● 24/7 Available</span>
                </div>
                
                <a 
                  href={`tel:${COMPANY_INFO.executiveDirector.phoneRaw1}`} 
                  className="flex items-center space-x-2 text-slate-200 hover:text-brand-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                  <span>Primary: <strong>{COMPANY_INFO.executiveDirector.phonePrimary}</strong></span>
                </a>

                <a 
                  href={`tel:${COMPANY_INFO.executiveDirector.phoneRaw2}`} 
                  className="flex items-center space-x-2 text-slate-200 hover:text-brand-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                  <span>Alt Line: <strong>{COMPANY_INFO.executiveDirector.phoneSecondary}</strong></span>
                </a>

                <a 
                  href={`mailto:${COMPANY_INFO.executiveDirector.emailGmail}`} 
                  className="flex items-center space-x-2 text-slate-200 hover:text-brand-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                  <span className="truncate">{COMPANY_INFO.executiveDirector.emailGmail}</span>
                </a>

                <div className="flex items-start space-x-2 text-slate-300 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-500 shrink-0 mt-0.5" />
                  <span>{COMPANY_INFO.contacts.physicalLocation} <br /><span className="text-slate-500">({COMPANY_INFO.contacts.postalAddress})</span></span>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <a
                  href={`tel:${COMPANY_INFO.executiveDirector.phoneRaw1}`}
                  className="flex items-center justify-center space-x-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold py-2.5 rounded-xl border border-slate-700 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-400" />
                  <span>Direct Call</span>
                </a>
                <a
                  href={`https://wa.me/${COMPANY_INFO.executiveDirector.phoneRaw1}?text=Hello%20Executive%20Director%20Umar%20Adamu,%20I%20would%20like%20to%20consult%20on%20a%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-2.5 rounded-xl shadow-md transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Company Story & Vision */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center space-x-2 bg-brand-500/10 border border-brand-500/30 px-3.5 py-1 rounded-full text-brand-400 text-xs font-semibold uppercase tracking-wider">
              <Building className="w-3.5 h-3.5" />
              <span>Corporate Profile & Leadership</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Leading Outdoor Advertising & Signage Fabrication in <span className="text-gradient-brand">Greater Accra & Beyond</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Under the visionary leadership of <strong>Executive Director Umar Adamu</strong>, <strong>LAKO G20 LIMITED</strong> has grown into one of Ghana's most dependable outdoor advertising and structural fabrication firms. Headquartered in Adabraka, Accra, we combine engineering rigor with world-class digital print technologies.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              Whether you are an established financial corporation seeking illuminated 3D stainless-steel rooftop signage, an FMCG brand deploying high-frequency highway unipoles, or an SME requiring quick, sharp promotional banners, we deliver precision, rapid permitting, and storm-proof craftsmanship.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                <div className="flex items-center space-x-2 text-brand-400 font-bold text-sm">
                  <Target className="w-4 h-4" />
                  <span>Strategic High-Traffic Sites</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Prime positioning on Circle, Airport, Spintex, Graphic Road, and Tema Motorway guaranteeing maximum daily visual impressions.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                <div className="flex items-center space-x-2 text-brand-400 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Heavy-Duty Tropical Build</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Engineered with anti-corrosion galvanized steel and UV-stabilized materials built to resist tropical humidity and heat.
                </p>
              </div>
            </div>

            {/* CTA action */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => onOpenConsultation("General Executive Consultation")}
                className="w-full sm:w-auto bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-glow-orange transition-all duration-300"
              >
                Schedule Site Consultation
              </button>
              
              <a
                href="#contact"
                className="w-full sm:w-auto text-center text-xs text-slate-300 hover:text-white font-semibold py-3 px-6 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-900/80 transition-colors"
              >
                Visit Adabraka Office
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
