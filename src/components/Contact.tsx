import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-center">
          <span className="gradient-text">Let's Connect</span>
        </h2>
        
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        
        <div className="glass-strong rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <a
              href="mailto:anaswagih35@gmail.com"
              className="flex items-center gap-4 p-6 glass rounded-2xl hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group border border-white/10 hover:border-primary/30"
            >
              <div className="p-4 rounded-xl bg-primary/20 group-hover:bg-primary/40 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1 font-medium">Email</p>
                <p className="font-bold text-lg">anaswagih35@gmail.com</p>
              </div>
            </a>
            
            <a
              href="tel:+201020065576"
              className="flex items-center gap-4 p-6 glass rounded-2xl hover:scale-105 hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-300 group border border-white/10 hover:border-secondary/30"
            >
              <div className="p-4 rounded-xl bg-secondary/20 group-hover:bg-secondary/40 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Phone className="w-7 h-7 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1 font-medium">Phone</p>
                <p className="font-bold text-lg">+20 102 006 5576</p>
              </div>
            </a>
            
            <a
              href="https://www.linkedin.com/in/anas-wagih-9423a7232/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 glass rounded-2xl hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 group border border-white/10 hover:border-accent/30"
            >
              <div className="p-4 rounded-xl bg-accent/20 group-hover:bg-accent/40 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Linkedin className="w-7 h-7 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1 font-medium">LinkedIn</p>
                <p className="font-bold text-lg">AnasWagih</p>
              </div>
            </a>
            
            <a
              href="https://github.com/AnasWagih25"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 glass rounded-2xl hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group border border-white/10 hover:border-primary/30"
            >
              <div className="p-4 rounded-xl bg-primary/20 group-hover:bg-primary/40 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Github className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1 font-medium">GitHub</p>
                <p className="font-bold text-lg">AnasWagih25</p>
              </div>
            </a>
          </div>
          
          <div className="flex items-center gap-4 p-4 glass rounded-2xl">
            <div className="p-3 rounded-xl bg-secondary/20">
              <MapPin className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Location</p>
              <p className="font-medium">Cairo, Egypt</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a
              href="mailto:anaswagih35@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-secondary hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 font-bold text-lg border border-white/20 hover:border-white/40"
            >
              <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              Send me a message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
