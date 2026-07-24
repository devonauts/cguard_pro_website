# Blog content pipeline (bulk SEO posts)

Reusable pipeline for generating batches of Spanish blog posts + branded covers for the CGuardPro marketing site (`website/`). Used for the 100-post (MX/AR) and 500-post (temático) waves of 2026-07.

## Files

- `WRITER_SPEC.md` — the rules every writer agent must follow (frontmatter, length, vocab per market, hedged regulation, no invented data, 2 screenshots, verified internal links, screenshot→path map). **Read this first.**
- `gen-manifest.example.mjs` — example manifest generator (the 500-post wave). Defines topic pools × markets, dedups against existing slugs, emits `manifest-*.json` with `{slug,country,chip,tags,title,keyword,angle,shots}`. Adapt topic pools for the next wave.
- `gen-covers.mjs` — renders 1200×630 dark+gold branded covers via headless Chrome (uses `../../backend/node_modules/puppeteer`). Reads a manifest's `posts[].{slug,chip,title}`. Renders 2× PNG → `public/blog/<slug>.png`.
- `finish-covers.sh` — downscales every fresh `public/blog/*.png` to optimized 1200×630 JPG (~70–90 KB) and deletes the PNGs.
- `validate.mjs` — checks every new post: frontmatter completeness, cover exists, all internal links resolve to a real page/route or blog slug, all image assets exist, exactly 2 embedded screenshots. **Must print 0 problems before deploy.**
- `inventory.mjs` — dumps all existing posts (slug/lang/title/tags) to `existing-inventory.json` for dedup + tag-frequency. Run this FIRST to see what's already covered.
- `indexnow.mjs` — pings IndexNow (Bing) with the new URLs after deploy. Key: `9f923e3bf5f140d8beb51ae84b74be31`.

## Screenshot→path map (only these exist)

login/dashboard/incidents/profile/radio/schedule/tasks → `/screenshots/worker-app/es-<name>.png`
crm-dashboard → `/screenshots/dashboard.png` · crm-incidents → `/screenshots/incidents.png`

## Playbook (fast next time)

1. `node scripts/blog/inventory.mjs` → review coverage; pick NEW topics/markets (avoid duplicating existing stems — see the blog-topic-registry memory).
2. Write a manifest generator (adapt `gen-manifest.example.mjs`); target exactly N; dedup vs existing; balance markets. Verify: 0 collisions, 0 internal dup slugs, tags map to a category in `src/pages/blog/index.astro` `CATEGORIES`.
3. `node scripts/blog/gen-covers.mjs <manifest>.json` then `zsh scripts/blog/finish-covers.sh`.
4. Split manifest into batches of ~10; launch 10 writer agents per round (proven quality at 10 posts/agent), N/100 rounds. Each agent: read `WRITER_SPEC.md` + its batch json.
5. `node scripts/blog/validate.mjs` (point it at the manifest) → fix until 0 problems. Then `npm run build` (must complete).
6. Commit + push `main` → SSH deploy (see the deploy-flow / marketing-website memories): `cd /home/cguardpro/cguard-website && git pull --ff-only && npm ci && npm run build && rsync -a --delete dist/ /var/www/website/`.
7. `node scripts/blog/indexnow.mjs`.

## Quality guardrails (Google scaled-content-abuse)

Diversity of TOPIC is the defense, not geo-spinning one topic across many cities. Prefer many distinct topics; each market variant must carry genuinely local content (vocab + market realities + local regulation, hedged). No invented stats/figures/laws — ever.
