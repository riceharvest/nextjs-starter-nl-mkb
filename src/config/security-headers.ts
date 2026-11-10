/**
 * Security headers applied to every route (see next.config.ts).
 *
 * CSP note: Next.js emits small inline scripts, so script-src needs
 * 'unsafe-inline' unless you add nonce-based CSP (see the Next.js docs on
 * Content Security Policy). 'unsafe-eval' is only added in development.
 * If you embed third-party widgets, extend the matching directive.
 */
export function contentSecurityPolicy(dev = process.env.NODE_ENV !== "production"): string {
  return [
    "default-src 'self'",
    `script-src 'self' 'unsafe-inline'${dev ? " 'unsafe-eval'" : ""}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data:",
    "font-src 'self'",
    "connect-src 'self'",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
  ].join("; ");
}

export function securityHeaders(dev?: boolean): { key: string; value: string }[] {
  return [
    { key: "Content-Security-Policy", value: contentSecurityPolicy(dev) },
    // HSTS is ignored over plain HTTP; only turn on preload once you are sure.
    { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
    { key: "X-Frame-Options", value: "DENY" },
  ];
}
