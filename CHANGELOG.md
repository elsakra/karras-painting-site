# Accounting Firm Template - Changelog

## Template Overview

- **ID:** `accounting-firm`
- **Inspiration:** BDO (https://www.bdo.com/)
- **Category:** Professional Services
- **Industry:** Accounting, Tax, Advisory

## Design System

### Color Palette
- **Primary (Charcoal):** `#1a1a2e` - Dark corporate blue-black
- **Accent (Crimson):** `#c8102e` - Bold red accent
- **Neutral (Slate):** Standard Tailwind slate scale
- **Navy:** `#243b53` - Secondary accent for gradients

### Typography
- **Display Font:** Merriweather (serif) - Headlines, branding
- **Body Font:** Inter (sans-serif) - Body text, UI elements

### Logo
- S monogram mark with red accent bar
- Located at `/public/images/logo.svg`
- Dark version for light backgrounds, inverted for dark backgrounds

## Components

### Header (`src/components/Header.astro`)
- **Utility Bar:** Gray background (`bg-slate-600`) with secondary navigation links (Alumni, Client Center, Contact)
- **Main Navigation:** White background with logo + company name, search icon, hamburger menu
- **Menu Overlay:** Full-screen dark overlay with navigation links, contact info, and CTA
- **Company Name Display:** "Sterling & Associates" with red "&" accent

### Footer (`src/components/Footer.astro`)
- Dark background (`bg-charcoal-900`)
- Logo with company name (inverted colors)
- Multi-column link sections
- Social media links (LinkedIn, Twitter/X, Facebook, YouTube)
- Bottom bar with copyright and legal links

### Button (`src/components/Button.astro`)
- Styles: primary, secondary, outline, ghost
- Sizes: sm, md, lg
- Rounded corners (`rounded-full` for pill style)

### Hero Carousel (`src/components/HeroCarousel.astro`)
- Full-width dark hero section
- Auto-rotating slides (5-second interval)
- Navigation indicators at bottom
- Left/right arrow navigation

## Pages

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Hero carousel, insights, services, industries, purpose, careers, locations |
| About | `/about` | Company story, stats, values, leadership team |
| Services | `/services` | Services listing with features |
| Service Detail | `/services/[slug]` | Individual service page |
| Industries | `/industries` | Industry verticals listing |
| Industry Detail | `/industries/[slug]` | Individual industry page |
| Insights | `/insights` | Blog/news listing (renamed from "blog") |
| Insight Detail | `/insights/[slug]` | Individual article page |
| Careers | `/careers` | Job listings, culture, benefits |
| Locations | `/locations` | Office locations with contact info |
| Contact | `/contact` | Contact form + company contact details |
| FAQ | `/faq` | Frequently asked questions |
| Team | `/team` | Full team listing |
| Privacy | `/privacy` | Privacy policy |
| Terms | `/terms` | Terms of service |

## Content Collections

| Collection | Schema Location | Description |
|------------|-----------------|-------------|
| `services` | Advisory, Tax, Audit, Digital | Service offerings |
| `industries` | Healthcare, Technology, Manufacturing, etc. | Industry verticals |
| `insights` | Blog posts, tax updates, thought leadership | News/articles |
| `team` | Leadership and staff profiles | Team members |
| `testimonials` | Client testimonials | Social proof |
| `faq` | Frequently asked questions | Q&A content |
| `locations` | Office locations | Geographic presence |

## Site Data (`src/data/site.json`)

Key sections:
- `company`: Name, tagline, contact info, founded year
- `branding`: Logo path, color values
- `hero.slides`: Carousel content
- `sections`: Headlines/descriptions for each page section
- `navigation`: Primary nav items, secondary nav, CTA button
- `footer`: Columns, social links, copyright

## Recent Changes

### Form Styling Fix
- Added explicit `bg-white` and `text-charcoal-900` to all form inputs
- Fixed dark input background issue on contact page

### Tailwind Color Classes
- Replaced `bg-charcoal` with `bg-charcoal-900` (proper shade)
- Replaced `border-charcoal-light` with `border-charcoal-700`
- All charcoal colors now use numbered shades (50-950)

### Company Name Spacing
- Updated "Sterling&Associates" to "Sterling & Associates" with proper spacing
- Red "&" accent preserved in both header and footer

## Usage Notes

### For Content Swapper
- Template expects `services`, `industries`, `insights`, `team`, `testimonials`, `faq`, `locations` collections
- `site.json` structure follows the schema in `templates/_schema/site.schema.ts`
- Images should be uploaded to CDN and URLs placed in appropriate fields

### For Customization
- Primary colors can be changed in `tailwind.config.mjs`
- Logo should be replaced in `/public/images/logo.svg`
- Font imports in `BaseLayout.astro` can be updated for different typography
