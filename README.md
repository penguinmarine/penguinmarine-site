# Penguin Marine – static site

Plain HTML/CSS/JS. No build step. Preview locally: `python3 -m http.server` then open http://localhost:8000

## Deploy on GitHub Pages
1. Create a GitHub repo (public for free Pages) and push this folder's contents to `main`.
2. Repo → Settings → Pages → Source: "Deploy from a branch", Branch: `main`, folder `/ (root)`.
3. Same page → Custom domain: `penguinmarine.in` → Save, then tick "Enforce HTTPS" once available.
   (The `CNAME` file in this folder already contains the domain.)

## DNS (Cloudflare) for GitHub Pages
Replace the existing A records for `@` (currently the Hostinger IP) with these four, and point `www` to GitHub:
- A  `@`  185.199.108.153
- A  `@`  185.199.109.153
- A  `@`  185.199.110.153
- A  `@`  185.199.111.153
- CNAME `www` → `<github-username>.github.io`
Cloudflare SSL/TLS mode: Full (strict). Start with the grey cloud (DNS only) until GitHub issues its certificate, then proxy.

## Contact
Contact details (phone, WhatsApp, email, address) are in the `#contact` section of `index.html`.
