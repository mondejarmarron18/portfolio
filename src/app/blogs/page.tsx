"use client";

import GeneralLayout from "@/components/layouts/GeneralLayout";
import Heading from "@/components/ui/Heading";
import blogs from "@/constants/blogs";
import Image from "next/image";
import React from "react";

const BlogsPage = () => {
  return (
    <GeneralLayout>
      <div className="flex h-full flex-col gap-4 overflow-hidden">
        <Heading variant="h1">
          B<span className="text-secondary dark:text-primary">logs</span>
        </Heading>
        <div className="flex flex-wrap gap-4 overflow-y-auto">
          {blogs.slice(0, 6).map((blog) => (
            <figure
              key={blog.id}
              className="flex w-full max-w-[300px] flex-col overflow-hidden rounded-xl border border-customDirtyWhite dark:border-customGray"
            >
              <div className="relative h-[150px] w-full">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="flex flex-1 flex-col gap-3 p-6 text-sm">
                <div className="flex flex-1 flex-col gap-2">
                  {/* <p>{blog.date}</p> */}
                  <p className="line-clamp-1 font-medium">{blog.title}</p>
                  <p className="line-clamp-3">{blog.description}</p>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="whitespace-nowrap">{blog.timeToRead}</span>
                  <a
                    href={blog.link}
                    className="text-secondary dark:text-primary"
                  >
                    Read more
                  </a>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </GeneralLayout>
  );
};

export default BlogsPage;
