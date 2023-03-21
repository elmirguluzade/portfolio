import "./App.scss";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import AnchorLink from "react-anchor-link-smooth-scroll";

function App() {
  return (
    <>
      <div className="header" id="top">
        <Nav />
        <About />
      </div>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <div className="goTop">
        <AnchorLink href="#top">
          <BsFillArrowUpCircleFill />
        </AnchorLink>
      </div>
    </>
  );
}

export default App;
