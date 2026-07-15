"use client";

import { usePathname } from "next/navigation";
import WhatsappIcon from "@/components/shared/WhatsappIcon";
import { getDefaultWhatsAppUrl } from "@/lib/whatsapp";
import ExpandingNav from "@/components/shared/ExpandingNav";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/reviews", label: "Reviews" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 left-0 w-full z-50 py-4 bg-cream-50/90 backdrop-blur-md border-b border-cream-200/50 pointer-events-auto transition-all h-[70px] sm:h-[90px]">
      <div className="w-full max-w-[1600px] mx-auto relative h-full flex items-center">
        
        {/* Left: Expanding Nav Pill */}
        <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50">
          <ExpandingNav items={navLinks} activeHref={pathname} />
        </div>

        {/* Center: Logo + Name (Highlighted) */}
        <div className="absolute left-1/2 -translate-x-1/2 z-40 pointer-events-auto flex items-center justify-center group">
          <a href="/" className="flex items-center gap-2 sm:gap-3">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-gold-400 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300 scale-105" />
              <img 
                src="/images/logo.png" 
                alt="Divine Touch Logo" 
                className="relative h-14 w-14 sm:h-16 sm:w-16 lg:h-24 lg:w-24 rounded-full object-contain transition-transform duration-300 group-hover:scale-105 mix-blend-multiply" 
              />
            </div>
            <span className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl hidden lg:block tracking-tight bg-gradient-to-r from-gold-600 via-[#FE7F2D] to-gold-500 bg-clip-text text-transparent drop-shadow-sm transition-all duration-300 group-hover:brightness-110 whitespace-nowrap">
              Divine Touch
            </span>
          </a>
        </div>
        
        {/* Right: WhatsApp Button */}
        <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 pointer-events-auto">
          <a
            href={getDefaultWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-whatsapp to-whatsapp-dark hover:from-whatsapp-dark hover:to-whatsapp text-white px-3 py-2 sm:px-6 sm:py-3 rounded-full font-bold text-xs sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 border border-white/20 whitespace-nowrap"
          >
            <WhatsappIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden md:inline">WhatsApp Us</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
