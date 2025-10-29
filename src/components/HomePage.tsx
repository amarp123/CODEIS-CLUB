import { Hero } from "./Hero";
import { About } from "./About";
import { Events } from "./Events";
import { Hackathon } from "./Hackathon";
import { Team } from "./Team";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

interface HomePageProps {
  onNavigateToInvision: () => void;
}

export function HomePage({ onNavigateToInvision }: HomePageProps) {
  return (
    <>
      <Hero />
      <About />
      <Events />
      <Hackathon onNavigateToInvision={onNavigateToInvision} />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}
