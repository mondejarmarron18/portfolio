import GeneralLayout from "@/components/layouts/GeneralLayout";
import Heading from "@/components/ui/Heading";
import React from "react";
import CurrentProject from "./_components/ProjectMainContent";
import { Metadata } from "next";
import images from "@/constants/images";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Discover an extensive portfolio of projects, demonstrating proficiency in various web development technologies, frontend and backend solutions, and innovative problem-solving.",
  openGraph: {
    title: "Projects",
    description:
      "Discover an extensive portfolio of projects, demonstrating proficiency in various web development technologies, frontend and backend solutions, and innovative problem-solving.",
    images: [images.openGraph.projects],
  },
};

const ProjectsPage = () => {
  return (
    <GeneralLayout>
      <div className="flex h-full flex-col gap-4 md:gap-6">
        <Heading variant="h1">
          <span className="text-secondary dark:text-primary">PRO</span>jects
        </Heading>

        <CurrentProject />
      </div>
    </GeneralLayout>
  );
};

export default ProjectsPage;
