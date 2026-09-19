import React, { useState } from 'react';
import { MapPin, Eye, Zap, ShieldAlert, ArrowUpRight, CheckCircle, Search } from 'lucide-react';
import { PRIME_LOCATIONS } from '../data/locations';

export const LocationExplorer = ({ onReserveLocation }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filterOptions = ['All', 'Central Accra', 'Airport Residential', 'Greater Accra East', 'Tema / Industrial Corridor', 'CBD / Adabraka', 'Osu / Downtown'];

  const filteredLocations = PRIME_LOCATIONS.filter(loc => {
    const matchesFilter = activeFilter === 'All' || loc.zone === activeFilter;
    const matchesSearch = loc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          loc.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          loc.highlight.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="locations" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title & Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-brand-500/10 border border-brand-500/30 px-3.5 py-1 rounded-full text-brand-400 text-xs font-semibold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Prime Arterial Network</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Accra's Highest Traffic <br />
              <span className="text-gradient-brand">Billboard Hotspots</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Secure massive brand impressions at Accra's busiest vehicular intersections, transit gateways, and commercial belts.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search location or highway..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900 text-white placeholder-slate-500 text-xs pl-10 pr-4 py-3 rounded-xl border border-slate-800 focus:outline-none focus:border-brand-500 transition-colors"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-xs font-semibold px-4 py-2 rounded-xl whitespace-nowrap transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-brand-500 text-white shadow-glow-orange'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLocations.map((loc) => (
            <div 
              key={loc.id}
              className="glass-card rounded-2xl overflow-hidden border-slate-800 hover:border-brand-500/50 flex flex-col justify-between group"
            >
              <div>
                {/* Location Image Header with Badges */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={loc.image} 
                    alt={loc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md ${
                      loc.status === 'Available Now' 
                        ? 'bg-emerald-600 text-white'
                        : loc.status === 'Booking Soon'
                        ? 'bg-blue-600 text-white'
                        : 'bg-amber-600 text-white'
                    }`}>
                      {loc.status}
                    </span>
                  </div>

                  {/* Zone Pill */}
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-[10px] font-bold text-slate-300 px-2.5 py-1 rounded-md border border-white/10">
                    {loc.zone}
                  </div>

                  {/* Daily Impressions in image */}
                  <div className="absolute bottom-3 left-3 flex items-center space-x-1.5 bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-xs text-white">
                    <Eye className="w-3.5 h-3.5 text-brand-400" />
                    <span className="font-bold">{loc.impressions}</span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-brand-400 transition-colors">
                      {loc.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 flex items-start space-x-1.5">
                      <MapPin className="w-3.5 h-3.5 text-brand-500 shrink-0 mt-0.5" />
                      <span>{loc.address}</span>
                    </p>
                  </div>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] bg-slate-900/90 p-3 rounded-xl border border-slate-800/80">
                    <div>
                      <span className="text-slate-500 block">Structure:</span>
                      <span className="font-semibold text-slate-200">{loc.type}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Dimensions:</span>
                      <span className="font-semibold text-brand-300">{loc.size}</span>
                    </div>
                    <div className="col-span-2 pt-1 border-t border-slate-800">
                      <span className="text-slate-500 block">Illumination:</span>
                      <span className="font-medium text-slate-300 flex items-center space-x-1 mt-0.5">
                        <Zap className="w-3 h-3 text-amber-400" />
                        <span>{loc.illumination}</span>
                      </span>
                    </div>
                  </div>

                  {/* Key Traffic Highlight */}
                  <div className="text-xs text-slate-300 bg-slate-800/40 p-2.5 rounded-lg border border-slate-700/50">
                    <strong className="text-brand-400">Reach:</strong> {loc.highlight}
                  </div>
                </div>
              </div>

              {/* Card Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onReserveLocation(loc.name)}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold text-xs py-3 rounded-xl shadow-glow-orange transition-all duration-300"
                >
                  <span>Reserve / Inquire This Site</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredLocations.length === 0 && (
          <div className="text-center py-16 bg-slate-900/50 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">No billboard locations match your search query.</p>
            <button 
              onClick={() => { setActiveFilter('All'); setSearchTerm(''); }}
              className="mt-3 text-xs text-brand-400 underline font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
