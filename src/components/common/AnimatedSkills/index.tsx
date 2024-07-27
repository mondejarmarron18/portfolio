"use client";

import useSkills from "@/hooks/useSkills";
import cn from "@/utils/cn";
import React from "react";
import { motion } from "framer-motion";

const AnimatedSkills = () => {
  const { skills: _skills } = useSkills();

  return (
    <div className="relative -z-10 flex h-full w-full items-center overflow-hidden">
      {_skills.map(({ skills, height, gap }, i) => (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: _skills.length / 2 - 0.5 - i * 0.5,
          }}
          key={i}
          style={{
            height: `${height * 15}px`,
          }}
          className="absolute flex items-center justify-center"
        >
          {skills.map((skill, j) => (
            <div
              key={j}
              className={cn(
                `lef-0 pointer-events-none absolute top-0 h-full cursor-none`,
                {
                  "rotate-180": i % 2 === 1,
                  "animate-spin-slow-2x": i === 0,
                  "animate-spin-slow-3x": i === 1,
                  "animate-spin-slow-4x": i === 2,
                },
              )}
              style={{
                rotate: `${j * gap}deg`,
              }}
            >
              <div className="absolute w-full -rotate-90 text-xs font-semibold uppercase sm:text-sm md:text-base lg:text-lg">
                {skill}
              </div>
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedSkills;
