# MOi & LiN WordPress theme

A classic PHP theme that renders the landing page from the React site in
`site/`. It is a single front page, English only.

## Install

1. Zip the `moi-lin` folder, or copy it into `wp-content/themes/moi-lin/`.
2. In WordPress, go to **Appearance → Themes** and activate **MOi & LiN**.
3. Under **Settings → Reading**, set "Your homepage displays" to a static page or
   to latest posts. The theme's `front-page.php` renders the landing page either way.

Requires WordPress 6.0+ and PHP 8.0+. Self-hosted installs can use any plan.
WordPress.com simple sites cannot install custom themes.

## Structure

| Path | Purpose |
| --- | --- |
| `front-page.php` | Section order, mirrors `site/src/App.jsx` |
| `header.php`, `footer.php` | Announcement bar, sticky header, mobile menu, footer, shop bar |
| `template-parts/` | One file per section, markup and inline styles from the React components |
| `inc/copy.php` | English copy, mirrors `site/src/i18n/en.js` |
| `inc/products.php` | Product catalogue, mirrors `site/src/data/products.js` |
| `functions.php` | Asset loading, responsive `<picture>` helper, manifest lookup |
| `assets/js/site.js` | Vanilla port of the React hooks: reveals, headline lines, parallax, seams, rails, menu, collection |
| `assets/css/` | `tokens.css` and `global.css` carried over; `theme.css` holds the theme's component classes |
| `assets/images`, `logos`, `fonts`, `data` | Copied from `site/public` and `site/src` |

## Known gaps before launch

- **Language switcher is not included.** The React site ships EN, DE and FR.
  This theme renders English only. Add translations in `inc/copy.php` if needed.
- **Newsletter form only confirms on screen.** Connect its submit handler to a
  mailing list provider.
- **Product links are placeholders** (`example-retailer.test`). Replace
  `moilin_href()` in `inc/products.php` with real retailer URLs.
- **Two copies of the CSS.** `assets/css/global.css` is a copy of the React site's
  file and adds `html:not(.js)` fallbacks in `theme.css`. Changes to the React
  styles need to be carried over by hand until the React site is retired.
- **Tested with a stub harness, not a live WordPress install.** Docker was not
  available in the build environment. Run a smoke test on a real WordPress
  before going live.
