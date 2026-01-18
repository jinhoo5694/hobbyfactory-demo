# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture Overview

This is a Next.js 16 e-commerce demo for 하비팩토리 (Hobby Factory) - a Korean hobby shop selling Gundam models, figures, and hobby supplies.

### Project Structure

- **`src/app/`** - App Router directory (file-based routing)
  - `layout.tsx` - Root layout with Header/Footer and Korean metadata
  - `page.tsx` - Homepage with product sections
  - `globals.css` - Design system with CSS custom properties

- **`src/components/`** - Reusable React components
  - `Header.tsx` - Responsive header with mobile menu and category navigation
  - `Footer.tsx` - Footer with newsletter, links, and company info
  - `ProductCard.tsx` - Product card with hover actions and badges
  - `HeroSlider.tsx` - Auto-playing hero banner carousel
  - `CategorySection.tsx` - Category grid with image cards
  - `PromoSection.tsx` - Promotional banner grid
  - `BrandShowcase.tsx` - Brand logos and franchise banners

### Key Configuration

- **TypeScript**: Strict mode, path alias `@/*` maps to `./src/*`
- **Styling**: Tailwind CSS 4, CSS custom properties for theming, dark mode support
- **Images**: Configured for external images from `hobbyfactory.kr` and `gundamfactory.godohosting.com`

### Design System

Color variables defined in `globals.css`:
- `--primary`: #e94560 (accent red)
- `--secondary`: #16213e (dark blue)
- `--accent`: #0f3460 (navy)

Responsive breakpoints follow Tailwind defaults (sm: 640px, md: 768px, lg: 1024px, xl: 1280px).
