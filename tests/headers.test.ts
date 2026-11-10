import { describe, expect, it } from "vitest";
import config from "../next.config";
import { securityHeaders } from "../src/config/security-headers";

describe("security headers", () => {
  it("next.config applies them to all routes", async () => {
    const rules = await config.headers!();
    const all = rules.find((r) => r.source === "/:path*");
    expect(all).toBeTruthy();
    const map = Object.fromEntries(all!.headers.map((h) => [h.key, h.value]));
    expect(map["Content-Security-Policy"]).toContain("default-src 'self'");
    expect(map["Strict-Transport-Security"]).toMatch(/max-age=\d{7,}/);
    expect(map["X-Content-Type-Options"]).toBe("nosniff");
  });

  it("CSP blocks framing and objects, and has no eval in production", () => {
    const csp = securityHeaders(false).find((h) => h.key === "Content-Security-Policy")!.value;
    expect(csp).toContain("frame-ancestors 'none'");
    expect(csp).toContain("object-src 'none'");
    expect(csp).not.toContain("unsafe-eval");
    expect(securityHeaders(true).find((h) => h.key === "Content-Security-Policy")!.value).toContain("unsafe-eval");
  });
});
