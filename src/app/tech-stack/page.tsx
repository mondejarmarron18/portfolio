"use client";

import GeneralLayout from "@/components/layouts/GeneralLayout";
import Heading from "@/components/ui/Heading";
import IconButton from "@/components/ui/IconButton";
import cn from "@/utils/cn";
import React, { useLayoutEffect, useState } from "react";

const techsConfig = [
  {
    stacks: 40,
    height: 150,
    gap: 15,
  },
  {
    stacks: 17,
    height: 110,
    gap: 30,
  },
  {
    stacks: 15,
    height: 70,
    gap: 40,
  },
];

const screens = [768, 1024, 1440];

const TechStack = () => {
  const [techs, setTechs] = useState(techsConfig);

  const reconfigTechs = () => {
    if (window.innerWidth < screens[1]) {
      return setTechs((prev) => [
        {
          stacks: 20,
          height: 150,
          gap: 20,
        },
        {
          stacks: 12,
          height: 130,
          gap: 30,
        },
        {
          stacks: 10,
          height: 110,
          gap: 40,
        },
      ]);
    }

    setTechs(techsConfig);
  };

  // useLayoutEffect(() => {
  //   window.addEventListener("load", reconfigTechs);
  //   window.addEventListener("resize", reconfigTechs);
  // }, []);

  return (
    <GeneralLayout>
      <div className="relative flex h-full w-full flex-col items-center">
        <Heading variant="h1" className="text-center">
          <span className="text-primary">Tech</span> Stack
        </Heading>
        <p className="pb-4">Coming Soom</p>

        <div className="relative flex h-full w-full items-center overflow-hidden">
          {techs.map(({ stacks, height, gap }, i) => (
            <div
              key={stacks}
              style={{
                height: `${height * 15}px`,
              }}
              className="absolute flex items-center justify-center"
            >
              {[...Array(stacks)].map((_, j) => (
                <div
                  key={j}
                  className={cn(
                    `lef-0 absolute top-0 h-full animate-spin-slow-2x`,
                    {
                      "rotate-180": i % 2 === 1,
                    },
                  )}
                  style={{
                    rotate: `${j * gap}deg`,
                  }}
                >
                  {}
                  <IconButton
                    icon={{
                      name: "StarIcon",
                      size: "40px",
                    }}
                  />
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
