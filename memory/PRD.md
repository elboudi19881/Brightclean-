# Bright Clean Gebäudereinigungs GmbH – Marketing Website

## Original Problem Statement
Build a world-class premium corporate single-page website (German) for "Bright Clean Gebäudereinigungs GmbH", a Dortmund-based cleaning company (10+ years experience) serving Dortmund, Bochum, Witten and surroundings. Apple/Stripe/Linear/Notion-inspired premium aesthetic with navy + premium blue palette, glassmorphism, smooth animations, rounded corners (18px), large bold display typography.

## User Choices (2026-06-27)
- Contact form persists submissions in MongoDB (via `/api/contact`)
- Placeholder company contact data (Dortmund address, info@bright-clean.de)
- Unsplash stock photography for hero / about / gallery
- Google Maps iframe embed (no API key required)
- Single language: German

## Architecture
- **Backend** (`/app/backend/server.py`): FastAPI under `/api` prefix
  - `GET /api/` – health check
  - `POST /api/contact` – create contact request (validated via Pydantic, EmailStr, message ≥ 5 chars)
  - `GET /api/contact` – list contact requests (admin)
  - MongoDB collection: `contact_requests`
- **Frontend** (`/app/frontend/src/`)
  - `pages/Home.jsx` – single-page layout assembling all sections
  - `components/site/` – Navbar, Hero, Stats, About, Services, WhyUs, Process, Industries, Testimonials, Gallery, Faq, Contact, Footer
  - `lib/site-data.js` – content arrays (services, advantages, process, industries, testimonials, FAQs, gallery, company info)
  - `lib/useReveal.js` – IntersectionObserver scroll-reveal hook
  - Typography: Outfit (display) + IBM Plex Sans (body); palette tokens in `index.css`

## Implemented (2026-06-27, P0 done)
- ✅ Navbar with scroll-aware glass background, mobile menu
- ✅ Hero (headline, dual CTAs, floating glass badges, trust icons, hero image)
- ✅ Animated trust statistics (10+, 500+, 2.500+, 100%) with German number formatting
- ✅ About section with 7 highlights and modern company image
- ✅ 15 service cards (icon, title, description, hover lift, "Mehr erfahren")
- ✅ Why Us – 9 advantages in premium cards
- ✅ 5-step process timeline
- ✅ 10 industry cards with hover gradient
- ✅ 4 testimonials with 5-star rating
- ✅ Masonry gallery with lightbox (Esc / close button)
- ✅ FAQ accordion (6 questions)
- ✅ Contact form (Name, Firma, Telefon, E-Mail, Nachricht) → MongoDB, sonner toasts
- ✅ Google Maps iframe (Dortmund)
- ✅ Dark footer with links, services, legal columns

## Testing
- Iteration 1 (`/app/test_reports/iteration_1.json`): Backend 100%, Frontend 94%. All critical flows pass; LOW: empty-form validation toast tightened by removing native `required` attributes.

## Backlog (P1/P2)
- Real company data, photography, logo (replace placeholders)
- Datenschutz / Impressum / AGB pages
- Multi-language switcher (DE / EN)
- Admin dashboard for /api/contact submissions
- Email notification on new contact (Resend/SendGrid)
- Schema.org LocalBusiness JSON-LD + sitemap.xml for SEO
- Cookie consent banner

## Next Tasks
1. Replace placeholder company data with real Bright Clean info
2. Add legal pages (Datenschutz, Impressum)
3. Hook contact submissions to email notification
