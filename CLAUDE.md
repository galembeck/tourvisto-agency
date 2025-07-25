# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` - Starts Vite dev server with hot reload
- **Build**: `npm run build` - TypeScript compilation followed by Vite build
- **Lint**: `npm run lint` - ESLint checking
- **Preview**: `npm run preview` - Preview production build locally

## Code Quality Tools

- **Biome**: Used for formatting and linting (configured in `biome.json`)
  - Tab indentation, double quotes for JavaScript
  - Extends "ultracite" configuration
  - Excludes `route-tree-gen.ts` from processing
- **ESLint**: Primary linting tool
- **TypeScript**: Strict type checking with separate configs for app and node

## Architecture

This is a React + TypeScript + Vite application using TanStack Router for routing.

### Key Technologies
- **TanStack Router**: File-based routing with automatic code splitting
  - Routes defined in `src/pages/` directory
  - Auto-generated route tree in `src/route-tree-gen.ts`
  - Uses "layout" as route token
- **Tailwind CSS**: Styling via `@tailwindcss/vite` plugin
- **shadcn/ui**: Component library with Radix UI primitives
- **Biome**: Code formatting and linting

### Project Structure
- `src/pages/`: File-based routing directory
  - `__root.tsx`: Root layout component
  - `_admin/`: Admin routes (e.g., dashboard)
- `src/components/ui/`: shadcn/ui components
- `src/lib/utils.ts`: Utility functions (likely includes `cn` helper)
- Alias `@/` resolves to `src/` directory

### Routing System
- TanStack Router with automatic route tree generation
- Routes are auto-discovered from `src/pages/` directory
- Root component provides basic layout with HeadContent and Outlet
- Type-safe routing with TypeScript integration