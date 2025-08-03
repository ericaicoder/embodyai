"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <title>EmbodyAI - Scale Your Development Team to 10X with AI</title>
        <meta name="description" content="Revolutionize software development with AI-powered tools that accelerate coding, automate repetitive tasks, and amplify developer productivity by 10X." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="EmbodyAI" />
        <meta name="keywords" content="AI software development, 10X developer productivity, AI coding tools, automated development, AI code generation, developer acceleration" />
        <meta property="og:title" content="EmbodyAI - Scale Your Development Team to 10X with AI" />
        <meta property="og:description" content="AI-powered development tools that accelerate coding and amplify developer productivity by 10X" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://embodyai.co.jp" />
        <meta property="og:site_name" content="EmbodyAI" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EmbodyAI - Scale Your Development Team to 10X with AI" />
        <meta name="twitter:description" content="AI-powered development tools that accelerate coding and amplify developer productivity by 10X" />
        <link rel="canonical" href="https://embodyai.co.jp" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";

