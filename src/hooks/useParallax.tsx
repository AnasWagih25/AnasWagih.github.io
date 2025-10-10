import { useEffect, useRef } from "react";

export const useParallax = (speed: number = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const scrolled = window.pageYOffset;
      const offset = ref.current.offsetTop;
      const relativeScroll = scrolled - offset;
      
      ref.current.style.transform = `translateY(${relativeScroll * speed}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return ref;
};
