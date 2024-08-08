"use client";

import useScreen from "@/hooks/useScreen";
import React from "react";
import Socials from "../Socials";
import PageNavigator from "../PageNavigator";
import Pagination from "../Pagination";
import cn from "@/utils/cn";

const SideBar = () => {
  const { orientation } = useScreen();

  return (
    <div className="flex flex-shrink-0 flex-col items-center justify-between gap-4 p-2">
      {orientation === "portrait" && <Socials />}
      <Pagination
        className={cn("justify-end", {
          "flex-1": orientation !== "portrait",
        })}
      />
      <PageNavigator
        className={cn("justify-end", {
          "flex-1": orientation !== "portrait",
        })}
      />
    </div>
  );
};

export default SideBar;
