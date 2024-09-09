import Navbar from "./components/navbar";
import About from "./components/about";
import Projects from "./components/project";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Projectsv2 from "./components/project/main_projects";
export default function Home() {
  return (
    <>
      <div
        id="main-background"
        className=""
        style={{
          background:
            'url("assets/img/openart-make-an-minimalistic-background-of-a-red-horizon-using-the-colors-red-yellow-and-orange_k32-AOTo_upscaled.png") center / contain',
          "--bs-body-color": "#212529",
          "--bs-dark": "var(--bs-body-bg)",
          "--bs-dark-rgb": "255,255,255",
          "--bs-light": "#212529",
          "--bs-light-rgb": "33,37,41",
          "background-attachment": "fixed",
          "background-size": "cover",
        }}
      >
        <Navbar />
        <About />
        <Projectsv2 />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div> 
    </>
  );
}
