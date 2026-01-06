import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/data/"],
      },
    ],
    sitemap: "https://krdn.kr/sitemap.xml",
    host: "https://krdn.kr",
  };
}
