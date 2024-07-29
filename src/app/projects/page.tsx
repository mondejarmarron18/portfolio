"use client";

import GeneralLayout from "@/components/layouts/GeneralLayout";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import cn from "@/utils/cn";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type ProjectType = {
  id: number;
  title: string;
  description: string;
  bgColor: string;
  image: string;
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

const ProjectsPage = () => {
  const projectSlides = useRef<HTMLDivElement>(null);
  const [currentProject, setCurrentProject] = useState<ProjectType>(
    projects[0],
  );

  useEffect(() => {
    projectSlides.current?.addEventListener("swiperslidechange", (e) => {
      const swiper = e as unknown as any;
      const realIndex = swiper.detail[0].realIndex as number;

      setCurrentProject(projects[realIndex]);
    });
  }, []);

  return (
    <GeneralLayout>
      <div className="flex h-full flex-col gap-4">
        <Heading variant="h1">
          <span className="text-secondary dark:text-primary">Pro</span>jects
        </Heading>

        <div className="relative w-full flex-1">
          {currentProject && (
            <div className="relative flex h-full w-full items-end overflow-hidden rounded-2xl">
              <Image
                src={currentProject.image}
                alt={currentProject.title}
                fill
                className="object-cover"
              />
              <div
                className="relative flex h-[300px] w-full flex-col justify-end p-[5%]"
                style={{
                  background: `linear-gradient(to top, ${currentProject.bgColor} 20%, transparent)`,
                }}
              >
                <Heading variant="h2" className="text-customWhite">
                  {currentProject.title}
                </Heading>
                <Paragraph className="text-customWhite">
                  {currentProject.description}
                </Paragraph>
              </div>
            </div>
          )}

          <div className="absolute bottom-4 right-4 flex w-[300px] justify-center overflow-hidden rounded-lg">
            <div className="w-[600px]">
              <swiper-container
                ref={projectSlides}
                slides-per-view="3"
                centered-slides
                space-between="10"
                loop
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
                        "relative h-[100px] w-full scale-100 overflow-hidden rounded-lg",
                        {
                          grayscale: currentProject.id !== project.id,
                        },
                      )}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </swiper-slide>
                ))}
              </swiper-container>
            </div>
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
};

export default ProjectsPage;
