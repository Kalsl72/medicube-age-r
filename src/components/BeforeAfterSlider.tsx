
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

type BeforeAfterSliderProps = {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  caption: string;
};

const BeforeAfterSlider = ({ beforeImage, afterImage, beforeAlt, afterAlt, caption }: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const newPosition = (x / rect.width) * 100;
      setSliderPosition(Math.max(0, Math.min(100, newPosition)));
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const newPosition = (x / rect.width) * 100;
      setSliderPosition(Math.max(0, Math.min(100, newPosition)));
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="w-full">
      <div 
        ref={containerRef}
        className="relative w-full h-[400px] overflow-hidden cursor-col-resize border border-white rounded-lg"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* After image (full width/height) */}
        <div className="absolute inset-0 w-full h-full">
          <img src={afterImage} alt={afterAlt} className="object-cover w-full h-full" />
        </div>
        
        {/* Before image (clipped by slider) */}
        <div 
          className="absolute inset-0 h-full overflow-hidden" 
          style={{ width: `${sliderPosition}%` }}
        >
          <img src={beforeImage} alt={beforeAlt} className="object-cover w-full h-full" />
        </div>
        
        {/* Slider control */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
            <div className="flex gap-1">
              <div className="h-4 w-0.5 bg-deepnavy"></div>
              <div className="h-4 w-0.5 bg-deepnavy"></div>
            </div>
          </div>
        </div>

        {/* Before/After labels */}
        <div className="absolute bottom-3 left-3 bg-white/80 text-deepnavy text-sm font-semibold py-1 px-3 rounded-md">
          Before
        </div>
        <div className="absolute bottom-3 right-3 bg-white/80 text-deepnavy text-sm font-semibold py-1 px-3 rounded-md">
          After
        </div>
      </div>
      
      <p className="mt-2 text-center text-deepnavy font-semibold">{caption}</p>
    </div>
  );
};

export default BeforeAfterSlider;
