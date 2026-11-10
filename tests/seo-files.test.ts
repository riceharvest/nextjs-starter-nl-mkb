import { describe, expect, it } from "vitest";
import robots from "../src/app/robots";
import { llmsTxt, whatsappUrl } from "../src/lib/seo";
import { GET } from "../src/app/llms.txt/route";

describe("robots, llms.txt, contact links", () => {
  it("robots points at the sitemap", () => {
    expect(robots().sitemap).toMatch(/\/sitemap\.xml$/);
  });
  it("llms.txt is markdown with a title and page links", async () => {
    const body = await GET().text();
    expect(body).toMatch(/^# /);
    expect(body).toContain("## Pages");
    expect(body).toBe(llmsTxt("nl"));
  });
  it("builds a wa.me link from a formatted number", () => {
    expect(whatsappUrl("+31 6 12345678", "Hoi")).toBe("https://wa.me/31612345678?text=Hoi");
  });
});
