import React, { FC } from "react";
import Image from "next/image";
import { Blog } from "@/utils/types/blog.type";

type BlogBannerProps = {
  alt: string;
  image: string;
};

const BlogBanner: FC<BlogBannerProps> = ({ alt, image }) => {
  return (
    <Image
      src={image}
      alt={alt}
      width={800}
      height={0}
      className="h-[200px] w-full rounded-lg object-cover md:h-[300px] lg:h-[400px]"
    />
  );
};

export default BlogBanner;
