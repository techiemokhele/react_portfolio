# Neo Mokhele — Personal Portfolio

A production-grade personal portfolio for **Neo Mokhele**, Intermediate Frontend Developer with 7+ years of experience. Built with React 18, TypeScript 5, Vite 5, Tailwind CSS, and ShadCN UI. Features a live blog powered by the dev.to API, a full-site search modal, scroll-driven animations, and a fully accessible UI deployed on Vercel.

---

## Live Demo

**[neo-mokhele-react-portfolio.vercel.app](https://neo-mokhele-react-portfolio.vercel.app/)**

---

## Tech Stack

| Layer         | Technology                                  |
| ------------- | ------------------------------------------- |
| Build         | Vite 5.4                                    |
| Language      | TypeScript 5.5                              |
| Framework     | React 18.3                                  |
| Routing       | React Router DOM v6                         |
| Styling       | Tailwind CSS 3.4 + tailwindcss-animate      |
| UI Components | ShadCN UI (Radix UI primitives)             |
| Icons         | Lucide React                                |
| Notifications | React Toastify                              |
| Animations    | CSS transitions + IntersectionObserver hook |
| Blog API      | dev.to REST API                             |
| Translation   | MyMemory Translation API                    |
| Contact Form  | Web3Forms                                   |
| Analytics     | Vercel Speed Insights                       |
| Deployment    | Vercel                                      |

---

## Features

### Pages

| Page            | Description                                                                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **Home**        | Split-layout hero with glass profile card, animated skill badges, and stats                                                                 |
| **About**       | Work experience timeline, education history, latest projects, scroll-triggered fade-in animations                                           |
| **Portfolio**   | 30+ projects across Website / Mobile / Game / CMS categories with search, filter tabs, and deep-link navigation                             |
| **Blog**        | Live dev.to API feed with featured hero post, skeleton loading, category filters, pagination, and auto-translation for non-English articles |
| **Contact**     | Web3Forms-integrated contact form; resume download unlocked after first message                                                             |
| **Single Post** | Full article with HTML content rendering, translation toggle, reactions/comments, and related posts                                         |

### Global Features

- **Full-site search** — Ctrl+K / ⌘K combobox modal searches across projects, blog posts, experience, and education in real time. Results highlight matched terms and deep-link to the exact card on navigation.
- **Sticky glassmorphism navbar** — scroll-aware background, ShadCN Sheet mobile drawer
- **Floating action buttons** — WhatsApp chat button always visible; scroll-to-top slides in below it when scrolled
- **Seamless tech marquee** — 31 transparent devicon SVG logos, hover-pause, loop gap fixed
- **WCAG-compliant** — semantic landmarks, `aria-labelledby`, `aria-describedby`, `aria-live` regions, keyboard navigation throughout
- **SPA routing on Vercel** — `vercel.json` rewrite rule ensures all routes serve `index.html`

---

## Project Structure

```text
react_portfolio/
├── index.html                  # Vite entry (root, not public/)
├── vite.config.ts              # Vite + @/ path alias
├── tsconfig.json               # TypeScript config (bundler resolution)
├── tailwind.config.ts          # Tailwind + ShadCN CSS variable theme
├── postcss.config.js
├── vercel.json                 # Output directory + SPA rewrite rule
│
├── src/
│   ├── main.tsx                # ReactDOM.createRoot entry
│   ├── App.tsx                 # Router + route definitions + page transitions
│   ├── index.css               # CSS variables, marquee, article-content styles
│   ├── vite-env.d.ts           # Vite env type declarations
│   │
│   ├── types/
│   │   ├── index.ts            # Domain interfaces: Experience, Qualification,
│   │   │                       #   Project, BlogPost, SearchResult, FetchOptions
│   │   └── props.ts            # Component prop interfaces
│   │
│   ├── data/
│   │   ├── portfolioData.ts    # Experiences, qualifications, all project arrays
│   │   └── blogData.ts         # Static fallback blog posts (10 articles)
│   │
│   ├── services/
│   │   ├── blogService.ts      # fetchArticles / fetchArticleById / fetchRelatedArticles
│   │   └── translationService.ts # translateArticle, isEnglish (MyMemory API)
│   │
│   ├── hooks/
│   │   └── useInView.ts        # IntersectionObserver — fires once on scroll-into-view
│   │
│   ├── utils/
│   │   └── utils.ts            # createSlug, getFirstWord, truncateText,
│   │                           #   highlightText, triggerResumeDownload
│   ├── lib/
│   │   └── utils.ts            # cn() — clsx + tailwind-merge
│   │
│   ├── components/
│   │   ├── ui/                 # ShadCN UI components (primitive wrappers)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── dialog.tsx      # Used by GlobalSearchComponent
│   │   │   ├── sheet.tsx       # Used by NavbarComponent mobile menu
│   │   │   ├── skeleton.tsx
│   │   │   └── separator.tsx
│   │   │
│   │   ├── common/             # Shared cross-page components
│   │   │   ├── GlobalSearchComponent.tsx  # CMD+K search modal — ARIA combobox
│   │   │   ├── HighlightText.tsx          # Highlights search term in text
│   │   │   ├── MarqueeComponent.tsx       # Infinite tech-stack logo scroll
│   │   │   ├── ScrollToTopComponent.tsx   # Scroll-to-top + WhatsApp FAB
│   │   │   ├── PageBanner.tsx             # Shared hero banner
│   │   │   ├── TitleComponent.tsx
│   │   │   ├── ButtonComponent.tsx
│   │   │   ├── LoadingComponent.tsx
│   │   │   └── NotFoundComponent.tsx
│   │   │
│   │   ├── layout/
│   │   │   ├── NavbarComponent.tsx        # Glassmorphism sticky nav + Sheet mobile menu
│   │   │   ├── HeaderComponent.tsx        # Navbar wrapper
│   │   │   └── FooterComponent.tsx        # Live latest posts + social links
│   │   │
│   │   └── section/            # Page-specific sections
│   │       ├── about/
│   │       │   ├── AboutTopSectionComponent.tsx
│   │       │   ├── ExperienceComponent.tsx
│   │       │   ├── EducationComponent.tsx
│   │       │   └── ProjectComponent.tsx
│   │       ├── blog/
│   │       │   ├── BlogPostCollectionComponent.tsx
│   │       │   ├── BlogCardComponent.tsx
│   │       │   ├── BlogTopBannerSectionComponent.tsx
│   │       │   └── BlogSingTopBannerComponent.tsx
│   │       ├── contact/
│   │       │   ├── ContactBannerSectionComponent.tsx
│   │       │   └── ContactFormSectionComponent.tsx
│   │       └── portfolio/
│   │           └── PortfolioTopBannerComponent.tsx
│   │
│   └── pages/
│       ├── HomeScreen.tsx
│       ├── AboutScreen.tsx
│       ├── PortfolioScreen.tsx
│       ├── BlogScreen.tsx
│       ├── ContactScreen.tsx
│       └── SinglePostComponent.tsx
│
└── public/
    ├── images/                 # Profile, portfolio thumbnails, school logos
    ├── resume/                 # PDF resume (gated behind contact form)
    └── manifest.json
```

---

## Data Architecture

### Static Data (`src/data/portfolioData.ts`)

All portfolio content is typed against interfaces in `src/types/index.ts`:

```text
Experience[]       → 4 entries (Bitcube, Chiropedic, Reecheble, Talk360 Africa)
Qualification[]    → 3 entries (UNISA, Damelin, Steynsrus)
Project[]          → 24 website projects
Project[]          → 4 mobile projects  (mobileProjects)
Project[]          → 4 game projects    (gameProjects)
Project[]          → 2 CMS projects     (cmsProjects)
```

### Live Data (`src/services/blogService.ts`)

Fetches articles from the **dev.to public API** — no API key required:

```text
GET https://dev.to/api/articles?tags=javascript,react,webdev,…&per_page=30
GET https://dev.to/api/articles/:id
```

Non-English articles are automatically translated to English via `translationService.ts` using the MyMemory API (free tier, no key required).

---

## Environment Variables

Create a `.env` file at the project root:

```env
VITE_WEB3FORMS_KEY=your_web3forms_access_key
```

Get your free key at [web3forms.com](https://web3forms.com). The contact form will not submit without this key, but the rest of the site works fully without it.

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone
git clone https://github.com/techiemokhele/react_portfolio.git
cd react_portfolio

# Install dependencies
npm install

# Add your Web3Forms key
echo "VITE_WEB3FORMS_KEY=your_key_here" > .env

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build     # Outputs to dist/
npm run preview   # Preview the production build locally
```

---

## Deployment (Vercel)

The project is configured for zero-config Vercel deployment via `vercel.json`:

```json
{
  "outputDirectory": "dist",
  "buildCommand": "npm run build",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

The rewrite rule is required for React Router — it ensures all routes (`/about`, `/portfolio`, `/blog/:id/:slug`, etc.) serve `index.html` and let the client-side router handle navigation.

**Deployment steps:**

1. Push the `master` branch to GitHub
2. Import the repository at [vercel.com](https://vercel.com)
3. Add the `VITE_WEB3FORMS_KEY` environment variable in Vercel project settings
4. Deploy — Vercel auto-deploys on every push to `master`

---

## Accessibility

This project targets WCAG 2.1 AA compliance:

- Semantic HTML landmarks (`<main>`, `<nav>`, `<article>`, `<section>`, `<aside>`, `<footer>`)
- All interactive elements have visible focus indicators and descriptive `aria-label`
- Images have meaningful `alt` text; decorative images use `alt=""`
- Global search modal is a proper ARIA combobox with `aria-controls`, `aria-activedescendant`, and `aria-haspopup="listbox"`
- `aria-live="polite"` regions announce dynamic content updates
- Keyboard navigation: Tab order, Escape to close modals, arrow keys for search results
- Skip-to-content link on the blog single-post page
- Colour contrast meets AA ratios throughout

---

## Scripts

| Command           | Description                                    |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Start Vite dev server on port 3000             |
| `npm run build`   | TypeScript check + production build to `dist/` |
| `npm run preview` | Serve the production build locally             |
| `npm run lint`    | Run ESLint on all `.ts` / `.tsx` files         |

---

## Author

**Neo Mokhele** — Intermediate Frontend Developer

[LinkedIn](https://www.linkedin.com/in/neo-mokhele-458188188/) · [GitHub](https://github.com/techiemokhele) · [Twitter/X](https://twitter.com/tsietsineo) · <neomokhele23@gmail.com>
