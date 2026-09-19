import React from 'react';
import { MapPin, CheckCircle, Shield, Award, Users, TrendingUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export const Stats = () => {
  const highlights = [
    {
      icon: MapPin,
      value: "50+ Sites",
      title: "Prime Accra Billboard Locations",
      desc: "Circle, Airport Rd, Spintex, Tema Expressway, Graphic Rd, Osu & Kasoa.",
    },
    {
      icon: Shield,
      value: "100% Certified",
      title: "AMA & Municipal Assembly Compliant",
      desc: "All structural steelworks engineered to Ghanaian building and safety codes.",
    },
    {
      icon: CheckCircle,
      value: "500+ Projects",
      title: "Completed Installations & Signages",
      desc: "Delivered for leading financial institutions, telecom networks, retail & FMCG.",
    },
    {
      icon: Award,
      value: "15+ Years",
      title: "Industry Leadership in Ghana",
      desc: "Led by Executive Director Umar Adamu with an exceptional reputation for durability.",
    },
  ];

  return (
    <section className="py-12 bg-slate-950 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="glass-panel p-6 rounded-2xl border-slate-800 hover:border-brand-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-extrabold text-white tracking-tight font-display">
                    {item.value}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-100 mb-1.5 group-hover:text-brand-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
