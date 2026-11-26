import { Terminal, Lightbulb, Compass, Award } from "lucide-react";

export function AboutSection() {
  return (
    <section id="sobre" className="py-16 sm:py-24 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Main narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Sobre Mim
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
                Engenharia de Software com Propósito & Código Limpo
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              <p>
                Sou desenvolvedor de software baseado em Pernambuco, com forte dedicação à construção de ferramentas
                reais, sistemas de gestão integrados (ERPs), pipelines de automação e inteligência artificial aplicada.
              </p>
              <p>
                Acredito no poder do ecossistema de código aberto (Open Source) como a melhor forma de compartilhar
                conhecimento, criar impacto e acelerar o desenvolvimento de soluções robustas. Todos os projetos listados
                neste portal refletem desafios práticos que resolvi — desde modelos otimizados para triagem de currículos
                em ATS brasileiros até sistemas de redes neurais pulsadas e simulação.
              </p>
              <p>
                Este site (<span className="font-mono text-zinc-900 dark:text-zinc-100">genildoburgos.tech</span>) foi
                concebido para ser minimalista, direto ao ponto, extremamente rápido e transparente, atualizando-se
                automaticamente conforme novos repositórios e contribuições são publicados.
              </p>
            </div>
          </div>

          {/* Pillars & Values */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
            <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
                  <Terminal className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">
                    Developer-First & Pragmático
                  </h3>
                  <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                    Foco na resolução do problema com arquitetura sólida, sem complexidade acidental.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">
                    Inovação com IA Prática
                  </h3>
                  <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                    Utilização e orquestração de LLMs e modelos neurais para otimizar fluxos de trabalho do mundo real.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-purple-50 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">
                    Compromisso Open Source
                  </h3>
                  <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                    Código limpo, documentado e disponível para a comunidade bifurcar e contribuir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
