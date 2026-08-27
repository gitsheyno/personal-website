import { Globe, Smartphone } from "lucide-react";
import type { PortfolioCategory, PortfolioItem } from "./portfolio.types";

export const portfolioData: PortfolioItem[] = [
  {
    id: "knime",
    color: "from-blue-500 to-cyan-500",
    description: {
      name: "KNIME",
      title: "Open-source analytics platform",
    },
    img: "/knime.png",
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
    img: "/image.png",
    technologies: ["React", "NodeJS", "TailwindCSS", "SQLITE"],
    links: {
      demo: "https://low-carb-diet-tan.vercel.app/",
      source: "https://github.com/gitsheyno/low-carb-diet",
    },
    category: "web-app",
  },
  {
    id: "LMOS",
    color: "from-orange-500 to-red-500",
    description: {
      name: "last-mile-os",
      title: "Organize your events effortlessly",
    },
    img: "/lmos.png",
    technologies: [
      "ReactJS",
      "TS",
      "NodeJS",
      "Docker",
      "NextJS",
      "TailwindCSS",
    ],
    links: { demo: "https://lastmile-os.com/" },
    category: "web-app",
  },
  {
    id: "DriverBuddy",
    color: "from-indigo-500 to-blue-500",
    description: {
      name: "DriverBuddy",
      title: "City-Logistic",
    },
    img: "/driver.png",
    technologies: ["React-Native", "NodeJS", "TS", "Redux-Toolkit"],
    links: { demo: "https://pickshare.app/" },
    category: "mobile-app",
  },
  {
    id: "FitMentor-AI",
    color: "from-lime-500 to-green-500",
    description: {
      name: "FitMentor AI",
      title: "AI assistance as a Fitness Coach",
    },
    img: "/gym.png",
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
  { id: "mobile-app", label: "Mobile Apps", icon: Smartphone },
];
