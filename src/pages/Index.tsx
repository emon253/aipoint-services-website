import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
import Portfolio from '@/components/Portfolio';
import Partners from '@/components/Partners';
import ContactModal from '@/components/ContactModal';
import Footer from '@/components/Footer';

const Index = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar onContactClick={handleContactClick} />
      <Hero onContactClick={handleContactClick} />
      <About />
      <Services />
      {/*<Industries />*/}
      {/*<Portfolio />*/}
      {/*<Partners />*/}
      <Footer />
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={handleCloseContactModal} 
      />
    </div>
  );
};

export default Index;
