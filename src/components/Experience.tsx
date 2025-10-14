import { Briefcase, Calendar } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useRipple } from "@/hooks/useRipple";

const Experience = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const createRipple = useRipple();
  const experiences = [
    {
      role: "R&D Engineer",
      company: "Clixsys",
      period: "07/2025 – On-Going",
      description: [
        "Developed a cross-platform (iOS/Android) home automation app using Quasar + Capacitor, enabling MQTT-based device control through the app, expanding accessibility for end-users.",
        "Built an AI-powered in-app assistant using OpenAI's ChatGPT API to control smart home devices, provide real-time weather/time data, and support various AI voices—response time of approx. 2 seconds.",
        "Designed a MQTT-based multi-endpoint system that groups several functions under a single node, cutting controller boards per room by ~70% and ensuring more consistent, reliable control."
      ],
      color: "primary"
    },
    {
      role: "Embedded Systems Trainee",
      company: "National Telecommunication Institute",
      period: "08/2025 – 09/2025",
      description: [
        "Hands-on embedded C programming for AVR: GPIO, ADC, timers, interrupts, USART, SPI, I2C.",
        "Applied data structures & computer architecture concepts in virtual labs using Proteus and Microchip Studio.",
        "Designed a full control system for 'Automotive' using relative sensors and modules - simulating their functions"
      ],
      color: "secondary"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 
          ref={headerRef}
          className={`text-3xl md:text-4xl font-pixel mb-12 text-center transition-all duration-1000 ${
            headerVisible ? 'reveal-scale opacity-100' : 'opacity-0'
          }`}
        >
          <span className="gradient-text">&gt;&gt; EXPERIENCE</span>
        </h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const ExperienceCard = () => {
              const { ref, isVisible } = useScrollReveal();
              
              return (
                <div
                  ref={ref}
                  className={`glass-strong p-8 interactive-hover group transition-all duration-1000 relative ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  onClick={(e) => createRipple(e)}
                >
                  {/* Pixel corners */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-primary" />
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent" />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-secondary" />
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-primary" />
                  
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`p-2 border-2 border-${exp.color} bg-${exp.color}/20`}>
                            <Briefcase className={`w-5 h-5 text-${exp.color}`} />
                          </div>
                          <h3 className="text-xl font-pixel">{exp.role}</h3>
                        </div>
                        <p className={`text-sm font-pixel text-${exp.color} mb-2`}>{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0 font-pixel text-xs">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed text-sm">
                          <span className={`text-${exp.color} font-pixel text-lg`}>▪</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            };
            
            return <ExperienceCard key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
