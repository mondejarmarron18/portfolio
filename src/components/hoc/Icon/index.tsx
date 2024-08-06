"use client";

import { FC, useEffect, useState } from "react";

type IconPropsType = {
  color?: string;
  size?: string;
};

const Icon = (IconComponent: FC<IconPropsType>) => {
  const Component = ({ color = "#F5F5F5", size = "24" }: IconPropsType) => {
    const [iconColor, setIconColor] = useState<string>("");
    const [iconSize, setIconSize] = useState<string>("");

    useEffect(() => {
      setIconColor(color);
      setIconSize(size);
    }, [color, size]);

    return <IconComponent size={iconSize} color={iconColor} />;
  };

  return Component;
};

export default Icon;
