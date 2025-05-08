"use client";

import images from "@/constants/images";
import React from "react";
import Image from "next/image";
import Heading from "@/components/ui/Heading";
import TypewriterComponent from "typewriter-effect";
import Paragraph from "@/components/ui/Paragraph";
import HomeCTAs from "../HomeCTAs";

const HomeMainContent = () => {
  return (
    <div className="scrollbar-thin flex h-full items-center overflow-y-auto">
      <div className="flex h-fit w-fit max-w-3xl flex-col gap-4 md:gap-8">
        <Image
          src={images.avatar}
          alt="avatar"
          priority
          width="150"
          height="150"
          className="h-[150px] w-[150px] object-contain sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px] lg:h-[300px] lg:w-[300px]"
        />
        <div className="flex flex-col gap-2">
          <Heading
            variant="h1"
            className="flex h-fit flex-col sm:flex-row sm:gap-2 md:gap-4"
          >
            <span>{"Hi, I am Marvin a"}</span>
            <span className="bg-gradient-to-tr from-primary to-secondary bg-clip-text text-transparent">
              <TypewriterComponent
                options={{
                  strings: ["Software Engineer", "UI/UX Designer"],
                  autoStart: true,
                  loop: true,
                  delay: "natural",
                }}
              />
            </span>
          </Heading>
          <Paragraph className="text-sm sm:text-base">
            A driven and dedicated software engineer for more than{" "}
            <span className="bg-gradient-to-tr from-primary to-secondary bg-clip-text font-semibold text-transparent">
              4 years,
            </span>{" "}
            with a knack for creating innovative, efficient solutions and
            committed to delivering high-quality software that meets user needs
            and exceeds expectations.
          </Paragraph>
        </div>
        <HomeCTAs />
      </div>
    </div>
  );
};

export default HomeMainContent;
