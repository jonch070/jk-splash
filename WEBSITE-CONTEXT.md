# jonathankawchuk.com Redesign — Context

## What exists
- Current site: Squarespace at jonathankawchuk.com (very minimal — name, portrait, nav links)
- Nav links: Everywhen, North, Installation, Field Recording, Hunt for the Oldest DNA, Film Composition, Contact

## Reference sites
- **walkergrimshaw.com** — professional reference. All-caps branding, clean grid of project thumbnails, 3-link nav (Latest, Bio/IMDB, Contact). Walker is a collaborator (they co-scored Hunt for the Oldest DNA).
- **ped.ro** — artistic reference. Conversational first-person bio with interactive hover-reveal inline elements. Text-forward. "Yo! I'm Pedro Duarte." Clean white background.
- **sacred.blue** (Emily Mackrell) — artistic reference. Lowercase, minimal, "hallo—welcome to my web site!" One sentence intro. Section-based text list of works. White bg.
- **maysun.zip** — artistic reference. Bold nav with many sections (Biography, Activities, Installations, Albums). Large hero photo. Social icons.
- **externalvacancy.com/half-keep** — artistic reference. Spatial image canvas. Images positioned absolutely, grayscale by default, color + scale(3) on hover. Live timestamp. Bracket notation [EVAC]. One-line poetic description. Built with Astro.

## Design direction
- Leans artistic, not professional portfolio
- FF Dax typeface (humanist sans, needs Monotype web licence, .woff2 files)
- White background, black text, no "tasteful" palette
- Lowercase throughout
- Bracket notation: [jk]
- Live clock in top corner
- [+]/[-] nav toggle
- Scattered image zone (grayscale → color on hover, parallax drift)
- Work listed as plain text rows, not thumbnail grid
- Diary/changelog section using Jonathan's own visual language (see below)

## Jonathan's visual language — the diary block
Screenshot shared showing his note format:
- Dark background (#1c1c1c)
- White text
- Triangle ornament: ▲ ▲ ▲ ▲ ▲ above a horizontal rule, text, horizontal rule below, ▼ ▼ ▼ ▼ ▼
- Voice: "The conceptual and technical challenges of this record cannot outpace the musical ideas. I'm fooling myself thinking that I'm addressing that by building technical tools."
- Short, honest, first-person, self-critical, no jargon
- This is the recurring visual unit for diary/changelog entries on the site

## Diary / changelog concept
- Music diary + changelog (what he already posts on social media)
- Each entry = dark block with triangle ornaments + date + text + optional audio
- SoundCloud embeds look bad in default form. Two options explored:
  - SC iframe at height=20 with all chrome hidden (controls only, no artwork)
  - Plain text link: "↳ track name — soundcloud" (recommended — cleaner)
- Newest entry at top

## Mockups built (in this folder)
1. `jonathankawchuk-proposed.html` — v1, dark/professional, Walker Grimshaw-inspired grid
2. `jonathankawchuk-v2-artistic.html` — v2, warm linen bg, artistic, EVAC/ped.ro/sacred.blue-inspired
3. `jonathankawchuk-v3.html` — v3 (current best), white bg, stripped back, diary blocks

## What to avoid (agreed AI tells)
- Section labels on everything
- Third-person bio doubling first-person bio
- Fabricated pull quotes
- Marquee strips with keyword lists
- Hover reveals as a decorative feature
- Warm linen "tasteful" palette — just use white
- Comprehensive footer with every social + copyright + sig
- Animations that perform rather than serve (page fade, parallax as decoration)
- cursor: crosshair
- Copy that sounds like a grant application ("acoustic ecology of remote and transitional landscapes")
- Over-completeness — AI designs by addition, good artist sites by subtraction

## Squarespace integration plan
Can use the HTML as a splash page on Squarespace:
1. `squarespace-custom.css` → Design > Custom CSS
2. `squarespace-header-injection.html` → Code Injection > Header (FF Dax + clock JS)
3. `squarespace-homepage-block.html` → Code Block on homepage (body HTML only)
4. `squarespace-footer-injection.html` → Code Injection > Footer

Hide SS chrome on homepage only:
```css
.homepage header.site-header,
.homepage footer.site-footer,
.homepage .sqs-announcement-bar { display: none !important; }
```
Work links use relative paths (/everywhen, /north) → resolve to existing Squarespace pages.

Alternative: host static HTML on Netlify (free) and point domain there. Easier for full control.

## Mobile caveats
- Scatter zone: absolute-positioned images break on mobile. Fix: collapse to 2-col grid (already in v3 CSS)
- Hover effects (grayscale reveal, tooltips): no hover on touch. Fix: tap-to-toggle JS (already in v3)
- scale(3) hover on scatter: remove or reduce on mobile
- v1 nav: needs hamburger or [+]/[-] at 480px

## Assets needed from Jonathan
- FF Dax .woff2 (Regular 400, Medium 500) — web licence from Monotype
- 4-6 photos for scatter zone (field shots, landscapes, stills, installation)
- 8-15 photos per project page (for Half Keep-style scatter pages, later)
- Real email address
- Streaming URLs: Spotify, Apple Music, Bandcamp, SoundCloud
- Instagram link
- Project years/dates for Everywhen and North
- Bio copy in his own words
- SoundCloud track URLs for diary entries
