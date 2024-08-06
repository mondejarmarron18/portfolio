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
      <div className="flex h-full flex-col justify-center gap-5 md:gap-10 lg:gap-12">
        <div>
          <Paragraph className="h-fit text-[5rem] font-bold leading-none md:text-[6rem] lg:text-[8rem]">
            <span className="text-secondary dark:text-primary">X</span>P
          </Paragraph>
          <Heading variant="h1" className="">
            Experience
          </Heading>
        </div>

        <ExperienceList />
      </div>
    </GeneralLayout>
  );
};

export default ExperiencePage;
