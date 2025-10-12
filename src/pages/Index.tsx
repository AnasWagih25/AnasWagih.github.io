import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundOrbs from "@/components/BackgroundOrbs";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onLoadComplete={() => setIsLoading(false)} />}
      <div className={`min-h-screen relative transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <BackgroundOrbs />
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
