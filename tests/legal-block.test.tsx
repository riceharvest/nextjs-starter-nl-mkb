import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { LegalBlock } from "../src/components/LegalBlock";
import { Footer } from "../src/components/Footer";
import { LegalTemplate } from "../src/components/LegalTemplate";
import { siteConfig } from "../src/config/site";
import { t } from "../src/lib/dictionary";
import { locales } from "../src/lib/i18n";

describe("legal details block (Ondernemersplein / BW 3:15d)", () => {
  for (const locale of locales) {
    it(`${locale}: footer shows name, address, e-mail, phone, KvK and btw-id`, () => {
      const html = renderToStaticMarkup(<Footer locale={locale} />);
      const d = t(locale).legalBlock;
      for (const label of [d.name, d.address, d.email, d.phone, d.kvk, d.btw]) expect(html).toContain(label);
      for (const v of [siteConfig.name, siteConfig.address.street, siteConfig.email, siteConfig.phone, siteConfig.kvk, siteConfig.btwId]) {
        expect(html).toContain(v);
      }
    });
  }

  it("shows the values given in the config", () => {
    const html = renderToStaticMarkup(
      <LegalBlock locale="nl" config={{ ...siteConfig, kvk: "12345678", btwId: "NL123456789B01" }} />,
    );
    expect(html).toContain("12345678");
    expect(html).toContain("NL123456789B01");
  });
});

describe("legal templates", () => {
  for (const locale of locales) {
    for (const key of ["privacy", "terms"] as const) {
      it(`${locale}/${key}: carries the TEMPLATE label and has sections`, () => {
        const d = t(locale)[key];
        const html = renderToStaticMarkup(<LegalTemplate locale={locale} title={d.title} sections={d.sections} />);
        expect(html).toContain(t(locale).template.label);
        expect(html).toMatch(/TEMPLATE/);
        expect(d.sections.length).toBeGreaterThan(3);
      });
    }
  }
  it("nl label is exactly the required wording", () => {
    expect(t("nl").template.label).toBe("TEMPLATE, geen juridisch advies, laat controleren");
  });
});

describe("dictionary", () => {
  it("nl and en have the same shape", () => {
    const shape = (o: unknown): unknown =>
      Array.isArray(o) ? o.map(shape) : o && typeof o === "object" ? Object.fromEntries(Object.entries(o).map(([k, v]) => [k, shape(v)])) : "s";
    expect(shape(t("en"))).toEqual(shape(t("nl")));
  });
});
