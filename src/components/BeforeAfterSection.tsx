
import React, { useState } from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const BeforeAfterSection = () => {
  const testimonials = [
    {
      id: 1,
      beforeImage: "/lovable-uploads/2e4638dd-7229-4bbf-a807-e7239dd63623.png",
      afterImage: "/lovable-uploads/2e4638dd-7229-4bbf-a807-e7239dd63623.png",
      beforeAlt: "Before using Medicube Age-R Booster Pro - visible aging signs",
      afterAlt: "After using Medicube Age-R Booster Pro - reduced wrinkles",
      caption: "70% fewer wrinkles in 2 weeks – Emma, 49"
    },
    {
      id: 2,
      beforeImage: "/lovable-uploads/4f23d9fe-9509-4d34-be5f-329cbbd790f1.png",
      afterImage: "/lovable-uploads/4f23d9fe-9509-4d34-be5f-329cbbd790f1.png",
      beforeAlt: "Before using Medicube Age-R Booster Pro - acne and redness",
      afterAlt: "After using Medicube Age-R Booster Pro - clear skin",
      caption: "Acne scars faded & glow restored in 3 weeks – Zara, 34"
    },
    {
      id: 3,
      beforeImage: "/lovable-uploads/5727cf61-caa8-4606-84ad-c02315a1e6cc.png",
      afterImage: "/lovable-uploads/5727cf61-caa8-4606-84ad-c02315a1e6cc.png",
      beforeAlt: "Before using Medicube Age-R Booster Pro - sagging jawline",
      afterAlt: "After using Medicube Age-R Booster Pro - lifted jawline",
      caption: "Jawline lifted 2x tighter in 1 month – Lena, 41"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="py-16 bg-gradient-to-r from-softpeach/30 to-rosegold/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-center text-deepnavy mb-4">
          Real Results, Real People
        </h2>
        <p className="text-center text-deepnavy/80 font-lato mb-12 max-w-2xl mx-auto">
          See the transformation our customers achieved with the Medicube Age-R Booster Pro
        </p>
        
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full" onSelect={(index) => setCurrentSlide(index)}>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id}>
                  <BeforeAfterSlider 
                    beforeImage={testimonial.beforeImage}
                    afterImage={testimonial.afterImage}
                    beforeAlt={testimonial.beforeAlt}
                    afterAlt={testimonial.afterAlt}
                    caption={testimonial.caption}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-left-12" />
            <CarouselNext className="right-0 md:-right-12" />
          </Carousel>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-deepnavy' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
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
      </div>
    </section>
  );
};

export default BeforeAfterSection;
