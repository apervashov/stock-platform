# Stock Platform — Frontend

React + TypeScript + Vite client for the portfolio / stock research app.

## Scripts

```bash
npm install
npm run dev      # development server
npm run build    # production build
npm run lint     # ESLint
npm run preview  # preview production build
```

## Stack

- React 18, React Router 6
- TypeScript, Vite
- Tailwind CSS
- react-hook-form, yup, axios, react-toastify

## Design System Docs

UI modernization context lives in **[docs/design-system](./docs/design-system/)**:

| File | Purpose |
|------|---------|
| [README.md](./docs/design-system/README.md) | Tokens, principles, component inventory, ideas backlog |
| [CHECKLIST.md](./docs/design-system/CHECKLIST.md) | Phased UI upgrade tasks |
| [WORKLOG.md](./docs/design-system/WORKLOG.md) | Session log for decisions and progress |

**Live route (WIP):** `/design-guide` — component playground; expand alongside checklist.

## Key Paths

```
src/
├── components/     # UI building blocks
├── Pages/          # Route-level pages
├── Routes/         # Router config
├── Context/        # Auth context
└── Services/       # API clients
```

## Environment

Configure API base URL via project env pattern (see `api.tsx` and Vite env usage).

## Related

Root project overview: [../README.md](../README.md)
