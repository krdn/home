import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllPostSlugs } from "@/lib/blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://krdn.kr/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["KRDN"],
      tags: [post.category],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `https://krdn.kr/blog/${slug}`,
    },
  };
}

// HTML 엔티티 이스케이프 (XSS 방지)
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

// 안전한 URL인지 검증 (javascript: 등 차단)
function isSafeUrl(url: string): boolean {
  const trimmed = url.trim().toLowerCase();
  // javascript:, data:, vbscript: 등 위험한 프로토콜 차단
  if (trimmed.startsWith('javascript:')) return false;
  if (trimmed.startsWith('vbscript:')) return false;
  if (trimmed.startsWith('data:') && !trimmed.startsWith('data:image/')) return false;
  return true;
}

// Simple markdown to HTML converter (XSS 방지 적용)
function parseMarkdown(content: string): string {
  // 먼저 HTML 태그를 이스케이프 (마크다운 문법 제외)
  let html = content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // script 태그 제거
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '') // style 태그 제거
    .replace(/on\w+\s*=/gi, '') // 이벤트 핸들러 속성 제거
    .replace(/<iframe\b[^>]*>/gi, ''); // iframe 제거

  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-8 mb-4 text-foreground">$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-10 mb-4 text-foreground">$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-8 mb-6 text-foreground">$1</h1>');

  // Bold and Italic
  html = html.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Code blocks (내용은 이스케이프)
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (_, lang, code) => {
    const escapedCode = escapeHtml(code);
    return `<pre class="bg-card rounded-lg p-4 overflow-x-auto my-4 border border-border"><code class="text-sm text-muted-foreground">${escapedCode}</code></pre>`;
  });

  // Inline code (내용은 이스케이프)
  html = html.replace(/`([^`]+)`/g, (_, code) => {
    const escapedCode = escapeHtml(code);
    return `<code class="bg-muted px-1.5 py-0.5 rounded text-sm text-foreground">${escapedCode}</code>`;
  });

  // Blockquotes
  html = html.replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-primary pl-4 my-4 italic text-muted-foreground">$1</blockquote>');

  // Lists
  html = html.replace(/^\- \[ \] (.*$)/gim, '<li class="flex items-center gap-2 ml-4"><span class="w-4 h-4 border rounded"></span>$1</li>');
  html = html.replace(/^\- \[x\] (.*$)/gim, '<li class="flex items-center gap-2 ml-4"><span class="w-4 h-4 bg-primary rounded flex items-center justify-center text-white text-xs">✓</span>$1</li>');
  html = html.replace(/^\d+\. (.*$)/gim, '<li class="ml-6 list-decimal">$1</li>');
  html = html.replace(/^- (.*$)/gim, '<li class="ml-6 list-disc">$1</li>');

  // Links (안전한 URL만 허용)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, url) => {
    if (!isSafeUrl(url)) {
      return escapeHtml(text); // 위험한 URL은 텍스트만 표시
    }
    const escapedText = escapeHtml(text);
    const escapedUrl = encodeURI(url);
    return `<a href="${escapedUrl}" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">${escapedText}</a>`;
  });

  // Paragraphs
  html = html.split('\n\n').map(paragraph => {
    if (paragraph.trim().startsWith('<')) return paragraph;
    if (paragraph.trim() === '') return '';
    return `<p class="my-4 text-muted-foreground leading-relaxed">${paragraph}</p>`;
  }).join('\n');

  // Line breaks
  html = html.replace(/\n/g, '<br />');

  return html;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const contentHtml = parseMarkdown(post.content);

  return (
    <>
      <Header />
      <main className="min-h-screen relative">
        <article className="pt-32 pb-24 bg-background">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          {/* Back button */}
          <Button variant="ghost" size="sm" className="mb-8" asChild>
            <Link href="/blog">
              <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              블로그로 돌아가기
            </Link>
          </Button>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <Badge variant="secondary">{post.category}</Badge>
              <span className="text-sm text-muted-foreground">{post.readTime}</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-foreground mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              {post.description}
            </p>
            <time className="text-sm text-muted-foreground">
              {new Date(post.date).toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </header>

          {/* Content */}
          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground">
                읽어주셔서 감사합니다!
              </p>
              <Button variant="outline" asChild>
                <Link href="/blog">
                  다른 글 보기
                </Link>
              </Button>
            </div>
          </footer>
        </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
