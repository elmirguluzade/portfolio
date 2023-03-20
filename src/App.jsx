import "./App.scss";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <div className="header">
        <Nav />
        <About />
      </div>
      <Skills />
      <Projects />
    </>
  );
}

export default App;
