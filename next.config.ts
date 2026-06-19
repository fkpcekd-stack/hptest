import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [
        // /career-agent 配下の SPA フォールバック (存在しないパスを index.html へ)
        { source: "/career-agent", destination: "/career-agent/index.html" },
        { source: "/career-agent/:path*", destination: "/career-agent/index.html" },
      ],
    };
  },
};

export default nextConfig;
