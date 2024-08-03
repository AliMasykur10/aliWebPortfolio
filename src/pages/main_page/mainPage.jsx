import Navbar from "../../molecules/navbar/navbar";
import About from "../../organisms/about/about";
import Contact from "../../organisms/contact/contact";
import Experience from "../../organisms/experience/Experience";
import Home from "../../organisms/home/home";
import Projects from "../../organisms/projects/projects";

function MainPage() {
  return (
    <div className="container px-20 mx-auto">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default MainPage;
