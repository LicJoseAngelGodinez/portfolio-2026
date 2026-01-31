# Portfolio 2026

Personal portfolio built as a single-page application with a Norse mythology-inspired theme. Sections include a hero introduction, tech stack ("The Great Forge"), a wisdom/philosophy section, professional project highlights ("Guarded Realms"), foundations, and a contact form powered by Resend.

## Tech Stack

- React 19
- TypeScript
- Vite 7
- React Router 7
- CSS Modules
- Resend (email API via Vercel serverless function)
- ESLint

## Project Structure

```
src/
  components/       # UI components (each in its own folder with CSS Module)
    ContactSection/
    Footer/
    FoundationsSection/
    Header/
    HeroSection/
    ProjectsSection/
    ScrollToTop/
    TechStack/
    WisdomSection/
  data/              # Centralized data/constants (projects, technologies)
  pages/             # Route-level pages (Home, NotFound)
  assets/            # Static assets
api/                 # Vercel serverless functions (contact form)
```

Path aliases are configured (`@/` maps to `src/`) to avoid deep relative imports.

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Lint
npm run lint

# Preview production build
npm run preview
```

## Deployment

This project is configured for deployment on [Vercel](https://vercel.com). The `api/` directory contains serverless functions that Vercel picks up automatically.
