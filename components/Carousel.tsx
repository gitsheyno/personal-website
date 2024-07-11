"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/Carousel.module.css";

interface VerticalSliderProps {
  slides: string[];
}

const VerticalSlider: React.FC<VerticalSliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideHeight = 30; // Adjust based on your slide height
  const translateY = -currentIndex * slideHeight;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Adjust the interval duration as needed
    return () => clearInterval(intervalId);
  }, [slides.length]);

  return (
    <div className={styles.sliderContainer}>
      <div
        className={styles.sliderContent}
        style={{ transform: `translateY(${translateY}px)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className={styles.slide}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalSlider;
