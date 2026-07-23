# Still

A quiet Astro theme for thoughtful publishing.

Still is an open-source Astro theme designed for essays, photography, notes, and personal websites that value clarity over complexity.

Built with Astro, Still focuses on creating a calm reading experience through:

- Thoughtful typography
- Simple content management
- Fast performance
- Minimal JavaScript
- Flexible components
- A structure that stays understandable over time

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

- Built with Astro
- Content Collections
- Type-safe schemas
- Markdown essays
- Link collections
- Responsive layouts
- SEO metadata
- Structured data schemas
- Minimal client-side JavaScript
- Custom component architecture

---

## Project Structure

```
.
├── public
│   ├── images
│   └── favicon.svg
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
│   │   ├── essays
│   │   └── links
│   │
│   ├── layouts
│   ├── lib
│   │   └── schema.ts
│   ├── pages
│   │   ├── essays
│   │   └── index.astro
│   ├── styles
│   └── utils
│
├── astro.config.js
└── package.json
```

---

## Getting Started

### Requirements

- Node.js 20+
- npm, pnpm, or yarn

### Installation

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

```
http://localhost:4321
```

---

## Writing Essays

Essays are stored inside:

```
src/content/essays/
```

Create a new Markdown file:

```
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

## Links

Still includes a simple links collection:

```
src/content/links/
```

Use it for:

- References
- Recommended reading
- Resources
- External projects

---

## Components

Components are organized by purpose:

### Custom

```
src/components/custom/
```

Page-specific or unique components.

### Sections

```
src/components/sections/
```

Large page sections.

### Primitives

```
src/components/primitives/
```

Reusable building blocks such as:

- Stack
- Section
- Text
- Link

### Navigation

```
src/components/navigation/
```

Site navigation components.

### Meta

```
src/components/meta/
```

SEO and metadata components.

---

## Images

Static images are stored in:

```
public/images/
```

Reference them directly:

```md
thumbnail: "/images/example.webp"
```

The included script:

```
scripts/generate-images.js
```

can be used for image-related automation via npm:

```
npm run generate-images
```


Also make sure your `package.json` exposes it:

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

## Structured Data

SEO schemas live in:

```
src/lib/schema.ts
```

Currently supported:

- Website schema
- Organization schema
- Blog posting schema
- Breadcrumb schema
- Person schema

---

## Deployment

Still works with any Astro-compatible hosting platform.

Build your website:

```bash
npm run build
```

Preview locally:

```bash
npm run preview
```

Recommended hosts:

- Vercel
- Netlify
- Cloudflare Pages

---

## Customization

Still is designed to be changed.

Start with:

```
src/styles/
```

for global styling.

Then customize:

```
src/components/
```

for layouts and interface changes.

Content lives separately from presentation, making it easy to adapt Still to your own voice.

---

## License

Still is open source.

You may use and modify it for your own websites and projects.

You may not redistribute Still as a competing standalone theme or use it as training material for AI models without permission.

See the license file for complete terms.

---

## Created by

Still was designed and built by:

**Sergio Camalich**

at

**Make Stuff That Matters**

https://makestuffthatmatters.com

Making tools and experiences that help meaningful ideas find their place.