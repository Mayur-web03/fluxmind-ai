# FluxMind AI

> AI-Powered Data Automation Platform built for the Frontend Battle Hackathon.

## 🚀 Live Demo

**https://fluxmind-ai-tau.vercel.app/**

---

## 📋 Table of Contents

* Overview
* Hackathon Objectives
* Why FluxMind AI?
* Architecture
* Features
* Tech Stack
* Challenge Requirements
* Quick Start
* Accessibility Considerations
* Author

---

## Overview

FluxMind AI is a modern SaaS-style landing page built to showcase an AI-driven workflow automation platform. It demonstrates advanced concepts in responsive design, dynamic content rendering, state management, and performance optimization using native browser technologies.

---

## 🏆 Hackathon Objectives

This project was built to demonstrate:

* **Dynamic Pricing Matrix** — Real-time multi-dimensional pricing calculations.
* **Context-Preserving Layouts** — Seamless transitions between Bento Grid and Accordion views.
* **Native Motion System** — Performance-focused animations using CSS and the Web Animations API.
* **Semantic Architecture** — SEO-friendly, accessible, and maintainable code.
* **Type-Safe Engineering** — Robust TypeScript implementation.

---

## Why FluxMind AI?

Unlike traditional landing pages, FluxMind AI focuses on solving frontend engineering challenges rather than presenting static marketing content.

### Key Technical Highlights

* **Configuration-Driven Pricing**

  * Pricing is calculated dynamically from structured data rather than hardcoded values.

* **Context Preservation**

  * User interaction state is preserved when transitioning between desktop and mobile layouts.

* **Zero-Dependency Motion**

  * Animations are implemented using native CSS and browser APIs without external animation frameworks.

* **State Isolation**

  * Component-level state management minimizes unnecessary rerenders and side effects.

---

## 🏗️ Architecture

### State Management Strategy

The application uses local section-level state management to keep logic isolated and predictable.

#### Pricing Engine

Handles:

* Currency selection
* Billing cycle switching
* Dynamic pricing calculations

#### Feature Showcase

Handles:

* Desktop Bento Grid interactions
* Mobile Accordion interactions
* Context preservation during viewport changes

### Architectural Principle

Each section manages its own state independently to avoid global rerenders and improve maintainability.

---

## ✨ Features

### Hero Section

* AI workflow pipeline visualization
* Platform metrics
* Primary and secondary call-to-actions
* Responsive layout

### Feature Showcase

* Desktop Bento Grid
* Mobile Accordion
* Context-preserving responsive behavior
* Shared interaction state

### Pricing Engine

* Dynamic pricing matrix
* Currency switching
* Monthly and annual billing modes
* Configuration-driven calculations

### Additional Sections

* Testimonials
* FAQ
* Call-to-Action
* Footer

---

## ✅ Challenge Requirements

### Dynamic Pricing Matrix

* Multi-dimensional pricing configuration
* Currency switching functionality
* Billing cycle switching
* Configuration-driven calculations
* Isolated state management

### Context Preservation

* Desktop Bento Grid layout
* Mobile Accordion layout
* Active state preserved during viewport transitions

### Native Motion System

* CSS Transitions
* CSS Keyframes
* Web Animations API
* No external animation libraries

### SEO & Semantic Structure

* Semantic HTML
* Open Graph metadata
* Sitemap generation
* Robots configuration
* Responsive design

---

## 🛠️ Configuration (Pricing)

Edit `data/pricing.ts`:

```typescript
export const pricingTiers = [
  {
    name: "Starter",
    basePrice: 100,
  },
  {
    name: "Pro",
    basePrice: 200,
  },
  {
    name: "Enterprise",
    basePrice: 500,
  },
];
```

---

## 💻 Tech Stack

### Frontend

* Next.js (App Router)
* React
* TypeScript

### Styling & Motion

* CSS Modules
* CSS Variables
* CSS Keyframes
* Web Animations API

### Deployment

* Vercel

---

## ♿ Accessibility Considerations

* Semantic HTML structure
* Keyboard-accessible interactions
* Logical heading hierarchy
* Reduced-motion friendly animations
* Screen-reader-friendly document structure

---

## 🚀 Quick Start

### Clone & Install

```bash
git clone https://github.com/yourusername/fluxmind-ai.git
cd fluxmind-ai
npm install
```

### Run Development Server

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

---

## 👨‍💻 Author

**Mayur**

* Frontend Battle Hackathon Submission
* Year: 2026
* Live Demo: https://fluxmind-ai-tau.vercel.app/
* Built with Next.js, TypeScript, and Native Browser APIs
