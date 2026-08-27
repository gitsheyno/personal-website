export interface NavigationItem {
  label: string;
  href: `#${string}`;
}

export interface HeaderContact {
  phoneDisplay: string;
  phoneHref: string;
}

export interface HeaderIdentity {
  name: string;
  currentCompany: string;
  currentCompanyUrl: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}
