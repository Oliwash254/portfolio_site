# Oliver Shaban — Portfolio

A modern, animated personal portfolio built with React 19 + Vite, showcasing AI/ML, data science, and full-stack development work.

## Tech Stack

- React 19
- Vite 6
- Plain CSS (no framework dependency — styles live in `src/index.css`)

## Project Structure

```
oliver-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx        # Main portfolio component (all sections)
│   ├── main.jsx        # React entry point
│   └── index.css       # Global styles, fonts, animations
├── index.html
├── package.json
├── vite.config.js
└── .gitignore
```

## Local Development

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

The build output goes to `dist/`.

---

## Push to GitHub

If you haven't already, create an empty repository on GitHub (don't initialize it with a README/license — keep it empty), then from this project folder run:

```bash
git init
git add .
git commit -m "Initial commit: portfolio site"
git branch -M main
git remote add origin https://github.com/Oliwash254/YOUR_REPO_NAME.git
git push -u origin main
```

Replace `YOUR_REPO_NAME` with whatever you name the new repo (e.g. `portfolio`).

---

## Deploy — Vercel (recommended, free)

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.
2. Click **Add New → Project**.
3. Select your portfolio repo from the list and click **Import**.
4. Vercel auto-detects Vite — leave the default build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**. In about a minute you'll get a live URL like `oliver-portfolio.vercel.app`.
6. Optional: add a custom domain under Project → Settings → Domains.

Every future push to `main` will auto-deploy.

## Deploy — Netlify (alternative)

1. Go to [netlify.com](https://netlify.com) and sign in with GitHub.
2. **Add new site → Import an existing project**, pick your repo.
3. Build command: `npm run build`, Publish directory: `dist`.
4. Deploy.

## Deploy — GitHub Pages (alternative)

1. Install the gh-pages helper: `npm install -D gh-pages`
2. In `package.json`, add:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. In `vite.config.js`, set `base: '/YOUR_REPO_NAME/'`.
4. Run `npm run deploy`.

---

## Things to Customize Before Going Fully Live

- **Contact form**: currently shows a success message but does not actually send anywhere. Wire it up with [Formspree](https://formspree.io), [EmailJS](https://www.emailjs.com), or a small FastAPI backend before relying on it for real client inquiries.
- **Testimonials**: the four testimonials are placeholders — swap in real client feedback once available.
- **Fiverr / Upwork link**: update the placeholder `@olivershaban` handle in the Contact section with your real profile URLs.
- **Project demo links**: each project card links to its GitHub repo. Add live demo URLs once any of these are deployed.
