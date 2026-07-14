"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import SectionReveal from "@/components/shared/SectionReveal";
import FadeContent from "@/components/shared/FadeContent";

export default function VideoShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section ref={containerRef} className="py-24 bg-charcoal-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionReveal>
          <div className="text-center mb-12">
            <span className="text-gold-400 font-medium text-sm tracking-widest uppercase">
              The Experience
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mt-4 drop-shadow-md" style={{ color: "#C9996B" }}>
              See the Divine Touch in Action
            </h2>
          </div>
        </SectionReveal>

        <FadeContent blur duration={1200} delay={0.2}>
          <motion.div 
            style={{ scale }}
            className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl group cursor-pointer border border-white/10"
          >
            {/* Parallax Background Image */}
            <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
              <img
                src="/images/products/am-006-b/side.jpg"
                alt="Divine Touch Massage Chair Experience"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </motion.div>

            {/* Overlays */}
            <div className="absolute inset-0 bg-charcoal-900/30 group-hover:bg-charcoal-900/40 transition-colors duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gold-500/20 backdrop-blur-md border border-gold-400/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-gold-500/30 transition-all duration-300">
                <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-2 drop-shadow-lg" fill="currentColor" />
              </div>
            </div>

            {/* Bottom Text */}
            <div className="absolute bottom-0 left-0 w-full p-8 sm:p-12 transform translate-y-4 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2">
                Uncompromising Luxury
              </h3>
              <p className="text-cream-100/80 max-w-lg hidden sm:block">
                Discover the engineering and craftsmanship behind our flagship zero-gravity massage chairs.
              </p>
            </div>
          </motion.div>
        </FadeContent>
      </div>
    </section>
  );
}
