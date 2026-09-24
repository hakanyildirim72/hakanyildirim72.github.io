import type { MetadataRoute } from "next";
import { projects } from "@/lib/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dr-hakan-yildirim.yldrma423.chatgpt.site";
  const pages = ["", "/about", "/publications", "/projects", "/experience", "/contact"];
  return ["en", "tr"].flatMap((lang) => [
    ...pages.map((page) => ({ url: `${base}/${lang}${page}`, changeFrequency: page === "/publications" || page === "/projects" ? "monthly" as const : "yearly" as const, priority: page === "" ? 1 : 0.7 })),
    ...projects.map((project) => ({ url: `${base}/${lang}/projects/${project.slug}`, changeFrequency: "yearly" as const, priority: 0.6 })),
  ]);
}
