"use client";

import React, { memo, useEffect } from "react";
import cursor from "@/utils/cursor";
const Cursor = () => {
  const cursorTailCount = 10;

  useEffect(() => {
    cursor();
  }, []);

  return (
    <>
      {[...Array(cursorTailCount)].map((_, index) => {
        return (
          <div
            key={index}
            className={`cursor bg-secondary pointer-events-none absolute left-0 top-0 z-50 rounded-full dark:bg-primary`}
          ></div>
        );
      })}
    </>
  );
};

export default memo(Cursor);
