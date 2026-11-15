# PhoebeX SEO / GEO implementation record

Checked: 2026-11-15

## Readiness snapshot

This is a practical heuristic, not a Google ranking score. Google treats AI-search eligibility as normal SEO: a page must be indexable and eligible for a normal search result snippet before it can appear in Google AI features.

| Surface | Readiness | What is verified locally | Main dependency |
| --- | ---: | --- | --- |
| Google Search / AI features | 76 / 100 | Crawlable static HTML, canonical URLs, bilingual hreflang, visible sourced guidance, Article / FAQ / Breadcrumb schema | Search Console indexing, impressions and links |
| ChatGPT web search | 68 / 100 | Server-rendered content, public robots access and clear primary-source links | Public indexing and independent brand mentions |
| Perplexity / other AI search | 65 / 100 | Same crawlable pages and citable question-and-answer sections | Public indexing and independent brand mentions |

## Implemented in this release

- Added bilingual, server-rendered buyer guide pages for households who prefer Mandarin, Cantonese or English.
- Added bilingual Mission / Langley / Maple Ridge first-home comparison pages.
- Added visible FAQ sections and matching `FAQPage` markup only where the questions and answers are visible on-page.
- Added Article, Breadcrumb and primary-source references to every new page.
- Linked the new pages from both guide hubs and back to existing first-time and area guides.
- Added all four new URLs to `sitemap.xml`; sitemap now has 26 URLs.
- Added `YOUTUBE-SEO-PLAN.md` with three un-published, UTM-tagged YouTube-to-guide content briefs.

## Technical accessibility

- `robots.txt` allows crawlers and identifies the sitemap.
- Pages are static HTML; core content does not depend on JavaScript.
- Local verification confirmed a single H1, canonical URL and valid JSON-LD on each changed guide page.
- `/llms.txt` is not present. This is deliberately not treated as a Google ranking gap: Google says AI-specific text files are not needed for Google Search or its generative features.

## What cannot be claimed yet

- This change does not prove Google has indexed, ranked or cited any page.
- Public-search sampling did not establish a reliable ranking baseline.
- There is no verified Google Search Console, Google Business Profile, Bing Webmaster Tools or YouTube analytics baseline in this repository.

## Next measurement steps

1. In the verified Search Console property, submit the updated sitemap and inspect the four new URLs after Google has crawled them.
2. Publish the three approved YouTube videos only after reviewing the final scripts, titles, descriptions and thumbnails; preserve the UTM links in the first description lines.
3. At 30, 60 and 90 days, record Search Console impressions/clicks, YouTube click-through rate, UTM guide visits and consultation submissions.
4. Refresh factual guidance when official sources change; do not alter dates merely to look fresh.

## Source standard

- Google Search Central: https://developers.google.com/search/docs/appearance/ai-features
- FCAC mortgage-preapproval guidance: https://www.canada.ca/en/financial-consumer-agency/services/mortgages/preapproval-qualify-mortgage.html
- BCFSA buyer-agency and inspection guidance are linked on the relevant pages.
