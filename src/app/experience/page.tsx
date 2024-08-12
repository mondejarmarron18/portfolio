import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import React from "react";
import _ from "lodash";
import GeneralLayout from "@/components/layouts/GeneralLayout";
import ExperienceList from "@/components/common/ExperienceList";
import { Metadata } from "next";
import images from "@/constants/images";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Extensive experience in web development and technology. Discover his expertise in React.js, Node.js, and TypeScript, and how his skills have driven impactful projects.",
  openGraph: {
    title: "Experience",
    description:
      "Discover his expertise in React.js, Node.js, and TypeScript, and how his skills have driven impactful projects.",
    images: [images.openGraph.experience],
    siteName: "iForgeTech | Experience",
  },
};

const ExperiencePage = () => {
  return (
    <GeneralLayout>
      <div className="flex h-full flex-col justify-center gap-2 md:gap-6 lg:gap-8">
        <div>
          <Paragraph className="h-fit text-[4rem] font-bold leading-none md:text-[5rem] lg:text-[6rem]">
            <span className="text-secondary dark:text-primary">X</span>P
          </Paragraph>
          <Heading variant="h1">Experience</Heading>
        </div>

        <div className="scrollbar-thin w-full overflow-y-auto">
          <ExperienceList />
        </div>
      </div>
    </GeneralLayout>
  );
};

export default ExperiencePage;
