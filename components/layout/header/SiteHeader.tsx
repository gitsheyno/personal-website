"use client";

import { useEffect, useState } from "react";
import { contactDetails, heroContent, navigationItems } from "@/data/site";
import { SiteHeaderView } from "./SiteHeaderView";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SiteHeaderView
      isScrolled={isScrolled}
      isMobileMenuOpen={isMobileMenuOpen}
      onToggleMobileMenu={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
      onCloseMobileMenu={() => setIsMobileMenuOpen(false)}
      items={navigationItems}
      phoneDisplay={contactDetails.phoneDisplay}
      phoneHref={contactDetails.phoneHref}
      company={heroContent}
    />
  );
}
