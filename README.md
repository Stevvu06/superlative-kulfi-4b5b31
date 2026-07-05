# Välimees OÜ

A one-page marketing site for Välimees OÜ, an Estonian forestry and grounds-work company. It presents the company's
logo/wordmark, an about section, a photo gallery of completed jobs, customer reviews, and a contact section with a
working contact form.

## Tech stack

- [TanStack Start](https://tanstack.com/start) (React 19 + TanStack Router) for routing and server rendering
- Tailwind CSS 4 for styling
- Netlify Forms for serverless contact-form handling
- Deployed on Netlify

## Project structure

- `src/routes/index.tsx` — assembles the single-page layout from the section components
- `src/components/` — `Header`, `Hero`, `About`, `Gallery`, `Reviews`, `Contact`, `Footer`
- `public/__forms.html` — static skeleton so Netlify's build bot can detect the contact form (see AGENTS.md)

## Running locally

```bash
npm install
npm run dev
```

The dev server runs on port 3000 by default. When testing the contact form specifically, use the Netlify CLI
(`netlify dev`) so form submissions are emulated correctly.

## Build

```bash
npm run build
```
