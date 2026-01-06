import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Documentation",
  description: "KRDN 서비스 사용법과 가이드를 확인하세요. Gonsai2, News Sentiment Analyzer, n8n Workflows 등의 문서를 제공합니다.",
  openGraph: {
    title: "KRDN Documentation",
    description: "KRDN 서비스 사용법과 가이드를 확인하세요.",
    url: "https://krdn.kr/docs",
  },
  alternates: {
    canonical: "https://krdn.kr/docs",
  },
};

const services = [
  {
    name: "Gonsai2",
    description: "AI 기반 대화형 어시스턴트 플랫폼",
    href: "https://gonsai.krdn.kr",
    docs: [
      { title: "시작하기", description: "Gonsai2 기본 사용법" },
      { title: "AI 모델 설정", description: "Claude, GPT 모델 연동" },
      { title: "대화 컨텍스트", description: "대화 맥락 관리 방법" },
    ],
    status: "live",
  },
  {
    name: "News Sentiment Analyzer",
    description: "실시간 뉴스 감성 분석 시스템",
    href: "https://news.krdn.kr",
    docs: [
      { title: "대시보드 사용법", description: "감성 분석 결과 확인" },
      { title: "키워드 설정", description: "모니터링 키워드 관리" },
      { title: "알림 설정", description: "실시간 알림 구성" },
    ],
    status: "live",
  },
  {
    name: "n8n Workflows",
    description: "자동화 워크플로우 플랫폼",
    href: "https://n8n.krdn.kr",
    docs: [
      { title: "워크플로우 생성", description: "기본 워크플로우 만들기" },
      { title: "트리거 설정", description: "자동 실행 조건 설정" },
      { title: "외부 서비스 연동", description: "API 연동 가이드" },
    ],
    status: "live",
  },
  {
    name: "Open WebUI",
    description: "로컬 LLM 웹 인터페이스",
    href: "https://webui.krdn.kr",
    docs: [
      { title: "Ollama 연동", description: "로컬 모델 설정" },
      { title: "프롬프트 관리", description: "프롬프트 템플릿 사용" },
      { title: "RAG 설정", description: "문서 기반 검색 구성" },
    ],
    status: "live",
  },
];

const guides = [
  {
    title: "AI Agent 개발 가이드",
    description: "Claude, GPT를 활용한 AI Agent 개발 방법론",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: "n8n 워크플로우 패턴",
    description: "자주 사용하는 자동화 워크플로우 템플릿",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    title: "API 연동 가이드",
    description: "외부 서비스 API 연동 방법",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
  {
    title: "배포 가이드",
    description: "Docker, PM2를 활용한 서비스 배포",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
];

export default function DocsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-4">Documentation</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              문서 센터
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            KRDN 서비스 사용법과 가이드를 확인하세요
          </p>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-8 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">빠른 시작</h2>
                <p className="text-muted-foreground">
                  KRDN 서비스를 처음 사용하시나요? 각 서비스 페이지에서 바로 시작할 수 있습니다.
                </p>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://gonsai.krdn.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Gonsai2 시작
                </a>
                <a
                  href="https://github.com/krdn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-muted text-foreground rounded-lg font-medium hover:bg-muted/80 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-12 px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold mb-8">가이드</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guides.map((guide, index) => (
              <Card key={index} className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors cursor-pointer group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                    {guide.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{guide.title}</h3>
                  <p className="text-sm text-muted-foreground">{guide.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Documentation */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold mb-8">서비스별 문서</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                    <Badge variant={service.status === "live" ? "default" : "secondary"}>
                      {service.status === "live" ? "Live" : "Coming Soon"}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.docs.map((doc, docIndex) => (
                      <li key={docIndex} className="flex items-start gap-3 group cursor-pointer">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 group-hover:scale-150 transition-transform" />
                        <div>
                          <div className="font-medium text-sm group-hover:text-primary transition-colors">
                            {doc.title}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {doc.description}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-border">
                    <a
                      href={service.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                    >
                      서비스 바로가기
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Section */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-4">오픈소스</h2>
          <p className="text-muted-foreground mb-8">
            모든 프로젝트의 소스 코드는 GitHub에서 확인할 수 있습니다
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="https://github.com/krdn/gonsai2"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <div className="font-medium">krdn/gonsai2</div>
              <div className="text-sm text-muted-foreground">AI Assistant Platform</div>
            </a>
            <a
              href="https://github.com/krdn/news-sentiment-analyzer2"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <div className="font-medium">krdn/news-sentiment</div>
              <div className="text-sm text-muted-foreground">News Analysis System</div>
            </a>
            <a
              href="https://github.com/krdn/home"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <div className="font-medium">krdn/home</div>
              <div className="text-sm text-muted-foreground">This Homepage</div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
