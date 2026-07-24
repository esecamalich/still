# Still

**View the live demo:**
https://still.makestuffthatmatters.com/

A quiet Astro theme for thoughtful publishing.

Still is an open-source Astro theme designed for essays, photography, notes, and personal websites that value clarity over complexity.

Built with Astro, Still focuses on creating a calm reading experience through:

* Thoughtful typography
* Simple content management
* Fast performance
* Minimal JavaScript
* Flexible components
* A structure that stays understandable over time

Created by Sergio Camalich at [Make Stuff That Matters](https://makestuffthatmatters.com).

---

## Philosophy

The web does not always need more features.

Still is built around the idea that a website can be a quiet place for ideas to exist.

Instead of competing for attention, it creates room for reading.

The goal is simple:

**A website that disappears behind the content.**

---

## Features

* Built with Astro
* Content Collections
* Type-safe schemas
* Markdown essays
* Link collections
* Responsive layouts
* SEO metadata
* Structured data schemas
* Minimal client-side JavaScript
* Custom component architecture
* Reusable layout primitives
* Optimized image workflow

---

## Project Structure

```text
.
├── public
│   ├── fonts
│   ├── images
│   └── favicon.png
│
├── scripts
│   └── generate-images.js
│
├── src
│   ├── components
│   │   ├── custom
│   │   ├── meta
│   │   ├── navigation
│   │   ├── primitives
│   │   └── sections
│   │
│   ├── content
│   │   ├── config.ts
│   │   ├── essays
│   │   └── links
│   │
│   ├── layouts
│   │   └── BaseLayout.astro
│   │
│   ├── lib
│   │   └── schema.ts
│   │
│   ├── pages
│   │   ├── essays
│   │   └── index.astro
│   │
│   ├── styles
│   └── utils
│       └── generateSEO.ts
│
├── LICENSE
├── README.md
├── astro.config.js
└── package.json
```

---

# Getting Started

## Requirements

* Node.js 20+
* npm, pnpm, or yarn

---

## Installation

Clone the repository:

```bash
git clone https://github.com/esecamalich/still.git
```

Move into the project:

```bash
cd still
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Your website will be available at:

```text
http://localhost:4321
```

---

# Configuration

Before deploying, update the site configuration.

---

## Site URL

Set your production URL in:

```text
astro.config.js
```

Update the `site` property:

```js
export default defineConfig({
  site: "https://yourdomain.com",
});
```

This value is used by Astro for:

* Canonical URLs
* Sitemap generation
* Structured data
* SEO metadata

If you fork Still, replace the default theme URL with your own domain before publishing.

---

## SEO

SEO configuration lives in:

```text
src/utils/generateSEO.ts
```

Update:

* Site name
* Default description
* Default social sharing image
* Production domain

The SEO component lives in:

```text
src/components/meta/SEOHead.astro
```

It handles:

* Title tags
* Meta descriptions
* Open Graph metadata
* Twitter cards
* Canonical URLs
* Robots directives

Recommended default files:

```text
public/images/
├── favicon.png
└── still.webp
```

`still.webp` is used as the default social sharing image.

Replace it with your own image when adapting Still.

---

# Writing Essays

Essays are stored inside:

```text
src/content/essays/
```

Create a new Markdown file:

```text
my-essay.md
```

Example:

```md
---
title: "A Quiet Beginning"
slug: "a-quiet-beginning"
publishedDate: 2026-01-01
excerpt: "A short introduction."
thumbnail: "/images/thumbnail.webp"
thumbnailCaption: "A moment of stillness."
categories: ["Essays"]
highlight: false
---

Your essay begins here.
```

---

# Links

Still includes a lightweight links collection:

```text
src/content/links/
```

Use it for:

* References
* Recommended reading
* Resources
* External projects

Each link is stored as a Markdown file.

Example:

```md
---
title: Astro
url: https://astro.build
status: published
---
```

Available statuses:

* `inbox` — saved but not publicly displayed
* `published` — visible on the website
* `archived` — hidden

Only published links appear publicly.

---

# Components

Components are organized by purpose.

---

## Custom

```text
src/components/custom/
```

Page-specific or unique components.

---

## Sections

```text
src/components/sections/
```

Large page sections and content blocks.

---

## Primitives

```text
src/components/primitives/
```

Reusable building blocks such as:

* Stack
* Section
* Text
* Grid
* Masonry
* Image

---

## Navigation

```text
src/components/navigation/
```

Site navigation components.

Customize navigation inside:

```text
src/components/navigation/SiteNavBar.astro
```

Navigation can be disabled on individual pages:

```astro
<BaseLayout navigation={false}>
```

---

## Meta

```text
src/components/meta/
```

SEO and metadata components.

---

# Images

Static images are stored in:

```text
public/images/
```

Reference them directly:

```md
thumbnail: "/images/example.webp"
```

The included image script:

```text
scripts/generate-images.js
```

can be run with:

```bash
npm run generate-images
```

Make sure your `package.json` includes:

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "generate-images": "node scripts/generate-images.js"
  }
}
```

---

# Fonts

Still includes Inter as the default typeface.

Fonts are stored in:

```text
public/fonts/
```

To replace fonts:

1. Add your font files
2. Update preload links in:

```text
src/layouts/BaseLayout.astro
```

3. Update typography variables in:

```text
src/styles/
```

---

# Structured Data

Schemas live in:

```text
src/lib/schema.ts
```

Currently supported:

* Website schema
* Organization schema
* Blog posting schema
* Breadcrumb schema
* Person schema
* FAQ schema

Schemas can be customized per page through `BaseLayout` props.

---

# Deployment

Still works with any Astro-compatible hosting platform.

The included configuration uses the Netlify adapter.

If you deploy elsewhere, replace or remove the adapter in:

```text
astro.config.js
```

Build your website:

```bash
npm run build
```

Preview locally:

```bash
npm run preview
```

Recommended hosts:

* Vercel
* Netlify
* Cloudflare Pages

---

# Customization

Still is designed to be changed.

Start with:

```text
src/styles/
```

for global styling.

Then customize:

```text
src/components/
```

for layouts and interface changes.

Content lives separately from presentation, making it easy to adapt Still to your own voice.

---

# License

Still is released under the MIT License with Commons Clause restrictions.

You may:

* Use Still for personal websites
* Modify the source code
* Create websites for clients

You may not:

* Sell Still as a standalone Astro theme
* Redistribute Still as a competing template or theme product
* Offer Still as a hosted service where the primary value is providing the software itself
* Use Still's source code as training data for AI models without permission

See the `LICENSE` file for complete terms.

---

# Created by

Still was created by:

**Sergio Camalich**

at:

**Make Stuff That Matters**

https://makestuffthatmatters.com

Making tools and experiences that help meaningful ideas find their place.