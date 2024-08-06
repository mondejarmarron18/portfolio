"use client";

import React, { FC, Suspense } from "react";
import Image from "next/image";
import { Blog } from "@/utils/types/blog.type";
import Link from "next/link";
import TimeIcon from "@/components/icons/TimeIcon";
import { useTheme } from "next-themes";
import customTheme from "@/constants/customTheme";

type BlogCardProps = Blog;

const { colors } = customTheme;

const BlogCard: FC<BlogCardProps> = (blog) => {
  const blogLink = `/blogs/${blog.id}`;
  const { theme } = useTheme();

  return (
    <figure
      key={blog.id}
      className="] flex w-full flex-col overflow-hidden rounded-xl border border-customDirtyWhite dark:border-customGray sm:max-w-[300px]"
    >
      <div className="relative h-[150px] w-full">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>
      <figcaption className="flex flex-1 flex-col gap-6 p-6 text-sm">
        <div className="flex flex-1 flex-col gap-2">
          <p className="line-clamp-2 font-semibold">{blog.title}</p>
          <p className="line-clamp-3 opacity-80">{blog.description}</p>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1 whitespace-nowrap">
            <TimeIcon
              size="18"
              color={theme === "dark" ? colors.customWhite : colors.customGray}
            />
            {blog.timeToRead}
          </div>
          <Link href={blogLink} className="text-secondary dark:text-primary">
            Read more
          </Link>
        </div>
      </figcaption>
    </figure>
  );
};

export default BlogCard;
