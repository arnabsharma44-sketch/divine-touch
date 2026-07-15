"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brown-900 h-[60vh] md:h-[80vh] flex flex-col justify-center">
      <div className="absolute inset-0 w-full h-full">
        <ImagePlaceholder
          label="Hero Banner — Premium massage chair lifestyle"
          aspectRatio="16/9"
          size="lg"
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white drop-shadow-lg" />
        </motion.div>
      </motion.div>
    </section>
  );
}
