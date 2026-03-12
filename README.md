# Garrison Apex Forte Solutions Ltd

A React.js website for Garrison Apex Forte Solutions Ltd - Bespoke security solutions in the UK.

## Pages Included

- **Home** (`/`) — Hero slider, About section, Services grid, Contact form
- **About** (`/about`) — Company info, Vision/Mission/Values, Client types
- **Services** (`/services`) — Full services listing with descriptions
- **Service Detail** (`/services/:slug`) — Individual page for each of 7 services
- **Contact** (`/contact`) — Contact form, map, office hours, contact info
- **404** — Custom not found page

## Tech Stack

- React 18
- React Router v6
- Google Fonts (Montserrat + Open Sans)
- Pure CSS (no external UI libraries)

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start
```

Visit: http://localhost:3000

## Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── App.jsx                  # Main app with routing
├── styles.css               # Global styles & CSS variables
├── index.js                 # Entry point
├── components/
│   ├── Navbar.jsx           # Fixed navbar with dropdown
│   └── Footer.jsx           # Footer with CTA strip
├── pages/
│   ├── HomePage.jsx         # Landing page
│   ├── AboutPage.jsx        # About us
│   ├── ServicesPage.jsx     # Services listing
│   ├── ServiceDetailPage.jsx # Individual service
│   └── ContactPage.jsx      # Contact with form & map
└── data/
    └── siteData.js          # All content, images, services data
```

## Contact Info

- Phone: 0044 74 1751 5211
- Email: info@gpforsolutions.com
- Address: 2 First Floor Room No 7, Gainsborough Road, London E11 1HT

## Customization

All site content is centralized in `src/data/siteData.js`. 
Edit that file to update contact info, services, images, etc.

# Garrison Apex Forte Solutions Ltd
