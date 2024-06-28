import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://rzanindev.com.br", lastModified: new Date() },
    { url: "https://rzanindev.com.br/academia", lastModified: new Date() },
    { url: "https://rzanindev.com.br/profile", lastModified: new Date() },
  ];
}
