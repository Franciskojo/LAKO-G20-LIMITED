import React, { useState, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export const WhatsAppFloatingBtn = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="mb-2 bg-slate-900 border border-emerald-500/40 text-white text-xs py-2 px-3.5 rounded-2xl shadow-xl flex items-center space-x-2 animate-bounce">
          <span>Chat with Executive Director <strong>Umar Adamu</strong></span>
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${COMPANY_INFO.executiveDirector.phoneRaw1}?text=Hello%20Umar%20Adamu,%20I%20am%20inquiring%20about%20billboard%20sites%20and%20signage%20services%20with%20LAKO%20G20%20LIMITED.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-400 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 group border-2 border-emerald-400/50"
        aria-label="Direct WhatsApp Chat"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="hidden sm:inline font-bold text-xs">WhatsApp Direct</span>
      </a>
    </div>
  );
};
