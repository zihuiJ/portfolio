import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-start gap-12">
      <Navbar />
      <Hero />
    </div>
  );
}
