import { siteConfig, type SiteConfig } from "../config/site";
import { locales, defaultLocale, type Locale, type PageKey } from "./i18n";
import { pagePath } from "../config/routing";

export const isPlaceholder = (v: string) => v.trim().startsWith("[");

/** hreflang map for a page: every locale plus x-default (= default locale). */
export function alternates(page: PageKey, base = siteConfig.url) {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = base + pagePath(l, page);
  languages["x-default"] = base + pagePath(defaultLocale, page);
  return languages;
}

export function canonical(locale: Locale, page: PageKey, base = siteConfig.url) {
  return base + pagePath(locale, page);
}

/** schema.org LocalBusiness built only from the config. Placeholders are omitted. */
export function localBusinessJsonLd(locale: Locale, c: SiteConfig = siteConfig) {
  const real = (v: string) => (isPlaceholder(v) ? undefined : v);
  const hours = c.openingHours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [...h.days],
    opens: h.opens,
    closes: h.closes,
  }));
  const ld = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${c.url}/#business`,
    name: real(c.name),
    legalName: real(c.legalName),
    url: c.url,
    description: real(c.description[locale]),
    telephone: real(c.phone),
    email: real(c.email),
    vatID: real(c.btwId),
    identifier: real(c.kvk)
      ? { "@type": "PropertyValue", propertyID: "KvK-nummer", value: c.kvk }
      : undefined,
    address: {
      "@type": "PostalAddress",
      streetAddress: real(c.address.street),
      postalCode: real(c.address.postalCode),
      addressLocality: real(c.address.city),
      addressCountry: c.address.country,
    },
    openingHoursSpecification: hours.length ? hours : undefined,
    sameAs: c.sameAs.length ? [...c.sameAs] : undefined,
  };
  // Drop undefined keys so the output is clean JSON.
  return JSON.parse(JSON.stringify(ld));
}

/** Escape "<" so config text can never close the script tag. */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function whatsappUrl(phone: string, text?: string) {
  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/${digits}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
}

export function llmsTxt(locale: Locale = defaultLocale, c: SiteConfig = siteConfig) {
  const keys: PageKey[] = ["home", "privacy", "terms"];
  const name = isPlaceholder(c.name) ? "Website" : c.name;
  const lines = [`# ${name}`, ""];
  if (!isPlaceholder(c.description[locale])) lines.push(`> ${c.description[locale]}`, "");
  lines.push("## Pages", "");
  for (const k of keys) lines.push(`- [${k}](${canonical(locale, k, c.url)})`);
  return lines.join("\n") + "\n";
}
