# Samarth's Portfolio

A modern, responsive developer portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **React 18** + **TypeScript**
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — animations
- **Vite** — build tool
- **Lucide React** — icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/Samarth-2409X/portfolio.git
cd portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

src/
├── components/
│   ├── Button.tsx
│   ├── Eyebrow.tsx
│   ├── Navbar.tsx
│   └── ProjectCard.tsx
├── sections/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── Contact.tsx
├── App.tsx
└── main.tsx
public/
└── images/
├── samarth1.jpg
├── second-brain.png
├── pocket-money.png
└── coding-battle.png

## Sections

- **Hero** — Animated intro with portrait, orbit tags, and CTA buttons
- **About** — Background, education, and highlights
- **Skills** — Tech stack overview
- **Projects** — Selected case studies with screenshots
- **Contact** — Links and availability

## Featured Projects

| Project | Stack | Repo |
|---|---|---|
| Second Brain | MERN | [GitHub](https://github.com/Samarth-2409X/BrainlyFrontend) |
| Pocket Money | MERN | [GitHub](https://github.com/Samarth-2409X/Pocket_Money) |
| Coding Battle | MERN | [GitHub](https://github.com/Samarth-2409X/coding-battle-frontend) |

## Scripts

```bash
npm run dev      
npm run build    
npm run preview  
npm run lint     
```

## Deployment

```bash
npm run build
```

Deploy the `dist/` folder to **Vercel**, **Netlify**, or **GitHub Pages**.

### Vercel (recommended)

```bash
npm i -g vercel
vercel
```
