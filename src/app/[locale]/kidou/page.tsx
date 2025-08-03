import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import KidouContent from "./KidouContent";

export const metadata: Metadata = {
  title: "Kidou - Multi-Session Claude Code GUI | EmbodyAI",
  description: "Kidou is EmbodyAI's revolutionary Claude code GUI app that lets developers manage multiple AI coding sessions simultaneously. Vibe code with parallel AI assistants and scale your productivity to 10X levels.",
  keywords: "Kidou, Claude code GUI, multi-session coding, AI coding app, parallel AI sessions, developer productivity, vibe coding, AI code management",
  openGraph: {
    title: "Kidou - Multi-Session Claude Code GUI | EmbodyAI",
    description: "Revolutionary Claude code GUI app for managing multiple AI coding sessions. Vibe code with parallel AI assistants and scale your productivity to 10X levels.",
    url: "https://embodyai.co.jp/kidou",
    siteName: "EmbodyAI",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Kidou - Multi-Session Claude Code GUI | EmbodyAI",
    description: "Revolutionary Claude code GUI app for managing multiple AI coding sessions and scaling developer productivity."
  }
};

const KidouPage = () => {
  return <KidouContent />;
};

export default KidouPage; 