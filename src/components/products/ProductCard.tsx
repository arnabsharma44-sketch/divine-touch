"use client";

import Link from "next/link";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import SectionReveal from "@/components/shared/SectionReveal";
import { Product } from "@/data/products";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import BorderGlow from "@/components/shared/BorderGlow";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <BorderGlow
      edgeSensitivity={30}
      glowColor="255 215 0"
      backgroundColor="#ffffff"
      borderRadius={16}
      glowRadius={50}
      glowIntensity={1}
      animated={false}
      className="h-full"
    >
      <div className="group bg-white rounded-2xl overflow-hidden flex flex-col h-full h-[calc(100%-2px)]">
      {/* Image */}
      <Link href={`/products/${product.slug}`} className="block relative overflow-hidden">
        <ImagePlaceholder
          src={product.images[0]?.src}
          alt={product.images[0]?.alt}
          label={product.images[0]?.label || `${product.name} — front`}
          aspectRatio="875/1020"
          className="group-hover:scale-105 transition-transform duration-700"
        />
        {product.isSample && (
          <div className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            SAMPLE
          </div>
        )}
        {product.featured && !product.isSample && (
          <div className="absolute top-3 left-3 bg-gold-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Featured
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-heading font-semibold text-brown-900 text-lg group-hover:text-gold-600 transition-colors duration-300">
            {product.name}
          </h3>
        </Link>

        {/* Features */}
        <ul className="mt-3 space-y-1.5 flex-1">
          {(product.features || []).slice(0, 3).map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-brown-500">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0 mt-1.5" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Price */}
        <div className="mt-4 mb-3">
          {product.price ? (
            <span className="text-xl font-bold text-brown-900">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
          ) : (
            <span className="text-sm font-medium text-gold-600">
              Contact for price
            </span>
          )}
        </div>

        {/* CTA */}
        <WhatsAppButton productName={product.name} variant="compact" className="w-full justify-center" />
      </div>
      </div>
    </BorderGlow>
  );
}
