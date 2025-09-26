# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 project demonstrating a chat interface using the Vercel AI SDK. The project is set up with TypeScript, Tailwind CSS v4, and shadcn/ui components. Currently, the chat functionality uses placeholder responses but is designed to integrate with AI providers like OpenAI, Google, and Perplexity through the AI SDK.

## Development Commands

- `npm run dev` - Start development server with Turbopack (runs on http://localhost:3000)
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run Next.js ESLint

## Architecture

### Application Structure
- **App Router**: Uses Next.js 15 App Router with TypeScript
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS v4 with CSS variables for theming
- **State Management**: React useState for chat state (no global state management)

### Key Components
- `app/page.tsx` - Main page with header and Chat component
- `components/chat.tsx` - Core chat interface with message handling, currently using placeholder responses
- `components/ui/` - shadcn/ui component library (Button, Input, Card, ScrollArea, Avatar)
- `lib/utils.ts` - Utility functions for className merging (cn helper)

### Styling System
- Uses Tailwind CSS v4 with `@import "tailwindcss"`
- CSS variables for theming defined in `app/globals.css`
- Dark mode support via `prefers-color-scheme`
- Custom font: Geist Sans and Geist Mono from Google Fonts

### AI SDK Integration
The project includes multiple AI provider packages but they're not yet wired up:
- `@ai-sdk/openai` - OpenAI integration
- `@ai-sdk/google` - Google AI integration  
- `@ai-sdk/perplexity` - Perplexity integration
- `ai` - Core Vercel AI SDK

### Component Configuration
- shadcn/ui configured with `components.json`
- Uses `@/` path alias for imports
- RSC (React Server Components) enabled
- Default style with neutral base color

### PR Reviews

- When reviewing PRs, carefully checks if any unintended console.log calls were left. If found, report severely. If not, add to the PR that no console logs were found.