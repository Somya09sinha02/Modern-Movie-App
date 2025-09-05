# 🎬 Modern Movie App

A modern, front‑end–focused movie discovery web app built with **React** and powered by **Appwrite** for auth and data. It showcases trending and most‑searched titles via the **TMDB API**, with a responsive layout, fast search, and a sleek, accessible UI.

---

## 📋 Table of Contents

* 🤖 Introduction
* ⚙️ Tech Stack
* 🔋 Features
* 🤸 Quick Start
* 🕸️ Snippets (Code to Copy)
* 🔗 Assets
* 🚀 More
* 📹 Tutorial (Optional)
* 📝 License

---

## 🤖 Introduction

This project focuses on delivering a polished front‑end experience. The UI is built with **React** (Vite) and **Tailwind CSS**, while **Appwrite** handles authentication and persistent data (e.g., user watchlists). Movie data is fetched in real time from **The Movie Database (TMDB)**, enabling users to browse trending titles, search by keyword, and explore details like cast, genres, and release info.

If you’re just getting started or run into bugs, you can open an issue or discuss ideas via pull requests. The codebase is structured for clarity and reuse, so adding new views (e.g., TV shows, people) is straightforward.

---

## ⚙️ Tech Stack

* **Frontend:** React, Vite, JavaScript, Tailwind CSS
* **Backend (BaaS):** Appwrite (Auth, Database)
* **API:** TMDB REST API

**About the stack:**
**Appwrite** is an open‑source Backend‑as‑a‑Service that provides APIs for auth, databases, storage, and more—great for rapid prototyping and secure, scalable apps.
**React** enables building reusable UI components and efficient stateful interfaces for single‑page apps.
**Tailwind CSS** offers utility‑first styling for fast, consistent, responsive design.
**Vite** provides a fast dev server with HMR and optimized builds.

---

## 🔋 Features

* **Browse & Discover:** Explore trending and most‑searched movies with live data from TMDB.
* **Fast Search & Filters:** Quickly find titles by keyword, genre, or year (extensible).
* **Detail Pages:** View synopsis, ratings, genres, runtime, release date, and cast highlights.
* **Watchlist (Appwrite):** Authenticated users can add/remove favorites and revisit them later.
* **Responsive & Accessible:** Mobile‑first layout, keyboard‑navigable components, semantic markup.
* **Clean Architecture:** Modular components, hooks for data fetching, and simple state management.

**Planned Enhancements:** user reviews, dark mode, and recommendations based on watch history.

---

## 🤸 Quick Start

### Prerequisites

* Git
* Node.js (LTS recommended)
* npm (comes with Node)

### 1) Clone the repository

```bash
# Replace with your repo URL
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

### 2) Install dependencies

```bash
npm install
```

### 3) Environment variables

Create a file named **.env.local** in the project root with the following:

```bash
VITE_TMDB_API_KEY=

VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_COLLECTION_ID=
```

Fill in your **TMDB API key** and **Appwrite** credentials (Project, Endpoint, Database, and Collection IDs). If you use self‑hosted Appwrite, set the endpoint accordingly.

### 4) Run the app

```bash
npm run dev
```

Open **[http://localhost:5173](http://localhost:5173)** in your browser.

### Useful scripts

```bash
npm run build   # production build
npm run preview # preview the production build locally
```

---

## 🕸️ Snippets (Code to Copy)

### `index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Global resets & sensible defaults */
* { box-sizing: border-box; }
html, body, #root { height: 100%; }
body { @apply antialiased; }

/* Optional container utility for centered layouts */
.container { @apply mx-auto px-4 sm:px-6 lg:px-8; }
```

### `components/Spinner.jsx`

```jsx
import React from "react";

/**
 * Accessible loading spinner.
 * Usage: <Spinner label="Fetching movies..." />
 */
export default function Spinner({ label = "Loading..." }) {
  return (
    <div className="flex items-center justify-center gap-3 p-6" role="status" aria-live="polite">
      <span
        className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-current border-t-transparent"
        aria-hidden="true"
      />
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}
```

---

## 🔗 Assets

Place screenshots, logos, and icons in an `/assets` folder and reference them in your components or README. Example:

```md
![Home](./assets/home.png)
![Details](./assets/details.png)
```

---

## 🚀 More

* **Contributing:** Fork the repo, create a feature branch, and open a PR with a clear description.
* **Roadmap:** Add TV shows & people search, improve filters, enable dark mode, and add user reviews.
* **Issues:** Use the issue templates for bugs and feature requests (include steps, expected vs. actual behavior, and screenshots when possible).

---

## 📹 Tutorial (Optional)

If this project was inspired by a tutorial, add a link here and credit the creator. Example:

> Inspired by a JavaScript Mastery tutorial – add the video link here.

---

## 📝 License

This project is released under the MIT License. See `LICENSE` for details.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
