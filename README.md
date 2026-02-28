# KPA Platform

Local service platform supporting ride booking, delivery, logistics, and agriculture marketplace.

## Tech Stack

- **Frontend**: Vite, React, TypeScript, React Router, Axios, Zustand, Ant Design
- **Backend**: NestJS, TypeORM, PostgreSQL

## Quick Start

### Prerequisites

- Node.js 18+
- PostgreSQL
- Yarn

### Backend

1. Create PostgreSQL database:
   ```bash
   createdb kpa
   ```
2. Start the backend:
   ```bash
   cd kpa-be
   cp .env.example .env   # Edit with your DB credentials if needed
   yarn install
   yarn start:dev
   ```

Backend runs at http://localhost:3000. API prefix: `/api`.

### Frontend

```bash
cd kpa-fe
yarn install
yarn dev
```

Frontend runs at http://localhost:5173.

### Environment Variables

**kpa-be (.env)**
- DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME
- JWT_SECRET

**kpa-fe (.env)**
- VITE_API_URL (default: http://localhost:3000/api)
