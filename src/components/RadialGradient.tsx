import React from "react";
import { useEffect, useState, useRef } from "react";

interface RadialGradientProps {
  scale?: string;
  opacity?: string;
  position?: string;
  overflow?: string;
}

const RadialGradient: React.FC<RadialGradientProps> = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!gradientRef.current) return;

      // Check if parent element is banner quote
      const isBannerQuote = gradientRef.current.closest(".quote-banner");
      if (isBannerQuote) return;

      // Set mouse position immediately
      setMousePosition({ x: event.clientX, y: event.clientY });
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const gradientStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "150vw",
    height: "150vh",
    zIndex: 0,
    opacity: isHovering ? 0.7 : 0.0,
    transition: "opacity 500ms",
    background: `radial-gradient(2650px at ${mousePosition.x}px ${mousePosition.y}px, 
      rgba(255, 106, 61, 0.50),
      
      transparent 40%)`,
    pointerEvents: "none",
  };

  return <div ref={gradientRef} style={gradientStyle} />;
};

export default RadialGradient;
