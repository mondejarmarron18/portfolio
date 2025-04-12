"use client";

import React, { HTMLAttributes } from "react";
import cn from "@/utils/cn";
import { usePathname } from "next/navigation";
import pages from "@/constants/pages";
import Link from "next/link";

type PaginationPropsType = HTMLAttributes<HTMLDivElement>;

const Pagination = ({ className, ...props }: PaginationPropsType) => {
  const path = usePathname();

  return (
    <div
      className={cn("flex w-fit flex-col items-center gap-2", className)}
      {...props}
    >
      {pages.map((page) => (
        <Link
          href={page.url}
          key={page.name}
          aria-label={`Go to ${page.name} page`}
          className={cn("h-4 w-4 rounded-full", {
            "bg-customDirtyWhite dark:bg-customGray": path !== page.url,
            "bg-secondary dark:bg-primary": path === page.url,
          })}
        >
          <span className="sr-only">{page.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Pagination;
