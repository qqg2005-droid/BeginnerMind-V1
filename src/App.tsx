import React, { useState, useEffect } from 'react';
import { DisclaimerModal } from './components/DisclaimerModal';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CoreBusiness } from './components/CoreBusiness';
import { InvestmentServices } from './components/InvestmentServices';
import { ContactUs } from './components/ContactUs';
import { Footer } from './components/Footer';

export default function App() {
  const [hasAcceptedDisclaimer, setHasAcceptedDisclaimer] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if user has previously accepted
    const accepted = sessionStorage.getItem('beginnerMindDisclaimerAccepted');
    if (accepted === 'true') {
      setHasAcceptedDisclaimer(true);
    }
    setIsLoaded(true);
  }, []);

  const handleAcceptDisclaimer = () => {
    sessionStorage.setItem('beginnerMindDisclaimerAccepted', 'true');
    setHasAcceptedDisclaimer(true);
    window.scrollTo(0, 0);
  };

  if (!isLoaded) return null;

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans text-[#1A1A1A] selection:bg-[#002D5B] selection:text-white">
      {!hasAcceptedDisclaimer && (
        <DisclaimerModal onAccept={handleAcceptDisclaimer} />
      )}
      
      <Navigation />
      
      <main className={!hasAcceptedDisclaimer ? 'blur-sm pointer-events-none h-screen overflow-hidden' : ''}>
        <Hero />
        <About />
        <CoreBusiness />
        <InvestmentServices />
        <ContactUs />
      </main>

      {hasAcceptedDisclaimer && <Footer />}
    </div>
  );
}
