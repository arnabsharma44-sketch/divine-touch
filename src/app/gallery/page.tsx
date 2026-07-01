"use client";

import React from "react";
import dynamic from "next/dynamic";
import SectionReveal from "@/components/shared/SectionReveal";

const DomeGallery = dynamic(() => import("@/components/shared/DomeGallery"), { ssr: false });

export default function GalleryPage() {
  // Use beautiful default abstract / modern images for the gallery dome
  return (
    <div className="bg-charcoal-900 min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full z-10 pt-20 pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <span className="text-gold-400 font-medium text-sm tracking-widest uppercase bg-charcoal-900/50 px-3 py-1 rounded-full backdrop-blur-sm">
              Product Gallery
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-cream-50 mt-4 drop-shadow-lg">
              Explore Every Angle
            </h1>
          </SectionReveal>
        </div>
      </div>

      <div style={{ width: '100vw', height: '100vh' }}>
        {/* We use DomeGallery with our product images */}
        <DomeGallery />
      </div>
    </div>
  );
}
