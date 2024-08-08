"use client";

import React, { HTMLAttributes } from "react";
import IconButton from "../../ui/IconButton";
import cn from "@/utils/cn";
import pages from "@/constants/pages";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import customTheme from "@/constants/customTheme";
import { useTheme } from "next-themes";

type PageNavigatorPropsType = HTMLAttributes<HTMLDivElement>;

const { colors } = customTheme;

const PageNavigator = ({ className, ...props }: PageNavigatorPropsType) => {
  const path = usePathname();
  const router = useRouter();
  const { theme } = useTheme();

  const currentPageIndex = pages.findIndex((page) => page.url === path);
  const isFirstPage = currentPageIndex === 0;
  const isLastPage = currentPageIndex === pages.length - 1;

  const goBack = () => {
    if (isFirstPage) return;

    router.push(pages[currentPageIndex - 1].url);
  };
  const goForward = () => {
    if (isLastPage) return;

    router.push(pages[currentPageIndex + 1].url);
  };

  return (
    <div className={cn("flex w-fit flex-col gap-2", className)} {...props}>
      <IconButton
        aria-label="Go to previous page"
        icon={{
          name: "ArrowIcon",
          color: theme === "light" ? colors.secondary : colors.primary,
        }}
        onClick={goBack}
        className={cn("rotate-180", {
          "opacity-30": isFirstPage,
        })}
      />
      <IconButton
        aria-label="Go to next page"
        icon={{
          name: "ArrowIcon",
          color: theme === "light" ? colors.secondary : colors.primary,
        }}
        onClick={goForward}
        className={cn("", {
          "opacity-30": isLastPage,
        })}
      />
    </div>
  );
};

export default PageNavigator;
