const pages = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Experience",
    url: "/experience",
  },

  {
    name: "Skills",
    url: "/skills",
  },
  {
    name: "Projects",
    url: "/projects",
  },
  {
    name: "Blogs",
    url: "/blogs",
  },

  {
    name: "Contact",
    url: "/contact",
  },
] as const;

export type PageUrlType = (typeof pages)[number]["url"];
export type PageNameType = (typeof pages)[number]["name"];

export default pages;
