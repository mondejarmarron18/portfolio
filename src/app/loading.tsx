import cn from "@/utils/cn";
import React from "react";

const text = "Loading LOADING LOADING";

const Loading = () => {
  return (
    <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-customWhite dark:bg-customBlack">
      <div className="animate-spin-slow relative flex h-2 w-2 items-center justify-center text-xl font-bold uppercase text-secondary dark:text-primary">
        {text.split("").map((char, index) => (
          <div
            key={index}
            className={cn(`absolute h-[200px]`)}
            style={{ transform: `rotate(${index * 15}deg)` }}
          >
            {char}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
