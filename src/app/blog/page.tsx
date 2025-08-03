import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EmbodyAI Blog - AI Development Insights & 10X Productivity Tips",
  description: "Discover the latest insights on AI-accelerated software development, developer productivity hacks, coding automation tips, and how to scale your development team to 10X performance.",
  keywords: "AI development blog, developer productivity tips, AI coding insights, software automation, development best practices, 10X developer productivity, AI programming",
  openGraph: {
    title: "EmbodyAI Blog - AI Development Insights & 10X Productivity Tips",
    description: "Discover the latest insights on AI-accelerated software development, developer productivity hacks, and how to scale your development team to 10X performance.",
    url: "https://embodyai.co.jp/blog",
    siteName: "EmbodyAI",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "EmbodyAI Blog - AI Development Insights & 10X Productivity Tips",
    description: "Discover the latest insights on AI-accelerated software development and developer productivity hacks."
  }
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Developer Blog"
        description="Explore cutting-edge insights on AI-accelerated development, productivity optimization strategies, and the latest trends in developer automation. Learn how to scale your coding efficiency to 10X levels."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
