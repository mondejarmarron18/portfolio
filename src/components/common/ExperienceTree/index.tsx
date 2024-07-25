import cn from "@/utils/cn";
import React, { Fragment } from "react";
import { format } from "date-fns";
import { ExperienceType } from "@/constants/experiences";

type ExperienceTreeProps = {
  experiences: ExperienceType[];
};

const formatDate = (date: Date) => {
  return format(date, "yyyy, MMMM");
};

const ExperienceTree = ({ experiences }: ExperienceTreeProps) => {
  return (
    <div className="grid grid-cols-2">
      {experiences.map((exp, i) => (
        <Fragment key={i}>
          {i % 2 === 1 && <div></div>}
          <div
            className={cn(
              "border-secondary px-[15px] pt-8 text-base dark:border-primary md:pt-10 lg:pt-12 lg:text-lg xl:pt-16",
              {
                "border-r-2 text-right": i % 2 === 0,
                "-ml-[2px] border-l-2 text-left": i % 2 === 1,
              },
            )}
          >
            <p className={cn("relative font-semibold")}>
              {formatDate(exp.date.from)} -{" "}
              {exp.date.to ? formatDate(exp.date.to) : "Present"}
              <span
                className={cn(
                  "absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-primary bg-customGray",
                  {
                    "left-full translate-x-1/2": i % 2 === 0,
                    "right-full -translate-x-1/2": i % 2 === 1,
                  },
                )}
              ></span>
            </p>
            <p className="opacity-50">{exp.company}</p>
            <p className="uppercase opacity-50">{exp.position}</p>
          </div>
          {i % 2 === 0 && <div></div>}
        </Fragment>
      ))}
    </div>
  );
};

export default ExperienceTree;
