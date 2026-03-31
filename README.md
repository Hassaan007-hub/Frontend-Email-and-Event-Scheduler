# AI Assistant — Frontend

React + TypeScript frontend for the Gmail & Google Calendar AI Assistant. Provides a chat interface for interacting with an AI agent that can read and send emails, view and create calendar events, and schedule meetings.

Built by **Hassaan Azam** · [LinkedIn](https://www.linkedin.com/in/hassaan7/) · hassaanazam678@gmail.com

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 19 + TypeScript | UI framework |
| Vite | Build tool and dev server |
| Tailwind CSS | Styling |
| Axios | HTTP client with Bearer token interceptor |
| React Router v7 | Client-side routing |
| react-markdown | Render markdown in chat messages |

---

## Features

- Google OAuth sign-in (redirected to backend, token returned via URL fragment)
- Session token stored in `localStorage`, sent as `Authorization: Bearer` on every request
- Chat interface with suggestion chips / message templates
- Demo rate limit messaging (3 messages / 24 hours for non-owner accounts)
- Developer attribution footer
- Responsive dark theme UI

---

## Project Structure

```
src/
├── api/
│   └── client.ts          # Axios instance with Bearer token interceptor
├── components/
│   ├── ChatWindow.tsx      # Message list
│   ├── InputBar.tsx        # Message input
│   ├── MessageBubble.tsx   # Individual message bubble
│   ├── SignInButton.tsx    # Google OAuth sign-in button
│   ├── SuggestionChips.tsx # Template message chips
│   └── DeveloperCredit.tsx # Attribution footer
├── context/
│   └── AuthContext.tsx     # Auth state, hash token extraction, logout
├── pages/
│   ├── LandingPage.tsx     # Sign-in page
│   └── ChatPage.tsx        # Main chat UI
├── types.ts                # Shared TypeScript types
└── App.tsx                 # Router + protected route
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- Backend running (see `Backend__Email_and_Event_Scheduler/README.md`)

### Install dependencies

```bash
npm install
```

### Configure environment

Copy the example and fill in your values:

```bash
cp .env.example .env
```

```env
VITE_BACKEND_URL=http://localhost:8000
VITE_API_SECRET_KEY=          # Must match API_SECRET_KEY in the backend .env
VITE_Developer_Name=          # Your name (shown in attribution footer)
VITE_Developer_Email=         # Your email (shown in attribution footer)
VITE_Developer_LinkedIn=      # Your LinkedIn URL (shown in attribution footer)
```

### Run dev server

```bash
npm run dev
```

App runs at `http://localhost:5173`.

### Build for production

```bash
npm run build
```

Output in `dist/`.

---

## Auth Flow

1. User clicks **Sign in with Google** → frontend calls `GET /auth/login` → redirected to Google
2. Google redirects to backend `/auth/callback` → backend creates signed session token
3. Backend redirects to `/chat#token=<signed_token>` (URL fragment — never logged by servers)
4. `AuthContext` extracts the token synchronously from `window.location.hash`, saves to `localStorage`, clears the hash
5. All subsequent API requests include `Authorization: Bearer <token>` via Axios interceptor
6. Logout clears `localStorage` and calls `POST /auth/logout`

---

## Deployment (Vercel)

Set the following environment variables in Vercel project settings:

| Variable | Value |
|---|---|
| `VITE_BACKEND_URL` | Your Hugging Face Spaces backend URL |
| `VITE_API_SECRET_KEY` | Must match `API_SECRET_KEY` in backend |
| `VITE_Developer_Name` | Your name |
| `VITE_Developer_Email` | Your email |
| `VITE_Developer_LinkedIn` | Your LinkedIn URL |

