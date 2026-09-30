# Antigravity Project Brief: Omar Nasser — AI Engineer Portfolio

## 1. Project Overview

**Goal:** Build, optimize, and deploy a production-grade, single-page portfolio website for **Omar Nasser Mahmoud**, an AI Engineer based in Alexandria, Egypt. The portfolio must be ready for inclusion in LinkedIn profiles, Upwork proposals, and freelance platform bids. It should communicate technical credibility, empirical results, and professional readiness.

**Target Audience:** Recruiters, hiring managers, Upwork clients, freelance prospects, and technical collaborators.

**Primary Conversion Goals:**
1. Generate inbound project inquiries via the contact form.
2. Drive visitors to GitHub repositories for code verification.
3. Establish Omar as a credible, results-driven AI Engineer.

---

## 2. Design System (MUST Follow DESIGN.md Exactly)

The visual design is defined in the accompanying `DESIGN.md` file. **Treat this file as the single source of truth for all design tokens.** Do not invent new colors, fonts, or spacing values. The design language is "Koyeb Editorial AI Portfolio" — brutalist, high-contrast, editorial, with electric mint accents.

### Core Design Tokens (Summary — See DESIGN.md for Full Specification)

| Token | Value | Usage |
|-------|-------|-------|
| `accent` | `#2eff9b` | Electric mint — highlights, CTAs, metrics |
| `canvas` | `#e6e5de` | Warm off-white page background |
| `surface` | `#fbf9f2` | Card backgrounds |
| `surface-dark` | `#181618` | Dark sections, terminals, footers |
| `ink` | `#000000` | Primary text |
| `ink-soft` | `#364153` | Body text, secondary copy |
| `ink-muted` | `#656565` | Labels, metadata |

**Typography:**
- **Display/Headings:** `Anton` (uppercase, tight leading, brutalist)
- **Body:** `Inter` (clean sans-serif)
- **Monospace/Labels:** `JetBrains Mono` (technical credibility)

**Shadows (Signature Style):**
- `shadow-brutal`: `3px 3px 0px 0px #000000`
- `shadow-brutal-lg`: `5px 5px 0px 0px #000000`
- `shadow-stamped`: `0px -5px 0px 0px inset #000000` (for dark buttons)

**Border Radius:** Use `rounded-lg` (8px) to `rounded-2xl` (16px) consistently. Avoid fully rounded pills except for badge elements.

---

## 3. Content Specification

### 3.1 Personal Information (Exact — Do Not Modify)

- **Name:** Omar Nasser Mahmoud
- **Title:** AI Engineer
- **Location:** Alexandria, Egypt (UTC+2)
- **Email:** omarr.elhawyy@gmail.com
- **Phone:** +201285407011
- **LinkedIn:** https://www.linkedin.com/in/omar-nasser-aab951303/
- **GitHub:** https://github.com/OmarElHawy
- **Education:** B.Sc. in AI & Data Science, Egypt-Japan University of Science and Technology (E-JUST), 09/2023 – Present

### 3.2 Page Sections (Ordered as per code.html)

The portfolio is a **single-page application** with smooth scroll navigation. Build the following sections in order:

