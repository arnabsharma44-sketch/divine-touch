"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, ChevronDown } from "lucide-react";
import { getDefaultWhatsAppUrl } from "@/lib/whatsapp";
import BlurText from "@/components/shared/BlurText";
import CurvedLoop from "@/components/shared/CurvedLoop";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import FadeContent from "@/components/shared/FadeContent";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200 min-h-[90vh] flex flex-col justify-center">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-300 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block text-gold-600 font-medium text-sm tracking-widest uppercase mb-4 border border-gold-300 px-4 py-1.5 rounded-full">
                Premium Wellness
              </span>
            </motion.div>

            <div className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-brown-900 leading-tight mb-6 flex flex-col gap-1 sm:gap-2">
              <BlurText
                text="Elevate Your"
                delay={150}
                animateBy="words"
                direction="bottom"
              />
              <BlurText
                text="Relaxation"
                delay={450}
                animateBy="words"
                direction="bottom"
                itemClassName="text-gold-gradient"
              />
              <BlurText
                text="at Home & Office"
                delay={750}
                animateBy="words"
                direction="bottom"
              />
            </div>

            <FadeContent blur duration={1200} delay={300} className="mb-8 max-w-lg">
              <p className="text-brown-500 text-lg leading-relaxed">
                Discover our curated collection of premium massage chairs and
                wellness products. Designed for those who value comfort, health,
                and the finer things in life.
              </p>
            </FadeContent>

            <FadeContent blur duration={1200} delay={450} className="flex flex-col sm:flex-row gap-4">
              <a
                href={getDefaultWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 border-2 border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300"
              >
                View Products
              </Link>
            </FadeContent>
          </div>

          {/* Hero Image & Offer Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold-300/30 to-gold-500/20 blur-2xl pointer-events-none" />
              
              <AnimatePresence mode="wait">
                {currentSlide === 0 ? (
                  <motion.div
                    key="slide-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 z-10"
                  >
                    <ImagePlaceholder
                      label="Hero — Premium massage chair lifestyle"
                      aspectRatio="4/3"
                      size="lg"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="slide-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 z-10 bg-brown-900 flex items-center justify-center p-6 sm:p-8"
                  >
                    {/* Background subtle image */}
                    <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200')] bg-cover bg-center" />
                    
                    {/* Frosted Glass Offer Card */}
                    <div className="relative z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 w-full max-w-sm text-center shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                      <span className="inline-block text-gold-400 font-semibold tracking-wider uppercase text-xs mb-3 border border-gold-400/30 px-3 py-1 rounded-full bg-gold-900/20">
                        Seasonal Event
                      </span>
                      <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">Save ₹20,000</h3>
                      <p className="text-cream-100 text-sm sm:text-base mb-6 leading-relaxed">
                        On the new AM 006 B series.<br/> Experience ultimate relaxation today.
                      </p>
                      <button className="bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-brown-950 font-bold py-3 px-8 rounded-full w-full transition-all hover:scale-105 hover:shadow-lg shadow-gold-500/20">
                        Claim Offer
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Carousel Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                <button
                  onClick={() => setCurrentSlide(0)}
                  className={`h-2 rounded-full transition-all duration-300 ${currentSlide === 0 ? "w-8 bg-gold-500" : "w-2 bg-white/50 hover:bg-white/80"}`}
                  aria-label="View Lifestyle Image"
                />
                <button
                  onClick={() => setCurrentSlide(1)}
                  className={`h-2 rounded-full transition-all duration-300 ${currentSlide === 1 ? "w-8 bg-gold-500" : "w-2 bg-white/50 hover:bg-white/80"}`}
                  aria-label="View Special Offer"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-20 pointer-events-none scale-150 rotate-[-5deg]">
        <CurvedLoop 
          marqueeText="PREMIUM WELLNESS ✦ LUXURY ✦ DIVINE TOUCH ✦ REJUVENATION ✦ "
          speed={2.5}
          curveAmount={350}
          interactive={false}
          className="text-brown-800"
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-gold-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
