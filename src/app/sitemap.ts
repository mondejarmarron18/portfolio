import blogs from "@/constants/blogs";
import config from "@/utils/config";
import slugify from "@/utils/slugify";
import { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
  const blogsURLs = blogs.map((blog) => ({
    url: `${config.baseURL}/blogs/${slugify(blog.title)}_${blog.id}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: `${config.baseURL}`,
      lastModified: new Date(),
    },
    {
      url: `${config.baseURL}/blogs`,
      lastModified: new Date(),
    },
    {
      url: `${config.baseURL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${config.baseURL}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${config.baseURL}/projects`,
      lastModified: new Date(),
    },
    {
      url: `${config.baseURL}/skills`,
      lastModified: new Date(),
    },
    ...blogsURLs,
  ];
};

export default sitemap;
