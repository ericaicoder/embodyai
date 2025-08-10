import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import KidouContent from "./KidouContent";

export const metadata: Metadata = {
  title: "Kidou - Multi-Session Code Agent Manager | EmbodyAI",
  description: "Kidou is EmbodyAI's multi-session code agent manager that supports Cursor Agent and Claude. Orchestrate multiple AI coding sessions in parallel, keep context isolated, and scale your productivity to 10X.",
  keywords: "Kidou, Cursor Agent, Claude, code agent, multi-session, AI coding, agent orchestration, developer productivity, parallel AI sessions, AI code management",
  openGraph: {
    title: "Kidou - Multi-Session Code Agent Manager | EmbodyAI",
    description: "Manage multiple code agents (Cursor, Claude, and more) in parallel. Orchestrate AI coding sessions with isolated context and 10X developer productivity.",
    url: "https://embodyai.co.jp/kidou",
    siteName: "EmbodyAI",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Kidou - Multi-Session Code Agent Manager | EmbodyAI",
    description: "Orchestrate multiple code agents (Cursor, Claude, etc.) across parallel sessions for 10X developer productivity."
  }
};

const KidouPage = () => {
  return <KidouContent />;
};

export default KidouPage; 