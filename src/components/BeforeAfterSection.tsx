
import React, { useState } from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const BeforeAfterSection = () => {
  const testimonials = [
    {
      id: 1,
      beforeImage: "/lovable-uploads/a1cfdccd-6c03-4b0d-8d0e-ed28118f55e6.png",
      afterImage: "/lovable-uploads/161b60a0-43de-4961-9ba0-c606a4b9ed8d.png",
      beforeAlt: "Before using Medicube Age-R Booster Pro - uneven skin texture",
      afterAlt: "After using Medicube Age-R Booster Pro - improved skin texture",
      caption: "28% firmer jawline in 7 days – Lisa, 38"
    },
    {
      id: 2,
      beforeImage: "/lovable-uploads/fa916f9e-29d2-46fe-ae08-de2e9ca9a21b.png",
      afterImage: "/lovable-uploads/cfeb88d0-0fda-452e-80d6-42dc6cabc7b8.png",
      beforeAlt: "Before using Medicube Age-R Booster Pro - visible aging signs",
      afterAlt: "After using Medicube Age-R Booster Pro - reduced wrinkles",
      caption: "Wrinkles reduced by 45% in 1 month – Maya, 51"
    },
    {
      id: 3,
      beforeImage: "/lovable-uploads/739c6602-bbe7-4b75-8735-e773fcdbd040.png",
      afterImage: "/lovable-uploads/a9b08303-0f43-4adf-993b-92fb171d0da8.png",
      beforeAlt: "Before using Medicube Age-R Booster Pro - mature skin",
      afterAlt: "After using Medicube Age-R Booster Pro - rejuvenated complexion",
      caption: "8 weeks to lifted cheekbones & radiant glow – Sophia, 44"
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
          <Carousel className="w-full">
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
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
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
              Claim My Discount Before Time Runs Out ➔
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
