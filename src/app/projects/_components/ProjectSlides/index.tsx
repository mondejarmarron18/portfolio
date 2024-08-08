"use client";

import projects from "@/constants/projects";
import useScreen from "@/hooks/useScreen";
import { screens } from "@/utils/theme";
import { Project } from "@/utils/types/project.type";
import Image from "next/image";
import React, { FC, useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css/effect-coverflow";

type ProjectSlidesProps = {
  onChangeProject: (project: Project) => void;
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
  const isMediumScreen = width > mediumScreenSize;

  useEffect(() => {
    onChangeProject(currentProject);
  }, [currentProject]);

  const handleSlideChange = (index: number) => {
    const project = projects[index];

    setCurrentProject(project);
  };

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
            onSlideChange={(e) => handleSlideChange(e.realIndex)}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div
                  key={project.id}
                  className="relative h-[100px] overflow-hidden rounded-lg"
                >
                  <Image
                    src={project.image}
                    alt={"Project Slide"}
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectSlides;
