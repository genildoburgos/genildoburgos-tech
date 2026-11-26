import Image from "next/image";
import Link from "next/link";
import { GitHubUser } from "@/types/github";
import { MapPin, FolderGit2, Star, GitFork, Users, ArrowRight, ExternalLink } from "lucide-react";

interface HeroProps {
  user: GitHubUser;
  totalStars: number;
  totalForks: number;
}

export function Hero({ user, totalStars, totalForks }: HeroProps) {
  return (
    <section id="inicio" className="pt-10 pb-16 sm:pt-16 sm:pb-24 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Main Info (Left) */}
          <div className="lg:col-span-8 flex flex-col items-start space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              Disponível para novos projetos e colaborações
            </div>

            {/* Name and Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
                Olá, eu sou <span className="text-blue-600 dark:text-blue-400">{user.name || "Genildo Burgos"}</span>
              </h1>
              <p className="text-lg font-medium text-zinc-600 dark:text-zinc-300 sm:text-xl">
                Desenvolvedor de Software & Criador de Soluções Inteligentes
              </p>
            </div>

            {/* Bio and Description */}
            <p className="max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Foco no desenvolvimento de aplicações modernas, sistemas escaláveis e ferramentas orientadas a
              produtividade e inteligência artificial. Este portal é 100% aberto ao ecossistema open source e
              conectado diretamente com os meus repositórios ativos no GitHub.
            </p>

            {/* Location & Tags */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-zinc-500 dark:text-zinc-400">
              {user.location && (
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-zinc-400" />
                  <span>{user.location}</span>
                </div>
              )}
              <div className="h-3 w-px bg-zinc-300 dark:bg-zinc-700" />
              <span>Full-Stack & Automações</span>
              <div className="h-3 w-px bg-zinc-300 dark:bg-zinc-700" />
              <span>Engenharia de Software</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="#repositorios"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <span>Ver Repositórios</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 shadow-sm"
              >
                <span>Perfil no GitHub</span>
                <ExternalLink className="h-4 w-4" />
              </a>
              <Link
                href="#contato"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 transition"
              >
                Falar Comigo
              </Link>
            </div>
          </div>

          {/* Profile Card & Avatar (Right) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-20 blur-md group-hover:opacity-40 transition duration-500"></div>
              <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-xl dark:border-zinc-800 dark:bg-zinc-900/90 text-center w-full max-w-sm">
                <div className="mx-auto relative h-36 w-36 overflow-hidden rounded-full border-4 border-zinc-100 shadow-inner dark:border-zinc-800">
                  <Image
                    src={user.avatar_url}
                    alt={user.name || "Genildo Burgos"}
                    fill
                    sizes="(max-width: 768px) 144px, 144px"
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="mt-4 font-bold text-lg text-zinc-900 dark:text-zinc-100">
                  @{user.login}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  Engenharia & Soluções Digitais
                </p>
                <div className="mt-4 inline-block rounded-md bg-zinc-100 px-3 py-1 text-xs font-mono text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                  genildoburgos.tech
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live GitHub Metric Cards */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-4 transition-all hover:bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:hover:bg-zinc-900/80">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <FolderGit2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  {user.public_repos}
                </p>
                <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                  Repositórios Públicos
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-4 transition-all hover:bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:hover:bg-zinc-900/80">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                <Star className="h-5 w-5 fill-amber-500/20" />
              </div>
              <div>
                <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  {totalStars}
                </p>
                <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                  Estrelas Conquistadas
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-4 transition-all hover:bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:hover:bg-zinc-900/80">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
                <GitFork className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  {totalForks}
                </p>
                <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                  Forks de Projetos
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-4 transition-all hover:bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:hover:bg-zinc-900/80">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  {user.followers}
                </p>
                <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                  Seguidores no GitHub
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
