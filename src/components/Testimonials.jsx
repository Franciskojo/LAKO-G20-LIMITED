import React from 'react';
import { Star, Quote, Sparkles, Building2, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#0a0d14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-500/10 border border-brand-500/30 px-3.5 py-1 rounded-full text-brand-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Trusted by Top Brands in <span className="text-gradient-brand">Accra & Beyond</span>
          </h2>
          <p className="text-slate-400 text-base">
            See how LAKO G20 LIMITED empowers corporate organizations, brand marketers, and SMEs with dependable outdoor media execution.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div 
              key={item.id}
              className="glass-card rounded-2xl p-7 border-slate-800 flex flex-col justify-between relative group"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex justify-between items-center mb-5">
                  <div className="flex space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-700 group-hover:text-brand-500/40 transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Company Details */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center space-x-3.5">
                <img 
                  src={item.avatar} 
                  alt={item.author}
                  className="w-11 h-11 rounded-full object-cover border-2 border-brand-500/50" 
                />
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-brand-400 transition-colors">
                    {item.author}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-medium">
                    {item.role}
                  </p>
                  <p className="text-[10px] text-brand-400/90 font-mono">
                    {item.company} • {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 flex flex-wrap items-center justify-around gap-6 text-xs text-slate-400">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>AMA Municipal Advertising Permits</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>510gsm High-Density Flex Banners</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Heavy Structural Steel Welding</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>24/7 Floodlight Maintenance Guarantee</span>
          </div>
        </div>

      </div>
    </section>
  );
};
