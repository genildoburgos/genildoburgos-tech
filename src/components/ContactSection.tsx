import { Mail, MessageSquare, ExternalLink } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export function ContactSection() {
  const contacts = [
    {
      title: "GitHub",
      description: "Acompanhe meus commits, pull requests e repositórios.",
      value: "@genildoburgos",
      link: "https://github.com/genildoburgos",
      icon: <GitHubIcon className="h-5 w-5" />,
      color: "hover:border-zinc-500",
    },
    {
      title: "LinkedIn",
      description: "Conexões profissionais e networking.",
      value: "Genildo Burgos",
      link: "https://www.linkedin.com/in/genildoburgos",
      icon: <LinkedInIcon className="h-5 w-5 text-blue-600" />,
      color: "hover:border-blue-500",
    },
    {
      title: "Email",
      description: "Para propostas, consultoria e parcerias técnicas.",
      value: "gnldburgos@gmail.com",
      link: "mailto:gnldburgos@gmail.com",
      icon: <Mail className="h-5 w-5 text-emerald-600" />,
      color: "hover:border-emerald-500",
    },
    {
      title: "WhatsApp / Mensagem",
      description: "Contato direto para projetos e conversas rápidas.",
      value: "Enviar Mensagem",
      link: "https://wa.me/5587981000000", // Placeholder editável
      icon: <MessageSquare className="h-5 w-5 text-teal-600" />,
      color: "hover:border-teal-500",
    },
  ];

  return (
    <section id="contato" className="py-16 sm:py-24 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Conexão & Oportunidades
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
            Vamos Construir Algo Juntos?
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Estou sempre aberto a novos desafios de engenharia, oportunidades e trocas de ideias sobre tecnologia.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contacts.map((item) => (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/60 ${item.color}`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-800">
                    {item.icon}
                  </div>
                  <ExternalLink className="h-4 w-4 text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition" />
                </div>
                <h3 className="mt-4 font-bold text-zinc-900 dark:text-zinc-100 text-base">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-zinc-100 dark:border-zinc-800/80">
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:underline">
                  {item.value} &rarr;
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
