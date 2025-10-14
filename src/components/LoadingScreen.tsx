import { useState, useEffect } from "react";
import { Sparkles, Zap, Cpu, Code, Rocket, Star, Heart, Trophy } from "lucide-react";

const LoadingScreen = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [currentIcon, setCurrentIcon] = useState(0);
  const [lives, setLives] = useState(3);
  const [coins, setCoins] = useState(0);
  const [level, setLevel] = useState(1);
  const [characterFrame, setCharacterFrame] = useState(0);
  const [dialogueIndex, setDialogueIndex] = useState(0);

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

  const dialogues = [
    "PLAYER 1 START!",
    "LOADING ASSETS...",
    "SPAWNING HERO...",
    "PREPARING WORLD...",
    "CHECKING INVENTORY...",
    "READY TO ADVENTURE!",
    "GAME ON!",
    "LET'S GO!"
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
        setCharacterFrame(prev => (prev + 1) % 4);
      }

      if (currentStep % 12 === 0) {
        setDialogueIndex(prev => (prev + 1) % dialogues.length);
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

  // Pixel art character animation frames
  const characterFrames = [
    "🧙‍♂️", "🧙", "🧙‍♂️", "🧙"
  ];

  return (
    <div className="fixed inset-0 z-50 bg-background overflow-hidden select-none">
      {/* Pixel grid background */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(hsl(330, 100%, 65%) 1px, transparent 1px),
          linear-gradient(90deg, hsl(330, 100%, 65%) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }} />

      {/* Main container */}
      <div className="relative h-full w-full flex items-center justify-center p-4">
        <div className="max-w-5xl w-full space-y-6">
          
          {/* Game HUD - Top Row */}
          <div className="grid grid-cols-3 gap-4">
            {/* Score */}
            <div className="glass-strong p-4 border-4 border-primary relative">
              <div className="absolute -top-2 -left-2 w-3 h-3 bg-primary" />
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-secondary" />
              <div className="text-xs font-pixel text-muted-foreground mb-1">SCORE</div>
              <div className="text-2xl font-pixel text-primary tabular-nums">{coins * 100}</div>
            </div>

            {/* Level */}
            <div className="glass-strong p-4 border-4 border-accent relative">
              <div className="absolute -top-2 -left-2 w-3 h-3 bg-accent" />
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-primary" />
              <div className="text-xs font-pixel text-muted-foreground mb-1">LEVEL</div>
              <div className="text-2xl font-pixel text-accent tabular-nums">{level}</div>
            </div>

            {/* Lives */}
            <div className="glass-strong p-4 border-4 border-destructive relative">
              <div className="absolute -top-2 -left-2 w-3 h-3 bg-destructive" />
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-accent" />
              <div className="text-xs font-pixel text-muted-foreground mb-1">LIVES</div>
              <div className="text-2xl font-pixel flex gap-2">
                {[...Array(lives)].map((_, i) => (
                  <Heart key={i} className="w-6 h-6 fill-destructive text-destructive animate-pixel-bounce" style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
            </div>
          </div>

          {/* Main Game Screen */}
          <div className="glass-strong p-8 border-4 border-secondary relative">
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-primary" />
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-secondary" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-primary" />
            
            <div className="space-y-6">
              {/* Character and Icon Display */}
              <div className="grid grid-cols-2 gap-6">
                {/* Pixel Art Character */}
                <div className="glass-strong p-6 border-4 border-primary relative flex flex-col items-center justify-center">
                  <div className="absolute -top-2 -left-2 w-3 h-3 bg-primary" />
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-accent" />
                  <div className="text-6xl animate-pixel-bounce mb-4">
                    {characterFrames[characterFrame]}
                  </div>
                  <div className="font-pixel text-xs text-primary">HERO</div>
                  <div className="w-full h-2 bg-muted border-2 border-border mt-3">
                    <div 
                      className="h-full bg-primary transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* Item/Icon Display */}
                <div className="glass-strong p-6 border-4 border-secondary relative flex flex-col items-center justify-center">
                  <div className="absolute -top-2 -left-2 w-3 h-3 bg-secondary" />
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-primary" />
                  <div 
                    className="p-6 border-4 animate-glow mb-4"
                    style={{ borderColor: color }}
                  >
                    <Icon 
                      className="w-16 h-16 animate-pixel-bounce"
                      style={{ color }}
                    />
                  </div>
                  <div className="font-pixel text-xs text-secondary">POWER-UP</div>
                </div>
              </div>

              {/* Dialogue Box */}
              <div className="glass-strong p-6 border-4 border-accent relative">
                <div className="absolute -top-2 -left-2 w-3 h-3 bg-accent" />
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-primary" />
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-primary" />
                <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-secondary" />
                
                {/* Dialogue arrow */}
                <div className="absolute -top-4 left-8 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-accent" />
                
                <div className="flex items-start gap-3">
                  <div className="text-3xl">{characterFrames[characterFrame]}</div>
                  <div className="flex-1">
                    <div className="font-pixel text-xs text-accent mb-2">&gt;&gt; SYSTEM MESSAGE:</div>
                    <p className="font-pixel text-sm animate-pulse" style={{ color }}>
                      {dialogues[dialogueIndex]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-pixel">
                  <span className="text-secondary">LOADING</span>
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

              {/* Coin Counter */}
              <div className="flex justify-center items-center gap-3 glass p-3 border-2 border-accent">
                <div className="w-6 h-6 bg-accent animate-float" style={{
                  clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                }} />
                <span className="text-xl font-pixel text-accent">x {coins}</span>
              </div>
            </div>
          </div>

          {/* Power-ups Grid */}
          <div className="grid grid-cols-8 gap-2">
            {icons.map((iconData, i) => {
              const IconComp = iconData.Icon;
              const isActive = i === currentIcon;
              return (
                <div 
                  key={i}
                  className={`glass-strong p-3 border-2 transition-all relative ${
                    isActive ? 'border-primary scale-110' : 'border-border opacity-50'
                  }`}
                  style={{
                    transitionDuration: '0.1s',
                    boxShadow: isActive ? `0 0 0 4px ${iconData.color}, 4px 4px 0 hsl(220, 15%, 5%)` : '4px 4px 0 hsl(220, 15%, 5%)'
                  }}
                >
                  {isActive && (
                    <>
                      <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary" />
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent" />
                    </>
                  )}
                  <IconComp 
                    className="w-5 h-5"
                    style={{ color: iconData.color }}
                  />
                </div>
              );
            })}
          </div>

          {/* Start Prompt */}
          <div className="text-center">
            <p className="text-xs font-pixel text-muted-foreground tracking-widest animate-pulse">
              ▶ PRESS START TO CONTINUE ◀
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
