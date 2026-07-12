"use client";

import React from "react";
import dynamic from "next/dynamic";
import SectionReveal from "@/components/shared/SectionReveal";
import GalleryGrid from "@/components/gallery/GalleryGrid";

const InfiniteMenu = dynamic(() => import("@/components/shared/InfiniteMenu"), { ssr: false });

import { products } from "@/data/products";

// Take the first 5 products for the 3D Hero Menu
const items = products
  .filter(p => p.images && p.images.length > 0)
  .slice(0, 5)
  .map(p => ({
    image: p.images[0].src,
    link: `/products/${p.slug}`,
    title: p.name.split(' ')[0], // Keep title short for the menu
    description: p.name
  }));

export default function GalleryPage() {
  return (
    <div className="bg-charcoal-900 min-h-screen relative">
      {/* 3D Hero Section */}
      <div className="w-full pt-32 pb-16">
        <div className="w-full z-10 mb-12 pointer-events-none">
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

        <div className="w-full mx-auto relative" style={{ height: '700px', maxWidth: '1400px' }}>
          <InfiniteMenu items={items} scale={1.2} />
        </div>
      </div>

      {/* Grid Section */}
      <GalleryGrid />
    </div>
  );
}
