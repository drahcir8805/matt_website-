import type { NextConfig } from "next";
import { fileURLToPath } from "url";
import { dirname } from "path";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project — a stray lockfile in a parent
  // directory otherwise makes Next infer the wrong root.
  turbopack: {
    root: dirname(fileURLToPath(import.meta.url)),
  },
};

export default nextConfig;
