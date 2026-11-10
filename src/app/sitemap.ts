import type { MetadataRoute } from "next";
import { alternates, canonical } from "../lib/seo";
import { defaultLocale, locales, type PageKey } from "../lib/i18n";

const keys: PageKey[] = ["home", "privacy", "terms"];

export function sitemapEntries(): MetadataRoute.Sitemap {
  return keys.flatMap((k) =>
    locales.map((l) => ({
      url: canonical(l, k),
      alternates: { languages: alternates(k) },
      priority: k === "home" && l === defaultLocale ? 1 : 0.5,
    })),
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapEntries();
}
