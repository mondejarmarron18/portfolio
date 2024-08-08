import blogs from "@/constants/blogs";

const getBlogBySlug = (slug: string) => {
  const blogId = `${slug}`.split("_").pop();
  const blog = blogs.find((blog) => blog.id === blogId);

  return blog;
};

export default getBlogBySlug;
