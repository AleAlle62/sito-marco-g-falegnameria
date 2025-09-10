import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import HeroSection from '@/components/HeroSection';
import ChiSiamoSection from '@/components/ChiSiamoSection';
import ValoriSection from '@/components/ValoriSection';
import GalleriaSection from '@/components/GalleriaSection';
import ServiziSection from '@/components/ServiziSection';
import ContattiSection from '@/components/ContattiSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -20; // Small offset from top
      const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: yPosition,
        behavior: 'smooth'
      });
    }
  };

  // Add padding to main content based on sidebar state
  useEffect(() => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.style.paddingLeft = '64px'; // Always account for closed sidebar width
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar onNavigate={handleNavigate} />
      
      {/* Main Content */}
      <main id="main-content" className="transition-all duration-300" style={{ paddingLeft: '64px' }}>
        <HeroSection />
        <ChiSiamoSection />
        <ValoriSection />
        <GalleriaSection />
        <ServiziSection />
        <ContattiSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
