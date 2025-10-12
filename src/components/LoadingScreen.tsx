import { useState, useEffect } from "react";
import { Sparkles, Zap, Cpu, Code } from "lucide-react";

const LoadingScreen = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [currentIcon, setCurrentIcon] = useState(0);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });

  const icons = [
    { Icon: Sparkles, color: "hsl(270, 100%, 65%)" },
    { Icon: Zap, color: "hsl(280, 100%, 70%)" },
    { Icon: Cpu, color: "hsl(260, 100%, 60%)" },
    { Icon: Code, color: "hsl(290, 100%, 75%)" }
  ];

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);
      
      // Change icon every 500ms
      if (currentStep % 15 === 0) {
        setCurrentIcon(prev => (prev + 1) % icons.length);
      }

      // Random glow movement
      if (currentStep % 5 === 0) {
        setGlowPosition({
          x: 30 + Math.random() * 40,
          y: 30 + Math.random() * 40
        });
      }

      if (currentStep >= steps) {
        clearInterval(interval);
        setTimeout(onLoadComplete, 300);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  const { Icon, color } = icons[currentIcon];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden">
      {/* Animated background orbs */}
      <div 
        className="absolute w-96 h-96 rounded-full opacity-40 blur-3xl transition-all duration-1000"
        style={{
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          left: `${glowPosition.x}%`,
          top: `${glowPosition.y}%`,
          transform: 'translate(-50%, -50%)'
        }}
      />
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Icon container with rotation */}
        <div className="relative">
          <div 
            className="absolute inset-0 rounded-full opacity-30 blur-2xl"
            style={{ background: color }}
          />
          <div 
            className="relative glass-strong p-8 rounded-full animate-bounce"
            style={{ animationDuration: '1.5s' }}
          >
            <Icon 
              className="w-16 h-16 transition-all duration-500"
              style={{ color }}
            />
          </div>
        </div>

        {/* Loading text */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-display font-bold gradient-text">
            Loading Experience
          </h2>
          
          {/* Progress bar */}
          <div className="w-64 h-2 bg-muted/20 rounded-full overflow-hidden glass">
            <div 
              className="h-full rounded-full transition-all duration-200"
              style={{ 
                width: `${progress}%`,
                background: `linear-gradient(90deg, ${color}, hsl(var(--secondary)))`
              }}
            />
          </div>

          {/* Fun loading messages */}
          <p className="text-sm text-muted-foreground animate-pulse">
            {progress < 25 && "Initializing creative mode..."}
            {progress >= 25 && progress < 50 && "Loading interactive elements..."}
            {progress >= 50 && progress < 75 && "Activating animations..."}
            {progress >= 75 && "Almost there!"}
          </p>
        </div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-pulse"
            style={{
              background: icons[i % icons.length].color,
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: '2s'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
