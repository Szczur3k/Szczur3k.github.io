import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/szczur3k.github.io' : '',
  basePath: isProd ? '/szczur3k.github.io' : '',
  trailingSlash: true,
};

export default nextConfig;
