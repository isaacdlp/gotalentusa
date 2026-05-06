# Go Talent USA — Project Overview

## What This Is

A single-page marketing website for **Go Talent USA**, a technology recruitment firm founded by Jose Gomez. The site is pure HTML/CSS/JS — no framework, no build step, no package manager.

## Tech Stack

| Layer | Detail |
|-------|--------|
| Markup | `index.html` — single file, semantic HTML5 |
| Styles | `styles.css` — vanilla CSS with custom properties |
| Scripts | `script.js` — vanilla JS (no dependencies) |
| Fonts | Inter via Google Fonts |
| Images | `images/` directory (stock photos + founder photo `JoseGomez.jpg`) |

## Site Structure (sections in order)

1. **Nav** — sticky, scrolled-state + mobile hamburger toggle
2. **Hero** — headline, stats (10+ yrs, 100% specialist, 3 services), dual CTAs
3. **Value Proposition** — 4 cards (Deep Knowledge, Data-Driven, Relationship-First, Consultative)
4. **Services** — 3 cards: Start Hiring / Find a Job / Fractional Recruitment Support
5. **Specialisms (Talent)** — 6 focus areas: Data Engineering, AI, Analytics & BI, Data Architecture, Software Engineering, Data Science
6. **About** — founder bio for Jose Gomez
7. **Process** — 4-step: Discovery → Strategy → Delivery → Partnership
8. **Contact** — form (Name, Email, Type, Message) + email/LinkedIn links
9. **Footer** — links + copyright

## Brand

- **Colors**: dark navy (`#0D1B2A`) + red-orange (`#E84517`) from the logo
- **Tagline**: "Powering the Future, One Hire at a Time."
- **Contact**: jose@gotalentusa.com
- **LinkedIn**: linkedin.com/company/gotalentusa

## JS Behaviors

- Nav scroll shadow + mobile menu toggle
- IntersectionObserver fade-in animations on cards/steps
- Active nav link highlighting via section observer
- Contact form submit handler (currently simulated — no real endpoint wired up yet)

## Known TODOs

- Contact form posts to Formspree (`https://formspree.io/f/mzdovpko`) via AJAX
- Logo image at `images/logo.png` referenced in HTML — verify it exists
- Founder photo path is `images/JoseGomez.jpg` (source file was `store/Jose.jpeg`)
