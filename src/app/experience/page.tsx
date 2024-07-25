"use client";

import ExperienceTree from "@/components/common/ExperienceTree";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import experiences, { ExperienceType } from "@/constants/experiences";
import React, { useState } from "react";
import _ from "lodash";
import GeneralLayout from "@/components/layouts/GeneralLayout";

const ExperiencePage = () => {
  const [exps, setExps] = useState<ExperienceType[]>(experiences);

  return (
    <GeneralLayout>
      <div className="flex h-full flex-col justify-center gap-5 md:gap-10 lg:gap-14">
        <div>
          <Paragraph className="h-fit text-[5rem] font-bold leading-none md:text-[7.5rem] lg:text-[10rem]">
            XP
          </Paragraph>
          <Heading variant="h1" className="">
            Experience
          </Heading>
        </div>

        <div className="flex items-center">
          <div className="relative w-full border-t-2 border-secondary dark:border-primary">
            <swiper-container
              slides-per-view="auto"
              space-between="50"
              free-mode
            >
              {_.chunk(exps, 4).map((exp, i) => (
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
      </div>
    </GeneralLayout>
  );
};

export default ExperiencePage;
