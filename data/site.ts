import type {
  ContactDetailsContent,
  HeroContent,
  NavigationItem,
} from "@/types";

export const navigationItems: NavigationItem[] = [
  { label: "Services", href: "#skills" },
  { label: "Experiences", href: "#experiences" },
  { label: "Works", href: "#works" },
  { label: "Contacts", href: "#contacts" },
];

export const contactDetails: ContactDetailsContent = {
  email: "hdrydeveloper@gmail.com",
  phoneDisplay: "+49 176 217 01815",
  phoneHref: "tel:+4917621701815",
};

export const heroContent: HeroContent = {
  greeting: "Welcome to my portfolio",
  name: "Shayan",
  roles: ["Frontend Engineer", "FullStack Developer", "Problem Solver"],
  description:
    "A seasoned developer with expertise in both frontend and backend technologies. I craft responsive, user-centered digital experiences with clean, efficient code.",
  yearsExperience: "4",
  currentCompany: "Pickshare GmbH",
  currentCompanyUrl: "https://pickshare.app/",
  socialLinks: {
    github: "https://github.com/gitsheyno",
    linkedin: "https://de.linkedin.com/in/shayan-heidary",
    email: "mailto:hdrydeveloper@gmail.com",
  },
};
