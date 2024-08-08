"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Project } from "@/utils/types/project.type";
import useScreen from "@/hooks/useScreen";
import { screens } from "@/utils/theme";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import ProjectSlides from "../ProjectSlides";
import projects from "@/constants/projects";
import ProjectTools from "../ProjectTools";
import ProjectCTAs from "../ProjectCTAs";
import { AnimatePresence, motion, Variants } from "framer-motion";

const mediumScreenSize = +screens.md.split("px")[0];
const variants: Variants = {
  visible: {
    opacity: 1,
    scale: 1,
  },
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
};

const ProjectMainContent = () => {
  const [currentProject, setCurrentProject] = useState<Project>(projects[0]);
  const { width } = useScreen();

  const isMediumScreen = width > mediumScreenSize;

  const renderBgColor = () => {
    if (!isMediumScreen) return;

    return `linear-gradient(to bottom, ${currentProject.bgColor} 20%, transparent)`;
  };

  const renderBgImage = () => {
    return (
      <div className="h-[200px] w-full overflow-hidden rounded-xl sm:h-[300px] md:absolute md:h-full">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentProject.id}
            initial={{
              opacity: 0,
              scale: 1.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative h-full w-full"
          >
            <Image
              src={currentProject.image}
              alt={currentProject.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    );
  };
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="relative flex h-full w-full flex-col gap-4 overflow-hidden rounded-xl md:justify-between md:rounded-2xl"
    >
      {renderBgImage()}
      <AnimatePresence>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative flex w-full flex-col gap-4 md:min-h-[300px] md:p-4 lg:p-8"
          style={{
            background: renderBgColor(),
          }}
        >
          <div>
            <Heading variant="h2" className="md:text-customWhite">
              {currentProject.title}
            </Heading>
            <Paragraph className="max-w-3xl text-sm md:text-base md:text-customWhite">
              {currentProject.description}
            </Paragraph>
          </div>
          <ProjectTools tools={currentProject.tools} />
          <ProjectCTAs
            githubLink={currentProject.githubLink}
            webLink={currentProject.webLink}
          />
        </motion.div>
      </AnimatePresence>
      <ProjectSlides onChangeProject={setCurrentProject} />
    </motion.div>
  );
};

export default ProjectMainContent;
