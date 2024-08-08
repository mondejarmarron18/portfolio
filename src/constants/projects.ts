import { Project } from "@/utils/types/project.type";
import images from "./images";

const projects: Project[] = [
  {
    id: 1,
    title: "AIA - AI Assistant",
    description: "Web application that can help you with your AI needs.",
    bgColor: "#111729",
    image: images.projects.aia,
    tools: ["React.js", "TailwindCSS", "OpenAI API", "TypeScript"],
    githubLink: "https://github.com/mondejarmarron18/aia",
  },
  {
    id: 2,
    title: "Portfolio",
    description: "Personal portfolio website, showing my skills and projects.",
    bgColor: "#a5692c",
    image: images.projects.portfolio,
    tools: ["Next.js", "TailwindCSS", "TypeScript", "Vercel"],
    githubLink: "https://github.com/mondejarmarron18/portfolio",
    webLink: "/",
  },
  {
    id: 3,
    title: "Prohustlin",
    description:
      "A blog/vlog platform where you can share your thoughts and experiences.",
    bgColor: "#010101",
    image: images.projects.prohustlin,
    tools: ["Javascript", "Bootsrtap", "HTML5", "CSS3", "Github Pages"],
    githubLink: "https://github.com/prohustlin/prohustlin.github.io.git",
    webLink: "https://mondejarmarron18.github.io/prohustlin/index.html",
  },
  {
    id: 4,
    title: "Barginhub",
    description: "A New Zealand based e-commerce platform.",
    bgColor: "#cc9500",
    image: images.projects.bargainhub,
    tools: ["BigCommerce", "Javascript", "HTML5", "CSS3"],
    webLink: "https://bargainhub.co.nz",
  },
  {
    id: 5,
    title: "Telecall",
    description: "A BPO company landing page.",
    bgColor: "#d32c50",
    image: images.projects.telecall,
    tools: ["Javascript", "HTML5", "CSS3", "Github Pages"],
    githubLink: "https://github.com/mondejarmarron18/telecall",
    webLink: "https://mondejarmarron18.github.io/telecall",
  },
];

export default projects;
