---
title: "Publishing Still to Netlify"
slug: "publishing-still-to-netlify"
draft: False
publishedDate: 2026-07-29
introduction: |
    So...

    You've built your website.

    You've written your first essay.

    Now it's time to do the slightly terrifying part:

    Put it on the internet.
excerpt: "Learn how to deploy Still to Netlify using GitHub in just a few minutes."
thumbnail: "/images/thumbnail--04.webp"
thumbnailCaption: "The web begins with sharing."
categories: ['Documentation']
highlight: False
---

# Publishing Still to Netlify

There's something magical about publishing a website.

One moment it exists only on your computer.

The next, it's available to anyone in the world.

Not because you uploaded it to someone else's platform.

Because *you* published it.

Today we're going to make that happen.

## Why Netlify?

There are lots of excellent places to host Astro websites.

Vercel.

Cloudflare Pages.

GitHub Pages.

I happen to like Netlify because it's simple, generous, and works beautifully with Astro.

Even better?

Their free plan is more than enough for most personal websites.

## Step 1: Push your project to GitHub

Netlify needs somewhere to fetch your website from.

GitHub is the easiest option.

Create a new repository.

Then, from inside your project, run:

```bash
git init
git add .
git commit -m "Initial commit"
```

Now connect your repository.

```bash
git remote add origin https://github.com/YOUR_USERNAME/still.git
```

Finally:

```bash
git push -u origin main
```

Your code is now safely stored online.

## Step 2: Create a Netlify account

Head over to:

https://netlify.com

Sign in with GitHub.

It saves a few steps later.

## Step 3: Import your repository

Once you're inside Netlify, click:

**Add new site**

↓

**Import an existing project**

Choose GitHub.

Authorize Netlify if prompted.

Then select your repository.

That's it.

## Step 4: Build settings

Netlify is surprisingly good at detecting Astro projects.

Most likely you'll see something like:

**Build command**

```text
npm run build
```

**Publish directory**

```text
dist
```

If those values aren't there, enter them manually.

Everything else can stay exactly as it is.

## Step 5: Deploy

Click:

**Deploy site**

Now wait.

Seriously.

Don't click anything.

You'll see a stream of build logs flying by.

At first they'll look terrifying.

They're not.

Eventually you'll reach the words every developer loves seeing:

```text
Site is live.
```

Congratulations.

You officially have your own website.

## Every push becomes a deployment

Here's one of the nicest parts about using GitHub together with Netlify.

Remember how we pushed our project earlier?

From now on, every time you do this:

```bash
git add .
git commit -m "Wrote another essay"
git push
```

Netlify automatically notices.

It rebuilds your website.

A minute later...

Your changes are live.

No FTP.

No uploading files manually.

No clicking "Publish."

Just push your changes.

Netlify takes care of the rest.

## A better URL

By default, Netlify gives you something like this:

```text
happy-panda-83b7.netlify.app
```

Cute.

Not exactly memorable.

Fortunately you can change it.

Inside your site's settings, choose:

**Change site name**

Now you'll have something like:

```text
my-awesome-blog.netlify.app
```

Much better.

## Your own domain

Eventually you'll probably want something even nicer.

Something like:

```text
mywebsite.com
```

Or:

```text
sergiocamalich.com
```

Or whatever feels like home.

Buying a domain is surprisingly inexpensive.

Connecting it to Netlify usually takes less than fifteen minutes.

If you've never done it before, don't worry.

We'll cover that in another guide.

## What about HTTPS?

You don't need to do anything.

Netlify automatically provides an SSL certificate.

That little padlock in your browser?

Already taken care of.

## Did something fail?

Sometimes deployments don't work the first time.

That's normal.

Read the build logs.

Nine times out of ten they'll tell you exactly what went wrong.

Common causes include:

- A missing comma
- A typo in your frontmatter
- A missing image
- A failed import
- A dependency that wasn't installed

Every developer has stared at build logs wondering what on earth happened.

Welcome to the club.

## Celebrate

No, seriously.

Take a moment.

Open your website.

Refresh it a few times.

Send the link to a friend.

To your parents.

To your partner.

To yourself.

You've just published something on the web that belongs entirely to you.

Not a social media profile.

Not a page inside somebody else's platform.

Your own website.

That's worth celebrating.

## What's next?

Your website is live.

Now let's make it yours.

In the next guide we'll explore the structure of Still, learn how its components fit together, and start customizing the design to reflect your own personality.

Because the goal isn't to build **my** website.

It's to build **yours**.