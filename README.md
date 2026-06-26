# FluxMind AI

> AI-Powered Data Automation Platform built for the Frontend Battle Hackathon.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-14+-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)
![Status](https://img.shields.io/badge/status-Active-brightgreen)

🌐 **[Live Demo](https://fluxmind-ai-tau.vercel.app/)** | 📚 **[Documentation](#documentation)** | 🚀 **[Quick Start](#quick-start)**

---

## 📋 Table of Contents

- [Overview](#overview)
- [Challenge Requirements Implemented](#-challenge-requirements-implemented)
- [Architecture](#-architecture)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Engineering Highlights](#engineering-highlights)
- [Performance Strategy](#performance-strategy)
- [Quick Start](#quick-start)
- [Development Guide](#development-guide)
- [Build & Deploy](#build--deploy)
- [Configuration](#configuration)
- [Browser Support](#browser-support)
- [Accessibility](#accessibility)
- [SEO](#seo)
- [Troubleshooting](#troubleshooting)
- [Author](#author)

---

## Overview

FluxMind AI is a modern SaaS-style landing page that showcases an AI-driven workflow automation platform. Built with cutting-edge frontend engineering practices, it demonstrates advanced concepts in responsive design, dynamic content rendering, and performance optimization.

### Key Focus Areas

- **Dynamic Pricing Matrix** - Multi-dimensional pricing calculations
- **Responsive Components** - Context-preserving transitions between layouts
- **Native Animations** - CSS-based animations without frameworks
- **Performance Optimized** - Minimal re-renders and optimized rendering
- **Bento Grid Layouts** - Modern responsive grid designs
- **SEO Friendly** - Full metadata and structured data support
- **Accessible Design** - Semantic HTML and ARIA support

---

## Features

### 🎯 Hero Section
- AI automation platform showcase
- Workflow pipeline visualization
- Key platform metrics display
- Call-to-action buttons
- Fully responsive layout

### ✨ Feature Showcase
- Desktop: Bento grid layout
- Mobile: Accordion layout
- Shared state architecture
- Context preservation during viewport transitions
- Smooth state persistence

### 💰 Dynamic Pricing Engine
- Multi-dimensional pricing matrix
- Real-time currency switching
- Billing cycle toggling (monthly/annual)
- Dynamic calculation engine
- Isolated state management

### 🎤 Social Proof
- Customer testimonials
- Brand trust indicators

### ❓ FAQ Section
- Interactive accordion interface
- Smooth animations and transitions

### 📱 Additional Sections
- Call-to-Action (CTA) section
- Feature-rich footer

---

## ✅ Challenge Requirements Implemented

### Dynamic Pricing Matrix
- ✓ Multi-dimensional pricing configuration
- ✓ Currency switching functionality
- ✓ Billing cycle switching (monthly/annual)
- ✓ Configuration-driven calculations (no hardcoded values)
- ✓ Isolated state management for pricing updates

### Context Preservation (Responsive State Lock)
- ✓ Desktop: Bento Grid layout for features
- ✓ Mobile: Accordion layout for features
- ✓ Active state preserved during viewport transitions
- ✓ Seamless responsive experience without context loss
- ✓ Shared context architecture

### Native Motion System
- ✓ CSS Transitions for smooth property changes
- ✓ CSS Keyframes for complex animations
- ✓ Web Animations API for JavaScript-controlled animations
- ✓ NO external animation libraries (Framer Motion, Radix Motion, etc.)
- ✓ Performance-optimized animations

### SEO & Metadata
- ✓ Semantic HTML structure
- ✓ Open Graph metadata for social sharing
- ✓ Sitemap generation
- ✓ Robots configuration
- ✓ Responsive design

### TypeScript & Type Safety
- ✓ Full TypeScript implementation
- ✓ Proper type definitions
- ✓ No `any` types in core logic

---

## 🏗️ Architecture

### State Management Strategy

```
Pricing State
│
├── Base Rate (Plan tier)
├── Currency Multiplier
├── Billing Cycle (Monthly/Annual)
└── Dynamic Calculations

Feature State
│
├── Desktop Bento Grid
│   └── Active Feature Index
├── Mobile Accordion
│   └── Active Feature Index (Preserved)
└── Context Lock (Preserves state during transitions)

Isolated Context Providers
│
├── PricingProvider (pricing updates only)
├── FeaturesProvider (feature showcase state)
└── No prop drilling
```

### Component Architecture

**Section Components:**
- Hero: Main landing section
- Features: Adaptive layout (Bento/Accordion)
- Pricing: Dynamic calculation engine
- Testimonials: Social proof
- FAQ: Interactive accordion
- CTA: Secondary call-to-action
- Footer: Navigation and links

**Key Principle:** Each section manages its own state independently to prevent unintended side effects.

---

## Tech Stack

### Framework & Language
```
Frontend:      Next.js 14+ (App Router)
Language:      TypeScript 5.0+
React:         React 18.2+
```

### Styling
```
CSS Modules:   Component-scoped styles
CSS Variables: Dynamic theming
Animations:    Native CSS + Web Animations API
```

### Deployment
```
Platform:      Vercel
Performance:   Edge caching, automatic optimization
```

### Build & Package Management
```
Build Tool:    Next.js built-in
Package Mgr:   npm
```

---

## Project Structure

```
fluxmind-ai/
├── app/                    # Next.js App Router pages
├── components/             # Reusable React components
├── sections/              # Page sections
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Pricing.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── hooks/                 # Custom React hooks
├── data/                  # Configuration & static data
│   ├── pricing.ts
│   ├── features.ts
│   └── testimonials.ts
├── lib/                   # Utility functions
├── styles/               # Global styles & CSS modules
├── animations/           # CSS animation definitions
├── types/                # TypeScript definitions
├── public/               # Static assets
└── package.json          # Dependencies
```

---

## Engineering Highlights

### 1. Dynamic Pricing Matrix

The pricing engine calculates plan costs dynamically based on multiple parameters:

**Parameters:**
- Base Rate (starting price)
- Currency Multiplier (regional adjustments)
- Billing Cycle (monthly vs. annual)
- Regional Adjustments

**Key Features:**
- ✅ Zero hardcoded pricing values
- ✅ Real-time calculations
- ✅ Multi-currency support
- ✅ Instant updates on cycle change
- ✅ Isolated state management

### 2. Context Lock Architecture

Preserves active state during responsive transitions:

```
Desktop (Bento Grid) → Responsive Transition → Mobile (Accordion)
     ✓ Selected state persists
     ✓ No context loss
     ✓ Seamless UX
```

### 3. Native Motion System

All animations use browser-native APIs:

- **CSS Transitions** - Smooth property changes
- **CSS Keyframes** - Complex sequences
- **Web Animations API** - JavaScript-controlled animations

**Benefits:**
- ✅ No animation framework overhead
- ✅ Better performance
- ✅ Smaller bundle size
- ✅ Full control

---

## Performance Strategy

### Rendering Optimization
- Component-level state isolation
- Minimal re-render triggers
- Efficient context providers
- Optimized state updates

### Asset Optimization
- Responsive image optimization
- Modern image formats
- CDN delivery via Vercel
- Lazy loading

### Animation Performance
- Hardware-accelerated CSS transforms
- Efficient requestAnimationFrame usage
- No framework overhead
- Browser-native capabilities

### Code Optimization
- Lightweight architecture
- Tree-shakeable dependencies
- Code splitting
- Minimal external packages

---

## Quick Start

### Prerequisites
- Node.js v16+ 
- npm v7+
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/fluxmind-ai.git
   cd fluxmind-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## Development Guide

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run TypeScript type checking
npm run type-check

# Linting (if configured)
npm run lint
```

### Development Workflow

- **Hot Module Reloading** enabled by default
- **TypeScript errors** appear in console
- **CSS changes** apply instantly
- **No manual rebuild** needed during development

### File Naming Conventions

```
Components:      PascalCase (Hero.tsx, Pricing.tsx)
Utilities:       camelCase (calculatePrice.ts)
Styles:          Component.module.css
Hooks:           useComponentName.ts
Types:           PascalCase (interface, type)
```

---

## Build & Deploy

### Production Build

```bash
# Create optimized build
npm run build

# Start production server
npm start
```

**Build Optimizations:**
- JavaScript minification & bundling
- CSS minification
- Image optimization
- Static analysis

### Deployment to Vercel

**Current Live Deployment:**
- URL: https://fluxmind-ai-tau.vercel.app/
- Status: Active
- Branch: main

**Deployment Process:**
1. Push changes to main branch
2. Vercel automatically builds
3. Preview URLs for pull requests
4. Auto-deploy on merge

**Vercel Features:**
- Automatic image optimization
- Edge caching
- CDN distribution
- Serverless functions
- Preview deployments

---

## Configuration

Edit `data/pricing.ts`:

```typescript
export const pricingTiers = [
  {
    name: "Starter",
    basePrice: 29,
    features: [/* ... */]
  },
  // Add more tiers
];
```

### CSS Variables Customization

Edit `styles/globals.css`:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #7c3aed;
  --text-color: #1f2937;
  --background-color: #ffffff;
  --border-radius: 8px;
  --font-family: 'Inter', sans-serif;
  --max-width: 1200px;
}
```

---

## Browser Support

### Fully Supported
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ iOS Safari 14+
- ✅ Android Chrome 90+

### Required Features
- CSS Grid & Flexbox
- CSS Custom Properties (Variables)
- CSS Animations & Transitions
- Web Animations API
- Fetch API
- ES2020+ JavaScript features

---

## Accessibility

### WCAG 2.1 Compliance

**Color Contrast**
- ✅ Minimum AA level compliance
- ✅ AAA level where possible

**Keyboard Navigation**
- ✅ Full keyboard accessibility
- ✅ Visible focus indicators
- ✅ Logical tab order

**Screen Reader Support**
- ✅ Semantic HTML structure
- ✅ ARIA labels and descriptions
- ✅ Skip navigation links

**Interactive Components**
- ✅ Proper button semantics
- ✅ Accessible form controls
- ✅ Error message associations

**Motion & Animation**
- ✅ Respects `prefers-reduced-motion`
- ✅ Animations don't block interaction
- ✅ Meaningful transitions only

---

## SEO

### Metadata Strategy

- **Unique page titles** - Keyword optimized
- **Meta descriptions** - 155-160 characters
- **Open Graph tags** - Social media sharing
- **Structured data** - Schema.org markup

### Sitemap & Robots

```
Generated Files:
├── sitemap.xml        # Auto-generated
└── robots.txt         # Search engine crawling rules
```

### Semantic HTML

- ✅ Proper heading hierarchy (H1, H2, H3)
- ✅ Semantic HTML5 elements
- ✅ ARIA labels
- ✅ Structured data markup

---

## Troubleshooting

### Common Issues

**Port 3000 already in use**
```bash
npm run dev -- -p 3001
```

**Module not found errors**
```bash
rm -rf node_modules
npm install
```

**Styles not loading**
```bash
rm -rf .next
npm run build
npm run dev
```

**TypeScript errors**
```bash
npm run type-check
```

**Production build fails**
- Check console errors
- Verify environment variables
- Review Vercel deployment logs

---

## Author

**Mayur**

- Frontend Battle Hackathon Submission
- Live Demo: https://fluxmind-ai-tau.vercel.app/
- Year: 2026
