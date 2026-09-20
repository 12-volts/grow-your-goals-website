# GitHub Pages Deployment Guide for Grow Your Goals

This document outlines the workflow to build, export, and host the **Grow Your Goals** Next.js website on GitHub Pages under the custom domain `growyourgoals.ie`.

---

## 1. Static Export Configuration

The project is already pre-configured for static export in `next.config.mjs`:
- `output: 'export'`: Tells Next.js to generate production static HTML/CSS/JS outputs instead of expecting a Node.js server.
- `images.unoptimized: true`: Ensures static exports don't rely on runtime Next.js image optimization servers.

---

## 2. Steps to Build and Export Locally

1. Navigate to the website root:
   ```bash
   cd web-site
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Generate the static export:
   ```bash
   npm run build
   ```
   This creates an `out/` folder containing the compiled production assets. Note that `out/CNAME` will automatically be bundled due to the file inside the `public/` folder.

---

## 3. Pushing to GitHub (Sub-repo / Branch Deployment Strategy)

There are two recommended strategies to manage this within your existing repository setup.

### Option A: Using the `gh-pages` Branch (Recommended)
You can deploy the contents of the compiled `out` directory directly to a specific branch called `gh-pages` using the helper package `gh-pages`.

1. Install the tool:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Add a deploy script to your `package.json`:
   ```json
   "scripts": {
     "dev": "next dev",
     "build": "next build",
     "start": "next start",
     "lint": "next lint",
     "predeploy": "npm run build",
     "deploy": "gh-pages -d out -b gh-pages"
   }
   ```
3. Run the command to automatically build and push the compiled code to your remote `gh-pages` branch:
   ```bash
   npm run deploy
   ```

### Option B: GitHub Actions Automated Workflow
Alternatively, create a GitHub Actions workflow in `.github/workflows/deploy.yml` that builds and deploys on every push to the main branch.

---

## 4. Linking `growyourgoals.ie` (DNS Settings)

To direct your custom domain `growyourgoals.ie` to your GitHub Pages hosting, configure your DNS registrar provider with the following settings:

### A. Setup Apex Domain `A Records`
Point the apex domain (`growyourgoals.ie`) to GitHub's global load balancer IP addresses:
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

### B. Setup Subdomain `CNAME Record`
If you wish to route `www.growyourgoals.ie`, add a CNAME record:
- **Type**: `CNAME`
- **Host / Name**: `www`
- **Value / Target**: `<your-github-username>.github.io`

### C. Enable HTTPS on GitHub
1. Go to your GitHub repository on GitHub.com.
2. Click **Settings** -> **Pages** in the left sidebar menu.
3. Ensure the source branch is set to `gh-pages`.
4. Verify that **Custom Domain** shows `growyourgoals.ie`. (The pre-made `CNAME` file handles this config dynamically).
5. Tick the box for **Enforce HTTPS** once the DNS propagation finishes (can take a few minutes up to 24 hours).
