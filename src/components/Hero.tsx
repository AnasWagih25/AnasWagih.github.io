import { ArrowDown, Github, Linkedin, Mail, Phone, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { useRipple } from "@/hooks/useRipple";
import { useMagnetic } from "@/hooks/useMagnetic";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Hero = () => {
  const createRipple = useRipple();
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollReveal();
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollReveal();
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
      {/* Central glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-30 blur-3xl animate-pulse">
        <div className="w-full h-full rounded-full" style={{
          background: "radial-gradient(ellipse, hsl(270, 100%, 65%) 0%, hsl(250, 100%, 70%) 40%, transparent 70%)"
        }} />
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div>
          <div className="inline-block glass-strong px-6 py-3 mb-8 glow-on-hover border-4 border-primary shimmer-effect">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary animate-pixel-bounce" />
              <p className="text-sm font-pixel text-primary">
                &gt;&gt; WELCOME
              </p>
            </div>
          </div>
          
          <h1 
            ref={titleRef}
            className={`text-3xl md:text-4xl lg:text-5xl font-pixel mb-8 leading-tight transition-all duration-1000 px-4 ${
              titleVisible ? 'reveal-up opacity-100' : 'opacity-0'
            }`}
          >
            <span className="gradient-text inline-block hover:scale-105 transition-all">
              Anas M. Wagih
            </span>
          </h1>
          
          <h2 
            ref={subtitleRef}
            className={`text-base md:text-xl font-sans mb-8 text-secondary transition-all duration-1000 px-4 ${
              subtitleVisible ? 'reveal-up opacity-100' : 'opacity-0'
            }`}
          >
            &gt; Electronics & Embedded Systems Engineer
          </h2>
          
          
          <div 
            ref={buttonRef}
            className={`flex flex-wrap gap-4 justify-center mb-12 transition-all duration-1000 ${
              buttonVisible ? 'reveal-scale opacity-100' : 'opacity-0'
            }`}
          >
            <Button
              size="lg"
              className="glass-strong hover:scale-110 transition-all group relative overflow-hidden glow-on-hover border-4 border-primary font-pixel"
              onClick={(e) => {
                createRipple(e);
                scrollToSection("projects");
              }}
            >
              &gt; VIEW WORK
              <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 animate-pixel-bounce transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass border-4 border-secondary hover:scale-110 transition-all relative overflow-hidden glow-on-hover hover:border-accent font-pixel"
              onClick={(e) => {
                createRipple(e);
                scrollToSection("contact");
              }}
            >
              &gt; CONTACT
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <a
              href="https://github.com/AnasWagih25"
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-6 py-3 border-4 border-primary hover:scale-110 transition-all glow-on-hover flex items-center gap-2 relative overflow-hidden group"
              onClick={(e) => createRipple(e)}
            >
              <Github className="w-5 h-5" />
              <span className="font-sans text-lg">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/AnasWagih"
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-6 py-3 border-4 border-secondary hover:scale-110 transition-all glow-on-hover flex items-center gap-2 relative overflow-hidden group"
              onClick={(e) => createRipple(e)}
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-sans text-lg">LinkedIn</span>
            </a>
            <a
              href="mailto:anaswagih35@gmail.com"
              className="glass px-6 py-3 border-4 border-accent hover:scale-110 transition-all glow-on-hover flex items-center gap-2 relative overflow-hidden group"
              onClick={(e) => createRipple(e)}
            >
              <Mail className="w-5 h-5" />
              <span className="font-sans text-lg">Email</span>
            </a>
            <a
              href="tel:+201020065576"
              className="glass px-6 py-3 border-4 border-primary hover:scale-110 transition-all glow-on-hover flex items-center gap-2 relative overflow-hidden group"
              onClick={(e) => createRipple(e)}
            >
              <Phone className="w-5 h-5" />
              <span className="font-sans text-lg">Call</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
