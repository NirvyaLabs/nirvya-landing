# Nirvya Minimal

Nirvya Health’s marketing system is modern-minimal and product-led. It retains the original brand principles: an ink-dark opening, calm near-white editorial sections, a restrained healthcare green, precise sans-serif typography, generous whitespace, and quiet product surfaces.

## Direction

- Audience: hospital, clinic, government and health-system leaders.
- Primary action: **Request a pilot**.
- Genre: modern-minimal.
- Macrostructure: **Split Studio**.
- Navigation: **N5 Floating pill**.
- Footer: **Ft2 Inline-rule single line**.
- Enrichment: Tier A CSS product demonstrations only.
- Voice: short, factual and operational. No founder story, invented adoption claim, testimonial, certification claim or unsupported impact metric.

## Shared page system

The homepage uses a split dark hero, quiet country evidence rail, F2 sticky platform stack, F3 country data sheet, F4 pilot sequence, open-source split and dark closing action. Product pages use the same split hero and alternate text/product-demonstration rows.

The green accent marks progress, focus and the primary action. It should remain below roughly five percent of any viewport. Large sections remain ink, paper or neutral grey.

## Typography

- Display: Avenir Next / Helvetica Neue, 650 weight, tight tracking.
- Body: IBM Plex Sans / Segoe UI, 400–700 weights.
- Outlier: SF Mono / Geist Mono for country codes, step indices and code.
- Headings are sentence case, never italic, and generally stay below twelve words.

## Layout and interaction

- Maximum content width: 76rem.
- Four-point spacing scale only.
- Cards use one 18px radius; navigation and compact actions use pills.
- Motion primitives: button press, country-panel crossfade, mobile-menu entrance.
- Interactive states include hover, focus, active/pressed, disabled, loading, error and success.
- At 64rem the hero stacks and sticky sections become linear. At 48rem layouts become single-column. The minimum supported viewport is 320px.

## Tokens

`tokens.css` is the source of truth. All page styles consume semantic variables; raw colour values live only in that file.

## Exports

### CSS source

Use the repository-root `tokens.css` file.

### Tailwind v4

```css
@theme {
  --color-paper: oklch(98.4% 0.004 155);
  --color-paper-2: oklch(96.4% 0.007 155);
  --color-paper-3: oklch(92.8% 0.01 155);
  --color-ink: oklch(16.5% 0.014 158);
  --color-ink-2: oklch(27% 0.014 158);
  --color-muted: oklch(53% 0.011 158);
  --color-rule: oklch(88.5% 0.008 155);
  --color-accent: oklch(47% 0.128 157);
  --color-focus: oklch(60% 0.155 154);
  --font-display: "Avenir Next", "Helvetica Neue", ui-sans-serif, system-ui, sans-serif;
  --font-body: "IBM Plex Sans", "Segoe UI", ui-sans-serif, system-ui, sans-serif;
  --font-outlier: "SFMono-Regular", "Geist Mono", ui-monospace, monospace;
  --spacing-3xs: 0.25rem;
  --spacing-2xs: 0.5rem;
  --spacing-xs: 0.75rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --spacing-2xl: 4.5rem;
  --spacing-3xl: 7rem;
  --radius-card: 1.125rem;
  --radius-pill: 999px;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
}
```

### DTCG tokens.json

```json
{
  "$schema": "https://design-tokens.github.io/community-group/format/",
  "color": {
    "paper": { "$value": "oklch(98.4% 0.004 155)", "$type": "color" },
    "paper-2": { "$value": "oklch(96.4% 0.007 155)", "$type": "color" },
    "paper-3": { "$value": "oklch(92.8% 0.01 155)", "$type": "color" },
    "ink": { "$value": "oklch(16.5% 0.014 158)", "$type": "color" },
    "ink-2": { "$value": "oklch(27% 0.014 158)", "$type": "color" },
    "muted": { "$value": "oklch(53% 0.011 158)", "$type": "color" },
    "rule": { "$value": "oklch(88.5% 0.008 155)", "$type": "color" },
    "accent": { "$value": "oklch(47% 0.128 157)", "$type": "color" },
    "focus": { "$value": "oklch(60% 0.155 154)", "$type": "color" }
  },
  "font": {
    "display": { "$value": "Avenir Next, Helvetica Neue, ui-sans-serif, system-ui, sans-serif", "$type": "fontFamily" },
    "body": { "$value": "IBM Plex Sans, Segoe UI, ui-sans-serif, system-ui, sans-serif", "$type": "fontFamily" },
    "outlier": { "$value": "SFMono-Regular, Geist Mono, ui-monospace, monospace", "$type": "fontFamily" }
  },
  "space": {
    "3xs": { "$value": "0.25rem", "$type": "dimension" },
    "2xs": { "$value": "0.5rem", "$type": "dimension" },
    "xs": { "$value": "0.75rem", "$type": "dimension" },
    "sm": { "$value": "1rem", "$type": "dimension" },
    "md": { "$value": "1.5rem", "$type": "dimension" },
    "lg": { "$value": "2rem", "$type": "dimension" },
    "xl": { "$value": "3rem", "$type": "dimension" },
    "2xl": { "$value": "4.5rem", "$type": "dimension" },
    "3xl": { "$value": "7rem", "$type": "dimension" }
  },
  "duration": {
    "micro": { "$value": "120ms", "$type": "duration" },
    "short": { "$value": "220ms", "$type": "duration" },
    "long": { "$value": "420ms", "$type": "duration" }
  }
}
```

### shadcn/ui

```css
:root {
  --background: 98.4% 0.004 155;
  --foreground: 16.5% 0.014 158;
  --card: 96.4% 0.007 155;
  --card-foreground: 16.5% 0.014 158;
  --popover: 98.4% 0.004 155;
  --popover-foreground: 16.5% 0.014 158;
  --primary: 47% 0.128 157;
  --primary-foreground: 98.4% 0.004 155;
  --secondary: 92.8% 0.01 155;
  --secondary-foreground: 27% 0.014 158;
  --muted: 88.5% 0.008 155;
  --muted-foreground: 53% 0.011 158;
  --accent: 47% 0.128 157;
  --accent-foreground: 98.4% 0.004 155;
  --destructive: 52% 0.19 28;
  --destructive-foreground: 98.4% 0.004 155;
  --border: 88.5% 0.008 155;
  --input: 88.5% 0.008 155;
  --ring: 60% 0.155 154;
  --radius: 1.125rem;
}
```
