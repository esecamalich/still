---
title: "Installing Still"
slug: "installing-still"
draft: True
publishedDate: 2026-07-23
introduction: |
  Installing Still takes only a few minutes
excerpt: "An introduction to setting up Still and making it your own."
thumbnail: "/images/thumbnail--02.webp"
thumbnailCaption: "The first command is a beginning."
categories: ['Guides']
highlight: True
---

## Clone the repository

Start by downloading the repository.

```bash
git clone https://github.com/your-username/still.git
```

Move into the project directory.

```bash
cd still
```

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

