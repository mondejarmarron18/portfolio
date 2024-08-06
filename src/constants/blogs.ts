import { Blog } from "@/utils/types/blog.type";
import images from "./images";

const blogs: Blog[] = [
  {
    id: "99f1cc62-3683-4905-8359-a35ca48ed1fb",
    title:
      "Simplifying API Requests with Axios and Custom Error Handling In Javascript/NodeJS",
    description:
      "Learn how to handle errors effectively in your Node.js applications.",
    contents: [
      {
        type: "text",
        content:
          "Struggling with unclear error formats in Axios requests? I got you covered.\n\nI've created an optimized API request flow using TypeScript generics and a flexible error handler that seamlessly integrates with any Axios-compatible setup.\n\nYou can now streamline your API interactions and access data with ease.\n\nWith this setup:",
      },
      {
        type: "image",
        content: images.blogs.blog1.image1,
      },
      {
        type: "image",
        content: images.blogs.blog1.image2,
      },

      {
        type: "text",
        content:
          "\nEach HTTP method (get, post, put, delete, patch) is defined with clear payload types and better error handling.\nCustomize your Axios instance (axiosInstance) with headers, base URL, and timeout settings to fit your needs.\nThe custom error handler (errorHandler) ensures you receive clear error messages and status codes for effective debugging and error management.\n\nNow let's access the data and potential errors by using the code snippet:",
      },
      {
        type: "image",
        content: images.blogs.blog1.image3,
      },
      {
        type: "text",
        content:
          "\nFeel free to reach out if you have suggestions or find any issues. Let's simplify our API interactions and focus more on building great features! 💡",
      },
    ],

    date: "2024-08-01",
    image: images.blogs.blog1.banner,
    timeToRead: "8 min",
    tags: [
      "TypeScript",
      "APIRequests",
      "ErrorHandling",
      "Axios",
      "Customization",
      "WebDevelopment",
      "CodeSnippet",
      "NodeJS",
    ],
  },
  {
    id: "64b19dc0-d23c-4485-9b44-831347565461",
    title: "Simplify Clipboard Operations in React with a Custom Hook! ",
    description:
      "A simple clipboard hook in React that allows you to copy text to the clipboard.",
    contents: [
      {
        type: "text",
        content:
          'I\'ve created a simple custom React hook for copying text to the clipboard. \nNow, copying text like "Hello World" becomes as easy as clicking a button! 🌟\n\nHighlights:',
      },
      {
        type: "list",
        content: [
          "Easy Integration: Simply drop this hook into your React project.",
          "Error Management: Effortlessly handle copy errors with built-in error states.",
          "User-Friendly: Provides clear feedback to users when text is still copying.",
          "Flexible Customization: Adjust settings like delay for resetting feedback.",
        ],
      },
      {
        type: "text",
        content: "\n",
      },
      {
        type: "image",
        content: images.blogs.blog2.image1,
      },
      {
        type: "text",
        content: "\nHow to use:",
      },
      {
        type: "image",
        content: images.blogs.blog2.image2,
      },
      {
        type: "text",
        content:
          "\nGive it a try and simplify your clipboard operations today! 🚀",
      },
    ],
    date: "2024-07-05",
    image: images.blogs.blog2.banner,
    timeToRead: "10 min",
    tags: [
      "React",
      "CustomHook",
      "Clipboard",
      "FrontEndDevelopment",
      "JavaScrip",
      "DeveloperTools",
      "Typescript",
    ],
  },
];

export default blogs;
