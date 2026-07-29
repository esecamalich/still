---
title: "Writing Your First Essay"
slug: "writing-your-first-essay"
draft: False
publishedDate: 2026-07-29
introduction: |
    The best part about building your own website isn't the design.

    It's the moment you publish your very first piece of writing.

    Let's make that happen.
excerpt: "Learn how to create your first essay with Markdown, frontmatter, images, and categories."
thumbnail: "/images/thumbnail--03.webp"
thumbnailCaption: "Write one page before dreaming of a thousand."
categories: ['Documentation']
highlight: False
---

# Writing Your First Essay

You've got Still running.

The homepage loads.

Everything works.

Now it's time for the reason this theme exists in the first place.

Writing.

Not configuring.

Not tweaking colors.

Not hunting down the perfect font.

Writing.

## Where essays live

Every essay lives inside:

```text
src/content/essays/
```

Each article is a single Markdown file.

That's it.

No database.

No "New Post" button.

No visual editor.

Just plain text.

I happen to think that's a wonderful thing.

Markdown files are portable, future-proof, and easy to back up. If Astro disappeared tomorrow, your writing would still belong to you.

## Create a new file

Inside `src/content/essays`, create a new file.

Let's call it:

```text
my-first-essay.md
```

You can name it whatever you'd like, but I recommend keeping filenames lowercase and using hyphens instead of spaces.

It'll make your future self happy.

## Every essay begins with frontmatter

At the very top of every file is a block called **frontmatter**.

It looks like this:

```yaml
---
title: "My First Essay"
slug: "my-first-essay"
draft: false
publishedDate: 2026-07-29
introduction: |
    Every website begins with a blank page.

    This one begins with a few words.
excerpt: "My very first essay published with Still."
thumbnail: "/images/my-photo.webp"
thumbnailCaption: "The first sentence changes everything."
categories: ['Essays']
highlight: false
---
```

Think of the frontmatter as information *about* your article.

The title.

The publication date.

The thumbnail.

The categories.

It's everything the website needs before it ever reads the first paragraph.

## Now write

After the frontmatter comes the fun part.

Just...

Write.

```md
The cursor has a funny way of making us overthink things.

We worry about finding the perfect opening sentence.

The perfect structure.

The perfect conclusion.

Here's a secret.

None of that matters if the page stays empty.

Write the first sentence.

The second one usually knows where to go.
```

That's all there is to it.

Seriously.

## Markdown isn't scary

If you've never used Markdown before, you'll pick it up in about ten minutes.

Headings:

```md
# Heading 1

## Heading 2

### Heading 3
```

Bold:

```md
**Bold**
```

Italic:

```md
*Italic*
```

Links:

```md
[Visit Astro](https://astro.build)
```

Images:

```md
![](/images/my-photo.webp)
```

Lists:

```md
- First
- Second
- Third
```

That's already enough to write almost anything.

## Choosing categories

Categories help organize your writing.

For example:

```yaml
categories:
- Essays
- Photography
```

Or maybe:

```yaml
categories:
- Documentation
```

Don't spend too much time designing the perfect taxonomy.

Your writing will naturally tell you what categories it needs.

## Highlighting essays

Some articles deserve a little extra attention.

Maybe they're your favorites.

Maybe they're important introductions.

Maybe they're simply the ones you're most proud of.

Set:

```yaml
highlight: true
```

and Still will feature them accordingly.

Use it sparingly.

When everything is highlighted, nothing is.

## Drafts

Working on something you're not ready to publish?

Easy.

```yaml
draft: true
```

That's it.

The article stays in your project without appearing publicly.

Personally, I keep lots of unfinished ideas this way.

Some stay drafts for months.

Others for years.

Writing doesn't always happen on a schedule.

## Images

Place your images inside:

```text
public/images/
```

Then reference them directly.

```yaml
thumbnail: "/images/my-photo.webp"
```

Or inside the article:

```md
![](/images/my-photo.webp)
```

Simple paths.

No uploads.

No media library.

Just files.

## Don't edit the examples

One recommendation.

Don't overwrite the essays that come with Still.

Instead, create your own.

The examples are there to teach you how the theme works.

Your website should slowly become less like mine and more like yours.

Delete the examples when you're ready.

They've done their job.

## Publish often

The biggest mistake I see people make isn't poor writing.

It's waiting too long.

We imagine that every article needs to become a masterpiece.

It doesn't.

Some of my favorite essays began as half-formed ideas.

Publishing gives ideas room to grow.

The internet has a funny way of introducing your work to exactly the people who needed to read it.

But first...

You have to click publish.

## Up next

You've written your first essay.

Now let's share it with the world.

In the next guide we'll deploy Still to Netlify, connect your GitHub repository, and publish your website so anyone, anywhere, can read what you've made.

Because ideas deserve to leave your laptop.