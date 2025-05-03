
import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

type FeatureItem = {
  id: number;
  image: string;
  title: string;
  description: string;
  color: string;
};

type ProductFeaturesGalleryProps = {
  features: FeatureItem[];
};

const ProductFeaturesGallery: React.FC<ProductFeaturesGalleryProps> = ({ features }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="w-full">
      <Carousel className="w-full" onSelect={(index) => setCurrentSlide(index)}>
        <CarouselContent>
          {features.map((feature, index) => (
            <CarouselItem key={feature.id}>
              <div className="p-1 h-full">
                <div className="overflow-hidden rounded-lg border border-white">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                </div>
                <div className="mt-4 p-4 bg-white/80 rounded-lg shadow-sm">
                  <h3 className="text-xl font-montserrat font-semibold text-deepnavy mb-1">
                    <span className={`inline-block w-3 h-3 rounded-full mr-2 bg-${feature.color}`}></span>
                    {feature.title}
                  </h3>
                  <p className="font-lato text-deepnavy/80">{feature.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 md:-left-12" />
        <CarouselNext className="right-0 md:-right-12" />
      </Carousel>
      
      <div className="flex justify-center mt-4 space-x-2">
        {features.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-deepnavy' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="mt-8 text-center">
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
  );
};

export default ProductFeaturesGallery;
