import "./App.css";
import Nav from "./components/nav/Nav";
import Header from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Nav />
      <div className="space-y-16">
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
