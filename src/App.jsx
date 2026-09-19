import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { LocationExplorer } from './components/LocationExplorer';
import { PortfolioGallery } from './components/PortfolioGallery';
import { AboutDirector } from './components/AboutDirector';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingBtn } from './components/WhatsAppFloatingBtn';
import { ConsultationModal } from './components/ConsultationModal';

export function App() {
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState('');

  const handleOpenConsultation = (subject = "") => {
    setModalSubject(subject || "General Inquiry");
    setIsConsultModalOpen(true);
  };

  const handleReserveLocation = (locationName) => {
    setModalSubject(`Billboard Site Reservation: ${locationName}`);
    setIsConsultModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0d14] text-slate-100 flex flex-col selection:bg-brand-500 selection:text-white">
      {/* Navigation Bar */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenConsultation={() => handleOpenConsultation("Billboard & Outdoor Media Consultation")} />
        <Stats />
        <Services onOpenConsultation={(svc) => handleOpenConsultation(`Service Inquiry: ${svc}`)} />
        <LocationExplorer onReserveLocation={handleReserveLocation} />
        <PortfolioGallery onOpenConsultation={(proj) => handleOpenConsultation(proj)} />
        <AboutDirector onOpenConsultation={(topic) => handleOpenConsultation(topic)} />
        <Testimonials />
        <ContactSection defaultService={modalSubject} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action WhatsApp */}
      <WhatsAppFloatingBtn />

      {/* Direct Consultation / Booking Modal */}
      <ConsultationModal
        isOpen={isConsultModalOpen}
        onClose={() => setIsConsultModalOpen(false)}
        initialSubject={modalSubject}
      />
    </div>
  );
}

export default App;
