import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/post/ecuador-2026",
        destination: "/ecuador",
        permanent: true,
      },
      {
        source: "/es/post/ecuador-2026",
        destination: "/es/ecuador",
        permanent: true,
      },
      {
        source: "/sv/post/ecuador-2026",
        destination: "/sv/ecuador",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
