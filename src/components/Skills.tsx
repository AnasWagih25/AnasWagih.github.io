import { Code, Cpu, Wrench, Layers } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "Embedded C", "C++", "MATLAB", "VHDL", "Verilog"],
      color: "primary"
    },
    {
      title: "Embedded & Hardware",
      icon: Cpu,
      skills: ["AVR", "ARM Cortex-M", "ESP32", "nRF52840", "STM32", "Raspberry Pi", "Arduino"],
      color: "secondary"
    },
    {
      title: "Tools & Software",
      icon: Wrench,
      skills: ["KiCAD", "Proteus", "Microchip Studio", "VS Code", "Git", "Altium Designer"],
      color: "accent"
    },
    {
      title: "Technologies & Frameworks",
      icon: Layers,
      skills: ["TensorFlow", "PyTorch", "OpenCV", "MQTT", "Matter Protocol", "I2C", "SPI", "UART", "Quasar", "Capacitor"],
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
            return (
              <div
                key={index}
                className="glass-strong rounded-3xl p-8 hover:scale-105 transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-${category.color}/20`}>
                    <Icon className={`w-6 h-6 text-${category.color}`} />
                  </div>
                  <h3 className="text-2xl font-display font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="glass px-4 py-2 rounded-full text-sm font-medium hover:scale-110 transition-transform cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
