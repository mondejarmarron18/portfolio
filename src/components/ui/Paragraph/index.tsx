"use client";

import cn from "@/utils/cn";
import { ReactNode, HTMLAttributes } from "react";

type ParagraphPropsType = HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode;
};

const Paragraph = ({ children, ...props }: ParagraphPropsType) => {
  return (
    <p
      {...props}
      className={cn(
        "text-customBlack dark:text-customWhite lg:text-lg",
        props.className,
      )}
    >
      {children}
    </p>
  );
};

export default Paragraph;
