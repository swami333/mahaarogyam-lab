import React, { useState } from 'react';

const Logo: React.FC = () => (

    <div className="flex items-center space-x-2">
        <img src="/lab_logo.jpg" alt="" width='40px' height='40px'/>
        <span className="text-2xl font-bold text-gray-800">MAHA AAROGYAM</span>
    </div>
);

interface HeaderProps {
    onBookNow: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBookNow }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Packages', href: '#packages' },
    { name: 'Rate List', href: '#ratelist' },
    { name: 'Technology', href: '#technology' },
    { name: 'Careers', href: '#careers'},
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth'
    });
    if (isMenuOpen) {
        setIsMenuOpen(false);
    }
  };

  return (
    <>
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth'}); }}><Logo /></a>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-gray-600 hover:text-orange-600 transition duration-300 font-medium">
                {link.name}
              </a>
            ))}.
             <button onClick={() => onBookNow()} className="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300 text-sm">
                Book Now
            </button>
          </nav>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden z-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-gray-600 hover:text-orange-600 transition duration-300 py-2 text-center bg-gray-100 rounded">
                  {link.name}
                </a>
              ))}
              <button onClick={() => { onBookNow(); setIsMenuOpen(false); }} className="w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-300 mt-2">
                Book Appointment
            </button>
            </nav>
          </div>
        )}
      </div>
    </header>
    <div className="relative h-96 bg-cover bg-center" style={{backgroundImage: "url('https://picsum.photos/seed/heroimage/1920/1080')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white p-4">
                <h1 className="text-4xl md:text-6xl font-bold">Healthcare & Speciality Laboratory</h1>
                <p className="mt-4 text-xl">Accurate. Reliable. Fast.</p>
                <a href="#packages" onClick={(e) => handleNavClick(e, '#packages')} className="mt-8 inline-block bg-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition duration-300">
                    View Health Packages
                </a>
            </div>
        </div>
    </div>
    </>
  );
};

export default Header;