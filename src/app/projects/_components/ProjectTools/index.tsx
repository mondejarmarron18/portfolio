"use client";

import React, { FC, HTMLAttributes } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

type ProjectToolsProps = HTMLAttributes<HTMLDivElement> & {
  tools: string[];
};

const ProjectTools: FC<ProjectToolsProps> = ({ tools, ...props }) => {
  if (!tools.length) return;

  return (
    <div className="relative w-[75vw]">
      <Swiper slidesPerView="auto" freeMode spaceBetween={10}>
        {tools.map((tool) => (
          <SwiperSlide
            key={tool}
            suppressHydrationWarning
            style={{
              width: "auto",
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
