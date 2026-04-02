# Avoiding AI-Generated Website Patterns

A guide to creating more authentic, hand-crafted HTML/CSS that doesn't look "AI-generated."

---

## 1. CSS Class Names

### ❌ AI Hallmarks
- Generic, verbose names: `container-wrapper`, `section-container`, `content-box-wrapper`, `hero-section-container`, `primary-button`, `secondary-button`, `cta-button`, `flexbox-container`
- Overuse of BEM-ish naming but inconsistently: `.block__element--modifier` mixed with random camelCase
- Bootstrap/Tailwind utility patterns without purpose: `.d-flex`, `.align-items-center`, `.justify-content-between`, `.text-center`, `.mb-4`, `.p-3`

### ✅ Avoid This
- Don't use generic "container" or "wrapper" repeatedly with numbers
- Avoid obvious functional names like "btn-primary", "btn-secondary"
- Don't include framework prefixes (Bootstrap: `ml-`, `mt-`, Tailwind: `flex`, `grid`, `p-4`)
- Avoid semantic-sounding but meaningless names like `.hero-content`, `.info-section`

### ✅ Better Approach
- Use abstract, personal, or project-specific naming: `.field-notes`, `.mountain-mesh`, `.sound-grid`
- Or simple descriptive naming: `.entry-title`, `.map-area`, `.recording-note`
- Keep it shorter and less descriptive

---

## 2. HTML Structure

### ❌ AI Hallmarks
- Unnecessary wrapper `div`s: `<div class="wrapper"><div class="container"><div class="content">...</div></div></div>`
- Empty elements for spacing: `<div class="spacer"></div>`, `<div class="margin-top-20"></div>`
- Excessive use of `<section>` with IDs: `<section id="hero">`, `<section id="features">`, `<section id="about">`
- Inline comments that state the obvious: `<!-- Hero Section -->`, `<!-- End of Container -->`
- Unused `data-` attributes: `<p data-start="104" data-end="490"></p>`
- Semantic tags used incorrectly: multiple `<main>` tags, `<article>` without content

### ✅ Better Approach
- Flat structure when possible
- Use `<div>` sparingly, prefer semantic elements genuinely
- Remove unnecessary wrapper divs
- No empty spacer elements — use CSS margin/padding instead
- Avoid obvious HTML comments, or use them sparingly for complex sections only

---

## 3. CSS Patterns

### ❌ AI Hallmarks
- Reset everything then rebuild: `* { margin: 0; padding: 0; box-sizing: border-box; }` followed by adding everything back
- Copied boilerplate from frameworks without understanding
- Eagerly setting every property: `display: flex; justify-content: center; align-items: center; flex-direction: column;` for simple cases
- Over-abundant use of `!important`
- Unused CSS: hundreds of lines of resets you don't need

### ✅ Better Approach
- Only reset what you actually need
- Set defaults once, not repeatedly
- Use shorthand properties when logical
- Be selective, not exhaustive

---

## 4. Design Patterns

### ❌ AI Hallmarks
- Generic hero sections with gradient overlays: `.hero { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }`
- "Modern" shadows: `box-shadow: 0 10px 30px rgba(0,0,0,0.1);`
- Generic glassmorphism: `.glass { background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); }`
- Generic gradient text: `.gradient-text { background: linear-gradient(...); -webkit-background-clip: text; }`
- AI "advice" filler content: "Lorem ipsum", "This is a placeholder", "Add your content here"
- Obvious placeholder images: `https://via.placeholder.com/300`

### ✅ Better Approach
- Use solid colors or subtle gradients (or none)
- If using shadows, make them specific and minimal
- Avoid trendy effects unless they serve a purpose
- Write your own content, not placeholder text

---

## 5. JavaScript

### ❌ AI Hallmarks
- Copied CDN boilerplate: jQuery, Bootstrap JS, FontAwesome — loaded but unused
- Unnecessary frameworks: React/Vue for simple static pages
- Over-engineered solutions: "Hamburger menu" code when simple is better
- Copied analytics/tracking snippets without understanding

### ✅ Better Approach
- Keep JavaScript minimal or none
- If needed, write vanilla JS, no libraries unless truly needed
- Only load what's used

---

## 6. Color Palettes

### ❌ AI Hallmarks
- Unused CSS custom properties: `:root { --primary: #007bff; --secondary: #6c757d; ... }` with only 1-2 used
- Generic "tech" palettes: deep purple/blue gradients, cyan accents
- Obvious Tailwind colors still visible: `text-blue-500`, `bg-gray-100`

### ✅ Better Approach
- Define colors you actually use, nothing more
- Use specific meaningful color names: `--stone: #a8a29e; --peak: #1c1917;`

---

## 7. Fonts & Typography

### ❌ AI Hallmarks
- Loading 3-5 Google Fonts then using only one
- Generic font stacks: `"Segoe UI", "Roboto", "Helvetica Neue", sans-serif`
- Generic scale: `font-size: 1rem; line-height: 1.5;` everywhere with no hierarchy
- AI "designed" typographic systems: too-perfect modular scale

### ✅ Better Approach
- Use system fonts or limit to 1-2 web fonts
- Real typographic hierarchy, not mathematical
- Vary weight, size, and spacing more organically

---

## 8. Layout

### ❌ AI Hallmarks
- Over-reliance on flexbox/grid for everything
- CSS Grid for simple single-column layouts
- Centering everything: `justify-content: center; align-items: center;` as default
- Generic card layouts: image + title + description + button, repeated

### ✅ Better Approach
- Let layout serve content, not generic patterns
- Mix approaches: inline-block, grid, flex, or none as appropriate
- Avoid over-systematizing

---

## Quick Audit Checklist

- [ ] No generic class names like "container", "wrapper", "btn-primary"
- [ ] No obvious framework utility classes
- [ ] No unnecessary wrapper divs
- [ ] No empty spacing divs
- [ ] No unused CSS variables
- [ ] No gradient/glass effects unless essential
- [ ] No obvious placeholder content
- [ ] Minimal JavaScript (or none)
- [ ] Only fonts actually used
- [ ] Design feels like it solves a specific problem, not a template

---

## Key Takeaway

AI-generated code tends to be: **comprehensive, generic, verbose, over-structured, and trend-following**.

Human-crafted code tends to be: **selective, specific, concise, direct, and idiosyncratic**.

When in doubt: delete more than you add. Fewer classes, fewer divs, fewer CSS rules, fewer fonts. Let the content breathe.