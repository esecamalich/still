---
title: "Understanding the Anatomy of Still"
slug: "understanding-the-anatomy-of-still"
draft: False
publishedDate: 2026-07-29
introduction: |
    Before we start changing things, let's first understand them.

    One of my goals with Still wasn't simply to make a beautiful theme.

    It was to make one that another human could actually read.
excerpt: "Learn how Still is organized before customizing your first component."
thumbnail: "/images/thumbnail--05.webp"
thumbnailCaption: "Every house becomes familiar room by room."
categories: ['Documentation']
highlight: False
---

# Understanding the Anatomy of Still

There's an old saying among programmers.

> "Code is read far more often than it's written."

I think about that every time I start a new project.

Because sooner or later, the person reading your code is going to be...

...you.

Six months from now.

After you've forgotten why you built things the way you did.

Still was designed with that future version of ourselves in mind.

Instead of trying to be clever, it tries to be understandable.

Let's take a tour.

## The project at a glance

If you open the project for the first time, you'll see something like this:

```text
public/
scripts/
src/

astro.config.js
content.config.js
package.json
```

It might look intimidating.

It's really not.

Most of your time will be spent inside exactly three folders:

- `src/content`
- `src/components`
- `src/styles`

Everything else mostly exists to support them.

## `src/content`

This is your website.

Not metaphorically.

Literally.

Everything you publish lives here.

```
src/content/
├── essays/
└── links/
```

Whenever you write something new, chances are you're creating a Markdown file inside one of these folders.

No database.

No CMS.

No admin panel.

Just content.

Personally, I find that wonderfully calming.

## `src/components`

Now we're looking at the website itself.

This folder contains every building block that appears on the screen.

You'll notice it's organized into smaller groups.

```text
components/
├── custom/
├── meta/
├── navigation/
├── primitives/
└── sections/
```

Each has a different job.

## Primitives

If Still were a box of LEGO bricks...

These would be the individual pieces.

Things like:

- Text
- Stack
- Link
- Section
- Image

They don't know anything about essays or homepages.

They're simple, reusable building blocks.

Because they're used everywhere, even tiny improvements here benefit the entire project.

## Sections

Sections combine primitives into larger pieces.

Think:

- Hero
- Bio
- Footer
- Essays
- Navigation

If you're redesigning the homepage, this is probably where you'll spend most of your time.

## Navigation

Pretty self-explanatory.

Everything related to menus, navigation bars, and moving around the site lives here.

Keeping navigation separate makes it much easier to experiment later.

## Meta

These components rarely appear on the page itself.

Instead, they help search engines understand your website.

Things like:

- Open Graph images
- SEO tags
- Structured data
- Metadata

Not glamorous.

Very important.

## Custom

Eventually you'll build components that don't really fit anywhere else.

That's what this folder is for.

Think of it as your workshop.

## `src/styles`

Design lives here.

Fonts.

Colors.

Spacing.

Animations.

Everything that gives Still its personality.

The nice thing is that the content doesn't know—or care—what your styles look like.

You can completely redesign the website without touching a single essay.

That's a healthy separation.

## `public`

This folder is wonderfully boring.

Images.

Favicons.

Files you want the browser to access directly.

Put them here.

Reference them normally.

Done.

## `scripts`

Still includes a few small utilities to make repetitive tasks easier.

For example:

```bash
npm run generate-images
```

Small scripts like these aren't the heart of the project.

They're simply there to save you a bit of time.

## Don't memorize everything

A common mistake when learning a new codebase is trying to understand every single file before changing anything.

You don't need to.

Nobody does.

Instead, follow your curiosity.

Want to change the footer?

Open the footer component.

Want to understand typography?

Open the text component.

Learn only what today's problem requires.

Tomorrow's problem will teach you something new.

## Follow the names

One design decision I care deeply about is naming.

Whenever possible, components should tell you what they do simply by reading their names.

`Footer.astro`

Probably the footer.

`Hero.astro`

Probably the hero.

`Text.astro`

Almost certainly text.

It sounds obvious.

It isn't.

I've worked on projects where understanding the folder structure felt like solving a crossword puzzle.

Still tries very hard not to be one of those projects.

## Make one change

Now that you know where things live, here's a little exercise.

Pick something tiny.

Maybe the footer.

Maybe the homepage heading.

Maybe the spacing between two sections.

Change it.

Save the file.

See what happens.

Then change it back.

Understanding grows through small experiments.

Not giant rewrites.

## Up next

Now that you know how Still is organized, we can finally start making it your own.

In the next guide we'll begin with the smallest building blocks of the entire theme: the **Primitives**.

They're simple on their own.

Together, they're what every page in Still is built from.