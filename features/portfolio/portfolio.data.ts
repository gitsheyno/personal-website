import { Boxes, Globe, ShoppingCart } from "lucide-react";
import type { PortfolioCategory, PortfolioItem } from "./portfolio.types";

export const portfolioData: PortfolioItem[] = [
  {
    id: "plothaus",
    color: "from-cyan-500 to-blue-600",
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
    color: "from-orange-500 to-rose-500",
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
    color: "from-sky-500 to-indigo-600",
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
    color: "from-blue-500 to-cyan-500",
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
    color: "from-green-500 to-emerald-500",
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
    color: "from-violet-500 to-fuchsia-500",
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
    color: "from-amber-500 to-orange-500",
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
    color: "from-lime-500 to-green-500",
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
