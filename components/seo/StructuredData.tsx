import { siteConfig } from "@/data/seo";

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteConfig.url}/#profile`,
  url: siteConfig.url,
  name: siteConfig.title,
  description: siteConfig.description,
  mainEntity: {
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: "Frontend Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Druckhaus GmbH",
    },
    sameAs: siteConfig.socialLinks,
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Frontend Engineering",
      "Full-Stack Development",
      "Responsive Web Design",
      "UI Architecture",
      "Web Performance",
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: `${siteConfig.name} Portfolio`,
  description: siteConfig.description,
  inLanguage: "en",
  author: {
    "@id": `${siteConfig.url}/#person`,
  },
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([profilePageSchema, websiteSchema]).replace(
          /</g,
          "\\u003c"
        ),
      }}
    />
  );
}
