import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t-4 border-border relative">
      {/* Pixel decorations */}
      <div className="absolute top-0 left-1/4 w-4 h-4 bg-primary transform -translate-y-1/2" />
      <div className="absolute top-0 right-1/4 w-4 h-4 bg-secondary transform -translate-y-1/2" />
      
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap font-pixel text-xs">
          <span>&gt;&gt; © {new Date().getFullYear()} ANAS M. WAGIH</span>
        </p>
        <p className="text-xs text-muted-foreground/70 mt-2">
          LAST UPDATED: MARCH 2025
        </p>
        <div className="mt-4 flex justify-center gap-2">
          <div className="w-2 h-2 bg-primary animate-pixel-bounce" />
          <div className="w-2 h-2 bg-secondary animate-pixel-bounce" style={{ animationDelay: '0.1s' }} />
          <div className="w-2 h-2 bg-accent animate-pixel-bounce" style={{ animationDelay: '0.2s' }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
