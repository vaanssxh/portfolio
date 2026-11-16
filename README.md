# Vansh — Personal Portfolio

A responsive, editorial-style personal portfolio built with **HTML5, CSS3, and vanilla JavaScript**. It has no build step, framework, server, or runtime dependency.

## Project structure

```text
portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── profile.jpg       # Add your own photograph here
    └── favicon.png       # Included monogram favicon
```

## 1. Run locally

1. Download or clone this folder.
2. Add your profile image as described below.
3. Open `index.html` directly in a modern browser.

For a local development server (optional), open the folder in VS Code and use the Live Server extension, or run a simple static server from the folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`. No build or package installation is required.

## 2. Replace the profile photograph

1. Put your photograph in the `assets` folder.
2. Name it **`profile.jpg`** (replace the existing path rather than adding another file).
3. The image is displayed with `object-fit: cover` and `object-position: center 36%` in `style.css`.
4. Adjust `object-position` if needed, for example `center 25%` to move the crop upward.

The page has a designed initials fallback if the image is missing. To use a different filename, update the image `src` in `index.html` and keep the fallback markup.

## 3. Add your projects

The Projects section currently contains three clearly labelled placeholders. They are not presented as completed work.

In `index.html`, find the comment `PROJECT EDITING`. For each `.project-card`:

- Replace the placeholder title and description with accurate project details.
- Update the technology stack in `.project-bottom`.
- Replace the CSS artwork inside `.project-art` with an `<img>` if you have a project screenshot. Store screenshots in `assets/` and use a relative path such as `assets/project-name.jpg`.
- Add a real repository or live-demo link only when one exists. Use an anchor with `target="_blank"` and `rel="noopener noreferrer"`. Do not leave an empty `href` or a fake button.

Duplicate or remove project cards as needed. The grid adapts automatically.

## 4. Update social and contact links

Search `index.html` for the current details and update all matching instances:

- Email: `vanshgrowws@gmail.com` (also used as the form recipient in `script.js`).
- GitHub: `https://github.com/Inddiannerd`.
- LinkedIn: `https://www.linkedin.com/in/vansh-patel-ahd`.

If you change the email address, update the `mailto:` links in `index.html` and the recipient in `script.js`. External profile links already open in a new tab safely.

## 5. Add certificate verification links

Find the comment below the certification list in `index.html`. When you have a genuine verification URL, wrap that certification's title in an anchor, for example:

```html
<h3><a href="YOUR_REAL_VERIFICATION_URL" target="_blank" rel="noopener noreferrer">Certification title</a></h3>
```

Only add links supplied by the issuing platform. No verification URLs are included by default.

## 6. Contact form behaviour

The contact form is mailto-based. Submitting valid fields opens the visitor's configured email application with the recipient, subject, name, reply address, and message prefilled. The visitor must press Send in their email application. The website does **not** transmit or store form submissions and does not claim to have a backend.

If you later want server-side form handling, connect a form service (for example Netlify Forms or Formspree), update the form markup and submission logic, and configure spam protection and privacy information.

## 7. Deploy

### Netlify

1. Sign in to [Netlify](https://www.netlify.com/).
2. Choose **Add new site** → **Deploy manually** (or import the repository from GitHub).
3. Drag the complete `portfolio` folder into the deploy area, or select the Git repository.
4. Set the publish directory to the project root (`.`) if prompted. There is no build command.
5. Deploy. Confirm the profile image and links work on the published URL.

### Vercel

1. Push the `portfolio` folder to a GitHub repository.
2. In [Vercel](https://vercel.com/), choose **Add New** → **Project** and import that repository.
3. Choose **Other** as the framework preset if asked.
4. Leave the build command empty and set the output directory to `.` (project root).
5. Deploy. The root `index.html` is served as a static site.

### GitHub Pages

1. Push the project files to a GitHub repository.
2. Open repository **Settings** → **Pages**.
3. Under Build and deployment, select **Deploy from a branch**.
4. Choose your deployment branch and `/ (root)` folder, then save.
5. Wait for the Pages URL to appear. Keep all asset paths relative so the site works from the repository path.

## Notes

- All styling and interactions are local. Google Fonts are an optional external font request; system fallbacks are defined.
- The mobile menu, section navigation, scroll reveal, reduced-motion support, year display, back-to-top control, and mailto form are implemented in vanilla JavaScript.
- Education and certifications reflect the details supplied for this portfolio. No university name, project history, or certificate verification URLs have been invented.
