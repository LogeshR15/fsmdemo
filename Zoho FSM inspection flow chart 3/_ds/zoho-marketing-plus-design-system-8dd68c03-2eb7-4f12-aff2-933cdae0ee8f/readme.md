# Zoho Marketing Plus — Design System

A folder-based design system for **Zoho Marketing Plus**, the unified marketing
platform in Zoho's business-app suite. It captures Zoho's shared product UI
language — the dark module rail, slate topbar and white content canvas used
across the suite — focused on the **Marketing Plus** surfaces (Marketing
Projects, Budget Board, the app shell).

> **Sources**
> - **Codebase / Figma reconstruction:** ported from a prior reconstruction of the Zoho Marketing Plus internal Figma library (`temp design sys.fig` — pages `/Theme-Color`, `/Components`, `/Iteration`). Reference screenshots of the live product (Zylker Hospital demo org) are in `_ref/`.
> - **Brand:** Zoho Marketing Plus — https://www.zoho.com/marketingplus/
> - **Fonts:** the real **Zoho Puvi** brand typeface (TTF) ships in `fonts/`.

## Product context

Zoho Marketing Plus stitches email campaigns, social, surveys, landing pages,
marketing automation, webinars, analytics and brand-asset management into a
single dashboard where marketing teams plan, execute and measure cross-channel
campaigns. The recurring product chrome — a near-black **72px module rail**, a
**slate topbar** with tab navigation and an org switcher, and a white content
canvas — is the same shell shared across CRM, Desk, Projects, Campaigns, etc.

The two surfaces modeled here as a UI kit:
1. **App shell** — module rail + slate topbar + Cliq footer.
2. **Marketing Projects** list page and a **Budget Board** dashboard.

---

## CONTENT FUNDAMENTALS

**Voice.** Plain, businesslike, a little warm. Copy favors **clarity over
cleverness** and **action over adjective**. Project names read as real to-dos
("Healthy Start: Lead Generation", "Cardiovascular Health Webinar Campaign"),
not taglines.

**Casing.**
- **Sentence case** is the default — nav labels, buttons, section titles, form labels.
- **Title Case** for proper nouns and product/module names (Marketing Plus, Brand Studio, Campaigns, CRM).
- **UPPERCASE + 2% letter-spacing** for small column headers (`NAME & LOCATION`, `OBJECTIVE`, `TYPE`, `OWNER`) and captions.
- **Numbers** always in **Inter** (never Puvi) — counts, badges, spec annotations, money.

**Person.** Second-person **"you"** in help and empty states. First-person **"I"**
only in AI/Zia contexts ("Ask Zia"). Otherwise neutral/instructional — labels
("Objective", "Owner", "Status") and verbs ("Create project", "Add activity").

**Tone rules.**
- No exclamation points in UI chrome — only in success/celebration toasts.
- Buttons are verbs: Create, Add, Save, Cancel, Invite, Export, Publish.
- No marketing adjectives ("beautiful", "powerful", "seamless") in product UI.
- Avoid jargon. "Marketing Project" > "Initiative". "Activity" > "Task unit".

**Emoji.** **Not used** in product UI — the colored activity-icon system does
that work. Exception: user-generated content (comments, timeline posts).

**Unicode.** Sparingly: `•` separators, `—` ranges, sort arrows. SVG preferred.

**Vibe.** Dense, functional, "enterprise but not sterile." Colored activity
icons (CRM orange, SalesIQ green, Desk blue) add life without being loud. Cards
are crisp (16px radius, 1px grey border), the topbar is a confident solid slate,
empty states use friendly illustrated characters ("Zia", the Zoho assistant).

---

## VISUAL FOUNDATIONS

**Palette.** Cool, blue-leaning neutrals + one of **seven theme accents**
(blue default, red, yellow, pink, green, purple, orange). Each theme ships a
primary, a darker topbar shade, and four extremely desaturated background tints
(`_40`/`_30`/`_20`/`_10`) used behind cards, hovered rows and soft banners.
Feedback: link `#006AFF`, mandate red `#FA1D1D`, yellow alert `#F49630`, green
alert `#42AD4B`, blue alert `#1470CC`. Switch themes with `[data-theme="…"]`.

**Type.** **Zoho Puvi** (real brand font, in `fonts/`) for all UI + display, at
Regular 400 / Medium 500 / Semibold 600 / Bold 700 (Light 300, Extrabold 800,
Black 900 available). **Inter** for numerics only — a deliberate contrast of a
rounded humanist UI face against a neutral numeric face. Scale is **Minor Third
(1.2×)**: 10 / 12 / 13 / 14 / 16 / 18 / 24px, body line-height a generous 1.5–1.875.

**Spacing.** **4px base grid** (4, 8, 12, 16, 20, 24, 30, 40, 56, 72). Card
padding ~18px vertical / 20px horizontal. Form fields 32/36/40px tall (sm/md/lg).

**Backgrounds.** Solid white or very-light blue-grey (`#F7F8F9`, `#F9FAFB`). No
gradients, textures or patterns in chrome. Sidebar is solid **`#181818`**; topbar
is a solid theme slate. Quiet backgrounds keep content the focus.

**Animation.** Fast and subtle — `150–200ms ease-out` hovers, `250ms` popovers.
No bounces, no spring physics. Loading uses a **circular spinner**, not skeletons.

