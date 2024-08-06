import blogs from "@/constants/blogs";
import { Blog } from "@/utils/types/blog.type";
import { useEffect, useState } from "react";
import _ from "lodash";

// get common tags count
const commonTagsCount = (tags1: string[], tags2: string[]) => {
  return tags1.filter((tag) => tags2.includes(tag)).length;
};

const useRelatedBlogs = (blogId: string, count = 3) => {
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const blog = blogs.find((blog) => blog.id === blogId);

    const relatedBlogs = blogs
      .map((blog) => {
        const count = commonTagsCount(blog.tags, blog.tags);

        if (blog.id === blogId)
          return {
            count: 0,
            blog,
          };

        return {
          count: commonTagsCount(blog.tags, blog.tags),
          blog,
        };
      }) // get common tags count
      .filter(({ count }) => count > 0) // filter out blogs with no common tags
      .sort((a, b) => b.count - a.count) // sort by common tags count
      .slice(0, count) // get top 3
      .map(({ blog }) => blog); // map to blog

    setRelatedBlogs(relatedBlogs);

    return () => {
      setRelatedBlogs([]); // clean up
    };
  }, [blogId, count]);

  return relatedBlogs;
};

export default useRelatedBlogs;
