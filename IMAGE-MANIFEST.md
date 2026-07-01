# Divine Touch — Image Assets Manifest

This document outlines all the image assets required to replace the placeholders currently visible on the website.

> **Note**: For best results, save your images in the `public/images/` folder following the exact paths listed below. The website will automatically pick them up once the code is updated with the correct filenames.

## Brand & Global

| Description | Target Path | Recommended Size | Aspect Ratio |
|---|---|---|---|
| **Logo** | `/public/images/logo.png` | 200 × 200px | 1:1 (Square) |

## Home Page (`/`)

| Description | Target Path | Recommended Size | Aspect Ratio |
|---|---|---|---|
| **Hero Image** | `/public/images/hero/main.jpg` | 1200 × 900px | 4:3 |

## Category Tiles (Home Page)

> **Important**: These must be perfectly square (1:1 aspect ratio) so they crop perfectly into circles.

| Description | Target Path | Recommended Size | Aspect Ratio |
|---|---|---|---|
| **Massage Chairs** | `/public/images/categories/massage-chairs.jpg` | 800 × 800px | 1:1 (Square) |
| **Leg & Foot Massagers** | `/public/images/categories/leg-massagers.jpg` | 800 × 800px | 1:1 (Square) |
| **Scalp Massagers** | `/public/images/categories/scalp-massagers.jpg` | 800 × 800px | 1:1 (Square) |
| **Full Body Massagers** | `/public/images/categories/other.jpg` | 800 × 800px | 1:1 (Square) |

## Testimonial Avatars (Home Page)

> **Important**: These must be perfectly square (1:1 aspect ratio) so they crop perfectly into circles.

| Description | Target Path | Recommended Size | Aspect Ratio |
|---|---|---|---|
| **Customer 1** | `/public/images/testimonials/customer-1.jpg` | 200 × 200px | 1:1 (Square) |
| **Customer 2** | `/public/images/testimonials/customer-2.jpg` | 200 × 200px | 1:1 (Square) |
| **Customer 3** | `/public/images/testimonials/customer-3.jpg` | 200 × 200px | 1:1 (Square) |

## About Page (`/about`)

| Description | Target Path | Recommended Size | Aspect Ratio |
|---|---|---|---|
| **Brand/Team Photo** | `/public/images/about/brand-story.jpg` | 800 × 600px | 4:3 |

## Products

*These images are used on both the Product Cards (grid view) and the Product Detail page gallery.*

### AMB 007 B
| Description | Target Path | Recommended Size | Aspect Ratio |
|---|---|---|---|
| **Front Angle** | `/public/images/products/amb-007-b/front.jpg` | 800 × 800px | 1:1 |
| **Side Angle** | `/public/images/products/amb-007-b/side.jpg` | 800 × 800px | 1:1 |
| **Detail View** | `/public/images/products/amb-007-b/detail.jpg` | 800 × 800px | 1:1 |

### AM 006 B
| Description | Target Path | Recommended Size | Aspect Ratio |
|---|---|---|---|
| **Front Angle** | `/public/images/products/am-006-b/front.jpg` | 800 × 800px | 1:1 |
| **Side Angle** | `/public/images/products/am-006-b/side.jpg` | 800 × 800px | 1:1 |
| **Detail View** | `/public/images/products/am-006-b/detail.jpg` | 800 × 800px | 1:1 |

### AM 009
| Description | Target Path | Recommended Size | Aspect Ratio |
|---|---|---|---|
| **Front Angle** | `/public/images/products/am-009/front.jpg` | 800 × 800px | 1:1 |
| **Side Angle** | `/public/images/products/am-009/side.jpg` | 800 × 800px | 1:1 |
| **Detail View** | `/public/images/products/am-009/detail.jpg` | 800 × 800px | 1:1 |

### AM 444 N
| Description | Target Path | Recommended Size | Aspect Ratio |
|---|---|---|---|
| **Front Angle** | `/public/images/products/am-444-n/front.jpg` | 800 × 800px | 1:1 |
| **Side Angle** | `/public/images/products/am-444-n/side.jpg` | 800 × 800px | 1:1 |
| **Detail View** | `/public/images/products/am-444-n/detail.jpg` | 800 × 800px | 1:1 |

### AM 888
| Description | Target Path | Recommended Size | Aspect Ratio |
|---|---|---|---|
| **Front Angle** | `/public/images/products/am-888/front.jpg` | 800 × 800px | 1:1 |
| **Side Angle** | `/public/images/products/am-888/side.jpg` | 800 × 800px | 1:1 |
| **Detail View** | `/public/images/products/am-888/detail.jpg` | 800 × 800px | 1:1 |

### AM 333
| Description | Target Path | Recommended Size | Aspect Ratio |
|---|---|---|---|
| **Front Angle** | `/public/images/products/am-333/front.jpg` | 800 × 800px | 1:1 |
| **Side Angle** | `/public/images/products/am-333/side.jpg` | 800 × 800px | 1:1 |
| **Detail View** | `/public/images/products/am-333/detail.jpg` | 800 × 800px | 1:1 |

### AM 6666
| Description | Target Path | Recommended Size | Aspect Ratio |
|---|---|---|---|
| **Front Angle** | `/public/images/products/am-6666/front.jpg` | 800 × 800px | 1:1 |
| **Side Angle** | `/public/images/products/am-6666/side.jpg` | 800 × 800px | 1:1 |
| **Detail View** | `/public/images/products/am-6666/detail.jpg` | 800 × 800px | 1:1 |

---

### How to update an image:
1. Save the real image file to the corresponding folder in `public/images/`.
2. Open `src/data/products.ts` (for products) or the relevant component.
3. Update the `src` property to point to the real image path (e.g., `src: "/images/products/amb-007-b/front.jpg"`).
4. The `ImagePlaceholder` component will automatically render the real image instead of the placeholder box.
