import { Briefcase, Calendar, Zap } from "lucide-react";
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
      {/* Section glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 
          ref={headerRef}
          className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-16 text-center transition-all duration-1000 ${
            headerVisible ? 'reveal-scale opacity-100' : 'opacity-0'
          }`}
        >
          <span className="gradient-text inline-flex items-center gap-3">
            <Zap className="w-10 h-10 animate-pulse" />
            Experience
          </span>
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const ExperienceCard = () => {
              const { ref, isVisible } = useScrollReveal();
              
              return (
                <div
                  ref={ref}
                  className={`glass-strong rounded-3xl p-8 interactive-hover glow-on-hover border border-${exp.color}/10 relative overflow-hidden transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  onClick={(e) => createRipple(e)}
                >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg bg-${exp.color}/20`}>
                      <Briefcase className={`w-5 h-5 text-${exp.color}`} />
                    </div>
                    <h3 className="text-2xl font-display font-semibold">{exp.role}</h3>
                  </div>
                  <p className={`text-lg font-medium text-${exp.color} mb-2`}>{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">{exp.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                    <span className={`text-${exp.color} font-bold mt-1`}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
