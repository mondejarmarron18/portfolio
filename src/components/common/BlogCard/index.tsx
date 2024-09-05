"use client";

import React, { forwardRef, useRef } from "react";
import { Blog } from "@/utils/types/blog.type";
import Link from "next/link";
import TimeIcon from "@/components/icons/TimeIcon";
import { useTheme } from "next-themes";
import customTheme from "@/constants/customTheme";
import dynamic from "next/dynamic";
import slugify from "@/utils/slugify";
import NextImage from "next/image";
import { useInView } from "framer-motion";

type BlogCardProps = Blog;

const { colors } = customTheme;
const LazyImage = dynamic(() => import("next/image"), { ssr: false });

const BlogCard = forwardRef<HTMLElement, BlogCardProps>((blog, ref) => {
  const blogSlug = slugify(blog.title);
  const blogLink = `/blogs/${blogSlug}_${blog.id}`;
  const { theme } = useTheme();
  const imageRef = useRef<HTMLImageElement>(null);
  const imageInView = useInView({
    current: imageRef.current,
  });
  const Image = imageInView ? NextImage : LazyImage;

  return (
    <figure
      ref={ref}
      key={blog.id}
      className="] flex w-full flex-col overflow-hidden rounded-xl border border-customDirtyWhite dark:border-customGray sm:max-w-[300px]"
    >
      <div className="relative h-[150px] w-full">
        <Image
          ref={imageRef}
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
          <Link
            href={blogLink}
            aria-label={blog.title}
            title={blog.title}
            className="text-secondary dark:text-primary"
          >
            Read more
          </Link>
        </div>
      </figcaption>
    </figure>
  );
});

BlogCard.displayName = "BlogCard";

export default BlogCard;
