"use client";

import { useState, useMemo } from "react";
import { GitHubRepository } from "@/types/github";
import { RepositoryCard } from "./RepositoryCard";
import { Search, Sparkles, Filter } from "lucide-react";

interface RepositorySectionProps {
  repositories: GitHubRepository[];
}

export function RepositorySection({ repositories }: RepositorySectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("ALL");

  const availableLanguages = useMemo(() => {
    const langs = new Set<string>();
    repositories.forEach((repo) => {
      if (repo.language) langs.add(repo.language);
    });
    return Array.from(langs);
  }, [repositories]);

  const filteredRepositories = useMemo(() => {
    return repositories.filter((repo) => {
      const matchesSearch =
        repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesLanguage =
        selectedLanguage === "ALL" || repo.language === selectedLanguage;

      return matchesSearch && matchesLanguage;
    });
  }, [repositories, searchQuery, selectedLanguage]);

  return (
    <section id="repositorios" className="py-16 sm:py-24 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-200/60 dark:border-zinc-800/60">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <Sparkles className="h-4 w-4" />
              <span>Sincronizado via GitHub API</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
              Repositórios & Projetos Vivos
            </h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 max-w-xl">
              Projetos de código aberto, utilitários, automações e sistemas desenvolvidos diretamente no meu perfil.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Buscar repositório ou tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-zinc-300 bg-white pl-9 pr-4 py-2 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 transition focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500"
            />
          </div>
        </div>

        {/* Filter Pills */}
        {availableLanguages.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 py-6">
            <span className="flex items-center gap-1 text-xs font-medium text-zinc-500 dark:text-zinc-400 mr-2">
              <Filter className="h-3.5 w-3.5" />
              Linguagem:
            </span>
            <button
              type="button"
              onClick={() => setSelectedLanguage("ALL")}
              className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                selectedLanguage === "ALL"
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
              }`}
            >
              Todos ({repositories.length})
            </button>
            {availableLanguages.map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setSelectedLanguage(lang)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                  selectedLanguage === lang
                    ? "bg-blue-600 text-white"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        )}

        {/* Repositories Grid */}
        {filteredRepositories.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredRepositories.map((repo) => (
              <RepositoryCard key={repo.id} repository={repo} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-zinc-300 dark:border-zinc-800 py-12 text-center">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Nenhum repositório encontrado com os critérios pesquisados.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
