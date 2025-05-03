
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative py-0 h-[600px] md:h-[700px]">
      {/* Hero Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/lovable-uploads/e93233da-ab3b-4bce-945d-0c66c62f8932.png" 
          alt="Medicube Age-R Booster Pro instantly lifting sagging skin"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deepnavy/30 to-transparent"></div>
      </div>
      
      {/* Content overlay */}
      <div className="relative h-full container mx-auto px-4 flex items-center">
        <div className="max-w-lg text-white">
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat leading-tight mb-4 drop-shadow-lg">
            Reverse Time in 5 Minutes
          </h2>
          <p className="text-lg md:text-xl font-lato mb-6 drop-shadow-md">
            Clinically Proven Microcurrent Tech for Younger-Looking Skin at Home. 15% Off Today Only!
          </p>
          <div className="bg-white/70 p-4 rounded-lg mb-6">
            <p className="text-sm text-deepnavy/90 font-lato">
              <span className="font-semibold">LIMITED STOCK ALERT:</span> Only 12 devices left at this price! Free conductive gel ($30 value) included!
            </p>
          </div>
          <a 
            href="https://s.click.aliexpress.com/e/_olbrenJ" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-deepnavy hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 animate-pulse-subtle text-lg"
          >
            Get 15% Off Now ➔
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
