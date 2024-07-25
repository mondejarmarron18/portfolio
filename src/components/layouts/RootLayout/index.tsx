"use client";

import Cursor from "@/components/common/Cursor";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import { register } from "swiper/element/bundle";

register();

type RootLayoutPropsType = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

const RootLayout = ({ children }: RootLayoutPropsType) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <QueryClientProvider client={queryClient}>
        {children}
        <Cursor />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default RootLayout;
