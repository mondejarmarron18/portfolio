"use client";

import React, { FC, HTMLAttributes, memo, useEffect, useState } from "react";
import BlogCard from "../BlogCard";
import blogsData from "@/constants/blogs";
import _ from "lodash";
import cn from "@/utils/cn";
import { Blog } from "@/utils/types/blog.type";
import { motion, Variants } from "framer-motion";

type BlogCardListProps = HTMLAttributes<HTMLDivElement> & {
  maxCount?: number;
};

const AnimatedBlogCard = motion(BlogCard);

const variants: Variants = {
  visible: {
    opacity: 1,
    scale: 1,
  },
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
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
        <AnimatedBlogCard
          variants={variants}
          initial="hidden"
          animate="visible"
          exit={"hidden"}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          key={blog.id}
          {...blog}
        />
      ))}
    </div>
  );
};

export default memo(BlogCardList);
