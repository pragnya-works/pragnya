import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

const paths = ["/", "/about", "/edward"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({ url: absoluteUrl(path) }));
}
