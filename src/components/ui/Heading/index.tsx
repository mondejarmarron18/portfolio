"use client";

import cn from "@/utils/cn";
import { forwardRef, HTMLAttributes, ReactNode } from "react";

type HeadingPropsType = HTMLAttributes<HTMLHeadingElement> & {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
};

const Heading = forwardRef<HTMLHeadingElement, HeadingPropsType>(
  ({ children, variant, ...props }, ref) => {
    const attibutes = (className: string) => ({
      ...props,
      ref,
      className: cn(
        "text-customBlack dark:text-customWhite font-semibold",
        className,
        props.className,
      ),
    });

    switch (variant) {
      case "h2":
        return (
          <h2 {...attibutes("text-xl md:text-2xl lg:text-3xl")}>{children}</h2>
        );
      case "h3":
        return (
          <h3 {...attibutes("text-lg md:text-xl lg:text-2xl")}>{children}</h3>
        );
      case "h4":
        return <h4 {...attibutes("md:text-lg lg:text-xl")}>{children}</h4>;
      case "h5":
        return <h5 {...attibutes("text-lg")}>{children}</h5>;
      case "h6":
        return <h6 {...attibutes("text-base")}>{children}</h6>;
      default:
        return (
          <h1 {...attibutes("text-2xl md:text-3xl lg:text-4xl")}>{children}</h1>
        );
    }
  },
);

Heading.displayName = "Heading";

export default Heading;
