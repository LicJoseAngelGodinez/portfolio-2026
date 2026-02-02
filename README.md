# Portfolio 2026

Personal portfolio built as a single-page application with a Norse mythology-inspired theme. Sections include a hero introduction, tech stack ("The Great Forge"), a wisdom/philosophy section, professional project highlights ("Guarded Realms"), foundations, and a contact form powered by Resend.

The site supports English and Spanish with automatic browser language detection and persistent language selection.

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
  i18n/              # Internationalization (context, hook, locale files)
    locales/         # Translation files (en.ts, es.ts)
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

## Internationalization

The app uses React Context to provide English and Spanish translations across all components. Language is auto-detected from the browser (`navigator.language`) and the user's choice is persisted in `localStorage`. A language selector in the header allows manual switching. English is the default fallback.

## Security

The serverless contact endpoint (`api/contact.ts`) includes:

- CORS origin allowlist
- Rate limiting (3 requests/min per IP)
- Input validation and HTML sanitization
- Security headers (X-Frame-Options, X-Content-Type-Options, X-XSS-Protection, Referrer-Policy)

## Deployment

This project is configured for deployment on [Vercel](https://vercel.com). The `api/` directory contains serverless functions that Vercel picks up automatically.
