"use client";

import { Blog } from "@/utils/types/blog.type";
import React, { FC, HTMLAttributes } from "react";
import Image from "next/image";
import cn from "@/utils/cn";

type BlogContentsProps = HTMLAttributes<HTMLDivElement> & {
  imageAlt: string;
  contents: Blog["contents"];
};

const BlogContents: FC<BlogContentsProps> = ({
  contents,
  imageAlt,
  ...props
}) => {
  const renderImageContent = (image: string, key: number) => {
    return (
      <Image
        key={key}
        src={image}
        alt={imageAlt}
        width={800}
        height={0}
        className="w-full rounded-lg"
      />
    );
  };

  const renderListContent = (list: string[], key: number) => {
    return (
      <ul key={key} className="list-inside list-disc">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };

  const renderTextContent = (text: string, key: number) => {
    return (
      <p key={key} className="whitespace-pre-wrap">
        {text}
      </p>
    );
  };

  return (
    <div {...props} className={cn("flex flex-col gap-1", props.className)}>
      {contents.map((_, index) => {
        switch (_.type) {
          case "text":
            return renderTextContent(_.content, index);
          case "image":
            return renderImageContent(_.content, index);
          case "code":
            return <code key={index}>{_.content}</code>;
          case "quote":
            return <blockquote key={index}>{_.content}</blockquote>;
          case "list": {
            return renderListContent(_.content, index);
          }
        }
      })}
    </div>
  );
};

export default BlogContents;
