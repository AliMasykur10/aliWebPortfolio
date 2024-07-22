import Navbar from "../../molecules/navbar/navbar";
import About from "../../organisms/about/about";
import Home from "../../organisms/home/home";

function MainPage() {
  return (
    <div className="container px-20 mx-auto">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default MainPage;
