# Wenxi's Blog

A modern blog powered by [11ty (Eleventy)](https://www.11ty.dev/).

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:8080`

### Building for Production

```bash
npm run build
```

The built site will be in the `_site` directory.

## Writing New Posts

Create a new Markdown file in the `_posts` directory with the following format:

```markdown
---
title: "Your Post Title"
date: 2024-01-01
layout: post.njk
permalink: /your-post-url.html
description: "A brief description of your post"
---

Your post content here in Markdown format...
```

## Project Structure

```
.
├── _includes/          # Layout templates
│   └── layouts/       # Base and post layouts
├── _posts/            # Blog posts (Markdown)
├── about/             # About page
├── assets/            # CSS and static assets
├── index.njk          # Home page template
└── .eleventy.js       # 11ty configuration
```

## Features

- ✅ Modern static site generator (11ty)
- ✅ Markdown-based posts
- ✅ Responsive design
- ✅ Dark mode support
- ✅ Fast build times
- ✅ Easy to maintain

## Deployment

The `_site` directory contains the static files ready for deployment. You can deploy to:

- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

For GitHub Pages, you can use GitHub Actions to automatically build and deploy.