**Hover.** Rows shift to `Grey_10/20` or the theme `_10` tint. Primary buttons
darken ~6% toward the topbar shade; secondary/tertiary get a grey-20 fill.
Sidebar icons get a `#2E2E2E` rounded tile. Links underline; color stays `#006AFF`.

**Press / focus.** No scale-down. Active color shifts one step deeper. Focus is a
2px theme-primary ring (`--shadow-focus`), never inside the component.

**Borders.** Hairline `1px` `#D9DDE3` (Grey 50) on cards/inputs/dividers; table
cells use lighter `#ECEEF1`. (Ignore the dashed purple "group hint" borders from
Figma — never ship them.)

**Shadows — only two.** Card resting `0 1px 2px rgba(12,12,13,.05), 0 1px 1px
rgba(12,12,13,.10)`; floating (popover/dropdown/hover-raise) `0 4px 16px
rgba(3,9,21,.10)`. No inset, no colored shadows. Elevation comes more from
**radius + border** than shadow.

**Capsules.** Fully-rounded `9999px` pills for tags, filter chips, avatars and
badge counts. The tag system spans 7 color families × filled / stroke /
filled-stroke, with optional dot, icon, checkbox/radio, and remove affordances.

**Layout.** Fixed 44–48px topbar, fixed 72px left rail, content fills the rest.
Standard artboard ~1496×812 (1440+ laptops); content max-width ~1424px.

**Transparency & blur.** Minimal. Faded topbar labels use a muted opaque blue
(`#AEB9CE`), not transparency. **No backdrop-blur anywhere** — this is not a
glass UI.

**Imagery.** User avatars (real photos, circular, 16–40px) + hand-drawn,
warm "Zia" empty-state illustrations. No protection gradients on imagery.

**Corner radii.** Three tiers: **3px** (badges), **6px** (buttons/inputs/chips),
**16px** (cards/panels); **9999px** pills. No other radii.

**Cards.** 16px radius, 1px `#D9DDE3` border, white. Optional flush grey header
row (`#F7F8F9`). Resting card shadow; raise to floating on hover.

---

## ICONOGRAPHY

Zoho runs an **in-house SVG icon library**, exported from Figma. Two families:

1. **Product icons** (UI glyphs): arrows, search, close, menu, home, calendar,
   etc. **1.5–2px stroke, flat, 16–18px, monochrome**, rounded caps/joins, no
   fills; colored via `currentColor`/stroke at usage time.
2. **Activity icons** — **stroke** (monochrome line icons for rows/sidebars) and
   **coloured 24×24** (each Zoho app's brand dot: CRM orange, SalesIQ green, Desk
   blue, Projects teal, Campaigns red…). Coloured activity icons are **never
   recolored** — they carry per-module brand equity.

**Rules.** Always **SVG**, never icon fonts or PNG for icons. Sidebar icons are
24×24 in a 36×36 hit target (tile fill on hover/selected). Alongside text, icons
are 14–16px. **No emoji** in product UI. **No unicode-as-icons** systematically.

**In this system:** brand icon SVGs copied from the Figma source live in
`assets/icons/` (`app-*`, `activity-*`, `checkbox-*`, `user-avatar`). The UI-kit
components draw inline 1.6px-stroke glyphs in the same house style. **Substitution
note:** for any glyph not captured here, use a matching **Lucide**
(https://lucide.dev) or **Phosphor Regular** 1.5px-stroke icon at the same size,
and flag the substitution.

---

## Contents (index)

| Path | What's there |
|---|---|
| `styles.css` | Global entry point — `@import`s the token files. Consumers link this one file. |
| `tokens/colors.css` | Greys, 7 theme accents + tints, feedback, module dots, semantic aliases, `[data-theme]` switches. |
| `tokens/typography.css` | Zoho Puvi `@font-face` (real TTFs) + Inter, type scale, weights, line-heights. |
| `tokens/spacing.css` | 4px spacing scale, radius tiers, layout dims, two shadow elevations. |
| `tokens/base.css` | Semantic element styles (h1–h4, body, label, caption, `.num`, links, focus). |
| `fonts/` | Real **Zoho Puvi** TTF files (Light → Black). |
| `assets/logos/` | Zoho Marketing Plus wordmark PNG. |
| `assets/icons/` | Brand product / activity icon SVGs from the Figma source. |
| `components/core/` | `Button`, `Tag`, `Avatar`, `Input`, `Card`, `Badge` (`.jsx` + `.d.ts` + `.prompt.md` + card). |
| `guidelines/*.card.html` | Foundation specimen cards (Colors, Type, Spacing, Brand) for the Design System tab. |
| `ui_kits/marketing_plus/` | App-shell UI kit — `Shell`, `Screens` (project list), `BudgetDashboard`, `index.html`. |
| `SKILL.md` | Cross-compatible Agent Skill manifest. |

**Components** (`window.ZohoMarketingPlusDesignSystem_8dd68c`): Avatar, Badge,
Button, Card, Input, Tag. **UI kit:** Marketing Plus app shell.

---

## Known caveats
- The **Marketing Plus** app shell + Marketing Projects + Budget Board are the
  only modeled surfaces; CRM/Desk/Projects chrome exists in the brand but isn't
  built here.
- "Zia" empty-state **illustrations** are described but not recreated (no source art).
- UI-kit sidebar/topbar glyphs are drawn inline in the house style; the raw
  brand SVGs in `assets/icons/` are generically named (from the Figma export).
