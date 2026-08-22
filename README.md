# SK Immigration Services — Upgraded Website

**SK Immigration Services (SMC-Private) Limited | CUIN 0304985**  
Built with Astro 5 + Tailwind CSS | Ready for Cloudflare Pages

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
sk-immigration-upgraded/
├── public/
│   ├── llms.txt          # AI/LLM crawler manifest (AEO)
│   ├── ai.txt            # Google AI Overview signals (GEO)
│   ├── robots.txt        # Search engine directives
│   ├── _redirects        # Cloudflare Pages URL redirects
│   └── assets/           # 📸 PUT YOUR IMAGES HERE
│       └── logo.jpg      # ← Replace with your actual logo
│
├── src/
│   ├── lib/
│   │   └── config.ts     # ⚙️ ALL SITE SETTINGS — edit here first
│   │
│   ├── content/
│   │   ├── config.ts     # Content collection schemas
│   │   ├── guides/       # ← ADD NEW COUNTRY GUIDES HERE
│   │   │   └── germany-student-visa-ausbildung.md   (sample)
│   │   ├── blog/         # ← ADD NEW BLOG POSTS HERE
│   │   │   └── student-visa-rejection-reasons-pakistan.md (sample)
│   │   └── authors/
│   │       └── sk-team.json
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro    # Master layout (head, meta, JSON-LD)
│   │   └── ArticleLayout.astro # Guide/blog article layout
│   │
│   ├── components/
│   │   ├── Header.astro        # Navigation + dark mode
│   │   ├── Footer.astro        # Footer with all links
│   │   └── WhatsAppButton.astro # Sticky WhatsApp float button
│   │
│   └── pages/
│       ├── index.astro    # Homepage
│       ├── about.astro    # About & Trust (SECP verification)
│       ├── contact.astro  # Contact + form
│       ├── services.astro # All 6 services
│       ├── privacy.astro  # Privacy Policy (required for AdSense)
│       ├── terms.astro    # Terms of Service
│       ├── guides/
│       │   ├── index.astro    # Guides listing
│       │   └── [slug].astro   # Dynamic guide pages
│       └── blog/
│           ├── index.astro    # Blog listing
│           └── [slug].astro   # Dynamic blog posts
```

---

## ✍️ How to Add More Guides

1. Create a new `.md` file in `src/content/guides/`
2. Use this frontmatter template:

```markdown
---
title: "UK Student Visa Guide for Pakistani Applicants (2025)"
description: "Complete guide to UK student visa from Pakistan — CAS letter, maintenance funds, IELTS, and embassy tips."
country: "United Kingdom"
visaType: "Student Visa"
publishDate: "2026-09-01"
updatedDate: "2026-09-01"
author: "sk-team"
featured: false
tags: ["UK", "Study Visa", "Student Route", "Pakistan"]
faqs:
  - question: "What is a CAS number for UK student visa?"
    answer: "A CAS (Confirmation of Acceptance for Studies) is a unique reference number issued by your UK university..."
---

Your guide content here in markdown...
```

3. Save the file — it automatically appears in `/guides/` listing and gets its own URL at `/guides/your-file-name/`

---

## ✍️ How to Add Blog Posts

1. Create a new `.md` file in `src/content/blog/`
2. Use this frontmatter template:

```markdown
---
title: "How to Write a Strong SOP for Germany Visa"
description: "Step-by-step guide to writing a Statement of Purpose for Germany student visa from Pakistan."
publishDate: "2026-09-15"
author: "sk-team"
tags: ["Germany", "SOP", "Study Visa Tips"]
faqs:
  - question: "How long should an SOP be for Germany visa?"
    answer: "A Germany visa SOP should be 500–800 words..."
---

Your blog post content here...
```

3. Save — it appears at `/blog/` and gets its own URL at `/blog/your-file-name/`

---

## ⚙️ Configuration

All key settings are in **`src/lib/config.ts`**. Edit these values to update:
- Phone / WhatsApp numbers
- Email address
- Office address
- Analytics IDs (GTM, GA4, AdSense)
- Social media links
- Navigation menu items

---

## 🚀 Deploy to Cloudflare Pages

1. Push this repository to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com)
3. Connect your GitHub repository
4. Use these build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Click Deploy

That's it! Cloudflare Pages handles HTTPS, CDN, and global edge deployment automatically.

---

## 📸 Adding a Logo

Replace `public/assets/logo.jpg` with your actual logo file.
- Recommended size: 200×200px minimum (square is best)
- Format: JPG or PNG
- The logo is used in: header, footer, favicon, JSON-LD schema, OG images

Also update `public/assets/og-share.jpg` — the Open Graph image shown when the site is shared on WhatsApp/Facebook. Recommended size: **1200×630px**.

---

## 🔍 SEO Files to Keep Updated

| File | Purpose | Update When |
|------|---------|-------------|
| `public/llms.txt` | AI crawler manifest | Adding new services |
| `public/ai.txt` | AI Overview signals | Updating key facts |
| `public/robots.txt` | Crawler directives | Rarely needed |
| `src/lib/config.ts` | Site-wide SEO config | Changing contact info |

---

## 🛡️ Important: No Visa Guarantees

The site is built with SK Immigration's core principle embedded throughout:
- Every page has the "Embassies decide — we never guarantee" disclaimer
- The comparison table explicitly shows honest vs. dishonest agent practices
- Terms of Service has a dedicated No Visa Guarantee Policy section
- All content guides include disclaimers

**Do not remove these disclaimers.** They are both legally protective and a major trust/SEO signal.

---

## Support

Questions about extending the site? Contact the development team or refer to the [Astro documentation](https://docs.astro.build).
