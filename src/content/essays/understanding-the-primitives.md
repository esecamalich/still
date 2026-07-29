---
title: "Understanding the Primitives"
slug: "understanding-the-primitives"
draft: False
publishedDate: 2026-07-29
introduction: |
    If Still were a house, the primitives would be the bricks.

    They're not particularly exciting on their own.

    But together, they're responsible for every page you'll build.
excerpt: "Learn how the primitive components work and why they're the foundation of Still."
thumbnail: "/images/thumbnail--07.webp"
thumbnailCaption: "Strong foundations rarely ask for attention."
categories: ['Documentation']
highlight: False
---

# Understanding the Primitives

Remember when I said Still was built from lots of small pieces?

This is where those pieces live.

```
src/components/primitives/
```

If you're planning to customize Still—and I sincerely hope you are—this folder is one of the best places to start.

Don't worry.

You don't need to understand every component.

In fact, you'll probably only use a handful of them regularly.

## Why primitives exist

Imagine building a website without reusable components.

Every heading would need its own styling.

Every paragraph would have different spacing.

Every page would slowly drift in a different direction.

Eventually you'd spend more time fixing inconsistencies than creating new things.

Primitives solve that problem.

Instead of defining the same styles over and over again, we define them once and reuse them everywhere.

One improvement.

Hundreds of places benefit.

## Section

One of the most common components you'll encounter is `Section`.

It does exactly what its name suggests.

It creates sections.

For example:

```astro
<Section size="sm">
    ...
</Section>
```

Or perhaps:

```astro
<Section
    padding="3xl"
    paddingTop="6xl"
    paddingBottom="none"
>
    ...
</Section>
```

You'll notice that many pages in Still are simply a collection of sections stacked one after another.

That's intentional.

Consistency makes layouts feel calm.

## Stack

If I had to choose one favorite component in the entire project...

It might be `Stack`.

Stack solves one of the oldest problems in CSS.

Spacing.

Instead of manually adding margins everywhere, Stack simply arranges its children with consistent spacing.

For example:

```astro
<Stack gap={{ base: 'lg' }}>
    <Heading />
    <Paragraph />
    <Button />
</Stack>
```

That's much easier to reason about than remembering which element has a bottom margin and which one doesn't.

Personally, I use Stack constantly.

## Text

Typography is the heart of Still.

The `Text` component keeps it consistent.

Instead of writing custom classes every time you need a heading or paragraph, you simply describe what you're trying to say.

For example:

```astro
<Text as="h1">
    Hello.
</Text>
```

Or:

```astro
<Text variant="subtle">
    This is supporting text.
</Text>
```

Notice the difference.

You're describing meaning.

Not appearance.

That's a subtle but important distinction.

## Link

Links are more complicated than they look.

Some point to another page.

Others open a new tab.

Some are internal.

Some are external.

The Link component handles those little details so you don't have to think about them every time.

Instead of repeating yourself, you simply write:

```astro
<Link href="/essays">
    Essays
</Link>
```

Simple.

Exactly as it should be.

## Why this matters

At this point you might be thinking:

*"Couldn't I just write HTML instead?"*

Absolutely.

Nothing is stopping you.

But after building your tenth page...

Your twentieth...

Your fiftieth...

You'll appreciate having components that already know how to behave.

Consistency isn't restrictive.

It's freeing.

## Reading components

One thing I'd encourage you to do is simply open these files.

Not because you need to edit them.

Because they're surprisingly approachable.

Read one.

Close it.

Open another.

You'll quickly notice patterns emerging.

Good component libraries tend to feel repetitive.

That's actually a compliment.

## Changing a primitive

Here's where things get interesting.

Suppose you change the way `Text` renders headings.

Every heading across the website changes.

That's powerful.

It's also a good reminder to move carefully.

Small changes in primitive components can have very large consequences.

Fortunately...

That's exactly what we want.

One thoughtful improvement.

A better website everywhere.

## Don't create primitives too early

A mistake I used to make all the time was creating reusable components before I actually needed them.

I'd think:

*"Surely I'll reuse this someday."*

Most of the time...

I didn't.

Instead, I now wait until I notice the same pattern appearing two or three times.

Then I extract it into a primitive.

The code becomes simpler because it earned the abstraction.

Not because I predicted it.

## The philosophy behind the code

You'll notice that most primitives are remarkably small.

That's deliberate.

I don't want a `Text` component with fifty different options.

Or a `Section` component that tries to solve every layout imaginable.

Small components are easier to understand.

Easier to debug.

And much easier to replace when your own ideas evolve.

Remember:

Still is meant to disappear behind your work.

The same is true for its components.

## Up next

Now that you understand the smallest building blocks, we're ready to move one level higher.

In the next guide we'll explore **Sections**—the larger pieces that combine these primitives into complete pages.

That's where Still really starts to take shape.