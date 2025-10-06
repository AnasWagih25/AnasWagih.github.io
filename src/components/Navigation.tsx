import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        className={`max-w-6xl mx-auto rounded-3xl transition-all duration-500 ${
          isScrolled ? "glass-strong shadow-2xl shadow-primary/10" : "glass border border-white/20"
        }`}
      >
        <div className="flex items-center justify-between h-20 px-6 sm:px-8 lg:px-10">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-display font-black gradient-text hover:scale-110 transition-all duration-300 tracking-tight"
          >
            AMW
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-gradient-to-r hover:from-primary/20 hover:to-secondary/20 border border-white/10 hover:border-white/30 transition-all duration-300 font-semibold text-sm tracking-wide hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full bg-white/5 hover:bg-white/10 border border-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto glass-strong rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl">
          <div className="px-6 py-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-5 py-3.5 rounded-2xl bg-white/5 hover:bg-gradient-to-r hover:from-primary/20 hover:to-secondary/20 border border-white/10 hover:border-white/30 transition-all duration-300 font-semibold hover:scale-102 hover:shadow-lg"
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
