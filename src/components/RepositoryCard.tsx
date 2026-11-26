import { GitHubRepository } from "@/types/github";
import { Star, GitFork, ExternalLink, BookMarked, Calendar } from "lucide-react";

interface RepositoryCardProps {
  repository: GitHubRepository;
}

const LANGUAGE_COLORS: Record<string, string> = {
  Python: "#3572A5",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  C: "#555555",
  "C++": "#f34b7d",
  Rust: "#dea584",
  Go: "#00ADD8",
  Markdown: "#083fa1",
};

export function RepositoryCard({ repository }: RepositoryCardProps) {
  const languageColor = repository.language
    ? LANGUAGE_COLORS[repository.language] || "#8b949e"
    : "#8b949e";

  const formattedDate = new Date(repository.updated_at).toLocaleDateString("pt-BR", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="group flex flex-col justify-between rounded-xl border border-zinc-200/90 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-400 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-blue-500/50">
      <div>
        {/* Card Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <BookMarked className="h-4 w-4 text-zinc-500 group-hover:text-blue-500 transition-colors" />
            <a
              href={repository.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-zinc-900 hover:text-blue-600 dark:text-zinc-100 dark:hover:text-blue-400 transition-colors text-base line-clamp-1"
            >
              {repository.name}
            </a>
          </div>
          <a
            href={repository.html_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir repositório ${repository.name}`}
            className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        {/* Description */}
        <p className="mt-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed">
          {repository.description || "Nenhuma descrição fornecida para este repositório no momento."}
        </p>

        {/* Topics / Tags */}
        {repository.topics && repository.topics.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {repository.topics.slice(0, 4).map((topic) => (
              <span
                key={topic}
                className="rounded-md bg-blue-50 px-2 py-0.5 text-[11px] font-medium text-blue-700 dark:bg-blue-950/50 dark:text-blue-300"
              >
                #{topic}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Card Footer: Language & Metrics */}
      <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
        <div className="flex items-center gap-3">
          {repository.language && (
            <span className="flex items-center gap-1.5 font-medium">
              <span
                className="h-2.5 w-2.5 rounded-full inline-block"
                style={{ backgroundColor: languageColor }}
              />
              {repository.language}
            </span>
          )}

          <span className="flex items-center gap-1" title="Estrelas no GitHub">
            <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500/20" />
            {repository.stargazers_count}
          </span>

          <span className="flex items-center gap-1" title="Forks">
            <GitFork className="h-3.5 w-3.5" />
            {repository.forks_count}
          </span>
        </div>

        <div className="flex items-center gap-1 text-[11px]" title="Última atualização">
          <Calendar className="h-3 w-3 text-zinc-400" />
          <span>{formattedDate}</span>
        </div>
      </div>
    </article>
  );
}
