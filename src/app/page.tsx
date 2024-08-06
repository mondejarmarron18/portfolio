"use client";

import Image from "next/image";
import avatar from "@/assets/images/avatar.png";
import Button from "@/components/ui/Button";
import Typewriter from "typewriter-effect";
import Paragraph from "@/components/ui/Paragraph";
import Heading from "@/components/ui/Heading";
import { useRouter } from "next/navigation";
import { PageUrlType } from "@/constants/pages";
import GeneralLayout from "@/components/layouts/GeneralLayout";
import images from "@/constants/images";

const HomePage = () => {
  const router = useRouter();

  const handleHireMe = () => {
    const page: PageUrlType = "/contact";

    router.push(page);
  };

  const handleDownloadCV = () => {
    const a = document.createElement("a");
    a.href = "/assets/documents/cv.pdf";
    a.download = "Marvin Ronquillo - CV.pdf";
    a.click();
  };

  return (
    <GeneralLayout>
      <div className="flex h-full items-center">
        <div className="flex w-fit max-w-3xl flex-col gap-4 md:gap-8">
          <div className="relative h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px] lg:h-[300px] lg:w-[300px]">
            <Image
              src={images.avatar}
              alt="avatar"
              priority
              fill
              className="object-contain"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Heading
              variant="h1"
              className="flex h-fit flex-col sm:flex-row sm:gap-2 md:gap-4"
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
            <Paragraph className="text-sm sm:text-base">
              A passionate and dedicated software engineer for more than{" "}
              <span className="bg-gradient-to-tr from-primary to-secondary bg-clip-text font-semibold text-transparent">
                4 years,
              </span>{" "}
              with a knack for creating innovative, efficient solutions and
              committed to delivering high-quality software that meets user
              needs and exceeds expectations.
            </Paragraph>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={handleHireMe}
              icon={{ name: "FingerHeartIcon" }}
              variant="primary"
            >
              Hire Me
            </Button>
            <Button
              onClick={handleDownloadCV}
              icon={{
                name: "DownloadIcon",
              }}
              variant="ghost"
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
};

export default HomePage;
