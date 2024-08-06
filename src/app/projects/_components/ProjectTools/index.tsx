"use client";

import cn from "@/utils/cn";
import React, { FC, HTMLAttributes } from "react";

type ProjectToolsProps = HTMLAttributes<HTMLDivElement> & {
  tools: string[];
};

const ProjectTools: FC<ProjectToolsProps> = ({ tools, ...props }) => {
  if (!tools.length) return;

  return (
    <div {...props} className={cn("flex flex-wrap gap-1", props.className)}>
      {tools.map((tool) => (
        <span
          key={tool}
          className="rounded-full bg-customWhite/70 px-3 py-1 text-sm font-medium dark:bg-customBlack/70"
        >
          {tool}
        </span>
      ))}
    </div>
  );
};

export default ProjectTools;
