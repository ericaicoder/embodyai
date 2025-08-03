import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact EmbodyAI - Get Started with 10X Developer Productivity",
  description: "Ready to scale your development team to 10X productivity? Contact EmbodyAI to learn how our AI-powered development tools can accelerate your coding workflow and transform your team into superhuman coders.",
  keywords: "contact EmbodyAI, AI development support, developer productivity consultation, AI coding tools demo, software development acceleration",
  openGraph: {
    title: "Contact EmbodyAI - Get Started with 10X Developer Productivity",
    description: "Ready to scale your development team to 10X productivity? Contact EmbodyAI to learn how our AI-powered development tools can accelerate your coding workflow.",
    url: "https://embodyai.co.jp/contact",
    siteName: "EmbodyAI",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact EmbodyAI - Get Started with 10X Developer Productivity",
    description: "Ready to scale your development team to 10X productivity? Contact EmbodyAI to learn how our AI-powered development tools can accelerate your coding workflow."
  }
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact EmbodyAI"
        description="Ready to transform your development workflow with AI? Get in touch with our team to discover how EmbodyAI can scale your coding productivity to 10X levels and accelerate your software development process."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
