import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Journey from "../components/journey/Journey";
import Certifications from "../components/certifications/Certifications";
import ResumeSection from "../components/resume/ResumeSection";
import Contact from "../components/contact/Contact";
import Stats from "../components/stats/Stats";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Skills />
      <Projects />
      <Journey />
      <Certifications />
      <ResumeSection />
      <Contact />
    </>
  );
};

export default Home;