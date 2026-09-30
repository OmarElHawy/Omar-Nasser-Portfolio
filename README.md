# Omar Nasser — AI Engineer Portfolio

A production-grade, brutalist single-page portfolio website for **Omar Nasser Mahmoud**, AI Engineer based in Alexandria, Egypt.

Built with a high-contrast editorial design language ("Koyeb Editorial AI Portfolio"), featuring electric mint accents, empirical benchmark cards, an interactive RAG pipeline widget, and verified technical case studies.

---

## ⚡ Live Preview & Deployment

- **Deployment Platform:** Vercel / GitHub Pages
- **Stack:** HTML5, Tailwind CSS, Vanilla JavaScript, Google Fonts (Anton, Inter, JetBrains Mono)
- **Lighthouse Performance Score:** 95+ across Performance, Accessibility, Best Practices, and SEO

---

## 📁 Project Architecture

```
Professional Portfolio/
├── index.html          # Main semantic HTML5 portfolio
├── css/
│   └── styles.css      # Design tokens, brutalist shadows, toast, scrollbar
├── js/
│   └── main.js         # Interactive RAG widget, case studies, drawer, clipboard
├── assets/
│   ├── favicon.svg     # SVG editorial favicon
│   ├── og-image.png    # Open Graph 1200×630 social preview card
│   └── og-image.jpg    # Optimized JPG social preview
├── DESIGN.md           # Authoritative design system specifications
├── Project.md          # Full project brief & requirements
└── .gitignore          # Production git ignore configuration
```

---

## 🚀 Key Features & Interactive Behaviors

1. **Top Announcement Bar:** Sticky notification for freelance & AI contract availability.
2. **Editorial Pill Navigation:** Frosted glass navbar with brutalist shadows and responsive mobile drawer.
3. **Interactive SmartDoc RAG Architecture Widget:** Clickable 6-stage pipeline (Source, Chunk, Index, Retriever, LLM Guard, Serve) updating live throughput, tokens, and latency specs.
4. **Empirical Proof & Metrics Band:** Dark high-contrast section highlighting 24.24% WER, 11.14% CER, 98.75% Accuracy, 0.9999 AUC-ROC, and 20,000 Audio Samples.
5. **Detailed Case Studies Modal:** Dynamic modal populated with architecture solutions, implementation highlights, verified metrics, and key takeaways for all 4 flagship projects.
6. **One-Click Clipboard Actions:** Instant copy for email and phone coordinates with visual feedback toast.
7. **Production SEO & Open Graph:** Comprehensive meta tags, Open Graph card, Twitter Card, and JSON-LD structured data for rich search engine indexing.

---

## 🛠️ Local Development & Testing

You can run the portfolio locally using any static HTTP server or directly in the browser:

```bash
# Using Python
python -m http.server 3000

# Or using Node.js npx serve
npx serve .
```

Then navigate to `http://localhost:3000`.

---

## 🚢 Deployment Guide

### Option A: Vercel (Recommended)

1. Run `npx vercel` from the root directory:
   ```bash
   npx vercel
   ```
2. Follow the interactive prompts:
   - Set up and deploy: **Y**
   - Which scope: Select your personal Vercel team/account
   - Link to existing project: **N**
   - What's your project's name: `omar-nasser-portfolio`
   - In which directory is your code located: `./`
3. Deploy to production:
   ```bash
   npx vercel --prod
   ```

### Option B: GitHub Pages

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: production-ready Omar Nasser AI portfolio"
   git branch -M main
   git remote add origin https://github.com/OmarElHawy/omar-nasser-portfolio.git
   git push -u origin main
   ```
2. Navigate to your repository on GitHub:
   - Go to **Settings** → **Pages**
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**
   - Select branch `main` and folder `/ (root)`
   - Click **Save**. The site will be published at `https://OmarElHawy.github.io/omar-nasser-portfolio/`.

---

## 👤 Contact

- **Omar Nasser Mahmoud** — AI Engineer
- **Email:** omarr.elhawyy@gmail.com
- **Phone:** +201285407011
- **LinkedIn:** [linkedin.com/in/omar-nasser-aab951303](https://www.linkedin.com/in/omar-nasser-aab951303/)
- **GitHub:** [github.com/OmarElHawy](https://github.com/OmarElHawy)
