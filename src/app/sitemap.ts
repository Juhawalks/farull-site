import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://farull.se";

  const pages = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/farull", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/farraser", priority: 0.8, changeFrequency: "monthly" as const },
    {
      path: "/anvandningsomraden",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/ullens-historia",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/vad-ar-farullsisolering",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    { path: "/fordelar", priority: 0.8, changeFrequency: "monthly" as const },
    {
      path: "/jamforelse",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    { path: "/pris", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/montering", priority: 0.8, changeFrequency: "monthly" as const },
    {
      path: "/fragor-och-svar",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/hallbarhet",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    { path: "/om-oss", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/kontakt", priority: 0.5, changeFrequency: "monthly" as const },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
