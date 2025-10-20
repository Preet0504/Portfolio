# 3D Developer Portfolio

## Overview
A stunning 3D developer portfolio website built with React, Three.js, and Tailwind CSS. Features immersive 3D models, smooth animations, and an interactive contact form.

## Tech Stack
- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite
- **3D Graphics**: Three.js with React Three Fiber and Drei
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Email Service**: EmailJS
- **Other Libraries**: 
  - react-router-dom (routing)
  - react-vertical-timeline-component (timeline display)
  - react-parallax-tilt (interactive tilt effects)

## Project Structure
```
├── public/               # Static assets (3D models, textures, images)
│   ├── desktop_pc/      # Desktop 3D model and textures
│   └── planet/          # Planet 3D model and textures
├── src/
│   ├── assets/          # Images and icons
│   ├── components/      # React components
│   │   ├── canvas/      # 3D canvas components (Ball, Computers, Earth, Stars)
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Tech.jsx
│   │   └── Works.jsx
│   ├── constants/       # Static data and configuration
│   ├── hoc/            # Higher-order components
│   ├── utils/          # Utility functions (animations)
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── package.json
├── vite.config.js      # Vite configuration
└── tailwind.config.cjs # Tailwind CSS configuration
```

## Features
- 🖥️ Customizable 3D hero section with desktop model
- 🎨 Interactive experience and work sections with animations
- 🔮 3D skills section showcasing technologies
- 📱 Fully responsive design
- 📧 Contact form with EmailJS integration
- 🌍 3D Earth model in contact section
- ⭐ Dynamic 3D star field background
- 🎭 Smooth animations throughout using Framer Motion

## Environment Variables
The contact form uses EmailJS. To enable it, you need to set up the following environment variables:

- `VITE_APP_EMAILJS_SERVICE_ID` - Your EmailJS service ID
- `VITE_APP_EMAILJS_TEMPLATE_ID` - Your EmailJS template ID
- `VITE_APP_EMAILJS_PUBLIC_KEY` - Your EmailJS public key

## Development
- **Dev Server**: Runs on port 5000
- **Hot Module Replacement**: Enabled via Vite
- **Host**: Configured for 0.0.0.0 to work in Replit environment

## Recent Changes
- **October 20, 2025**: Performance & SEO Optimizations
  - **Performance Improvements:**
    - Implemented code splitting with React.lazy for all non-critical components
    - Deferred Three.js StarsCanvas with 2-second delay to reduce initial bundle
    - Lazy loaded EarthCanvas within Contact component
    - Added lazy loading to all project images (loading="lazy")
    - Optimized Vite build: manual chunking for react-vendor, three-vendor, animation-vendor
    - Configured terser minification with console/debugger removal for production
  - **SEO Improvements:**
    - Added semantic HTML: header, main, section tags with proper ARIA labels
    - Implemented proper heading hierarchy with IDs and aria-labelledby
    - Added comprehensive meta tags: description, keywords, author
    - Added Open Graph tags: og:title, og:description, og:url, og:site_name
    - Added Twitter Card meta tags
    - Added JSON-LD structured data (Schema.org Person)
    - Added canonical URL
  - **Code Cleanup:**
    - Removed unused imports (old company logos, unused 3D components)
    - Cleaned up component exports
    - Organized imports efficiently
- **October 20, 2025**: Initial Replit setup
  - Configured Vite to run on port 5000 with host 0.0.0.0
  - Set up HMR for Replit's proxy environment
  - Created project documentation

## User Preferences
None set yet.

## Customization Notes
To personalize this portfolio:
1. Update content in `src/constants/index.js` (services, experiences, projects, etc.)
2. Replace 3D models in `public/` directory
3. Update images in `src/assets/`
4. Modify colors in `tailwind.config.cjs`
5. Set up EmailJS credentials for contact form functionality
