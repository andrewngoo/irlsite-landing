import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { AboutUs } from "@/components/sections/AboutUs";
import { Careers } from "@/components/sections/Careers";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-accent-pink/30 selection:text-white">
      <Navbar />
      <Hero />
      <AboutUs />
      <Careers />
      <Footer />
    </main>
  );
}
