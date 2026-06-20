# brandonvtaylor.com

Personal site / resume for [brandonvtaylor.com](https://brandonvtaylor.com), built with
[Astro](https://astro.build) and hosted on AWS Amplify.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
```

## Build

```sh
npm run build    # static output -> dist/
npm run preview  # serve the production build locally
```

## Deploy

Pushing to `main` triggers an AWS Amplify build (see [`amplify.yml`](./amplify.yml)),
which publishes `dist/` to the CDN behind brandonvtaylor.com.
