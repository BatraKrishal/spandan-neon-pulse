# Spandan 2026 - Tech Fest Platform

Spandan is a production-deployed college tech fest platform for GBPIET's Spandan 2026. The frontend presents the event experience, team/sponsor information, authentication flows, and protected event registration screens.

Live site: [spandan.gbpiet.in](https://spandan.gbpiet.in)  
Vercel deployment: [spandan-neon-pulse.vercel.app](https://spandan-neon-pulse.vercel.app)  
Backend repo: [BatraKrishal/spandanBackend](https://github.com/BatraKrishal/spandanBackend)

## Features

- Landing page for the Spandan event brand, timeline, partners, and event highlights.
- Searchable/filterable events page with modal details, rulebook links, categories, coordinators, team sizes, and dates.
- Auth flows for login, signup, refresh-token session restore, and Google OAuth callback handling.
- Protected event registration route for authenticated participants.
- Team-member registration support with college, branch, year, and team-leader details.
- API client with Axios, credentialed requests, JWT bearer headers, and backend routing through `/api`.
- Shared state management with Zustand and async data handling with React Query.
- Responsive UI built with Tailwind CSS, shadcn/ui, Radix UI primitives, Framer Motion, and Lucide icons.

## Tech Stack

**Frontend:** React, Vite, TypeScript, Tailwind CSS, shadcn/ui, Radix UI, React Router, React Query, Zustand, Framer Motion  
**Backend Integration:** Axios, JWT auth, refresh-token cookies, Google OAuth flow  
**Deployment:** Vercel frontend with API routing to the backend service

## Architecture

```text
Browser
  |
  v
Vite React App
  |
  | /api requests
  v
Express + MongoDB Backend
  |
  | participant registration export
  v
Google Sheets
```

## Main Routes

- `/` - home, hero, timeline, about, partners
- `/events` - event listing with search and category filters
- `/register` - protected event registration
- `/login` and `/signup` - authentication
- `/team` - organizing team
- `/sponsors` - sponsor information

## Local Development

```bash
npm install
npm run dev
```

Create a local `.env` file when connecting to a backend:

```env
VITE_API_URL=http://localhost:5000
```

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run test
```

## Project Notes

This was built as a collaborative production project, with frontend work, backend integration, authentication handling, event data modeling, deployment iteration, and contributor coordination happening through GitHub and Vercel.
