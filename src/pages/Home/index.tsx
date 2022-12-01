import { About } from "../../shared/components/About";
import { Contact } from "../../shared/components/Contact";
import { Hero } from "../../shared/components/Hero";
import { Projects } from "../../shared/components/Projects";
import { VParticles } from "../../shared/components/VParticles";

export const Home = () => {
  return (
    <>
      <VParticles />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
};
