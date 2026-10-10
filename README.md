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
- Add Instagram and WhatsApp: set `profile.instagram` and `profile.whatsapp` to your profile/chat URLs.
- Add verified project links: add `github:` / `live:` to a project (buttons only render when present).
- Hero background: replace `public/portrait.png` with your portrait image.
- About carousel: replace `public/aboutme1.jpeg`, `public/aboutme2.jpeg`, and `public/aboutme3.jpeg` with your photos.
- Hero video (optional): place `public/hero.mp4` and add a <video> behind the grid in `Hero.jsx`.
- Social contact buttons render when their URLs are set on `profile` in `content.js`.
