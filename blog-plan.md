# Personal Blog — Planning Notes

*Started 2026-07-28*

## Goal

A personal blog to write down everything — thoughts, notes, whatever comes up. Primary use case is writing, not showcasing engineering.

## Look & Feel

**Paperwhite** — an e-ink-inspired aesthetic:
- Cream / off-white background, not stark white
- Serif or high-legibility body type
- High contrast, minimal chrome
- No dark mode gimmicks or flashy UI — the page should feel like paper, not an app

## Constraints

- Owner knows "some coding" — comfortable editing code, not looking to hand-roll a CMS or backend
- Wants **free** hosting and tooling

## Tech Options Discussed

| Generator | Why it fits |
|---|---|
| **Astro** | Markdown-first, flexible if interactive bits get added later. Slightly more setup. |
| **Eleventy (11ty)** | Lightest weight, purely markdown → HTML, minimal framework overhead — good fit for a "just write" blog |
| Hugo / Jekyll | Mentioned as alternatives; Jekyll has native GitHub Pages support |

**Decision: Eleventy (11ty).** No component islands or interactivity planned, so Astro's extra layer (component model, MDX, Content Collections) wasn't worth the overhead. Eleventy's zero-config markdown → HTML pipeline is the closest match to "just write."

### Free hosting

Cloudflare Pages, Netlify, Vercel, or GitHub Pages — any of these auto-deploy from a git repo on push.

## Next Steps

- [x] Decide: Astro vs. Eleventy → **Eleventy**
- [x] Scaffold starter project with a paperwhite theme
- [ ] Pick a hosting provider and connect repo for auto-deploy
- [ ] Write first post
