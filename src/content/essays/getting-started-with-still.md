---
title: "Getting Started with Still"
slug: "getting-started-with-still"
draft: False
publishedDate: 2026-07-29
introduction: |
    Ready to get your hands dirty?

    Good.

    In this guide we'll download Still, run it on your computer, and get you ready to publish your first website. If you've never used Astro before, don't worry—we'll take it one step at a time.
excerpt: "Learn how to install Still, run it locally, and understand its structure."
thumbnail: "/images/thumbnail--02.webp"
thumbnailCaption: "The first command is a beginning."
categories: ['Documentation']
highlight: False
---

# Getting Started with Still

Congratulations!

At this point you've already done the hardest part:

You decided to stop renting your corner of the internet.

Now let's build one instead.

Don't worry if some of this feels unfamiliar. Every web developer, designer, and maker has stared at a terminal wondering if they were about to break their computer.

You're in good company.

## Before we begin

Still is built with [Astro](https://astro.build/), a modern web framework that focuses on content first.

To run it locally, you'll need:

- Node.js (version 20 or newer)
- A code editor (I recommend VS Code)
- Git (optional, but highly recommended)

If you don't have Node.js installed yet, download it from the official website and come back once you're done.

I'll wait.

...

Ready?

Let's go.

## Download Still

The easiest way to get the theme is by cloning the GitHub repository.

Open your terminal and run:

```bash
git clone https://github.com/esecamalich/still.git
```

Then move into the project folder.

```bash
cd still
```

Congratulations.

You now own every single file that makes up your future website.

No subscription required.

## Install the dependencies

Next, install everything the project needs.

```bash
npm install
```

This may take a minute.

Go grab a coffee.

Or tea.

Or stare dramatically out the window while pretending you're in a movie about programmers.

When it's finished, you're ready for the fun part.

## Start the development server

Run:

```bash
npm run dev
```

You should see something similar to this:

```text
Local: http://localhost:4321/
```

Open that address in your browser.

If everything went well...

🎉

You're looking at Still running on your own computer.

Not a screenshot.

Not a demo.

Your own copy.

## Understanding the project

Before changing anything, take a minute to look around.

A project is much less intimidating once you understand where things live.

Here's the important stuff.

### `src/content/essays`

This is where your writing lives.

Every essay is simply a Markdown file.

No databases.

No admin panel.

Just files.

Personally, I love that.

Years from now, you'll still be able to open them with almost any text editor ever made.

## `public/images`

Exactly what it sounds like.

Put your images here.

Reference them in your Markdown like this:

```yaml
thumbnail: "/images/my-photo.webp"
```

Easy.

## `src/components`

This is where the website itself lives.

Navigation.

Buttons.

Sections.

Typography.

Layouts.

We'll explore these later in the documentation, but for now it's enough to know this is where you'll customize the design.

## `src/styles`

Want different colors?

Different fonts?

More spacing?

Less spacing?

This is where you'll spend most of your time.

## Make one tiny change

Before continuing, let's make sure everything is working.

Open the homepage.

Find the title.

Change one word.

Save the file.

Did the browser update automatically?

Perfect.

That little moment is surprisingly important.

You've just experienced one of the nicest parts of modern web development.

Change.

Save.

Refresh.

Repeat.

## A word about breaking things

You're going to break this project.

Probably today.

Definitely eventually.

That's okay.

Actually...

It's encouraged.

The fastest way to understand a codebase is to change it.

Delete something.

Move something.

Rename something.

See what happens.

If everything falls apart, Git is there to save you.

The confidence to experiment is one of the greatest gifts version control gives us.

## Stay curious

As you explore Still, you'll notice that it isn't trying to hide how it works.

There aren't layers upon layers of abstractions.

Most files do exactly what their names suggest.

That isn't an accident.

One of my goals while building this theme was to make it approachable.

Not just usable.

Understandable.

Because once you understand something, you're free to shape it into whatever you need.

## What's next?

Now that Still is running, it's time to actually use it.

In the next guide we'll write our very first essay.

You'll learn how Markdown works, how frontmatter powers your content, how to organize your writing, and why publishing from plain text is still one of the best experiences on the web.

See you there.