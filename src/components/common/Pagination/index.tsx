import React, { HTMLAttributes } from "react";
import cn from "@/utils/cn";
import { usePathname, useRouter } from "next/navigation";
import pages from "@/constants/pages";
import theme from "tailwindcss/colors";

type PaginationPropsType = HTMLAttributes<HTMLDivElement>;

const Pagination = ({ className, ...props }: PaginationPropsType) => {
  const path = usePathname();
  const router = useRouter();

  const goToPage = (page: string) => {
    router.push(page);
  };

  return (
    <div
      className={cn("flex w-fit flex-col items-center gap-2", className)}
      {...props}
    >
      {pages.map((page) => (
        <button
          key={page.name}
          onClick={() => goToPage(page.url)}
          className={cn("h-4 w-4 rounded-full", {
            "bg-customDirtyWhite dark:bg-customGray": path !== page.url,
            "bg-secondary dark:bg-primary": path === page.url,
          })}
        ></button>
      ))}
    </div>
  );
};

export default Pagination;
