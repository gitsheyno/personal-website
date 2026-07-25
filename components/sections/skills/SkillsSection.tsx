"use client";

import { useState } from "react";
import { skillsData } from "@/data/skills";
import { SkillsView } from "./SkillsView";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skillsData[0].id);

  return (
    <SkillsView
      categories={skillsData}
      activeCategory={activeCategory}
      onCategoryChange={setActiveCategory}
    />
  );
}
