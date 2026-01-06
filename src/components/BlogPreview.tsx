import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Sample blog posts (will be replaced with actual MDX data later)
const blogPosts = [
  {
    slug: "welcome",
    title: "KRDN 홈페이지를 소개합니다",
    description: "AI 기반 자동화 솔루션을 개발하는 KRDN의 새로운 홈페이지를 공개합니다. 우리의 비전과 제공하는 서비스를 소개합니다.",
    date: "2025-01-06",
    category: "Announcement",
    readTime: "3분",
  },
  {
    slug: "ai-automation",
    title: "AI 에이전트로 업무 자동화하기",
    description: "Claude API와 n8n을 활용하여 반복적인 업무를 자동화하는 방법을 알아봅니다. 실제 사례와 함께 단계별로 설명합니다.",
    date: "2025-01-05",
    category: "Tutorial",
    readTime: "8분",
  },
  {
    slug: "gonsai2-intro",
    title: "Gonsai2: n8n 워크플로우 최적화 플랫폼",
    description: "Gonsai2 플랫폼의 주요 기능과 사용 방법을 소개합니다. AI 기반 최적화로 워크플로우 효율을 높이세요.",
    date: "2025-01-04",
    category: "Product",
    readTime: "5분",
  },
];

export default function BlogPreview() {
  return (
    <section id="blog" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <Badge variant="outline" className="mb-4">Blog</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                최신 글
              </span>
            </h2>
            <p className="mt-2 text-muted-foreground">
              AI, 자동화, 개발에 관한 인사이트를 공유합니다
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/blog">
              모든 글 보기
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </Button>
        </div>

        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card
              key={post.slug}
              className="group bg-card/50 border-border hover:border-primary/50 transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{post.readTime} 읽기</span>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                  {post.description}
                </p>
                <div className="flex items-center justify-between">
                  <time className="text-xs text-muted-foreground">
                    {new Date(post.date).toLocaleDateString('ko-KR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                  >
                    읽기
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
