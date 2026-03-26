import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static HTML export so the site can be deployed to GitHub Pages.
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  trailingSlash: true,
  images: {
    // For `output: "export"`, Next's image optimizer is not available.
    unoptimized: true,
  },
};

export default nextConfig;
