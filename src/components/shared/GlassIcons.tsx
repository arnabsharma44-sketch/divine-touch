"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export interface GlassItem {
  icon?: React.ReactNode;
  image?: string;
  color?: string;
  label: string;
  href?: string;
}

interface GlassIconsProps {
  items: GlassItem[];
  className?: string;
  colorful?: boolean;
}

export default function GlassIcons({ items, className = "", colorful = false }: GlassIconsProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10%" }}
      className={`grid grid-cols-2 md:grid-cols-4 gap-6 p-4 sm:p-8 ${className}`}
    >
      {items.map((item, i) => {
        const content = (
          <motion.div
            variants={itemAnim}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className={`
              relative flex flex-col items-center justify-center p-6 rounded-3xl cursor-pointer h-full
              backdrop-blur-md bg-white/30 border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]
              transition-colors duration-300
              ${colorful && item.color ? `hover:bg-${item.color}-100/40` : "hover:bg-white/40"}
            `}
          >
            {item.image ? (
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-4 border-4 border-white/60 shadow-inner bg-cream-100 flex items-center justify-center shrink-0">
                <img src={item.image} alt={item.label} className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className={`text-4xl mb-4 ${colorful && item.color ? `text-${item.color}-500` : "text-brown-700"}`}>
                {item.icon}
              </div>
            )}
            
            <span className="font-heading font-medium text-brown-900 text-sm sm:text-base tracking-wide text-center">
              {item.label}
            </span>
          </motion.div>
        );

        return item.href ? (
          <Link key={i} href={item.href} className="block h-full outline-none focus:ring-2 focus:ring-gold-500 rounded-3xl">
            {content}
          </Link>
        ) : (
          <div key={i} className="h-full">{content}</div>
        );
      })}
    </motion.div>
  );
}
