import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Genildo Burgos | Engenharia de Software & Projetos Open Source",
  description:
    "Portal oficial e portfólio de Genildo Burgos. Soluções em desenvolvimento de software, automações, inteligência artificial e repositórios vivos conectados ao GitHub.",
  keywords: [
    "Genildo Burgos",
    "Engenharia de Software",
    "Open Source",
    "Next.js",
    "Python",
    "TypeScript",
    "Inteligência Artificial",
    "genildoburgos.tech",
  ],
  authors: [{ name: "Genildo Burgos", url: "https://genildoburgos.tech" }],
  creator: "Genildo Burgos",
  metadataBase: new URL("https://genildoburgos.tech"),
  openGraph: {
    title: "Genildo Burgos | Engenharia de Software & Projetos Open Source",
    description:
      "Repositórios vivos, estatísticas e soluções de tecnologia criadas por Genildo Burgos.",
    url: "https://genildoburgos.tech",
    siteName: "Genildo Burgos Tech",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Genildo Burgos | Engenharia de Software",
    description: "Projetos open source e tecnologias por Genildo Burgos.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white font-sans text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-50 flex flex-col selection:bg-blue-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
