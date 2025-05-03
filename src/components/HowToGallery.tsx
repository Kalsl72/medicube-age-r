
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

type HowToStep = {
  image: string;
  title: string;
  description: string;
  number: number;
};

type HowToGalleryProps = {
  steps: HowToStep[];
};

const HowToGallery: React.FC<HowToGalleryProps> = ({ steps }) => {
  return (
    <div className="w-full">
      <Carousel className="w-full">
        <CarouselContent>
          {steps.map((step) => (
            <CarouselItem key={step.number} className="md:basis-1/1">
              <div className="p-1">
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src={step.image} 
                    alt={`Step ${step.number}: ${step.description}`} 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="mt-4 flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-rosegold w-10 h-10 rounded-full flex items-center justify-center text-deepnavy font-bold font-montserrat">
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
        <div className="hidden md:flex">
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </div>
      </Carousel>
      
      <div className="flex justify-center mt-4 space-x-2">
        {steps.map((step) => (
          <div key={step.number} className="w-2 h-2 rounded-full bg-gray-300"></div>
        ))}
      </div>
    </div>
  );
};

export default HowToGallery;
