import { Metadata } from 'next';
import { locales, defaultLocale } from '@/i18n/config';

export const metadata: Metadata = {
  title: {
    template: '%s | EmbodyAI',
    default: 'EmbodyAI - Scale Your Development Team to 10X with AI'
  },
  description: 'Revolutionize software development with AI-powered tools that accelerate coding, automate repetitive tasks, and amplify developer productivity by 10X.',
  keywords: 'AI software development, 10X developer productivity, AI coding tools, automated development, AI code generation, developer acceleration',
  metadataBase: new URL('https://embodyai.co.jp'),
  openGraph: {
    title: 'EmbodyAI - Scale Your Development Team to 10X with AI',
    description: 'AI-powered development tools that accelerate coding and amplify developer productivity by 10X',
    url: 'https://embodyai.co.jp',
    siteName: 'EmbodyAI',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EmbodyAI - 10X Developer Productivity with AI'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EmbodyAI - Scale Your Development Team to 10X with AI',
    description: 'AI-powered development tools that accelerate coding and amplify developer productivity by 10X',
    images: ['/images/twitter-image.jpg']
  }
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}

