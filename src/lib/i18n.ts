export const locales = ["nl", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "nl";

export type PageKey = "home" | "privacy" | "terms";

/** URL slug per page and locale ("" = home). */
export const pages: Record<PageKey, Record<Locale, string>> = {
  home: { nl: "", en: "" },
  privacy: { nl: "privacy", en: "privacy" },
  terms: { nl: "algemene-voorwaarden", en: "terms" },
};

export function isLocale(v: string): v is Locale {
  return (locales as readonly string[]).includes(v);
}

export function pageKeyForSlug(locale: Locale, slug: string): PageKey | undefined {
  return (Object.keys(pages) as PageKey[]).find((k) => k !== "home" && pages[k][locale] === slug);
}
