import React, { useState } from 'react';
import { 
  Megaphone, 
  LayoutGrid, 
  Layers, 
  Truck, 
  TrendingUp, 
  Wrench, 
  Check, 
  ArrowRight,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { SERVICES } from '../data/services';
import { COMPANY_INFO } from '../data/companyInfo';

const iconMap = {
  Megaphone: Megaphone,
  LayoutGrid: LayoutGrid,
  Layers: Layers,
  Truck: Truck,
  TrendingUp: TrendingUp,
  Wrench: Wrench
};

export const Services = ({ onOpenConsultation }) => {
  const [selectedService, setSelectedService] = useState(SERVICES[0]);

  return (
    <section id="services" className="py-24 bg-[#0a0d14] relative">
      {/* Background Subtle Accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-500/10 border border-brand-500/30 px-3.5 py-1 rounded-full text-brand-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Outdoor & Advertising Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Engineered for <span className="text-gradient-brand">Dominance & Durability</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            From monumental arterial billboards in Accra to precision-crafted 3D illuminated channel letters, 
            LAKO G20 delivers end-to-end advertising excellence across Ghana.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon] || Megaphone;
            return (
              <div 
                key={service.id}
                className="glass-card rounded-2xl p-7 flex flex-col justify-between border-slate-800 hover:border-brand-500/50 group relative overflow-hidden"
              >
                {/* Top Glowing Edge on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 to-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div>
                  {/* Service Header with Badge */}
                  <div className="flex justify-between items-start mb-5">
                    <div className="p-3.5 rounded-xl bg-slate-800 text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-800/80 text-brand-300 border border-slate-700">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300 mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-slate-400">
                        <Check className="w-3.5 h-3.5 text-brand-500 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Available Formats Pills */}
                  <div className="pt-2 border-t border-slate-800/80 mb-6">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Popular Formats:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.formats.slice(0, 3).map((fmt, i) => (
                        <span key={i} className="text-[11px] bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-800">
                          {fmt}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action CTA */}
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSelectedService(service);
                      onOpenConsultation(service.title);
                    }}
                    className="w-full flex items-center justify-center space-x-2 bg-slate-800 hover:bg-brand-500 text-slate-200 hover:text-white font-semibold text-xs py-2.5 px-4 rounded-xl border border-slate-700 hover:border-brand-500 transition-all duration-300 shadow-sm"
                  >
                    <span>Inquire About {service.shortTitle}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Track Banner */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 p-8 rounded-3xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold text-white">
              Need a Custom Fabrication or Urgent National Campaign?
            </h3>
            <p className="text-sm text-slate-400 max-w-xl">
              Talk directly with Executive Director <strong className="text-slate-200">Umar Adamu</strong> for site surveys, AMA permits, and rapid project deployment in Accra.
            </p>
          </div>
          <div className="flex items-center space-x-4 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.executiveDirector.phoneRaw1}`}
              className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm px-5 py-3 rounded-xl border border-slate-700 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-brand-500" />
              <span>{COMPANY_INFO.executiveDirector.phonePrimary}</span>
            </a>
            <button
              onClick={() => onOpenConsultation("Custom Urgent Campaign")}
              className="bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-glow-orange transition-all hover:scale-105"
            >
              Consult Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
