import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EmbodyAI - Scale Your Development Team to 10X with AI",
  description: "Revolutionize software development with AI-powered tools that accelerate coding, automate repetitive tasks, and amplify developer productivity by 10X. Transform your team into superhuman coders.",
  keywords: "AI software development, 10X developer productivity, AI coding tools, automated development, AI code generation, developer acceleration, software automation",
  openGraph: {
    title: "EmbodyAI - Scale Your Development Team to 10X with AI",
    description: "AI-powered development tools that accelerate coding and amplify developer productivity by 10X",
    url: "https://embodyai.co.jp",
    siteName: "EmbodyAI",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EmbodyAI - 10X Developer Productivity with AI"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "EmbodyAI - Scale Your Development Team to 10X with AI",
    description: "AI-powered development tools that accelerate coding and amplify developer productivity by 10X",
    images: ["/images/twitter-image.jpg"]
  }
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      {/* <Video /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
      {/* <Brands /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
