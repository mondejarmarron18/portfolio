"use client";

import IconButton from "@/components/ui/IconButton";
import socials from "@/constants/socials";
import cn from "@/utils/cn";
import Link from "next/link";
import React, { FC, HTMLAttributes } from "react";

type SocialsPropsType = HTMLAttributes<HTMLDivElement>;

const Socials: FC<SocialsPropsType> = (props) => {
  return (
    <div className={cn("flex flex-col gap-2", props.className)}>
      {socials.map((social) => {
        const ariaLabel = `Open ${social.name} profile`;

        return (
          <Link href={social.link} key={social.name} aria-label={ariaLabel}>
            <IconButton
              aria-label={ariaLabel}
              icon={{ name: social.icon }}
              className="opacity-60 transition-colors hover:opacity-100"
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
