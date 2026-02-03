import Hero from "@/components/Hero";
import FreeTools from "@/components/FreeTools";
import Projects from "@/components/Projects";
import About from "@/components/About";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FreeTools />
      <Projects />
      <About />
      <SocialLinks />
      <Footer />
    </div>
  );
}
