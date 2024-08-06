"use client";

import cn from "@/utils/cn";
import React, { FC, HTMLAttributes } from "react";

type BlogTagsProps = HTMLAttributes<HTMLDivElement> & {
  tags: string[];
};

const BlogTags: FC<BlogTagsProps> = ({ tags, ...props }) => {
  if (!tags.length) return null;

  return (
    <div {...props} className={cn("flex flex-wrap gap-2", props.className)}>
      {tags.map((tag) => (
        <span key={tag}>{`#${tag}`}</span>
      ))}
    </div>
  );
};

export default BlogTags;
