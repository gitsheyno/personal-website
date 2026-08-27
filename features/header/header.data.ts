import type {
  HeaderContact,
  HeaderIdentity,
  NavigationItem,
} from "./header.types";
import { profile } from "@/config/profile";

export const navigationItems: NavigationItem[] = [
  { label: "Experiences", href: "#experiences" },
  { label: "Services", href: "#skills" },
  { label: "Works", href: "#works" },
  { label: "Contacts", href: "#contacts" },
];

export const headerContact: HeaderContact = {
  phoneDisplay: profile.phoneDisplay,
  phoneHref: profile.phoneHref,
};

export const headerIdentity: HeaderIdentity = {
  name: profile.name,
  brandName: profile.brandName,
  currentCompany: profile.currentCompany,
  currentCompanyUrl: profile.currentCompanyUrl,
  socialLinks: profile.socialLinks,
};
