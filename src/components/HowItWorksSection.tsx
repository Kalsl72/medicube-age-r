
import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Glide over cleansed skin",
      description: "Start with clean, dry skin. Apply a thin layer of conductive gel."
    },
    {
      number: 2,
      title: "Adjust intensity",
      description: "Choose from 5 levels based on your comfort and treatment goals."
    },
    {
      number: 3,
      title: "See results instantly",
      description: "Feel a gentle lift immediately and see cumulative improvement daily."
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
        
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="w-full md:w-1/2">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              {/* This would ideally be a video, but using an image as placeholder */}
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                alt="Woman demonstrating how to use the Medicube Age-R Booster Pro" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-deepnavy/40 rounded-full p-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex">
                  <div className="flex-shrink-0 mr-6">
                    <div className="bg-rosegold w-10 h-10 rounded-full flex items-center justify-center text-deepnavy font-bold font-montserrat">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-montserrat font-semibold text-deepnavy mb-2">{step.title}</h3>
                    <p className="font-lato text-deepnavy/70">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <a 
                href="https://s.click.aliexpress.com/e/_olbrenJ" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-deepnavy font-semibold hover:underline flex items-center"
              >
                Click here to claim your discount <span className="ml-2">➔</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
