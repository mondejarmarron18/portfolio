import experiences from "@/constants/experiences";
import React from "react";
import ExperienceTree from "../ExperienceTree";
import _ from "lodash";

const ExperienceList = () => {
  return (
    <div className="flex items-center">
      <div className="relative w-full border-t-2 border-secondary dark:border-primary">
        <swiper-container slides-per-view="auto" space-between="50" free-mode>
          {_.chunk(experiences, 4).map((exp, i) => (
            <swiper-slide
              key={i}
              style={{
                height: "auto",
                width: "auto",
                display: "flex",
                alignItems: "flex-start",
              }}
              suppressHydrationWarning
            >
              <ExperienceTree experiences={exp} />
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </div>
  );
};

export default ExperienceList;
