import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { JsonLd } from "../src/components/JsonLd";
import { localBusinessJsonLd } from "../src/lib/seo";
import { siteConfig } from "../src/config/site";

const filled = {
  ...siteConfig,
  name: "Bakkerij Test",
  legalName: "Bakkerij Test B.V.",
  email: "info@test.nl",
  phone: "+31 6 12345678",
  kvk: "12345678",
  btwId: "NL123456789B01",
  address: { street: "Dorpsstraat 1", postalCode: "1234 AB", city: "Haarlem", country: "NL" },
};

describe("LocalBusiness JSON-LD", () => {
  it("is rendered into the page as application/ld+json", () => {
    const html = renderToStaticMarkup(<JsonLd locale="nl" />);
    expect(html).toContain('type="application/ld+json"');
    const json = html.replace(/^<script[^>]*>/, "").replace(/<\/script>$/, "");
    expect(JSON.parse(json)["@type"]).toBe("LocalBusiness");
  });

  it("carries name, address, phone, hours, KvK and btw-id from the config", () => {
    const ld = localBusinessJsonLd("nl", filled);
    expect(ld["@type"]).toBe("LocalBusiness");
    expect(ld.name).toBe("Bakkerij Test");
    expect(ld.telephone).toBe("+31 6 12345678");
    expect(ld.address.addressCountry).toBe("NL");
    expect(ld.address.streetAddress).toBe("Dorpsstraat 1");
    expect(ld.openingHoursSpecification.length).toBeGreaterThan(0);
    expect(ld.identifier.value).toBe("12345678");
    expect(ld.vatID).toBe("NL123456789B01");
  });

  it("omits placeholder values instead of publishing them", () => {
    const ld = localBusinessJsonLd("nl", siteConfig);
    expect(JSON.stringify(ld)).not.toContain('"[');
    expect(ld.identifier).toBeUndefined();
  });

  it("cannot be broken out of the script tag", () => {
    const evil = { ...filled, name: "</script><script>alert(1)</script>" };
    const html = renderToStaticMarkup(
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd("nl", evil)).replace(/</g, "\\u003c") }} />,
    );
    expect(html.match(/<\/script>/g)).toHaveLength(1);
  });
});
