"use client";

import React, { HTMLAttributes } from "react";
import cn from "@/utils/cn";
import { usePathname } from "next/navigation";
import pages from "@/constants/pages";

type PaginationPropsType = HTMLAttributes<HTMLDivElement>;

const Pagination = ({ className, ...props }: PaginationPropsType) => {
  const path = usePathname();

  return (
    <div
      className={cn("flex w-fit flex-col items-center gap-2", className)}
      {...props}
    >
      {pages.map((page) => (
        <a
          href={page.url}
          key={page.name}
          className={cn("h-4 w-4 rounded-full", {
            "bg-customDirtyWhite dark:bg-customGray": path !== page.url,
            "bg-secondary dark:bg-primary": path === page.url,
          })}
        >
          <span className="sr-only">{page.name}</span>
        </a>
      ))}
    </div>
  );
};

export default Pagination;
