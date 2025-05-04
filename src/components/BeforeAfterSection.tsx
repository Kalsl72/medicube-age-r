
import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const BeforeAfterSection = () => {
  const testimonials = [
    {
      id: 1,
      image: "/lovable-uploads/58bdf79b-0208-4e08-91f5-bc3cf249c32a.png",
      alt: "Sarah before and after using Medicube Age-R Booster Pro",
      caption: "I struggled with severe acne for years. After using Medicube Age-R Booster Pro, my skin cleared up completely. I finally feel confident! – Sarah, 26"
    },
    {
      id: 2,
      image: "/lovable-uploads/a6ad3f16-861d-47a8-9d84-1752b0e9e87a.png",
      alt: "Sarah before and after using Medicube Age-R Booster Pro for acne and uneven tone",
      caption: "My acne and uneven tone disappeared in weeks with Medicube. Now I love my reflection! – Sarah, 27"
    },
    {
      id: 3,
      image: "/lovable-uploads/6b59c95f-3173-4628-b9b8-deb74ec5063d.png",
      alt: "Aisha before and after using Medicube Age-R Booster Pro for hyperpigmentation",
      caption: "Medicube faded my dark spots and gave me a radiant glow. I can't stop smiling now! – Aisha, 29"
    },
    {
      id: 4,
      image: "/lovable-uploads/36995eba-4f61-409e-9a62-8969cd30a056.png",
      alt: "Jia before and after using Medicube Age-R Booster Pro for redness",
      caption: "My redness and scars vanished thanks to Medicube. This is the skin I've always wanted! – Jia, 25"
    },
    {
      id: 5,
      image: "/lovable-uploads/b9a50efe-261e-4b12-a452-927e466ac754.png",
      alt: "Sarah before and after using Medicube Age-R Booster Pro for wrinkles",
      caption: "At 50, my wrinkles softened and my skin tightened. Medicube made me look 10 years younger! – Sarah, 50"
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
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <p className="mt-4 text-center text-lg italic font-lato text-deepnavy">{testimonial.caption}</p>
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
