import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 bg-cream-50">
      <div className="text-center max-w-md">
        {/* Large 404 */}
        <h1 className="font-heading text-8xl sm:text-9xl font-bold text-gold-gradient mb-4 select-none">
          404
        </h1>

        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brown-900 mb-4">
          Page Not Found
        </h2>

        <p className="text-brown-500 mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let us help you find what you need.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 border-2 border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
          >
            <Search className="w-4 h-4" />
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}
