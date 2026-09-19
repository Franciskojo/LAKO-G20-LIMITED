import React, { useState, useEffect } from 'react';
import { X, Send, MessageSquare, PhoneCall, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../data/companyInfo';
import { SERVICES } from '../data/services';

export const ConsultationModal = ({ isOpen, onClose, initialSubject = "" }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: initialSubject || 'Billboards & Large Unipoles',
    location: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialSubject) {
      setFormData(prev => ({ ...prev, service: initialSubject }));
    }
  }, [initialSubject]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (err) {}
    }, 600);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Umar Adamu (Executive Director, LAKO G20 LIMITED),\n\n` +
      `I would like to consult on: ${formData.service || 'Advertising Campaign'}.\n` +
      `Name: ${formData.name || 'Prospective Client'}\n` +
      `Phone: ${formData.phone || 'Direct'}\n` +
      `Location: ${formData.location || 'Accra, Ghana'}\n` +
      `Notes: ${formData.message || 'Please provide site availability / fabrication timeline.'}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.executiveDirector.phoneRaw1}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity animate-fadeIn"
        onClick={onClose}
      ></div>

      {/* Modal Dialog */}
      <div className="relative bg-slate-900 border border-slate-700 w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl z-10 animate-scaleUp">
        
        {/* Header Bar */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-lg bg-brand-500 flex items-center justify-center font-bold text-white text-xs">
              G20
            </div>
            <div>
              <div className="text-sm font-bold text-white">Direct Executive Consultation</div>
              <div className="text-[10px] text-slate-400">Executive Director: Umar Adamu</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4 animate-fadeIn">
              <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Consultation Request Submitted!
              </h3>
              <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Umar Adamu and our operations team will call you at <strong>{formData.phone}</strong> shortly.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-2">
                <button
                  onClick={handleWhatsApp}
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp as well</span>
                </button>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="w-full sm:w-auto text-xs text-slate-400 hover:text-white py-2 px-3"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80 flex items-center justify-between text-xs text-slate-300 mb-2">
                <span>Immediate Assistance Hotline:</span>
                <a 
                  href={`tel:${COMPANY_INFO.executiveDirector.phoneRaw1}`}
                  className="text-brand-400 font-bold hover:underline flex items-center space-x-1"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>{COMPANY_INFO.executiveDirector.phonePrimary}</span>
                </a>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                  Full Name / Organization *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Samuel Darko"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-950 text-white placeholder-slate-500 text-xs px-3.5 py-2.5 rounded-xl border border-slate-800 focus:outline-none focus:border-brand-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+233 24..."
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-slate-950 text-white placeholder-slate-500 text-xs px-3.5 py-2.5 rounded-xl border border-slate-800 focus:outline-none focus:border-brand-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                    Service Required
                  </label>
                  <input
                    type="text"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-slate-950 text-white placeholder-slate-500 text-xs px-3.5 py-2.5 rounded-xl border border-slate-800 focus:outline-none focus:border-brand-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                  Target Location / Area
                </label>
                <input
                  type="text"
                  placeholder="e.g. Circle, Spintex, Airport, Kumasi highway"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className="w-full bg-slate-950 text-white placeholder-slate-500 text-xs px-3.5 py-2.5 rounded-xl border border-slate-800 focus:outline-none focus:border-brand-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                  Brief Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Campaign duration, size or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-950 text-white placeholder-slate-500 text-xs px-3.5 py-2.5 rounded-xl border border-slate-800 focus:outline-none focus:border-brand-500 transition-colors resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center space-x-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold text-xs py-3 rounded-xl shadow-glow-orange transition-all"
                >
                  {isSubmitting ? "Submitting..." : "Send Request to Umar Adamu"}
                </button>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="p-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-md transition-colors"
                  title="Direct WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
