"use client";

import projects from "@/constants/projects";
import useScreen from "@/hooks/useScreen";
import { screens } from "@/utils/theme";
import { Project } from "@/utils/types/project.type";
import Image from "next/image";
import React, { FC, useCallback, useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css/effect-coverflow";
import { Swiper as SwiperType } from "swiper/types";

type ProjectSlidesProps = {
  onChangeProject: (project: Project) => void;
};

type SlideData = {
  isActive: boolean;
  isPrev: boolean;
  isNext: boolean;
  isVisible: boolean;
};

const mediumScreenSize = +screens.md.split("px")[0];
const variants: Variants = {
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: {
    opacity: 0,
    x: 200,
  },
};

const ProjectSlides: FC<ProjectSlidesProps> = ({ onChangeProject }) => {
  const { width } = useScreen();
  const [currentProject, setCurrentProject] = useState<Project>(projects[0]);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const isMediumScreen = width > mediumScreenSize;

  useEffect(() => {
    onChangeProject(currentProject);
  }, [currentProject, onChangeProject]);

  const handleSlideChange = useCallback(({ realIndex }: SwiperType) => {
    const project = projects[realIndex];

    setCurrentProject(project);
  }, []);

  const handleNavigate = useCallback(
    ({ isActive, isPrev }: SlideData) => {
      if (isActive) return;

      if (isPrev) {
        return swiper?.slidePrev();
      }

      swiper?.slideNext();
    },
    [swiper],
  );

  return (
    <div
      className="relative mt-auto flex w-full justify-center p-4 md:mt-0 md:h-[300px] md:items-end"
      style={{
        background: isMediumScreen
          ? `linear-gradient(to top, ${currentProject.bgColor}, transparent)`
          : "",
      }}
    >
      <div className="flex w-[1px] justify-center">
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
          className="relative w-[400px]"
        >
          <Swiper
            modules={[EffectCoverflow]}
            slidesPerView={2}
            centeredSlides
            loop
            effect="coverflow"
            coverflowEffect={{
              rotate: 45,
              stretch: 50,
              depth: 100,
              modifier: 1.2,
              slideShadows: false,
              scale: 0.85,
            }}
            onSwiper={setSwiper}
            onSlideChange={handleSlideChange}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                {(props) => (
                  <div
                    key={project.id}
                    className="relative h-[100px] cursor-pointer overflow-hidden rounded-lg"
                    onClick={() => handleNavigate(props)}
                  >
                    <Image
                      src={project.image}
                      alt={"Project Slide"}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectSlides;
