"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";

interface CircularMediaProps {
  label: string;
  sizeClass?: string;
  className?: string;
  hasHoverEffect?: boolean;
}

export default function CircularMedia({
  label,
  sizeClass = "w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40",
  className = "",
  hasHoverEffect = false,
}: CircularMediaProps) {
  return (
    <motion.div
      whileHover={hasHoverEffect ? { scale: 1.05 } : {}}
      whileTap={hasHoverEffect ? { scale: 0.95 } : {}}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`relative rounded-full border-2 border-gold-500 overflow-hidden shrink-0 flex items-center justify-center bg-cream-100 placeholder-pattern ${
        hasHoverEffect
          ? "hover:border-gold-400 hover:shadow-xl hover:shadow-gold-500/20"
          : ""
      } ${sizeClass} ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 p-2 text-center opacity-70">
        <Camera className="w-6 h-6 text-gold-400 shrink-0" />
        <span className="text-brown-500 text-[10px] sm:text-xs font-medium leading-tight">
          {label}
        </span>
      </div>
    </motion.div>
  );
}
