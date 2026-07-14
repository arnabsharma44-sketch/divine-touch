"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProductImage } from "@/data/products";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";

interface ImageGalleryProps {
  images: ProductImage[];
  productName: string;
}

export default function ImageGallery({ images, productName }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative rounded-2xl overflow-hidden border border-cream-200 bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ImagePlaceholder
              src={images[activeIndex]?.src}
              alt={images[activeIndex]?.alt}
              label={images[activeIndex]?.label || `${productName} Image`}
              aspectRatio="1000/1044"
              size="lg"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                activeIndex === index
                  ? "border-gold-500 shadow-md"
                  : "border-transparent hover:border-gold-300 opacity-70 hover:opacity-100"
              }`}
            >
              <ImagePlaceholder
                src={img.src}
                alt={img.alt}
                label={`Thumb ${index + 1}`}
                aspectRatio="1000/1044"
                size="sm"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
