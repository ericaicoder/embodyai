import Breadcrumb from "@/components/Common/Breadcrumb";
import { Locale } from "@/i18n/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kidou - Multi-Session Code Agent Manager | EmbodyAI",
  description: "Kidou is EmbodyAI's multi-session code agent manager that supports Cursor Agent and Claude. Orchestrate multiple AI coding sessions in parallel, keep context isolated, and scale your productivity to 10X.",
  keywords: "Kidou, Cursor Agent, Claude, code agent, multi-session, AI coding, agent orchestration, developer productivity, parallel AI sessions, AI code management",
  openGraph: {
    title: "Kidou - Multi-Session Code Agent Manager | EmbodyAI",
    description: "Manage multiple code agents (Cursor, Claude, and more) in parallel. Orchestrate AI coding sessions with isolated context and 10X developer productivity.",
    url: "https://embodyai.co.jp/kidou",
    siteName: "EmbodyAI",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "EmbodyAI - 10X Developer Productivity with AI"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kidou - Multi-Session Code Agent Manager | EmbodyAI",
    description: "Orchestrate multiple code agents (Cursor, Claude, etc.) across parallel sessions for 10X developer productivity.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "EmbodyAI - 10X Developer Productivity with AI"
      }
    ]
  }
};

export default function KidouLayout({ 
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  return (
    <div>
      {children}
    </div>
  );
}