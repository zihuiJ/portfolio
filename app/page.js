import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

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
    </>
  );
}
