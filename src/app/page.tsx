import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import YouTube from "@/components/YouTube";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen relative">
        <Hero />
      <Services />
      <TechStack />
      <Portfolio />
      <Team />
      <YouTube />
      <BlogPreview />
      <Contact />
      </main>
      <Footer />
    </>
  );
}
