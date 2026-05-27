# Portfolio

A Vite-powered React portfolio website for Pranshu Chauhan.

## Overview

This repository contains a modern portfolio site built with React, Vite, and Framer Motion. The portfolio includes:

- client-side routing with a lightweight custom router
- dark/light theme support using React context
- hero, projects, certifications, timeline, skills, and contact sections
- mobile-friendly navigation drawer and dropdown menu
- optimized production build through Vite

## Prerequisites

- Node.js installed locally or through the provided runtime
- npm available for dependency installation

## Setup

Install the client dependencies from the repository root:

```bash
npm install --prefix client
```

> If you use a global Node installation, run the same command from the root of the repo.

## Development

Start the development server from the root:

```bash
npm run dev
```

This delegates to the `client` workspace and runs Vite locally.

Open the app in your browser at the URL printed by Vite, typically `http://127.0.0.1:4178/` or a nearby port.

## Production Build

Build the client for production:

```bash
npm run build
```

Preview the generated production build:

```bash
npm --prefix client run preview --host 127.0.0.1 --port 4178
```

## Notes

- The root `package.json` forwards commands to the `client` folder.
- This project is configured for Vite and does not use Create React App.
- Generated files such as `client/dist` and `client/node_modules` are ignored in version control.


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
