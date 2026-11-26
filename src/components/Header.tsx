import Link from "next/link";
import { Star, GitBranch, Code2 } from "lucide-react";
import { GitHubIcon } from "@/components/icons";

interface HeaderProps {
  totalStars: number;
  publicRepos: number;
}

export function Header({ totalStars, publicRepos }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80 transition-colors">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand / Logo */}
        <Link href="#inicio" className="group flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 text-white shadow-sm ring-1 ring-zinc-700/50 group-hover:scale-105 transition-all dark:bg-zinc-100 dark:text-zinc-900">
            <Code2 className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-zinc-900 dark:text-zinc-100 text-sm sm:text-base">
              genildoburgos<span className="text-blue-600 dark:text-blue-400">.tech</span>
            </span>
            <span className="hidden text-[11px] text-zinc-500 sm:inline-block">
              Portfólio & Código Aberto
            </span>
          </div>
        </Link>

        {/* Traditional Navigation Links */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-300 md:flex">
          <Link href="#inicio" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Início
          </Link>
          <Link href="#repositorios" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Repositórios
          </Link>
          <Link href="#tecnologias" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Tecnologias
          </Link>
          <Link href="#sobre" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Sobre
          </Link>
          <Link href="#contato" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Contato
          </Link>
        </nav>

        {/* Live GitHub Stats Badge */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
            <span className="flex items-center gap-1 font-semibold text-zinc-800 dark:text-zinc-200">
              <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
              {totalStars}
            </span>
            <span className="text-zinc-400">|</span>
            <span className="flex items-center gap-1">
              <GitBranch className="h-3.5 w-3.5 text-blue-500" />
              {publicRepos} repos
            </span>
          </div>

          <a
            href="https://github.com/genildoburgos"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg bg-zinc-900 px-3 py-1.5 text-xs font-semibold text-white transition-all hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 shadow-sm"
          >
            <GitHubIcon className="h-4 w-4" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
}
