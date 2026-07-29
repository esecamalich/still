---
title: "Organizing Your Writing with Content Collections"
slug: "content-collections"
draft: False
publishedDate: 2026-07-29
introduction: |
    One of my favorite things about Astro is that your content isn't trapped inside a database.

    It's just files.

    Which means you own them. Completely.
excerpt: "Learn how Astro Content Collections work and how Still organizes essays, links, and future content."
thumbnail: "/images/thumbnail--10.webp"
thumbnailCaption: "Order gives every idea a place to rest."
categories: ['Documentation']
highlight: False
---

# Organizing Your Writing with Content Collections

If you've ever used WordPress, Ghost, or another CMS, you're probably used to writing inside a dashboard.

Click **New Post**.

Fill out a form.

Press **Publish**.

There's nothing wrong with that.

But Astro takes a different approach.

Your content simply lives inside your project.

As files.

Personally, I find that incredibly refreshing.

## What is a Content Collection?

A Content Collection is Astro's way of saying:

> "Everything inside this folder follows the same rules."

For example, Still includes:

```text
src/content/
├── essays/
└── links/
```

Every file inside `essays` represents...

An essay.

Every file inside `links` represents...

A link.

Simple enough.

## Why not just use folders?

Because folders don't know anything.

Astro does.

It knows every essay should have:

- A title
- A publication date
- A slug
- A thumbnail
- Categories

If you accidentally forget one of those fields, Astro lets you know immediately.

That's one of those little features you stop noticing after a while...

Until you work on a project without it.

## Meet the schema

The rules for each collection live inside:

```text
content.config.js
```

You don't need to understand every line.

Just know that this file tells Astro what valid content looks like.

Think of it as a friendly editor looking over your shoulder.

Instead of saying:

> "That paragraph could be better."

It says:

> "Looks like you forgot the published date."

Honestly...

I'll take all the help I can get.

## Every essay follows the same shape

A typical essay begins like this:

```yaml
---
title: "My First Essay"
slug: "my-first-essay"
draft: false
publishedDate: 2026-07-29
introduction: |
    Every story begins somewhere.
excerpt: "A very short summary."
thumbnail: "/images/example.webp"
thumbnailCaption: "The page was already waiting."
categories:
- Essays
highlight: false
---
```

Once you learn this format, writing new articles becomes second nature.

## Markdown is a feature

Every now and then someone asks me:

> "Wouldn't a visual editor be easier?"

Maybe.

For some people.

Personally, I like writing in Markdown because it keeps me focused on the words.

Not the formatting.

No changing fonts.

No adjusting margins.

No wondering if this heading should be 28 pixels instead of 30.

Just writing.

It's surprisingly liberating.

## Your content belongs to you

This is probably my favorite part.

Your essays aren't stored inside someone else's servers.

They're not locked behind an export button.

They're just files.

You can copy them.

Version them.

Back them up.

Open them in almost any editor.

Twenty years from now they'll still be readable.

That's the beauty of plain text.

## Create new collections

Eventually you may decide essays aren't enough.

Maybe you want:

```text
projects/
```

Or:

```text
books/
```

Or:

```text
recipes/
```

Or:

```text
travel/
```

Go for it.

Still isn't trying to dictate how your website should grow.

It's simply giving you a solid foundation.

## Don't over-organize

This is one mistake I've made more than once.

Creating fifteen collections before writing fifteen articles.

Try not to.

Instead...

Let your content teach you how it wants to be organized.

If you've written thirty book reviews...

Maybe it's time for a Books collection.

If you've written one...

An Essays category is probably enough.

The structure should serve the writing.

Not the other way around.

## Keep your writing close

One unexpected side effect of storing your content alongside your code is that everything travels together.

Clone the repository on another computer.

Your writing is there.

Back up the project.

Your writing is there.

Share the repository with a collaborator.

Your writing is there.

No exports.

No migrations.

No surprises.

## Still is just one possible beginning

One day you may outgrow this structure.

I hope you do.

Maybe you'll invent a better way to organize content.

Maybe you'll contribute it back to the project.

That's the nice thing about open source.

Nobody has the final word.

We simply leave things a little better than we found them.

## What's next?

At this point you've learned how Still stores content, how pages are assembled, and how the design is organized.

Now let's make sure people can actually find what you've published.

In the next guide we'll explore SEO, metadata, and structured data—not because search engines deserve all the attention, but because good writing deserves to be discovered.