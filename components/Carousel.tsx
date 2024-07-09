"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";
import styles from "../styles/Caruosel.module.css";

interface CarouselItemProps {
  children: ReactNode;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({ children }) => {
  return <div className={styles.carouselItem}>{children}</div>;
};

interface CarouselProps {
  children: ReactNode[];
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ children, interval = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const length = React.Children.count(children);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!paused) {
      timeoutRef.current = setTimeout(
        () => setActiveIndex((prevIndex) => (prevIndex + 1) % length),
        interval
      );
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeIndex, paused, interval, length]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + length) % length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % length);
  };

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={styles.inner}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child) => {
          return React.cloneElement(child as React.ReactElement<any>);
        })}
      </div>
      <div className={styles.controls}>
        <button className={styles.prev} onClick={handlePrev}>
          &#10094;
        </button>
        <button className={styles.next} onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
