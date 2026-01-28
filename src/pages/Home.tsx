import { HeroSection } from '../components/HeroSection';
import { TechStack } from '../components/TechStack';
import { WisdomSection } from '../components/WisdomSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { FoundationsSection } from '../components/FoundationsSection';
import { ContactSection } from '../components/ContactSection';

export function Home() {
  return (
    <>
      <HeroSection />
      <TechStack />
      <WisdomSection />
      <ProjectsSection />
      <FoundationsSection />
      <ContactSection />
    </>
  );
}
