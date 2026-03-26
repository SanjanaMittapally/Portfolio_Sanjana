import type { MetadataRoute } from "next";

export const dynamic = "force-static";
export const revalidate = 0;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: "/", lastModified },
    { url: "/projects", lastModified },
    { url: "/experience", lastModified },
    { url: "/skills", lastModified },
    { url: "/contact", lastModified },
  ];
}

