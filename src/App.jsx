import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <section id="services">
          <Services />
        </section>
        <section id="about">
          
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}