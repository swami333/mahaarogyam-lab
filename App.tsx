import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Packages from './components/Packages';
import RateList from './components/RateList';
import Technology from './components/Technology';
import Locations from './components/Locations';
import Careers from './components/Careers';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import type { HealthPackage } from './types';

const App: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<HealthPackage | null>(null);

  const handleOpenBookingModal = (pkg: HealthPackage | null = null) => {
    setSelectedPackage(pkg);
    setIsBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
    // Give a little time for the fade out animation before clearing the package
    setTimeout(() => {
        setSelectedPackage(null);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header onBookNow={handleOpenBookingModal} />
      <main>
        <About />
        <Packages onBookNow={handleOpenBookingModal} />
        <RateList />
        <Technology />
        <Locations />
        <Careers />
      </main>
      <Footer />
      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={handleCloseBookingModal}
        healthPackage={selectedPackage}
      />
    </div>
  );
};

export default App;
