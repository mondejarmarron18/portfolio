"use client";

import GeneralLayout from "@/components/layouts/GeneralLayout";
import Heading from "@/components/ui/Heading";
import { theme } from "tailwindcss/defaultConfig";
import cn from "@/utils/cn";
import React, { useLayoutEffect, useState } from "react";
import techStacks from "@/constants/techStacks";

const techStacksLength = techStacks.length;

const techsConfig = [
  {
    stacks: techStacks,
    height: 110,
    gap: 12.5,
  },
  {
    stacks: techStacks.reverse().slice(techStacksLength / 4),
    height: 80,
    gap: 16.5,
  },
  {
    stacks: techStacks.slice(techStacksLength / 2),
    height: 50,
    gap: 24,
  },
];

const screens = Object.values(theme?.screens || {}).map((screen) =>
  screen.replace("px", ""),
);

const TechStack = () => {
  const [techs, setTechs] = useState(techsConfig);

  const reconfigTechs = () => {
    const heights: number[][] = [
      [45, 30, 15],
      [65, 47, 30],
      [80, 58, 35],
      [110, 80, 50],
    ];

    const windowInnerWidth = window.innerWidth;

    loop: for (let i = 0; i < screens.length - 1; i++) {
      if (windowInnerWidth < screens[i]) {
        const newTechs = heights[i].map((height, j) => {
          return {
            ...techs[j],
            height,
          };
        });

        setTechs(newTechs);

        break loop;
      }
    }
  };

  useLayoutEffect(() => {
    reconfigTechs();
    window.addEventListener("resize", reconfigTechs);
  }, []);

  return (
    <GeneralLayout>
      <div className="relative flex h-full w-full flex-row items-center">
        <div className="absolute flex flex-col drop-shadow-lg">
          <Heading variant="h1" className="flex flex-col leading-none md:gap-2">
            <span className="text-base sm:text-[1em]">Tech</span>{" "}
            <span className="text-secondary dark:text-primary sm:text-[1.5em]">
              Stack
            </span>
          </Heading>
        </div>
        <div className="relative flex h-full w-full items-center overflow-hidden">
          {techs.map(({ stacks, height, gap }, i) => (
            <div
              key={i}
              style={{
                height: `${height * 15}px`,
              }}
              className="absolute flex items-center justify-center"
            >
              {stacks.map((stack, j) => (
                <div
                  key={j}
                  className={cn(`lef-0 absolute top-0 h-full cursor-none`, {
                    "rotate-180": i % 2 === 1,
                    "animate-spin-slow-2x": i === 0,
                    "animate-spin-slow-3x": i === 1,
                    "animate-spin-slow-4x": i === 2,
                  })}
                  style={{
                    rotate: `${j * gap}deg`,
                  }}
                >
                  <div className="absolute w-full -rotate-90 text-xs font-semibold uppercase sm:text-sm md:text-base lg:text-lg">
                    {stack}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </GeneralLayout>
  );
};

export default TechStack;
