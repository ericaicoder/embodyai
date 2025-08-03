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
      title: "EmbodyAIへのお問い合わせ - 10倍の開発者生産性を始める",
      description: "開発チームを10倍の生産性にスケールする準備はできましたか？EmbodyAIがAI駆動開発ツールでコーディングワークフローを加速し、チームをスーパーヒューマンコーダーに変身させる方法をお問い合わせください。",
      keywords: "EmbodyAIお問い合わせ, AI開発サポート, 開発者生産性コンサルテーション, AIコーディングツールデモ, ソフトウェア開発加速",
      openGraph: {
        title: "EmbodyAIへのお問い合わせ - 10倍の開発者生産性を始める",
        description: "開発チームを10倍の生産性にスケールする準備はできましたか？EmbodyAIがAI駆動開発ツールでコーディングワークフローを加速する方法をお問い合わせください。",
        url: "https://embodyai.co.jp/ja/contact",
        siteName: "EmbodyAI",
        type: "website"
      },
      twitter: {
        card: "summary_large_image",
        title: "EmbodyAIへのお問い合わせ - 10倍の開発者生産性を始める",
        description: "開発チームを10倍の生産性にスケールする準備はできましたか？EmbodyAIがAI駆動開発ツールでコーディングワークフローを加速する方法をお問い合わせください。"
      }
    };
  }
  
  return {
    title: "Contact EmbodyAI - Get Started with 10X Developer Productivity",
    description: "Ready to scale your development team to 10X productivity? Contact EmbodyAI to learn how our AI-powered development tools can accelerate your coding workflow and transform your team into superhuman coders.",
    keywords: "contact EmbodyAI, AI development support, developer productivity consultation, AI coding tools demo, software development acceleration",
    openGraph: {
      title: "Contact EmbodyAI - Get Started with 10X Developer Productivity",
      description: "Ready to scale your development team to 10X productivity? Contact EmbodyAI to learn how our AI-powered development tools can accelerate your coding workflow.",
      url: "https://embodyai.co.jp/en/contact",
      siteName: "EmbodyAI",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact EmbodyAI - Get Started with 10X Developer Productivity",
      description: "Ready to scale your development team to 10X productivity? Contact EmbodyAI to learn how our AI-powered development tools can accelerate your coding workflow."
    }
  };
}

export default function ContactLayout({ children }: Props) {
  return children;
} 