import GeneralLayout from "@/components/layouts/GeneralLayout";
import React from "react";

type LayoutPropsType = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutPropsType) => {
  return <GeneralLayout>{children}</GeneralLayout>;
};

export default Layout;
