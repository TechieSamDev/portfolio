import Nav from "./components/nav/Nav";
import Header from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster
        limit={3}
        position="top-right"
        toastOptions={{
          className:
            "border border-secondary bg-white text-gray-900 rounded shadow-md ",
          style: {
            padding: "12px 16px",
            fontSize: "0.875rem",
          },
          duration: 4000,
          success: {
            iconTheme: {
              // primary: "#0E162A",
              secondary: "white",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "white",
            },
          },
        }}
      />
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
