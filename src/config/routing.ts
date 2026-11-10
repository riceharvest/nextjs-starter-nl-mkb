import { locales, defaultLocale, pages, type Locale, type PageKey } from "../lib/i18n";

/** Path for a page in a locale. Default locale (nl) has no prefix: "/", "/privacy". */
export function pagePath(locale: Locale, page: PageKey): string {
  const slug = pages[page][locale];
  const prefix = locale === defaultLocale ? "" : `/${locale}`;
  const path = `${prefix}/${slug}`.replace(/\/+$/, "");
  return path === "" ? "/" : path;
}

/** Internal rewrites: unprefixed URLs are served by the /nl route tree. */
export function rewrites() {
  const slugs = Object.values(pages).map((p) => p[defaultLocale]).filter(Boolean);
  return [
    { source: "/", destination: `/${defaultLocale}` },
    ...slugs.map((s) => ({ source: `/${s}`, destination: `/${defaultLocale}/${s}` })),
  ];
}

/** /nl/... is a duplicate of the unprefixed URL, so redirect it. */
export function redirects() {
  return [
    { source: `/${defaultLocale}`, destination: "/", permanent: true },
    { source: `/${defaultLocale}/:path*`, destination: "/:path*", permanent: true },
  ];
}

export { locales };
