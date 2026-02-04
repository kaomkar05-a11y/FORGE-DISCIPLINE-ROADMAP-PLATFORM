# Forge System Specification

## Architecture overview
- **Frontend**: React + TypeScript + Tailwind UI, Zustand state, API service layer, environment-driven app name.
- **Backend**: Node.js + Express REST API, JWT auth, validation middleware, role-ready structure, centralized error handling.
- **Database**: MongoDB with flexible JSON roadmaps stored as data, plus user progress, daily logs, and project gating.
- **AI Mentor**: OpenAI-based mentor service with structured prompt, context-aware responses, and strict action-based output.

## MongoDB schemas
- **User**: email, passwordHash, displayName, role, assignedRoadmap.
- **Roadmap**: metadata, phases, dailyRules (minDSAProblems, mandatoryStudyHours, mandatoryNotes).
- **RoadmapProgress**: per-user phase and week status, discipline score, streak tracking.
- **DailyLog**: per-user daily check-ins with DSA counts, study duration, notes, and blockers.
- **ProjectProgress**: per-user project gating status, repo link, deployment URL.

## Backend API design (REST)
- `POST /api/auth/register` - register user
- `POST /api/auth/login` - login user
- `GET /api/roadmaps` - list roadmaps
- `GET /api/roadmaps/:id` - get roadmap
- `POST /api/roadmaps` - create roadmap
- `PUT /api/roadmaps/:id` - update roadmap
- `POST /api/roadmaps/:id/clone` - clone roadmap
- `GET /api/progress/dashboard` - dashboard metrics
- `POST /api/progress/daily-log` - daily check-in (validated)
- `GET /api/projects` - list project progress
- `PUT /api/projects/:id` - update project progress
- `POST /api/mentor` - AI mentor query

## Backend folder structure
- `src/app.js` - express app and middleware registration
- `src/server.js` - server bootstrap
- `src/config` - environment and external services
- `src/controllers` - request handlers
- `src/services` - roadmap engine and mentor service
- `src/models` - Mongoose schemas
- `src/routes` - route definitions
- `src/middlewares` - auth, validation, error handling
- `src/validation` - request validation

## Frontend structure
- `src/App.tsx` - layout entry point
- `src/pages` - dashboard, roadmap, mentor pages
- `src/components` - reusable UI blocks
- `src/api` - API service layer
- `src/store` - Zustand stores
- `src/styles` - Tailwind base styles
- `src/types` - type definitions

## Zustand store design
- `useAuthStore`: token + display name, manages auth persistence
- `useRoadmapStore`: fetches and caches roadmap data

## AI mentor prompt template
```
System: You are Forge Mentor, a strict, practical, action-oriented coach for serious developers.
Rules:
- Do not use motivational fluff.
- Provide direct next steps and checklists.
- Anchor advice to the provided roadmap and progress.
- Point out gaps or missing discipline.
- Keep responses under 350 words.
User: { "userContext": {...}, "request": "..." }
```

## JWT auth flow
1. User registers or logs in.
2. Backend signs JWT (subject = user id, role).
3. Frontend stores token and sends `Authorization: Bearer <token>`.
4. Auth middleware validates token for protected routes.

## Environment variables
- `APP_NAME` - Application name (backend + frontend)
- `PORT` - Backend port
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - JWT signing secret
- `JWT_EXPIRES_IN` - JWT expiration
- `OPENAI_API_KEY` - OpenAI access key
- `OPENAI_MODEL` - OpenAI model identifier
- `WEB_ORIGIN` - frontend origin for CORS
- `VITE_APP_NAME` - frontend display name
- `VITE_API_URL` - backend base URL

## Local setup instructions
1. Create `.env` for backend and `.env` for frontend with the variables above.
2. `cd backend && npm install`
3. `cd frontend && npm install`
4. Start MongoDB locally.
5. `cd backend && npm run dev`
6. `cd frontend && npm run dev`
