import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
          <span>© {new Date().getFullYear()} Anas M. Wagih.</span>
          <span className="flex items-center gap-1">
            
          </span>
        </p>
        <p className="text-sm text-muted-foreground/70 mt-2">
          Last updated: March 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
