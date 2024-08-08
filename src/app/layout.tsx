import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import RootLayout from "@/components/layouts/RootLayout";
import { Poppins } from "next/font/google";
import images from "@/constants/images";

export const metadata: Metadata = {
  title: "iForgeTech",
  description:
    "Welcome! Discover a range of projects and professional work. Dive into a portfolio that highlights creativity and technical expertise.",
  openGraph: {
    title: "iForgeTech",
    description:
      "Welcome! Discover a range of projects and professional work. Dive into a portfolio that highlights creativity and technical expertise.",
    images: [images.openGraph.home],
    siteName: "iForgeTech",
  },
};
const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
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
