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
