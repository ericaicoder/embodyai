import Breadcrumb from "@/components/Common/Breadcrumb";
import { Locale } from "@/i18n/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kidou - GUI for AI Code Agents | EmbodyAI",
  description: "Kidou is EmbodyAI's fast, unified desktop GUI for popular AI code agents like Claude Code, Cursor Agent, Gemini Code Agent, and Codex. Launch, switch, and control agents from one place with a native, developer-first interface.",
  keywords: "Kidou, Cursor Agent, Claude Code, Gemini Code Agent, Codex, code agent GUI, AI coding, developer tools, IDE-like UX, agent launcher, unified interface",
  openGraph: {
    title: "Kidou - GUI for AI Code Agents | EmbodyAI",
    description: "Unified desktop GUI for Claude Code, Cursor Agent, Gemini Code Agent, Codex, and more. Launch, switch, and control agents from a single, developer-first interface.",
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
    title: "Kidou - GUI for AI Code Agents | EmbodyAI",
    description: "Unified GUI for Claude Code, Cursor Agent, Gemini Code Agent, and Codex. Launch and control agents from one place with a native, developer-first interface.",
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
