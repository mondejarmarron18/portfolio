import customTheme from "@/constants/customTheme";
import icons, { IconNameType } from "@/constants/icons";
import cn from "@/utils/cn";
import { useTheme } from "next-themes";
import React, { ButtonHTMLAttributes } from "react";

type ButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  variant?: "primary" | "ghost" | "outlined";
  icon?: Partial<{
    name: IconNameType;
    position: "left" | "right";
    size: string;
    color: string;
  }>;
};

const { colors } = customTheme;

const Button = (
  { icon, children, className, variant, ...props }: ButtonPropsType = {
    variant: "primary",
  },
) => {
  const { theme } = useTheme();
  const Icon = icon?.name ? icons[icon.name] : null;

  const iconColor = () => {
    if (icon?.color) {
      return icon.color;
    }

    switch (variant) {
      case "ghost":
        return theme === "light" ? colors.customBlack : colors.customWhite;
      case "outlined":
        return theme === "light" ? colors.secondary : colors.primary;
      case "primary":
        return colors.customBlack;
    }
  };

  const ButtonVariant = () => {
    switch (variant) {
      case "primary":
        return "from-secondary bg-gradient-to-tr to-primary text-customBlack";
      case "ghost":
        return "bg-customDirtyWhite text-customBlack dark:bg-customGray dark:text-customWhite";
      case "outlined":
        return "border border-secondary text-secondary dark:border-primary dark:text-primary";
    }
  };

  return (
    <button
      className={cn(
        "group flex items-center gap-2 rounded-custom px-8 py-3 text-sm font-semibold md:text-base",
        ButtonVariant(),
        className,
        icon && (icon?.position === "right" ? "flex-row-reverse pr-4" : "pl-4"),
      )}
      {...props}
    >
      {!!Icon && (
        <div className="group-hover:animate-shake">
          <Icon size={icon?.size || "24px"} color={iconColor()} />
        </div>
      )}
      {children}
    </button>
  );
};

export default Button;
