
import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "✨",
      title: "Instant Lift",
      description: "See firmer cheekbones in 1 use.",
    },
    {
      icon: "🧬",
      title: "Collagen Boost",
      description: "ATP-powered tech reduces wrinkles by 30% in 4 weeks.",
    },
    {
      icon: "🏆",
      title: "Pro-Level Results",
      description: "Trusted by 50K+ skincare experts worldwide.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-center text-deepnavy mb-12">
          Clinically Proven Anti-Aging Technology
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-softpeach/50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-montserrat font-bold text-deepnavy mb-3">{benefit.title}</h3>
              <p className="font-lato text-deepnavy/80">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://s.click.aliexpress.com/e/_olbrenJ" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-rosegold hover:bg-opacity-90 text-deepnavy font-bold py-3 px-8 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Shop Now ➔
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
