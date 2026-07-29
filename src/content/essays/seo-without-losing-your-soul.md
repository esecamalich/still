---
title: "SEO Without Losing Your Soul"
slug: "seo-without-losing-your-soul"
draft: False
publishedDate: 2026-07-29
introduction: |
    Search Engine Optimization has accumulated a bit of a bad reputation.

    Mostly because so much of it has become focused on pleasing algorithms instead of helping people.

    Fortunately, good SEO doesn't have to feel like that.
excerpt: "Learn how Still handles SEO and why writing for humans remains the best optimization strategy."
thumbnail: "/images/thumbnail--11.webp"
thumbnailCaption: "A clear path is easier to follow."
categories: ['Documentation']
highlight: False
---

# SEO Without Losing Your Soul

Let's get something out of the way.

SEO is important.

But it's probably less important than you think.

There was a time when people could game search engines by stuffing keywords into every paragraph.

Or hiding text at the bottom of a page.

Or buying thousands of questionable backlinks from equally questionable websites.

Thankfully, those days are mostly behind us.

Today, good SEO looks remarkably similar to...

Good writing.

## Write for humans first

This is, by far, the most important advice I can give you.

Don't write for Google.

Write for the person who searched Google.

Those are two very different audiences.

Search engines have become surprisingly good at recognizing genuinely helpful content.

If your article solves someone's problem clearly and honestly, you've already done most of the work.

## Still handles the boring parts

One of the reasons I built Still was so I wouldn't have to think about the same SEO details every single time I published something.

Things like:

- Page titles
- Meta descriptions
- Open Graph metadata
- Canonical URLs
- Structured data

Those should happen automatically whenever possible.

The less repetitive work you have to do, the more energy you have left for writing.

## Titles matter

Imagine these two articles.

> Thoughts

and

> How to Publish an Astro Website to Netlify

Which one tells you what you're about to read?

Exactly.

Your title should make a promise.

Then your article should keep it.

That's good writing.

It also happens to be good SEO.

## Excerpts aren't just summaries

Every essay in Still includes an excerpt.

```yaml
excerpt: "Learn how to publish your Astro website to Netlify in just a few minutes."
```

This text often appears in:

- Search results
- Social media previews
- Lists of articles

Think of it as an invitation.

Someone should be able to read it and immediately understand whether your article is worth opening.

## Structured data

Inside Still you'll find:

```text
src/lib/schema.ts
```

This file generates structured data using Schema.org.

If you've never heard of structured data before, don't worry.

Think of it as labels that help search engines understand what they're looking at.

For example:

"This page is a blog post."

"This page belongs to a website."

"This person wrote the article."

Humans don't see most of it.

Search engines do.

## Images deserve attention too

Every article includes a thumbnail.

```yaml
thumbnail: "/images/my-photo.webp"
```

Alongside it comes a small caption.

```yaml
thumbnailCaption: "The morning arrives quietly."
```

Most readers won't consciously notice those captions.

I still think they're worth writing.

Little moments of care tend to accumulate.

## URLs should stay simple

Good URLs are wonderfully boring.

Compare:

```text
/2026/07/post?id=8493
```

with:

```text
/writing-your-first-essay
```

One tells you something.

The other tells you everything.

Choose the second.

Your future self will appreciate it.

## Don't chase keywords

One phrase I've grown to dislike is:

*"Keyword density."*

It encourages people to repeat the same words over and over.

Real conversations don't work that way.

Neither should your writing.

If your article genuinely answers a question, the relevant words will naturally appear.

Trust yourself.

## Internal links

One of the simplest ways to improve your website is linking your own articles together.

For example:

If someone is reading about publishing to Netlify...

Link them to the installation guide.

If they're reading about Markdown...

Link them to writing essays.

You're helping readers continue learning.

Search engines appreciate that too.

More importantly...

Humans do.

## Fast websites help everyone

Still ships very little JavaScript.

That's intentional.

Fast websites aren't just good for SEO.

They're good for people.

Especially those using older computers.

Slower internet connections.

Or simply less patience.

Performance is an accessibility feature.

## Don't obsess over scores

Sooner or later you'll discover tools that give your website a score.

92.

98.

100.

They're useful.

They're not the goal.

A perfectly optimized website nobody enjoys reading is still a bad website.

Always remember why you're here.

You're building something worth reading.

The metrics come second.

## The best SEO strategy

Want to know the strategy that's worked best for me over the years?

Keep publishing.

One thoughtful article every month will outperform dozens of AI-generated posts you barely remember writing.

The internet rewards consistency far more often than perfection.

And fortunately...

Consistency is something entirely within your control.

## What's next?

By now you've learned how to build, customize, publish, and optimize Still.

There's only one thing left.

Making it unmistakably yours.

In the final guide we'll talk about evolving the theme over time, contributing back to the project, and why I genuinely hope your version of Still ends up looking nothing like mine.