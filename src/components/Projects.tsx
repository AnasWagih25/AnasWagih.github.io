import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import InteractiveCard from "./InteractiveCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useRipple } from "@/hooks/useRipple";

const Projects = () => {
  const createRipple = useRipple();
  const projects = [
    {
      title: "nRF52840-based IoT Microcontroller Board",
      description: "Designed a custom nRF52840-based board with USB connectivity, I2C support, power regulation, and debugging features. Integrated power management, ESD protection, and GPIO expandability for versatile embedded applications.",
      tags: ["Hardware Design", "IoT", "nRF52840", "PCB Design"],
      link: "https://github.com/AnasWagih25/nRF52840_Microcontroller_Board"
    },
    {
      title: "ESP32-Based GPS Live Tracker with Web Map",
      description: "Developed a real-time GPS tracking system on ESP32, integrating the u-blox NEO-6M module and TinyGPS++ for accurate positioning, with auto-refreshing functionality every 3 seconds. Hosted an interactive Leaflet.js map directly on the ESP32, using its built-in Wi-Fi as a webserver—no cloud dependencies—enabling instant live location tracking via the device's IP address.",
      tags: ["ESP32", "GPS", "IoT", "Web Server", "Real-time"],
      link: "https://github.com/AnasWagih25/ESP32_GPS_Live_Tracker_w_Web-Map"
    },
    {
      title: "Sign Language Interpreter",
      description: "Leverages deep learning algorithms to accurately interpret and translate sign language gestures into labeled text in real-time with a 0.9+ Accuracy Score.",
      tags: ["Deep Learning", "Computer Vision", "TensorFlow", "Real-time"],
      link: "https://github.com/AnasWagih25/Sign_Language_Interpreter"
    },
    {
      title: "Esp32CAM-Powered Object Detection Model",
      description: "This project demonstrates real-time object detection using an ESP32-CAM and a model trained on Edge Impulse: https://studio.edgeimpulse.com/public/686200/live. The model identifies six object classes with a 95% F1 score and runs directly on the ESP32-CAM using an exported Arduino library.",
      tags: ["AI", "Raspberry Pi", "Speech Recognition", "Python", "IoT"],
      link: "https://github.com/AnasWagih25/Esp32CAM_Object_Detection_Model"
    }
  ];


const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const { ref, isVisible } = useScrollReveal();
  const createRipple = useRipple();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'reveal-up opacity-100' : 'opacity-0'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <InteractiveCard className="gradient-border rounded-3xl p-8 interactive-hover group">
        <h3 className="text-2xl font-display font-semibold mb-4 group-hover:gradient-text transition-all">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed mb-6">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag: string, i: number) => (
            <span
              key={i}
              className="glass px-3 py-1 rounded-full text-xs font-medium hover:scale-110 hover:bg-primary/20 transition-all cursor-default"
              onClick={(e) => createRipple(e)}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <Button
            size="sm"
            variant="outline"
            className="glass border hover:scale-110 transition-all relative overflow-hidden"
            onClick={(e) => createRipple(e)}
            asChild
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View Code
            </a>
          </Button>
          <Button
            size="sm"
            className="glass-strong hover:scale-110 transition-all relative overflow-hidden"
            onClick={(e) => createRipple(e)}
            asChild
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Learn More
            </a>
          </Button>
        </div>
      </InteractiveCard>
    </div>
  );
};

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center animate-fade-in-up">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
