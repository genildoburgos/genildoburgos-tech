import { NextResponse } from "next/server";
import { fetchGitHubRepositories } from "@/lib/github";

export const revalidate = 3600;

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET(): Promise<NextResponse> {
  const repos = await fetchGitHubRepositories("genildoburgos", 30);
  const siteUrl = "https://genildoburgos.tech";
  const now = new Date().toUTCString();

  const itemsXml = repos
    .map((repo) => {
      const pubDate = new Date(repo.updated_at).toUTCString();
      const description = repo.description || "Projeto de código aberto no GitHub.";
      const link = repo.html_url;

      return `
    <item>
      <title>${escapeXml(repo.name)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(description)}</description>
      ${repo.language ? `<category>${escapeXml(repo.language)}</category>` : ""}
    </item>`;
    })
    .join("");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Genildo Burgos — Projetos &amp; Repositórios Open Source</title>
    <link>${siteUrl}</link>
    <description>Feed oficial dos repositórios e projetos atualizados de Genildo Burgos (@genildoburgos).</description>
    <language>pt-BR</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
    ${itemsXml}
  </channel>
</rss>`;

  return new NextResponse(rssFeed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
