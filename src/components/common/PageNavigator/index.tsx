import React, { HTMLAttributes, useEffect } from "react";
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
  const goBack = () => {
    router.push(pages[currentPageIndex - 1].url);
  };
  const goForward = () => {
    router.push(pages[currentPageIndex + 1].url);
  };

  return (
    <div className={cn("flex w-fit flex-col gap-2", className)} {...props}>
      {pages?.[0].url !== path && (
        <IconButton
          icon={{
            name: "ArrowIcon",
            color: theme === "light" ? colors.secondary : colors.primary,
          }}
          onClick={goBack}
          className="rotate-180"
        />
      )}
      {pages?.[pages.length - 1].url !== path && (
        <IconButton
          icon={{
            name: "ArrowIcon",
            color: theme === "light" ? colors.secondary : colors.primary,
          }}
          onClick={goForward}
        />
      )}
    </div>
  );
};

export default PageNavigator;
