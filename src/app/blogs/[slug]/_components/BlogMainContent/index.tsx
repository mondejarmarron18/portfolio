"use client";

import { Blog } from "@/utils/types/blog.type";
import React, { FC, useEffect, useState } from "react";
import BlogBreadCrumbs from "../BlogBreadCrumbs";
import BlogBanner from "../BlogBanner";
import BlogHeader from "../BlogHeader";
import { parseISO } from "date-fns";
import BlogContents from "../BlogContents";
import BlogTags from "../BlogTags";
import BlogRelatedBlogs from "../BlogRelatedBlogs";
import { redirect, useParams } from "next/navigation";
import getBlogBySlug from "@/utils/api/blogs/getBlogBySlug";

type BlogMainContentProps = {};

const BlogMainContent: FC<BlogMainContentProps> = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    const blog = getBlogBySlug(slug as string);

    if (!blog) return redirect("/404");

    setBlog(blog);
  }, [slug]);

  return (
    <div className="scrollbar-thin flex flex-col gap-4 overflow-y-auto md:gap-6 lg:gap-8">
      {!!blog && <BlogBreadCrumbs blog={blog} />}

      <div className="flex max-w-[1000px] flex-col gap-2 md:gap-4">
        {!!blog?.image && <BlogBanner image={blog.image} alt={blog.title} />}

        {blog?.title && blog?.date && (
          <BlogHeader title={blog.title} date={parseISO(blog.date)} />
        )}

        {!!blog?.contents && (
          <BlogContents imageAlt={`${blog?.title}`} contents={blog.contents} />
        )}
      </div>
      {!!blog?.tags && <BlogTags tags={blog?.tags} />}
      {!!blog?.id && <BlogRelatedBlogs blogId={blog?.id} />}
    </div>
  );
};

export default BlogMainContent;
