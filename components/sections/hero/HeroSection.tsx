"use client";

import { useEffect, useState } from "react";
import { heroContent } from "@/data/site";
import { HeroView } from "./HeroView";

export function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentRoleIndex(
        (currentIndex) => (currentIndex + 1) % heroContent.roles.length
      );
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return <HeroView content={heroContent} currentRoleIndex={currentRoleIndex} />;
}
