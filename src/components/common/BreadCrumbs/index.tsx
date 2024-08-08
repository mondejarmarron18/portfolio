"use client";

import cn from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";

type BreadCrumbsProps = {
  breadCrumbs?: {
    name: string;
    link: string;
    isActive?: boolean;
  }[];
};

const BreadCrumbs: FC<BreadCrumbsProps> = (props) => {
  const pathname = usePathname();
  const [breadCrumbs, setBreadCrumbs] = useState<
    BreadCrumbsProps["breadCrumbs"]
  >([]);

  const getDefaultBreadCrumbs = () => {
    const pathnames = pathname.split("/").filter(Boolean);

    const breadCrumbs = pathnames.map((path, i) => {
      const link = `/${pathnames.slice(0, i + 1).join("/")}`;
      const isActive = i === pathnames.length - 1;

      return {
        name: path,
        link,
        isActive,
      };
    });

    return breadCrumbs;
  };

  useEffect(() => {
    if (!props.breadCrumbs) {
      const breadCrumbs = getDefaultBreadCrumbs();

      return setBreadCrumbs(breadCrumbs);
    }

    setBreadCrumbs(props.breadCrumbs);

    return () => {
      setBreadCrumbs([]);
    };
  }, [pathname, props.breadCrumbs]);

  return (
    <div className="flex items-center gap-2">
      {breadCrumbs?.map((breadCrumb, index) => {
        return (
          <Link
            key={index}
            href={breadCrumb.link}
            aria-label={breadCrumb.name}
            className={cn("flex gap-2", {
              "text-secondary dark:text-primary": !breadCrumb.isActive,
            })}
          >
            {index !== 0 && (
              <span
                className={cn({
                  "text-secondary dark:text-primary": !breadCrumb.isActive,
                })}
              >
                {">"}
              </span>
            )}

            <span className="line-clamp-1">
              {breadCrumb.name?.[0].toUpperCase() + breadCrumb.name?.slice(1)}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
