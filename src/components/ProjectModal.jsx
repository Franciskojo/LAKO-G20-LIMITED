import React from 'react';
import { X, MapPin, CheckCircle, Eye, Building2, Tag, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export const ProjectModal = ({ project, onClose, onConsult }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-fadeIn"
        onClick={onClose}
      ></div>

      {/* Modal Dialog */}
      <div className="relative bg-slate-900 border border-slate-700 w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col animate-scaleUp">
        
        {/* Modal Header Bar */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center space-x-2">
            <span className="bg-brand-500/20 text-brand-400 text-xs font-bold px-2.5 py-1 rounded-md border border-brand-500/30">
              {project.category}
            </span>
            <span className="text-xs text-slate-400 font-mono">Case Study</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Main Image */}
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-slate-800">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <div className="bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-xs text-white">
                <MapPin className="w-3.5 h-3.5 text-brand-400 inline mr-1" />
                <span>{project.location}</span>
              </div>
            </div>
          </div>

          {/* Project Title and Overview */}
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              {project.title}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Deliverable & Scope Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-950/90 p-4 rounded-2xl border border-slate-800">
            <div className="space-y-1">
              <span className="text-xs text-slate-500 block">Project Scope & Spec:</span>
              <span className="text-sm font-semibold text-slate-200">{project.scope}</span>
            </div>
            <div className="space-y-1">
              <span className="text-xs text-slate-500 block">Client Impact:</span>
              <span className="text-sm font-bold text-brand-400">{project.metrics}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((t, idx) => (
              <span key={idx} className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-full border border-slate-700 flex items-center space-x-1">
                <Tag className="w-3 h-3 text-brand-500" />
                <span>{t}</span>
              </span>
            ))}
          </div>

          {/* Bottom Action Strip */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 text-center sm:text-left">
              Want a similar installation for your brand?
            </div>
            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <a
                href={`tel:${COMPANY_INFO.executiveDirector.phoneRaw1}`}
                className="flex-1 sm:flex-none flex items-center justify-center space-x-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl border border-slate-700"
              >
                <PhoneCall className="w-3.5 h-3.5 text-brand-400" />
                <span>Call Director</span>
              </a>
              <button
                onClick={() => {
                  onClose();
                  onConsult(`Inquiry for project similar to: ${project.title}`);
                }}
                className="flex-1 sm:flex-none bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-glow-orange transition-all"
              >
                Request Similar Quote
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
