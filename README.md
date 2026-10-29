# ECL 5 Components for Drupal

Europa Component Library ([ECL](https://ec.europa.eu/component-library/) v5)
implemented as **Drupal 11 [Single Directory Components](https://www.drupal.org/docs/develop/theming-drupal/using-single-directory-components)**
(SDC) — **without** the `@ecl` / `@ecl-twig` Twig include dependencies.

Each component is self-contained Twig markup that uses the ECL CSS classes and
the bundled ECL JavaScript, so you get the EC look-and-feel and interactive
behaviour without pulling in the upstream Twig packages.

## Highlights

- **72 components** covering the full ECL EC preset — foundational elements,
  content blocks, forms, media, navigation, banners and the site-wide
  header/footer.
- **No `@ecl` includes.** Composition is done purely through
  `{{ include('ecl5:<name>', {...}) }}`, so there is no build step and no
  dependency on the ECL Twig packages.
- **ECL assets bundled.** The compiled EC CSS, color-mode CSS, print CSS and the
  autoinit JS ship in `assets/` and are exposed as Drupal libraries.
- **Interactive out of the box.** Components that need JS set
  `data-ecl-auto-init` plus the relevant `data-ecl-*` hooks, so the bundled
  `ecl-ec.js` initialises them automatically.

## Requirements

- Drupal `^11` (SDC is in core)

## Installation

Place this module in your project (e.g. `web/modules/custom/ecl5`) and enable it:

```bash
drush en ecl5
```

## Usage

Reference a component from any Twig template by its SDC id, `ecl5:<name>`:

```twig
{{ include('ecl5:button', {
  label: 'Read more',
  variant: 'primary',
  icon: { name: 'arrow-right', family: 'phosphor' },
}) }}
```

Components compose the same way — here a page header built from the breadcrumb,
title, meta and an expandable panel:

```twig
{{ include('ecl5:page-header', {
  title: 'Funding & tenders',
  description: 'Find calls for proposals and tenders.',
  breadcrumb: { links: [
    { label: 'Home', path: '/' },
    { label: 'Funding' },
  ] },
  meta: ['News', '12 March 2026'],
}) }}
```

The ECL CSS/JS is attached automatically by each component via
`{{ attach_library('ecl5/global') }}`. A separate `ecl5/print` library carries
the print stylesheet.

## Conventions

- One component per directory: `components/<name>/<name>.component.yml` +
  `components/<name>/<name>.twig`.
- Composition uses `{{ include('ecl5:<name>', {...}) }}` — never `@ecl/...`.
- Icons render as CSS glyphs:
  `<span class="ecl-icon ecl-icon-phosphor--<name> …">` (see the `icon`
  component).
- Interactive components set `data-ecl-auto-init` + the relevant `data-ecl-*`
  hooks so the bundled `ecl-ec.js` autoinit picks them up.
- Props objects accepted by components use flat keys (e.g. `link` props take
  `label`/`path`/`variant` directly) rather than the nested `link: {…}` shape
  used by upstream ECL Twig.

## Components

**Foundational** — icon · link · button · label · tag · indicator · spinner ·
separator · picture

**Content** — accordion · add-to-calendar · animated-numbers · blockquote ·
card (+ content-block) · category-filter · content-item · date-block ·
description-list · expandable · fact-figures · file · highlight-box ·
highlighted-search · list-illustration · modal · news-ticker · notification ·
ordered-list · unordered-list · page-information · page-summary · popover ·
quiz · social-media-follow · splash-page · spotlight · table · timeline ·
tooltip

**Forms** — form-group · checkbox · datepicker · file-upload · radio · range ·
rating-field · search-form · select · text-area · text-input

**Media** — gallery · media-container · featured-item · text-media ·
story-card · video

**Navigation** — breadcrumb · inpage-navigation · menu / menu-item ·
navigation-list / navigation-list-item · pagination · tabs

**Banners** — banner · carousel · slogan-ticker

**Site-wide** — site-header · page-header · site-footer

## Project layout

```
assets/
  fonts/      ECL web fonts
  images/     ECL imagery
  scripts/    ecl-ec.js (autoinit bundle)
  styles/     ecl-ec.css, ecl-ec-color-modes.css, ecl-ec-print.css
components/
  <name>/<name>.component.yml   SDC metadata + prop schema
  <name>/<name>.twig            self-contained markup
ecl5.info.yml
ecl5.libraries.yml              global + print libraries
```

## Credits & licensing

The visual design, CSS, JavaScript and font/image assets are from the
[Europa Component Library](https://ec.europa.eu/component-library/), © European
Union, distributed under the [EUPL-1.2](https://joinup.ec.europa.eu/collection/eupl).
This module is an independent Drupal SDC re-implementation of ECL markup and is
not affiliated with or endorsed by the European Commission.
