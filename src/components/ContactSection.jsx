import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Globe, 
  ShieldCheck, 
  Sparkles,
  PhoneCall
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../data/companyInfo';
import { SERVICES } from '../data/services';

export const ContactSection = ({ defaultService = "" }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: defaultService || 'Billboards & Large Unipoles',
    location: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Trigger festive celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#f97316', '#dc2626', '#f59e0b', '#ffffff']
        });
      } catch (err) {
        // Fallback gracefully
      }
    }, 800);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Umar Adamu (Executive Director, LAKO G20 LIMITED),\n\n` +
      `My name is ${formData.name || 'a prospective client'}.\n` +
      `I am inquiring regarding: ${formData.service || 'Outdoor Advertising & Signage'}.\n` +
      `Target Location: ${formData.location || 'Accra'}.\n` +
      `Details: ${formData.message || 'Please provide me with availability and consultation.'}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.executiveDirector.phoneRaw1}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-500/10 border border-brand-500/30 px-3.5 py-1 rounded-full text-brand-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Consultation & Site Booking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Let’s Build Something <span className="text-gradient-brand">Extraordinary</span>
          </h2>
          <p className="text-slate-400 text-base">
            Reach Executive Director <strong>Umar Adamu</strong> and the LAKO G20 production team for prime billboard bookings, custom 3D signage fabrications, and rapid quotes in Accra.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Main Headquarters Info Box */}
            <div className="glass-card rounded-3xl p-7 border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                <span>Head Office & Contact Details</span>
              </h3>

              {/* Physical Address */}
              <div className="flex items-start space-x-3.5 text-sm">
                <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-white">Physical Location</div>
                  <div className="text-slate-300 font-medium">{COMPANY_INFO.contacts.physicalLocation}</div>
                  <div className="text-xs text-slate-400 mt-0.5">Postal: {COMPANY_INFO.contacts.postalAddress}</div>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start space-x-3.5 text-sm">
                <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-white">Direct Telephone Lines</div>
                  <div className="space-y-1 mt-1">
                    <a 
                      href={`tel:${COMPANY_INFO.contacts.phones[0].raw}`}
                      className="block text-brand-400 hover:text-brand-300 font-bold"
                    >
                      {COMPANY_INFO.contacts.phones[0].display} <span className="text-xs text-slate-400 font-normal">(Primary / WhatsApp)</span>
                    </a>
                    <a 
                      href={`tel:${COMPANY_INFO.contacts.phones[1].raw}`}
                      className="block text-slate-200 hover:text-brand-300 font-medium"
                    >
                      {COMPANY_INFO.contacts.phones[1].display} <span className="text-xs text-slate-400 font-normal">(Executive Line)</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Emails */}
              <div className="flex items-start space-x-3.5 text-sm">
                <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-white">Email Inquiries</div>
                  <div className="space-y-1 mt-1">
                    <a 
                      href={`mailto:${COMPANY_INFO.contacts.emails[0].address}`}
                      className="block text-slate-200 hover:text-brand-400 transition-colors"
                    >
                      {COMPANY_INFO.contacts.emails[0].address}
                    </a>
                    <a 
                      href={`mailto:${COMPANY_INFO.contacts.emails[1].address}`}
                      className="block text-slate-400 hover:text-brand-400 transition-colors"
                    >
                      {COMPANY_INFO.contacts.emails[1].address}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social & Web */}
              <div className="flex items-start space-x-3.5 text-sm">
                <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-400 shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-white">Facebook Page</div>
                  <a 
                    href={COMPANY_INFO.contacts.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-400 hover:underline font-medium block mt-0.5"
                  >
                    {COMPANY_INFO.contacts.facebookDisplay}
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-3.5 text-sm pt-2 border-t border-slate-800">
                <div className="p-2.5 rounded-xl bg-slate-800 text-slate-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-white">Operating Hours</div>
                  <div className="text-xs text-slate-400">{COMPANY_INFO.contacts.hours}</div>
                </div>
              </div>

            </div>

            {/* Quick WhatsApp Card */}
            <div className="bg-gradient-to-br from-emerald-950/80 to-slate-900 p-6 rounded-3xl border border-emerald-500/30 flex items-center justify-between">
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">Instant Chat Available</div>
                <div className="text-base font-bold text-white">WhatsApp Umar Adamu</div>
                <div className="text-xs text-slate-400">Get immediate billboard site availability</div>
              </div>
              <a
                href={`https://wa.me/${COMPANY_INFO.executiveDirector.phoneRaw1}?text=Hello%20Umar%20Adamu,%20I%20am%20inquiring%20about%20billboard%20sites%20and%20signage.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-400 text-white p-3.5 rounded-2xl shadow-lg transition-transform hover:scale-105"
                title="Open WhatsApp Chat"
              >
                <MessageSquare className="w-6 h-6" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Request Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 sm:p-10 border-slate-800 relative">
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-white">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Executive Director <strong>Umar Adamu</strong> and the LAKO G20 team have received your request regarding <strong>{formData.service}</strong>. We will review the specs and reach out shortly on <strong>{formData.phone}</strong>.
                  </p>
                  
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleWhatsAppDirect}
                      className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-md transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Also Send to WhatsApp for Instant Review</span>
                    </button>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs text-slate-400 hover:text-white underline py-2 px-3"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-800 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-white">
                      Request a Project Consultation or Billboard Site
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Fill out the form below. For immediate quotes, you can also submit directly via WhatsApp.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Full Name / Company <span className="text-brand-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Kwame Mensah (Apex Ltd)"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-slate-900/90 text-white placeholder-slate-500 text-xs px-4 py-3 rounded-xl border border-slate-800 focus:outline-none focus:border-brand-500 transition-colors"
                      />
                    </div>

                    {/* Phone / WhatsApp */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Phone / WhatsApp Number <span className="text-brand-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +233 24 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-slate-900/90 text-white placeholder-slate-500 text-xs px-4 py-3 rounded-xl border border-slate-800 focus:outline-none focus:border-brand-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-slate-900/90 text-white placeholder-slate-500 text-xs px-4 py-3 rounded-xl border border-slate-800 focus:outline-none focus:border-brand-500 transition-colors"
                      />
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Service of Interest <span className="text-brand-500">*</span>
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full bg-slate-900/90 text-white text-xs px-4 py-3 rounded-xl border border-slate-800 focus:outline-none focus:border-brand-500 transition-colors"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Urgent National Billboard Campaign">Urgent National Billboard Campaign</option>
                        <option value="Custom 3D LED Signage Fabrication">Custom 3D LED Signage Fabrication</option>
                        <option value="Vehicle Fleet Vinyl Wrap">Vehicle Fleet Vinyl Wrap</option>
                      </select>
                    </div>
                  </div>

                  {/* Target Location / Highway */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Target Location or Installation Area in Ghana
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Kwame Nkrumah Circle, Spintex Rd, Airport Residential, Adabraka, Kumasi..."
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="w-full bg-slate-900/90 text-white placeholder-slate-500 text-xs px-4 py-3 rounded-xl border border-slate-800 focus:outline-none focus:border-brand-500 transition-colors"
                    />
                  </div>

                  {/* Message / Specifications */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Project Details, Dimensions, or Requirements
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe what you need (e.g., billboard lease duration, signage dimensions, banner quantities, lighting specifications)..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-slate-900/90 text-white placeholder-slate-500 text-xs px-4 py-3 rounded-xl border border-slate-800 focus:outline-none focus:border-brand-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold text-xs py-3.5 px-6 rounded-xl shadow-glow-orange transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Processing Inquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Project Inquiry</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3.5 px-6 rounded-xl shadow-md transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Direct WhatsApp</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
