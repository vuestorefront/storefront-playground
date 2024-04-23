# Alokai Next.js Storefront Playground

This is a minimal example of the Alokai Storefront using Next.js and Turbo. It includes a simple product listing page and a product detail page, as well as a Storyblok CMS driven homepage.

## Tech Stack

- [Alokai](https://alokai.com/)
- [Next.js](https://nextjs.org/)
- [Turbo](https://turbo.build/)
- [Storyblok](https://www.storyblok.com/)

## Integrations

This monorepo includes the following integrations:

- Fakestore Integration - a custom Fakestore API integration to fetch products and categories
- Storyblok Integration - a custom Storyblok API integration to fetch homepage content

Integrations packages are located in the `packages` directory.

## Getting Started

First, clone the repository:

```bash
git clone git@github.com:vuestorefront/storefront-playground.git
```

Then, install the dependencies:

```bash
cd storefront-playground
npm install
```

Finally, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## What's inside?

This monorepo includes the following packages/apps:

### Apps and Packages

- `apps/storefront`: a Next.js app that uses the Alokai Storefront
- `apps/middleware`: Alokai Connect Middleware for the Storefront
- `packages/fakestore`: a custom Fakestore API integration
- `packages/storyblok`: a custom Storyblok API integration
- `packages/typescript-config`: a custom TypeScript configuration for the monorepo
- `packages/eslint-config`: a custom ESLint configuration for the monorepo

### Build

To build all apps and packages, run the following command:

```
npm build
```

## Useful Links

Learn more about the power of Turborepo:

- [Alokai Documentation](https://docs.alokai.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Alokai Middleware Documentation](https://docs.alokai.com/middleware)
- [Alokai SDK Documentation](https://docs.alokai.com/sdk)
- [Fakestore API](https://fakestoreapi.com/)
- [Storyblok API](https://www.storyblok.com/docs/api/content-delivery/v2)
