import NavBar from '@/components/Nav';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/Skills';
import PortfolioSection from '@/components/Portfolio';
import Contact from '@/components/Contact';
import ExperienceSection from '@/components/LandingPage';

export default function HomePage() {
  return (
    <div className="container mx-auto px-6 space-y-24">
      <NavBar />

      <section id="hero">
        <HeroSection />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section>
        <ExperienceSection />
      </section>

      <section id="portfolio">
        <PortfolioSection />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
