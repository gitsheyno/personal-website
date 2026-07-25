const fallbackSiteUrl = "https://sheyno.vercel.app";

export const siteConfig = {
  name: "Shayan Heidary",
  title: "Shayan Heidary | Frontend Engineer & React Developer",
  description:
    "Portfolio of Shayan Heidary, a Frontend Engineer in Germany specializing in React, Next.js, TypeScript, scalable UI architecture, and full-stack web applications.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl).replace(/\/$/, ""),
  locale: "en_US",
  keywords: [
    "Shayan Heidary",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Full-Stack Developer",
    "Software Engineer Germany",
    "Scalable UI Architecture",
  ],
  socialLinks: [
    "https://github.com/gitsheyno",
    "https://de.linkedin.com/in/shayan-heidary",
  ],
} as const;
