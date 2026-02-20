# Adrin T Paul Portfolio

Personal developer portfolio built with Next.js to showcase experience, projects, technical skills, credentials, and contact links.

## About This Project

This is a single-page portfolio website focused on clean UI, smooth interactions, and clear technical storytelling.  
It highlights:

- Professional timeline and impact metrics
- Featured projects with stack and outcomes
- Skills grouped by domain
- Education and certifications
- Contact actions (email, resume, social profiles)

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS v4
- GSAP (section animations and scroll-based motion)
- Lucide React (button and action icons)

## Key UI Features

- Responsive layout with reusable section components
- Light/Dark theme toggle with persisted preference
- Scroll progress indicator
- Animated CTA/social buttons with icon motion
- Subtle scroll-triggered content reveals

## Project Structure

```text
app/
  components/
    Hero.js
    Timeline.js
    Projects.js
    Skills.js
    Credentials.js
    Contact.js
    Navbar.js
    Footer.js
    DarkModeToggle.js
    ScrollProgress.js
  data/
    timeline.js
    projects.js
  globals.css
  page.js
public/
  resume/
    Adrin_Paul_resume_2yoe_.pdf
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open `http://localhost:3000`

## Available Scripts

- `npm run dev` - start local development server
- `npm run build` - create production build
- `npm run start` - run production server
- `npm run lint` - run ESLint checks

## Customization

- Update personal/project content in:
  - `app/data/timeline.js`
  - `app/data/projects.js`
  - `app/components/Skills.js`
  - `app/components/Credentials.js`
  - `app/components/Contact.js`
- Update theme and button animation styles in `app/globals.css`.

