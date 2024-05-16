import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col justify-start">
        <Navbar />
        <Hero />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Projects />
      </div>
    </>
  );
}
