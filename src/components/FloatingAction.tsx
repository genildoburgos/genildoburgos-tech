"use client";

import { useState, useEffect } from "react";
import { ArrowUp, Mail, Check } from "lucide-react";

export function FloatingAction() {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("gnldburgos@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Ações rápidas flutuantes"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 animate-fade-in"
    >
      {/* Copy Email Button */}
      <button
        type="button"
        onClick={copyEmail}
        aria-label="Copiar e-mail de contato"
        className="group relative flex h-10 items-center gap-2 rounded-full border border-zinc-200 bg-white/90 px-3.5 text-xs font-semibold text-zinc-800 shadow-md backdrop-blur-md transition hover:bg-zinc-100 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-200 dark:hover:bg-zinc-800"
      >
        {copied ? (
          <>
            <Check className="h-4 w-4 text-emerald-500" />
            <span className="text-emerald-600 dark:text-emerald-400">E-mail copiado!</span>
          </>
        ) : (
          <>
            <Mail className="h-4 w-4 text-blue-500" />
            <span className="hidden sm:inline">Copiar E-mail</span>
          </>
        )}
      </button>

      {/* Scroll to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Voltar ao topo da página"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white/90 text-zinc-700 shadow-md backdrop-blur-md transition hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-200 dark:hover:bg-zinc-800"
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </aside>
  );
}
