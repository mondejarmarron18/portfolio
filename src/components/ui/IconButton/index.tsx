import React, { ButtonHTMLAttributes } from "react";
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

const IconButton = ({
  children,
  className,
  icon,
  ...props
}: IconButtonPropsType) => {
  const Icon = icons[icon.name];

  const { theme } = useTheme();
  const { colors } = customTheme;

  return (
    <button
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
};

export default IconButton;
