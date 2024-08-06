"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import pages from "@/constants/pages";
import images from "@/constants/images";

const page = pages?.[0].url || "/";

const Error = () => {
  const router = useRouter();

  const goHome = () => {
    router.push(page);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={images.notFound}
        alt="notFound"
        width={500}
        height={0}
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
