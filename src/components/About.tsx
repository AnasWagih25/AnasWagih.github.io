import { GraduationCap, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useRipple } from "@/hooks/useRipple";

const About = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: educationRef, isVisible: educationVisible } = useScrollReveal();
  const { ref: factsRef, isVisible: factsVisible } = useScrollReveal();
  const createRipple = useRipple();

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 
          ref={headerRef}
          className={`text-3xl md:text-4xl font-pixel mb-12 text-center transition-all duration-1000 ${
            headerVisible ? 'reveal-up opacity-100' : 'opacity-0'
          }`}
        >
          <span className="gradient-text">&gt;&gt; ABOUT ME</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div 
            ref={educationRef}
            className={`glass-strong p-8 interactive-hover group transition-all duration-1000 relative ${
              educationVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            {/* Pixel corners */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-primary" />
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-secondary" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-secondary" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-accent" />
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="p-3 bg-primary/20 border-2 border-primary">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-pixel">EDUCATION</h3>
            </div>
            
            <div className="space-y-6 relative z-10">
              <div className="border-l-4 border-primary pl-6 pb-6">
                <h4 className="font-pixel text-sm mb-3">B.SC. ECE</h4>
                <p className="text-secondary font-pixel text-xs mb-2">ARAB ACADEMY</p>
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3 font-pixel">
                  <MapPin className="w-3 h-3" />
                  <span>EGYPT</span>
                  <span className="mx-2">•</span>
                  <span>2022-2027</span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">ABET-ACCREDITED, USA</p>
                <div className="text-xs text-muted-foreground">
                  <p className="font-pixel mb-1">&gt; COURSEWORK:</p>
                  <p>Physics, Circuits, ML, Microprocessors, Embedded Systems</p>
                </div>
              </div>
              
              <div className="border-l-4 border-secondary pl-6">
                <h4 className="font-pixel text-sm mb-2">IGCSE</h4>
                <p className="text-secondary font-pixel text-xs mb-2">NARMER SCHOOL</p>
                <div className="flex items-center gap-2 text-muted-foreground text-xs font-pixel">
                  <MapPin className="w-3 h-3" />
                  <span>CAIRO</span>
                  <span className="mx-2">•</span>
                  <span>2019-2022</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">CAMBRIDGE & PEARSON, UK</p>
              </div>
            </div>
          </div>
          
          <div 
            ref={factsRef}
            className={`glass-strong p-8 interactive-hover group transition-all duration-1000 relative ${
              factsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            {/* Pixel corners */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-accent" />
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-secondary" />
            
            <h3 className="text-xl font-pixel mb-6 gradient-text-secondary relative z-10">&gt;&gt; STATS</h3>
            
            <div className="space-y-6 relative z-10">
              <div className="group">
                <p className="text-muted-foreground mb-2 text-xs font-pixel">&gt; LOCATION</p>
                <p className="text-sm font-pixel flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  <MapPin className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  CAIRO, EGYPT
                </p>
              </div>
              
              <div>
                <p className="text-muted-foreground mb-3 text-xs font-pixel">&gt; FOCUS AREAS</p>
                <div className="flex flex-wrap gap-2">
                  <span 
                    className="glass px-4 py-2 text-xs font-pixel hover:scale-110 hover:bg-primary/20 transition-all cursor-default glow-on-hover relative overflow-hidden border-2 border-primary/50"
                    onClick={(e) => createRipple(e)}
                  >
                    IOT DEV
                  </span>
                  <span 
                    className="glass px-4 py-2 text-xs font-pixel hover:scale-110 hover:bg-secondary/20 transition-all cursor-default glow-on-hover relative overflow-hidden border-2 border-secondary/50"
                    onClick={(e) => createRipple(e)}
                  >
                    EMBEDDED
                  </span>
                  <span 
                    className="glass px-4 py-2 text-xs font-pixel hover:scale-110 hover:bg-accent/20 transition-all cursor-default glow-on-hover relative overflow-hidden border-2 border-accent/50"
                    onClick={(e) => createRipple(e)}
                  >
                    AI
                  </span>
                  <span 
                    className="glass px-4 py-2 text-xs font-pixel hover:scale-110 hover:bg-primary/20 transition-all cursor-default glow-on-hover relative overflow-hidden border-2 border-primary/50"
                    onClick={(e) => createRipple(e)}
                  >
                    SMART HOME
                  </span>
                </div>
              </div>
              
              <div>
                <p className="text-muted-foreground mb-2 text-xs font-pixel">&gt; INTERESTS</p>
                <p className="text-xs leading-relaxed">
                  Building intelligent embedded systems that leverage AI and IoT technologies to solve real-world problems.
                  Passionate about the intersection of hardware and software.
                </p>
              </div>
              
              <div>
                <p className="text-muted-foreground mb-2 text-xs font-pixel">&gt; CURRENTLY</p>
                <p className="text-xs leading-relaxed">
                  R&D Intern at Clixsys, developing Matter-based smart home solutions and AI-powered mobile applications.
                  Pursuing Deep Learning Specialization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
