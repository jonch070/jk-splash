# Project Context: Jonathan Kawchuk — Personal Website Redesign

## The Person

- **Name:** Jonathan Kawchuk
- **Location:** Canada
- **Identity:** Composer, sound artist, field recordist, conservationist
- **TED Talk:** Upcoming TED2026 — this is the immediate catalyst for the redesign
- **Key differentiator:** Founder/involved with Quiet Parks International (advocacy for acoustic ecology, quiet preservation)

## Credentials to surface

- Emmy-winning (PBS NOVA)
- 2x CASMA Winner
- Grammy Voting Member
- Quiet Parks International involvement
- Collaborations with Chris Watson, sound design for National Geographic

## Core Work

### Artistic
- **Everywhen** — installation at Phi Centre/IMAX
- **North** — project
- **Installation** — select installations (I-Thou, etc.)
- **Film scoring** — disco.ac playlist

### Conservation/Field Recording
- **The Narwhal article** — "Protecting the Quiet" (press coverage of conservation work)
- **Hunt for the Oldest DNA** — score for National Geographic documentary
- **Field Recording** — central to identity, not just a link to The Narwhal

## Personal Statement (best copy on the site)

> "The natural world is perfect
> I go to great lengths to reflect that in my work"

Currently buried on the Contact page. Should be surfaced.

## Design Aesthetic

### Style References
- **EVAC (Half Keep)** — bracket notation [jk], spatial canvas with grayscale images, scale(3) hover reveal, live timestamp footer, white bg
- **sacred.blue** — ultra-minimal, lowercase, one-sentence intros
- **ped.ro** — first-person conversational, hover-reveal inline elements
- **Maiella (Multiverse)** — parametric topography, "nature meets code" aesthetic
- **Dancing with Mountains** — poetic manifesto text, nature imagery abstracted

### Design Elements (signature moves)
1. **Lowercase throughout** — "jonathan kawchuk", not "Jonathan Kawchuk"
2. **Bracket notation** — [jk] as logo/identifier
3. **Diary blocks** — dark background, triangle ornament (▼), distinct visual unit
4. **Grayscale images that reveal on hover** — from EVAC
5. **Spatial scatter zone** — images placed on canvas, not grid
6. **Live clock** — timestamp in footer (functional, not decorative)
7. **Sparse homepage** — mostly just portrait + nav
8. **No section labels** — clean, no "ABOUT" or "WORK" headers
9. **Work as plain text rows** — not thumbnails or cards

### Elements to avoid
- Section labels (no "WORK" or "ABOUT")
- Fake quotes
- Warm "tasteful" palettes
- Decorative animations
- Thumbnails for work items

## Problem Statement

### Current site issues (Squarespace, live at jonathankawchuk.com)
1. Homepage is essentially empty — just portrait + nav, no intro or context
2. 8 nav items — way too many for minimalism
3. External links in nav (Field Recording → The Narwhal, Hunt for the Oldest DNA, Film Composition)
4. Personal statement buried on Contact page
5. No credentials visible anywhere (Emmy, CASMAs, Grammy Member, QPI)
6. "Field Recording" → external link is not work
7. Location shows "Liverpool, UK" (likely wrong)
8. Site description meta is inconsistent with lowercase aesthetic

### The dual audience problem
- **Art industry insiders** — understand minimalism as intentional, want to see work quickly
- **TED audience** — new visitors who need context in 10 seconds (who is this person? why should I care?)

The site needs to serve both *without* two different aesthetics.

## Proposed Site Structure

### Navigation (5 items)
```
[jk] | work | quiet | diary | contact
```

**Notes:**
- `[jk]` is the home link (bracket notation)
- "work" — artistic projects (Everywhen, North, Installation, Film)
- "quiet" — conservation/field recording (The Narwhal, QPI, field recording philosophy)
- "diary" — personal notes/writing (existing)
- "contact" — existing

**What was cut:**
- External links removed from nav: "Field Recording", "Hunt for the Oldest DNA", "Film Composition"
- These now live in their appropriate sections ("work" or "quiet") as text links

### Homepage
```
[jk]                                  work / quiet / diary / contact

[jk portrait — square, grayscale]

jonathan kawchuk

composer + field recordist + quiet parks

work: everywhen, north, installation, film
quiet: protecting the quiet, field recording
diary: ...

[scatter zone — placeholder images on spatial canvas]

17:43
```

