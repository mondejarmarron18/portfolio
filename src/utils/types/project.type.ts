export type Project = {
  id: number;
  title: string;
  description: string;
  bgColor: string;
  image: string;
  githubLink?: string;
  webLink?: string;
  tools: string[];
};
