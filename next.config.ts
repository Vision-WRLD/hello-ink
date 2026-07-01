import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/hello-ink',
  assetPrefix: '/hello-ink',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
