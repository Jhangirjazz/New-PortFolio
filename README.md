# Muhammad Jhangir — Developer Portfolio

A personal developer portfolio built on top of the [developerFolio](https://github.com/saadpasta/developerFolio) template.

**Live:** https://jhangirjazz.github.io/New-PortFolio/

## Stack

React 16 · react-scripts 5 · Sass · Lottie animations · GitHub GraphQL API · deployed to `gh-pages`.

## Sections

Greeting · Skills (with software-skill icons and proficiency bars) · Education · Work Experience ·
Open Source / GitHub profile · Projects (with technology logo strips) · Achievements &
Certifications · Blogs · Talks · Contact — each one driven by a single config file and
individually toggleable.

## Editing content

Everything you normally want to change lives in one place:

| What | Where |
| --- | --- |
| Name, title, resume, social links, skills, education, experience, projects, contact | `src/portfolio.js` |
| Global colors and dark/light theme values | `src/_globalColor.scss` |
| Resume PDF | `src/containers/greeting/Resume2.pdf` |
| Technology logo icons on the project cards | `src/assets/images/tech/` |
| Site title, meta description, Open Graph / Twitter cards, JSON-LD | `public/index.html` |
| Images and logos | `src/assets/images/` |

Every section in `src/portfolio.js` has a `display: true/false` flag, so a section can be turned off
without touching any component.

## Running locally

```bash
npm install
npm start      # http://localhost:3000
npm run build  # production build into ./build
npm run lint   # eslint
npm run format # prettier
```

## Optional: GitHub "Open Source" section

The GitHub profile / pinned-repo cards are populated at build time by `fetch.js`, which calls the
GitHub GraphQL API. Copy `env.example` to `.env` and set:

```env
GITHUB_USERNAME=Jhangirjazz
REACT_APP_GITHUB_TOKEN=ghp_yourPersonalAccessToken   # scope: read:user
USE_GITHUB_DATA=true
```

If `USE_GITHUB_DATA` is not `"true"` the fetch is skipped, and the Contact section is rendered in
place of the GitHub profile card.

## Deployment

The live site is served from the **`gh-pages`** branch.

- **Automatic:** pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes
  `build/` to `gh-pages`.
- **Manual:**

```bash
npm run deploy   # runs predeploy (build) then pushes build/ to gh-pages
```

`package.json` → `"homepage"` must match the published URL, otherwise asset paths break.

## License

Inherited from the original template — see `LICENSE`.

