# GitHub Pages Deployment

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

## Configuration

### 1. Vite Configuration
The [`vite.config.ts`](vite.config.ts) file has been updated with the `base` path set to `/test_dive_sea/`:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/test_dive_sea/',
  // ... rest of config
})
```

**Note:** If your repository name is different, update the `base` path to match your repository name.

### 2. GitHub Actions Workflow
The deployment pipeline is defined in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). This workflow:

- Triggers on push to `main` or `master` branches
- Builds the project using `npm run build`
- Deploys the `dist` folder to GitHub Pages

### 3. Package Scripts
A deploy script has been added to [`package.json`](package.json):

```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

## Setup Instructions

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Build and deployment**, select **GitHub Actions** as the source
4. Save the settings

### Step 2: Update Base Path (if needed)

If your repository name is different from `MorozovaIP`, update the `base` path in [`vite.config.ts`](vite.config.ts:8):

```typescript
base: '/your-repo-name/',
```

### Step 3: Push to Main Branch

The workflow will automatically trigger when you push to the `main` or `master` branch:

```bash
git add .
git commit -m "Enable GitHub Pages deployment"
git push origin main
```

### Step 4: Monitor Deployment

1. Go to the **Actions** tab in your GitHub repository
2. Click on the "Deploy to GitHub Pages" workflow run
3. Wait for the workflow to complete (usually takes 1-2 minutes)
4. Your site will be available at: `https://your-username.github.io/test_dive_sea/`

## Manual Deployment (Optional)

If you prefer to deploy manually, you can use the `gh-pages` package:

1. Install the package:
```bash
npm install -D gh-pages
```

2. Build the project:
```bash
npm run build
```

3. Deploy:
```bash
npm run deploy
```

## Troubleshooting

### Build Fails
- Check the Actions tab for error logs
- Ensure all dependencies are installed correctly
- Verify the build works locally with `npm run build`

### 404 Errors
- Verify the `base` path in [`vite.config.ts`](vite.config.ts:8) matches your repository name
- Ensure GitHub Pages is enabled and the workflow completed successfully
- Check that the `dist` folder is being uploaded correctly

### Assets Not Loading
- The `base` path configuration ensures all assets are loaded correctly
- If you encounter issues, check the browser console for asset loading errors
- Verify that the `base` path ends with a forward slash `/`

## Workflow Details

The deployment workflow consists of two jobs:

### Build Job
- Checks out the repository code
- Sets up Node.js environment
- Installs dependencies with `npm ci`
- Builds the project with `npm run build`
- Uploads the `dist` folder as an artifact

### Deploy Job
- Downloads the build artifact
- Deploys to GitHub Pages using the official GitHub Action
- Requires the `pages: write` and `id-token: write` permissions

## Permissions

The workflow requires the following permissions (already configured in the workflow file):

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

These permissions are automatically granted when using the official GitHub Actions for Pages.

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vite.dev/guide/static-deploy.html)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
