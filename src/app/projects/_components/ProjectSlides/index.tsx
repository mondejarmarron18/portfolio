"use client";

import projects from "@/constants/projects";
import useScreen from "@/hooks/useScreen";
import cn from "@/utils/cn";
import { screens } from "@/utils/theme";
import { Project } from "@/utils/types/project.type";
import Image from "next/image";
import React, { FC, useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";

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
  const projectSlides = useRef<HTMLDivElement>(null);
  const [currentProject, setCurrentProject] = useState<Project>(projects[0]);
  const isMediumScreen = width > mediumScreenSize;

  useEffect(() => {
    onChangeProject(currentProject);
  }, [currentProject]);

  useEffect(() => {
    projectSlides.current?.addEventListener("swiperslidechange", (e) => {
      const swiper = e as unknown as any;
      const realIndex = swiper.detail[0].realIndex as number;

      setCurrentProject(projects[realIndex]);
    });
  }, [projects]);

  return (
    <div
      className="relative mt-auto flex w-full justify-center p-4 md:mt-0 md:h-[300px] md:items-end"
      style={{
        background: isMediumScreen
          ? `linear-gradient(to top, ${currentProject.bgColor}, transparent)`
          : "",
      }}
    >
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
        className="relative flex justify-center overflow-hidden"
        style={{
          width: width / 1.5 + "px",
        }}
      >
        <swiper-container
          ref={projectSlides}
          slides-per-view={3}
          centered-slides
          loop
          style={{
            width: "600px",
          }}
        >
          {projects.map((project) => (
            <swiper-slide
              key={project.id}
              style={{
                height: "auto",
                width: "auto",
              }}
              suppressHydrationWarning
            >
              <div
                key={project.id}
                className={cn(
                  "relative h-[100px] w-full scale-100 overflow-hidden rounded-lg transition-all",
                  {
                    "scale-[0.85] opacity-50 blur-[1px] grayscale":
                      currentProject.id !== project.id,
                  },
                )}
              >
                <Image
                  src={project.image}
                  alt={"Project Slide"}
                  fill
                  className="object-cover"
                />
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
      </motion.div>
    </div>
  );
};

export default ProjectSlides;
