import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { products, getProductBySlug, getRelatedProducts } from "@/data/products";
import { BRAND, CATEGORIES } from "@/lib/constants";
import ImageGallery from "@/components/product-detail/ImageGallery";
import ProductInfo from "@/components/product-detail/ProductInfo";
import SpecTable from "@/components/product-detail/SpecTable";
import RelatedProducts from "@/components/product-detail/RelatedProducts";
import StickyWhatsAppBar from "@/components/shared/StickyWhatsAppBar";

// Pre-render all products at build time
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  
  if (!product) return {};

  return {
    title: product.name,
    description: product.description || `Buy ${product.name} at ${BRAND.name}`,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product);
  const categoryName = CATEGORIES.find((c) => c.slug === product.category)?.name;

  return (
    <>
      <div className="bg-white min-h-screen pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-brown-500 mb-8 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide">
            <Link href="/" className="hover:text-gold-600 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 shrink-0" />
            <Link href="/products" className="hover:text-gold-600 transition-colors">Products</Link>
            <ChevronRight className="w-4 h-4 shrink-0" />
            <Link href={`/products?category=${product.category}`} className="hover:text-gold-600 transition-colors">
              {categoryName}
            </Link>
            <ChevronRight className="w-4 h-4 shrink-0" />
            <span className="text-brown-900 font-medium truncate">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Image Gallery */}
            <div className="lg:sticky lg:top-32 h-fit">
              <ImageGallery images={product.images} productName={product.name} />
            </div>

            {/* Right: Product Info */}
            <div className="pt-2">
              <ProductInfo product={product} />
              <SpecTable features={product.features} specifications={product.specifications} />
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts products={relatedProducts} />
      <StickyWhatsAppBar product={product} />
    </>
  );
}
