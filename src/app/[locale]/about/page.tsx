import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About EmbodyAI - Scale Your Development Team to 10X with AI",
  description: "Learn how EmbodyAI revolutionizes software development with AI-powered tools, developer agents, and automation that amplifies productivity by 10X. Founded in 2025, we're transforming developers into superhuman coders.",
  keywords: "AI software development, developer productivity, AI coding tools, software automation, development acceleration, AI developer agents",
  openGraph: {
    title: "About EmbodyAI - Scale Your Development Team to 10X with AI",
    description: "Learn how EmbodyAI revolutionizes software development with AI-powered tools and automation that amplifies developer productivity by 10X.",
    url: "https://embodyai.co.jp/about",
    siteName: "EmbodyAI",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "About EmbodyAI - Scale Your Development Team to 10X with AI",
    description: "Learn how EmbodyAI revolutionizes software development with AI-powered tools and automation that amplifies developer productivity by 10X."
  }
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About EmbodyAI"
        description="Discover how we're revolutionizing software development by empowering developers with cutting-edge AI agents and automation tools. Founded in 2025, EmbodyAI transforms coding workflows and scales developer productivity to 10X levels."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
