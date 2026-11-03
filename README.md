# manstaffplumbing — Commercial & Industrial Plumbing Staffing Platform

A modern, responsive, multi-page static web application built with **React**, **Vite**, **Tailwind CSS**, and **React Router (HashRouter)**. Deployed automatically to **GitHub Pages** using **GitHub Actions**.

---

## 1. Project Overview & What the Website Does

`manstaffplumbing` is an enterprise staffing and mobilization platform specialized for the commercial and industrial plumbing and piping trades. It connects commercial MEP contractors, general contractors, hospital facility directors, and industrial plant managers with certified, pre-vetted journeyman plumbers, ASME pipefitters, and ASSE 6010 medical gas braziers.

The platform provides:
- **Contractor Dispatch Solutions**: 48-hour rapid crew dispatch, surge labor request tickets, transparent rate cards, and an 8-Hour Workmanship Guarantee.
- **Craftsman Career Network**: Access to high-hour commercial rough-in contracts ($42–$62/hr), weekly Friday direct deposit, and non-taxable daily per diem ($110–$150/day).
- **Interactive Rate & Crew Cost Calculator**: Live estimate of weekly payroll burden, statutory insurance, and total project investment.
- **Job Board & Application Engine**: Search, filter, bookmark, and apply for verified commercial plumbing positions.
- **Client-Side State Tracking**: Saved positions, crew requests, and application records persisted in browser `localStorage`.

---

## 2. Reference Website & Brand Identity

