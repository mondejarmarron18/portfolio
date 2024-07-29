"use client";

import IconButton from "@/components/ui/IconButton";
import pages, { PageNameType, PageUrlType } from "@/constants/pages";
import MenuContext from "@/contexts/menuContext";
import React, { forwardRef, useContext, useState } from "react";
import CircledText from "../CircledText";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useTheme } from "next-themes";
import customTheme from "@/constants/customTheme";
import cn from "@/utils/cn";
import { useRouter } from "next/navigation";

const AnimatedCircledText = motion(CircledText);
const AnimatedIconButton = motion(IconButton);
const { colors } = customTheme;

const animationVariants: Variants = {
  visible: {
    scale: 1,
    opacity: 1,

    transition: {
      duration: 0.3,
      ease: "easeInOut",
      delay: 0.3,
    },
  },
  hidden: {
    scale: 0,
    opacity: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};

const Menu = forwardRef<HTMLMenuElement>(({}, ref) => {
  const { toggle: toggleMenu } = useContext(MenuContext);
  const [path, setPath] = useState("");
  const { theme } = useTheme();
  const router = useRouter();

  const circledTextConfig = (text: PageNameType) => {
    const config: { [K in PageNameType]: { wordsCount: number; gap: number } } =
      {
        Home: { wordsCount: 5, gap: 14.5 },
        Experience: { wordsCount: 3, gap: 11 },
        Skills: { wordsCount: 4, gap: 12.7 },
        Projects: { wordsCount: 3, gap: 13.5 },
        Blogs: { wordsCount: 5, gap: 12 },
        Contact: { wordsCount: 4, gap: 11.2 },
      };

    return config[text];
  };

  const goToPage = (url: PageUrlType) => {
    toggleMenu();
    router.push(url);
  };

  return (
    <menu
      ref={ref}
      className="fixed right-0 top-0 z-10 flex h-full w-full flex-col items-center bg-customWhite p-4 dark:bg-customBlack lg:p-6"
    >
      <div className="flex w-full justify-end">
        <AnimatePresence>
          <AnimatedIconButton
            variants={animationVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={toggleMenu}
            icon={{
              name: "CloseIcon",
              color: theme === "light" ? colors.secondary : colors.primary,
            }}
          />
        </AnimatePresence>
      </div>
      <nav className="grid w-full max-w-[1800px] flex-1 pt-4 text-lg font-semibold sm:grid-cols-2 md:grid-cols-3">
        {Object.values(pages).map((page) => {
          const { wordsCount, gap } = circledTextConfig(page.name);
          const text = [...Array(wordsCount)].map(() => page.name).join(" ");

          return (
            <div
              key={page.name}
              className="relative flex items-center justify-center transition-colors"
            >
              <AnimatePresence>
                <motion.button
                  variants={animationVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  onMouseEnter={() => setPath(page.url)}
                  onMouseLeave={() => setPath("")}
                  onClick={() => goToPage(page.url)}
                  className={cn(
                    "p-4 transition-colors duration-500 hover:text-secondary hover:dark:text-primary",
                  )}
                >
                  {page.name}
                </motion.button>
              </AnimatePresence>
              <AnimatePresence>
                {path === page.url && (
                  <AnimatedCircledText
                    variants={animationVariants}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    text={text}
                    size={"200px"}
                    gap={gap}
                    className="absolute"
                  />
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </nav>
    </menu>
  );
});

Menu.displayName = "Menu";

export default Menu;
