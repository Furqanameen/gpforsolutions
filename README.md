# K9 Security Spot - React Clone

A full React.js clone of k9securityspot.co.uk with all pages, routing, images, and content.

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

## Contact Info (from original site)

- Phone: +44 (0) 752 697 7812
- Email: info@k9securityspot.com
- Address: 42 Erriff Drive, RM15 5AW, Essex, London

## Customization

All site content is centralized in `src/data/siteData.js`. 
Edit that file to update contact info, services, images, etc.
# gpforsolutions
