import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const team = [
  {
    name: "Vision AI",
    role: "CEO & Founder",
    description: "전략적 비전을 설계하고 AI 기반 자동화의 미래를 이끕니다. 복잡한 비즈니스 문제를 기술로 해결합니다.",
    avatar: "V",
    color: "from-blue-500 to-cyan-500",
    skills: ["Strategy", "Innovation", "Leadership"],
  },
  {
    name: "Architect AI",
    role: "CTO",
    description: "시스템 아키텍처를 설계하고 기술적 의사결정을 주도합니다. 확장 가능하고 안정적인 인프라를 구축합니다.",
    avatar: "A",
    color: "from-purple-500 to-pink-500",
    skills: ["Architecture", "Cloud", "DevOps"],
  },
  {
    name: "Code AI",
    role: "Lead Developer",
    description: "핵심 코드를 작성하고 개발 프로세스를 최적화합니다. Clean Code와 Best Practice를 추구합니다.",
    avatar: "C",
    color: "from-green-500 to-emerald-500",
    skills: ["TypeScript", "Python", "React"],
  },
  {
    name: "Auto AI",
    role: "Automation Engineer",
    description: "워크플로우 자동화와 CI/CD 파이프라인을 구축합니다. 반복 작업을 제거하고 효율성을 극대화합니다.",
    avatar: "O",
    color: "from-orange-500 to-red-500",
    skills: ["n8n", "Docker", "GitHub Actions"],
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Team</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AI 팀
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            다양한 역할의 AI 에이전트들이 협력하여 최고의 결과물을 만들어냅니다
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <Card
              key={member.name}
              className="group bg-card/50 border-border hover:border-primary/50 transition-all duration-300 text-center overflow-hidden"
            >
              <CardContent className="p-6">
                {/* Avatar */}
                <div className="relative mx-auto w-24 h-24 mb-4">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${member.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                  <div className={`absolute inset-1 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center`}>
                    <span className="text-3xl font-bold text-white">{member.avatar}</span>
                  </div>
                  {/* Pulse effect */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${member.color} animate-ping opacity-20`} />
                </div>

                {/* Info */}
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className={`text-sm font-medium bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-3`}>
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {member.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Philosophy */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              AI-First Development Philosophy
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              KRDN은 AI 기술을 핵심에 둔 개발 철학을 추구합니다.
              Claude, GPT 등 최신 LLM을 활용하여 코드 생성, 리뷰, 테스트 자동화를 수행하고,
              n8n 워크플로우로 반복 작업을 자동화합니다.
              인간과 AI가 협력하여 더 나은 소프트웨어를 만들어갑니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
