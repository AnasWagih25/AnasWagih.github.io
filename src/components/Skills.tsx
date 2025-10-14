import { Code, Cpu, Wrench, Layers } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useRipple } from "@/hooks/useRipple";

const Skills = () => {
  const createRipple = useRipple();
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: ["Python", "R", "C++", "Embedded C", "MATLAB", "VHDL", "JavaScript"],
      color: "primary"
    },
    {
      title: "Embedded & Hardware",
      icon: Cpu,
      skills: ["AVR", "ARM", "ESP32", "nRF52840", "STM32", "Raspberry Pi", "Arduino", "PIC"],
      color: "secondary"
    },
    {
      title: "Tools & Software",
      icon: Wrench,
      skills: ["KiCAD", "Proteus", "VS Code", "Git", "STM32Cube", "Multisim", "ModelSim", "Altium"],
      color: "accent"
    },
    {
      title: "Tech & Frameworks",
      icon: Layers,
      skills: ["TensorFlow", "PyTorch", "OpenCV", "MQTT", "Matter", "PlatformIO", "Quasar", "TinyML"],
      color: "primary"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-pixel mb-12 text-center">
          <span className="gradient-text">&gt;&gt; SKILLS & TECH</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const SkillCategory = () => {
              const { ref, isVisible } = useScrollReveal();
              
              return (
                <div
                  ref={ref}
                  className={`glass-strong p-8 interactive-hover group transition-all duration-700 relative ${
                    isVisible ? 'reveal-scale opacity-100' : 'opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Pixel corners */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-primary" />
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-secondary" />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent" />
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-primary" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`p-3 border-2 border-${category.color} bg-${category.color}/20 transition-transform hover:scale-110`}>
                        <Icon className={`w-6 h-6 text-${category.color}`} />
                      </div>
                      <h3 className="text-lg font-pixel">{category.title}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="glass px-3 py-2 text-xs font-pixel hover:scale-110 hover:bg-primary/20 transition-all cursor-default relative overflow-hidden border-2 border-border"
                          onClick={(e) => createRipple(e)}
                          style={{
                            animationDelay: `${i * 50}ms`,
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            };
            
            return <SkillCategory key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
