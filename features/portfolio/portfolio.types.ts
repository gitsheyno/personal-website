import type { LucideIcon } from "lucide-react";

export type ProjectCategory =
  | "web-app"
  | "e-commerce"
  | "package"
  | "service";
export type ProjectFilter = "all" | ProjectCategory;

export interface PortfolioItem {
  id: string;
  color: string;
  img: string;
  description: {
    name: string;
    title: string;
  };
  technologies: string[];
  links: {
    demo?: string;
    source?: string;
  };
  category: ProjectCategory;
}

export interface PortfolioCategory {
  id: ProjectFilter;
  label: string;
  icon: LucideIcon;
}