1. **Announcement Bar** — Sticky top, electric mint background, "AVAILABLE FOR FREELANCE & AI CONTRACTS" with pulsing dot and link to #contact.
2. **Editorial Pill App Bar** — Sticky navigation with pill-shaped container, logo "OMAR NASSER // AI ENG", desktop nav links (Empirical Proof, Projects, System, Services, About, Contact CTA), mobile hamburger drawer.
3. **Hero Section** (#hero) — Brutalist headline: "I BUILD AI SYSTEMS THAT **ACTUALLY WORK.**" with accent highlight. Subtitle: "RAG • LLMs • Computer Vision • NLP • AI Automation". Narrative paragraph. CTA buttons (Explore Selected Work, Let's Talk, GitHub Profile). **Interactive SmartDoc RAG Pipeline Widget** — clickable nodes that update an explainer box (see code.html for exact data).
4. **Metrics Band** (#metrics) — Dark section (`surface-dark`), "BUILT. TESTED. MEASURED." with 5 metric cards: 24.24% WER, 11.14% CER, 98.75% Accuracy, 0.9999 AUC-ROC, 20,000 Audio Samples.
5. **Selected Projects** (#work) — 4 detailed project cards (Arabic Speech-to-Text, SmartDoc RAG Agent, Automated Timetable Generation, Blood Cell Image Analysis) with "View Case Study" modal functionality and GitHub links.
6. **How I Think** (#methodology) — 6-step engineering philosophy grid (Scope, Data, Model, Guard, Pipeline, Verify).
7. **What I Can Build** (#services) — 6 client-oriented service cards (Generative AI & Agents, RAG Assistants, AI Automation, Custom ML Pipelines, Computer Vision, Applied NLP & Speech).
8. **Professional Experience** (#experience) — Timeline with 6 internships (DEPI, ITI Advanced AI, ITI RAG Agents, ITI Generative AI, NTI Data Analysis, WE Telecom Egypt).
9. **About Omar** (#about) — Personal positioning statement, verified accreditations panel (E-JUST, ITI/NVIDIA DLI, DEPI, NTI).
10. **GitHub Band** — Dark section with terminal-styled git clone command and GitHub CTA.
11. **Contact Section** (#contact) — Copyable email/phone cards, project inquiry form (select + textarea → mailto:).
12. **Case Study Modal** — Overlay modal with dynamically populated content for each project.
13. **Footer** — Dark, with social links (GitHub, LinkedIn, Email, WhatsApp) and copyright.
14. **Mobile Bottom Sticky Nav** — 4-icon nav (Index, Proof, Work, Contact) visible only on mobile.

### 3.3 Interactive Behaviors (Preserve Exactly)

All JavaScript interactions from `code.html` must be preserved and functional:

- **Mobile drawer:** Open/close with overlay, close on link click.
- **RAG Pipeline Widget:** Clicking nodes updates `stageTitle`, `stageDesc`, `stageMetric` with data from the `pipelineData` object.
- **Case Study Modal:** `openCaseStudy(key)` populates modal with `caseStudies` data; `closeCaseStudy()` hides modal; Escape key closes.
- **Copy buttons:** Email and phone copy to clipboard with alert confirmation.
- **Inquiry form:** Submits via `mailto:` with encoded subject and body.

---

## 4. Technical Stack & Requirements

### 4.1 Build Stack

- **Output:** Static HTML5, CSS (Tailwind CSS via CDN or compiled), vanilla JavaScript.
- **Styling:** Tailwind CSS with custom config extending the design tokens from DESIGN.md.
- **Fonts:** Google Fonts — Anton, Inter, JetBrains Mono.
- **Icons:** Material Symbols Outlined (Google Fonts).
- **No build step required** — the `code.html` is production-ready as a single file. However, restructure into a proper project directory if beneficial for maintainability.

### 4.2 File Structure (Recommended)
omar-portfolio/
├── index.html # Main portfolio page
├── css/
│ └── styles.css # Custom styles (extracted from <style> block)
├── js/
│ └── main.js # Extracted JavaScript (drawer, pipeline, modal, copy)
├── assets/
│ ├── favicon.ico
│ └── og-image.png # Open Graph preview image (1200×630)
├── DESIGN.md # Design system reference (do not modify)
├── README.md # Project documentation
└── .gitignore


### 4.3 Performance & SEO Requirements

- **Lighthouse Score Target:** 95+ across Performance, Accessibility, Best Practices, SEO.
- **Meta Tags:**
  - `<title>`: "Omar Nasser — AI Engineer | RAG, LLMs & Computer Vision"
  - `<meta name="description">`: "AI Engineer specializing in verifiable RAG pipelines, fine-tuned speech models, production computer vision, and autonomous workflow orchestrations. Based in Alexandria, Egypt."
  - Open Graph and Twitter Card meta tags for social sharing.
  - `<link rel="canonical" href="https://your-domain.com/">`
- **Accessibility:**
  - All interactive elements must have `aria-label` attributes.
  - Color contrast must meet WCAG AA standards (the design uses black on light backgrounds and white on dark — verify).
  - Keyboard navigation for all modals and drawers.
- **Images:** All images must have meaningful `alt` text. Use `loading="lazy"` for below-the-fold images.
- **Responsive:** Mobile-first, tested on 375px, 768px, 1024px, 1440px breakpoints.

---

## 5. Deployment Instructions

### Option A: Vercel (Recommended — Best for Portfolio)

Vercel is the best choice for a static portfolio: free tier includes 100 GB/month bandwidth, unlimited deployments, automatic HTTPS, and global CDN.

**Steps:**
1. Initialize a Git repository in the project folder.
2. Push to a new GitHub repository: `omar-nasser-portfolio`.
3. Go to [vercel.com](https://vercel.com), import the repository.
4. Framework preset: **Other** (static site).
5. Build command: **None** (leave empty).
6. Output directory: **./** (root, since `index.html` is at root).
7. Deploy. Vercel will provide a `*.vercel.app` URL.
8. (Optional) Add a custom domain in Vercel dashboard.

### Option B: GitHub Pages

Free, simple, and integrates directly with the GitHub profile.

**Steps:**
1. Push the project to a GitHub repository.
2. Go to **Settings → Pages**.
3. Source: **Deploy from a branch**.
4. Branch: `main`, folder: `/ (root)`.
5. Save. The site will be live at `https://OmarElHawy.github.io/repo-name/`.

### Option C: Netlify

Free tier with 100 GB bandwidth, drag-and-drop deployment.

**Steps:**
1. Drag the project folder into [app.netlify.com/drop](https://app.netlify.com/drop).
2. Netlify provides an instant URL.
3. (Optional) Connect to GitHub for continuous deployment.

**Recommendation:** Use **Vercel** for the best developer experience, automatic previews, and analytics. Fall back to **GitHub Pages** if you want a zero-configuration, permanently free option tied directly to your GitHub account.

---

## 6. Verification Checklist (Antigravity Must Run Before Reporting Success)

Before declaring the task complete, Antigravity must:

- [ ] Open the site in the built-in Chromium browser.
- [ ] Verify all sections render correctly (Hero, Metrics, Projects, Methodology, Services, Experience, About, Contact).
- [ ] Test the RAG pipeline widget: click each of the 6 nodes and confirm the explainer box updates.
- [ ] Test the case study modals: open each project's modal and confirm content populates.
- [ ] Test the mobile drawer: toggle open/close, click links, confirm they scroll to sections.
- [ ] Test copy buttons: click email/phone copy and confirm clipboard works.
- [ ] Test the inquiry form: select an option, type a message, submit — confirm it opens the mail client.
- [ ] Run Lighthouse audit via Chrome DevTools and confirm scores ≥ 95.
- [ ] Verify all external links (GitHub, LinkedIn) open in new tabs.
- [ ] Confirm no console errors in the browser developer tools.
- [ ] Take a screenshot of the final rendered page.

---

## 7. Content Integrity Rules

- **Do not alter metrics, project descriptions, or technical claims.** All data is sourced from Omar's CV and is factual.
- **Do not add placeholder projects or fake testimonials.**
- **Do not change the name, contact details, or social URLs.**
- **The `DESIGN.md` file is authoritative for all visual decisions.** If `code.html` and `DESIGN.md` conflict, prefer `DESIGN.md` for design tokens and `code.html` for content structure.

---

## 8. Deliverables

Upon completion, Antigravity should provide:

1. A fully functional `index.html` (and supporting files) in the workspace.
2. A live deployment URL (Vercel or GitHub Pages).
3. A GitHub repository with a clean commit history.
4. A screenshot of the rendered site (desktop and mobile).
5. A Lighthouse audit report (screenshot or JSON).

---

## 9. Prompt for Antigravity

Copy and paste the following prompt directly into Antigravity:

> Build and deploy a production-grade portfolio website for Omar Nasser, an AI Engineer. 
> 
> **Files to use:** I have provided `code.html` (the complete frontend markup and JavaScript) and `DESIGN.md` (the authoritative design system). The `code.html` file is already a complete, working single-page portfolio — your job is to structure it into a maintainable project, verify everything works, optimize for performance and SEO, and deploy it.
> 
> **Requirements:**
> 1. Follow `DESIGN.md` exactly for all design tokens (colors, fonts, shadows, spacing).
> 2. Preserve all content, metrics, and interactive JavaScript behaviors from `code.html`.
> 3. Restructure into a clean project directory if beneficial, but maintain a static HTML/CSS/JS stack (no framework build step required).
> 4. Add comprehensive meta tags for SEO and Open Graph.
> 5. Test every interactive element in the browser before reporting success.
> 6. Deploy to Vercel (recommended) or GitHub Pages.
> 7. Provide a live URL and a screenshot of the final rendered site.
> 
> **Content integrity:** Do not modify names, metrics, project descriptions, or contact details. All claims are factual from the attached CV.
> 
> **Target:** Lighthouse scores ≥ 95 across all categories. Mobile-first responsive design. All interactions fully functional.

---

*End of Project Brief*