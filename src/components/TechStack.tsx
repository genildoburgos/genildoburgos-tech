import { Code2, Server, Cpu, Database, Wrench } from "lucide-react";

interface TechGroup {
  title: string;
  icon: React.ReactNode;
  items: string[];
}

export function TechStack() {
  const groups: TechGroup[] = [
    {
      title: "Linguagens & Core",
      icon: <Code2 className="h-5 w-5 text-blue-500" />,
      items: ["Python", "TypeScript", "JavaScript", "SQL", "Bash / Shell"],
    },
    {
      title: "Front-end & UI",
      icon: <Server className="h-5 w-5 text-indigo-500" />,
      items: ["Next.js (App Router)", "React", "Tailwind CSS", "HTML5 & Modern CSS", "Figma"],
    },
    {
      title: "Back-end & APIs",
      icon: <Database className="h-5 w-5 text-emerald-500" />,
      items: ["FastAPI", "Node.js", "Express", "REST APIs", "PostgreSQL", "SQLite"],
    },
    {
      title: "Inteligência Artificial & Agentes",
      icon: <Cpu className="h-5 w-5 text-amber-500" />,
      items: [
        "LLMs (Gemini, Claude, GPT)",
        "LangChain & Automações",
        "Engenharia de Prompt",
        "Workflows Autônomos",
      ],
    },
    {
      title: "DevOps & Ferramentas",
      icon: <Wrench className="h-5 w-5 text-purple-500" />,
      items: ["Git & GitHub", "Docker", "Linux (Ubuntu/Debian)", "Vercel", "VS Code"],
    },
  ];

  return (
    <section id="tecnologias" className="py-16 sm:py-24 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Competências Técnicas
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
            Stack Tecnológica & Ferramentas
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Tecnologias com as quais construo sistemas modernos, rotinas automatizadas e aplicações escaláveis.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-zinc-200/90 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60"
            >
              <div className="flex items-center gap-3 border-b border-zinc-100 dark:border-zinc-800/80 pb-3">
                <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800">
                  {group.icon}
                </div>
                <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm sm:text-base">
                  {group.title}
                </h3>
              </div>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
