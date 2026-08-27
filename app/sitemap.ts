import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date("2026-07-25"),
      changeFrequency: "monthly",
      priority: 1,
      images: [`${siteConfig.url}/og.jpg`],
    },
  ];
}
