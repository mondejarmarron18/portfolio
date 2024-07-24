"use client";

import React from "react";
import Image from "next/image";
import avatar from "@/assets/images/avatar.png";
import Button from "@/components/ui/Button";
import Typewriter from "typewriter-effect";
import Paragraph from "@/components/ui/Paragraph";
import Heading from "@/components/ui/Heading";

const HomeBanner = () => {
  return (
    <div className="flex w-fit max-w-3xl flex-col gap-4 md:gap-8">
      <Image
        src={avatar}
        alt="avatar"
        className="h-[200px] w-[200px] object-contain lg:h-[300px] lg:w-[300px]"
      />
      <div className="flex flex-col gap-2">
        <Heading
          variant="h1"
          className="flex h-fit flex-col gap-2 sm:flex-row md:gap-4"
        >
          <span>{"Hi, I am Marvin a"}</span>
          <span className="bg-gradient-to-tr from-primary to-secondary bg-clip-text text-transparent">
            <Typewriter
              options={{
                strings: ["Software Engineer", "UI/UX Designer"],
                autoStart: true,
                loop: true,
                delay: "natural",
              }}
            />
          </span>
        </Heading>
        <div className="flex flex-col gap-2">
          <Paragraph>
            A passionate and dedicated software engineer for more than{" "}
            <span className="bg-gradient-to-tr from-primary to-secondary bg-clip-text font-semibold text-transparent">
              4 years,
            </span>{" "}
            with a knack for creating innovative and efficient solutions.
          </Paragraph>
          <Paragraph>
            With my expertise in{" "}
            <span className="bg-gradient-to-tr from-primary to-secondary bg-clip-text font-semibold text-transparent">
              web development
            </span>{" "}
            I am committed to delivering high-quality software that meets user
            needs and exceeds expectations.
          </Paragraph>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        <Button icon={{ name: "FingerHeartIcon" }} variant="primary">
          Hire Me
        </Button>
        <Button
          icon={{
            name: "StarIcon",
          }}
          variant="ghost"
        >
          Projects
        </Button>
      </div>
    </div>
  );
};

export default HomeBanner;
