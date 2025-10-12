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
      
      if (currentStep % 8 === 0) {
        setCurrentIcon(prev => (prev + 1) % icons.length);
        setCombo(prev => prev + 1);
        setScore(prev => prev + Math.floor(Math.random() * 500) + 100);
      }

      if (currentStep % 3 === 0) {
        setGlowPosition({
          x: 20 + Math.random() * 60,
          y: 20 + Math.random() * 60
        });
      }

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
    <div className="fixed inset-0 z-50 bg-background overflow-hidden select-none">
      {/* Background effects */}
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
          className="absolute text-4xl pointer-events-none z-10"
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

      {/* Main grid container */}
      <div className="relative h-full w-full flex items-center justify-center p-8">
        <div className="max-w-6xl w-full grid grid-rows-[auto_1fr_auto] gap-12 h-full py-12">
          
          {/* Top row - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {/* Score */}
            <div className="glass-strong px-8 py-6 rounded-3xl">
              <div className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Score</div>
              <div className="text-4xl font-black gradient-text tabular-nums">{score.toLocaleString()}</div>
              {combo > 3 && (
                <div className="text-sm text-primary font-bold mt-2 animate-pulse">x{combo} COMBO! 🔥</div>
              )}
            </div>

            {/* Level indicator */}
            <div className="glass-strong px-8 py-6 rounded-3xl">
              <div className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Progress</div>
              <div className="text-4xl font-black gradient-text tabular-nums">{Math.round(progress)}%</div>
              <div className="text-sm text-secondary font-bold mt-2">Level {Math.floor(progress / 20) + 1}</div>
            </div>
          </div>

          {/* Middle row - Main content */}
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 gap-8 max-w-2xl w-full">
              
              {/* Icon display */}
              <div className="flex justify-center">
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
                    <div className="w-40 h-40 border-4 border-primary/30 border-t-primary rounded-full" />
                  </div>
                  <div className="absolute inset-0 animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }}>
                    <div className="w-40 h-40 border-4 border-secondary/30 border-b-secondary rounded-full" />
                  </div>
                  
                  <div 
                    className="relative glass-strong p-12 rounded-full transition-all duration-300"
                    style={{
                      transform: `scale(${1 + (progress / 200)}) rotate(${progress * 3.6}deg)`,
                      boxShadow: `0 0 80px ${color}`
                    }}
                  >
                    <Icon 
                      className="w-24 h-24 transition-all duration-300"
                      style={{ color }}
                    />
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="text-center">
                <div className="relative inline-block">
                  <h2 className="text-5xl font-display font-black gradient-text animate-bounce" style={{ animationDuration: '1s' }}>
                    {name} LOADING {name}
                  </h2>
                  <div className="absolute -inset-2 blur-xl opacity-50" style={{ background: color }} />
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full">
                <div className="relative w-full h-8 bg-background/50 rounded-full overflow-hidden glass border-2 border-primary/30">
                  <div 
                    className="h-full rounded-full transition-all duration-200 relative overflow-hidden"
                    style={{ 
                      width: `${progress}%`,
                      background: `linear-gradient(90deg, ${color}, hsl(var(--secondary)), ${color})`,
                      backgroundSize: '200% 100%',
                      animation: 'shimmer 1.5s infinite'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center text-sm font-black text-white drop-shadow-lg">
                    {Math.round(progress)}%
                  </div>
                </div>
              </div>

              {/* Fun message */}
              <div className="text-center">
                <p className="text-xl font-bold animate-pulse" style={{ color }}>
                  {currentMessage}
                </p>
              </div>

            </div>
          </div>

          {/* Bottom row - Icon grid */}
          <div className="grid grid-cols-8 gap-4">
            {icons.map((iconData, i) => {
              const IconComp = iconData.Icon;
              return (
                <div 
                  key={i}
                  className={`glass-strong p-4 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    i === currentIcon ? 'scale-110 ring-2 ring-primary' : 'opacity-50'
                  }`}
                  style={{
                    boxShadow: i === currentIcon ? `0 0 30px ${iconData.color}` : 'none'
                  }}
                >
                  <IconComp 
                    className="w-6 h-6"
                    style={{ color: iconData.color }}
                  />
                </div>
              );
            })}
          </div>

        </div>

        {/* Particle burst effect */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              background: icons[i % icons.length].color,
              left: `${50 + Math.cos((i / 12) * Math.PI * 2) * 35}%`,
              top: `${50 + Math.sin((i / 12) * Math.PI * 2) * 35}%`,
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
