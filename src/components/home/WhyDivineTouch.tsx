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

export default function WhyDivineTouch() {
  return (
    <section className="py-20 bg-gradient-to-br from-brown-900 via-charcoal-900 to-brown-900 text-cream-50 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold-400/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionReveal>
          <div className="text-center mb-14">
            <span className="text-gold-400 font-medium text-sm tracking-widest uppercase">
              Why Choose Us
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-cream-50 mt-2">
              Why Divine Touch
            </h2>
            <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4" />
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <SectionReveal key={benefit.title} delay={index * 0.12}>
              <BorderGlow 
                edgeSensitivity={30} 
                glowColor="255 215 0" // Gold rgb
                backgroundColor="transparent"
                borderRadius={20}
                glowRadius={60}
                glowIntensity={1}
                animated={false}
                className="h-full"
              >
                <div className="text-center group p-6 bg-charcoal-800/30 rounded-[19px] h-full border border-gold-500/10 hover:bg-charcoal-800/50 transition-colors">
                  <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/20 group-hover:scale-110 transition-all duration-300">
                    <benefit.icon className="w-7 h-7 text-gold-400 group-hover:rotate-12 transition-transform" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-brown-300 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </BorderGlow>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
