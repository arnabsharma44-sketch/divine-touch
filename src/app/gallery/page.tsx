"use client";

import React from "react";
import dynamic from "next/dynamic";
import SectionReveal from "@/components/shared/SectionReveal";
import GalleryGrid from "@/components/gallery/GalleryGrid";

const DomeGallery = dynamic(() => import("@/components/shared/DomeGallery"), { ssr: false });

import { products } from "@/data/products";

// Get all product images for the Dome Gallery
const galleryImages = products
  .flatMap(p => p.images.map(img => ({ src: img.src, alt: p.name })));

export default function GalleryPage() {
  return (
    <div className="bg-cream-50 min-h-screen relative overflow-hidden">
      {/* 3D Hero Section */}
      <div className="w-full pt-32 pb-16">
        <div className="w-full z-10 mb-12 pointer-events-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionReveal>
              <span className="text-gold-600 font-medium text-sm tracking-widest uppercase bg-white/80 border border-gold-200/50 shadow-sm px-4 py-1.5 rounded-full backdrop-blur-sm inline-block">
                Product Gallery
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-brown-900 mt-6">
                Explore Every Angle
              </h1>
            </SectionReveal>
          </div>
        </div>

        <div className="w-full mx-auto relative" style={{ height: '700px', maxWidth: '1400px' }}>
          <DomeGallery images={galleryImages} grayscale={false} overlayBlurColor="#fdfaf6" />
        </div>
      </div>

      {/* Grid Section */}
      <GalleryGrid />
    </div>
  );
}
