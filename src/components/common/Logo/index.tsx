import cn from "@/utils/cn";
import { Teko } from "next/font/google";
import React from "react";

const inter = Teko({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Logo = () => {
  return (
    <div
      className={cn(
        inter.className,
        "flex flex-[0.7] flex-col justify-center px-2 text-lg font-bold",
      )}
    >
      <span className="w-fit text-secondary transition-colors dark:text-primary">
        iForgeTech
      </span>
    </div>
  );
};

export default Logo;
