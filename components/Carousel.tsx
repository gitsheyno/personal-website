"use client";

import React, { useEffect, useState } from "react";

interface VerticalSliderProps {
  slides: string[];
  slideInterval?: number;
}

const VerticalSlider: React.FC<VerticalSliderProps> = ({
  slides,
  slideInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, slideInterval);

    return () => clearInterval(intervalId);
  }, [slides.length, slideInterval]);

  return (
    <div className="relative h-8 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-8 flex items-center transition-all duration-500 ease-in-out ${
            index === currentIndex
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform -translate-y-full"
          }`}
        >
          {slide}
        </div>
      ))}
    </div>
  );
};

export default VerticalSlider;
