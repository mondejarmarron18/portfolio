export type BlogType = {
  id: number;
  title: string;
  description: string;
  date: string;
  link: string;
  image: string;
  timeToRead: string;
  tags: string[];
};

const blogs: BlogType[] = [
  {
    id: 1,
    title: "Express.js Error Handling Best Practices",
    description:
      "Learn how to handle errors effectively in your Express.js applications.",
    date: "2024-07-01",
    link: "/blog/express-error-handling-best-practices",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timeToRead: "8 min",
    tags: ["Express.js", "Node.js", "Web Development"],
  },
  {
    id: 2,
    title: "Advanced Next.js Techniques",
    description:
      "Learn advanced techniques for building high-performance web applications with Next.js.",
    date: "2024-07-05",
    link: "/blog/advanced-nextjs-techniques",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timeToRead: "10 min",
    tags: ["Next.js", "React.js", "Web Development"],
  },
  {
    id: 3,
    title: "Building RESTful APIs with Express.js",
    description:
      "A comprehensive guide to creating RESTful APIs using Express.js.",
    date: "2024-07-10",
    link: "/blog/building-restful-apis-with-express",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timeToRead: "12 min",
    tags: ["Express.js", "Node.js", "API", "Web Development"],
  },
  {
    id: 4,
    title: "TypeScript for JavaScript Developers",
    description:
      "How to transition from JavaScript to TypeScript and the benefits it offers.",
    date: "2024-07-15",
    link: "/blog/typescript-for-javascript-developers",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timeToRead: "7 min",
    tags: ["TypeScript", "JavaScript", "Web Development"],
  },
  {
    id: 5,
    title: "Styling with Tailwind CSS: Tips and Tricks",
    description:
      "Enhance your web designs using Tailwind CSS with these practical tips.",
    date: "2024-07-20",
    link: "/blog/styling-with-tailwind-css",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timeToRead: "9 min",
    tags: ["Tailwind CSS", "CSS", "Web Development"],
  },
  {
    id: 6,
    title: "Database Integration with Prisma",
    description:
      "Integrating Prisma with your Node.js applications for database management.",
    date: "2024-07-25",
    link: "/blog/database-integration-with-prisma",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timeToRead: "11 min",
    tags: ["Prisma", "Database", "Node.js", "Web Development"],
  },
  {
    id: 7,
    title: "Deploying Applications with Docker and AWS",
    description:
      "A step-by-step guide to deploying web applications using Docker and AWS.",
    date: "2024-07-30",
    link: "/blog/deploying-with-docker-and-aws",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timeToRead: "15 min",
    tags: ["Docker", "AWS", "Deployment", "Web Development"],
  },
  {
    id: 8,
    title: "Real-time Communication with Socket.io",
    description:
      "Implementing real-time communication features in your web applications using Socket.io.",
    date: "2024-08-01",
    link: "/blog/real-time-communication-with-socketio",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timeToRead: "10 min",
    tags: ["Socket.io", "Real-time", "Web Development"],
  },
  {
    id: 9,
    title: "Using Redux Toolkit for State Management",
    description:
      "Simplify state management in your React applications with Redux Toolkit.",
    date: "2024-08-05",
    link: "/blog/using-redux-toolkit",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timeToRead: "8 min",
    tags: ["Redux Toolkit", "React.js", "State Management", "Web Development"],
  },
  {
    id: 10,
    title: "Optimizing Web Performance with Vite",
    description:
      "Improve the performance of your web applications using Vite as a build tool.",
    date: "2024-08-10",
    link: "/blog/optimizing-web-performance-with-vite",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timeToRead: "9 min",
    tags: ["Vite", "Performance", "Web Development"],
  },
];

export default blogs;
