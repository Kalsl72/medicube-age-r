
import React from 'react';
import HowToGallery from './HowToGallery';

const HowItWorksSection = () => {
  const howToSteps = [
    {
      number: 1,
      title: "Air Shot Mode",
      description: "Brush against dry skin to improve pore elasticity with needle-free technology.",
      image: "/lovable-uploads/e01c980a-5c2d-43e0-80ca-946edd6ae13d.png",
      color: "cyan-500"
    },
    {
      number: 2,
      title: "Booster Mode",
      description: "After applying skincare, roll it on the skin to help absorb active ingredients.",
      image: "/lovable-uploads/e01c980a-5c2d-43e0-80ca-946edd6ae13d.png",
      color: "amber-500"
    },
    {
      number: 3,
      title: "MC Mode",
      description: "Pull upward on the skin to help volumize facial lines with microcurrent technology.",
      image: "/lovable-uploads/19830622-52cf-4b93-abb1-6140585f7818.png",
      color: "green-500"
    },
    {
      number: 4,
      title: "Derma Shot Mode",
      description: "Slowly massage and pause for 1-2 seconds to stimulate sagging skin and relax muscles.",
      image: "/lovable-uploads/19830622-52cf-4b93-abb1-6140585f7818.png",
      color: "red-500"
    }
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-center text-deepnavy mb-4">
          How To Use The Medicube Age-R Booster Pro
        </h2>
        <p className="text-center text-deepnavy/80 font-lato mb-12 max-w-2xl mx-auto">
          Follow these simple steps to get the most out of your device
        </p>
        
        <div className="max-w-4xl mx-auto">
          <HowToGallery steps={howToSteps} />
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://s.click.aliexpress.com/e/_olbrenJ" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-deepnavy hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-md transition-all duration-300"
          >
            Click here to unlock your 15% discount
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
