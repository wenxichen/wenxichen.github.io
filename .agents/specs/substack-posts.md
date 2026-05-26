# Substack posts on home page

Status: live
Owner: @wenxichen
Last updated: 2026-05-25

## Problem

Wenxi also publishes writing on Substack
([wenxichen.substack.com](https://wenxichen.substack.com/)). Today those posts
are invisible from the main GitHub Pages blog. Readers who land on
`wenxichen.github.io` have no signal that other writing exists elsewhere.

We want to surface Substack posts on the blog without:

- Copying / mirroring the full content (it lives canonically on Substack).
- Building a polling/scraping pipeline (the list changes infrequently and a
  manual list is fine).
- Disturbing the existing 11ty `_posts/` workflow or rules around not
  touching original post content.

## Decision

Maintain a small hand-curated `_data/substack.json` file listing each
Substack post (title, URL, date, optional description). Render those entries
**inline** with native `_posts/` entries on the home page, sorted by date,
distinguished with a `Substack` badge (modeled on the existing `中/EN`
`.lang-badge`). The title link points to the canonical Substack URL and
opens in a new tab. The same entries are also included in `/feed.xml` so
RSS subscribers see them.

Rationale:

- Data file is trivial to update when a new Substack post goes live (one
  PR, a few lines of JSON).
- Inline placement matches the user's existing browsing habit — readers
  scroll the chronological list and discover everything in one place.
- A badge keeps the source clear without requiring a separate section.
- Including in RSS means a single source-of-truth feed for the
  "everything Wenxi writes" stream.

### Alternatives considered

| Option | Why not chosen |
| --- | --- |
| Live-scrape the Substack RSS at build time | Adds a network dependency to the build, fragile if Substack changes their feed. The list is small enough that a manual JSON file is fine. |
| Separate "On Substack" section below the main Posts list | Less discoverable; readers might miss it. Could add later if the inline view ever feels crowded. |
| Treat Substack posts as full `_posts/` entries with external `permalink` | Conflates "native blog posts" with "external links", complicates the bilingual / translation_key / comments features that exist for native posts only. |
| Substack-only `<link rel="alternate">` in `<head>` | Discoverable by feed readers, but invisible to humans browsing the site. |

## Design

### Data shape

`_data/substack.json` is an array of objects:

```json
[
  {
    "title": "Post title as it appears on Substack",
    "url": "https://wenxichen.substack.com/p/post-slug",
    "date": "YYYY-MM-DD",
    "description": "Short summary used as feed <summary> and for SEO."
  }
]
```

`date` is a plain ISO date string. The build normalizes it to noon UTC
(same convention as `_posts/` front matter) before formatting, so display
and sorting are timezone-stable.

### Merging native posts and Substack entries

A new Nunjucks filter `combinedFeed(posts, substack)` in `.eleventy.js`:

- Takes the `collections.postsListed` array and the `substack` global data.
- Normalizes each native post into `{ type: "post", date, url, title,
  description, post }` (keeping the original `post` object available for
  the `findTranslation` lookup and `templateContent` in the RSS feed).
- Normalizes each Substack entry into `{ type: "substack", date, url,
  title, description }`.
- Returns a single array sorted by `date` descending.

The home page template iterates this merged array and branches on
`item.type`:

- `post` → existing rendering (translation badge, updated stamp, internal
  link).
- `substack` → `Substack` badge, external link with
  `target="_blank" rel="noopener noreferrer"`.

The RSS feed (`feed.njk`) uses the same filter. For native posts the
entry embeds `templateContent` as before. For Substack entries it emits a
short HTML body containing the description plus a "Read on Substack →"
link, and the `<link href>` points to the Substack URL.

### Badge styling

`.substack-badge` mirrors `.lang-badge` but uses a subtle orange tint
(Substack's brand accent) so the source is obvious at a glance without
being loud. It respects dark mode via the existing CSS variables.

## File-level changes

| File | Change |
| --- | --- |
| `_data/substack.json` | New file. Hand-curated list of Substack posts (title, url, date, description). |
| `.eleventy.js` | Add `combinedFeed` filter that merges + sorts native posts and Substack entries. |
| `index.njk` | Replace the `collections.postsListed` loop with a loop over the merged feed; branch rendering on `item.type`; add `Substack` badge. |
| `feed.njk` | Iterate the merged feed; render Substack entries with external link + description body and the existing post entries unchanged. |
| `assets/main.css` | Add `.substack-badge` styling. |
| `README.md` | Document `_data/substack.json` under a new "Linking Substack posts" section. |

## Operational notes

### Adding a new Substack post

1. Open `_data/substack.json`.
2. Prepend a new entry with `title`, `url`, `date` (YYYY-MM-DD), and a
   short `description`.
3. Commit. The next build merges it into the home page and the RSS feed.

### Removing or renaming

Just edit / delete the corresponding entry in `_data/substack.json`. No
caching to invalidate.

## Out of scope

- Auto-syncing from Substack's RSS feed (could be a future enhancement —
  a small build-time fetch with a JSON cache committed to the repo).
- Rendering Substack post content inside this site (intentionally not
  done; canonical content stays on Substack).
- Per-Substack-post comments (giscus on this site only covers native
  `_posts/` entries; Substack has its own comments).

## References

- Substack source: https://wenxichen.substack.com/
- Substack feed used to seed the initial list: https://wenxichen.substack.com/feed
- Change log: [.agents/change-logs/substack-posts.md](../change-logs/substack-posts.md)
