"use client";

import cn from "@/utils/cn";
import React, { FC, HTMLAttributes } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

type ProjectToolsProps = HTMLAttributes<HTMLDivElement> & {
  tools: string[];
};

const ProjectTools: FC<ProjectToolsProps> = ({ tools, ...props }) => {
  if (!tools.length) return;

  return (
    <div className="w-[1px]">
      <Swiper
        slidesPerView="auto"
        freeMode
        spaceBetween={10}
        style={{
          width: "fit-content",
        }}
      >
        {tools.map((tool) => (
          <SwiperSlide
            key={tool}
            suppressHydrationWarning
            style={{
              width: "fit-content",
            }}
          >
            <span className="rounded-full bg-customWhite/70 px-3 py-1 text-sm font-medium dark:bg-customBlack/70">
              {tool}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectTools;
