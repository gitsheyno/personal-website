import type { LucideIcon } from "lucide-react";

export interface NavigationItem {
  label: string;
  href: `#${string}`;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  email?: string;
}

export interface HeroContent {
  greeting: string;
  name: string;
  roles: string[];
  description: string;
  yearsExperience: string;
  currentCompany: string;
  currentCompanyUrl: string;
  socialLinks: SocialLinks;
}

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

export interface Experience {
  id: string;
  img?: string;
  company: string;
  location: string;
  position: string;
  period: string;
  color: string;
  achievements: string[];
  technologies: string[];
}

export type ProjectCategory = "web-app" | "mobile-app" | "package" | "service";
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

export interface ContactDetailsContent {
  email: string;
  phoneDisplay: string;
  phoneHref: string;
}
