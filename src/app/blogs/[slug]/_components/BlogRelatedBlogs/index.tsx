import RelatedBlogs from "@/components/common/RelatedBlogs";
import Heading from "@/components/ui/Heading";
import cn from "@/utils/cn";
import React, { FC, HTMLAttributes } from "react";

type BlogRelatedBlogsProps = HTMLAttributes<HTMLDivElement> & {
  blogId: string;
};

const BlogRelatedBlogs: FC<BlogRelatedBlogsProps> = ({ blogId, ...props }) => {
  return (
    <div {...props} className={cn("flex flex-col gap-4", props.className)}>
      <Heading variant="h3">Related Blogs</Heading>
      <RelatedBlogs blogId={blogId} />
    </div>
  );
};

export default BlogRelatedBlogs;
