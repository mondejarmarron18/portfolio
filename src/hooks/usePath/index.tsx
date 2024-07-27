"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import pages from "@/constants/pages";

const getPageIndex = (path: (typeof pages)[number]["url"]) => {
  return pages.findIndex(({ url }) => url === path);
};

const usePath = () => {
  const path = usePathname();

  useEffect(() => {
    if (!path) return;

    Cookies.set("path", path);
  }, [path]);

  return {
    prevPath: Cookies.get("path"),
    currentPath: path,
    getPageIndex,
  };
};

export default usePath;
