import React, { ButtonHTMLAttributes, forwardRef } from "react";
import icons, { IconNameType } from "@/constants/icons";
import cn from "@/utils/cn";
import customTheme from "@/constants/customTheme";
import { useTheme } from "next-themes";

type IconButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  icon: {
    name: IconNameType;
    size?: string;
    color?: string;
  };
};

const IconButton = forwardRef<HTMLButtonElement, IconButtonPropsType>(
  ({ children, className, icon, ...props }, ref) => {
    const Icon = icons[icon.name];

    const { theme } = useTheme();
    const { colors } = customTheme;

    return (
      <button
        ref={ref}
        className={cn(
          "group rounded-xl bg-customDirtyWhite p-3 dark:bg-customGray",
          className,
        )}
        {...props}
      >
        <div className="group-hover:animate-shake">
          <Icon
            color={
              icon?.color
                ? icon.color
                : theme === "light"
                  ? colors.customBlack
                  : colors.customWhite
            }
            size={icon.size}
          />
        </div>
      </button>
    );
  },
);

IconButton.displayName = "IconButton";

export default IconButton;
