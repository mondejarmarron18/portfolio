import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import RootLayout from "@/components/layouts/RootLayout";
import { Poppins } from "next/font/google";
import images from "@/constants/images";
import { GoogleTagManager } from "@next/third-parties/google";
import config from "@/utils/config";

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
  twitter: {
    title: "iForgeTech",
    description:
      "Welcome! Discover a range of projects and professional work. Dive into a portfolio that highlights creativity and technical expertise.",
    images: [images.openGraph.home],
    site: "@iForgeTech",
  },
  icons: {
    shortcut: "/favicon.ico",
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
      <GoogleTagManager gtmId={config.gtmId as string} />
      <body className={inter.className} suppressHydrationWarning>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${config.gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
};

export default Layout;
