# Counter App - GitHub Pages Deployment Demo

A simple counter web application demonstrating automatic deployment to GitHub Pages with custom domain support.

## Features

- Increment/Decrement counter
- Reset functionality
- Persistent storage using localStorage
- Keyboard shortcuts (Arrow keys, +/-, R for reset)
- Responsive design with gradient background
- Automatic deployment via GitHub Actions

## Live Demo

Once deployed, your site will be available at:
- Default: `https://<your-username>.github.io/<repository-name>/`

## Getting Started

### 1. Push to GitHub

First, create a repository on GitHub (e.g., `test-ghp`), then push this code:

```bash
# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Counter app with GitHub Pages deployment"

# Add your GitHub repository as remote
git remote add origin https://github.com/<your-username>/<repository-name>.git

# Push to main branch
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. In the left sidebar, click **Pages**
4. Under **Build and deployment**:
   - **Source**: Select "GitHub Actions"
   - (This allows the workflow file to handle deployment)
5. Click **Save**

That's it! The GitHub Actions workflow will automatically:
- Trigger on every push to the `main` branch
- Build and deploy your site to GitHub Pages
- Provide the deployment URL in the Actions log

### 3. View Your Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow run called "Deploy to GitHub Pages"
3. Once it completes (green checkmark), your site is live!
4. Access it at: `https://<your-username>.github.io/<repository-name>/`

## How Automatic Deployment Works

The `.github/workflows/deploy.yml` file contains a GitHub Actions workflow that:

1. **Triggers**: Automatically runs on every push to the `main` branch
2. **Permissions**: Has the necessary permissions to deploy to GitHub Pages
3. **Steps**:
   - Checks out your code
   - Configures GitHub Pages settings
   - Uploads your files as an artifact
   - Deploys the artifact to GitHub Pages

**Key Points:**
- Every push to `main` triggers a new deployment
- Deployment typically takes 30-60 seconds
- You can see deployment status in the Actions tab
- No manual steps required after initial setup

## Setting Up a Custom Domain

### Option 1: Using GitHub's Free Domain

You already have a free domain: `<your-username>.github.io`

For this project, the full URL will be:
`https://<your-username>.github.io/<repository-name>/`

### Option 2: Using Your Own Domain

If you have a domain (e.g., `example.com`), follow these steps:

#### A. Configure DNS (at your domain registrar)

**For Apex Domain (example.com):**

Add these A records pointing to GitHub's servers:

```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**For Subdomain (www.example.com or counter.example.com):**

Add a CNAME record:

```
Type: CNAME
Name: www (or counter, or any subdomain)
Value: <your-username>.github.io
```

#### B. Configure GitHub

1. Go to your repository **Settings** > **Pages**
2. Under **Custom domain**, enter your domain (e.g., `example.com` or `www.example.com`)
3. Click **Save**
4. Wait for DNS check to complete (can take up to 24 hours)
5. Once verified, check **Enforce HTTPS** for security

#### C. Create CNAME File (Optional)

The GitHub interface creates this automatically, but you can also add it manually:

Create a file named `CNAME` (no extension) in the root of your repository with your domain:

```
example.com
```

Then commit and push:

```bash
git add CNAME
git commit -m "Add custom domain"
git push
```

## Free Domain Options

If you don't have a domain and want something custom (beyond GitHub's default), here are some free options:

### 1. is-a.dev (Popular for Developers)

- **What**: Free `.is-a.dev` subdomain for developers
- **Example**: `yourname.is-a.dev`
- **How**: Submit a pull request to https://github.com/is-a-dev/register
- **Requirements**: Your site must be hosted on GitHub Pages or similar platforms
- **Free**: Yes, forever
- **Custom**: Yes, you choose the subdomain

### 2. FreeDNS (afraid.org)

- **What**: Free subdomains under various domains
- **Example**: `yourname.mooo.com`, `yourname.42web.io`
- **Website**: https://freedns.afraid.org/
- **Setup**: Create account, register a subdomain, point to GitHub Pages
- **Free**: Yes
- **Variety**: Lots of domain options to choose from

### 3. DuckDNS

- **What**: Free dynamic DNS service
- **Example**: `yourname.duckdns.org`
- **Website**: https://www.duckdns.org/
- **Free**: Yes
- **Note**: Primarily for dynamic IPs, but works with GitHub Pages

### 4. eu.org (Free Domain)

- **What**: Free second-level domains
- **Example**: `yourname.eu.org`
- **Website**: https://nic.eu.org/
- **Free**: Yes
- **Note**: Registration takes a few days for manual approval

### Comparison Table

| Service | Example | Approval Time | Best For |
|---------|---------|--------------|----------|
| GitHub Default | username.github.io | Instant | Quick start |
| is-a.dev | name.is-a.dev | 1-3 days | Developer portfolios |
| FreeDNS | name.mooo.com | Instant | Quick custom subdomain |
| DuckDNS | name.duckdns.org | Instant | Dynamic DNS needs |
| eu.org | name.eu.org | 3-7 days | More professional look |

## Project Structure

```
.
├── index.html          # Main HTML file
├── style.css           # Styling
├── script.js           # Counter logic
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions deployment workflow
├── .gitignore          # Git ignore file
└── README.md           # This file
```

## Customization

Feel free to customize:
- Colors in `style.css` (gradient, button colors)
- Counter step size in `script.js`
- Layout and text in `index.html`

Every change you push to `main` will automatically deploy!

## Troubleshooting

### Site not deploying?

1. Check **Actions** tab for error messages
2. Ensure **Pages** source is set to "GitHub Actions" in Settings
3. Verify the workflow file is in `.github/workflows/deploy.yml`

### Custom domain not working?

1. Verify DNS records are correct at your registrar
2. Wait up to 24 hours for DNS propagation
3. Check GitHub Pages settings for domain verification status
4. Ensure HTTPS enforcement is disabled initially, enable after domain works

### Changes not appearing?

1. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
2. Clear browser cache
3. Check Actions tab to ensure deployment completed
4. Wait a few minutes for CDN cache to update

## Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Custom Domains Guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## License

This project is open source and available for anyone to use and modify.
