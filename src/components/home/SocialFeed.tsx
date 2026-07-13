"use client";

import React from "react";
import { Play } from "lucide-react";
import SectionReveal from "@/components/shared/SectionReveal";
import FadeContent from "@/components/shared/FadeContent";
import { CONTACT } from "@/lib/constants";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

// Thumbnails are loaded from public/images/reels/ as defined in MEDIA_MANIFEST.md
const reels = [
  { id: 1, thumbnail: "/images/reels/reel-1.jpg", link: "https://www.instagram.com/reel/DaLX32cPXL7/" },
  { id: 2, thumbnail: "/images/reels/reel-2.jpg", link: "https://www.instagram.com/reel/DaH5LP6vP52/" },
  { id: 3, thumbnail: "/images/reels/reel-3.jpg", link: "https://www.instagram.com/reel/DZT_IONv1Kp/" },
  { id: 4, thumbnail: "/images/reels/reel-4.jpg", link: "https://www.instagram.com/reel/DZRwx32xAcG/" },
  { id: 5, thumbnail: "/images/reels/reel-5.jpg", link: "https://www.instagram.com/reel/DZO6qsjvkQj/" },
  { id: 6, thumbnail: "/images/reels/reel-6.jpg", link: "https://www.instagram.com/reel/DZXt2gDP7vZ/" },
];

export default function SocialFeed() {
  return (
    <section className="py-24 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <div>
              <span className="text-gold-600 font-medium text-sm tracking-widest uppercase">
                Official Reels
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brown-900 mt-2">
                @divin_touch_
              </h2>
            </div>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brown-900 text-white rounded-full hover:bg-gold-600 transition-colors duration-300 font-medium shadow-md hover:shadow-lg"
            >
              <InstagramIcon className="w-5 h-5" />
              Follow for more
            </a>
          </div>
        </SectionReveal>

        <FadeContent blur duration={1200} delay={0.2}>
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {reels.map((reel) => (
              <a 
                key={reel.id} 
                href={reel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group rounded-2xl overflow-hidden cursor-pointer inline-block w-full shadow-md hover:shadow-xl transition-all duration-300 mb-4"
              >
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-300 z-10" />
                
                {/* Play Button Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-90 group-hover:scale-110 transition-all duration-300 z-20">
                  <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/30">
                    <Play className="w-5 h-5 text-white ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Instagram logo top right */}
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <InstagramIcon className="w-6 h-6 text-white drop-shadow-md" />
                </div>

                <img
                  src={reel.thumbnail}
                  alt={`Divine Touch Reel ${reel.id}`}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </a>
            ))}
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
