# SKAN JUS — Landing Page

Law firm landing page with React, TypeScript, and Tailwind CSS v4. Has a custom cursor and smooth scrolling.

## 🎨 About

Fictional Norwegian law firm site. Dark theme with gold accents. Built to practice custom cursor implementation and Tailwind v4 design tokens.

## ✨ Features

- **Custom Triangle Cursor** — Only on desktop, native cursor on mobile
- **Lenis Smooth Scroll** — Time-based, works at any framerate
- **Framer Motion** — Scroll animations with reduced-motion support
- **Responsive** — Mobile-first, animations off on small screens
- **Tailwind CSS v4** — Custom design tokens
- **TypeScript** — Type checking
- **React 19** — Latest React

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| React 19 + TypeScript | UI framework |
| Vite 8 | Build tool |
| Tailwind CSS v4 | Utility-first styling |
| Framer Motion | Scroll & entrance animations |
| Lenis | Smooth scroll (framerate-independent) |

## 🚀 Getting Started

```bash
bun install
bun run dev
```

```bash
bun run build
bun run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── GoldDivider.tsx       # Animated gold separator line
│   │   ├── EyebrowLabel.tsx      # Small-caps label with decorative line
│   │   ├── Section.tsx           # Responsive section wrapper
│   │   └── SectionHeader.tsx     # Eyebrow + h2 title pattern
│   ├── CustomCursor.tsx          # Triangle cursor (pointer:fine only)
│   ├── Navbar.tsx                # Sticky nav with mobile hamburger
│   ├── Hero.tsx                  # Full-height hero with parallax
│   ├── Expertise.tsx             # 3-column practice areas
│   ├── TrustBlock.tsx            # Stats + image split
│   ├── TransitionDivider.tsx     # Ornamental diamond divider
│   ├── Biography.tsx             # Partner bio with photo
│   ├── Process.tsx               # 4-step process grid
│   ├── Testimonials.tsx          # Client testimonials
│   ├── CTASection.tsx            # Final CTA
│   └── Footer.tsx                # Footer with nav columns
├── constants/content.ts          # All copy/data in one place
├── hooks/useScrollAnimation.ts   # Animation variants + useAnimationConfig
├── lib/lenis.ts                  # Lenis initialisation
└── types/index.ts                # TypeScript interfaces
```

## 🎯 Key Sections

- **Navbar** — Sticky navigation with mobile hamburger menu
- **Hero** — Full-height hero with parallax effect
- **Expertise** — Three-column practice areas showcase
- **TrustBlock** — Statistics and image split layout
- **Biography** — Partner biography with photo
- **Process** — Four-step process grid
- **Testimonials** — Client testimonials section
- **CTASection** — Final call-to-action
- **Footer** — Multi-column footer with navigation

## 🎨 Design Tokens

Defined in `src/index.css` via Tailwind v4 `@theme` — auto-generates utility classes:

```css
@theme {
  --color-gold: #D4AF37;   /* → text-gold, bg-gold, border-gold */
  --color-bg: #0A0A0A;     /* → bg-bg */
  --font-fraunces: ...;    /* → font-fraunces */
  --font-instrument: ...;  /* → font-instrument */
}
```

## 🎯 Animation Notes

**Lenis** is initialised with `duration: 1.2s` (time-based, not `lerp`) — fully framerate-independent, correct at 60 Hz, 120 Hz, and 144 Hz+.

**Framer Motion** animations are disabled on:
- Mobile screens (`< 768px`) — elements render immediately, no entrance delay
- OS-level `prefers-reduced-motion` setting

**Custom cursor** (triangle arrow) is shown only on `pointer: fine` devices. On touch/mobile the native cursor is preserved.

## 🎯 Learning Goals

- React 19 with TypeScript 6
- Tailwind CSS v4 design tokens
- Lenis smooth scroll integration
- Custom cursor implementation
- Framer Motion scroll animations
- Responsive design with animation considerations
- Accessibility (reduced-motion support)

---

**Note:** Portfolio project demonstrating premium landing page design with sophisticated animations.
