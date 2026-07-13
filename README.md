# Ava — Neo-Brutalist Portfolio

React + TypeScript + Tailwind CSS v4 portfolio site, built in a strict
3-color neo-brutalist style:

- White `#FFFFFF`
- Black `#000000`
- Neon green `#D7FF00`

All buttons, chips, and cards use rounded shapes with thick black borders
and hard "offset" shadows (no blur) that shift on hover/press, which is the
signature neo-brutalist + rounded combo requested.

## Run it locally

```bash
npm install
npm run dev      
```

## Build for production

```bash
npm run build     
npm run preview    
```

## Structure

- `src/components/` — Button, Chip, ProjectCard, Navbar, Footer, Eyebrow
- `src/sections/` — Hero, About, Projects, Skills, Services, Contact
- `src/App.tsx` — assembles all sections
- `src/index.css` — Tailwind v4 theme tokens (colors, fonts, shadow utilities)

## Customizing

- **Colors**: edit the `@theme` block in `src/index.css` (`--color-paper`,
  `--color-ink`, `--color-zap`).
- **Copy**: all text lives directly in each section file under `src/sections/`.
- **Projects**: edit the `<ProjectCard />` list in `src/sections/Projects.tsx`
  — swap `bg` colors, `title`, `tag`, or set `large` for a wide card.
- **Skills**: edit the `tools` array in `src/sections/Skills.tsx`.
- **Fonts**: Archivo Black (display), Space Grotesk (body), JetBrains Mono
  (labels/buttons) — loaded via Google Fonts in `index.css`.
# Portfolio-2
