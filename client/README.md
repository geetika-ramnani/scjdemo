# 🎬 SCJ Entertainments Official Website

This repository contains the frontend source code for **SCJ Entertainments**, a modern, responsive website featuring dynamic pages, service highlights, a chatbot assistant, and a cinematic design.

---

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/scj-entertainments.git
cd scj-entertainments
```

### 2. Setup Environment Variables

```bash
mv .env-example .env
```
Update the `VITE_BACKEND_URL` value in the `.env` file:
```bash
VITE_BACKEND_URL=http://localhost:5000
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Project Structure

```bash
├── eslint.config.js
├── .env-example
├── index.html
├── package.json
├── package-lock.json
├── public
│   ├── posters
│   │   ├── arey-yaar.png
│   │   ├── ateet.png
│   │   ├── home-sweet-office.png
│   │   ├── jahaan-chaar-yaar.png
│   │   ├── jolly-llb-2.png
│   │   ├── last-date.png
│   │   ├── panchlait.png
│   │   ├── pinjare-wali.png
│   │   ├── rover.png
│   │   └── thriller-punjabi.png
│   ├── scj-logo-new.png
│   └── vite.svg
├── README.md
├── SCJ Entertainment Intro.mp4
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── chatbot
│   │   │   ├── ChatBot.jsx
│   │   │   ├── ChatBubble.jsx
│   │   │   └── ChatWindow.jsx
│   │   ├── FeaturedProjects.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── JoinFamily.jsx
│   │   ├── Navbar.jsx
│   │   ├── OurPartners.jsx
│   │   ├── StudioVision.jsx
│   │   └── Testimonials.jsx
│   ├── index.css
│   ├── main.jsx
│   └── pages
│       ├── CarrersPage.jsx
│       ├── ContactPage.jsx
│       ├── DistributionPage.jsx
│       ├── ForgotPassword.jsx
│       ├── HomePage.jsx
│       ├── IntroVideo.jsx
│       ├── LandingPage.jsx
│       ├── ProjectsPage.jsx
│       ├── ServicesPage.jsx
│       ├── SignIn.jsx
│       ├── SignUp.jsx
│       └── TalentPage.jsx
└── vite.config.js
```
8 directories, 47 files

## Features
- Modern React app with Vite
- Environment-based API URLs (no hardcoding)
- Google OAuth login and registration
- Responsive, accessible UI

## Scripts
- `npm run dev` — Start the frontend in development mode
- `npm run build` — Build for production
- `npm run preview` — Preview the production build

## Notes
- All API URLs and OAuth endpoints are controlled via `.env` for easy switching between development and production.
- For Google OAuth, ensure your backend and Google Cloud Console are configured with the correct callback URLs.

---
For more details, see code comments and documentation in each file.