- **Reference Website**: [Journeyman Staffing](https://www.journeymanstaff.com/) (`journeyman.io` / WISOL AG)
  - *Reference Concept*: International mobility and skilled trades recruitment platform connecting certified European tradespeople with global commercial construction projects.
- **New Brand Identity**: `manstaffplumbing` (Manstaff Plumbing & Mechanical Staffing)
  - *GitHub Username*: `Aman22kr`
  - *Domain Focus*: Commercial & industrial plumbing, high-density multi-story DWV, hydronic central plant piping, sanitary cleanrooms, and medical gas distribution systems.
  - *Visual Identity*: Industrial deep navy (`#020617` / `#0b1528`), steel slate, copper / safety amber accents, crisp typography (`Plus Jakarta Sans` & `Outfit`), and zero-pill typographic discipline.

---

## 3. Main Pages & Implemented Features

1. **Homepage (`#/`)**:
   - High-impact hero section with 16:9 commercial plumbing imagery.
   - 4-item proof metrics strip (1,420+ placed, 48h dispatch, 98.4% first-time inspection pass, 0.68 EMR).
   - "How It Works" dual pathway for Contractors and Plumbers.
   - Mechanical specialties bento grid.
   - Featured open positions with interactive category filter tabs.
   - Reusable live Crew Cost & Rate Estimator.
   - Video Case Study section with compliant blank 16:9 YouTube video placeholder.
   - Contractor and journeyman testimonials.
   - Reusable compact advertisement placeholder.
2. **For Employers (`#/for-employers`)**:
   - Staffing packages (Rapid Surge Crew, Long-Term Core, Direct Hire).
   - 4-Step Verification Protocol (State Board license audit, isometric code test, OSHA 30, background screening).
   - Contractor advantage comparison matrix.
   - Embedded interactive contractor crew request ticket form with validation and instant confirmation.
3. **For Plumbers & Tradespeople (`#/for-plumbers`)**:
   - Craftsman benefits: weekly direct deposit, 7-day per diem, health benefits, license reciprocity help.
   - 4-stage career ladder (Journeyman -> Steamfitter -> MedGas Brazer -> Superintendent).
   - Embedded plumber registration form.
4. **Trades & Specialties Directory (`#/trades`)**:
   - Filterable catalog of all mechanical disciplines (Commercial DWV, Industrial Steam, Healthcare MedGas, Superintendent, Fire Protection, Civil Underground).
5. **Trade Detail Specifications (`#/trades/:slug`)**:
   - Deep specifications: required tools, state codes (UPC, IPC, ASME B31.1, NFPA 99), typical projects, wage rates, and immediate crew request action.
6. **Commercial Job Board (`#/jobs`)**:
   - Real-time search query filtering by title, trade, city, or keywords.
   - Discipline and state dropdown filters.
   - Sorting by newest, highest pay, or urgent surge.
   - Bookmark / save toggle with `localStorage` persistence.
7. **Job Detail Page (`#/jobs/:id`)**:
   - Complete project overview, field responsibilities, license requirements, and one-click application modal.
8. **Pricing & Crew Cost Estimator (`#/pricing`)**:
   - Transparent bill rate breakdown (W-2 payroll, taxes, $5M liability insurance, replacement guarantee).
   - Dynamic calculator with sliders for crew size, weekly hours, duration, and per diem.
9. **About Us (`#/about`)**:
   - Our heritage bridging European journeyman craftsmanship with North American commercial construction.
   - Core operating principles and safety benchmarks.
10. **24/7 Dispatch & Contact (`#/contact`)**:
    - Emergency dispatch hotline: `(800) 555-PLUMB`.
    - Regional project desks (Austin, Denver, Columbus, Chicago, Zurich).
    - Interactive 3-category contact message form with immediate validation.
11. **Knowledge Base & FAQ (`#/faq`)**:
    - Filterable accordion by contractor, plumber, licensing, and payroll topics with real-time text search.
12. **Client Dashboard (`#/my-dashboard`)**:
    - Manage saved favorite jobs.
    - View submitted crew dispatch requests with tracking numbers.
    - View submitted plumber applications and review status.
    - Clear local data utility.
13. **Custom 404 Recovery (`#/*`)**:
    - Clean industrial error recovery UI with navigation links.

---

## 4. Project Structure

```text
manstaffplumbing/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Authoritative GitHub Actions deployment workflow
├── public/                       # Static public assets
├── src/
│   ├── assets/
│   │   └── images/               # High-fidelity visual assets generated for trades & hero
│   ├── components/
│   │   ├── AdPlaceholder.tsx     # Reusable compact advertising slot
│   │   ├── ApplyJobModal.tsx     # Interactive plumber application modal
│   │   ├── CostCalculator.tsx    # Interactive crew cost & rate calculator
│   │   ├── CrewRequestModal.tsx  # Interactive contractor crew request modal
│   │   ├── Footer.tsx            # Industrial site footer & compliance links
│   │   ├── Navbar.tsx            # Strict 3-zone Top Bar Contract navigation
│   │   └── YouTubePlaceholder.tsx# Compliant 16:9 blank video placeholder
│   ├── data/
│   │   └── mockData.ts           # Realistic trade specifications, jobs, FAQs, testimonials
│   ├── pages/
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── DashboardPage.tsx
│   │   ├── FaqPage.tsx
│   │   ├── ForEmployersPage.tsx
│   │   ├── ForPlumbersPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── JobDetailPage.tsx
│   │   ├── JobsPage.tsx
│   │   ├── NotFoundPage.tsx
│   │   ├── PricingPage.tsx
│   │   ├── TradeDetailPage.tsx
│   │   └── TradesPage.tsx
│   ├── types/
│   │   └── index.ts              # TypeScript interfaces for trades, jobs, requests
│   ├── utils/
│   │   └── storage.ts            # Safe namespaced browser localStorage management
│   ├── App.tsx                   # HashRouter configuration & layout wrapper
│   ├── index.css                 # Tailwind CSS v4 setup & typography
│   └── main.tsx                  # Application entry point
├── .env.example
├── .gitignore
├── index.html                    # SEO title, OpenGraph tags, webfonts
├── metadata.json                 # AI Studio applet metadata
├── package.json                  # Scripts & dependencies
├── package-lock.json             # Locked dependency tree for npm ci
├── tsconfig.json                 # TypeScript compiler configuration
├── vite.config.ts                # Vite config with base: './' for GitHub Pages
└── README.md                     # Comprehensive project documentation
```

---

## 5. Prerequisites & Compatibility

- **Node.js**: `v20.x` or `v22.x` LTS recommended.
- **npm**: `v10.x` or higher.
- **Operating System**: Linux, macOS, or Windows (WSL2 recommended).

---

## 6. How to Install Dependencies

To install all dependencies using the committed, verified lockfile:

```bash
# Recommended clean install
npm ci

# Or standard install if modifying packages
npm install
```

---

## 7. How to Run the Development Server

Start Vite development server locally on port 3000:

```bash
npm run dev
```

Open your browser to `http://localhost:3000`.

---

## 8. How to Generate & Preview Production Build

Generate optimized production bundle in the `dist/` directory:

```bash
# Compile and build
npm run build

# Preview production build locally
npm run preview
```

---

## 9. How LocalStorage is Used & Limitations

All persistent client-side data is handled through safe, namespaced wrappers in `src/utils/storage.ts`:

- `manstaffplumbing_saved_jobs_v1`: Array of saved job IDs toggled by the user.
- `manstaffplumbing_crew_requests_v1`: Array of contractor dispatch tickets with auto-generated tracking IDs (`CR-XXXXXX`).
- `manstaffplumbing_job_applications_v1`: Array of tradesman application profiles with tracking IDs (`APP-XXXXXX`).
- `manstaffplumbing_recent_searches_v1`: Recent job search terms.

**Important Limitations**:
- `localStorage` is scoped exclusively to the user's specific web browser and device.
- It does **not** synchronize across different computers, devices, or incognito sessions.
- In this client-side demonstration version, submitting an application or crew ticket stores the record locally and displays instant confirmation; it does not dispatch emails to an external email server.
- No sensitive credentials, passwords, or financial payment details are ever requested or stored.

---

## 10. Configuring GitHub Repository & Username

1. Create a new GitHub repository under your account:
   ```bash
   https://github.com/Aman22kr/manstaffplumbing
   ```
2. Link your local project directory:
   ```bash
   git init
   git remote add origin https://github.com/Aman22kr/manstaffplumbing.git
   git branch -M main
   ```

---

## 11. Enabling GitHub Pages with GitHub Actions

1. Open your repository on GitHub: `https://github.com/Aman22kr/manstaffplumbing`.
2. Navigate to **Settings** > **Pages** (under the "Code and automation" section).
3. Under **Build and deployment** > **Source**, choose **GitHub Actions** from the dropdown menu (do **not** select "Deploy from a branch").
4. Once set to **GitHub Actions**, GitHub automatically triggers the workflow defined in `.github/workflows/deploy.yml` upon every push to `main`.

---

## 12. Pushing Changes & Automatic Deployment

Push your commits to `main`:

```bash
git add .
git commit -m "feat: complete manstaffplumbing static web application"
git push -u origin main
```

- GitHub Actions will run the `Deploy to GitHub Pages` workflow.
- It executes `npm ci`, runs `npm run build`, archives `./dist`, and publishes the site to:
  ```text
  https://Aman22kr.github.io/manstaffplumbing/
  ```

---

## 13. Troubleshooting Common Deployment Issues

| Issue | Cause | Fix |
|---|---|---|
| **Blank page or 404 for CSS/JS on GitHub Pages** | Absolute root paths (`/assets/...`) instead of relative paths. | Verify `base: './'` is configured in `vite.config.ts`. All assets will resolve relative to the repository sub-path. |
| **Page refresh returns 404** | HTML5 `BrowserRouter` requires server rewrite rules that GitHub Pages static hosting does not support. | The app uses `HashRouter` (`#/jobs`), which ensures direct links and refreshes work without server rewrites. |
| **npm ci fails in GitHub Actions** | Mismatch between `package.json` and `package-lock.json`. | Run `npm install` locally to update `package-lock.json` and commit the lockfile to the repository. |
| **Actions workflow fails on permissions** | Missing GitHub Pages write permissions. | Ensure `.github/workflows/deploy.yml` contains `pages: write` and `id-token: write`. |

---

## 14. Customizing Brand Name, Content & Visual Theme

- **Brand Name**: Update `manstaffplumbing` in `metadata.json`, `index.html`, and `src/components/Navbar.tsx` / `Footer.tsx`.
- **Colors & Accents**: Tailwind classes in `src/index.css` and components default to `blue-600` (primary corporate action), `amber-500` (craftsmanship & trade accent), and `slate-950` (industrial canvas).
- **Trade Specialties & Data**: Modify or add disciplines in `src/data/mockData.ts`. The directory, calculator, and filter options automatically adapt.

---

## 15. Reusing the Project for Another Trade or Agency

To port this application to an electrical (`manstaffelectrical`), framing (`manstaffframing`), or welding (`manstaffwelding`) staffing platform:
1. Update `metadata.json` and `<title>` in `index.html`.
2. In `src/data/mockData.ts`, replace the plumbing trade items with your target trade specialties, wage rates, tool requirements, and codes.
3. Replace the image assets in `src/assets/images/` or generate replacements.
4. The entire routing, calculator, search engine, modal flows, and GitHub Actions workflow will instantly function for the new trade domain.

---

## 16. Mock Implementations & Current Limitations

- **Backend / Database**: This release operates purely client-side. There is no active backend server or database connected.
- **Forms**: Crew request tickets and job applications validate inputs, generate tracking IDs, and persist into browser `localStorage`, but do not transmit automated SMS or emails to actual contractors.
- **Video Embeds**: In accordance with project requirements, YouTube embeds are rendered as clean, high-fidelity 16:9 blank video placeholders with descriptive captions and play glyphs rather than external YouTube iframes.
- **Advertisements**: A compact, non-intrusive partner directory slot is rendered above the footer on all primary pages as a placeholder component without third-party ad tracking.
