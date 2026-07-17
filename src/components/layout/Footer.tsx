"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { BRAND, CONTACT, DEVELOPER, CATEGORIES } from "@/lib/constants";
import { getDefaultWhatsAppUrl } from "@/lib/whatsapp";

// Simple SVG social icons
const SocialIcons = {
  Instagram: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
  ),
  Facebook: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  ),
  Youtube: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
  ),
  Twitter: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
  )
};

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-cream-100">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-24 h-24 rounded-full bg-white shrink-0 flex items-center justify-center shadow-md border border-brown-700/50">
                <Image src="/images/logo.png" width={96} height={96} alt="Divine Touch Logo" className="w-[90%] h-[90%] object-contain rounded-full" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl" style={{ color: "#FE7F2D" }}>Divine Touch</h3>
                <p className="text-gold-400 text-sm tracking-wider uppercase">Massage Chair</p>
              </div>
            </div>
            <p className="text-brown-300 text-sm leading-relaxed mt-4">
              Experience the divine art of relaxation with our premium massage chairs 
              and wellness products. Trusted across India for quality, comfort, and 
              after-sales support.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: SocialIcons.Instagram, label: "Instagram", url: CONTACT.instagram },
              ].map(({ icon: Icon, label, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-brown-700 flex items-center justify-center text-brown-300 hover:border-gold-500 hover:text-gold-400 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-base" style={{ color: "#FE7F2D" }}>Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/products", label: "Products" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brown-300 hover:text-gold-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-base" style={{ color: "#FE7F2D" }}>Categories</h4>
            <ul className="space-y-2.5">
              {CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/products?category=${cat.slug}`}
                    className="text-brown-300 hover:text-gold-400 transition-colors duration-300 text-sm"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-base" style={{ color: "#FE7F2D" }}>Contact Us</h4>
            <div className="space-y-3">
              <a
                href={getDefaultWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-brown-300 hover:text-whatsapp transition-colors duration-300"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                {CONTACT.whatsapp.display}
              </a>
              <a
                href={`tel:${CONTACT.phone.number}`}
                className="flex items-center gap-2.5 text-sm text-brown-300 hover:text-gold-400 transition-colors duration-300"
              >
                <Phone className="w-4 h-4 shrink-0" />
                {CONTACT.phone.display}
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-2.5 text-sm text-brown-300 hover:text-gold-400 transition-colors duration-300"
              >
                <Mail className="w-4 h-4 shrink-0" />
                {BRAND.email}
              </a>
              <div className="flex items-start gap-2.5 text-sm text-brown-300">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Pan-India Delivery & Service</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-brown-300">
                <Clock className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Mon – Sat: 10:00 AM – 8:00 PM<br/>Sunday: Closed</span>
              </div>
              <a
                href={getDefaultWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 mt-2"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brown-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-brown-300 text-xs">
              © {new Date().getFullYear()} {BRAND.fullName}. All rights reserved.
            </p>
            <p className="text-brown-500 text-xs">
              Website designed & developed by {DEVELOPER.name}
              <span className="mx-2">|</span>
              📞 {DEVELOPER.phone}
              <span className="mx-2">|</span>
              ✉ {DEVELOPER.email}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
