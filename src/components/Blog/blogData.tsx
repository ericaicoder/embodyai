import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "EmbodyAI - Scale Your Development Team to 10X with AI",
    paragraph:
      "EmbodyAI revolutionizes software development by empowering developers with cutting-edge AI tools. Our platform accelerates coding, automates repetitive tasks, and amplifies developer productivity by 10X, transforming how teams build, deploy, and scale software solutions.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Eric",
      image: "/images/logo/logo.svg",
      designation: "Founder",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
];
export default blogData;
