# Top Programming Languages

Angular dashboard that visualizes the most-used programming languages from the [2024 Stack Overflow Developer Survey](https://survey.stackoverflow.co/2024/technology#1-programming-scripting-and-markup-languages) (60,171 respondents).

**Live demo:** [https://khvostiv.github.io/progLanguages/](https://khvostiv.github.io/progLanguages/)

## What it does

- Loads language popularity data from `public/program-languages.json`
- Shows the data in a table (language + percent)
- Charts the same data with Chart.js via `ng2-charts`
- Lets you switch between a horizontal **bar** chart and a **pie** chart
- Opens an About dialog (Angular Material) with project context

## Tech stack

| Piece | Choice |
| --- | --- |
| Framework | Angular 18 (standalone components) |
| UI | Angular Material |
| Charts | Chart.js + ng2-charts |
| Data | Static JSON served as an app asset |
| Hosting | GitHub Pages (`docs/` on the `docs` branch) |

## Project layout

```
src/app/
  app.component.*          Main layout: table + chart + chart toggle
  about-dialog/            Material dialog with app description
  web.service.ts           HTTP loader for program-languages.json
public/
  program-languages.json   Survey percentages
docs/                      Built site for GitHub Pages
```

## Run locally

```bash
npm install
npm start
```

Open [http://localhost:4200/](http://localhost:4200/).

## Build

```bash
# Standard production build → dist/assignment2-khvostiv/
npm run build

# Build and publish folder for GitHub Pages → docs/
npm run build:pages
```

`build:pages` uses `--base-href /progLanguages/` so asset URLs match the GitHub Pages project URL, then copies the browser build into `docs/` (with a `.nojekyll` file).

## GitHub Pages

Pages is configured to serve from the **`docs` branch**, **`/docs` folder**.

After changing the app:

1. `npm run build:pages`
2. Commit the updated `docs/` output
3. Push to the branch GitHub Pages uses (`docs`, or merge via PR)

Site URL: `https://khvostiv.github.io/progLanguages/`

## Author

Vasilina Khvostikova — [khvostiv@sheridancollege.ca](mailto:khvostiv@sheridancollege.ca)
