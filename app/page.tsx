
// import Image from "next/image";
import Hero from "@/Components/Hero"
import About from "@/Components/About"
import Contact from "@/Components/Contact"
import Projects from "@/Components/Projects"
import Skills from "@/Components/Skills"
import Footer from "@/Components/Footer"

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>

  );
}
