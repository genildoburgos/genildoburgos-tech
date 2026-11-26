import Link from "next/link";
import { Star, GitFork, FolderGit2, Code2, Heart, ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/icons";

interface FooterProps {
  totalStars: number;
  totalForks: number;
  publicRepos: number;
}

export function Footer({ totalStars, totalForks, publicRepos }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200/80 bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-950 transition-colors">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900">
                <Code2 className="h-4 w-4" />
              </div>
              <span className="font-bold text-base tracking-tight text-zinc-900 dark:text-zinc-100">
                genildoburgos<span className="text-blue-600 dark:text-blue-400">.tech</span>
              </span>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Portal e portfólio oficial de Genildo Burgos. Construído em Next.js com foco em alta performance,
              sincronização direta com a API do GitHub e arquitetura open source.
            </p>
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Sistemas & API Operacionais</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs font-medium text-zinc-600 dark:text-zinc-400">
              <li>
                <Link href="#inicio" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#repositorios" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Repositórios Vivos
                </Link>
              </li>
              <li>
                <Link href="#tecnologias" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Stack Tecnológica
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Sobre a Trajetória
                </Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Falar Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Live GitHub Ecosystem Metrics */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              Métricas do GitHub
            </h4>
            <div className="space-y-2.5 text-xs text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center justify-between rounded-lg border border-zinc-200/80 bg-white px-3 py-2 dark:border-zinc-800 dark:bg-zinc-900/60">
                <span className="flex items-center gap-1.5">
                  <FolderGit2 className="h-3.5 w-3.5 text-blue-500" />
                  Repositórios
                </span>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">{publicRepos}</span>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-zinc-200/80 bg-white px-3 py-2 dark:border-zinc-800 dark:bg-zinc-900/60">
                <span className="flex items-center gap-1.5">
                  <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500/20" />
                  Estrelas Coletivas
                </span>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">{totalStars}</span>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-zinc-200/80 bg-white px-3 py-2 dark:border-zinc-800 dark:bg-zinc-900/60">
                <span className="flex items-center gap-1.5">
                  <GitFork className="h-3.5 w-3.5 text-purple-500" />
                  Forks Ativos
                </span>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">{totalForks}</span>
              </div>
            </div>
          </div>

          {/* Column 4: Open Source & Repository Link */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              Código Aberto
            </h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              O código deste projeto é 100% aberto. Sinta-se à vontade para inspecionar, bifurcar ou deixar uma estrela!
            </p>
            <a
              href="https://github.com/genildoburgos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-300 bg-white px-3.5 py-2 text-xs font-semibold text-zinc-800 shadow-sm transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              <GitHubIcon className="h-4 w-4" />
              <span>Ver no GitHub</span>
              <ArrowUpRight className="h-3 w-3 text-zinc-400" />
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Credits */}
        <div className="mt-12 pt-8 border-t border-zinc-200/70 dark:border-zinc-800/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <p>
            &copy; {currentYear} <span className="font-semibold text-zinc-700 dark:text-zinc-300">Genildo Burgos</span>. Licença MIT.
          </p>
          <div className="flex items-center gap-1">
            <span>Desenvolvido com Next.js &</span>
            <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" />
            <span>conectado ao domínio genildoburgos.tech</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
