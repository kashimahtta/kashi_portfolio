# Kashi Mahtta — Portfolio (React + Vite + Tailwind)

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build -> dist/
npm run preview
```
Requires Node 18+.

## Update content
Everything (text, skills, experience, projects, links) is in `content.js`.
- Add LinkedIn: set `profile.linkedin`.
- Add verified project links: add `github:` / `live:` to a project (buttons only render when present).
- Hero background: replace `public/portrait.png` with your portrait image.
- Contact photo: replace `public/contact.png` with your contact-section image.
- About carousel: replace `public/aboutme1.jpeg`, `public/aboutme2.jpeg`, and `public/aboutme3.jpeg` with your photos.
- Hero video (optional): place `public/hero.mp4` and add a <video> behind the grid in `Hero.jsx`.
- Contact form uses `mailto:`; wire a service (Formspree/EmailJS) later if you want real submissions.
