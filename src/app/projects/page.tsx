"use client";

import GeneralLayout from "@/components/layouts/GeneralLayout";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import useScreen from "@/hooks/useScreen";
import cn from "@/utils/cn";
import { screens } from "@/utils/theme";
import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";

type ProjectType = {
  id: number;
  title: string;
  description: string;
  bgColor: string;
  image: string;
  githubLink?: string;
};

const projects: ProjectType[] = [
  {
    id: 1,
    title: "AIA - AI Assistant",
    description: "AIA is an AI assistant that can help you with various tasks.",
    bgColor: "#21A9B8",
    image:
      "https://images.unsplash.com/photo-1542744095-0d53267d353e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Chatbot - Meta Webhook",
    description: "Customized your FB chatbot response to suit your needs.",
    bgColor: "#272B55",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "OnSync Todo",
    description:
      "A web application where you can synchronize all of your to do tasks.",
    bgColor: "#063745",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "E-Commerce",
    description: "Level up your online store with our e-commerce platform.",
    bgColor: "#3D367E",
    image:
      "https://images.unsplash.com/photo-1688561809321-e51e8a4d6651?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const mediumScreenSize = +screens.md.split("px")[0];

const ProjectsPage = () => {
  const projectSlides = useRef<HTMLDivElement>(null);
  const { width } = useScreen();
  const [currentProject, setCurrentProject] = useState<ProjectType>(
    projects[0],
  );
  const isMediumScreen = width > mediumScreenSize;

  useEffect(() => {
    projectSlides.current?.addEventListener("swiperslidechange", (e) => {
      const swiper = e as unknown as any;
      const realIndex = swiper.detail[0].realIndex as number;
      console.log(realIndex);

      setCurrentProject(projects[realIndex]);
    });
  }, []);

  const renderProjectsSlides = () => {
    return (
      <div
        className="relative mt-auto flex w-full justify-center p-4 md:mt-0 md:h-[300px] md:items-end"
        style={{
          background: isMediumScreen
            ? `linear-gradient(to top, ${currentProject.bgColor}, transparent)`
            : "",
        }}
      >
        <div
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
                    "relative h-[100px] w-full scale-100 overflow-hidden rounded-lg transition-transform",
                    {
                      "scale-[0.85] grayscale":
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
        </div>
      </div>
    );
  };

  return (
    <GeneralLayout>
      <div className="flex h-full flex-col gap-4 md:gap-6">
        <Heading variant="h1">
          <span className="text-secondary dark:text-primary">PRO</span>jects
        </Heading>

        {currentProject && (
          <div className="relative flex h-full w-full flex-col gap-4 overflow-hidden rounded-xl md:justify-between md:rounded-2xl">
            <div className="relative h-[200px] w-full overflow-hidden rounded-xl sm:h-[300px] md:absolute md:h-full">
              <Image
                src={currentProject.image}
                alt={currentProject.title}
                fill
                className="object-cover"
              />
            </div>
            <div
              className="relative flex w-full flex-col gap-4 md:min-h-[300px] md:p-4 lg:p-8"
              style={{
                background: isMediumScreen
                  ? `linear-gradient(to bottom, ${currentProject.bgColor} 20%, transparent)`
                  : "",
              }}
            >
              <div>
                <Heading variant="h2" className="text-customWhite">
                  {currentProject.title}
                </Heading>
                <Paragraph className="max-w-3xl text-customWhite">
                  {currentProject.description}
                </Paragraph>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="primary"
                  icon={{
                    name: "GithubIcon",
                  }}
                >
                  Source Code
                </Button>
                <Button variant="ghost" icon={{ name: "PlanetIcon" }}>
                  Live Demo
                </Button>
              </div>
            </div>
            {renderProjectsSlides()}
          </div>
        )}
      </div>
    </GeneralLayout>
  );
};

export default ProjectsPage;
