# Quick Start Guide

## 🚀 Getting Started with 11ty

Your blog has been converted to use **11ty (Eleventy)**, a modern static site generator.

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Start Development Server

```bash
npm run dev
```

Visit `http://localhost:8080` to see your blog!

### Step 3: Write a New Post

Create a new file in `_posts/` with this format:

**`_posts/2024-01-15-my-new-post.md`**

```markdown
---
title: "My New Post"
date: 2024-01-15
layout: post.njk
permalink: /my-new-post.html
description: "A brief description"
---

Write your post content here in **Markdown**!
```

### Step 4: Build for Production

```bash
npm run build
```

The built site will be in the `_site/` directory.

## 📁 Project Structure

- `_posts/` - Your blog posts (Markdown files)
- `_includes/layouts/` - HTML templates
- `assets/` - CSS and static files
- `index.njk` - Home page
- `about/` - About page

## ✨ Benefits of 11ty

- ⚡ **Fast** - Builds in milliseconds
- 📝 **Markdown** - Write posts in Markdown
- 🎨 **Flexible** - Use any templating language
- 🔧 **Simple** - No complex setup needed
- 📦 **Modern** - Actively maintained

## 🆚 What Changed?

- ✅ Posts are now in `_posts/` as Markdown files
- ✅ Templates use Nunjucks (`.njk`)
- ✅ Old HTML files are preserved (you can delete them later)
- ✅ Same beautiful design, easier to maintain!

## 📚 Learn More

- [11ty Documentation](https://www.11ty.dev/docs/)
- [Markdown Guide](https://www.markdownguide.org/)

