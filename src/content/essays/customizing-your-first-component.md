---
title: "Customizing Your First Component"
slug: "customizing-your-first-component"
draft: False
publishedDate: 2026-07-29
introduction: |
    Every website starts as someone else's.

    The goal isn't to keep it that way.

    Today we'll make your first change to Still and, hopefully, remove the fear of editing someone else's code.
excerpt: "Learn how components work in Still by making your very first customization."
thumbnail: "/images/thumbnail--06.webp"
thumbnailCaption: "A single stone changes the whole garden."
categories: ['Documentation']
highlight: False
---

# Customizing Your First Component

One of my favorite moments when learning something new is the first time I realize:

*"Oh... I can change this."*

It doesn't matter if it's a website, a bicycle, or a loaf of bread.

The moment you stop treating something as untouchable is the moment it starts becoming yours.

That's what we're going to do today.

## Components are just pieces

Still is built from lots of small components.

Some display text.

Some create spacing.

Some organize layouts.

Some combine everything into larger sections.

Rather than building one enormous page, we build lots of little things that fit together.

Think of them like LEGO.

Or furniture.

A chair doesn't know it's inside a living room.

It only knows how to be a chair.

Components work the same way.

## Start small

Your first customization shouldn't be redesigning the homepage.

Or rewriting the navigation.

Or changing every font.

Pick something small.

Really small.

For example:

- Change the footer text.
- Adjust the spacing between two sections.
- Replace a heading.
- Change a button label.

Small wins build confidence.

Confidence builds websites.

## Finding the component

Let's imagine we want to change the footer.

Open:

```text
src/components/sections/Footer.astro
```

You'll see something that probably looks intimidating for about thirty seconds.

Then you realize...

It's mostly HTML.

With a little Astro.

Maybe some JavaScript.

Nothing too mysterious.

## Read before editing

One habit that's helped me tremendously over the years:

Read a file once before touching it.

Don't immediately start typing.

Scroll.

Notice the imports.

Notice the component structure.

Notice the names.

Ask yourself:

*"What is this file responsible for?"*

The answer is usually simpler than you think.

## Change some text

Find a sentence.

Replace it.

Save.

Your browser should update automatically.

Congratulations.

You've just modified your first Astro component.

No build step.

No exporting.

No uploading.

Just save.

I still think that's delightful.

## Experiment

Now change it again.

Try something ridiculous.

Make every heading say:

> Bananas.

Or make the footer quote your favorite philosopher.

Or your grandma.

Or your dog.

The point isn't to keep the change.

The point is to become comfortable making one.

## Undoing mistakes

Here's something every developer learns.

Breaking things is inevitable.

Keeping them broken isn't.

If you accidentally delete half a component...

Undo.

If that doesn't work...

Git remembers.

That's one of the reasons version control exists.

Not because we're careless.

Because we're curious.

## Understanding imports

At the top of most components you'll see something like:

```astro
import Section from "@/components/primitives/Section.astro";
import Stack from "@/components/primitives/Stack.astro";
import Text from "@/components/primitives/Text.astro";
```

Think of imports as borrowing tools.

Instead of rewriting the same code everywhere, components simply reuse each other.

That's why changing one primitive often changes dozens of pages.

It's a wonderful superpower.

Use it carefully.

## A note on copying code

One temptation you'll encounter is copying an entire component just to change one little thing.

Try not to.

Whenever possible, modify what's already there.

Or make the component more flexible.

Copying code is easy.

Maintaining two copies forever is not.

## Your website should stop looking like mine

Remember what I said in the first article?

Please don't keep Still looking like Still.

Seriously.

I love seeing people fork my projects.

I love it even more when I can barely recognize them afterwards.

Different colors.

Different layouts.

Different typography.

Different personalities.

That's the whole point.

A theme should be a starting point.

Not a destination.

## Keep asking "What if?"

One of the best ways to learn is through tiny questions.

What if this heading were centered?

What if these cards stacked differently?

What if there was more breathing room?

What if this section disappeared entirely?

Every one of those questions teaches you something.

Not because you read the answer.

Because you built it.

## Coming up next

Now that you've made your first customization, it's time to understand the smallest building blocks that make Still possible.

We'll begin with the **Primitives**—components like `Section`, `Stack`, `Text`, and `Link`.

They're simple.

Elegant.

And once you understand them, you'll understand most of the theme.