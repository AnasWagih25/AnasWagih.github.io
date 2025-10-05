import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "nRF52840-based IoT Microcontroller Board",
      description: "Designed a custom nRF52840-based board with USB connectivity, I2C support, power regulation, and debugging features. Integrated power management, ESD protection, and GPIO expandability for versatile embedded applications.",
      tags: ["Hardware Design", "IoT", "nRF52840", "PCB Design"],
      link: "#"
    },
    {
      title: "ESP32-Based GPS Live Tracker with Web Map",
      description: "Developed a real-time GPS tracking system on ESP32, integrating the u-blox NEO-6M module and TinyGPS++ for accurate positioning, with auto-refreshing functionality every 3 seconds. Hosted an interactive Leaflet.js map directly on the ESP32, using its built-in Wi-Fi as a webserver—no cloud dependencies—enabling instant live location tracking via the device's IP address.",
      tags: ["ESP32", "GPS", "IoT", "Web Server", "Real-time"],
      link: "#"
    },
    {
      title: "Sign Language Interpreter",
      description: "Leverages deep learning algorithms to accurately interpret and translate sign language gestures into labeled text in real-time with a 0.9+ Accuracy Score.",
      tags: ["Deep Learning", "Computer Vision", "TensorFlow", "Real-time"],
      link: "#"
    },
    {
      title: "AI-Enabled Real-Time Mood LED Light",
      description: "Built a real-time mood-detecting LED system on Raspberry Pi using Vosk speech recognition, TextBlob sentiment analysis, and a 12-LED NeoPixel ring. Implemented Python-based streaming audio processing and dynamic LED control with PWM-driven effects for positive, negative, neutral, and silent moods.",
      tags: ["AI", "Raspberry Pi", "Speech Recognition", "Python", "IoT"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="gradient-border rounded-3xl p-8 hover:scale-105 transition-all group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-display font-semibold mb-4 group-hover:gradient-text transition-all">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="glass px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button
                  size="sm"
                  variant="outline"
                  className="glass border hover:scale-110 transition-transform"
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="glass-strong hover:scale-110 transition-transform"
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Learn More
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
