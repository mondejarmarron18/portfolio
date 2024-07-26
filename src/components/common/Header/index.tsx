import React, { useEffect, useState } from "react";
import IconButton from "../../ui/IconButton";
import { useTheme } from "next-themes";
import customTheme from "@/constants/customTheme";
import { IconNameType } from "@/constants/icons";
import { Teko } from "next/font/google";
import cn from "@/utils/cn";

const inter = Teko({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Header = () => {
  const { theme, setTheme } = useTheme();
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

  return (
    <div className="flex">
      <div
        className={cn(
          inter.className,
          "flex flex-1 flex-col justify-center px-2 text-lg font-bold",
        )}
      >
        {/* ポートフォリオ */}{" "}
        <span className="w-fit text-secondary transition-colors dark:text-primary">
          iForgeTech
        </span>
      </div>
      {/* Custom Corner Curve */}
      <div className="relative h-full w-14">
        <div className="absolute bottom-0 left-0 h-[90%] w-full bg-customWhite/60 p-2 pb-0 backdrop-blur-xl dark:bg-customBlack/60"></div>
        <div className="clip-path absolute bottom-0 left-0 h-[90%] w-full rounded-br-full bg-customDirtyWhite dark:bg-customGray"></div>
      </div>
      <div className="flex flex-1 items-center justify-between rounded-t-custom bg-customWhite/60 p-2 pb-1 backdrop-blur-xl dark:bg-customBlack/60">
        {icon ? (
          <IconButton
            icon={{
              name: icon,
              color: icon === "MoonIcon" ? colors.primary : colors.secondary,
            }}
            onClick={toggleTheme}
          />
        ) : (
          <IconButton
            icon={{
              name: "LoadingIcon",
              color: theme === "light" ? colors.primary : colors.secondary,
            }}
            onClick={toggleTheme}
          />
        )}

        {/* <IconButton
          icon={{
            name: "MenuIcon",
            color: theme === "light" ? colors.secondary : colors.primary,
          }}
        /> */}
      </div>
    </div>
  );
};

export default Header;
