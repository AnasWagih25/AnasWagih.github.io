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
              className="flex items-center gap-4 p-4 glass rounded-2xl hover:scale-105 transition-all group"
            >
              <div className="p-3 rounded-xl bg-primary/20 group-hover:bg-primary/30 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="font-medium">anaswagih35@gmail.com</p>
              </div>
            </a>
            
            <a
              href="tel:+201020065576"
              className="flex items-center gap-4 p-4 glass rounded-2xl hover:scale-105 transition-all group"
            >
              <div className="p-3 rounded-xl bg-secondary/20 group-hover:bg-secondary/30 transition-colors">
                <Phone className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <p className="font-medium">+20 102 006 5576</p>
              </div>
            </a>
            
            <a
              href="https://linkedin.com/in/AnasWagih"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 glass rounded-2xl hover:scale-105 transition-all group"
            >
              <div className="p-3 rounded-xl bg-accent/20 group-hover:bg-accent/30 transition-colors">
                <Linkedin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                <p className="font-medium">AnasWagih</p>
              </div>
            </a>
            
            <a
              href="https://github.com/AnasWagih25"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 glass rounded-2xl hover:scale-105 transition-all group"
            >
              <div className="p-3 rounded-xl bg-primary/20 group-hover:bg-primary/30 transition-colors">
                <Github className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">GitHub</p>
                <p className="font-medium">AnasWagih25</p>
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
            <Button
              size="lg"
              className="glass-strong hover:scale-105 transition-transform group"
              asChild
            >
<a
  href="mailto:anaswagih35@gmail.com"
  className="flex items-center group text-blue-500 hover:text-blue-700 transition-colors"
>
  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
  Send me a message
</a>

            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
