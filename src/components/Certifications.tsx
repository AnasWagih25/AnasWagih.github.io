// src/components/Certifications.tsx
import { Award, ExternalLink, Trophy } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useRipple } from "@/hooks/useRipple";

const Certifications = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const createRipple = useRipple();
  const certifications = [
    {
      title: "Machine Learning Specialization",
      issuer: "DeepLearning.AI + Stanford University",
      courses: "3 Courses",
      link: "https://coursera.org/share/5142a9edb67ef1fdd43f9012443603c9",
      status: "Completed"
    },
    {
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI",
      courses: "5 Courses",
      link: "", // not completed yet
      status: "In Progress"
    },
    {
      title: "Advanced Embedded Systems on Arm",
      issuer: " ArmEducationX ",
      courses: "2 Courses",
      link: "http://credentials.edx.org/credentials/d6f113333f9442a48f7860206b88cac4/",
      status: "Completed"
    },
    {
      title: "Arm Cortex-M Architecture and Software Development",
      issuer: " ArmEducationX ",
      courses: "4 Course",
      link: "https://coursera.org/share/d487e16df055fc747abf454e14d7f9f8",
      status: "Completed"
    },
    {
      title: "Python Certification",
      issuer: " HackerRank ",
      courses: "",
      link: "https://www.hackerrank.com/certificates/iframe/c97729ed98bb",
      status: "Completed"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 relative">
      {/* Section glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 
          ref={headerRef}
          className={`text-4xl md:text-5xl font-display font-bold mb-12 text-center transition-all duration-1000 ${
            headerVisible ? 'reveal-scale opacity-100' : 'opacity-0'
          }`}
        >
          <span className="gradient-text">Certifications</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const CertCard = () => {
              const { ref, isVisible } = useScrollReveal();
              
              return (
                <div
                  ref={ref}
                  className={`gradient-border rounded-3xl p-6 interactive-hover group transition-all duration-1000 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={(e) => createRipple(e)}
                >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/20 mt-1">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-lg mb-2 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-secondary font-medium mb-1">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground">{cert.courses}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    cert.status === "Completed"
                      ? "bg-primary/20 text-primary"
                      : "bg-accent/20 text-accent"
                  }`}
                >
                  {cert.status}
                </span>
                {cert.link ? (
                  <Button
                    size="sm"
                    variant="ghost"
                    className="hover:scale-110 transition-transform p-2 h-auto"
                    asChild
                  >
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    variant="ghost"
                    className="opacity-50 cursor-not-allowed p-2 h-auto"
                    disabled
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                )}
              </div>
                </div>
              );
            };
            
            return <CertCard key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
