import { Badge } from "@/components/ui/badge";

interface Technology {
  name: string;
  icon: string | null;
  text?: string;
}

interface TechCategory {
  name: string;
  color: string;
  technologies: Technology[];
}

const techCategories: TechCategory[] = [
  {
    name: "Frontend",
    color: "from-blue-500 to-cyan-500",
    technologies: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    name: "Backend",
    color: "from-green-500 to-emerald-500",
    technologies: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    ],
  },
  {
    name: "AI / ML",
    color: "from-purple-500 to-pink-500",
    technologies: [
      { name: "Claude API", icon: null, text: "Claude" },
      { name: "OpenAI", icon: null, text: "GPT" },
      { name: "LangChain", icon: null, text: "LC" },
      { name: "Anthropic", icon: null, text: "AI" },
    ],
  },
  {
    name: "Database",
    color: "from-orange-500 to-red-500",
    technologies: [
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    ],
  },
  {
    name: "DevOps",
    color: "from-indigo-500 to-violet-500",
    technologies: [
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Technology</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              기술 스택
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            최신 기술을 활용하여 안정적이고 확장 가능한 솔루션을 개발합니다
          </p>
        </div>

        {/* Tech categories */}
        <div className="space-y-12">
          {techCategories.map((category) => (
            <div key={category.name} className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${category.color}`} />
                <h3 className="text-lg font-semibold text-foreground">{category.name}</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center gap-3 p-4 rounded-xl bg-card/50 border border-border hover:border-primary/50 hover:bg-card transition-all duration-300 group/item"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-background group-hover/item:scale-110 transition-transform">
                      {tech.icon ? (
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-8 h-8 object-contain"
                          loading="lazy"
                        />
                      ) : (
                        <span className={`text-sm font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                          {tech.text}
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors text-center">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Modern Stack",
              description: "최신 프레임워크와 라이브러리를 사용하여 빠르고 안정적인 서비스를 구축합니다",
              icon: (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
              ),
            },
            {
              title: "AI-First",
              description: "Claude, GPT 등 최신 AI 기술을 적극 활용하여 지능형 자동화를 구현합니다",
              icon: (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              ),
            },
            {
              title: "Self-Hosted",
              description: "온프레미스 환경에서 직접 서비스를 호스팅하여 데이터 주권을 확보합니다",
              icon: (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                </svg>
              ),
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-colors"
            >
              <div className="p-2 w-fit rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 text-primary mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
