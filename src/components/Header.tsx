
import React, { useState, useEffect } from 'react';
import CountdownTimer from './CountdownTimer';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full ${isSticky ? 'fixed top-0 shadow-md bg-white/95 z-50 transition-all duration-300' : ''}`}>
      <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-2 sm:mb-0">
          <h1 className="text-xl md:text-2xl font-bold font-montserrat text-deepnavy">Medicube Age-R Booster Pro</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex">
            <CountdownTimer hours={12} />
          </div>
          <a 
            href="https://s.click.aliexpress.com/e/_olbrenJ" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-deepnavy hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-md transition-all duration-300 text-sm md:text-base"
          >
            Get 15% Off Now ➔
          </a>
        </div>
      </div>
      <div className="md:hidden bg-rosegold bg-opacity-20 p-2">
        <CountdownTimer hours={12} />
      </div>
    </header>
  );
};

export default Header;