**Notes:**
- Portrait: grayscale square, possibly with hover-reveal
- Intro: "composer + field recordist + quiet parks" (credentials line)
- Work list: plain text rows, links to work section
- Scatter zone: placeholder images in spatial layout (grayscale → color on hover)
- Live clock in footer

### /work page
```
everywhen
installation — phi centre, imax
[link]

north
project
[link]

installation
select installations
[link]

film
composition, score, sound design
[link to disco.ac]
```

### /quiet page
```
quiet

protecting the quiet
the narwhal — 2024
[field recording as conservation]
[link to article]

field recording
travel, landscape, the spaces between
[field recording as art]
[link to field recording section]

quiet parks international
advocacy for acoustic ecology
[link to QPI]
```

### /diary page
```
existing diary blocks (dark bg, triangle ornament)
```

### /contact page
```
existing contact structure + personal statement moved here
"the natural world is perfect / i go to great lengths to reflect that in my work"
```

### /about (expandable, not a page)
Clicking "[jk]" or a small "about" element reveals a diary-style block on the homepage with:
- Origin story (1-2 paragraphs)
- Credentials: Emmy-winning, CASMA, Grammy Member, QPI
- Personal statement

This keeps homepage sparse while giving TED audience context.

## Technical Approach

### Stack
- Single HTML file (working copy)
- Vanilla CSS + JS
- No build step required
- Can be hosted anywhere or tested locally

### Key implementation details
1. **Grayscale hover:** `filter: grayscale(100%)` → `grayscale(0%)` on hover, with `transform: scale(3)` (from EVAC)
2. **Spatial scatter:** `position: absolute` images on a relative container
3. **Diary block:** Dark background (#000 or near-black), white text, triangle ornament (▼ or CSS border triangle)
4. **Live clock:** `new Date()` update every second in footer
5. **Bracket notation:** [jk] as text logo
6. **Responsive:** Mobile-friendly, nav collapses or simplifies

## Influences and References

See `/html references/` folder for saved HTML snapshots of:
- `Half Keep _ [EVAC].html` — spatial canvas, bracket notation, grayscale hover, live timestamp
- `Maiella – Design Everywhere.html` — parametric topography, nature in tech
- `Dancing with Mountains.html` — poetic text, nature imagery
- `Pedro Duarte's Personal Website.html` — first-person, hover reveal
- `sacred blue.html` — ultra-minimal reference

## SEO

- Page title: "Jonathan Kawchuk — Composer & Sound Artist" (SEO-friendly)
- Homepage display: lowercase "jonathan kawchuk" (aesthetic choice)
- Meta description: concise summary of work + conservation angle

## Open Questions / Future Decisions

1. **Scatter zone images:** Currently placeholders. Real images to be sourced.
2. **Intro copy:** "composer + field recordist + quiet parks" is a starting point. Can be refined.
3. **About block:** Expandable on homepage (diary-style). Keeps homepage sparse.
4. **Diary entries:** Existing diary blocks to be preserved/adapted.
5. **Squarespace vs. static:** Decision on whether to keep Squarespace or move to static hosting.

## Files

- `WEBSITE-CONTEXT.md` — original project context
- `TED2026 LinkedIn Session Context.md` — TED-specific context and talking points
- `TED2026 Talking Points.md` — TED talking points
- `html references/` — saved HTML snapshots of reference sites
- `html sketches/` — existing mockups (v1, v2, v3)
- `WEB-DESIGN-PLAN.md` — this file

## Key Quote from TED Feedback

> "The site is a beautiful, intentional portfolio for industry insiders. But for TED, it's missing the context that makes someone care about you in 10 seconds."

> "The safest approach: add an 'About' page to the nav, keep the homepage as-is. Aesthetic preserved, context one click away."

## Key Quote from Nature in Tech Analysis

> "Nature Meets Code aesthetic... taps into something we're all craving: tech that's not just frictionless, but also human, rooted, understandable."

> "This brand aesthetic answers to that — natural and carved."

This connects to Jonathan's work: field recordings capture place as data. The site could render that same logic — nature + structure + intentional silence.
