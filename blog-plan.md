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

**Decision: Vercel.** (Note: repo currently also has a GitHub Pages Actions workflow at `.github/workflows/deploy.yml` from an earlier pass — needs to be swapped out for Vercel, or removed if deploying via Vercel's own Git integration instead of Actions.)

## Site Structure

- **Homepage** (`src/index.njk`) — intro/bio + latest 5 posts across both sections
- **Two content sections**, tag-driven, with nav in the header:
  - **Personal** (`/personal/`) — posts tagged `personal`
  - **Technical** (`/technical/`) — posts tagged `technical`
- Posts live in `src/posts/*.md`, tagged `posts` plus one of `personal` / `technical`

## Next Steps

- [x] Decide: Astro vs. Eleventy → **Eleventy**
- [x] Scaffold starter project with a paperwhite theme
- [x] Pick a hosting provider → **Vercel**
- [x] Homepage + Personal/Technical nav
- [ ] Connect repo to Vercel and remove/replace the GitHub Pages workflow
- [ ] Write first real posts (personal + technical)
