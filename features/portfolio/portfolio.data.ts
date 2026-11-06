import { Boxes, Globe, ShoppingCart } from "lucide-react";
import type { PortfolioCategory, PortfolioItem } from "./portfolio.types";

export const portfolioData: PortfolioItem[] = [
  {
    id: "plothaus",
    description: {
      name: "Plothaus",
      title: "Online shop for CAD plans and large-format plots",
    },
    img: "/plothaus.webp",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "CI/CD",
      "Nginx",
      "Docker",
      "MongoDB",
    ],
    links: {
      demo: "https://www.plothaus.de/",
    },
    category: "e-commerce",
  },
  {
    id: "posterhaus",
    description: {
      name: "Posterhaus",
      title: "Online shop for custom poster printing",
    },
    img: "/posterhaus.webp",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "CI/CD",
      "Nginx",
      "Docker",
      "MongoDB",
    ],
    links: {
      demo: "https://www.posterhaus.de/",
    },
    category: "e-commerce",
  },
  {
    id: "druckhaus",
    description: {
      name: "Druckhaus",
      title: "Digital platform for sustainable print services",
    },
    img: "/druckhaus.webp",
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS"],
    links: {
      demo: "https://www.druckhaus.co/",
    },
    category: "web-app",
  },
  {
    id: "knime",
    description: {
      name: "KNIME",
      title: "Open-source analytics platform",
    },
    img: "/knime.webp",
    technologies: ["VueJS", "Nuxt3", "TS", "SCSS"],
    links: {
      demo: "https://www.knime.com/downloads",
      source: "https://github.com/orgs/knime/repositories",
    },
    category: "web-app",
  },
  {
    id: "low-carb",
    description: {
      name: "Low-Carb Recipes",
      title: "Light, guilt-free recipes",
    },
    img: "/low-carb.webp",
    technologies: ["React", "NodeJS", "TailwindCSS", "SQLITE"],
    links: {
      demo: "https://low-carb-diet-tan.vercel.app/",
      source: "https://github.com/gitsheyno/low-carb-diet",
    },
    category: "web-app",
  },
  {
    id: "internal-ui-library",
    description: {
      name: "Internal UI Library",
      title: "Private reusable React component system",
    },
    img: "/ui-library.svg",
    technologies: ["React", "TypeScript", "Design System", "npm"],
    links: {},
    category: "package",
  },
  {
    id: "internal-utility-package",
    description: {
      name: "Internal Utility Package",
      title: "Private npm toolkit for shared application logic",
    },
    img: "/utility-package.svg",
    technologies: ["TypeScript", "Node.js", "npm", "CI/CD"],
    links: {},
    category: "package",
  },
  {
    id: "FitMentor-AI",
    description: {
      name: "FitMentor AI",
      title: "AI assistance as a Fitness Coach",
    },
    img: "/gym.webp",
    technologies: ["NextJS", "PostgreSQL", "Typescript", "TailwindCSS"],
    links: {
      demo: "https://coach-ai-khaki.vercel.app/",
      source: "https://github.com/gitsheyno/coach-ai",
    },
    category: "web-app",
  },
];

export const portfolioCategories: PortfolioCategory[] = [
  { id: "all", label: "All Projects", icon: Globe },
  { id: "web-app", label: "Web Apps", icon: Globe },
  { id: "e-commerce", label: "Online Shops", icon: ShoppingCart },
  { id: "package", label: "Packages", icon: Boxes },
];
