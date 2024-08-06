import GeneralLayout from "@/components/layouts/GeneralLayout";
import Heading from "@/components/ui/Heading";
import React from "react";
import BlogCardList from "@/components/common/BlogCardList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Dive into topics such as best practices, cutting-edge technologies, and real-world solutions to common software development challenges.",
  openGraph: {
    title: "Blogs",
    description:
      "Dive into topics such as best practices, cutting-edge technologies, and real-world solutions to common software development challenges.",
  },
};

const BlogsPage = () => {
  return (
    <GeneralLayout>
      <div className="flex h-full flex-col gap-4 overflow-hidden">
        <Heading variant="h1">
          B<span className="text-secondary dark:text-primary">logs</span>
        </Heading>
        <BlogCardList />
      </div>
    </GeneralLayout>
  );
};

export default BlogsPage;
