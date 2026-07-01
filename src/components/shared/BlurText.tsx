"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface BlurTextProps {
  text: string;
  delay?: number; // ms
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  onAnimationComplete?: () => void;
  className?: string;
  itemClassName?: string;
}

export default function BlurText({
  text,
  delay = 200,
  animateBy = "words",
  direction = "top",
  onAnimationComplete,
  className = "",
  itemClassName = "",
}: BlurTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const elements = animateBy === "words" ? text.split(" ") : text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay / 1000,
      },
    },
  };

  const item = {
    hidden: { 
      opacity: 0, 
      y: direction === "top" ? -20 : 20, 
      filter: "blur(8px)" 
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`flex flex-wrap ${className}`}
      onAnimationComplete={onAnimationComplete}
    >
      {elements.map((el, index) => (
        <motion.span
          key={index}
          variants={item}
          className={`inline-block ${itemClassName}`}
        >
          {el}{animateBy === "words" && index < elements.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </motion.div>
  );
}
