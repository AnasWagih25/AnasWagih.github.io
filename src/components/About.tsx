import { GraduationCap, MapPin, Sparkle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useRipple } from "@/hooks/useRipple";

const About = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: educationRef, isVisible: educationVisible } = useScrollReveal();
  const { ref: factsRef, isVisible: factsVisible } = useScrollReveal();
  const createRipple = useRipple();

  return (
    <section id="about" className="py-20 px-4 relative">
      {/* Section glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 
          ref={headerRef}
          className={`text-4xl md:text-5xl font-display font-bold mb-12 text-center transition-all duration-1000 ${
            headerVisible ? 'reveal-up opacity-100' : 'opacity-0'
          }`}
        >
          <span className="gradient-text">About Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div 
            ref={educationRef}
            className={`gradient-border rounded-3xl p-8 interactive-hover group transition-all duration-1000 ${
              educationVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-primary/20">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-semibold">Education</h3>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-2 border-primary/30 pl-6 pb-6">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-lg">B.Sc. in Electronics and Communication Engineering</h4>
                </div>
                <p className="text-secondary font-medium mb-2">Arab Academy for Science, Technology, and Maritime Transport</p>
                <div className="flex items-center gap-2 text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>Egypt</span>
                  <span className="mx-2">•</span>
                  <span>09/2022 – 02/2027</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">ABET-accredited Degree, USA</p>
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium mb-1">Key Coursework:</p>
                  <p>Solid State Physics, Electrical Circuit Analysis, Machine Learning, Microprocessors, Embedded Systems</p>
                </div>
              </div>
              
              <div className="border-l-2 border-secondary/30 pl-6">
                <h4 className="font-semibold text-lg mb-2">International General Certificate of Secondary Education (IGCSE)</h4>
                <p className="text-secondary font-medium mb-2">Narmer Language School</p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Cairo, Egypt</span>
                  <span className="mx-2">•</span>
                  <span>09/2019 – 07/2022</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Cambridge & Pearson Edexcel, UK</p>
              </div>
            </div>
          </div>
          
          <div 
            ref={factsRef}
            className={`gradient-border rounded-3xl p-8 interactive-hover group transition-all duration-1000 ${
              factsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <h3 className="text-2xl font-display font-semibold mb-6 gradient-text-secondary">Quick Facts</h3>
            
            <div className="space-y-6">
              <div className="group">
                <p className="text-muted-foreground mb-2 text-sm">Location</p>
                <p className="text-lg font-medium flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  <MapPin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  Cairo, Egypt
                </p>
              </div>
              
              <div>
                <p className="text-muted-foreground mb-3 text-sm">Focus Areas</p>
                <div className="flex flex-wrap gap-2">
                  <span 
                    className="glass px-4 py-2 rounded-full text-sm font-medium hover:scale-110 hover:bg-primary/20 transition-all cursor-default glow-on-hover relative overflow-hidden"
                    onClick={(e) => createRipple(e)}
                  >
                    IoT Development
                  </span>
                  <span 
                    className="glass px-4 py-2 rounded-full text-sm font-medium hover:scale-110 hover:bg-secondary/20 transition-all cursor-default glow-on-hover relative overflow-hidden"
                    onClick={(e) => createRipple(e)}
                  >
                    Embedded Systems
                  </span>
                  <span 
                    className="glass px-4 py-2 rounded-full text-sm font-medium hover:scale-110 hover:bg-accent/20 transition-all cursor-default glow-on-hover relative overflow-hidden"
                    onClick={(e) => createRipple(e)}
                  >
                    AI Integration
                  </span>
                  <span 
                    className="glass px-4 py-2 rounded-full text-sm font-medium hover:scale-110 hover:bg-primary/20 transition-all cursor-default glow-on-hover relative overflow-hidden"
                    onClick={(e) => createRipple(e)}
                  >
                    Smart Home
                  </span>
                </div>
              </div>
              
              <div>
                <p className="text-muted-foreground mb-2">Interests</p>
                <p className="text-sm leading-relaxed">
                  Building intelligent embedded systems that leverage AI and IoT technologies to solve real-world problems.
                  Passionate about the intersection of hardware and software, creating seamless experiences in smart devices.
                </p>
              </div>
              
              <div>
                <p className="text-muted-foreground mb-2">Currently</p>
                <p className="text-sm leading-relaxed">
                  R&D Intern at Clixsys, developing Matter-based smart home solutions and AI-powered mobile applications.
                  Pursuing Deep Learning Specialization to enhance AI capabilities in embedded applications.
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
