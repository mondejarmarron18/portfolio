import { theme } from "tailwindcss/defaultConfig";

const screenSizes = ["sm", "md", "lg", "xl", "2xl"] as const;
type ScreenType = {
  [screenSizes in (typeof screenSizes)[number]]: `${number}px`;
};

export const screens = theme?.screens as ScreenType;
