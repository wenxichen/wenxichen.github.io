# Post tags — change log

## 2026-05-31 — Initial implementation

- Added optional `tags` front-matter field for blog posts.
- Extended `combinedFeed` to carry `tags` for native and Substack entries.
- Render tag badges on the home page (`index.njk`) beside date / lang / Substack badges.
- Render tag badges on individual post pages (`post.njk`) in the post header meta line.
- Styled `AI` (blue) and `mindfulness` (green) badges with dark-mode variants.
- Tagged existing listed posts: mindfulness on body-awareness post; `AI` on other native posts and AI Substack entries.
- Documented usage in `README.md`.
