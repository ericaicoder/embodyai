import { Metadata } from "next";
import { Locale } from "@/i18n/config";

interface Props {
  params: Promise<{ locale: Locale }>;
  children: React.ReactNode;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  
  if (locale === 'ja') {
    return {
      title: "EmbodyAIについて - AIで開発チームを10倍にスケール",
      description: "EmbodyAIがAI駆動ツール、開発者エージェント、自動化で生産性を10倍に増幅し、ソフトウェア開発をどのように革命化するかをご覧ください。2025年設立、開発者をスーパーヒューマンコーダーに変身させます。",
      openGraph: {
        title: "EmbodyAIについて - AIで開発チームを10倍にスケール",
        description: "EmbodyAIがAI駆動ツールと自動化で開発者の生産性を10倍に増幅し、ソフトウェア開発をどのように革命化するかをご覧ください。",
        url: "https://embodyai.co.jp/ja/about",
        siteName: "EmbodyAI",
        type: "website"
      },
      twitter: {
        card: "summary_large_image",
        title: "EmbodyAIについて - AIで開発チームを10倍にスケール",
        description: "EmbodyAIがAI駆動ツールと自動化で開発者の生産性を10倍に増幅し、ソフトウェア開発をどのように革命化するかをご覧ください。"
      }
    };
  }
  
  return {
    title: "About EmbodyAI - Scale Your Development Team to 10X with AI",
    description: "Learn how EmbodyAI revolutionizes software development with AI-powered tools, developer agents, and automation that amplifies productivity by 10X. Founded in 2025, we're transforming developers into superhuman coders.",
    keywords: "AI software development, developer productivity, AI coding tools, software automation, development acceleration, AI developer agents",
    openGraph: {
      title: "About EmbodyAI - Scale Your Development Team to 10X with AI",
      description: "Learn how EmbodyAI revolutionizes software development with AI-powered tools and automation that amplifies developer productivity by 10X.",
      url: "https://embodyai.co.jp/en/about",
      siteName: "EmbodyAI",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: "About EmbodyAI - Scale Your Development Team to 10X with AI",
      description: "Learn how EmbodyAI revolutionizes software development with AI-powered tools and automation that amplifies developer productivity by 10X."
    }
  };
}

export default function AboutLayout({ children }: Props) {
  return children;
} 