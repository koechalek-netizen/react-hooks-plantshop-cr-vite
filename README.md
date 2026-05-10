# Plantsy 🌱

A React-based admin dashboard for managing a plant store inventory.  
Built with **React** (hooks), **Vite**, and a **JSON Server** mock backend.

---

## Demo

![Demo GIF](./demo.gif)

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [API Reference](#api-reference)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## About

Plantsy gives plant shop admins a simple interface to view the current inventory, add new plants, mark items as sold out, and search the catalogue by name — all without a page reload.

---

## Features

| Feature | Description |
|---|---|
| 📋 View all plants | Fetches and displays the full inventory on page load |
| ➕ Add a plant | Submits a form to POST a new plant to the backend; list updates instantly |
| 🚫 Mark as sold out | Toggles a plant's stock status client-side (no page refresh needed) |
| 🔍 Search by name | Filters the visible plant list in real time as you type |

---

## Tech Stack

- [React 18](https://react.dev/) — UI library (functional components + hooks)
- [Vite](https://vitejs.dev/) — fast development server and bundler
- [JSON Server](https://github.com/typicode/json-server) — zero-config REST API for the mock backend
- [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/) — unit and integration tests

---

## Getting Started

### Prerequisites

- Node.js ≥ 16

### Installation

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd react-hooks-plantshop-cr-vite

# 2. Install dependencies
npm install

# 3. Start the JSON Server backend (port 6001)
npm run server

# 4. In a separate terminal, start the Vite dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.  
Verify the backend is running at [http://localhost:6001/plants](http://localhost:6001/plants).

### Running Tests

```bash
npm test
```

---

## API Reference

Base URL: `http://localhost:6001`

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/plants` | Returns the full list of plants |
| `POST` | `/plants` | Creates a new plant |

**POST `/plants` — Request body:**

```json
{
  "name": "string",
  "image": "string (URL)",
  "price": number
}
```

---

## Project Structure

```
src/
├── components/
│   ├── App.jsx           # Root component — renders Header + PlantPage
│   ├── Header.jsx        # Static top navigation bar
│   ├── PlantPage.jsx     # Main container: holds state, fetch logic, search filter
│   ├── PlantList.jsx     # Maps the filtered plant array to PlantCard components
│   ├── PlantCard.jsx     # Displays one plant; owns local in-stock toggle state
│   ├── NewPlantForm.jsx  # Controlled form that POSTs a new plant to the backend
│   └── Search.jsx        # Controlled search input that lifts query to PlantPage
└── __tests__/            # Vitest + React Testing Library test suites
```

---

## Contributing

1. Fork the repo and create a feature branch: `git checkout -b feature/my-feature`
2. Commit your changes with clear messages.
3. Open a Pull Request against `main` and describe what you changed and why.

---

## License

This project is for educational purposes. No license is applied.