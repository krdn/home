import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "Gonsai2",
    category: "Platform",
    description: "n8n 워크플로우를 위한 AI 기반 최적화 플랫폼. 워크플로우 시각화, 실시간 모니터링, 대시보드 분석 기능을 제공합니다.",
    image: "/images/gonsai2.png",
    technologies: ["Next.js", "Node.js", "MongoDB", "Docker"],
    url: "https://gonsai.krdn.kr",
    github: "https://github.com/krdn/gonsai2",
  },
  {
    name: "News Sentiment Analyzer",
    category: "Data Analysis",
    description: "뉴스 기사를 자동 수집하고 AI로 감정을 분석하는 대시보드. Celery 기반 백그라운드 처리와 Streamlit 시각화를 제공합니다.",
    image: "/images/news-analyzer.png",
    technologies: ["Django", "FastAPI", "Celery", "Streamlit"],
    url: "https://news.krdn.kr",
    github: null,
  },
  {
    name: "Claude Code Auto",
    category: "AI Tool",
    description: "Claude API 기반 AI Orchestrator Framework. Planner-Coder-Reviewer 3단계 에이전트로 지능적인 코드를 생성합니다.",
    image: "/images/claude-code.png",
    technologies: ["TypeScript", "Node.js", "Claude API", "Jest"],
    url: null,
    github: "https://github.com/krdn/claude-code-auto",
  },
  {
    name: "n8n Agent Generator",
    category: "CLI Tool",
    description: "자연어 프롬프트로 n8n AI Agent 워크플로우를 자동 생성하는 CLI 도구. 복잡한 워크플로우를 몇 초 만에 생성합니다.",
    image: "/images/n8n-agent.png",
    technologies: ["TypeScript", "Node.js", "Claude API"],
    url: null,
    github: "https://github.com/krdn",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Portfolio</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              프로젝트 포트폴리오
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            AI와 자동화 기술을 활용한 다양한 프로젝트들
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.name}
              className="group overflow-hidden bg-card/50 border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Project image placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer" />
                <span className="text-6xl font-bold text-foreground/10 group-hover:scale-110 transition-transform">
                  0{index + 1}
                </span>
                <Badge className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm text-foreground">
                  {project.category}
                </Badge>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.url && (
                    <Button size="sm" variant="default" className="bg-gradient-to-r from-primary to-accent" asChild>
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <svg className="mr-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <svg className="mr-1.5 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View more */}
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/krdn" target="_blank" rel="noopener noreferrer">
              더 많은 프로젝트 보기
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
