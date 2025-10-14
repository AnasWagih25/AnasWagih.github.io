import { useEffect, useState, useCallback } from "react";

const BackgroundOrbs = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [clicks, setClicks] = useState<Array<{ x: number; y: number; id: number }>>([]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  const handleClick = useCallback((e: MouseEvent) => {
    const newClick = { x: e.clientX, y: e.clientY, id: Date.now() };
    setClicks(prev => [...prev, newClick]);
    setTimeout(() => {
      setClicks(prev => prev.filter(click => click.id !== newClick.id));
    }, 1000);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClick);
    };
  }, [handleMouseMove, handleScroll, handleClick]);

  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Pixelated gradient orbs */}
        <div
          className="absolute w-[600px] h-[600px] blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(330, 100%, 65%) 0%, transparent 70%)",
            top: "10%",
            left: "10%",
            animation: "orb-float 18s ease-in-out infinite",
            transform: `translateY(${scrollY * 0.1}px)`,
            imageRendering: 'pixelated',
          }}
        />
        
        <div
          className="absolute w-[700px] h-[700px] blur-3xl opacity-25"
          style={{
            background: "radial-gradient(circle, hsl(190, 100%, 50%) 0%, transparent 70%)",
            top: "50%",
            right: "10%",
            animation: "orb-float-2 22s ease-in-out infinite",
            transform: `translateY(${scrollY * -0.15}px)`,
            imageRendering: 'pixelated',
          }}
        />
        
        <div
          className="absolute w-[500px] h-[500px] blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(50, 100%, 60%) 0%, transparent 70%)",
            bottom: "15%",
            left: "50%",
            animation: "orb-float-3 25s ease-in-out infinite",
            transform: `translateY(${scrollY * 0.08}px)`,
            imageRendering: 'pixelated',
          }}
        />

        {/* Click explosion effects */}
        {clicks.map((click) => (
          <div
            key={click.id}
            className="absolute w-32 h-32"
            style={{
              left: `${click.x - 64}px`,
              top: `${click.y - 64}px`,
              background: "radial-gradient(circle, hsl(330, 100%, 65%) 0%, transparent 70%)",
              opacity: 0,
              animation: "ripple-effect 1s ease-out forwards",
              imageRendering: 'pixelated',
            }}
          />
        ))}

        {/* Pixel grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(330, 100%, 65%) 1px, transparent 1px),
              linear-gradient(90deg, hsl(330, 100%, 65%) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      {/* Custom Pixel Cursor */}
      <div
        id="custom-cursor"
        className="custom-cursor"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
};

export default BackgroundOrbs;
