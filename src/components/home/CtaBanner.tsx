"use client";

import { MessageCircle } from "lucide-react";
import SectionReveal from "@/components/shared/SectionReveal";
import { getDefaultWhatsAppUrl } from "@/lib/whatsapp";

export default function CtaBanner() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-charcoal-900">
        <div className="absolute inset-0 opacity-10 placeholder-pattern bg-[length:40px_40px]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-500/20 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <SectionReveal>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-cream-100">Ready to Experience</span>{' '}
            <br className="hidden sm:block" />
            <span className="text-gold-gradient">True Relaxation?</span>
          </h2>
          <p className="text-cream-200 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Get our complete catalogue with pricing, specs, and current offers directly on WhatsApp. 
            Our wellness experts are ready to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getDefaultWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Get Full Catalogue
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
