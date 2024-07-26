import customTheme from "./src/constants/customTheme";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      ...customTheme,
      animation: {
        shake: "shake 0.5s ease-in-out forwards",
        wiggle: "wiggle 1s ease-in-out forwards",
        "spin-slow": "spin 3s linear infinite",
        "spin-slow-2x": "spin 50s linear infinite",
        "spin-slow-3x": "spin 40s linear infinite",
        "spin-slow-4x": "spin 30s linear  infinite",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translate(0px, 0px) rotate(0deg)" },
          "10%": { transform: "translate(-1px, -2px) rotate(-1deg)" },
          "20%": { transform: "translate(-3px, 0px) rotate(1deg)" },
          "30%": { transform: "translate(3px, 2px) rotate(0deg)" },
          "40%": { transform: "translate(1px, -1px) rotate(1deg)" },
          "50%": { transform: "translate(-1px, 2px) rotate(-1deg)" },
          "60%": { transform: "translate(-3px, 1px) rotate(0deg)" },
          "70%": { transform: "translate(3px, 1px) rotate(-1deg)" },
          "80%": { transform: "translate(-1px, -1px) rotate(1deg)" },
          "90%": { transform: "translate(1px, 2px) rotate(0deg)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".writing-vertical": {
          writingMode: "vertical-lr",
          textOrientation: "upright",
        },
        ".writing-horizontal": {
          writingMode: "horizontal-tb",
          textOrientation: "sideways",
        },
        ".writing-mixed": {
          writingMode: "horizontal-tb",
          textOrientation: "mixed",
        },
      });
    }),
  ],
};
export default config;
