"use client";
import { FC } from "react";
import dynamic from "next/dynamic";
import "react-multi-carousel/lib/styles.css";

// Dynamically import the carousel component to prevent SSR issues
const ProjectCarousel = dynamic(() => import("./Project"), { ssr: false });

const Portfolio: FC = () => {
  return (
    <div
      id="works"
      className="w-full py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        {/* Header section with modern styling */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <h2 className="text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-2">
              MY LATEST WORKS
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Featured Projects
            </h3>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Perfect solutions for digital experiences that showcase my expertise
            and creativity
          </p>
        </div>

        {/* Project carousel wrapper with enhanced styling */}
        <div className="relative px-1 md:px-6 py-4">
          <ProjectCarousel />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
