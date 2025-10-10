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
        {/* Main glowing orbs with enhanced animations */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, hsl(270, 100%, 65%) 0%, hsl(270, 100%, 45%) 30%, transparent 70%)",
            top: "5%",
            left: "5%",
            opacity: 0.25,
            animation: "orb-float 18s ease-in-out infinite",
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />
        
        <div
          className="absolute w-[700px] h-[700px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, hsl(250, 100%, 70%) 0%, hsl(230, 100%, 60%) 30%, transparent 70%)",
            top: "50%",
            right: "5%",
            opacity: 0.3,
            animation: "orb-float-2 22s ease-in-out infinite",
            transform: `translateY(${scrollY * -0.15}px)`,
          }}
        />
        
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, hsl(280, 100%, 75%) 0%, hsl(270, 100%, 55%) 30%, transparent 70%)",
            bottom: "10%",
            left: "50%",
            opacity: 0.2,
            animation: "orb-float-3 25s ease-in-out infinite",
            transform: `translateY(${scrollY * 0.08}px)`,
          }}
        />
        
        <div
          className="absolute w-[450px] h-[450px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, hsl(260, 100%, 68%) 0%, transparent 70%)",
            top: "30%",
            left: "25%",
            opacity: 0.18,
            animation: "orb-float 20s ease-in-out infinite reverse, orb-pulse 8s ease-in-out infinite",
          }}
        />

        {/* Interactive mouse follower with glow */}
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl transition-all duration-700 ease-out"
          style={{
            background: "radial-gradient(circle, hsl(270, 100%, 65%) 0%, hsl(280, 100%, 70%) 50%, transparent 70%)",
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
            opacity: 0.15,
          }}
        />

        {/* Click explosion effects */}
        {clicks.map((click) => (
          <div
            key={click.id}
            className="absolute w-32 h-32 rounded-full"
            style={{
              left: `${click.x - 64}px`,
              top: `${click.y - 64}px`,
              background: "radial-gradient(circle, hsl(270, 100%, 65%) 0%, transparent 70%)",
              opacity: 0,
              animation: "ripple-effect 1s ease-out forwards",
            }}
          />
        ))}

        {/* Grid overlay for depth */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(270, 100%, 65%) 1px, transparent 1px),
              linear-gradient(90deg, hsl(270, 100%, 65%) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Custom Cursor */}
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
