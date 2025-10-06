import { Code, Cpu, Wrench, Layers } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useRipple } from "@/hooks/useRipple";

const Skills = () => {
  const createRipple = useRipple();
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "R", "C++", "Embedded C", "MATLAB", "VHDL", "JavaScript"],
      color: "primary"
    },
    {
      title: "Embedded & Hardware",
      icon: Cpu,
      skills: ["AVR", "ARM Cortex-M", "Esp32 MCUS and Esp32CAM", "nRF52840", "STM32", "Raspberry Pi", "Arduino", "PIC MCUs"],
      color: "secondary"
    },
    {
      title: "Tools & Software",
      icon: Wrench,
      skills: ["KiCAD", "Proteus", "Microchip Studio", "VS Code", "Git", "STM32Cubeide", "Multisim", "Anaconda", "ModelSim-Intel", "Altium Designer"],
      color: "accent"
    },
    {
      title: "Technologies & Frameworks",
      icon: Layers,
      skills: ["TensorFlow", "PyTorch", "OpenCV", "MQTT", "Matter Protocol", "Numpy & Pandas", "PlatformIO", "Quasar", "Capacitor", "PySpark", "TinyML", "Embedded Communication Protocols"],
      color: "primary"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
          <span className="gradient-text">Skills & Technologies</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const SkillCategory = () => {
              const { ref, isVisible } = useScrollReveal();
              
              return (
                <div
                  ref={ref}
                  className={`glass-strong rounded-3xl p-8 interactive-hover transition-all duration-700 ${
                    isVisible ? 'reveal-scale opacity-100' : 'opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-xl bg-${category.color}/20 transition-transform hover:scale-110 hover:rotate-6`}>
                      <Icon className={`w-6 h-6 text-${category.color}`} />
                    </div>
                    <h3 className="text-2xl font-display font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="glass px-4 py-2 rounded-full text-sm font-medium hover:scale-110 hover:bg-primary/20 transition-all cursor-default relative overflow-hidden"
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
