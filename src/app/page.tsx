import { getGitHubProfileData } from "@/lib/github";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { RepositorySection } from "@/components/RepositorySection";
import { TechStack } from "@/components/TechStack";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingAction } from "@/components/FloatingAction";

// Revalidate once every hour for fresh GitHub statistics and repository updates
export const revalidate = 3600;

export default async function HomePage() {
  const { user, repositories, totalStars, totalForks } = await getGitHubProfileData();

  return (
    <div className="flex min-h-screen flex-col">
      <Header totalStars={totalStars} publicRepos={user.public_repos} />
      
      <main className="flex-1">
        <Hero user={user} totalStars={totalStars} totalForks={totalForks} />
        <RepositorySection repositories={repositories} />
        <TechStack />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer
        totalStars={totalStars}
        totalForks={totalForks}
        publicRepos={user.public_repos}
      />

      <FloatingAction />
    </div>
  );
}
