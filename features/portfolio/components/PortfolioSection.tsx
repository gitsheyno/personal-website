"use client";

import { useMemo, useState } from "react";
import { portfolioCategories, portfolioData } from "../portfolio.data";
import { PortfolioView } from "./PortfolioView";
import type { ProjectFilter } from "../portfolio.types";

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectFilter>("all");

  const filteredProjects = useMemo(
    () =>
      activeCategory === "all"
        ? portfolioData
        : portfolioData.filter(
            (project) => project.category === activeCategory
          ),
    [activeCategory]
  );

  return (
    <PortfolioView
      projects={filteredProjects}
      categories={portfolioCategories}
      activeCategory={activeCategory}
      onCategoryChange={setActiveCategory}
    />
  );
}
