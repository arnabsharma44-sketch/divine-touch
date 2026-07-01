export const BRAND = {
  name: "Divine Touch",
  tagline: "Massage Chair",
  fullName: "Divine Touch Massage Chair",
  description:
    "Premium massage chairs and wellness products for home and office across India.",
  email: "divinetouchhealthcare8@gmail.com",
};

export const CONTACT = {
  whatsapp: {
    number: "917978319692",
    display: "+91 79783 19692",
  },
  phone: {
    number: "+918280030648",
    display: "+91 82800 30648",
  },
};

export const DEVELOPER = {
  name: "Jinendra Banthia",
  phone: "9124483008",
  email: "jinendra.banthia.iter@gmail.com",
};

export const CATEGORIES = [
  { slug: "massage-chairs" as const, name: "Massage Chairs" },
  { slug: "leg-massagers" as const, name: "Leg Massagers" },
  { slug: "foot-massagers" as const, name: "Foot Massagers" },
  { slug: "scalp-massagers" as const, name: "Scalp Massagers" },
  { slug: "other-massage-products" as const, name: "Other Massage Products" },
];

export type ProductCategory =
  | "massage-chairs"
  | "leg-massagers"
  | "foot-massagers"
  | "scalp-massagers"
  | "other-massage-products";
