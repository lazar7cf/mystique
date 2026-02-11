# Multi-Page Structure for Mystique Salon Website

Convert the existing single-page React landing page into a multi-page application with full routing. All pages will inherit the landing page's elegant sage-green color scheme, modern typography, rounded components, and smooth animations.

## User Review Required

> [!IMPORTANT]
> The implementation will modify `App.tsx` substantially to use React Router. The landing page content remains identical, but now served at `/` route.

> [!NOTE]
> All service pages (11 total) will share a common template component that follows the current design aesthetic.

---

## Proposed Changes

### Infrastructure & Routing

#### [MODIFY] [package.json](file:///c:/Users/Laza/Desktop/Kimi_Agent_Mystique美容登陆页/app/package.json)
- Add `react-router-dom` as a dependency

#### [MODIFY] [main.tsx](file:///c:/Users/Laza/Desktop/Kimi_Agent_Mystique美容登陆页/app/src/main.tsx)
- Wrap `<App />` with `<BrowserRouter>` from react-router-dom

---

### Component Extraction

#### [NEW] [Header.tsx](file:///c:/Users/Laza/Desktop/Kimi_Agent_Mystique美容登陆页/app/src/components/Header.tsx)
Extract navigation from `App.tsx` with:
- Logo with `<Link>` to home
- All nav links using React Router `<Link>` components
- Usluge dropdown with links to `/usluge/:slug` routes
- Mobile menu with router navigation
- Same scroll behavior and styling

#### [NEW] [Footer.tsx](file:///c:/Users/Laza/Desktop/Kimi_Agent_Mystique美容登陆页/app/src/components/Footer.tsx)
Extract footer from `App.tsx` with:
- Quick links using React Router
- Same design and styling

---

### Data Store

#### [NEW] [services.ts](file:///c:/Users/Laza/Desktop/Kimi_Agent_Mystique美容登陆页/app/src/data/services.ts)
Create comprehensive data store with all service content from `MYSTIQUE_SVE_TEKSTOVE.txt`:

| Service | Slug | Hero Image |
|---------|------|------------|
| Frizerske usluge | `frizerske-usluge` | `frizerske-usluge.jpg` |
| Kozmetičarske usluge | `kozmeticarske-usluge` | `kozmeticarske-usluge.jpg` |
| Tretmani lica | `tretmani-lica` | `tretmani-lica.jpg` |
| Tretmani tela | `tretmani-tela` | `liposukcija.jpg` |
| Šminka | `sminka` | `sminka.jpg` |
| Epilacija diodnim laserom | `epilacija` | `epilacija-1.jpg` |
| Solarijum | `solarijum` | `solarijum.jpg` |
| Sauna / Parno kupatilo | `sauna` | `sauna.jpg` |
| Masaže | `masaze` | `hero-massage.jpg` |
| Hidromasažna kada | `hidromasazna-kada` | `hidromasazna-kada.jpg` |
| SPA Day paketi | `spa-day` | `spa-day.jpg` |

---

### Page Components (Landing Page Design Style)

#### [MODIFY] [App.tsx](file:///c:/Users/Laza/Desktop/Kimi_Agent_Mystique美容登陆页/app/src/App.tsx)
Refactor to use React Router `<Routes>`:
- `/` → Home page (current landing sections)
- `/o-nama` → About page
- `/usluge/:slug` → Dynamic service pages
- `/prodavnica` → Shop page
- `/vauceri` → Vouchers page
- `/edukacije` → Education page
- `/kontakt` → Contact page
- `/galerija` → Gallery page

#### [NEW] [ServicePage.tsx](file:///c:/Users/Laza/Desktop/Kimi_Agent_Mystique美容登陆页/app/src/pages/ServicePage.tsx)
Reusable service page template following landing page aesthetics:
- Hero section with large image, rounded corners, blur effects
- Title with `font-serif` styling  
- Description paragraphs with `text-sage-600` styling
- Feature cards with icons in `bg-sage-100` circles
- CTA buttons with `bg-sage-600` and `rounded-full`
- Decorative blur orbs like landing page

#### [NEW] [ONamaPage.tsx](file:///c:/Users/Laza/Desktop/Kimi_Agent_Mystique美容登陆页/app/src/pages/ONamaPage.tsx)
About page with full text content from `MYSTIQUE_SVE_TEKSTOVE.txt` (lines 82-98)

#### [NEW] [ProdavnicaPage.tsx](file:///c:/Users/Laza/Desktop/Kimi_Agent_Mystique美容登陆页/app/src/pages/ProdavnicaPage.tsx)
Shop page with partner brands section (lines 223-257)

#### [NEW] [VauceriPage.tsx](file:///c:/Users/Laza/Desktop/Kimi_Agent_Mystique美容登陆页/app/src/pages/VauceriPage.tsx)
Vouchers page with gift voucher info (lines 260-276)

#### [NEW] [EdukacijePage.tsx](file:///c:/Users/Laza/Desktop/Kimi_Agent_Mystique美容登陆页/app/src/pages/EdukacijePage.tsx)
Education page with 3 course levels (lines 101-180)

#### [NEW] [KontaktPage.tsx](file:///c:/Users/Laza/Desktop/Kimi_Agent_Mystique美容登陆页/app/src/pages/KontaktPage.tsx)
Contact page with form and info (lines 184-219)

#### [NEW] [GalerijaPage.tsx](file:///c:/Users/Laza/Desktop/Kimi_Agent_Mystique美容登陆页/app/src/pages/GalerijaPage.tsx)
Full gallery page using images from `/public/galerija/` and other images

---

## Design Consistency Guidelines

All pages will follow these design patterns from the landing page:

```css
/* Colors */
bg-sage-100, bg-sage-600, bg-sage-800, text-sage-700

/* Typography */
font-serif for headings, font-medium for labels

/* Components */
rounded-3xl for cards, rounded-full for buttons
shadow-soft, shadow-glow for hover effects

/* Animations */
animate-slide-up, transition-all duration-500
hover:-translate-y-2 for card interactions
```

---

## Verification Plan

### Automated Tests

```powershell
# Build verification - confirms TypeScript compiles and imports resolve
cd c:\Users\Laza\Desktop\Kimi_Agent_Mystique美容登陆页\app
npm run build
```

A successful build confirms all routing and components are properly configured.

### Manual Verification

After running `npm run dev`:

1. **Homepage Test**: Navigate to `/` - should display landing page unchanged
2. **Dropdown Test**: Hover/click "Usluge" dropdown - all 11 services should appear
3. **Service Page Test**: Click each service link - page loads with correct content and styling
4. **Standalone Pages Test**: 
   - Click "O nama" → About page content displays
   - Click "Prodavnica" → Shop page with partner brands
   - Click "Vaučeri" → Voucher info page
   - Click "Edukacije" → 3 education levels display
   - Click "Kontakt" → Contact form and info
   - Click "Galerija" → Full gallery page
5. **Consistency Test**: Verify all pages have Header and Footer
6. **Mobile Test**: Open mobile menu, verify all navigation works
7. **Browser Navigation**: Test back/forward buttons work correctly
