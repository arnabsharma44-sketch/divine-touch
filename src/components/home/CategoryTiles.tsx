"use client";

import Link from "next/link";
import SectionReveal from "@/components/shared/SectionReveal";
import CircularMedia from "@/components/shared/CircularMedia";

const categories = [
  {
    slug: "massage-chairs",
    name: "Massage Chairs",
    itemCount: "7 Products",
    imageLabel: "Massage Chairs",
  },
  {
    slug: "leg-massagers",
    name: "Leg & Foot",
    itemCount: "View Collection",
    imageLabel: "Leg Massagers",
  },
  {
    slug: "scalp-massagers",
    name: "Scalp Massagers",
    itemCount: "View Collection",
    imageLabel: "Scalp Massagers",
  },
  {
    slug: "other-massage-products",
    name: "Full Body",
    itemCount: "View Collection",
    imageLabel: "Full Body",
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-12">
            <span className="text-gold-600 font-medium text-sm tracking-widest uppercase">
              Shop by Category
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brown-900 mt-2">
              Explore Our Range
            </h2>
            <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4" />
          </div>
        </SectionReveal>

        {/* 
          Horizontal scroll strip on mobile/tablet (snap-x).
          Centered row on desktop.
        */}
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 lg:justify-center gap-6 sm:gap-10">
          {categories.map((cat, index) => (
            <div 
              key={cat.slug} 
              className="snap-center shrink-0 w-28 sm:w-36 lg:w-44 flex flex-col items-center"
            >
              <SectionReveal delay={index * 0.08} direction="up" className="w-full flex flex-col items-center">
                <Link
                  href={`/products?category=${cat.slug}`}
                  className="group flex flex-col items-center text-center w-full focus:outline-none"
                >
                  <CircularMedia 
                    label={cat.imageLabel} 
                    hasHoverEffect={true} 
                    sizeClass="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mb-4"
                  />
                  <h3 className="font-heading font-semibold text-brown-900 text-sm sm:text-base lg:text-lg group-hover:text-gold-600 transition-colors duration-300">
                    {cat.name}
                  </h3>
                  <p className="text-brown-500 text-xs sm:text-sm mt-1">
                    {cat.itemCount}
                  </p>
                </Link>
              </SectionReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
