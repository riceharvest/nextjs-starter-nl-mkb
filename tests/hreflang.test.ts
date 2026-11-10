import { describe, expect, it } from "vitest";
import { alternates } from "../src/lib/seo";
import { sitemapEntries } from "../src/app/sitemap";
import { locales, pages, type PageKey } from "../src/lib/i18n";
import { pagePath, rewrites, redirects } from "../src/config/routing";
import { siteConfig } from "../src/config/site";

describe("hreflang", () => {
  for (const page of Object.keys(pages) as PageKey[]) {
    it(`${page}: has every locale plus x-default pointing at nl`, () => {
      const a = alternates(page);
      for (const l of locales) expect(a[l], l).toBeTruthy();
      expect(a["x-default"]).toBe(a.nl);
    });
  }

  it("nl has no prefix, en has /en", () => {
    expect(pagePath("nl", "home")).toBe("/");
    expect(pagePath("en", "home")).toBe("/en");
    expect(pagePath("nl", "terms")).toBe("/algemene-voorwaarden");
    expect(pagePath("en", "terms")).toBe("/en/terms");
  });

  it("sitemap lists every page in every locale with alternates", () => {
    const entries = sitemapEntries();
    expect(entries).toHaveLength(Object.keys(pages).length * locales.length);
    for (const e of entries) {
      expect(e.url.startsWith(siteConfig.url)).toBe(true);
      expect(Object.keys(e.alternates?.languages ?? {})).toEqual(expect.arrayContaining(["nl", "en", "x-default"]));
    }
  });

  it("serves nl unprefixed and redirects /nl/... to it", () => {
    expect(rewrites()).toContainEqual({ source: "/", destination: "/nl" });
    expect(redirects().map((r) => r.source)).toContain("/nl");
  });
});
