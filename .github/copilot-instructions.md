# AI Coding Agent Instructions for landing-credito

## Project Overview
**landing-credito** is a Next.js 16 landing page for a financial services company (Credit-One S.p.A.). It's a **client-side rendered (CSR) marketing site** with dual routing patterns: a main app router and a separate landing subdirectory.

### Tech Stack
- **Framework**: Next.js 16.0.10 (App Router)
- **Styling**: Tailwind CSS 4 (postcss integration)
- **Language**: TypeScript 5 (strict mode enabled)
- **Fonts**: Geist family from `next/font/google`
- **No API/Backend**: Client-only, no server-side data fetching

---

## Architecture & Key Patterns

### Dual Routing Structure
The project contains **two distinct page hierarchies**:

1. **`app/`** (Primary app router) - Main site with interactive components
   - `app/page.tsx` - Home page (use client, includes header, hero, calculator)
   - `app/chi-siamo/page.tsx` - About page (use client, identical header structure)
   - `app/layout.tsx` - Root layout with metadata, fonts, and global styles

2. **`landing/`** (Separate directory) - Alternative landing page structure
   - `landing/page.tsx` - Standalone landing variant (server-side)
   - Used for experiments or alternate layouts (not integrated into app router)

**Rule**: Only edit `app/` files for production. Use `landing/page.tsx` only when explicitly testing alternate designs.

### Color Scheme & Brand
- **Primary Dark**: `#0F1E38` (navy blue, text/headers)
- **Accent Gold**: `#C1A673` (highlights, active states, CTAs)
- **Light Shade**: `#F2E5C8` (gradients, subtle backgrounds)
- **Backgrounds**: White/gray-50 (light mode default)

Apply these colors via arbitrary Tailwind values (e.g., `text-[#0F1E38]`).

### Styling Approach
- **Tailwind CSS** with inline classes—no separate CSS files except `globals.css`
- **No component styling libraries** (CSS modules, styled-components)
- Inline hover/transition utilities: `hover:text-[#C1A673] transition-all duration-300`
- Custom animations: `animate-fade-in-up` (defined in `globals.css`)
- Mobile-first responsive: `md:` breakpoint is primary responsive target

---

## Critical Components & Patterns

### CalcolatoreRata (Loan Calculator)
**File**: [`components/CalcolatoreRata.tsx`](components/CalcolatoreRata.tsx)

- **Client Component** (`"use client"`) with React hooks
- **State Management**: `useState` for importo (loan amount), anni (years), tasso (rate)
- **Auto-calculation**: `useEffect` dependency array `[importo, anni, tasso]`
- **Financial Formula**: Monthly amortization → `R = C * (r * (1+r)^n) / ((1+r)^n - 1)`
- **Edge Case**: Handles 0% interest separately (`if (tasso === 0)`)
- **Output**: Formatted as `.toFixed(2)` for EUR display

**Integration**: Imported and used inline in `app/page.tsx` with Tailwind styling.

### Page Structure Pattern
Both `app/page.tsx` and `app/chi-siamo/page.tsx` follow identical structure:
1. **Sticky Header** (`<header>`) with brand logo, desktop/mobile nav, hamburger menu
2. **Logo Sources**: References `/brand.png` or `/logo.png` from public folder
3. **Navigation Links**: Use Next.js `<Link>` (not `<a>`)
4. **Mobile Menu State**: `useState(menuAperto)` with conditional rendering

**When editing**: Maintain header consistency across pages; changes to header in one page should mirror on the other.

---

## Development Workflows

### Build & Dev Commands
```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm start        # Run production server
npm run lint     # ESLint (no auto-fix)
```

### Common Tasks
- **Edit content**: Modify JSX in `app/page.tsx` or `app/chi-siamo/page.tsx`
- **Add styles**: Use Tailwind inline classes; update `globals.css` for custom animations/themes only
- **Add components**: Create in `components/` folder as client components unless they're static content
- **Test locally**: `npm run dev` rebuilds on file save; check http://localhost:3000

### Build Considerations
- **TypeScript strict mode** enabled; all types must be explicit
- **ESLint config** uses Next.js rules; ensure no console errors
- **No environment variables** currently used (static site)
- **Image optimization**: Use `next/image` for img tags in production, but fallback `<img>` tags are OK for branding assets

---

## Code Conventions

### Component Structure
```tsx
"use client";  // Always at top if component uses hooks/state

import { useState } from "react";
import Link from "next/link";

export default function ComponentName() {
  const [state, setState] = useState(initialValue);
  
  // Logic here
  
  return (
    <section className="...">
      {/* JSX */}
    </section>
  );
}
```

### Naming
- **Files**: PascalCase (e.g., `CalcolatoreRata.tsx`)
- **Classes**: Tailwind inline; no BEM or custom class names
- **Variables**: camelCase; Italian terms used in loan calculator (`importo`, `anni`, `tasso`, `rata`)

### Tailwind Classes
- Use arbitrary colors: `text-[#0F1E38]`, `bg-[#C1A673]`
- Responsive prefixes: `md:flex`, `sm:flex-row` (mobile-first)
- Interactive states: `hover:`, `transition-`, `transform`, `scale-`
- Shadow utilities: `shadow-2xl`, `shadow-[0_10px_30px_rgba(...)]`

---

## Integration Points & Dependencies

### External Dependencies
- **next/font/google**: Geist Sans/Mono fonts (auto-optimized)
- **next/image**: Image component (use for public assets)
- **next/link**: All navigation (no `<a href>`)
- **React 19.2.1**: Latest features; use hooks for state

### Public Assets
- **Logo files**: Expect `/brand.png` or `/logo.png` in `public/`
- **Branding images**: Place in `public/` and reference in JSX

### No External Services
- No API calls (fully static)
- No database or backend
- No authentication
- No analytics SDKs

---

## Common Pitfalls & Fixes

| Issue | Root Cause | Solution |
|-------|-----------|----------|
| Image not loading | Wrong file name/path | Check `public/` folder; use correct `/filename.png` |
| Styles not applying | Inline class typo | Use `text-[#0F1E38]` for custom colors, not `text-navy` |
| Mobile layout broken | Missing `md:hidden` / `hidden md:flex` | Test responsive layout; use DevTools device emulation |
| Type errors in strict mode | Missing type annotations | Add explicit types; check `tsconfig.json` strict settings |
| Header state not synced | Copy-paste without logic review | Update both page files if header changes |

---

## Quick Navigation
- **Main page**: [`app/page.tsx`](app/page.tsx)
- **Secondary page**: [`app/chi-siamo/page.tsx`](app/chi-siamo/page.tsx)
- **Shared component**: [`components/CalcolatoreRata.tsx`](components/CalcolatoreRata.tsx)
- **Layout/fonts**: [`app/layout.tsx`](app/layout.tsx)
- **Global styles**: [`app/globals.css`](app/globals.css)
- **Config**: [`next.config.ts`](next.config.ts), [`tsconfig.json`](tsconfig.json)
