
import React from 'react';

const HeroSection = () => {
  return (
    <section className="py-10 md:py-16 bg-gradient-peach">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 order-2 md:order-1 mt-8 md:mt-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat text-deepnavy leading-tight mb-4">
              Reverse Time in 5 Minutes: Lift, Firm & Glow Without Needles
            </h2>
            <p className="text-lg md:text-xl text-deepnavy/80 font-lato mb-6">
              Clinically Proven Microcurrent Tech for Younger-Looking Skin at Home. 15% Off Today Only!
            </p>
            <div className="bg-white/70 p-4 rounded-lg mb-6">
              <p className="text-sm text-deepnavy/70 font-lato">
                <span className="font-semibold">LIMITED STOCK ALERT:</span> Only 12 devices left at this price! Free conductive gel ($30 value) included!
              </p>
            </div>
            <a 
              href="https://s.click.aliexpress.com/e/_olbrenJ" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-deepnavy hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 animate-pulse-subtle text-lg"
            >
              Get My Discounted Device Now ➔
            </a>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-4 -right-4 bg-deepnavy text-white text-sm md:text-base font-bold py-1 px-3 rounded-full z-10">
                15% OFF
              </div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Woman using the Medicube Age-R Booster Pro device" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white/80 py-2 px-4 rounded-md">
                <p className="text-sm font-semibold text-deepnavy">FDA-Cleared | 4.9/5 Stars (2K+ Reviews)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
