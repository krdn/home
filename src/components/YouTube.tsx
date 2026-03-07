"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Youtube, ExternalLink } from "lucide-react";

export default function YouTube() {
  const channelUrl = "https://www.youtube.com/@krdn-gon";

  return (
    <section id="youtube" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Youtube className="w-4 h-4 mr-1" />
            YouTube
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              교육 콘텐츠
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            AI 자동화와 개발 관련 튜토리얼, 가이드, 실습 영상을 제공합니다
          </p>
        </div>

        {/* Channel Banner */}
        <div className="mb-12">
          <Card className="overflow-hidden bg-gradient-to-r from-red-500/10 via-red-600/5 to-red-500/10 border-red-500/20">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  {/* Channel Avatar */}
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-500/25">
                      <Youtube className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-green-500 border-4 border-background flex items-center justify-center">
                      <Play className="w-3 h-3 text-white fill-white" />
                    </div>
                  </div>

                  {/* Channel Info */}
                  <div>
                    <h3 className="text-2xl font-bold mb-1">KRDN</h3>
                    <p className="text-muted-foreground mb-2">@krdn-gon</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>AI 자동화</span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
                      <span>n8n 워크플로우</span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
                      <span>개발 튜토리얼</span>
                    </div>
                  </div>
                </div>

                {/* Subscribe Button */}
                <Button
                  size="lg"
                  className="bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/25"
                  asChild
                >
                  <a href={channelUrl} target="_blank" rel="noopener noreferrer">
                    <Youtube className="w-5 h-5 mr-2" />
                    채널 방문하기
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Video Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="group hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/5">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-red-500/10 to-red-600/10 flex items-center justify-center group-hover:from-red-500/20 group-hover:to-red-600/20 transition-colors">
                <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              </div>
              <h4 className="font-semibold text-lg mb-2">튜토리얼</h4>
              <p className="text-sm text-muted-foreground">
                단계별 학습 가이드로 AI 자동화를 배워보세요
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/5">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-red-500/10 to-red-600/10 flex items-center justify-center group-hover:from-red-500/20 group-hover:to-red-600/20 transition-colors">
                <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
              </div>
              <h4 className="font-semibold text-lg mb-2">기능 설명</h4>
              <p className="text-sm text-muted-foreground">
                서비스 기능을 영상으로 쉽게 이해하세요
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/5">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-red-500/10 to-red-600/10 flex items-center justify-center group-hover:from-red-500/20 group-hover:to-red-600/20 transition-colors">
                <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h4 className="font-semibold text-lg mb-2">실전 예제</h4>
              <p className="text-sm text-muted-foreground">
                실무에서 바로 적용 가능한 예제를 다룹니다
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            새로운 콘텐츠가 업로드되면 알림을 받으세요
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-red-500/50 text-red-500 hover:bg-red-500/10"
            asChild
          >
            <a href={channelUrl} target="_blank" rel="noopener noreferrer">
              <Youtube className="w-5 h-5 mr-2" />
              YouTube 채널 구독하기
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
