import type { HeroContent } from "./hero.types";
import { profile } from "@/config/profile";

export const heroContent: HeroContent = {
  greeting: "Welcome to my portfolio",
  name: profile.name,
  roles: ["Frontend Engineer", "FullStack Developer", "Problem Solver"],
  description:
    "A seasoned developer with expertise in both frontend and backend technologies. I craft responsive, user-centered digital experiences with clean, efficient code.",
  yearsExperience: "4",
  currentCompany: profile.currentCompany,
  currentCompanyUrl: profile.currentCompanyUrl,
  socialLinks: profile.socialLinks,
};
