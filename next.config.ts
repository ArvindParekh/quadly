import type { NextConfig } from "next";
import {PrismaPlugin} from "@prisma/nextjs-monorepo-workaround-plugin";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "3mb",
    },
  },
  transpilePackages: ["@prisma"],
  plugins: [new PrismaPlugin()],
};

export default nextConfig;
