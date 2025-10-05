import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
      {/* Animated background orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="inline-block glass px-6 py-2 rounded-full mb-6">
            <p className="text-sm font-medium text-muted-foreground">Welcome to my portfolio</p>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 leading-tight">
            <span className="gradient-text">Anas M. Wagih</span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-display font-semibold mb-6 text-foreground/90">
            Electronics & Embedded Systems Engineer
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            B.Sc. Student in Electronics and Communication Engineering, specializing in{" "}
            <span className="gradient-text-secondary font-semibold">IoT, AI, and Embedded Systems</span>.
            Passionate about building intelligent, connected devices that bridge the digital and physical worlds.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="glass-strong hover:scale-105 transition-transform group"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
              <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass border-2 hover:scale-105 transition-transform"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <a
              href="https://github.com/AnasWagih25"
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-6 py-3 rounded-full hover:scale-110 transition-all hover:animate-glow flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/AnasWagih"
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-6 py-3 rounded-full hover:scale-110 transition-all hover:animate-glow flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-medium">LinkedIn</span>
            </a>
            <a
              href="mailto:anaswagih35@gmail.com"
              className="glass px-6 py-3 rounded-full hover:scale-110 transition-all hover:animate-glow flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">Email</span>
            </a>
            <a
              href="tel:+201020065576"
              className="glass px-6 py-3 rounded-full hover:scale-110 transition-all hover:animate-glow flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">Call</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
