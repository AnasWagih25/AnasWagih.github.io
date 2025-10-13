import { useState, useEffect } from "react";
import { Sparkles, Zap, Cpu, Code, Rocket, Star, Heart, Trophy } from "lucide-react";

const LoadingScreen = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [currentIcon, setCurrentIcon] = useState(0);
  const [lives, setLives] = useState(3);
  const [coins, setCoins] = useState(0);
  const [level, setLevel] = useState(1);

  const icons = [
    { Icon: Sparkles, color: "hsl(330, 100%, 65%)", emoji: "✨" },
    { Icon: Zap, color: "hsl(50, 100%, 60%)", emoji: "⚡" },
    { Icon: Cpu, color: "hsl(190, 100%, 50%)", emoji: "🎮" },
    { Icon: Code, color: "hsl(280, 100%, 60%)", emoji: "💻" },
    { Icon: Rocket, color: "hsl(30, 100%, 55%)", emoji: "🚀" },
    { Icon: Star, color: "hsl(50, 100%, 60%)", emoji: "⭐" },
    { Icon: Heart, color: "hsl(330, 100%, 65%)", emoji: "💜" },
    { Icon: Trophy, color: "hsl(50, 100%, 60%)", emoji: "🏆" }
  ];

  const messages = [
    ">> BOOTING SYSTEM...",
    ">> LOADING PIXELS...",
    ">> CHARGING POWER-UPS...",
    ">> SPAWNING ENEMIES...",
    ">> UNLOCKING LEVELS...",
    ">> READY PLAYER ONE...",
    ">> GAME START!",
    ">> LET'S GO!"
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
      
      if (currentStep % 10 === 0) {
        setCurrentIcon(prev => (prev + 1) % icons.length);
        setCoins(prev => prev + Math.floor(Math.random() * 10) + 5);
      }

      if (currentStep % 25 === 0) {
        setLevel(prev => prev + 1);
      }

      if (currentStep >= steps) {
        clearInterval(interval);
        setTimeout(onLoadComplete, 400);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  const { Icon, color } = icons[currentIcon];
  const currentMessage = messages[Math.floor((progress / 100) * messages.length)];

  return (
    <div className="fixed inset-0 z-50 bg-background overflow-hidden select-none">
      {/* Pixel grid background effect */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(hsl(330, 100%, 65%) 1px, transparent 1px),
          linear-gradient(90deg, hsl(330, 100%, 65%) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }} />

      {/* Main container */}
      <div className="relative h-full w-full flex items-center justify-center p-4">
        <div className="max-w-4xl w-full space-y-6">
          
          {/* Game HUD - Top */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {/* Score */}
            <div className="glass-strong p-4 border-4 border-primary">
              <div className="text-xs font-pixel text-muted-foreground mb-1">SCORE</div>
              <div className="text-2xl font-pixel text-primary tabular-nums">{coins * 100}</div>
            </div>

            {/* Level */}
            <div className="glass-strong p-4 border-4 border-accent">
              <div className="text-xs font-pixel text-muted-foreground mb-1">LEVEL</div>
              <div className="text-2xl font-pixel text-accent tabular-nums">{level}</div>
            </div>

            {/* Lives */}
            <div className="glass-strong p-4 border-4 border-destructive">
              <div className="text-xs font-pixel text-muted-foreground mb-1">LIVES</div>
              <div className="text-2xl font-pixel flex gap-2">
                {[...Array(lives)].map((_, i) => (
                  <Heart key={i} className="w-6 h-6 fill-destructive text-destructive animate-pixel-bounce" style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
            </div>
          </div>

          {/* Main Loading Area */}
          <div className="glass-strong p-8 border-4 border-secondary space-y-6">
            
            {/* Icon Display with pixel border */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div 
                  className="glass-strong p-8 border-4 animate-glow"
                  style={{ borderColor: color }}
                >
                  <Icon 
                    className="w-20 h-20 animate-pixel-bounce"
                    style={{ color }}
                  />
                </div>
                {/* Corner decorations */}
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-primary" />
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-secondary" />
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-secondary" />
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-accent" />
              </div>
            </div>

            {/* Title */}
            <div className="text-center">
              <h2 className="text-3xl font-pixel gradient-text mb-2 tracking-wider">
                LOADING
              </h2>
              <div className="flex justify-center gap-2">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 transition-all ${
                      i === currentIcon ? 'bg-primary scale-150' : 'bg-muted'
                    }`}
                    style={{ transitionDuration: '0.1s' }}
                  />
                ))}
              </div>
            </div>

            {/* Progress Bar - Retro Style */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-pixel">
                <span className="text-secondary">PROGRESS</span>
                <span className="text-accent">{Math.round(progress)}%</span>
              </div>
              <div className="h-8 bg-muted border-4 border-border relative overflow-hidden">
                <div 
                  className="h-full transition-all relative"
                  style={{ 
                    width: `${progress}%`,
                    background: `repeating-linear-gradient(
                      90deg,
                      ${color},
                      ${color} 10px,
                      hsl(190, 100%, 50%) 10px,
                      hsl(190, 100%, 50%) 20px
                    )`,
                    transitionDuration: '0.1s'
                  }}
                >
                  {/* Scanline effect */}
                  <div className="absolute inset-0 opacity-20" style={{
                    background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'
                  }} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center font-pixel text-xs text-foreground drop-shadow-lg">
                  {Math.round(progress)}%
                </div>
              </div>
            </div>

            {/* Message Display */}
            <div className="text-center">
              <p className="text-lg font-pixel animate-pulse" style={{ color }}>
                {currentMessage}
              </p>
            </div>

            {/* Coin Counter */}
            <div className="flex justify-center items-center gap-3 glass p-3 border-2 border-accent">
              <div className="w-6 h-6 bg-accent animate-float" style={{
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
              }} />
              <span className="text-xl font-pixel text-accent">x {coins}</span>
            </div>

          </div>

          {/* Icon Grid - Power-ups */}
          <div className="grid grid-cols-8 gap-2">
            {icons.map((iconData, i) => {
              const IconComp = iconData.Icon;
              const isActive = i === currentIcon;
              return (
                <div 
                  key={i}
                  className={`glass-strong p-3 border-2 transition-all ${
                    isActive ? 'border-primary scale-110' : 'border-border opacity-50'
                  }`}
                  style={{
                    transitionDuration: '0.1s',
                    boxShadow: isActive ? `0 0 0 4px ${iconData.color}, 4px 4px 0 hsl(220, 15%, 5%)` : '4px 4px 0 hsl(220, 15%, 5%)'
                  }}
                >
                  <IconComp 
                    className="w-5 h-5"
                    style={{ color: iconData.color }}
                  />
                </div>
              );
            })}
          </div>

          {/* Retro text */}
          <div className="text-center">
            <p className="text-xs font-pixel text-muted-foreground tracking-widest">
              PRESS START TO CONTINUE
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
