"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface BorderGlowProps {
  children: React.ReactNode;
  edgeSensitivity?: number;
  glowColor?: string;
  backgroundColor?: string;
  borderRadius?: number;
  glowRadius?: number;
  glowIntensity?: number;
  coneSpread?: number;
  animated?: boolean;
  colors?: string[];
  className?: string;
}

export default function BorderGlow({
  children,
  edgeSensitivity = 30,
  glowColor = "40 80 80", // Using RGB string
  backgroundColor = "transparent",
  borderRadius = 16,
  glowRadius = 40,
  glowIntensity = 1,
  coneSpread = 25,
  animated = false,
  colors = ["#c084fc", "#f472b6", "#38bdf8"],
  className = "",
}: BorderGlowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Check if mouse is within edgeSensitivity distance from the border
    const isNearLeft = x < edgeSensitivity;
    const isNearRight = x > rect.width - edgeSensitivity;
    const isNearTop = y < edgeSensitivity;
    const isNearBottom = y > rect.height - edgeSensitivity;

    // Only update if near the edge, or we can just always track it.
    // The snippet implies edge sensitivity, so we could fade out if not near edge.
    // For a consistent glow, tracking it everywhere works well too.
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const gradientString = animated && colors.length > 1
    ? `radial-gradient(${glowRadius}px circle at ${mousePosition.x}px ${mousePosition.y}px, ${colors[0]}, ${colors[1]}, transparent)`
    : `radial-gradient(${glowRadius}px circle at ${mousePosition.x}px ${mousePosition.y}px, rgb(${glowColor}), transparent)`;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative group ${className}`}
      style={{ borderRadius: `${borderRadius}px`, overflow: 'hidden', zIndex: 1 }}
    >
      {/* Background glow layer */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: gradientString,
          opacity: isHovered ? glowIntensity : 0,
        }}
      />
      
      {/* Content wrapper */}
      <div 
        className="relative z-10 w-full h-full"
        style={{
          backgroundColor,
          margin: "1px", // Create a 1px border area where the glow shows through
          width: "calc(100% - 2px)",
          height: "calc(100% - 2px)",
          borderRadius: `${Math.max(0, borderRadius - 1)}px`
        }}
      >
        {children}
      </div>
    </div>
  );
}
