"use client";

import Button from "@/components/ui/Button";
import { PageUrlType } from "@/constants/pages";
import cn from "@/utils/cn";
import { sendGAEvent } from "@next/third-parties/google";
import { useRouter } from "next/navigation";
import React, { FC, HTMLAttributes } from "react";

type HomeCTAsProps = HTMLAttributes<HTMLDivElement>;

const HomeCTAs: FC<HomeCTAsProps> = ({ ...props }) => {
  const router = useRouter();

  const goToProjects = () => {
    const page: PageUrlType = "/projects";

    router.push(page);
  };

  const handleDownloadCV = () => {
    sendGAEvent("event", "click", "download_cv");

    const a = document.createElement("a");
    a.href = "/assets/documents/cv.pdf";
    a.download = "Marvin_Ronquillo_Software_Engineer_CV.pdf";
    a.click();
  };

  return (
    <div {...props} className={cn("flex flex-wrap gap-2", props.className)}>
      <Button
        onClick={goToProjects}
        icon={{ name: "FingerHeartIcon" }}
        variant="primary"
      >
        Explore
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
  );
};

export default HomeCTAs;
