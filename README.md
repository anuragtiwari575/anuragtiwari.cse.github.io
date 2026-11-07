# Dr. Anurag Tiwari — Academic Website

An Astro-based, research-focused academic website designed for GitHub Pages.

## 1. Before publishing

1. Create a GitHub repository named `anuragtiwari.cse.github.io`.
2. In `astro.config.mjs`, replace `YOUR-GITHUB-USERNAME` with your actual GitHub username.
3. Keep `base: "/anuragtiwari.cse.github.io"` for a project site. If you later rename the repository to `YOUR-GITHUB-USERNAME.github.io`, change `base` to `"/"`.
4. Review the biography, affiliation, email and external profile links in `src/pages/index.astro`.
5. Verify every publication and metric before making the website public.

## 2. Run locally

```bash
npm install
npm run dev
```

## 3. Deploy with GitHub Pages

In the repository, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source. Push the repository; the included workflow builds and deploys the site.

## 4. Add a publication

Create a new `.mdx` file in `src/content/publications/`, following `publication-template.mdx`. Add a corresponding entry in `src/data/publications.js` (create the file if you want to switch to a data-driven publication listing) or add a publication card to the publications section in `src/pages/index.astro`.

For each paper, provide its title, author list, venue, year, DOI, abstract, paper link, code repository and dataset link. Only upload PDFs when publisher and co-author permissions allow it. Prefer linking to the publisher's DOI page or an accepted manuscript in an authorised repository.

## 5. Images

- `public/images/sau-campus.png`: campus hero background
- `public/images/profile-outdoor.jpeg`: main profile portrait
- `public/images/profile-conference.jpeg`: conference / academic activities portrait

## 6. Important

The initial site uses conservative placeholder text for details that still need confirmation. Replace the sample contact address, profile links, contact details and biography before deployment. Do not publish unpublished manuscripts, restricted datasets, confidential code or material without the relevant permissions.
