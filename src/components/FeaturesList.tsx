
import React from 'react';

const FeaturesList = () => {
  const features = [
    "FDA-Cleared medical-grade microcurrent technology",
    "5 intensity levels for customized treatments",
    "Clinically proven to increase collagen production by 14%",
    "Rechargeable battery with 2-week usage per charge",
    "Waterproof design for convenient use",
    "Includes complimentary conductive gel ($30 value)",
    "1-year warranty and dedicated customer support"
  ];

  return (
    <section className="py-16 bg-softpeach/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-center text-deepnavy mb-8">
          Premium Features
        </h2>
        
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <div className="text-rosegold mr-3">✓</div>
                <span className="font-lato text-deepnavy/80">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-10 text-center">
          <div className="inline-block bg-white/80 rounded-lg p-4 mb-6 shadow-sm">
            <p className="font-lato text-deepnavy/80">
              <span className="font-montserrat font-bold text-deepnavy">Hurry!</span> Only 12 devices left at 15% discount
            </p>
          </div>
          
          <a 
            href="https://s.click.aliexpress.com/e/_olbrenJ" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-deepnavy hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 animate-pulse-subtle"
          >
            Get My Discounted Device Now ➔
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesList;
