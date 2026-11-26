import { GitHubProfileStats, GitHubRepository, GitHubUser } from "@/types/github";

export const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "genildoburgos";

const DEFAULT_USER_FALLBACK: GitHubUser = {
  login: "genildoburgos",
  id: 136193531,
  avatar_url: "https://avatars.githubusercontent.com/u/136193531?v=4",
  html_url: "https://github.com/genildoburgos",
  name: "Genildo Burgos",
  bio: "Desenvolvedor de Software & Entusiasta de Inteligência Artificial",
  location: "Pernambuco, Brasil",
  company: null,
  blog: "https://genildoburgos.tech",
  public_repos: 25,
  followers: 12,
  following: 15,
  created_at: "2023-06-11T00:00:00Z",
  updated_at: new Date().toISOString(),
};

const DEFAULT_REPOS_FALLBACK: GitHubRepository[] = [
  {
    id: 1,
    name: "modelos-curriculo-ats-brasil",
    full_name: "genildoburgos/modelos-curriculo-ats-brasil",
    description: "Modelos de currículo gratuitos e otimizados para sistemas ATS (Gupy, Kenoby, Workday) no Brasil. 100% testados para triagem automatizada.",
    html_url: "https://github.com/genildoburgos/modelos-curriculo-ats-brasil",
    stargazers_count: 5,
    forks_count: 1,
    language: "Markdown",
    updated_at: new Date().toISOString(),
    topics: ["carreira", "ats", "curriculo", "open-source"],
    homepage: null,
    fork: false,
    archived: false,
  },
  {
    id: 2,
    name: "petflow-erp",
    full_name: "genildoburgos/petflow-erp",
    description: "PetFlow ERP — Sistema Integrado de Gestão Pet & Vet (Sistemas de Informação - UFAPE)",
    html_url: "https://github.com/genildoburgos/petflow-erp",
    stargazers_count: 2,
    forks_count: 0,
    language: "Python",
    updated_at: new Date().toISOString(),
    topics: ["erp", "python", "fastapi", "ufape"],
    homepage: null,
    fork: false,
    archived: false,
  },
  {
    id: 3,
    name: "charles",
    full_name: "genildoburgos/charles",
    description: "Pet virtual de desktop para Windows, com rede neural pulsada, emoções e personalidade que evolui localmente sem depender da nuvem.",
    html_url: "https://github.com/genildoburgos/charles",
    stargazers_count: 3,
    forks_count: 0,
    language: "Python",
    updated_at: new Date().toISOString(),
    topics: ["ai", "neural-network", "desktop-pet", "python"],
    homepage: null,
    fork: false,
    archived: false,
  },
];

function getHeaders(): HeadersInit {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "GenildoBurgos-Tech-Portfolio",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  return headers;
}

export async function fetchGitHubUser(username = GITHUB_USERNAME): Promise<GitHubUser> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: getHeaders(),
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.warn(`[GitHub API] Failed to fetch user ${username}: ${response.statusText}`);
      return DEFAULT_USER_FALLBACK;
    }

    const data: GitHubUser = await response.json();
    return data;
  } catch (error) {
    console.error("[GitHub API] Error fetching user data:", error);
    return DEFAULT_USER_FALLBACK;
  }
}

export async function fetchGitHubRepositories(
  username = GITHUB_USERNAME,
  perPage = 30
): Promise<GitHubRepository[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=${perPage}&direction=desc`,
      {
        headers: getHeaders(),
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      console.warn(`[GitHub API] Failed to fetch repos for ${username}: ${response.statusText}`);
      return DEFAULT_REPOS_FALLBACK;
    }

    const repos: GitHubRepository[] = await response.json();
    return Array.isArray(repos) ? repos : DEFAULT_REPOS_FALLBACK;
  } catch (error) {
    console.error("[GitHub API] Error fetching repositories:", error);
    return DEFAULT_REPOS_FALLBACK;
  }
}

export async function getGitHubProfileData(username = GITHUB_USERNAME): Promise<GitHubProfileStats> {
  const [user, repositories] = await Promise.all([
    fetchGitHubUser(username),
    fetchGitHubRepositories(username),
  ]);

  const totalStars = repositories.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0);
  const totalForks = repositories.reduce((acc, repo) => acc + (repo.forks_count || 0), 0);

  const languageMap = new Map<string, number>();
  repositories.forEach((repo) => {
    if (repo.language) {
      languageMap.set(repo.language, (languageMap.get(repo.language) || 0) + 1);
    }
  });

  const languages = Array.from(languageMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);

  return {
    user,
    repositories,
    totalStars,
    totalForks,
    languages,
  };
}
