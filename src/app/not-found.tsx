"use client";

import Image from "next/image";
import notFound from "@/assets/images/404.png";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import pages from "@/constants/pages";

const page = pages?.[0].url || "/";

const Error = () => {
  const router = useRouter();

  const goHome = () => {
    router.push(page);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={notFound}
        alt="notFound"
        className="-z-10 w-[300px] object-contain dark:invert md:w-[500px] lg:w-[700px]"
      />

      <Button
        onClick={goHome}
        variant="primary"
        icon={{
          name: "HomeIcon",
        }}
        className="lg:-mt-10"
      >
        Go Home
      </Button>
    </div>
  );
};

export default Error;
