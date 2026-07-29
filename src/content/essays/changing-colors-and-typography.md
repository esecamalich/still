---
title: "Changing Colors and Typography"
slug: "changing-colors-and-typography"
draft: False
publishedDate: 2026-07-29
introduction: |
    This is where Still stops looking like my website and starts becoming yours.

    You don't need to redesign everything overnight.

    A different font, a new accent color, or slightly more generous spacing can completely change the personality of a website.
excerpt: "Learn how to customize the visual identity of Still through colors, typography, and spacing."
thumbnail: "/images/thumbnail--09.webp"
thumbnailCaption: "The same words feel different in another voice."
categories: ['Documentation']
highlight: False
---

# Changing Colors and Typography

If content is the soul of a website...

Typography is its voice.

And color?

Color is its mood.

These are the two things people notice long before they consciously realize it.

The good news is that they're also some of the easiest things to change.

## Start with restraint

A common temptation when customizing a theme is changing *everything* at once.

New fonts.

New colors.

Rounded corners.

Animations.

Gradients.

Glassmorphism.

Three days later you're wondering why the website suddenly feels... confused.

Instead, try changing one thing at a time.

Observe how it changes the overall experience.

Good design isn't about making lots of decisions.

It's about making a few good ones.

## Where styles live

Most of Still's styling can be found here:

```text
src/styles/
```

This is where you'll find the foundations of the design.

Colors.

Typography.

Spacing.

Utilities.

Depending on how the project evolves, these files may be organized differently, but the philosophy stays the same:

Keep design decisions in one place.

## Choosing colors

The easiest place to start is your accent color.

Maybe it's blue.

Maybe it's green.

Maybe your website doesn't need one at all.

Still intentionally keeps the palette quiet so your content remains the center of attention.

When introducing new colors, ask yourself:

> Does this help the reader?

Or...

> Am I adding it simply because I can?

Those are very different motivations.

## Typography matters more than almost anything

I've spent years obsessing over type.

Not because I'm particularly good at it.

Because it's incredibly important.

A website can have average photography.

Average illustrations.

Average branding.

But if it's pleasant to read...

People stay.

Conversely, the most beautiful design in the world can't save uncomfortable typography.

## Pick one great font

You don't need five fonts.

You probably don't even need two.

One thoughtful typeface, used consistently, is usually enough.

If you do combine fonts, make sure they have different jobs.

Perhaps one for headings.

Another for body copy.

That's usually all you'll need.

## Don't make text too small

This is one trend I hope quietly disappears.

Tiny body text.

Huge amounts of whitespace.

Perfect for screenshots.

Not so great for actual humans.

People came to your website to read.

Help them.

## Spacing is invisible until it's wrong

One of the hardest parts of design is noticing spacing.

When it's good...

Nobody talks about it.

When it's bad...

Everything feels uncomfortable.

Still relies heavily on consistent spacing through components like `Stack` and `Section`.

Rather than manually adding margins everywhere, spacing becomes a shared design language.

That consistency is difficult to notice.

It's also one of the reasons the interface feels calm.

## Resist visual trends

Every year the internet discovers a new aesthetic.

Neobrutalism.

Glassmorphism.

Claymorphism.

Something-else-morphism.

Some trends are genuinely interesting.

Some disappear before you've finished redesigning your homepage.

Whenever I'm unsure whether to follow one, I ask myself a simple question.

> Will this still feel appropriate five years from now?

If the answer is no...

I usually let it pass.

Still wasn't designed to feel trendy.

It was designed to age gracefully.

## Your website should feel like you

One thing I hope you never do is recreate my own color palette exactly.

Or my typography.

Or my spacing.

Use Still as a foundation.

Then slowly replace every design decision until someone visits your website and never once thinks:

*"Oh, that's the Still theme."*

Instead, they should think:

*"This feels like you."*

That's a much better outcome.

## Change one thing today

Here's a little challenge.

Pick exactly one visual change.

Maybe:

- A new typeface.
- A different accent color.
- More generous spacing.
- Slightly larger body text.

Make the change.

Live with it for a day.

Then decide whether it actually improved the experience.

Good design isn't built in giant leaps.

It's built through hundreds of thoughtful, almost invisible decisions.

## Up next

Your website now looks a little more like yours.

Next we'll look beneath the design and explore how Still organizes its content using Astro Content Collections, and why they make publishing with Markdown such a pleasure.