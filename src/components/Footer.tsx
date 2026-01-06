import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  services: [
    { name: "Gonsai2", href: "https://gonsai.krdn.kr" },
    { name: "News Analyzer", href: "https://news.krdn.kr" },
    { name: "Open WebUI", href: "https://webui.krdn.kr" },
    { name: "n8n", href: "https://n8n.krdn.kr" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "GitHub", href: "https://github.com/krdn" },
    { name: "Documentation", href: "/docs" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                KRDN
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              AI로 자동화를 혁신하다
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              AI Agent, AI Orchestrator, 워크플로우 자동화 솔루션
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Services</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Resources</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} KRDN. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/krdn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="mailto:contact@krdn.kr"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="sr-only">Email</span>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
