# Portfolio

A Vite-powered React portfolio website for Pranshu Chauhan.

## Overview

This project is a portfolio application built with React, Vite, and Framer Motion. It includes:

- client-side navigation with a custom router
- dark/light theme support via `ThemeContext`
- hero section, projects, certifications, timeline, skills, and more
- mobile-friendly navigation drawer and dropdown menu
- optimized production build with Vite

## Local setup

Install dependencies for the client:

```bash
npm install --prefix client
```

Start the development server:

```bash
npm run dev
```

Build the production site:

```bash
npm run build
```

Preview the production build:

```bash
npm --prefix client run preview --host 127.0.0.1 --port 4177
```

## Notes

- The root `package.json` delegates commands to the `client` workspace.
- This repository is configured to use Vite, not Create React App.
- `client/dist` is generated output and should not be committed.
