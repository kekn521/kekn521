# Ken Lin's portfolio

A buildless, responsive academic portfolio for `https://kekn521.github.io/kekn521/`.

## Preview

Open `index.html` directly in a browser, or run `python3 -m http.server 4173 --bind 127.0.0.1` from this directory, then open `http://127.0.0.1:4173`. No dependency installation or build is required. `portfolio-preview.html` is a portable single-file copy with local CSS, JavaScript, and images embedded; regenerate it after changing source files. The deploy workflow excludes this preview.

## Edit

- `index.html`: biography, publication, academic affiliation, email and section content.
- `styles.css`: pastel-blue visual system and responsive layout.
- `app.js`: research-atlas selections and personal illustrations.
- `assets/`: favicon and research figure.

The contact address is the academic email published in the Vis4GS paper. Update both email links and the displayed address together if needed. First-year standing is time-sensitive and should be updated as studies progress. The project identifies first authorship; add a personal contribution statement when available.

The atlas and personal selectors support native keyboard operation, visible focus, and live announcements. All main content and links remain available without JavaScript. Reduced-motion settings disable smooth scrolling.

## Publish to GitHub Pages

1. Use the public repository `kekn521/kekn521`. Keep its existing profile `README.md`; store these website instructions as `WEBSITE.md`.
2. Upload the site files and `.github/workflows/pages.yml` on branch `main`.
3. In the repository's **Settings → Pages**, select **GitHub Actions** as the publishing source.
4. Run the **Publish portfolio to GitHub Pages** workflow, or push a new commit to `main`.
5. Wait for the deployment to finish, then verify `https://kekn521.github.io/kekn521/`.

The workflow stages only `index.html`, `styles.css`, `app.js`, `.nojekyll`, and `assets/`. Internal documentation is not included in the published site. Fonts are requested from Google Fonts with local font fallbacks. There is no analytics or server-side form.

## Sources

Biographical details and hobbies were supplied by Ken. Publication title, authors, academic email, and figure are from [Vis4GS](https://arxiv.org/html/2606.26985v2). The figure was copied from `Figures/Fig1_Teaser.png` in Ken's local `Vis4GS_preprint.zip`. Acceptance is also listed in the [IEEE VIS 2026 program](https://www.virtual.ieeevis.org/year/2026/program/papers/). Research-in-progress is described broadly without private experimental details.
