"use client";

import ArrowIcon from "@/components/icons/ArrowIcon";
import Button from "@/components/ui/Button";
import { PageUrlType } from "@/constants/pages";
import cn from "@/utils/cn";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC, HTMLAttributes } from "react";

type HomeCTAsProps = HTMLAttributes<HTMLDivElement>;

const cv = "/assets/documents/Marvin_Ronquillo_Software_Engineer_CV.pdf";

const HomeCTAs: FC<HomeCTAsProps> = ({ ...props }) => {
  const router = useRouter();

  const goToProjects = () => {
    const page: PageUrlType = "/projects";

    router.push(page);
  };

  // const handleDownloadCV = () => {
  //   const a = document.createElement("a");
  //   a.href = cv;
  //   a.download = "Marvin_Ronquillo_Software_Engineer_CV.pdf";
  //   a.click();
  // };

  return (
    <div {...props} className={cn("flex flex-wrap gap-2", props.className)}>
      <Button
        onClick={goToProjects}
        icon={{ name: "FingerHeartIcon" }}
        variant="primary"
      >
        Projects
      </Button>

      {/* <div className="bg:customWhite group relative flex cursor-pointer items-center justify-between gap-4 rounded-custom py-3 pl-8 text-sm font-semibold dark:bg-customGray md:text-base">
        <Link href={cv} target="_blank" className="w-[120px]">
          View CV
        </Link>

        <div className="border-l-2 border-customGray dark:border-customDirtyWhite/30">
          <button className="flex items-center px-3 group-hover:animate-shake">
            <ArrowIcon />
          </button>
        </div>
        <div className="absolute left-0 top-[105%] w-full">
          <Button className="w-full" onClick={handleDownloadCV} variant="ghost">
            Download CV
          </Button>
        </div>
      </div> */}

      {/* <Button
        onClick={handleDownloadCV}
        icon={{
          name: "ArrowIcon",
          position: "right",
        }}
        variant="ghost"
      >
        Download CV
      </Button> */}
      <Link href={cv} target="_blank">
        <Button
          icon={{
            name: "ScanEye",
          }}
          variant="ghost"
        >
          View CV
        </Button>
      </Link>
    </div>
  );
};

export default HomeCTAs;
