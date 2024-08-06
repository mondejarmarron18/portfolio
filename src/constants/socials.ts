import { IconNameType } from "./icons";

export type SocialType = {
  name: string;
  icon: IconNameType;
  link: string;
};

const socials: SocialType[] = [
  {
    name: "Github",
    icon: "GithubIcon",
    link: "https://github.com/mondejarmarron18",
  },
  {
    name: "LinkedIn",
    icon: "LinkedInIcon",
    link: "https://www.linkedin.com/in/marvin-ronquillo-06566a202",
  },
  {
    name: "Figma",
    icon: "FigmaIcon",
    link: "https://www.figma.com/@marron18",
  },
];

export default socials;
