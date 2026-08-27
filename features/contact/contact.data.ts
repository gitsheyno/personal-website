import type { ContactDetailsContent } from "./contact.types";
import { profile } from "@/config/profile";

export const contactDetails: ContactDetailsContent = {
  email: profile.email,
  phoneDisplay: profile.phoneDisplay,
  phoneHref: profile.phoneHref,
};
