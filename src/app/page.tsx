import About from "./components/about";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Projects from "./components/project/main_projects";
export default function Home() {
  return (
    <>
      <About />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
