import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MicrosoftClarity } from "@/components/MicrosoftClarity";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
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
  alternates: {
    canonical: "https://genildoburgos.tech",
    types: {
      "application/rss+xml": "https://genildoburgos.tech/feed.xml",
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: {
      ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
        ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
        : {}),
    },
  },
  openGraph: {
    title: "Genildo Burgos | Engenharia de Software & Projetos Open Source",
    description:
      "Repositórios vivos, estatísticas e soluções de tecnologia criadas por Genildo Burgos.",
    url: "https://genildoburgos.tech",
    siteName: "Genildo Burgos Tech",
    locale: "pt_BR",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Genildo Burgos | Engenharia de Software",
    description: "Projetos open source e tecnologias por Genildo Burgos.",
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  dateCreated: "2026-11-25T00:00:00.000Z",
  dateModified: new Date().toISOString(),
  mainEntity: {
    "@type": "Person",
    name: "Genildo Burgos",
    alternateName: "genildoburgos",
    email: "mailto:gnldburgos@gmail.com",
    jobTitle: "Software Engineer",
    description:
      "Desenvolvedor de Software focado em sistemas modernos, automações e Inteligência Artificial.",
    url: "https://genildoburgos.tech",
    image: "https://avatars.githubusercontent.com/u/136193531?v=4",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Pernambuco",
      addressCountry: "BR",
    },
    sameAs: [
      "https://github.com/genildoburgos",
      "https://www.linkedin.com/in/genildoburgos",
      "https://genildoburgos.tech",
    ],
    knowsAbout: [
      "Software Engineering",
      "Open Source",
      "Next.js",
      "TypeScript",
      "Python",
      "Artificial Intelligence",
      "LLMs & Autonomous Agents",
      "Tailwind CSS",
      "ERP Systems",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white font-sans text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-50 flex flex-col selection:bg-blue-500 selection:text-white`}
      >
        {children}
        <MicrosoftClarity />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
