import { useRef, MouseEvent } from "react";

export const useMagnetic = <T extends HTMLElement = HTMLElement>(strength: number = 0.3) => {
  const ref = useRef<T>(null);

  const handleMouseMove = (e: MouseEvent<T>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;
    
    ref.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0px, 0px)';
  };

  return { ref, handleMouseMove, handleMouseLeave };
};
