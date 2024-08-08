"use client";

import React, { memo, useContext, useEffect, useState } from "react";
import IconButton from "../../ui/IconButton";
import { useTheme } from "next-themes";
import customTheme from "@/constants/customTheme";
import { IconNameType } from "@/constants/icons";

import MenuContext from "@/contexts/menuContext";
import Logo from "../Logo";
import Socials from "../Socials";
import useScreen from "@/hooks/useScreen";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const { toggle: toggleMenu } = useContext(MenuContext);
  const { orientation } = useScreen();

  const { colors } = customTheme;
  const [icon, setIcon] = useState<IconNameType>();

  useEffect(() => {
    if (theme === "dark") {
      return setIcon("MoonIcon");
    }

    setIcon("SunIcon");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const renderSeparator = () => {
    return (
      <div className="relative h-full w-14">
        <div className="absolute bottom-0 left-0 h-[90%] w-full bg-customWhite/60 p-2 pb-0 backdrop-blur-xl dark:bg-customBlack/60"></div>
        <div className="clip-path absolute bottom-0 left-0 h-[90%] w-full rounded-br-full bg-customDirtyWhite dark:bg-customGray"></div>
      </div>
    );
  };

  return (
    <div className="relative flex bg-customDirtyWhite dark:bg-customGray">
      <Logo />
      {/* Custom Corner Curve */}
      {renderSeparator()}
      <div className="flex flex-1 items-center justify-between rounded-t-custom bg-customWhite/60 p-2 pb-1 backdrop-blur-xl dark:bg-customBlack/60">
        {icon ? (
          <IconButton
            aria-label="Turn on light mode"
            icon={{
              name: icon,
              color: icon === "MoonIcon" ? colors.primary : colors.secondary,
            }}
            onClick={toggleTheme}
          />
        ) : (
          <IconButton
            aria-label="Turn on dark mode"
            icon={{
              name: "LoadingIcon",
              color: theme === "light" ? colors.primary : colors.secondary,
            }}
            onClick={toggleTheme}
          />
        )}
        <div className="flex gap-2">
          {orientation === "landscape" && (
            <Socials className="flex flex-row-reverse" />
          )}
          <IconButton
            onClick={toggleMenu}
            aria-label="Open menu"
            icon={{
              name: "MenuIcon",
              color: theme === "light" ? colors.secondary : colors.primary,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
