---
title: "Installing Still"
slug: "installing-still"
draft: False
publishedDate: 2026-07-23
introduction: |
  Every website begins somewhere. Installing Still takes only a few minutes, but it's also an opportunity to understand the ideas behind the project before changing it into something of your own.
excerpt: "A gentle introduction to setting up Still and making it your own."
thumbnail: "/images/thumbnail--02.webp"
thumbnailCaption: "The first command is a beginning."
categories: ['Guides']
highlight: True
---

# Installing Still

Every website has a beginning.

Sometimes it starts with a sketch in a notebook. Sometimes it's a folder named `new-project` that quietly grows over the course of several years. More often than not, it begins with a single command in a terminal.

Still is no different.

Although this guide will help you install the theme, it's also an invitation to explore it. Before changing the colors, replacing the typography, or deleting components, spend a few minutes understanding how everything fits together. The project is intentionally small, and that simplicity is one of its greatest strengths.

## Requirements

Still is built with Astro, a modern framework for content-focused websites.

Before getting started, make sure you have a recent version of Node.js installed. If you already use Astro, you're ready to go.

## Clone the repository

Start by downloading the repository.

```bash
git clone https://github.com/your-username/still.git
```

Move into the project directory.

```bash
cd still
```

The folder structure is intentionally uncomplicated. Most files live exactly where you would expect them to.

If you're curious, take a moment to browse through the project before installing anything.

## Install the dependencies

Next, install the project's dependencies.

```bash
npm install
```

Or, if you prefer another package manager:

```bash
pnpm install
```

or

```bash
yarn
```

The installation should only take a minute.

Unlike many modern web projects, there aren't hundreds of moving parts to understand before you can begin writing.

## Start the development server

Now you're ready to run the site locally.

```bash
npm run dev
```

Open the address shown in your terminal—usually <http://localhost:4321>—and you should see the homepage.

At this point, the hardest part is already behind you.

## Explore before changing

It can be tempting to replace everything immediately.

A different font.

Another color palette.

A redesigned homepage.

Those changes can certainly improve the site for your own needs, but consider reading through the project first. The components are intentionally small, and every layout exists for a reason.

Understanding those decisions often makes changing them easier.

## Writing your first essay

Still is designed around content collections, making every article a simple Markdown file.

Creating a new essay is as straightforward as adding another document to the appropriate folder.

```text
src/
└── content/
    └── essays/
        └── my-first-essay.md
```

Inside that file, begin with the frontmatter.

```yaml
---
title: "My First Essay"
slug: "my-first-essay"
publishedDate: 2026-07-23
---
```

Then simply start writing.

There are no databases to configure.

No administration panel to learn.

No proprietary editor standing between you and your words.

Just plain text.

## Images

Images can live alongside your writing without becoming the center of attention.

Whether you're publishing photography, illustrations, or diagrams, the goal isn't to fill every page with visuals. Sometimes a single well-placed image says enough.

Still assumes that words lead and images support.

## Make it yours

This repository is a starting point, not a destination.

Replace the homepage.

Create new layouts.

Add collections.

Remove features you don't need.

Good open-source software should feel comfortable being changed.

## A note on simplicity

As websites grow, they naturally become more complex.

That's normal.

The challenge is allowing complexity to emerge only when it's needed.

Still begins with the smallest useful foundation it can offer. Every additional feature is a choice rather than a requirement.

Hopefully, that makes the project easier to understand—not only today, but months or years from now.

## Publish

Eventually there comes a moment when there's nothing left to configure.

Your first essay exists.

The homepage feels like yours.

The typography has settled into place.

That's the moment to publish.

Not because the website is finished, but because it never really will be.

A personal website is less like a product and more like a garden. It grows a little at a time, changes with the seasons, and reflects the person tending it.

Still simply gives you a quiet place to begin.