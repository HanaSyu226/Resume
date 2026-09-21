# Aina Mardia Mohamad Kerta — Portfolio

Personal portfolio of **Aina Mardia Mohamad Kerta** — software engineer, UI/UX designer, and IT lecturer based in Kuching, Sarawak.

**Live site:** the deployed address is listed on my résumé and profile.

## Concept

The design is a night-drive heads-up display: visitors travel a glowing road that draws itself as they scroll, with each career milestone lighting up as a waypoint along the route. The concept is drawn from my own work and ambitions in human-centred interface design.

## Features

- Animated "ignition" opening sequence and staggered name reveal
- Scroll-drawn winding road timeline with waypoint cards
- **Hall of Fame** — a photo gallery of medals, press features, and milestones with a keyboard-navigable lightbox. Drop images into `assets/hall-of-fame/` (see the README there for exact filenames) and cards upgrade themselves automatically; empty slots fall back to a clean icon.
- Interactive Design Lab — live design token (accent hue) slider, stateful switch, micro-feedback button, and progress ring, all hand-built
- In-browser résumé and cover-letter preview with downloadable PDFs
- Day / night theme toggle
- Press features from the Sarawak Tribune
- Mobile hamburger menu with a slide-down nav panel
- Subtle film-grain texture and cursor-follow glow on hover-capable devices
- Open Graph / Twitter Card meta tags and Person structured data for clean social previews and search results
- Fully responsive; respects `prefers-reduced-motion`; keyboard-accessible modals; skip-to-content link

## Tech

Single-file static site — hand-written HTML, CSS, and vanilla JavaScript. No frameworks, no build step. Typography: Syne, Space Grotesk, and Chakra Petch (Google Fonts).

## Structure

```
index.html          — the entire site (styles and scripts inlined)
assets/
  Aina-Mardia-Resume.pdf
  Aina-Mardia-Cover-Letter.pdf
  aina-portrait.jpeg
  hall-of-fame/      — achievement photos (see README.txt inside)
```

## Run locally

Open `index.html` in any browser. No server required.

## Contact

am.hana.mk@gmail.com · Kuching, Sarawak
