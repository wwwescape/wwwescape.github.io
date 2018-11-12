# wwwescape.github.io

[![Live](https://img.shields.io/badge/live-wwwescape.github.io-58a6ff)](https://wwwescape.github.io)

My personal landing page — a single-page portfolio for **Eric Pereira** ([@wwwescape](https://github.com/wwwescape)), Senior Technical Project Manager / Senior Architect and open-source tinkerer based in Goa, India.

**Live:** https://wwwescape.github.io

## Features

- Hero, about, featured projects, live GitHub stats, and contact — all on one page
- Light/dark theme toggle, persisted and defaulting to system preference
- Live GitHub stats & top-languages cards ([github-readme-stats](https://github.com/anuraghazra/github-readme-stats)) that re-theme with the page
- Scroll-reveal animations via `IntersectionObserver`
- Fully responsive, no frameworks or build step — just HTML, CSS, and JS

## Structure

```
.
├── index.html   # markup & content
├── style.css    # theme variables, layout, animations
└── script.js    # theme toggle, stats theming, reveal animations
```

## Running locally

```sh
npx http-server .
```

or simply open `index.html` in a browser.

## License

Content and design © Eric Pereira. Feel free to fork the structure/code as a starting point for your own GitHub Pages site.
