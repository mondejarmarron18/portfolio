"use client";

import Cursor from "@/components/common/Cursor";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import { register } from "swiper/element/bundle";
import Menu from "@/components/common/Menu";
import { MenuProvider } from "@/contexts/menuContext";

register();

type RootLayoutPropsType = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

const RootLayout = ({ children }: RootLayoutPropsType) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <QueryClientProvider client={queryClient}>
        <MenuProvider>{children}</MenuProvider>
        <Cursor />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default RootLayout;
