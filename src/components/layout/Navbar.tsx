"use client";

import { usePathname } from "next/navigation";
import PillNav from "@/components/shared/PillNav";
import WhatsappIcon from "@/components/shared/WhatsappIcon";
import { getDefaultWhatsAppUrl } from "@/lib/whatsapp";

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
    <nav className="sticky top-0 left-0 w-full z-50 flex justify-center py-4 bg-cream-50/80 backdrop-blur-md border-b border-cream-200/50 pointer-events-auto transition-all min-h-[80px]">
      <div className="pointer-events-auto w-full max-w-7xl px-4 sm:px-6 flex justify-center">
        <PillNav
          logo={
            <div className="font-heading font-bold text-brown-900 text-sm">DT</div>
          }
          logoAlt="Divine Touch Logo"
          items={navLinks}
          activeHref={pathname}
          baseColor="#d4af37" // Gold for the wrapper and hover circle
          pillColor="#fdfaf6" // Cream for the individual pills
          hoveredPillTextColor="#ffffff" // White text when hovering (on gold)
          pillTextColor="#3b261d" // Dark brown text for resting state (on cream)
          theme="light"
          initialLoadAnimation={true}
        />
      </div>
      
      {/* WhatsApp Button - floating right */}
      <div className="absolute right-4 sm:right-8 top-5 pointer-events-auto hidden md:block">
        <a
          href={getDefaultWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          <WhatsappIcon className="w-5 h-5" />
          WhatsApp Us
        </a>
      </div>
    </nav>
  );
}
