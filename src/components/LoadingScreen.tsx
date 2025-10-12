import { useState, useEffect } from "react";
import { Sparkles, Zap, Cpu, Code, Rocket, Star, Heart, Trophy } from "lucide-react";

const LoadingScreen = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [currentIcon, setCurrentIcon] = useState(0);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const [floatingEmojis, setFloatingEmojis] = useState<Array<{ id: number; x: number; y: number; emoji: string }>>([]);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(1);

  const icons = [
    { Icon: Sparkles, color: "hsl(270, 100%, 65%)", name: "✨" },
    { Icon: Zap, color: "hsl(280, 100%, 70%)", name: "⚡" },
    { Icon: Cpu, color: "hsl(260, 100%, 60%)", name: "🎮" },
    { Icon: Code, color: "hsl(290, 100%, 75%)", name: "💻" },
    { Icon: Rocket, color: "hsl(250, 100%, 70%)", name: "🚀" },
    { Icon: Star, color: "hsl(280, 100%, 65%)", name: "⭐" },
    { Icon: Heart, color: "hsl(340, 100%, 65%)", name: "💜" },
    { Icon: Trophy, color: "hsl(50, 100%, 60%)", name: "🏆" }
  ];

  const funMessages = [
    "🎮 Loading the fun...",
    "⚡ Charging creativity...",
    "🚀 Launching awesomeness...",
    "✨ Sprinkling magic...",
    "🎨 Painting pixels...",
    "🎪 Setting up the show...",
    "🎯 Aiming for perfection...",
    "🎭 Ready, set, go!"
  ];

  useEffect(() => {
    const duration = 2500;
    const steps = 100;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const newProgress = (currentStep / steps) * 100;
      setProgress(newProgress);
      
      // Faster icon changes for game feel
      if (currentStep % 8 === 0) {
        setCurrentIcon(prev => (prev + 1) % icons.length);
        setCombo(prev => prev + 1);
        setScore(prev => prev + Math.floor(Math.random() * 500) + 100);
      }

      // More frequent glow movement
      if (currentStep % 3 === 0) {
        setGlowPosition({
          x: 20 + Math.random() * 60,
          y: 20 + Math.random() * 60
        });
      }

      // Spawn floating emojis randomly
      if (currentStep % 10 === 0) {
        const emoji = icons[Math.floor(Math.random() * icons.length)].name;
        setFloatingEmojis(prev => [
          ...prev,
          {
            id: Date.now() + Math.random(),
            x: Math.random() * 100,
            y: 100,
            emoji
          }
        ]);
      }

      if (currentStep >= steps) {
        clearInterval(interval);
        setTimeout(onLoadComplete, 400);
      }
    }, stepDuration);

    // Clean up old floating emojis
    const cleanupInterval = setInterval(() => {
      setFloatingEmojis(prev => prev.filter(e => Date.now() - e.id < 3000));
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cleanupInterval);
    };
  }, [onLoadComplete]);

  const { Icon, color, name } = icons[currentIcon];
  const currentMessage = funMessages[Math.floor((progress / 100) * funMessages.length)];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden select-none">
      {/* Animated background orbs - more vibrant */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full opacity-50 blur-3xl transition-all duration-500 animate-pulse"
        style={{
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          left: `${glowPosition.x}%`,
          top: `${glowPosition.y}%`,
          transform: 'translate(-50%, -50%) scale(1.2)'
        }}
      />
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/30 rounded-full blur-3xl animate-ping" style={{ animationDuration: '2s' }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/30 rounded-full blur-3xl animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />

      {/* Floating emojis */}
      {floatingEmojis.map(emoji => (
        <div
          key={emoji.id}
          className="absolute text-4xl animate-bounce pointer-events-none"
          style={{
            left: `${emoji.x}%`,
            top: `${emoji.y}%`,
            animation: `float-up 3s ease-out forwards`,
            opacity: 0
          }}
        >
          {emoji.emoji}
        </div>
      ))}

      {/* Score counter - game style */}
      <div className="absolute top-8 right-8 glass-strong px-6 py-3 rounded-2xl animate-pulse">
        <div className="text-sm text-muted-foreground mb-1">SCORE</div>
        <div className="text-3xl font-black gradient-text tabular-nums">{score.toLocaleString()}</div>
        {combo > 3 && (
          <div className="text-xs text-primary font-bold">x{combo} COMBO! 🔥</div>
        )}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Icon container with more dramatic effects */}
        <div className="relative">
          <div 
            className="absolute inset-0 rounded-full opacity-40 blur-3xl animate-pulse"
            style={{ 
              background: color,
              animationDuration: '1s'
            }}
          />
          {/* Rotating rings */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
            <div className="w-32 h-32 border-4 border-primary/30 border-t-primary rounded-full" />
          </div>
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }}>
            <div className="w-32 h-32 border-4 border-secondary/30 border-b-secondary rounded-full" />
          </div>
          
          <div 
            className="relative glass-strong p-10 rounded-full transition-all duration-300"
            style={{
              transform: `scale(${1 + (progress / 200)}) rotate(${progress * 3.6}deg)`,
              boxShadow: `0 0 60px ${color}`
            }}
          >
            <Icon 
              className="w-20 h-20 transition-all duration-300"
              style={{ color }}
            />
          </div>
        </div>

        {/* Fun animated text */}
        <div className="text-center space-y-4">
          <div className="relative">
            <h2 className="text-4xl font-display font-black gradient-text animate-bounce" style={{ animationDuration: '1s' }}>
              {name} LOADING {name}
            </h2>
            <div className="absolute -inset-1 blur-xl opacity-50" style={{ background: color }} />
          </div>
          
          {/* Progress bar - game style */}
          <div className="relative w-80 h-6 bg-background/50 rounded-full overflow-hidden glass border-2 border-primary/30">
            <div 
              className="h-full rounded-full transition-all duration-200 relative overflow-hidden"
              style={{ 
                width: `${progress}%`,
                background: `linear-gradient(90deg, ${color}, hsl(var(--secondary)), ${color})`,
                backgroundSize: '200% 100%',
                animation: 'shimmer 1.5s infinite'
              }}
            >
              {/* Moving shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
            </div>
            {/* Progress percentage */}
            <div className="absolute inset-0 flex items-center justify-center text-sm font-black text-white drop-shadow-lg">
              {Math.round(progress)}%
            </div>
          </div>

          {/* Fun loading message */}
          <p className="text-lg font-bold animate-pulse" style={{ color }}>
            {currentMessage}
          </p>
        </div>

        {/* Particle burst effect */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              background: icons[i % icons.length].color,
              left: `${50 + Math.cos((i / 12) * Math.PI * 2) * 30}%`,
              top: `${50 + Math.sin((i / 12) * Math.PI * 2) * 30}%`,
              animation: `particle-burst 2s ease-out infinite`,
              animationDelay: `${i * 0.1}s`,
              boxShadow: `0 0 20px ${icons[i % icons.length].color}`
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float-up {
          0% { 
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% { 
            transform: translateY(-300px) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes particle-burst {
          0%, 100% { 
            transform: scale(0.5) translateY(0);
            opacity: 0.3;
          }
          50% { 
            transform: scale(1.5) translateY(-20px);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
