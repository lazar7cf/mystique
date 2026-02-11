# Mystique Salon Multi-Page Website Implementation

## Summary
Convert single-page React landing page into a multi-page application with routing. Create all service pages under "Usluge" dropdown (11 services), plus standalone pages (O nama, Prodavnica, Edukacije, Vaučeri, Kontakt, Galerija). All pages must maintain the existing landing page design style.

## Checklist

### Setup & Infrastructure
- [/] Install `react-router-dom` dependency
- [ ] Configure `BrowserRouter` in `main.tsx`
- [ ] Create `services.ts` data store with all service content
- [ ] Extract `Header.tsx` component with router links
- [ ] Extract `Footer.tsx` component with router links

### Page Components (Using Landing Page Design Style)
- [ ] Refactor `App.tsx` to use Routes
- [ ] Create reusable `ServicePage.tsx` template component
- [ ] Create `ONamaPage.tsx` (About page)
- [ ] Create `ProdavnicaPage.tsx` (Shop page)
- [ ] Create `VauceriPage.tsx` (Vouchers page)
- [ ] Create `EdukacijePage.tsx` (Education page)
- [ ] Create `KontaktPage.tsx` (Contact page)
- [ ] Create `GalerijaPage.tsx` (Gallery page)

### Service Pages (11 total - using ServicePage template)
- [ ] Frizerske usluge (`/usluge/frizerske-usluge`)
- [ ] Kozmetičarske usluge (`/usluge/kozmeticarske-usluge`)
- [ ] Tretmani lica (`/usluge/tretmani-lica`)
- [ ] Tretmani tela (`/usluge/tretmani-tela`)
- [ ] Šminka (`/usluge/sminka`)
- [ ] Epilacija diodnim laserom (`/usluge/epilacija`)
- [ ] Solarijum (`/usluge/solarijum`)
- [ ] Sauna / Parno kupatilo (`/usluge/sauna`)
- [ ] Masaže (`/usluge/masaze`)
- [ ] Hidromasažna kada (`/usluge/hidromasazna-kada`)
- [ ] SPA Day paketi (`/usluge/spa-day`)

### Navigation Updates
- [ ] Update navbar dropdown links to use React Router
- [ ] Update all nav links to use React Router
- [ ] Update footer links to use React Router
- [ ] Update mobile menu navigation

### Testing & Verification
- [ ] Build passes successfully
- [ ] All pages render correctly with consistent design
- [ ] Navigation works between all pages
- [ ] Mobile menu functions properly
- [ ] Browser back/forward buttons work correctly
