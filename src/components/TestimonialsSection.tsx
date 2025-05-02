
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jenny",
      age: 42,
      quote: "I looked 5 years younger in 2 weeks of consistent use. My jawline is significantly more defined!",
      beforeImage: "https://images.unsplash.com/photo-1521322800607-8c38375eef04",
      afterImage: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    },
    {
      id: 2,
      name: "Sarah",
      age: 38,
      quote: "The forehead lines I've been battling for years have visibly reduced. Absolutely worth every penny!",
      beforeImage: "https://images.unsplash.com/photo-1521322800607-8c38375eef04",
      afterImage: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    },
    {
      id: 3,
      name: "Michelle",
      age: 45,
      quote: "After just 3 weeks, my friends asked if I'd gotten fillers! The results speak for themselves.",
      beforeImage: "https://images.unsplash.com/photo-1521322800607-8c38375eef04",
      afterImage: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-softpeach/30 to-rosegold/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-center text-deepnavy mb-4">
          Real Results, Real People
        </h2>
        <p className="text-center text-deepnavy/80 font-lato mb-12 max-w-2xl mx-auto">
          See the transformation our customers achieved with the Medicube Age-R Booster Pro
        </p>
        
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2 flex flex-col space-y-4">
                  <div className="relative">
                    <div className="absolute top-2 left-2 bg-deepnavy/80 text-white text-xs py-1 px-2 rounded">BEFORE</div>
                    <img 
                      src={testimonials[currentTestimonial].beforeImage}
                      alt={`${testimonials[currentTestimonial].name} before using Medicube`}
                      className="w-full h-48 object-cover rounded"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute top-2 left-2 bg-rosegold text-deepnavy text-xs py-1 px-2 rounded">AFTER</div>
                    <img 
                      src={testimonials[currentTestimonial].afterImage}
                      alt={`${testimonials[currentTestimonial].name} after using Medicube`}
                      className="w-full h-48 object-cover rounded"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <div className="text-2xl text-rosegold mb-4">★★★★★</div>
                  <blockquote className="text-deepnavy text-lg mb-6 italic">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  <p className="font-montserrat font-semibold text-deepnavy">
                    {testimonials[currentTestimonial].name}, {testimonials[currentTestimonial].age}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full ${currentTestimonial === index ? 'bg-deepnavy' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={prevTestimonial} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button 
            onClick={nextTestimonial} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://s.click.aliexpress.com/e/_olbrenJ" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-deepnavy hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-md transition-all duration-300"
          >
            Claim My Discount Before Time Runs Out ➔
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
