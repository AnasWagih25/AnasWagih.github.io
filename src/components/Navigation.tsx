import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useRipple } from "@/hooks/useRipple";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const createRipple = useRipple();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Certifications", id: "certifications" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-6">
      <div
        className={`max-w-6xl mx-auto transition-all duration-500 ${
          isScrolled ? "glass-strong border-4 border-primary" : "glass border-4 border-secondary"
        }`}
      >
        <div className="flex items-center justify-between h-20 px-6 sm:px-8 lg:px-10">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-pixel gradient-text hover:scale-110 transition-all tracking-tight"
          >
            &lt;AMW/&gt;
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={(e) => {
                  createRipple(e);
                  scrollToSection(item.id);
                }}
                className="px-5 py-2.5 glass border-2 border-secondary hover:border-primary transition-all font-sans text-base hover:scale-110 glow-on-hover relative overflow-hidden"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden glass border-2 border-primary hover:border-accent"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto glass-strong border-4 border-primary">
          <div className="px-6 py-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={(e) => {
                  createRipple(e);
                  scrollToSection(item.id);
                }}
                className="block w-full text-left px-5 py-3.5 glass border-2 border-secondary hover:border-accent transition-all font-sans text-base hover:scale-105 glow-on-hover relative overflow-hidden"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
