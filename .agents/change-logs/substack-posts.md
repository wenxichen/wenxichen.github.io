# substack-posts change log

Running log of changes to the Substack-posts-on-home-page feature. Newest
entries on top. Each entry uses an ISO date heading. Spec lives at
[.agents/specs/substack-posts.md](../specs/substack-posts.md).

## 2026-05-25

Initial implementation: surface Substack posts inline on the home page and
in the RSS feed.

- Added `_data/substack.json` seeded from
  https://wenxichen.substack.com/feed with the 5 existing Substack posts
  (title, URL, date, description). Sorted newest-first for readability,
  though sort order in the source file does not matter — the filter sorts.
- Added a `combinedFeed(posts, substack)` Nunjucks filter in
  `.eleventy.js`. It normalizes native `collections.postsListed` entries
  and `_data/substack.json` entries into a uniform `{ type, date, url,
  title, description, post? }` shape and returns a single date-descending
  array. Substack dates are passed through the existing
  `dateOnlyAtNoonUtc` helper so they sort and display consistently with
  `_posts/` front-matter dates.
- Rewrote the home-page `<ul class="post-list">` loop in `index.njk` to
  iterate the merged feed and branch on `item.type`:
  - `post`: keeps the existing rendering (translation `中/EN` badge,
    `Updated` stamp, internal link).
  - `substack`: renders a `Substack` badge and links out to the canonical
    Substack URL with `target="_blank" rel="noopener noreferrer"`.
- Updated `feed.njk` to use the same `combinedFeed` filter. Native posts
  still embed `templateContent`. Substack entries emit a short HTML body
  (description + "Read on Substack →" link) and a `<category term="substack"/>`
  marker so feed readers / downstream consumers can distinguish source.
  The feed-level `<updated>` element now reflects the newest item across
  both sources.
- Added `.substack-badge` to `assets/main.css`, modeled on `.lang-badge`
  with a subtle Substack-orange tint and a dark-mode variant.
- Documented `_data/substack.json` in `README.md` under a new "Linking
  Substack Posts" section.
- Authored design spec at `.agents/specs/substack-posts.md`.

No `_posts/` content was touched — the rule in
`.cursor/rules/do-not-change-blog-content.mdc` is respected.
