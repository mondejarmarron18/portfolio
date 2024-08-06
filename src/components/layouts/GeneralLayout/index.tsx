import Header from "@/components/common/Header";
import PageNavigator from "@/components/common/PageNavigator";
import Pagination from "@/components/common/Pagination";
import Socials from "@/components/common/Socials";
import cn from "@/utils/cn";
import React from "react";

type GeneralLayoutPropsType = {
  children: React.ReactNode;
  sideBarHidden?: boolean;
};

const GeneralLayout = ({ children, sideBarHidden }: GeneralLayoutPropsType) => {
  const renderBgBlur = () => {
    return (
      <div className="absolute h-full w-full overflow-hidden rounded-tl-[200px]">
        <div className="absolute left-8 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary blur-[100px] dark:bg-primary md:h-[400px] md:w-[400px]"></div>
        <div className="absolute -bottom-[300px] -right-[300px] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary blur-[100px] dark:bg-primary md:-bottom-1/2 md:-right-[600px] md:h-[600px] md:w-[600px]"></div>
      </div>
    );
  };

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl">
      {renderBgBlur()}
      <Header />
      <div className="relative flex w-full flex-1 overflow-hidden rounded-2xl rounded-tr-none bg-customWhite/60 backdrop-blur-xl dark:bg-customBlack/60">
        <div className="flex flex-1 justify-center">
          <main
            className={cn(
              "relative flex h-full w-full max-w-[1800px] flex-col p-4 sm:p-8 md:p-[50px]",
              {
                "pr-0 sm:pr-1": !sideBarHidden,
              },
            )}
          >
            {children}
          </main>
        </div>

        {!sideBarHidden && (
          <div className="flex flex-shrink-0 flex-col items-center justify-between gap-4 p-2">
            <Socials />
            <Pagination className="justify-end" />
            <PageNavigator className="justify-end" />
          </div>
        )}
      </div>
    </div>
  );
};

export default GeneralLayout;
