
import React from 'react';
import HowToGallery from './HowToGallery';

const HowItWorksSection = () => {
  const howToSteps = [
    {
      number: 1,
      image: "/lovable-uploads/a9b08303-0f43-4adf-993b-92fb171d0da8.png",
      title: "Cleanse & Prep Skin",
      description: "Prep skin with conductive gel for optimal microcurrent flow."
    },
    {
      number: 2,
      image: "/lovable-uploads/e93233da-ab3b-4bce-945d-0c66c62f8932.png",
      title: "Glide Device in Upward Motions",
      description: "Glide the device upward along cheekbones and jawline."
    },
    {
      number: 3,
      image: "/lovable-uploads/a1cfdccd-6c03-4b0d-8d0e-ed28118f55e6.png",
      title: "Apply Serum & Lock In Results",
      description: "Finish with Medicube's collagen serum to amplify results."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-center text-deepnavy mb-4">
          How It Works
        </h2>
        <p className="text-center text-deepnavy/80 font-lato mb-12 max-w-2xl mx-auto">
          Simple 5-minute treatment, professional results
        </p>
        
        <div className="max-w-4xl mx-auto">
          <HowToGallery steps={howToSteps} />
          
          <div className="mt-10 text-center">
            <a 
              href="https://s.click.aliexpress.com/e/_olbrenJ" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-deepnavy font-semibold hover:underline flex items-center justify-center"
            >
              Click here to claim your discount <span className="ml-2">➔</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
