import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/academia", "/profile"],
      disallow: [],
    },
    sitemap: "https://rzanindev.com.br/sitemap.xml",
  };
}
