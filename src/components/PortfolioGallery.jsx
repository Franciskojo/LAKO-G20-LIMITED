import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/portfolio';
import { ExternalLink, Layers, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

export const PortfolioGallery = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Billboards', 'Signboards', 'Banners', 'Fleet Branding', 'Marketing & Promotion'];

  const filteredProjects = PORTFOLIO_PROJECTS.filter(project => {
    if (activeTab === 'All') return true;
    return project.category === activeTab;
  });

  return (
    <section id="portfolio" className="py-24 bg-[#0a0d14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-500/10 border border-brand-500/30 px-3.5 py-1 rounded-full text-brand-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Showcase of Craftsmanship & Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Featured <span className="text-gradient-brand">Campaigns & Signages</span>
          </h2>
          <p className="text-slate-400 text-base">
            Explore our high-impact outdoor billboards, illuminated 3D architectural signage, fleet wraps, and brand activation milestones across Ghana.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`text-xs font-bold px-5 py-2.5 rounded-xl transition-all duration-300 ${
                activeTab === cat
                  ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-glow-orange scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden border-slate-800 hover:border-brand-500/50 flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div>
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                  <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md text-brand-400 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md border border-brand-500/30">
                    {project.category}
                  </div>

                  <div className="absolute bottom-3 left-3 flex items-center space-x-1.5 text-xs text-white">
                    <MapPin className="w-3.5 h-3.5 text-brand-400" />
                    <span className="text-[11px] font-medium drop-shadow">{project.location}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-400 transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="text-xs bg-slate-900/90 p-2.5 rounded-lg border border-slate-800/80 text-slate-300">
                    <strong className="text-brand-400">Result:</strong> {project.metrics}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-6 pt-0">
                <div className="flex items-center justify-between text-xs font-semibold text-brand-400 group-hover:text-brand-300 pt-2 border-t border-slate-800/80">
                  <span>View Full Case Study</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onConsult={(spec) => {
            setSelectedProject(null);
            onOpenConsultation(spec);
          }}
        />
      )}
    </section>
  );
};
