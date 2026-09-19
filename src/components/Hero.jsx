import React, { useState } from 'react';
import { 
  Megaphone, 
  MapPin, 
  PhoneCall, 
  MessageSquare, 
  Sun, 
  Moon, 
  Sparkles, 
  CheckCircle2, 
  Eye, 
  Award,
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export const Hero = ({ onOpenConsultation }) => {
  const [isNightMode, setIsNightMode] = useState(true);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-hero-gradient">
      {/* Background Decorative Grid and Glow Circles */}
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-40"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-brand-red/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Value Proposition, Action CTAs */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center space-x-2 bg-slate-800/80 border border-brand-500/30 px-4 py-1.5 rounded-full backdrop-blur-md shadow-sm">
              <span className="flex h-2.5 w-2.5 rounded-full bg-brand-500 animate-ping"></span>
              <span className="text-xs font-semibold text-brand-300 uppercase tracking-wider">
                Ghana's Premier Outdoor Media & Signage Group
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Make Your Brand <br className="hidden sm:block" />
              <span className="text-gradient-brand">Impossible to Miss</span> <br className="hidden sm:block" />
              Across Accra & Ghana.
            </h1>

            {/* Business Card Exact Subtitle & Description */}
            <p className="text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              <strong className="text-white font-semibold">LAKO G20 LIMITED</strong> specializes in prime road arterial 
              <span className="text-brand-400 font-medium"> Billboards</span>, 
              custom <span className="text-brand-400 font-medium">3D LED Signboards</span>, 
              heavy-duty <span className="text-brand-400 font-medium">Banners</span>, 
              and high-impact <span className="text-brand-400 font-medium">Marketing & Promotions</span>. 
              Engineered for maximum eye-level footfall and durability.
            </p>

            {/* Core Value Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <div className="flex items-center space-x-1.5 text-xs text-slate-300 bg-slate-800/50 border border-slate-700/60 px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-500" />
                <span>Prime Arterial Locations</span>
              </div>
              <div className="flex items-center space-x-1.5 text-xs text-slate-300 bg-slate-800/50 border border-slate-700/60 px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-500" />
                <span>24/7 Solar & LED Floodlit</span>
              </div>
              <div className="flex items-center space-x-1.5 text-xs text-slate-300 bg-slate-800/50 border border-slate-700/60 px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-500" />
                <span>AMA Certified & Fabricated</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-500 via-brand-600 to-brand-red hover:from-brand-600 hover:to-red-700 text-white font-bold px-7 py-3.5 rounded-xl shadow-glow-orange transition-all duration-300 hover:scale-[1.03] active:scale-95"
              >
                <span>Request Project Consultation</span>
                <ChevronRight className="w-5 h-5" />
              </button>

              <a
                href="#locations"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-slate-800/90 hover:bg-slate-700 text-white font-semibold px-6 py-3.5 rounded-xl border border-slate-700 transition-all duration-300 hover:border-brand-500/50"
              >
                <MapPin className="w-4 h-4 text-brand-400" />
                <span>View Billboard Sites</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.executiveDirector.phoneRaw1}?text=Hello%20Umar%20Adamu,%20I%20am%20interested%20in%20LAKO%20G20%20billboard%20and%20signage%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-5 py-3.5 rounded-xl shadow-lg transition-all duration-300"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Umar</span>
              </a>
            </div>

            {/* Direct Contact Phone & Address Quick Callout */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-xs text-slate-400">
              <span className="flex items-center space-x-1">
                <PhoneCall className="w-3.5 h-3.5 text-brand-400" />
                <span>Direct Hotline: <a href={`tel:${COMPANY_INFO.contacts.phones[0].raw}`} className="text-white font-medium hover:underline">{COMPANY_INFO.contacts.phones[0].display}</a></span>
              </span>
              <span className="hidden sm:inline text-slate-600">•</span>
              <span className="flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-brand-400" />
                <span>Adabraka, Accra (P.O. Box 256, Nima-Ghana)</span>
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Billboard Mockup Simulator */}
          <div className="lg:col-span-5 relative">
            
            {/* Illumination Switcher Pill */}
            <div className="flex justify-end mb-3">
              <button
                onClick={() => setIsNightMode(!isNightMode)}
                className="flex items-center space-x-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 text-slate-200 hover:text-white hover:border-brand-500 transition-all shadow-md"
                title="Toggle Billboard 24/7 Night Light Simulation"
              >
                {isNightMode ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>View in Daylight</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-blue-300" />
                    <span>Simulate Night LED Illumination</span>
                  </>
                )}
              </button>
            </div>

            {/* Interactive 3D Billboard Canvas Structure */}
            <div className={`relative rounded-2xl overflow-hidden border transition-all duration-700 ${
              isNightMode 
                ? 'bg-slate-950 border-brand-500/40 shadow-glow-orange' 
                : 'bg-slate-900 border-slate-700 shadow-card-dark'
            }`}>
              
              {/* Overhead Spotlight Truss Simulation */}
              <div className="bg-slate-900 border-b border-slate-800 p-2.5 flex justify-between items-center px-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                  <span className="text-[11px] font-mono text-slate-400 ml-2">LAKO G20 UNIPOLE SYSTEM</span>
                </div>
                
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                  isNightMode ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-slate-800 text-slate-400'
                }`}>
                  {isNightMode ? '● 24/7 LED ILLUMINATED' : '○ DAYLIGHT VISIBILITY'}
                </span>
              </div>

              {/* Billboard Face Mockup */}
              <div className="relative p-6 sm:p-8 min-h-[340px] flex flex-col justify-between overflow-hidden">
                
                {/* Background City Silhouette */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-700 bg-cover bg-center ${
                    isNightMode ? 'opacity-25 filter brightness-50 contrast-125' : 'opacity-40'
                  }`}
                  style={{
                    backgroundImage: `url('/images/billboard_unipole.jpg')`
                  }}
                ></div>

                {/* Night Light Beams */}
                {isNightMode && (
                  <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-brand-400/20 via-brand-500/5 to-transparent pointer-events-none"></div>
                )}

                {/* Top Billboard Meta */}
                <div className="relative z-10 flex justify-between items-start">
                  <div className="bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-xs text-white">
                    <span className="text-brand-400 font-bold">PRIME SITE:</span> Kwame Nkrumah Circle
                  </div>
                  <div className="bg-brand-500/90 text-white font-extrabold text-xs px-3 py-1 rounded-lg shadow-md">
                    AVAILABLE FOR LEASE
                  </div>
                </div>

                {/* Center Brand Identity on Billboard */}
                <div className="relative z-10 text-center my-6 space-y-2">
                  <div className="inline-block bg-black/75 backdrop-blur-md px-6 py-4 rounded-2xl border border-brand-500/40">
                    <div className="flex items-center justify-center space-x-2 mb-1">
                      <span className="font-display font-black text-3xl text-white tracking-tight">LAKO</span>
                      <span className="bg-gradient-to-r from-brand-500 to-brand-red text-white font-extrabold text-sm px-2 py-0.5 rounded">G20</span>
                      <span className="font-display font-black text-xl text-brand-red">LIMITED</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
                      Billboards • Banners • 3D Signboards • Marketing
                    </p>
                    <div className="mt-2 text-sm text-brand-400 font-mono font-bold">
                      TEL: +233 (0) 243 758 633 / 261 571 833
                    </div>
                  </div>
                </div>

                {/* Bottom Traffic & Spec Strip */}
                <div className="relative z-10 bg-black/85 backdrop-blur-md p-3 rounded-xl border border-white/10 flex justify-between items-center text-xs">
                  <div className="flex items-center space-x-1.5 text-slate-300">
                    <Eye className="w-4 h-4 text-brand-400" />
                    <span><strong>350,000+</strong> Daily Impressions</span>
                  </div>
                  <div className="text-slate-400 font-mono text-[11px]">
                    12m x 4m • Double Sided
                  </div>
                </div>
              </div>

              {/* Billboard Pylon Steel Pole Mount Simulation */}
              <div className="bg-gradient-to-b from-slate-800 to-slate-900 py-3 px-6 flex justify-between items-center border-t border-slate-800">
                <div className="flex items-center space-x-2 text-xs text-slate-300">
                  <Award className="w-4 h-4 text-brand-500" />
                  <span>High-Spec Structural Steel Assembly</span>
                </div>
                <button
                  onClick={onOpenConsultation}
                  className="text-xs text-brand-400 font-semibold hover:text-brand-300 underline"
                >
                  Inquire This Structure →
                </button>
              </div>
            </div>

            {/* Quick Floating Director Credential Pill */}
            <div className="mt-4 glass-card p-3 rounded-xl flex items-center justify-between border-slate-700/80">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-brand-500/20 border border-brand-500/40 flex items-center justify-center font-bold text-brand-400 text-sm">
                  UA
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{COMPANY_INFO.executiveDirector.name}</div>
                  <div className="text-xs text-slate-400">{COMPANY_INFO.executiveDirector.title} • LAKO G20</div>
                </div>
              </div>
              <a
                href={`tel:${COMPANY_INFO.executiveDirector.phoneRaw1}`}
                className="flex items-center space-x-1 bg-brand-500/20 hover:bg-brand-500/30 text-brand-300 text-xs font-semibold px-3 py-1.5 rounded-lg border border-brand-500/30 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Directly</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
