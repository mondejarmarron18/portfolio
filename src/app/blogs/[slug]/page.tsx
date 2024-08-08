import GeneralLayout from "@/components/layouts/GeneralLayout";
import React from "react";
import BlogMainContent from "./_components/BlogMainContent";
import { Metadata, NextPage } from "next";
import { redirect } from "next/navigation";
import getBlogBySlug from "@/utils/api/blogs/getBlogBySlug";

type BlogPageProps = {
  params: {
    slug: string;
  };
};

export const generateMetadata = async ({
  params,
}: BlogPageProps): Promise<Metadata> => {
  const { slug } = params;
  const blog = getBlogBySlug(slug);

  if (!blog) return redirect("/404");

  return {
    title: blog.title,
    description: blog.description,
    keywords: blog.tags,
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: blog.image,
      siteName: `iForgeTech | Blog - ${blog.title}`,
    },
  };
};

const BlogPage: NextPage<BlogPageProps> = ({ params }) => {
  return (
    <GeneralLayout sideBarHidden>
      <BlogMainContent />
    </GeneralLayout>
  );
};

export default BlogPage;
