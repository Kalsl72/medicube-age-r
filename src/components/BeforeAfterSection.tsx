
import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const BeforeAfterSection = () => {
  const testimonials = [
    {
      id: 1,
      image: "/lovable-uploads/2e4638dd-7229-4bbf-a807-e7239dd63623.png",
      alt: "Wrinkles faded with Medicube Age-R Booster Pro",
      caption: "Wrinkles faded in 2 weeks! – Sarah, 38"
    },
    {
      id: 2,
      image: "/lovable-uploads/4f23d9fe-9509-4d34-be5f-329cbbd790f1.png",
      alt: "Acne scars treated with Medicube Age-R Booster Pro",
      caption: "Acne scars gone & glowing skin! – Mia, 29"
    },
    {
      id: 3,
      image: "/lovable-uploads/5727cf61-caa8-4606-84ad-c02315a1e6cc.png",
      alt: "Jawline enhancement with Medicube Age-R Booster Pro",
      caption: "My jawline is 10x sharper! – Tina, 45"
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
          <Carousel className="w-full" onSelect={(index) => {
            if (typeof index === 'number') {
              setCurrentSlide(index);
            }
          }}>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id}>
                  <div className="flex flex-col items-center">
                    <div className="overflow-hidden rounded-lg border border-white">
                      <img
                        src={testimonial.image}
                        alt={testimonial.alt}
                        className="w-full h-64 sm:h-80 object-cover"
                      />
                    </div>
                    <p className="mt-4 text-center text-lg font-semibold text-deepnavy">{testimonial.caption}</p>
                  </div>
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
