import cn from "@/utils/cn";
import { Teko } from "next/font/google";
import Link from "next/link";
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
      <Link
        href="/"
        className="w-fit text-secondary transition-colors dark:text-primary"
      >
        iForgeTech
      </Link>
    </div>
  );
};

export default Logo;
