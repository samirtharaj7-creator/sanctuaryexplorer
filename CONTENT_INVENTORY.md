# Content Inventory

Content inventory for Sanctuary Explorer. The human editorial rewrite was imported on 2026-07-13; these modules remain the editing surface for future revisions.

## Status Key

- `Editorial rewrite imported`: editable wording has been replaced from the human editorial workbook.
- `Runtime support`: supporting icons or timing/settings used by extracted content; edit carefully because these can affect presentation.
- `Fallback mirror`: visible static HTML still exists as a no-JavaScript fallback, while the module is the editable source applied at runtime.

## Inventory

| Module | Export | Appears In | Items / IDs | Status |
| --- | --- | --- | --- | --- |
| `content/icons.js` | `iconSvg` | Article cards, feast procedure visuals, chronicle choices, focus cards | flame, water, lamp, bread, cloud, shield, priest, users, sun, clock, chevronLeft, chevronRight | Runtime support |
| `content/icons.js` | `feastProcedureIcons` | Festival Calendar procedure flow | lamb, blood, meal, depart, purge, assembly, days, harvest, offering, spirit, priest, cleansing, trumpet, shelter | Runtime support |
| `content/articles.js` | `articles` | Structure cards and article dialog | altar, laver, lampstand, shewbread, incense, ark, gate, posts, priest, entranceVeil, innerVeil, coverings | Editorial rewrite imported |
| `content/articles.js` | `articleEnhancements` | Article dialog summaries, key texts, at-a-glance panels | altar, laver, lampstand, shewbread, incense, ark, gate, posts, priest, entranceVeil, innerVeil, coverings | Editorial rewrite imported |
| `content/articles.js` | `phases` | Path to Restoration section | phase-outer, phase-holy, phase-most | Editorial rewrite imported |
| `content/ministry.js` | `offerings` | Sanctuary Ministry / Sacrifices | burnt, grain, peace, sin, guilt | Editorial rewrite imported |
| `content/ministry.js` | `specialCeremonies` | Sanctuary Ministry / Special Ceremonies | leper, red-heifer, priestly-consecration, levite-dedication, nazirite, childbirth, bodily-discharge, sinai-covenant, tabernacle-dedication, firstborn | Editorial rewrite imported |
| `content/ministry.js` | `serviceStudies` | Sanctuary Ministry / Services | daily, yearly | Editorial rewrite imported |
| `content/ministry.js` | `ministryViews` | Sanctuary Ministry tabs | sacrifices, specialCeremonies, services | Editorial rewrite imported |
| `content/attire.js` | `attireGroups` | Priestly Attire group selector | ordinary, high, atonement | Editorial rewrite imported |
| `content/attire.js` | `priestlyAttire` | Priestly Attire garment explanations | linen-tunic, linen-breeches, ordinary-sash, head-covering, ephod, shoulder-stones, breastplate, urim-thummim, blue-robe, bells-pomegranates, embroidered-tunic, high-priest-sash, mitre, golden-plate, holy-linen-garments | Editorial rewrite imported |
| `content/feasts.js` | `feasts` | Festival Calendar | passover, unleavened, firstfruits, weeks, trumpets, atonement, tabernacles | Editorial rewrite imported |
| `content/chronicles.js` | `chroniclePerspectiveInfo` | Sanctuary Chronicles perspective chooser | priest, commoner | Editorial rewrite imported |
| `content/chronicles.js` | `chronicleStories` | Sanctuary Chronicles initial story seed | priest-daily, priest-atonement, commoner-daily, commoner-atonement | Editorial rewrite imported |
| `content/chronicles.js` | `chronicleCompanionNotes` | Sanctuary Chronicles initial companion notes | priest-daily, priest-atonement, commoner-daily, commoner-atonement | Editorial rewrite imported |
| `content/chronicles.js` | `documentChronicleStories` | Sanctuary Chronicles active story content | commoner-daily, commoner-atonement, priest-daily, priest-atonement | Editorial rewrite imported |
| `content/chronicles.js` | `documentChronicleCompanionNotes` | Sanctuary Chronicles active companion notes | commoner-daily, commoner-atonement, priest-daily, priest-atonement | Editorial rewrite imported |
| `content/focus-1844.js` | `focusTimeline` | 1844 Focus timeline | 457bc, ad27, ad31, ad34, 1844, now, next | Editorial rewrite imported |
| `content/focus-1844.js` | `focusStudyCards` | 1844 Focus study cards | What does Daniel 8:14 mean?, Sin was forgiven, but the sanctuary carried the record, Forgiveness was real, and cleansing completed the process, Daniel 8:14 points to the heavenly sanctuary, 2,300 prophetic days equal 2,300 years, Christ is ministering in the final phase | Editorial rewrite imported |
| `content/focus-1844.js` | `focusHeroChain` | 1844 Focus hero chain | Sin confessed, Blood ministered, Sanctuary bears record, Day of Atonement cleanses, Christ restores | Editorial rewrite imported |
| `content/focus-1844.js` | `focusLogicSteps` | 1844 Focus logic flow | The sinner is forgiven, Blood carries the confession, The sanctuary needs cleansing, The Day of Atonement removes sin, Christ completes the pattern | Editorial rewrite imported |
| `content/focus-1844.js` | `focusDanielLinkSteps` | 1844 Focus Daniel/Revelation link | Daniel 8 gives the 2,300 days, Gabriel is told to explain the vision, Daniel faints before the time is explained, Gabriel returns with the starting point | Editorial rewrite imported |
| `content/focus-1844.js` | `focusChartSegments` | 1844 Focus prophecy chart | 2,300 prophetic years, 70 weeks / 490 years, 457 BC shared starting point | Editorial rewrite imported |
| `content/focus-1844.js` | `focusAssuranceCards` | 1844 Focus assurance dashboard | What is being cleansed?, What is Christ doing now?, Why this is good news | Editorial rewrite imported |
| `content/faq.js` | `faqArticles` | FAQ legacy/source study articles | feasts-keep, investigative-judgment, antitypical-day-of-atonement, daniel-7-8-9, judgment-not-works, sanctuary-cleansing, feasts-nailed-cross, paul-feasts, hebrew-calendar-today | Editorial rewrite imported |
| `content/faq.js` | `polishedFaqArticles` | FAQ Study Hub active articles | feasts-keep, investigative-judgment, antitypical-day-of-atonement, daniel-7-8-9, judgment-not-works, sanctuary-cleansing, feasts-nailed-cross, paul-feasts, hebrew-calendar-today | Editorial rewrite imported |
| `content/scene-paths.js` | `STUDY_PATHS` | 3D View guided study paths | sinner, daily, atonement, christ | Editorial rewrite imported |
| `content/scene-paths.js` | `CINEMATIC_PATHS` | 3D View cinematic guided scenes | sinner, daily, atonement | Editorial rewrite imported; includes scene choreography data |
| `content/site-copy.js` | `siteCopy.document` | Document title and meta description | title, description | Fallback mirror |
| `content/site-copy.js` | `siteCopy.attributes` | ARIA labels and accessibility copy | 13 selectors | Fallback mirror |
| `content/site-copy.js` | `siteCopy.text` | Static labels, buttons, headings, shell copy | 48 selectors | Fallback mirror |
| `content/site-copy.js` | `siteCopy.html` | Static intro paragraphs and footer HTML | 13 selectors | Fallback mirror |
| `content/site-copy.js` | `siteCopy.buttonLabels` | Primary navigation labels | 8 selectors | Fallback mirror |

## Ongoing Editing Notes

- Preserve IDs unless the app code is updated at the same time; IDs connect cards, routes, article dialogs, object clicks, and guided scenes.
- Keep KJV/reference wording where the current text already uses it.
- Prefer short paragraphs for scene captions, buttons, and cards; longer devotional or study prose belongs in article bodies.
- Treat `content/scene-paths.js` with extra care because cinematic entries include camera, actor, and timing data alongside text.
- `content/site-copy.js` mirrors visible fallback HTML in `index.html`; edit the module first, then update fallback HTML only when the static no-JavaScript version also needs to match.
