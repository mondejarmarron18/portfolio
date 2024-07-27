import GeneralLayout from "@/components/layouts/GeneralLayout";
import Heading from "@/components/ui/Heading";
import React from "react";
import AnimatedSkills from "@/components/common/AnimatedSkills";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Explore a comprehensive list of technical and non-technical skills, including expertise in web development, frontend and backend technologies, and more.",
  openGraph: {
    title: "Skills",
    description:
      "Explore a comprehensive list of technical and non-technical skills, including expertise in web development, frontend and backend technologies, and more.",
  },
};

const SkillsPage = () => {
  return (
    <GeneralLayout>
      <div className="relative flex h-full w-full flex-row items-center">
        <div className="absolute flex flex-col">
          <Heading
            variant="h1"
            className="flex flex-col leading-none text-secondary dark:text-primary md:gap-2"
          >
            Skills
          </Heading>
        </div>
        <AnimatedSkills />
      </div>
    </GeneralLayout>
  );
};

export default SkillsPage;
