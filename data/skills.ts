import {
  Bot,
  CheckCircle2,
  Cloud,
  Code2,
  Server,
  Smartphone,
} from "lucide-react";
import type { SkillCategory } from "@/types";

export const skillsData: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    icon: Code2,
    description: "Building beautiful, responsive user interfaces",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", level: 95, category: "frontend" },
      { name: "Next.js", level: 95, category: "frontend" },
      { name: "TypeScript", level: 90, category: "frontend" },
      { name: "Javascript", level: 90, category: "frontend" },
      { name: "React Native", level: 90, category: "frontend" },
      { name: "State-Management", level: 80, category: "frontend" },
      { name: "Vue.js", level: 80, category: "frontend" },
      { name: "Authentication", level: 85, category: "frontend" },
      { name: "Nuxt.js", level: 70, category: "frontend" },
      { name: "Tailwind CSS", level: 92, category: "frontend" },
      { name: "HTML/CSS", level: 95, category: "frontend" },
      { name: "Responsive-Design", level: 90, category: "frontend" },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: Server,
    description: "Scalable server-side architecture & APIs",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 90, category: "backend" },
      { name: "API Design", level: 80, category: "backend" },
      { name: "Authentication", level: 70, category: "backend" },
      { name: "PostgreSQL", level: 70, category: "backend" },
      { name: "REST APIs", level: 90, category: "backend" },
      { name: "GraphQL", level: 70, category: "backend" },
      { name: "MongoDB", level: 70, category: "backend" },
    ],
  },
  {
    id: "ai",
    name: "AI Driven",
    icon: Bot,
    description:
      "Building intelligent apps with LLMs, agents, and vector workflows",
    color: "from-purple-600 to-indigo-600",
    skills: [
      { name: "LLMs", level: 80, category: "ai" },
      { name: "LangChain", level: 70, category: "ai" },
      { name: "Vercel AI SDK", level: 70, category: "ai" },
      { name: "Vector Databases", level: 70, category: "ai" },
    ],
  },
  {
    id: "devops",
    name: "DevOps",
    icon: Cloud,
    description: "Infrastructure, deployment & monitoring",
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Docker", level: 70, category: "devops" },
      { name: "AWS", level: 60, category: "devops" },
      { name: "CI/CD", level: 80, category: "devops" },
    ],
  },
  {
    id: "mobile",
    name: "Mobile Dev",
    icon: Smartphone,
    description: "Cross-platform mobile applications",
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "React Native", level: 80, category: "mobile" },
      { name: "Mobile UI/UX", level: 85, category: "mobile" },
    ],
  },
  {
    id: "testing",
    name: "Testing",
    icon: CheckCircle2,
    description:
      "Unit testing, component testing, and end-to-end quality assurance",
    color: "from-yellow-500 to-amber-600",
    skills: [
      { name: "Vitest", level: 80, category: "testing" },
      { name: "Jest", level: 80, category: "testing" },
      { name: "React Testing Library", level: 85, category: "testing" },
      { name: "Cypress (E2E)", level: 70, category: "testing" },
      { name: "Playwright (E2E)", level: 70, category: "testing" },
      { name: "Component Testing", level: 90, category: "testing" },
      { name: "Unit Testing", level: 80, category: "testing" },
    ],
  },
];
