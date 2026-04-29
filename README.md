# Pokédex App

A React + TypeScript Pokédex built with Vite and powered by the public [PokeAPI](https://pokeapi.co/). The app lets you browse Pokémon, inspect detailed stats and moves, and explore related game data such as berries, items, locations, natures, and generations.

## What this project brings

- A modern Pokédex experience with route-based navigation.
- Pokémon browsing with pagination, name search, type filters, height filters, generation filters, and shiny sprite switching.
- A Pokémon detail page with species description, intro generation, nature data, and moves.
- Separate resource pages for berries, items, and locations by ID.
- A shared layout, theme system, reusable UI components, and a consistent dark visual language.
- Security headers and content policy configuration for local preview and production deployment.
- Route-level code splitting and bundle chunking to keep the initial load lighter.

## Topics Covered

- Pokémon catalog browsing
- Filtering and pagination
- Pokémon detail inspection
- Species flavor text and generation metadata
- Nature and move data
- Berry, item, and location lookup
- Responsive UI and modal interactions
- Frontend security headers and CSP
- Performance-oriented Vite chunking

## Tech Stack

- **React 19**
- **TypeScript**
- **Vite 8**
- **React Router DOM 7**
- **TanStack Query 5**
- **Axios**
- **styled-components 6**
- **ESLint**

## Main Features

### Pokémon catalog

- Paginated Pokémon list
- Search by name
- Filter by type
- Filter by height range
- Filter by generation
- Shiny / normal sprite toggle
- Clickable cards that open a modal with a summary

### Pokémon detail page

- Pokémon artwork and core stats
- Types, height, and weight
- Species flavor text
- Intro generation
- Nature information
- Move list with move metadata

### Resource lookup pages

- Berry by ID
- Item by ID
- Location by ID

## Project Structure

```txt
src/
  api/                Axios client and shared HTTP setup
  assets/             Static assets used by the app
  components/         Shared layout and navigation UI
  pages/              Route-level screens and page-specific styles
  routes/             Router configuration and lazy-loaded routes
  services/           API wrappers for Pokemon, berries, items, locations, and moves
  styles/             Global styles and theme tokens
  types/              Shared TypeScript types for API responses
```

### Important folders

- `src/components/layout` - App shell with navigation and footer.
- `src/components/navigation` - Top navigation bar.
- `src/pages/home` - Landing page and feature overview.
- `src/pages/pokemon` - Catalog screen, filters, modal, loading, pagination, and error states.
- `src/pages/pokemon-detail` - Full detail page for a single Pokémon.
- `src/pages/berry`, `src/pages/item`, `src/pages/location` - Lookup screens by ID.
- `src/services` - API integration layer separated by domain.
- `src/styles` - Theme tokens, global styles, and styled-components typing.

## Vite Configuration

The project uses `vite.config.ts` for more than the default setup:

- `@vitejs/plugin-react` enables React support and Fast Refresh.
- `server.port` is set to `8080` for local development.
- Development and preview responses include security headers.
- A Content Security Policy is configured for:
  - self-hosted app assets
  - PokeAPI requests
  - Pokémon sprite images from GitHub raw content
- Preview headers include:
  - `Content-Security-Policy`
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy`
  - `Cross-Origin-Opener-Policy`
  - `Cross-Origin-Resource-Policy`
  - `Strict-Transport-Security`
- `manualChunks` splits vendor code into smaller bundles:
  - `react`
  - `router`
  - `react-query`
  - `styled`
  - `http`

This keeps the initial bundle smaller and pushes route-specific code into separate chunks. Production deployments on Vercel mirror the same security headers through `vercel.json`.

## Packages

### Runtime dependencies

- `react` - UI library
- `react-dom` - React DOM renderer
- `react-router-dom` - Client-side routing
- `@tanstack/react-query` - Server state and request caching
- `axios` - HTTP client for PokeAPI requests
- `styled-components` - Component-scoped styling and theming

### Development dependencies

- `vite` - Build tool and dev server
- `@vitejs/plugin-react` - React plugin for Vite
- `typescript` - Type safety and build-time checks
- `eslint` - Code quality checks
- `typescript-eslint` - TypeScript-aware ESLint support
- `eslint-plugin-react-hooks` - React hooks linting rules
- `eslint-plugin-react-refresh` - Fast Refresh compatibility checks
- `@types/react`, `@types/react-dom`, `@types/node` - Type definitions
- `globals` - Shared environment globals for linting
- `@eslint/js` - ESLint base configuration

## Available Scripts

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Runs TypeScript compilation and creates the production build.

```bash
npm run preview
```

Serves the production build locally for verification.

```bash
npm run lint
```

Runs ESLint across the project.

## Data Source

All domain data comes from the public PokeAPI:

- Pokémon
- Pokémon species
- Types
- Natures
- Moves
- Berries
- Items
- Locations

The app uses a shared Axios client in `src/api/axios.ts` with a single PokeAPI base URL.

## UI and Design Notes

- The app uses a custom theme in `src/styles/theme.ts`.
- Global resets and accessibility defaults live in `src/styles/global.ts`.
- Pages use `styled-components` for layout and component styling.
- The visual direction favors a clean, product-like interface with clear spacing, readable typography, and restrained motion.

## Deployment Notes

- Production header settings are mirrored in `vercel.json` for Vercel deployments.
- The README and the Vite config are aligned with the current production-oriented setup.

## Local Development

```bash
npm install
npm run dev
```

Open the app in your browser after the dev server starts.

## License

No explicit license has been added yet.
