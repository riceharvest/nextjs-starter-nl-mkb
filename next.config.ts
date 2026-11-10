import type { NextConfig } from "next";
import { securityHeaders } from "./src/config/security-headers";
import { rewrites, redirects } from "./src/config/routing";

const config: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders() }];
  },
  async redirects() {
    return redirects();
  },
  async rewrites() {
    return { beforeFiles: rewrites(), afterFiles: [], fallback: [] };
  },
};

export default config;
