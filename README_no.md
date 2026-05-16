# SKAN JUS — Landing Page

Premium juridisk tjeneste landingsside for et norsk advokatfirma. Bygget med React 19, TypeScript, Framer Motion, Lenis og Tailwind CSS v4.

## 🎨 Om

SKAN JUS er en sofistikert landingsside for et fiktivt norsk advokatfirma, som viser frem premium juridiske tjenester med elegante animasjoner, jevn scrolling og en tilpasset markør. Har en mørk estetikk med gullaksenter, bildefrekvens-uavhengige animasjoner og fullt responsivt design.

## ✨ Funksjoner

- **Tilpasset Trekant-markør** — Kun pointer-fine-enheter, native markør på touch
- **Lenis Smooth Scroll** — Tidsbasert (1.2s varighet), bildefrekvens-uavhengig
- **Framer Motion Animasjoner** — Scroll-utløste inngangsanimasjoner med reduced-motion-støtte
- **Responsivt Design** — Mobil-først tilnærming, animasjoner deaktivert på mobil
- **Tailwind CSS v4** — Moderne utility-first styling med tilpassede designtokens
- **TypeScript** — Full typesikkerhet
- **React 19** — Nyeste React med kompilatoroptimaliseringer

## 🛠️ Teknologi

| Verktøy | Formål |
|------|---------|
| React 19 + TypeScript | UI-rammeverk |
| Vite 8 | Byggeverktøy |
| Tailwind CSS v4 | Utility-first styling |
| Framer Motion | Scroll & inngangsanimasjoner |
| Lenis | Smooth scroll (bildefrekvens-uavhengig) |

## 🚀 Kom i Gang

```bash
bun install
bun run dev
```

```bash
bun run build
bun run preview
```

## 📁 Prosjektstruktur

```
src/
├── components/
│   ├── ui/
│   │   ├── GoldDivider.tsx       # Animert gull-skillelinje
│   │   ├── EyebrowLabel.tsx      # Small-caps-etikett med dekorativ linje
│   │   ├── Section.tsx           # Responsiv seksjonswrapper
│   │   └── SectionHeader.tsx     # Eyebrow + h2-tittelmønster
│   ├── CustomCursor.tsx          # Trekant-markør (kun pointer:fine)
│   ├── Navbar.tsx                # Sticky nav med mobil hamburger
│   ├── Hero.tsx                  # Fullhøyde hero med parallax
│   ├── Expertise.tsx             # 3-kolonne praksisområder
│   ├── TrustBlock.tsx            # Statistikk + bilde split
│   ├── TransitionDivider.tsx     # Ornamental diamant-skillelinje
│   ├── Biography.tsx             # Partner-biografi med foto
│   ├── Process.tsx               # 4-stegs prosess-grid
│   ├── Testimonials.tsx          # Klientanbefalinger
│   ├── CTASection.tsx            # Siste CTA
│   └── Footer.tsx                # Footer med nav-kolonner
├── constants/content.ts          # All tekst/data på ett sted
├── hooks/useScrollAnimation.ts   # Animasjonsvarianter + useAnimationConfig
├── lib/lenis.ts                  # Lenis-initialisering
└── types/index.ts                # TypeScript-grensesnitt
```

## 🎯 Nøkkelseksjoner

- **Navbar** — Sticky navigasjon med mobil hamburgermeny
- **Hero** — Fullhøyde hero med parallax-effekt
- **Expertise** — Tre-kolonne praksisområder showcase
- **TrustBlock** — Statistikk og bilde split-layout
- **Biography** — Partner-biografi med foto
- **Process** — Fire-stegs prosess-grid
- **Testimonials** — Klientanbefalinger-seksjon
- **CTASection** — Siste call-to-action
- **Footer** — Flerkolonne footer med navigasjon

## 🎨 Designtokens

Definert i `src/index.css` via Tailwind v4 `@theme` — auto-genererer utility-klasser:

```css
@theme {
  --color-gold: #D4AF37;   /* → text-gold, bg-gold, border-gold */
  --color-bg: #0A0A0A;     /* → bg-bg */
  --font-fraunces: ...;    /* → font-fraunces */
  --font-instrument: ...;  /* → font-instrument */
}
```

## 🎯 Animasjonsnotater

**Lenis** er initialisert med `duration: 1.2s` (tidsbasert, ikke `lerp`) — fullt bildefrekvens-uavhengig, korrekt ved 60 Hz, 120 Hz og 144 Hz+.

**Framer Motion** animasjoner er deaktivert på:
- Mobilskjermer (`< 768px`) — elementer rendres umiddelbart, ingen inngangsdelay
- OS-nivå `prefers-reduced-motion`-innstilling

**Tilpasset markør** (trekant-pil) vises kun på `pointer: fine`-enheter. På touch/mobil bevares den native markøren.

## 🎯 Læringsmål

- React 19 med TypeScript 6
- Tailwind CSS v4 designtokens
- Lenis smooth scroll-integrasjon
- Tilpasset markørimplementering
- Framer Motion scroll-animasjoner
- Responsivt design med animasjonshensyn
- Tilgjengelighet (reduced-motion-støtte)

---

**Merk:** Porteføljeprosjekt som demonstrerer premium landingsside-design med sofistikerte animasjoner.
