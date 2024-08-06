"use client";

import GeneralLayout from "@/components/layouts/GeneralLayout";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import projects, { ProjectType } from "@/constants/projects";
import useScreen from "@/hooks/useScreen";
import cn from "@/utils/cn";
import { screens } from "@/utils/theme";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

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
                <Heading variant="h2" className="md:text-customWhite">
                  {currentProject.title}
                </Heading>
                <Paragraph className="max-w-3xl md:text-customWhite">
                  {currentProject.description}
                </Paragraph>
              </div>
              <div className="flex flex-wrap gap-1">
                {currentProject.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-customWhite/70 px-3 py-1 text-sm font-medium dark:bg-customBlack/70"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {!!currentProject.githubLink && (
                  <Link href={currentProject.githubLink}>
                    {" "}
                    <Button
                      variant="primary"
                      icon={{
                        name: "GithubIcon",
                      }}
                    >
                      Source Code
                    </Button>
                  </Link>
                )}

                {!!currentProject.webLink && (
                  <Link href={currentProject.webLink}>
                    <Button
                      variant="ghost"
                      icon={{
                        name: "PlanetIcon",
                      }}
                    >
                      Visit Website
                    </Button>
                  </Link>
                )}
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
