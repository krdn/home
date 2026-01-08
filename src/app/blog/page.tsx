import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Blog",
  description: "AI, 자동화, 개발에 관한 인사이트를 공유합니다. Claude API, n8n 워크플로우, Docker 배포 등 다양한 주제를 다룹니다.",
  openGraph: {
    title: "KRDN Blog",
    description: "AI, 자동화, 개발에 관한 인사이트를 공유합니다.",
    url: "https://krdn.kr/blog",
  },
  alternates: {
    canonical: "https://krdn.kr/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main className="min-h-screen relative">

      <section className="pt-32 pb-24 bg-background">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Blog</Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                블로그
              </span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              AI, 자동화, 개발에 관한 인사이트를 공유합니다
            </p>
          </div>

          {/* Posts */}
          <div className="space-y-6">
            {posts.length === 0 ? (
              <p className="text-center text-muted-foreground py-12">
                아직 작성된 글이 없습니다.
              </p>
            ) : (
              posts.map((post) => (
                <Card
                  key={post.slug}
                  className="group bg-card/50 border-border hover:border-primary/50 transition-all duration-300"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <time className="text-sm text-muted-foreground">
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
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
