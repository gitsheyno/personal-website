"use client";

import { useState } from "react";
import { experiences } from "../experience.data";
import { ExperienceView } from "./ExperienceView";

export function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string | null>(
    experiences[0]?.id ?? null
  );

  const handleToggle = (id: string) => {
    setExpandedId((currentId) => (currentId === id ? null : id));
  };

  return (
    <ExperienceView
      experiences={experiences}
      expandedId={expandedId}
      onToggle={handleToggle}
    />
  );
}
