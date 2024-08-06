import projects from "./projects";

const imagesPath = "/assets/images";

const images = {
  avatar: `${imagesPath}/avatar.png`,
  notFound: `${imagesPath}/404.png`,
  blogs: {
    blog1: {
      banner: `${imagesPath}/blogs/blog-1/banner.jpg`,
      image1: `${imagesPath}/blogs/blog-1/image-1.jpeg`,
      image2: `${imagesPath}/blogs/blog-1/image-2.jpeg`,
      image3: `${imagesPath}/blogs/blog-1/image-3.jpeg`,
    },
    blog2: {
      banner: `${imagesPath}/blogs/blog-2/banner.jpg`,
      image1: `${imagesPath}/blogs/blog-2/image-1.jpeg`,
      image2: `${imagesPath}/blogs/blog-2/image-2.jpeg`,
    },
  },
  projects: {
    aia: `${imagesPath}/projects/aia.jpg`,
    portfolio: `${imagesPath}/projects/portfolio.jpg`,
    prohustlin: `${imagesPath}/projects/prohustlin.jpg`,
    bargainhub: `${imagesPath}/projects/bargainhub.jpg`,
  },
};

export default images;
