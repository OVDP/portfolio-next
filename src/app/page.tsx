import About from "./components/about";
import Projects from "./components/project";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Projectsv2 from "./components/project/main_projects";
export default function Home() {
  return (
    <>
      <About />
      <Projectsv2 />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
