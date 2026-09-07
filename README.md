# Ambrish.S — Portfolio

A single-page React portfolio with smooth scrolling, scroll-driven reveals, a
GSAP-scrubbed experience timeline, stacked project cards, and an interactive
Three.js hero.

## Stack

| Concern        | Choice                                            |
| -------------- | ------------------------------------------------- |
| Build          | Vite + React 18 (JSX)                             |
| Styling        | Tailwind CSS v3                                   |
| Smooth scroll  | Lenis (synced to GSAP ticker)                     |
| Reveals        | Framer Motion                                     |
| Scroll timeline| GSAP + ScrollTrigger                              |
| Hero 3D        | three.js via @react-three/fiber + drei            |

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # -> dist/
npm run preview    # serve the production build
```

## Editing content

Everything is data-driven — no need to touch components:

- `src/data/site.js` — name, role title, tagline, email, phone, résumé path, social links, nav items.
- `src/data/content.js` — about text, stats, skills, experience, projects, achievements, certifications, languages, volunteering.

### Swap the photo

Replace `public/profile.svg` with your own image (e.g. add `public/profile.jpg`)
and update `site.photo` in `src/data/site.js` to `'/profile.jpg'`.

### Replace the résumé

`public/resume.pdf` is served at `/resume.pdf`. Drop in a new file with the same
name to update the download / "Résumé" links.

## Accessibility & performance

- Honors `prefers-reduced-motion`: Lenis, GSAP scrubs, and the WebGL scene are
  all disabled and replaced with static equivalents.
- The Three.js canvas is lazy-loaded, DPR-clamped, and uses a lighter particle
  count on touch devices; it falls back to a CSS gradient on phones / reduced
  motion.
- Custom cursor and card tilt are disabled on touch / coarse-pointer devices.

## Deploy

Static build — works on any host.

- **Vercel:** import the repo, framework preset "Vite", deploy. No config needed.
- **Netlify:** build command `npm run build`, publish directory `dist`.
- **GitHub Pages:** `npm run build`, publish `dist/`. If serving from a project
  subpath, set `base: '/<repo-name>/'` in `vite.config.js`.
