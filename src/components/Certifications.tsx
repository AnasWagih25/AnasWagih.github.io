// src/components/Certifications.tsx
import { Award, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const Certifications = () => {
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
      issuer: " armEducation ",
      courses: "2 Courses",
      link: "http://credentials.edx.org/credentials/d6f113333f9442a48f7860206b88cac4/",
      status: "Completed"
    },
    {
      title: "Arm Cortex-M Architecture and Software Development",
      issuer: "armEducation",
      courses: "4 Course",
      link: "https://coursera.org/share/d487e16df055fc747abf454e14d7f9f8",
      status: "Completed"
    },
    {
      title: "Python Certification",
      issuer: "HackerRank",
      courses: "1 Course",
      link: "https://www.hackerrank.com/certificates/iframe/c97729ed98bb",
      status: "Completed"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
          <span className="gradient-text">Certifications</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-strong rounded-3xl p-6 hover:scale-105 transition-all group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
