import { GraduationCap, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
          <span className="gradient-text">About Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-strong rounded-3xl p-8 hover:scale-105 transition-transform animate-slide-in-left">
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
          
          <div className="glass-strong rounded-3xl p-8 hover:scale-105 transition-transform animate-slide-in-right">
            <h3 className="text-2xl font-display font-semibold mb-6">Quick Facts</h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-muted-foreground mb-2">Location</p>
                <p className="text-lg font-medium flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Cairo, Egypt
                </p>
              </div>
              
              <div>
                <p className="text-muted-foreground mb-2">Focus Areas</p>
                <div className="flex flex-wrap gap-2">
                  <span className="glass px-4 py-2 rounded-full text-sm font-medium">IoT Development</span>
                  <span className="glass px-4 py-2 rounded-full text-sm font-medium">Embedded Systems</span>
                  <span className="glass px-4 py-2 rounded-full text-sm font-medium">AI Integration</span>
                  <span className="glass px-4 py-2 rounded-full text-sm font-medium">Smart Home</span>
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
