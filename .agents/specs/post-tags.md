# Post tags on home page

Status: live
Owner: @wenxichen
Last updated: 2026-05-31

## Problem

Readers browsing the home page cannot tell at a glance whether a post is about
AI, mindfulness, or another theme. Tags should appear inline with each entry
in the chronological post list.

## Decision

Add an optional `tags` array to post front matter and Substack data entries.
The home page renders each tag as a small badge next to the existing date /
language / Substack badges.

Supported tags (initial set):

| Tag | CSS class | Use |
| --- | --- | --- |
| `AI` | `.tag-ai` | AI / ML / agent topics |
| `mindfulness` | `.tag-mindfulness` | Body awareness, meditation, inner practice |

Tags are passed through the existing `combinedFeed` filter so native posts and
Substack links share the same rendering path. Posts without `tags` show no
badges (backward compatible).

### Front matter

```yaml
tags: [AI]
tags: [mindfulness]
tags: [AI, mindfulness]
```

### Substack JSON

```json
{
  "title": "...",
  "url": "...",
  "date": "YYYY-MM-DD",
  "tags": ["AI"]
}
```

## Files touched

- `.eleventy.js` — `tagSlug` filter; `tags` on `combinedFeed` items
- `index.njk` — badge rendering in `.post-meta`
- `assets/main.css` — `.post-tags`, `.tag-badge`, per-tag colors + dark mode
- `_posts/*.md` — `tags` on listed originals
- `_data/substack.json` — `tags` on AI Substack entries
- `README.md` — author docs

## Out of scope (for now)

- Tag filter pages (e.g. `/tags/ai/`)
- RSS `<category>` elements
