export type BlogContent =
  | {
      type: "text" | "image" | "code" | "quote";
      content: string;
    }
  | {
      type: "list";
      content: string[];
    };

export type BlogContents = [
  {
    type: "text"; //Set the first blog content to be text
    content: string;
  },
  ...BlogContent[],
];

export type Blog = {
  id: string;
  title: string;
  description: string;
  contents: BlogContents;
  date: string;
  image: string;
  timeToRead: string;
  tags: string[];
};
