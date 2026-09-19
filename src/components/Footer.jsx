import React from 'react';
import { Phone, Mail, MapPin, Globe, ArrowUp, ShieldCheck, Heart } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';
import { SERVICES } from '../data/services';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#06080d] border-t border-slate-800 text-slate-400 text-sm">
      
      {/* Top CTA Banner */}
      <div className="border-b border-slate-800/80 py-12 bg-gradient-to-r from-brand-950/40 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-2xl font-black text-white font-display">
              Ready to secure your prime Accra billboard or corporate signage?
            </h3>
            <p className="text-slate-400 text-sm">
              Speak directly with Executive Director Umar Adamu for availability and site inspections.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <a
              href={`tel:${COMPANY_INFO.executiveDirector.phoneRaw1}`}
              className="bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs px-6 py-3.5 rounded-xl shadow-glow-orange transition-all hover:scale-105"
            >
              Call {COMPANY_INFO.executiveDirector.phonePrimary}
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-brand-500 to-brand-red p-2 rounded-xl shadow-glow-orange">
                <span className="font-display font-extrabold text-white text-lg tracking-wider">G20</span>
              </div>
              <div className="flex items-baseline space-x-1.5">
                <span className="font-display font-black text-xl text-white">LAKO</span>
                <span className="font-display font-black text-xs text-brand-red uppercase">LIMITED</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 font-medium">
              {COMPANY_INFO.tagline}
            </p>

            <p className="text-xs text-slate-400 leading-relaxed">
              Ghana's premier outdoor advertising and structural signage company. Certified by local metropolitan assemblies to engineer and deploy high-visibility advertising structures across Greater Accra and nationwide.
            </p>

            <div className="pt-2 flex items-center space-x-2 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>AMA Registered & Structural Safety Certified</span>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-brand-400 transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-brand-400 transition-colors">Our Services</a></li>
              <li><a href="#locations" className="hover:text-brand-400 transition-colors">Accra Billboard Sites</a></li>
              <li><a href="#portfolio" className="hover:text-brand-400 transition-colors">Project Portfolio</a></li>
              <li><a href="#about" className="hover:text-brand-400 transition-colors">Executive Leadership</a></li>
              <li><a href="#testimonials" className="hover:text-brand-400 transition-colors">Client Reviews</a></li>
              <li><a href="#contact" className="hover:text-brand-400 transition-colors">Contact Head Office</a></li>
            </ul>
          </div>

          {/* Col 4: Verified Contact Info (Card) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Head Office & Leadership
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="text-slate-200">
                <strong>Executive Director:</strong> Umar Adamu
              </div>
              
              <div className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-brand-500 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.contacts.physicalLocation}<br /><span className="text-slate-500">{COMPANY_INFO.contacts.postalAddress}</span></span>
              </div>

              <div className="flex items-start space-x-2">
                <Phone className="w-3.5 h-3.5 text-brand-500 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <a href={`tel:${COMPANY_INFO.contacts.phones[0].raw}`} className="hover:text-brand-400 block font-medium text-slate-300">
                    {COMPANY_INFO.contacts.phones[0].display}
                  </a>
                  <a href={`tel:${COMPANY_INFO.contacts.phones[1].raw}`} className="hover:text-brand-400 block font-medium text-slate-300">
                    {COMPANY_INFO.contacts.phones[1].display}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Mail className="w-3.5 h-3.5 text-brand-500 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <a href={`mailto:${COMPANY_INFO.contacts.emails[0].address}`} className="hover:text-brand-400 block text-slate-300">
                    {COMPANY_INFO.contacts.emails[0].address}
                  </a>
                  <a href={`mailto:${COMPANY_INFO.contacts.emails[1].address}`} className="hover:text-brand-400 block text-slate-300">
                    {COMPANY_INFO.contacts.emails[1].address}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Globe className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                <a href={COMPANY_INFO.contacts.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 text-slate-300">
                  {COMPANY_INFO.contacts.facebookDisplay}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Back to top */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} <strong>LAKO G20 LIMITED</strong>. All Rights Reserved. Adabraka, Accra - Ghana.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 px-3.5 py-1.5 rounded-lg border border-slate-800 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-brand-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};
