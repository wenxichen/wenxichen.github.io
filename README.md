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
lang: en
---

Your post content here in Markdown format...
```

### Bilingual Posts (English / 中文)

Write the original post normally, then add a translation source file. Both languages appear on **one page** — the original is shown by default, and readers can toggle to the translation.

**Original post** (published page):

```markdown
---
title: "Your Post Title"
date: 2024-01-01
layout: post.njk
permalink: /your-post-url.html
description: "A brief description"
lang: en
translation_key: your-post-slug
original: true
---

Your original content...
```

**Translation source** (not published separately — `permalink: false`):

```markdown
---
title: "你的文章标题"
layout: false
permalink: false
lang: zh
translation_key: your-post-slug
---

译文内容...
```

- `translation_key` must match on both files
- `lang` is `en` or `zh`
- `original: true` on the post you wrote; the translation file uses `layout: false` and `permalink: false`
- The original is shown by default; a toggle button switches to the translation on the same page
- Translation files can live alongside originals in `_posts/` (e.g. `my-post-zh.md`)

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
- ✅ Bilingual posts (English / 中文) with inline toggle on the same page
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

