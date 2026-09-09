<div align="center">

# REChain — Frontend

_User-facing React application for the REChain platform._

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

</div>

---

## Features

- **Property Browsing** — Filter by type, price, availability, and amenities with interactive grid/list views.
- **Property Details** — Comprehensive image gallery, amenities list, and integrated appointment booking via ImageKit.
- **User Authentication** — Secure sign up, log in, and password recovery.
- **Appointment Booking** — Seamlessly schedule property viewings as a guest or authenticated user.
- **AI Property Hub** — In-browser GPT-4.1 powered search and holistic market analysis (requires local enablement).
- **SEO Optimized** — Built-in structured data generation, sitemap mapping, `robots.txt`, and per-page meta tags.
- **Page Transitions** — Fluid UI animations powered by Framer Motion.

---

## Tech Stack

| Category             | Technology                       |
| -------------------- | -------------------------------- |
| **Framework**        | React 18.3 + TypeScript + Vite 6 |
| **Styling**          | Tailwind CSS v4 + PostCSS        |
| **State Management** | React Context API                |
| **Routing**          | React Router v7                  |
| **HTTP Client**      | Axios                            |
| **Wallet**           | Wagmi + RainbowKit (Polygon Amoy) |
| **Animations**       | Framer Motion                    |
| **Icons**            | Lucide React                     |

---

## Setup and run

Run everything from the **repo root** (there is no `frontend/` folder in this repo).

### 1. Install

```bash
npm install
```

### 2. Env file

Copy the example file:

```bash
cp .env.example .env
```

On Windows PowerShell:

```powershell
copy .env.example .env
```

Then fill in `.env`:

```env
VITE_API_BASE_URL=http://localhost:4000
VITE_ENABLE_AI_HUB=true
VITE_WALLETCONNECT_PROJECT_ID=
```

- `VITE_WALLETCONNECT_PROJECT_ID` — grab a free one from [cloud.reown.com](https://cloud.reown.com). RainbowKit needs this for WalletConnect / QR. **MetaMask still works if you leave it empty.**
- `VITE_API_BASE_URL` — only needed if you have the backend running. If the API is down, property list + detail fall back to local mock data (`src/data/mockProperties.json`), so you can still browse listings and test the wallet button.

### 3. Start the app

```bash
npm run dev
```

App runs at **http://localhost:5173**

### 4. Where to test the wallet

1. Open **Properties** (`/properties`)
2. Click any listing
3. On the property detail page, **Connect Wallet** is under the listed price

Use MetaMask (or another injected wallet). Target network is **Polygon Amoy**. If you are on a different chain, the UI will ask you to switch.

Need a WalletConnect Project ID only if you want the QR / mobile wallet flow.

How I approached the wallet work (and the listing/filter fixes) is in `APPROACH.txt`.

---

## Page Routing

| Page            | Route              | Description                                              |
| --------------- | ------------------ | -------------------------------------------------------- |
| Home            | `/`                | Hero section, featured properties, about snippets        |
| Properties      | `/properties`      | Browse catalog with robust interactive filters           |
| Property Detail | `/property/:id`    | Full details + Connect Wallet under the listed price     |
| AI Property Hub | `/ai-hub`          | Natural language GPT-4.1 search (local environment only) |
| About           | `/about`           | Team overview and company information                    |
| Contact         | `/contact`         | User contact form submission                             |
| Sign In         | `/signin`          | Authenticate user                                        |
| Sign Up         | `/signup`          | Register new user                                        |
| Forgot Password | `/forgot-password` | Password reset request pipeline                          |

---

## Project Structure

<details>
<summary><strong>Explore Directory Tree</strong></summary>

```text
frontend/src/
├── components/
│   ├── ai-hub/           → AI Property Hub functional components
│   ├── common/           → Universal elements (Navbar, Footer, SEO, PageTransition)
│   ├── home/             → Modular Homepage sections
│   ├── properties/       → Filter sidebar, property cards, catalog layouts
│   ├── property-details/ → Multimedia gallery, amenities parser, booking form
│   ├── about/            → About page subsections
│   └── contact/          → Contact interface
├── contexts/             → Global React Context (e.g., AuthContext)
├── hooks/                → Custom React utilities (e.g., useSEO)
├── pages/                → Complete route components (Lazy-loaded)
├── services/             → Centralized network interface (`api.ts` Axios wrapper)
└── styles/               → Global CSS and Tailwind configurations
```

</details>

---

## Available Scripts

| Script            | Action                                                     |
| ----------------- | ---------------------------------------------------------- |
| `npm run dev`     | Launch Vite development server with hot module replacement |
| `npm run build`   | Compile robust production-ready bundle                     |
| `npm run preview` | Serve and preview the compiled production build locally    |
| `npm run lint`    | Execute ESLint for code formatting and standard reviews    |

---

<div align="center">

**Associated Applications**

[Backend README](../backend/README.md) • [Admin Panel README](../admin/README.md) • [Root Interface](../README.md)
</div>
