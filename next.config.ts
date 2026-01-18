import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'www.hobbyfactory.kr',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'hobbyfactory.kr',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'gundamfactory.godohosting.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
