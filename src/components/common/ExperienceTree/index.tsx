"use client";

import cn from "@/utils/cn";
import React, { Fragment } from "react";
import { format } from "date-fns";
import { ExperienceType } from "@/constants/experiences";
import { motion, Variants } from "framer-motion";
import useScreen from "@/hooks/useScreen";

type ExperienceTreeProps = {
  experiences: ExperienceType[];
};

const formatDate = (date: Date) => {
  return format(date, "yyyy, MMMM");
};

const ExperienceTree = ({ experiences }: ExperienceTreeProps) => {
  const { height } = useScreen();

  return (
    <div className="grid grid-cols-2">
      {experiences.map((exp, i) => {
        const animationVariants: Variants = {
          initial: {
            x: i % 2 === 0 ? 20 : -20,
            opacity: 0,
          },
          animate: {
            x: 0,
            opacity: 1,
          },
        };

        return (
          <Fragment key={i}>
            {i % 2 === 1 && <div></div>}
            <div
              className={cn(
                "box-border border-secondary pt-8 text-sm dark:border-primary sm:text-base md:pt-10 lg:text-lg",
                {
                  "border-r-2 pr-[15px] text-right": i % 2 === 0,
                  "-ml-[2px] border-l-2 pl-[15px] text-left": i % 2 === 1,
                  "md:pt-8": height < 940,
                  "md:pt-4": height <= 800,
                },
              )}
            >
              <div className={cn("relative font-semibold")}>
                <motion.p
                  variants={animationVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 0.5 }}
                >
                  {formatDate(exp.date.from)} -{" "}
                  {exp.date.to ? formatDate(exp.date.to) : "Present"}
                </motion.p>
                <span
                  className={cn(
                    "absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-secondary bg-customWhite dark:border-primary dark:bg-customBlack",
                    {
                      "left-full translate-x-1/2": i % 2 === 0,
                      "right-full -translate-x-1/2": i % 2 === 1,
                    },
                  )}
                ></span>
              </div>
              <motion.p
                variants={animationVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5 }}
              >
                <span className="opacity-50"> {exp.company}</span>
              </motion.p>
              <motion.p
                variants={animationVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5 }}
              >
                <span className="uppercase opacity-50">{exp.position}</span>
              </motion.p>
            </div>
            {i % 2 === 0 && <div></div>}
          </Fragment>
        );
      })}
    </div>
  );
};

export default ExperienceTree;
