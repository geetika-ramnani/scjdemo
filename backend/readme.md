# SCJ Backend

## Features
- Express server
- Sequelize ORM (SQLite by default)
- User registration with email verification (JWT link)
- Login for verified users only
- Role-based authorization
- Nodemailer for email
- Global error handler

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run in development mode (auto-restart on changes):**
   ```sh
   npm run dev
   ```
   This uses [nodemon](https://nodemon.io/) to automatically restart the server when you change backend files.

3. **Run in production mode:**
   ```sh
   npm start
   ```

## Environment Variables
- Copy `.env.example` to `.env` and fill in your credentials (DB, JWT, SMTP, OAuth, etc).

## Scripts
- `npm start` — Start the backend server (production)
- `npm run dev` — Start the backend server with nodemon (development)

## OAuth
- Google OAuth is enabled. Facebook and X (Twitter) can be enabled by adding credentials and uncommenting in `config/passport.js`.

## API Endpoints
- `POST /api/users/register` — Register user, sends verification email
- `GET /api/users/verify/:token` — Verify email
- `POST /api/users/login` — Login (only for verified users)
- `GET /api/users/me` — Get current user (auth required)
- `GET /api/users/admin` — Admin-only route (auth + admin role)

## Notes
- Uses SQLite for local dev. Change `config/db.js` for MySQL/Postgres.
- Email uses SMTP (see `.env.example`).
- JWT secret must be set in `.env`.

