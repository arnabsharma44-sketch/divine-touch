"use client";

import { Award, HeartPulse, Headphones, Sparkles } from "lucide-react";
import SectionReveal from "@/components/shared/SectionReveal";
import BorderGlow from "@/components/shared/BorderGlow";

const benefits = [
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "Every product in our collection is carefully selected for superior build quality, durability, and therapeutic effectiveness.",
  },
  {
    icon: HeartPulse,
    title: "Wellness Focused",
    description:
      "Our massage chairs are designed with physiotherapy principles to provide genuine health benefits — not just comfort.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "From product selection to after-sales service, our team is available to guide you every step of the way.",
  },
  {
    icon: Sparkles,
    title: "Luxury Experience",
    description:
      "Transform your living space into a personal spa with our premium massage chairs that blend style with function.",
  },
];

import MagicBento from "@/components/shared/MagicBento";

export default function WhyDivineTouch() {
  return (
    <section className="py-20 bg-gradient-to-br from-brown-900 via-charcoal-900 to-brown-900 text-cream-50 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionReveal>
          <div className="text-center mb-14">
            <span className="text-gold-400 font-medium text-sm tracking-widest uppercase">
              Why Choose Us
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-2" style={{ color: "#C9996B" }}>
              Why Divine Touch
            </h2>
            <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4" />
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="relative mx-auto flex justify-center">
            <MagicBento 
              textAutoHide={false}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={400}
              particleCount={15}
              glowColor="212, 175, 55"
            />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
