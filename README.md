# ✨ Divine Touch

Divine Touch is a premium e-commerce and showcase website designed for a luxury massage chair brand. Built with cutting-edge web technologies, it features a fluid, highly interactive, and visually stunning user interface that reflects the elegance and premium quality of the brand's products.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: 
  - [Framer Motion](https://www.framer.com/motion/) (Declarative UI animations)
  - [GSAP](https://gsap.com/) (Complex timeline animations and PillNav)
  - [React Bits](https://reactbits.dev/) (Advanced interactive components)
- **Icons**: [Lucide React](https://lucide.dev/) & Custom SVGs
- **3D / WebGL Graphics**: [OGL](https://github.com/oframe/ogl) (for dynamic Dome and Circular galleries)

## 🌟 Key Features

- **Premium Design System**: A luxurious Gold (`#d4af37`), Cream (`#fdfaf6`), and Dark Brown (`#3b261d`) color palette that exudes elegance.
- **Dynamic Navigation (PillNav)**: A custom-built, GSAP-powered pill navigation bar with fluid hover animations and mobile responsiveness.
- **Immersive Hero Section**: Featuring dynamic blur text reveals, a continuous curved text loop, and striking lifestyle imagery.
- **Interactive Product Displays**: Utilizing the `GlassIcons` grid component for a modern, glassmorphic presentation of product categories.
- **3D Galleries**: 
  - **DomeGallery**: An interactive 3D dome showcasing high-resolution product imagery.
  - **CircularGallery**: A WebGL-powered circular carousel.
- **Interactive Testimonials**: 
  - A draggable, physics-based `Stack` card component for customer reviews.
  - An auto-scrolling testimonial slider on the landing page.
- **WhatsApp Integration**: Floating action buttons and integrated CTAs for direct customer communication.
- **Performance Optimized**: Heavy WebGL and 3D components are lazily loaded (`next/dynamic` with `ssr: false`) to ensure blazing fast initial page loads.

## 📦 Project Structure

```text
src/
├── app/                  # Next.js App Router pages (Home, Gallery, Reviews, etc.)
├── components/           # React Components
│   ├── home/             # Landing page specific sections (Hero, Categories, Testimonials)
│   ├── layout/           # Global layout components (Navbar, Footer, PageLayout)
│   ├── products/         # Product listing and detail components
│   └── shared/           # Reusable UI components & animations (PillNav, Stack, CurvedLoop, etc.)
├── data/                 # Mock data (Products, Testimonials, Categories)
├── lib/                  # Utility functions (WhatsApp URL generator, Tailwind merge)
└── styles/               # Global CSS and Tailwind configuration
```

## 🛠️ Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Design Philosophy

The Divine Touch interface is built around the concept of "Premium Wellness". Every interaction is designed to feel deliberate, smooth, and high-end. 
- **Typography**: Uses elegant serif fonts (like `Playfair Display`) for headings, paired with clean sans-serif fonts for body text.
- **Motion**: Animations are buttery smooth, utilizing spring physics (via Framer Motion) and robust timelines (via GSAP) to prevent jarring transitions.
- **Glassmorphism**: Subtle blurs, transparent backgrounds, and soft shadows are used to create depth without clutter.

## 📄 License

This project is proprietary and created for Divine Touch. All rights reserved.
