const pages = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Tech Stack",
    url: "/tech-stack",
  },
  {
    name: "Experience",
    url: "/experience",
  },
  {
    name: "Contact",
    url: "/contact",
  },
] as const;

export type PageUrlType = (typeof pages)[number]["url"];
export type PageNameType = (typeof pages)[number]["name"];

export default pages;
