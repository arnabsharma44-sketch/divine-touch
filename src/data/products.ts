import { ProductCategory } from "@/lib/constants";

export interface ProductImage {
  src: string;
  alt: string;
  label: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  price: number | null;
  specs: string[];
  description?: string;
  images: ProductImage[];
  featured?: boolean;
  isSample?: boolean;
}

export const products: Product[] = [
  // ═══════════════════════════════════════
  // MASSAGE CHAIRS
  // ═══════════════════════════════════════
  {
    id: "amb-007-b",
    name: "AMB 007 B",
    slug: "amb-007-b",
    category: "massage-chairs",
    price: null,
    specs: [
      "Full body massage with zero gravity recline",
      "Multiple massage modes and intensity levels",
      "Built-in heat therapy system",
      "Bluetooth speaker integration",
    ],
    description:
      "Experience complete relaxation with the AMB 007 B premium massage chair. Designed for full-body comfort with advanced massage technology.",
    images: [
      {
        src: "/images/products/amb-007-b/front.jpg",
        alt: "AMB 007 B Massage Chair - Front View",
        label: "AMB 007 B — front angle",
      },
      {
        src: "/images/products/amb-007-b/side.jpg",
        alt: "AMB 007 B Massage Chair - Side View",
        label: "AMB 007 B — side angle",
      },
      {
        src: "/images/products/amb-007-b/detail.jpg",
        alt: "AMB 007 B Massage Chair - Detail",
        label: "AMB 007 B — detail view",
      },
    ],
    featured: true,
  },
  {
    id: "am-006-b",
    name: "AM 006 B",
    slug: "am-006-b",
    category: "massage-chairs",
    price: null,
    specs: [
      "Advanced 3D massage technology",
      "Zero gravity positioning",
      "Full body air compression",
      "LCD touch control panel",
    ],
    description:
      "The AM 006 B brings professional-grade massage therapy to your home with advanced 3D rollers and intelligent body scanning.",
    images: [
      {
        src: "/images/products/am-006-b/detail.jpg",
        alt: "AM 006 B Massage Chair - Detail",
        label: "AM 006 B — detail view",
      },
      {
        src: "/images/products/am-006-b/side.jpg",
        alt: "AM 006 B Massage Chair - Side View",
        label: "AM 006 B — side angle",
      },
      {
        src: "/images/products/am-006-b/front.jpg",
        alt: "AM 006 B Massage Chair - Front View",
        label: "AM 006 B — front angle",
      },
    ],
    featured: true,
  },
  {
    id: "am-009",
    name: "AM 009",
    slug: "am-009",
    category: "massage-chairs",
    price: null,
    specs: [
      "SL-track massage system",
      "Foot roller reflexology",
      "Auto body scan technology",
      "Space-saving design",
    ],
    description:
      "The AM 009 features an SL-track system that follows the natural curvature of your spine for a deep, effective massage.",
    images: [
      {
        src: "/images/products/am-009/front.jpg",
        alt: "AM 009 Massage Chair - Front View",
        label: "AM 009 — front angle",
      },
      {
        src: "/images/products/am-009/side.jpg",
        alt: "AM 009 Massage Chair - Side View",
        label: "AM 009 — side angle",
      },
      {
        src: "/images/products/am-009/detail.jpg",
        alt: "AM 009 Massage Chair - Detail",
        label: "AM 009 — detail view",
      },
    ],
    featured: true,
  },
  {
    id: "am-444-n",
    name: "AM 444 N",
    slug: "am-444-n",
    category: "massage-chairs",
    price: null,
    specs: [
      "4D massage mechanism",
      "Voice control enabled",
      "Calf and foot massage",
      "Automatic programs for neck, back and waist",
    ],
    description:
      "The AM 444 N offers 4D massage technology for a lifelike massage experience with customizable pressure and speed.",
    images: [
      {
        src: "/images/products/am-444-n/frontv2.jpg",
        alt: "AM 444 N Massage Chair - Front View",
        label: "AM 444 N — front angle",
      },
      {
        src: "/images/products/am-444-n/sidev1.jpg",
        alt: "AM 444 N Massage Chair - Side View",
        label: "AM 444 N — side angle",
      },
      {
        src: "/images/products/am-444-n/detail.jpg",
        alt: "AM 444 N Massage Chair - Detail",
        label: "AM 444 N — detail view",
      },
    ],
    featured: false,
  },
  {
    id: "am-888",
    name: "AM 888",
    slug: "am-888",
    category: "massage-chairs",
    price: null,
    specs: [
      "Premium full body massage chair",
      "Multiple airbag compression zones",
      "Infrared heating therapy",
      "USB charging port",
    ],
    description:
      "The AM 888 is a premium full-body massage chair with multiple airbag compression zones and infrared heating for therapeutic relief.",
    images: [
      {
        src: "/images/products/am-888/front.jpg",
        alt: "AM 888 Massage Chair - Front View",
        label: "AM 888 — front angle",
      },
      {
        src: "/images/products/am-888/side.jpg",
        alt: "AM 888 Massage Chair - Side View",
        label: "AM 888 — side angle",
      },
      {
        src: "/images/products/am-888/detail.jpg",
        alt: "AM 888 Massage Chair - Detail",
        label: "AM 888 — detail view",
      },
    ],
    featured: false,
  },
  {
    id: "am-333",
    name: "AM 333",
    slug: "am-333",
    category: "massage-chairs",
    price: null,
    specs: [
      "Compact design for home and office",
      "Shiatsu and kneading massage",
      "Adjustable recline angles",
      "Easy-to-use remote control",
    ],
    description:
      "The AM 333 delivers powerful Shiatsu and kneading massage in a compact form factor, perfect for both home and office environments.",
    images: [
      {
        src: "/images/products/am-333/front.jpg",
        alt: "AM 333 Massage Chair - Front View",
        label: "AM 333 — front angle",
      },
      {
        src: "/images/products/am-333/side.jpg",
        alt: "AM 333 Massage Chair - Side View",
        label: "AM 333 — side angle",
      },
      {
        src: "/images/products/am-333/detail.jpg",
        alt: "AM 333 Massage Chair - Detail",
        label: "AM 333 — detail view",
      },
    ],
    featured: false,
  },
  {
    id: "am-6666",
    name: "AM 6666",
    slug: "am-6666",
    category: "massage-chairs",
    price: null,
    specs: [
      "Flagship luxury massage chair",
      "Dual-core massage engine",
      "Full body stretch function",
      "Premium upholstery and build quality",
    ],
    description:
      "The AM 6666 is our flagship luxury model featuring a dual-core massage engine and full-body stretch function for the ultimate relaxation experience.",
    images: [
      {
        src: "/images/products/am-6666/frontv1.jpg",
        alt: "AM 6666 Massage Chair - Front View",
        label: "AM 6666 — front angle",
      },
      {
        src: "/images/products/am-6666/sidev2.jpg",
        alt: "AM 6666 Massage Chair - Side View",
        label: "AM 6666 — side angle",
      },
      {
        src: "/images/products/am-6666/detail.jpg",
        alt: "AM 6666 Massage Chair - Detail",
        label: "AM 6666 — detail view",
      },
    ],
    featured: true,
  },

  // ═══════════════════════════════════════
  // LEG MASSAGERS (sample placeholders)
  // ═══════════════════════════════════════
  {
    id: "sample-leg-1",
    name: "Sample Leg Massager 1",
    slug: "sample-leg-massager-1",
    category: "leg-massagers",
    price: null,
    specs: [
      "Air compression leg massage",
      "Adjustable intensity levels",
      "Heat therapy function",
      "Portable and lightweight",
    ],
    images: [
      {
        src: "/images/products/sample-leg-1/front.jpg",
        alt: "Sample Leg Massager 1",
        label: "Sample Leg Massager 1 — front",
      },
    ],
    isSample: true,
  },
  {
    id: "sample-leg-2",
    name: "Sample Leg Massager 2",
    slug: "sample-leg-massager-2",
    category: "leg-massagers",
    price: null,
    specs: [
      "Knee and calf massage",
      "Multiple vibration modes",
      "Ergonomic wrap-around design",
      "Rechargeable battery",
    ],
    images: [
      {
        src: "/images/products/sample-leg-2/front.jpg",
        alt: "Sample Leg Massager 2",
        label: "Sample Leg Massager 2 — front",
      },
    ],
    isSample: true,
  },

  // ═══════════════════════════════════════
  // FOOT MASSAGERS (sample placeholders)
  // ═══════════════════════════════════════
  {
    id: "sample-foot-1",
    name: "Sample Foot Massager 1",
    slug: "sample-foot-massager-1",
    category: "foot-massagers",
    price: null,
    specs: [
      "Deep kneading foot rollers",
      "Shiatsu pressure points",
      "Adjustable heat settings",
      "Fits up to size 12",
    ],
    images: [
      {
        src: "/images/products/sample-foot-1/front.jpg",
        alt: "Sample Foot Massager 1",
        label: "Sample Foot Massager 1 — front",
      },
    ],
    isSample: true,
  },
  {
    id: "sample-foot-2",
    name: "Sample Foot Massager 2",
    slug: "sample-foot-massager-2",
    category: "foot-massagers",
    price: null,
    specs: [
      "Electric foot spa massager",
      "Water-resistant design",
      "Vibration and rolling massage",
      "Timer function",
    ],
    images: [
      {
        src: "/images/products/sample-foot-2/front.jpg",
        alt: "Sample Foot Massager 2",
        label: "Sample Foot Massager 2 — front",
      },
    ],
    isSample: true,
  },

  // ═══════════════════════════════════════
  // SCALP MASSAGERS (sample placeholders)
  // ═══════════════════════════════════════
  {
    id: "sample-scalp-1",
    name: "Sample Scalp Massager 1",
    slug: "sample-scalp-massager-1",
    category: "scalp-massagers",
    price: null,
    specs: [
      "Electric scalp massage",
      "Multiple massage heads",
      "Cordless rechargeable",
      "IPX7 waterproof",
    ],
    images: [
      {
        src: "/images/products/sample-scalp-1/front.jpg",
        alt: "Sample Scalp Massager 1",
        label: "Sample Scalp Massager 1 — front",
      },
    ],
    isSample: true,
  },
  {
    id: "sample-scalp-2",
    name: "Sample Scalp Massager 2",
    slug: "sample-scalp-massager-2",
    category: "scalp-massagers",
    price: null,
    specs: [
      "Vibrating scalp massager",
      "Promotes blood circulation",
      "Lightweight ergonomic grip",
      "Battery operated",
    ],
    images: [
      {
        src: "/images/products/sample-scalp-2/front.jpg",
        alt: "Sample Scalp Massager 2",
        label: "Sample Scalp Massager 2 — front",
      },
    ],
    isSample: true,
  },
];

// ─── Helper Functions ──────────────────────────────────────

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(
  product: Product,
  limit: number = 3
): Product[] {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}

export function getAllCategories(): ProductCategory[] {
  return [...new Set(products.map((p) => p.category))];
}
