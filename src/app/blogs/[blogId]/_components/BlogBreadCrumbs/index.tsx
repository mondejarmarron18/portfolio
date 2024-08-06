"use client";

import BreadCrumbs from "@/components/common/BreadCrumbs";
import blogs from "@/constants/blogs";
import { Blog } from "@/utils/types/blog.type";
import { useParams } from "next/navigation";
import { FC } from "react";

type BlogBreadCrumbsProps = {
  blog: Blog;
};

const BlogBreadCrumbs: FC<BlogBreadCrumbsProps> = ({ blog }) => {
  return (
    <BreadCrumbs
      breadCrumbs={[
        { name: "Blogs", link: "/blogs" },
        {
          name: `${blog.title}`,
          link: `/blogs/${blog?.id}`,
          isActive: true,
        },
      ]}
    />
  );
};

export default BlogBreadCrumbs;
