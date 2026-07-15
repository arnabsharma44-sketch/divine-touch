"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function ExpandingNav({ items, activeHref }: any) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="relative flex items-center h-full z-50"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <motion.div
        layout
        className="flex items-center bg-white/80 backdrop-blur-sm shadow-md border border-gold-200/50 rounded-full overflow-hidden p-1 gap-1 h-[48px] sm:h-[56px]"
        initial={{ width: "auto" }}
        animate={{ width: "auto" }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        {/* Toggle Button */}
        <button 
          className="flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-white hover:from-gold-500 hover:to-gold-700 transition-colors shadow-sm"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label="Menu"
        >
          <motion.div
            initial={false}
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isExpanded ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </motion.div>
        </button>

        {/* Links (visible when expanded) */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, width: 0, paddingRight: 0 }}
              animate={{ opacity: 1, width: "auto", paddingRight: 16 }}
              exit={{ opacity: 0, width: 0, paddingRight: 0 }}
              className="flex items-center gap-4 sm:gap-6 whitespace-nowrap overflow-hidden ml-2"
            >
              {items.map((item: any) => {
                const isActive = activeHref === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`text-sm sm:text-base font-semibold transition-all duration-300 hover:text-gold-500 ${
                      isActive ? "text-gold-600 scale-105" : "text-brown-700"
                    }`}
                    onClick={() => setIsExpanded(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
