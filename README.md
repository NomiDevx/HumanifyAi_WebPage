# Humanify AI — Official Landing Page & Legal Hub

> **The AI Photo Naturalizer for Android (Package ID: `com.humanifyai`)**  
> *Turn Plastic AI Renders Into Authentic, Human Portraits.*

---

## 🌟 Overview

**Humanify AI** is a cutting-edge mobile application for Android designed to reverse the "uncanny valley" effect in AI-generated portraits (from Midjourney, Stable Diffusion XL, Flux.1, DALL-E 3, and avatar generators). By restoring realistic epidermal skin pores, authentic analog film grain (Kodak Portra, Fuji Pro, Ilford), balanced corneal catchlights, and physically accurate light falloff, Humanify AI makes digital creations feel unmistakably human.

This repository contains the complete, production-ready landing page and legal website built with an Apple / Linear dark aesthetic, glassmorphic UI, responsive layouts, and full compliance with Google Play Data Safety policies.

---

## 🚀 Key Features

1. **Interactive Before/After Split-Screen Slider**:
   - Smooth horizontal comparison handle (mouse drag, touch drag, and direct clicks).
   - Multi-sample portrait selector (Studio, Editorial, Golden Hour, Candid Vintage).
   - Macro 2X zoom inspector and interactive feature hotspot annotations.
   - Real-time comparison metrics (micro-pore detail, chemical emulsion, specular physics).

2. **The Problem & Solution Section**:
   - Interactive breakdown of generative flaws (waxy silicone surfaces, synthetic flat glare, melted hair clumps, digital over-saturation) vs Humanify AI's biological reconstruction.

3. **Five Signature Natural Styles**:
   - **01. Natural Skin**: Balanced micro-texture restoration and organic pores.
   - **02. Soft Film**: Analog 35mm warmth, delicate cinematic grain, and nostalgic color science.
   - **03. Studio Portrait**: Commercial portrait lighting, sharp definition, and specular contrast.
   - **04. Candid Vintage**: Authentic retro camera tone, muted dynamic range, and candid warmth.
   - **05. Crisp Detail**: Fine micro-enhancement for eyelashes, hair strands, and subtle contours.

4. **100% On-Device Privacy Architecture**:
   - Local NPU / GPU hardware acceleration (Snapdragon Neural Engine & Google Tensor).
   - Zero cloud uploads, air-gapped image pipeline.
   - No facial recognition, identity harvesting, or biometric training datasets.
   - Sandboxed local SQLite storage (purged on app uninstall).

5. **Live In-Browser Naturalizer Playground**:
   - Interactive live sliders: Dermis Micro-Pore Density, Film Grain (ISO), Analog Warmth, and Specular Depth.
   - Real-time CSS and SVG filter simulation.

6. **Interactive FAQ with Search & Category Filtering**:
   - Detailed answers covering privacy, model compatibility, image formats, intensity adjustments, and Google Play availability.

7. **Dedicated Google Play-Compliant Legal Pages**:
   - **`/privacy`**: Comprehensive Privacy Policy fully adhering to Google Play Data Safety policies (Zero user data collected or shared, Android Scoped Storage declarations, COPPA compliance, table of contents, print support, and privacy contact).
   - **`/terms`**: Complete Terms of Service specifying 100% user copyright ownership of enhanced renders, prohibited unlawful deepfake use, disclaimers, and limitation of liability.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Custom Cosmic Dark Glassmorphic Design System
- **Icons**: Lucide React (`lucide-react`)
- **Assets**: Embedded official app icon (`/public/app-icon.png`) with gradient badges and Google Play Store vector artwork.

---

## 📁 Project Structure

```text
Humanify_app_web/
├── public/
│   ├── app-icon.png       # Official Humanify AI app logo & icon
│   └── logo.png           # Brand asset
├── src/
│   ├── components/
│   │   ├── Navbar.tsx             # Glassmorphic header & responsive mobile drawer
│   │   ├── Hero.tsx               # Hero section with headline, CTA & badges
│   │   ├── BeforeAfterSlider.tsx  # Draggable split-screen before/after slider
│   │   ├── ProblemSolution.tsx    # Problem vs Solution interactive comparison
│   │   ├── SignatureStyles.tsx    # 5 Signature Natural Styles switcher
│   │   ├── TrustArchitecture.tsx  # Local NPU & Google Play Data Safety banner
│   │   ├── HowItWorks.tsx         # 3-Step workflow & technical specifications
│   │   ├── InteractivePlayground.tsx # Real-time in-browser filter playground
│   │   ├── FAQ.tsx                # Searchable FAQ accordion
│   │   ├── CTASection.tsx         # Conversion banner with Google Play & QR code
│   │   ├── Footer.tsx             # Footer with copyright, navigation & legal links
│   │   ├── GooglePlayBadge.tsx    # Google Play Store badge component
│   │   ├── PrivacyPolicy.tsx      # Google Play-compliant Privacy Policy (/privacy)
│   │   └── TermsOfService.tsx     # Terms of Service (/terms)
│   ├── data/
│   │   └── content.ts             # Structured copy, samples, styles & FAQ data
│   ├── types/
│   │   └── index.ts               # TypeScript data definitions
│   ├── App.tsx                    # Main app router with history & hash routing
│   ├── index.css                  # Tailwind directives & cosmic dark glass styles
│   └── main.tsx                   # React root entry point
├── dist/                          # Production build output
│   ├── index.html                 # Main landing page
│   ├── privacy/index.html         # Direct static route for /privacy
│   └── terms/index.html           # Direct static route for /terms
├── index.html                     # HTML template with SEO & Google Play metadata
├── package.json                   # Dependencies and scripts
├── tailwind.config.js             # Custom colors, fonts & animation tokens
└── vite.config.ts                 # Bundler configuration
```

---

## 💻 Development & Deployment

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```
The output directory `dist/` is ready for instant deployment to Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any static hosting platform.

---

## 📜 Compliance & Disclosures

- **Package ID**: `com.humanifyai`
- **Support Contact**: `support@humanifyai.com`
- **Privacy Contact**: `privacy@humanifyai.com`
- **Legal Contact**: `legal@humanifyai.com`
- **Google Play Data Safety**: No user data collected. No user data shared. 100% on-device local processing.
