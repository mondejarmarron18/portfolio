import config from "@/utils/config";
import { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: [{ userAgent: ["*"], allow: ["/"], disallow: [] }],
    sitemap: `${config.baseURL}/sitemap.xml`,
  };
};

export default robots;
