---
title: "Building Pages with Sections"
slug: "building-pages-with-sections"
draft: False
publishedDate: 2026-07-29
introduction: |
    If primitives are the bricks, sections are the rooms.

    They're where your website begins to take shape—not as individual pieces, but as complete experiences.
excerpt: "Learn how Sections are built in Still and how to customize or create your own."
thumbnail: "/images/thumbnail--08.webp"
thumbnailCaption: "A room is simply a collection of thoughtful choices."
categories: ['Documentation']
highlight: False
---

# Building Pages with Sections

By now you've probably realized something about Still.

It isn't made from giant templates.

It's made from lots of small pieces working together.

Primitives become sections.

Sections become pages.

Pages become websites.

It's a surprisingly pleasant way to build.

## Where sections live

You'll find them here:

```text
src/components/sections/
```

Unlike the primitives, these components actually know what they're responsible for.

For example:

```text
Bio.astro
Footer.astro
Hero.astro
Essays.astro
Photography.astro
Links.astro
```

Each one exists to solve a single problem.

Nothing more.

## Think in sections

One of the biggest shifts when designing websites is learning to stop thinking in pages.

Instead, think in sections.

A homepage isn't one giant file.

It's a sequence of independent ideas.

For example:

- Hero
- Introduction
- Essays
- Photography
- Bio
- Footer

Each could exist without the others.

That's exactly why they're separate components.

## A page is surprisingly simple

If you open one of the pages inside `src/pages`, you'll notice something interesting.

Most pages are remarkably short.

Something like:

```astro
<Hero />

<Essays />

<Photography />

<Bio />

<Footer />
```

That's it.

The page isn't responsible for *how* those sections work.

Only *which* ones appear.

I like that separation.

It makes the page read almost like an outline.

## Rearranging the homepage

Want the Bio above the Essays?

Move it.

Want Photography first?

Move it.

Want to delete an entire section?

Delete it.

That's the beauty of keeping sections independent.

Experimenting becomes almost effortless.

## Removing sections

Here's a secret.

You don't have to use every component that ships with Still.

In fact...

I encourage you not to.

If you don't have photography to share...

Remove the Photography section.

If you don't need a links page...

Delete it.

A website becomes stronger every time it stops pretending to be something it isn't.

## Adding your own

Eventually you'll want a section that doesn't exist.

Perfect.

Create one.

Maybe:

```text
Projects.astro
```

Or:

```text
Now.astro
```

Or:

```text
Bookshelf.astro
```

There are no rules.

Just remember to keep each section focused.

One responsibility.

One idea.

## Building from primitives

Open almost any section and you'll notice something familiar.

```astro
<Section>
    <Stack>
        <Text />
        <Text />
    </Stack>
</Section>
```

That's the pattern you'll see over and over.

Sections don't reinvent layout.

They simply compose primitives.

This is one of my favorite things about component-based design.

Each level builds on the one below it.

## Resist giant components

When you're just starting out, it's tempting to create one enormous component that does everything.

I've done it.

Most developers have.

Six months later...

Nobody wants to touch it.

Instead, ask yourself:

> Can this become two smaller sections?

Usually the answer is yes.

Smaller components are easier to test.

Easier to understand.

And much easier to rearrange later.

## Design follows content

Sometimes people ask me:

> "Which section should come first?"

My answer is always the same.

The one that matters most.

Don't organize your homepage because another website did.

Organize it around the story you're trying to tell.

A photographer's homepage shouldn't look like a software developer's.

A writer's shouldn't look like an agency's.

Still gives you pieces.

How you arrange them is entirely up to you.

## Your homepage should evolve

One mistake I made for years was treating the homepage like it was carved into stone.

It isn't.

Every few months, ask yourself:

Does this still represent what I'm doing?

If not...

Change it.

Websites are living things.

They should grow alongside the people who make them.

## Less really is more

Whenever I feel tempted to add another section, I try asking myself a different question.

What could I remove?

It's surprising how often deleting something improves a website more than adding something new.

Still was built around that idea.

Not minimalism for the sake of aesthetics.

Minimalism in service of clarity.

## What's next?

You've learned how pages are assembled.

Now it's time to make them feel like your own.

In the next guide we'll explore the styling system behind Still—colors, typography, spacing, and the small design decisions that quietly shape the reading experience.