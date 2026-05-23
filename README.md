# Brasil te Ama Website

A modern, mission-driven website for Brasil te Ama, built with pure design-first approach and React implementation.

---

## 🎨 Design vs Implementation

This project separates **design** from **implementation**:

| Folder | Purpose | Who? |
|--------|---------|------|
| **`/design-system`** | Design tokens and component specs — brand foundation | Designer/Amanda |
| **`/design`** | Pure HTML/CSS static templates — source of truth for how the site should look | Designer/Amanda |
| **`/src`** | React/Next.js implementation — dynamic, data-driven production code | Developer |

### View Design Online

🔗 **[View Design Preview](https://amandaalmeidda.github.io/brasil-te-ama/)** ← Share this link with your developer

Or run locally:
```bash
npm run serve:design
# Opens http://localhost:8000 — pure HTML/CSS with no JavaScript
```

### View Implementation

```bash
npm run dev
# Opens http://localhost:3000+ — full Next.js app with dynamic features
```

**Why this matters:** Your developer references `/design` to see exactly what you designed, then converts it to React components while preserving your design intent.

---

## 📁 Project Structure

```
brasil-te-ama/
├── design-system/           # Design tokens (colors, typography, spacing)
│   ├── colors.json
│   ├── typography.json
│   ├── spacing.json
│   ├── components.json
│   └── README.md
├── design/                  # Static HTML/CSS design templates
│   ├── index.html
│   ├── assets/
│   │   ├── css/
│   │   ├── fonts/
│   │   ├── images/
│   │   └── icons/
│   └── README.md
├── src/                     # React/Next.js implementation
│   ├── pages/
│   ├── components/
│   ├── styles/
│   └── lib/
├── README.md                # This file
└── package.json
```

---

## Quick Start (For Developers)

```bash
npm install
npm run dev
```

Opens on http://localhost:3000 or higher if ports are in use (check terminal output for actual URL)

---

## 🎯 Workflow

1. **Amanda designs** — Creates HTML/CSS in `/design` folder using design system tokens
2. **Amanda pushes** — Commits and pushes design updates to git
3. **GitHub auto-deploys** — Design preview updates at GitHub Pages URL
4. **Developer references** — Opens GitHub Pages link to see exact design requirements
5. **Developer implements** — Builds React components in `/src` matching the design
6. **Developer pushes** — Creates PR for review and deploys to production

---

## 📋 Setup Checklist

- [ ] Fill in design system tokens (`/design-system/*.json`)
- [ ] Create design pages in `/design` folder using design system
- [ ] Push repository to GitHub
- [ ] Enable GitHub Pages (Settings → Pages → Source: GitHub Actions)
- [ ] Share design preview link with developer
- [ ] Developer starts implementing React components

---

## Development Commands

```bash
# Start design server (static HTML)
npm run serve:design

# Start dev server (React)
npm run dev

# Build for production
npm run build
```

---

## For Designers

- **Design System:** See `/design-system/README.md`
- **Static Design:** See `/design/README.md`
- All brand tokens in JSON format — easy to reference or share

## For Developers

- **Design Reference:** https://amandaalmeidda.github.io/brasil-te-ama/
- **Design Tokens:** `/design-system/*.json`
- **Component Guide:** Check `/design` for HTML structure and CSS classes

---

**Created:** May 23, 2026  
**Repository:** brasil-te-ama  
**Design System:** Tokens-based, version-controlled in `/design-system/`
