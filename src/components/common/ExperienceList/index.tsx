"use client";

import experiences from "@/constants/experiences";
import React from "react";
import ExperienceTree from "../ExperienceTree";
import _ from "lodash";
import { Swiper, SwiperSlide } from "swiper/react";

const ExperienceList = () => {
  return (
    <div className="flex items-center">
      <div className="relative w-full border-t-2 border-secondary dark:border-primary">
        <Swiper slidesPerView="auto" spaceBetween={50} freeMode>
          {_.chunk(experiences, 4).map((exp, i) => (
            <SwiperSlide
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ExperienceList;
