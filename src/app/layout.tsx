import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import RootLayout from "@/components/layouts/RootLayout";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "iForgeTech",
  description: "Software Engineer",
};

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
};

export default Layout;
