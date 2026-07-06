"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeContent from "@/components/shared/FadeContent";
import Image from "next/image";

const categories = ["All", "Massage Chairs", "Leg Massagers", "Accessories"];

const galleryItems = [
  {
    id: 1,
    title: "AM-006-B Chair",
    category: "Massage Chairs",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
    size: "large"
  },
  {
    id: 2,
    title: "Leg Massager Pro",
    category: "Leg Massagers",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop",
    size: "small"
  },
  {
    id: 3,
    title: "AMB-007-B",
    category: "Massage Chairs",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=800&auto=format&fit=crop",
    size: "medium"
  },
  {
    id: 4,
    title: "Foot Spa Setup",
    category: "Leg Massagers",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800&auto=format&fit=crop",
    size: "medium"
  },
  {
    id: 5,
    title: "Therapy Stones",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop",
    size: "small"
  },
  {
    id: 6,
    title: "Luxury Lounge",
    category: "Massage Chairs",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop",
    size: "large"
  }
];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = galleryItems.filter(
    item => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <section className="py-24 bg-cream-50 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeContent blur duration={1000}>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brown-900 mb-4">
              Curated Collection
            </h2>
            <p className="text-brown-500 max-w-2xl mx-auto">
              Browse through our premium selection of wellness products designed for ultimate comfort and rejuvenation.
            </p>
          </div>
        </FadeContent>

        {/* Filters */}
        <FadeContent blur duration={1000} delay={200}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                    ? "bg-gold-500 text-white shadow-md"
                    : "bg-cream-100 text-brown-600 hover:bg-cream-200"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeContent>

        {/* Masonry-style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`relative group rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 inline-block w-full break-inside-avoid ${item.size === 'large' ? 'h-96' : item.size === 'medium' ? 'h-72' : 'h-64'
                  }`}
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="absolute inset-0 bg-brown-900/20 group-hover:bg-brown-900/40 transition-colors duration-300 z-10" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <span className="text-gold-400 text-xs font-bold uppercase tracking-wider mb-1 block">
                    {item.category}
                  </span>
                  <h3 className="text-white font-heading text-xl font-bold drop-shadow-md">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-charcoal-900/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 backdrop-blur-md transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
