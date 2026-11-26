import Link from "next/link";
import { Terminal, ArrowLeft, Code2 } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-4 py-16 text-zinc-100 font-sans selection:bg-blue-500 selection:text-white">
      <div className="w-full max-w-lg rounded-2xl border border-zinc-800 bg-zinc-900/90 p-8 shadow-2xl backdrop-blur-md">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500">
            <Terminal className="h-3.5 w-3.5" />
            <span>bash: 404_not_found</span>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="my-8 space-y-4 font-mono">
          <div className="text-sm text-zinc-400">
            <span className="text-blue-400">genildo@tech</span>:<span className="text-emerald-400">~</span>$ curl -I https://genildoburgos.tech/requested-url
          </div>
          <div className="rounded-lg bg-zinc-950/70 p-4 border border-zinc-800/80 text-xs sm:text-sm text-zinc-300 space-y-1">
            <p className="text-red-400 font-bold">HTTP/2 404 Not Found</p>
            <p className="text-zinc-500">status: error</p>
            <p className="text-zinc-500">message: O recurso solicitado não existe ou foi movido.</p>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-zinc-800/80">
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <Code2 className="h-4 w-4 text-blue-500" />
            <span>genildoburgos.tech</span>
          </div>

          <Link
            href="/"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Retornar ao Início</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
