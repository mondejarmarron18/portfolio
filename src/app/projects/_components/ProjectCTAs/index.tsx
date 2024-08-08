"use client";

import Button from "@/components/ui/Button";
import cn from "@/utils/cn";
import { Project } from "@/utils/types/project.type";
import Link from "next/link";
import React, { FC, HTMLAttributes } from "react";

type ProjectCTAsProps = HTMLAttributes<HTMLDivElement> &
  Pick<Project, "githubLink" | "webLink">;

const ProjectCTAs: FC<ProjectCTAsProps> = ({
  githubLink,
  webLink,
  ...props
}) => {
  const renderGithubButton = (link: string) => {
    return (
      <Link href={link}>
        <Button
          variant="primary"
          icon={{
            name: "GithubIcon",
          }}
        >
          Github
        </Button>
      </Link>
    );
  };

  const renderWebsiteButton = (link: string) => {
    return (
      <Link href={link}>
        <Button
          variant="ghost"
          icon={{
            name: "PlanetIcon",
          }}
        >
          Website
        </Button>
      </Link>
    );
  };

  if (!githubLink && !webLink) return null;

  return (
    <div {...props} className={cn("flex flex-wrap gap-2", props.className)}>
      {!!githubLink && renderGithubButton(githubLink)}
      {!!webLink && renderWebsiteButton(webLink)}
    </div>
  );
};

export default ProjectCTAs;
