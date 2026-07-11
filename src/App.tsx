import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Skills from "./sections/Skills";
import Services from "./sections/Services";
import Contact from "./sections/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onDone={() => setLoading(false)} />}
      <div
        className={`min-h-screen bg-paper text-ink overflow-x-hidden
          transition-opacity duration-500
          ${loading ? "opacity-0" : "opacity-100"}`}
      >
        <Navbar />
        <main className="pt-24">
          <Hero />
          <About />
          <Projects />
          <Certifications />
          <Skills />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}