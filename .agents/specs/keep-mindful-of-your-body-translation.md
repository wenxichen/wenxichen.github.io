# Turn Inward and Sense Your Body translation

Status: live
Owner: @wenxichen
Last updated: 2026-05-31

## Problem

The Chinese post `_posts/2026-05-31-keep-mindful-of-your-body.md` needs an
English translation available through the site's existing bilingual post
toggle, without changing the original Chinese source.

## Decision

Add a companion translation source at
`_posts/2026-05-31-turn-inward-and-sense-your-body-en.md`.

The translation file follows the established bilingual convention:

- `layout: false`
- `permalink: false`
- `lang: en`
- matching `translation_key: keep-mindful-of-your-body`

This keeps the Chinese original as the published canonical page while making
the English version available through the existing language toggle.

## Scope

- Translate the post title, description, and body into English.
- Preserve the source post's structure and meaning.
- Do not modify the original Chinese post content.

## References

- Original post: `_posts/2026-05-31-keep-mindful-of-your-body.md`
- Translation source: `_posts/2026-05-31-turn-inward-and-sense-your-body-en.md`
- Change log: `.agents/change-logs/keep-mindful-of-your-body-translation.md`
