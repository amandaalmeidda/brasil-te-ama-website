# Brasil te Ama — Design System

This folder contains all design tokens and component specifications for the Brasil te Ama brand.

## Structure

```
design-system/
├── colors.json          # Color palette (primary, secondary, neutral, semantic)
├── typography.json      # Font families, sizes, weights, line heights
├── spacing.json         # Spacing scale (padding, margin, gaps)
├── components.json      # Component definitions and variants
└── README.md            # This file
```

## Token Categories

### Colors (`colors.json`)
- **Primary:** Brand main color and variations
- **Secondary:** Secondary brand color
- **Neutral:** Grayscale palette
- **Semantic:** Success, warning, error, info colors

### Typography (`typography.json`)
- **Font Families:** Heading and body fonts
- **Font Sizes:** Scale from xs (12px) to 5xl (48px)
- **Font Weights:** Light to Extra Bold
- **Line Heights:** Tight to Loose

### Spacing (`spacing.json`)
- **Spacing Scale:** xs (4px) to 4xl (96px)
- **Padding & Margin:** Consistent scale for layouts

### Components (`components.json`)
- Button variants and states
- Card styles
- Form inputs
- Navigation structure

## Usage

1. **In HTML/CSS Design** (`/design`)
   - Reference tokens for colors, fonts, spacing
   - Build component styles consistently

2. **In React Implementation** (`/src`)
   - Convert tokens to CSS variables or Tailwind config
   - Ensure consistency across the app

## For Amanda (Designer)

Fill in these blanks as you finalize your brand:
- Primary colors (light, main, dark)
- Secondary colors
- Font families (currently placeholders)
- Any additional color variants

---

**Last Updated:** May 23, 2026
