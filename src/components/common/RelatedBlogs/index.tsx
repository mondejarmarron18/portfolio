"use client";

import React, { FC, HTMLAttributes } from "react";
import BlogCard from "../BlogCard";
import cn from "@/utils/cn";
import useRelatedBlogs from "@/hooks/useRelatedBlogs";
import blogs from "@/constants/blogs";

type RelatedBlogsProps = HTMLAttributes<HTMLDivElement> & {
  blogId: string;
};

const RelatedBlogs: FC<RelatedBlogsProps> = ({ blogId, ...props }) => {
  const relatedBlogs = useRelatedBlogs(blogId, 3);

  if (!relatedBlogs.length) return null;

  return (
    <div {...props} className={cn("flex flex-wrap gap-4", props.className)}>
      {relatedBlogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </div>
  );
};

export default RelatedBlogs;
