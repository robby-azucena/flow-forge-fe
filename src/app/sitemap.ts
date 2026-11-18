import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const host = process.env.NEXT_PUBLIC_HOST_URL ?? "";
  return [
    {
      url: host,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url:  host + "/main-app",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
