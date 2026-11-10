import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";

const css = readFileSync(new URL("../src/app/globals.css", import.meta.url), "utf8");
const token = (n: string) => css.match(new RegExp(`--${n}:\\s*(#[0-9a-fA-F]{6})`))![1];

function lum(hex: string) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
const ratio = (a: string, b: string) => {
  const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
};

describe("accessible defaults", () => {
  const pairs: [string, string][] = [["fg", "bg"], ["muted", "bg"], ["link", "bg"], ["banner-fg", "banner-bg"]];
  for (const [f, b] of pairs) {
    it(`--${f} on --${b} is at least 4.5:1`, () => {
      expect(ratio(token(f), token(b))).toBeGreaterThanOrEqual(4.5);
    });
  }
  it("focus indicator is at least 3:1 against the background", () => {
    expect(ratio(token("focus"), token("bg"))).toBeGreaterThanOrEqual(3);
  });
  it("has focus-visible styles and a skip link", () => {
    expect(css).toContain(":focus-visible");
    expect(css).toContain(".skip-link");
    expect(readFileSync(new URL("../src/app/[locale]/layout.tsx", import.meta.url), "utf8")).toContain('href="#main"');
  });
});
