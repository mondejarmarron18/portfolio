"use client";

import React, { FC, HTMLAttributes, memo, useEffect, useState } from "react";
import BlogCard from "../BlogCard";
import blogsData from "@/constants/blogs";
import _ from "lodash";
import cn from "@/utils/cn";
import { Blog } from "@/utils/types/blog.type";

type BlogCardListProps = HTMLAttributes<HTMLDivElement> & {
  maxCount?: number;
};

const BlogCardList: FC<BlogCardListProps> = ({ maxCount = 3, ...props }) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const sortedBlogs = _.sortBy(blogsData, "date"); // sort by date
    const reversedBlogs = _.reverse(sortedBlogs); // reverse order to show latest first
    const topBlogs = reversedBlogs.slice(0, maxCount); // limit to maxCount

    setBlogs(topBlogs);
  }, [maxCount]);

  return (
    <div
      {...props}
      className={cn(
        "scrollbar-thin flex flex-wrap gap-4 overflow-y-auto",
        props.className,
      )}
    >
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </div>
  );
};

export default memo(BlogCardList);
