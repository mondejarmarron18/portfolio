"use client";

import BreadCrumbs from "@/components/common/BreadCrumbs";
import slugify from "@/utils/slugify";
import { Blog } from "@/utils/types/blog.type";
import { FC } from "react";

type BlogBreadCrumbsProps = {
  blog: Blog;
};

const BlogBreadCrumbs: FC<BlogBreadCrumbsProps> = ({ blog }) => {
  const blogSlug = slugify(blog.title);

  return (
    <BreadCrumbs
      breadCrumbs={[
        { name: "Blogs", link: "/blogs" },
        {
          name: `${blog.title}`,
          link: `/blogs/${blogSlug}_${blog.id}`,
          isActive: true,
        },
      ]}
    />
  );
};

export default BlogBreadCrumbs;
