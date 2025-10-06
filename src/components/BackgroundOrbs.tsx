import { useEffect, useState } from "react";

const BackgroundOrbs = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Orb 1 - Purple */}
        <div
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, hsl(263, 70%, 60%) 0%, transparent 70%)",
            top: "10%",
            left: "10%",
            animation: "orb-float 20s ease-in-out infinite",
          }}
        />
        
        {/* Orb 2 - Blue */}
        <div
          className="absolute w-[32rem] h-[32rem] rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, hsl(217, 91%, 60%) 0%, transparent 70%)",
            top: "60%",
            right: "10%",
            animation: "orb-float-2 25s ease-in-out infinite",
          }}
        />
        
        {/* Orb 3 - Pink */}
        <div
          className="absolute w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{
            background: "radial-gradient(circle, hsl(326, 78%, 65%) 0%, transparent 70%)",
            bottom: "15%",
            left: "50%",
            animation: "orb-float-3 30s ease-in-out infinite",
          }}
        />
        
        {/* Orb 4 - Cyan */}
        <div
          className="absolute w-72 h-72 rounded-full opacity-15 blur-3xl"
          style={{
            background: "radial-gradient(circle, hsl(186, 100%, 69%) 0%, transparent 70%)",
            top: "40%",
            left: "30%",
            animation: "orb-float 22s ease-in-out infinite reverse",
          }}
        />

        {/* Mouse follower orb */}
        <div
          className="absolute w-64 h-64 rounded-full opacity-10 blur-3xl transition-all duration-1000 ease-out"
          style={{
            background: "radial-gradient(circle, hsl(263, 70%, 60%) 0%, transparent 70%)",
            left: `${mousePosition.x - 128}px`,
            top: `${mousePosition.y - 128}px`,
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
