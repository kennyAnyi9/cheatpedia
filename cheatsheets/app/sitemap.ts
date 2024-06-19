import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://cheatpedia.fyi/",
      lastModified: new Date().toISOString(),
    },
  ];
}
