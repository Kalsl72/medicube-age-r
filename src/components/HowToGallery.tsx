
import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

type HowToStep = {
  image: string;
  title: string;
  description: string;
  number: number;
  color: string;
};

type HowToGalleryProps = {
  steps: HowToStep[];
};

const HowToGallery: React.FC<HowToGalleryProps> = ({ steps }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="w-full">
      <Carousel className="w-full" onSelect={(index) => {
        if (typeof index === 'number') {
          setCurrentSlide(index);
        }
      }}>
        <CarouselContent>
          {steps.map((step) => (
            <CarouselItem key={step.number} className="md:basis-1/1">
              <div className="p-1">
                <div className="overflow-hidden rounded-lg border border-white">
                  <img 
                    src={step.image} 
                    alt={`Step ${step.number}: ${step.description}`} 
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                </div>
                <div className="mt-4 flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className={`bg-${step.color} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold font-montserrat`}>
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-montserrat font-semibold text-deepnavy mb-2">{step.title}</h3>
                    <p className="font-lato text-deepnavy/70">{step.description}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 md:-left-12" />
        <CarouselNext className="right-0 md:-right-12" />
      </Carousel>
      
      <div className="flex justify-center mt-4 space-x-2">
        {steps.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-deepnavy' : 'bg-gray-300'}`}
            aria-label={`Go to step ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HowToGallery;
