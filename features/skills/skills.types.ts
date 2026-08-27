import type { LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  color: string;
  skills: Skill[];
}
