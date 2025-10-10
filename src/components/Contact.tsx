import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useRipple } from "@/hooks/useRipple";
import { useMagnetic } from "@/hooks/useMagnetic";

const Contact = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const createRipple = useRipple();
  const magnetic1 = useMagnetic<HTMLAnchorElement>(0.2);
  const magnetic2 = useMagnetic<HTMLAnchorElement>(0.2);
  const magnetic3 = useMagnetic<HTMLAnchorElement>(0.2);
  const magnetic4 = useMagnetic<HTMLAnchorElement>(0.2);
  return (
    <section id="contact" className="py-20 px-4 relative">
      {/* Section glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 
          ref={headerRef}
          className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-center transition-all duration-1000 ${
            headerVisible ? 'reveal-up opacity-100' : 'opacity-0'
          }`}
        >
          <span className="gradient-text inline-flex items-center gap-3">
            <MessageCircle className="w-10 h-10 animate-pulse" />
            Let's Connect
          </span>
        </h2>
        
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto opacity-90">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        
        <div className="glass-strong rounded-3xl p-8 md:p-12 border border-primary/10 glow-on-hover">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <a
              ref={magnetic1.ref}
              onMouseMove={magnetic1.handleMouseMove}
              onMouseLeave={magnetic1.handleMouseLeave}
              href="mailto:anaswagih35@gmail.com"
              className="flex items-center gap-4 p-6 glass rounded-2xl interactive-hover glow-on-hover group border border-white/10 hover:border-primary/30 magnetic-hover relative overflow-hidden"
              onClick={(e) => createRipple(e)}
            >
              <div className="p-4 rounded-xl bg-primary/20 group-hover:bg-primary/40 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1 font-medium">Email</p>
                <p className="font-bold text-lg">anaswagih35@gmail.com</p>
              </div>
            </a>
            
            <a
              ref={magnetic2.ref}
              onMouseMove={magnetic2.handleMouseMove}
              onMouseLeave={magnetic2.handleMouseLeave}
              href="tel:+201020065576"
              className="flex items-center gap-4 p-6 glass rounded-2xl interactive-hover glow-on-hover group border border-white/10 hover:border-secondary/30 magnetic-hover relative overflow-hidden"
              onClick={(e) => createRipple(e)}
            >
              <div className="p-4 rounded-xl bg-secondary/20 group-hover:bg-secondary/40 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Phone className="w-7 h-7 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1 font-medium">Phone</p>
                <p className="font-bold text-lg">+20 102 006 5576</p>
              </div>
            </a>
            
            <a
              ref={magnetic3.ref}
              onMouseMove={magnetic3.handleMouseMove}
              onMouseLeave={magnetic3.handleMouseLeave}
              href="https://www.linkedin.com/in/anas-wagih-9423a7232/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 glass rounded-2xl interactive-hover glow-on-hover group border border-white/10 hover:border-accent/30 magnetic-hover relative overflow-hidden"
              onClick={(e) => createRipple(e)}
            >
              <div className="p-4 rounded-xl bg-accent/20 group-hover:bg-accent/40 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Linkedin className="w-7 h-7 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1 font-medium">LinkedIn</p>
                <p className="font-bold text-lg">AnasWagih</p>
              </div>
            </a>
            
            <a
              ref={magnetic4.ref}
              onMouseMove={magnetic4.handleMouseMove}
              onMouseLeave={magnetic4.handleMouseLeave}
              href="https://github.com/AnasWagih25"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 glass rounded-2xl interactive-hover glow-on-hover group border border-white/10 hover:border-primary/30 magnetic-hover relative overflow-hidden"
              onClick={(e) => createRipple(e)}
            >
              <div className="p-4 rounded-xl bg-primary/20 group-hover:bg-primary/40 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Github className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1 font-medium">GitHub</p>
                <p className="font-bold text-lg">AnasWagih25</p>
              </div>
            </a>
          </div>
          
          <div className="flex items-center gap-4 p-4 glass rounded-2xl">
            <div className="p-3 rounded-xl bg-secondary/20">
              <MapPin className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Location</p>
              <p className="font-medium">Cairo, Egypt</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a
              href="mailto:anaswagih35@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-secondary hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-110 font-bold text-lg border border-white/20 hover:border-white/40 glow-on-hover relative overflow-hidden group shimmer-effect"
              onClick={(e) => createRipple(e)}
            >
              <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:rotate-12 transition-transform" />
              Send me a message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
