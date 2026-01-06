import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KRDN - AI로 자동화를 혁신하다",
  description: "AI Agent, AI Orchestrator, 워크플로우 자동화 솔루션을 개발하는 KRDN입니다. Gonsai2, News Sentiment Analyzer 등 다양한 AI 기반 서비스를 제공합니다.",
  keywords: ["AI Agent", "AI Orchestrator", "자동화", "워크플로우", "n8n", "Claude API", "KRDN"],
  authors: [{ name: "KRDN" }],
  openGraph: {
    title: "KRDN - AI로 자동화를 혁신하다",
    description: "AI Agent, AI Orchestrator, 워크플로우 자동화 솔루션",
    url: "https://krdn.kr",
    siteName: "KRDN",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
