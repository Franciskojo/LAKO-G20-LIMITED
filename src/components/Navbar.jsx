import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export const Navbar = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Accra Locations', href: '#locations' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Leadership & About', href: '#about' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Contact Bar */}
      <div className="bg-[#07090e] border-b border-slate-800/80 text-xs text-slate-300 py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a 
              href={`tel:${COMPANY_INFO.contacts.phones[0].raw}`}
              className="flex items-center space-x-1.5 hover:text-brand-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-500" />
              <span>Direct: <strong className="text-white">{COMPANY_INFO.contacts.phones[0].display}</strong></span>
            </a>
            <a 
              href={`tel:${COMPANY_INFO.contacts.phones[1].raw}`}
              className="flex items-center space-x-1.5 hover:text-brand-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-500" />
              <span>Executive: <strong className="text-white">{COMPANY_INFO.contacts.phones[1].display}</strong></span>
            </a>
            <div className="flex items-center space-x-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-brand-500" />
              <span>{COMPANY_INFO.contacts.physicalLocation}</span>
            </div>
          </div>

          <div className="flex items-center space-x-5">
            <a 
              href={`mailto:${COMPANY_INFO.contacts.emails[0].address}`}
              className="flex items-center space-x-1.5 hover:text-brand-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-500" />
              <span>{COMPANY_INFO.contacts.emails[0].address}</span>
            </a>
            <span className="text-slate-700">|</span>
            <div className="flex items-center space-x-1 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>AMA Certified Outdoor Media</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`transition-all duration-300 ${isScrolled ? 'glass-nav shadow-2xl py-3' : 'bg-[#0a0d14]/90 backdrop-blur-md py-4 border-b border-white/5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo Brand */}
          <a href="#" className="flex items-center group">
            <div className="relative flex items-center space-x-2.5">
              <div className="bg-gradient-to-br from-brand-500 to-brand-red p-2 rounded-xl shadow-glow-orange group-hover:scale-105 transition-transform duration-300">
                <span className="font-display font-extrabold text-white text-xl tracking-wider">G20</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline space-x-1.5">
                  <span className="font-display font-black text-2xl tracking-tight text-white group-hover:text-brand-400 transition-colors">
                    LAKO
                  </span>
                  <span className="font-display font-black text-sm tracking-widest text-brand-red uppercase">
                    LIMITED
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">
                  Billboards & Signages • Accra
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-brand-400 transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-500 to-brand-red transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Action CTA & Mobile Menu Toggle */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenConsultation}
              className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-glow-orange transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              <span>Consult Umar Adamu</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-800/80 text-slate-200 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-b border-slate-800 px-6 py-6 animate-fadeIn">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-brand-400 transition-colors py-2 border-b border-slate-800/60"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 flex flex-col space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold py-3 rounded-xl shadow-glow-orange"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 text-xs text-slate-400 space-y-2">
                <div className="font-semibold text-slate-200">Executive Director: Umar Adamu</div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-brand-500" />
                  <a href={`tel:${COMPANY_INFO.contacts.phones[0].raw}`} className="text-white hover:underline">
                    {COMPANY_INFO.contacts.phones[0].display}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-3.5 h-3.5 text-brand-500" />
                  <span>{COMPANY_INFO.contacts.physicalLocation}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
