import GeneralLayout from "@/components/layouts/GeneralLayout";
import React from "react";
import BlogMainContent from "./_components/BlogMainContent";
import { Metadata, NextPage } from "next";
import blogs from "@/constants/blogs";
import { redirect } from "next/navigation";

type BlogPageProps = {
  params: {
    blogId: string;
  };
};

export const generateMetadata = async ({
  params,
}: BlogPageProps): Promise<Metadata> => {
  const { blogId } = params;

  const blog = blogs.find((blog) => blog.id === blogId);

  if (!blog) return redirect("/404");

  return {
    title: blog.title,
    description: blog.description,
    keywords: blog.tags,
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: blog.image,
    },
  };
};

const BlogPage: NextPage<BlogPageProps> = () => {
  return (
    <GeneralLayout sideBarHidden>
      <BlogMainContent />
    </GeneralLayout>
  );
};

export default BlogPage;
