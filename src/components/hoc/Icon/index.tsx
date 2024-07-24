"use client";

import { FC, useEffect, useState } from "react";

type IconPropsType = {
  color?: string;
  size?: string;
};

const Icon = (IconComponent: FC<IconPropsType>) => {
  const Component = ({ color, size }: IconPropsType) => {
    const [iconColor, setIconColor] = useState<string>("");
    const [iconSize, setIconSize] = useState<string>("");

    useEffect(() => {
      setIconColor(color || "#2B2B2B");
      setIconSize(size || "24");
    }, [color, size]);

    return <IconComponent size={iconSize} color={iconColor} />;
  };

  return Component;
};

export default Icon;
