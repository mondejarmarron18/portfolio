import { Project } from "@/utils/types/project.type";
import images from "./images";

const projects: Project[] = [
  {
    id: 9,
    title: "YT Transcribe",
    description: "A simple tool to transcribe youtube videos.",
    bgColor: "#32135F",
    image: images.projects.youtubeTranscribe,
    tools: ["OpenAI API", "Next.js", "Typescript", "Tailwind", "Shadcn UI"],
    githubLink: "https://github.com/mondejarmarron18/youtube-transcribe",
  },
  {
    id: 8,
    title: "Vero",
    description:
      "Smart, AI-driven interviews that bring real insights to light",
    bgColor: "#9D650D",
    image: images.projects.vero,
    tools: ["React Native", "Expo", "Typescript", "Tailwind", "Nativewind"],
    githubLink: "https://github.com/mondejarmarron18/vero-mobile",
  },
  {
    id: 7,
    title: "ChangePulse",
    description:
      "Track and manage updates with automated notifications and approvals.",
    bgColor: "#997f00",
    image: images.projects.changePulse,
    tools: [
      "React.js",
      "Express.js",
      "Typescript",
      "MongoDB",
      "Redis",
      "Docker",
      "Tailwind",
      "Shadcn UI",
    ],
    githubLink:
      "https://github.com/mondejarmarron18/student-information-update-tracking",
  },
  {
    id: 6,
    title: "X8T",
    description: "A utility for safely executing functions.",
    bgColor: "#8B0000",
    image: images.projects.x8t,
    tools: ["NPM", "Javascript", "Typescript"],
    githubLink: "https://github.com/mondejarmarron18/x8t",
    webLink: "https://www.npmjs.com/package/x8t",
  },
  {
    id: 5,
    title: "AIA - AI Assistant",
    description: "Web application that can help you with your AI needs.",
    bgColor: "#111729",
    image: images.projects.aia,
    tools: ["React.js", "TailwindCSS", "OpenAI API", "TypeScript"],
    githubLink: "https://github.com/mondejarmarron18/aia",
  },
  {
    id: 4,
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
    githubLink: "https://github.com/mondejarmarron18/prohustlin",
    webLink: "https://mondejarmarron18.github.io/prohustlin/index.html",
  },
  {
    id: 2,
    title: "Barginhub",
    description: "A New Zealand based e-commerce platform.",
    bgColor: "#cc9500",
    image: images.projects.bargainhub,
    tools: ["BigCommerce", "Javascript", "HTML5", "CSS3"],
    webLink: "https://bargainhub.co.nz",
  },
  {
    id: 1,
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
