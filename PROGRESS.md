# ECL v5 → Drupal SDC — Progress

Goal: implement every component from
https://ec.europa.eu/component-library/ec/components/ as Drupal 11 Single
Directory Components (SDC), **without** the `@ecl` / `@ecl-twig` includes.
Each component is self-contained Twig markup using the ECL CSS classes
(`assets/styles/ecl-ec.css`) and the global JS (`assets/scripts/ecl-ec.js`).

## Conventions
- One SDC per component in `components/<name>/` with `<name>.component.yml` + `<name>.twig`.
- Composition uses `{{ include('ecl5:<name>', {...}) }}` — never `@ecl/...`.
- Global ECL CSS/JS attached via `{{ attach_library('ecl5/global') }}` in each twig.
- Interactive components set `data-ecl-auto-init` + the relevant `data-ecl-*` hooks
  so the bundled `ecl-ec.js` autoinit picks them up.
- Icons render as `<span class="ecl-icon ecl-icon-phosphor--<name> ...">` (CSS glyphs).

## Status legend: ⬜ todo · 🟦 in progress · ✅ done

### Foundational (build first — used by others)
- ✅ icon
- ✅ link
- ✅ button
- ✅ label
- ✅ tag
- ✅ indicator
- ✅ spinner (loading indicator)
- ✅ separator
- ✅ picture

### Components
- ✅ accordion
- ✅ add-to-calendar
- ✅ animated-numbers
- ✅ blockquote
- ✅ card (+ content-block helper)
- ✅ category-filter
- ✅ content-item
- ✅ date-block
- ✅ expandable
- ✅ fact-figures
- ✅ file
- ✅ highlight-box
- ✅ highlighted-search
- ✅ lists (ordered-list / unordered-list / description-list)
- ✅ list-illustration
- ✅ notification
- ✅ modal
- ✅ news-ticker
- ✅ page-information
- ✅ page-summary
- ✅ popover
- ✅ quiz
- ✅ social-media-follow
- ✅ splash-page
- ✅ spotlight
- ✅ table
- ✅ timeline
- ✅ tooltip

### Site wide
- ✅ site-header
- ✅ page-header
- ✅ site-footer

### Banners
- ✅ banner
- ✅ carousel
- ✅ slogan-ticker

### Forms
- ✅ form-group (wrapper used by fields)
- ✅ checkbox
- ✅ datepicker
- ✅ file-upload
- ✅ radio
- ✅ range
- ✅ search-form
- ✅ select
- ✅ text-area
- ✅ text-input (text field)
- ✅ rating-field

### Media
- ✅ gallery
- ✅ media-container
- ✅ featured-item
- ✅ text-media (text and media)
- ✅ story-card

### Navigation
- ✅ breadcrumb
- ✅ inpage-navigation
- ✅ links (covered by link)
- ✅ menu / mega-menu
- ✅ navigation-list
- ✅ pagination
- ✅ tabs

### Final
- ⬜ Compose components into higher-level examples (use components in components).

## Next task
All library components and site-wide components are implemented. Remaining:
the Final task — compose components into higher-level demo examples (use
components in components) and verify rendering in a running Drupal 11 site.
