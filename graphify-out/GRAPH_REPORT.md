# Graph Report - .  (2026-06-23)

## Corpus Check
- Large corpus: 91 files · ~1,581,780 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 246 nodes · 323 edges · 22 communities (20 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Footer & Site Constants|Footer & Site Constants]]
- [[_COMMUNITY_Dev Tooling (ESLintBuild)|Dev Tooling (ESLint/Build)]]
- [[_COMMUNITY_Full-Page Scroll Engine|Full-Page Scroll Engine]]
- [[_COMMUNITY_Home Stats & News|Home Stats & News]]
- [[_COMMUNITY_Home Page & About Section|Home Page & About Section]]
- [[_COMMUNITY_Destinations & Universities Data|Destinations & Universities Data]]
- [[_COMMUNITY_TypeScript App Config|TypeScript App Config]]
- [[_COMMUNITY_TypeScript Node Config|TypeScript Node Config]]
- [[_COMMUNITY_Team CounsellorsManagersSenior|Team Counsellors/Managers/Senior]]
- [[_COMMUNITY_Team Carousel & Members|Team Carousel & Members]]
- [[_COMMUNITY_NPM Dependencies|NPM Dependencies]]
- [[_COMMUNITY_Gallery Page|Gallery Page]]
- [[_COMMUNITY_Process Timeline Section|Process Timeline Section]]
- [[_COMMUNITY_Services Section|Services Section]]
- [[_COMMUNITY_Team Page Hierarchy|Team Page Hierarchy]]
- [[_COMMUNITY_Root TS Config|Root TS Config]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `compilerOptions` - 14 edges
3. `useIsMobile()` - 7 edges
4. `useScrollAnimation()` - 7 edges
5. `DESTINATIONS` - 7 edges
6. `scripts` - 6 edges
7. `Toast()` - 5 edges
8. `useCountUp()` - 5 edges
9. `supabase` - 5 edges
10. `TeamMember` - 4 edges

## Surprising Connections (you probably didn't know these)
- `AppLayout()` --calls--> `useIsMobile()`  [EXTRACTED]
  src/App.tsx → src/hooks/useIsMobile.ts
- `FullPageScroll()` --calls--> `useIsMobile()`  [EXTRACTED]
  src/components/layout/FullPageScroll.tsx → src/hooks/useIsMobile.ts
- `Header()` --calls--> `useIsMobile()`  [EXTRACTED]
  src/components/layout/Header.tsx → src/hooks/useIsMobile.ts
- `LatestNews()` --calls--> `useScrollAnimation()`  [EXTRACTED]
  src/components/sections/LatestNews.tsx → src/hooks/useScrollAnimation.ts
- `StatItem()` --calls--> `useCountUp()`  [EXTRACTED]
  src/components/sections/StatsBar.tsx → src/hooks/useCountUp.ts

## Import Cycles
- None detected.

## Communities (22 total, 2 thin omitted)

### Community 0 - "Footer & Site Constants"
Cohesion: 0.08
Nodes (24): QUICK_LINKS, COMPANY, EDUCATION_LEVELS, FEATURED_UNIVERSITIES, INTAKES, OFFICES, PARTNER_UNIVERSITIES, STUDY_FIELDS (+16 more)

### Community 1 - "Dev Tooling (ESLint/Build)"
Cohesion: 0.08
Nodes (25): devDependencies, autoprefixer, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, postcss (+17 more)

### Community 2 - "Full-Page Scroll Engine"
Cohesion: 0.13
Nodes (16): useIsMobile(), FPContext, FPContextValue, FullPageScroll(), HASH_MAP, LABELS, Props, useActiveSection() (+8 more)

### Community 3 - "Home Stats & News"
Cohesion: 0.18
Nodes (13): useCountUp(), useScrollAnimation(), LatestNews(), NEWS, StatItem(), STATS, StatsBar(), AnimatedStat() (+5 more)

### Community 4 - "Home Page & About Section"
Cohesion: 0.12
Nodes (6): ScrollToTop(), HomePage(), HIGHLIGHTS, STATS, successImages, BackToTop()

### Community 5 - "Destinations & Universities Data"
Cohesion: 0.15
Nodes (10): DESTINATION_IMAGES, DESTINATIONS, UNIVERSITIES_BY_COUNTRY, Destinations(), REGIONS, useVisibleCount(), EducationSVG(), springValues (+2 more)

### Community 6 - "TypeScript App Config"
Cohesion: 0.11
Nodes (17): compilerOptions, allowImportingTsExtensions, isolatedModules, jsx, lib, module, moduleDetection, moduleResolution (+9 more)

### Community 7 - "TypeScript Node Config"
Cohesion: 0.12
Nodes (15): compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection, moduleResolution, noEmit (+7 more)

### Community 8 - "Team Counsellors/Managers/Senior"
Cohesion: 0.21
Nodes (6): COUNSELLERS, MANAGERS, SENIOR, COLS_CLASS, TeamGrid(), TeamMember

### Community 9 - "Team Carousel & Members"
Cohesion: 0.20
Nodes (5): CEO, COUNSELLERS, MANAGERS, Member, SENIOR

### Community 10 - "NPM Dependencies"
Cohesion: 0.22
Nodes (9): dependencies, lucide-react, motion, react, react-dom, react-fast-marquee, react-responsive-carousel, react-router-dom (+1 more)

### Community 11 - "Gallery Page"
Cohesion: 0.29
Nodes (3): CATEGORIES, GALLERY_ITEMS, SectionHeadingProps

### Community 12 - "Process Timeline Section"
Cohesion: 0.33
Nodes (4): ICON_MAP, ProcessTimeline(), STEPS, useVisibleCount()

### Community 13 - "Services Section"
Cohesion: 0.40
Nodes (3): ICON_MAP, SERVICES, useVisibleCount()

## Knowledge Gaps
- **112 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+107 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useIsMobile()` connect `Full-Page Scroll Engine` to `Home Page & About Section`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **Why does `DESTINATIONS` connect `Destinations & Universities Data` to `Footer & Site Constants`, `Full-Page Scroll Engine`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _112 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Footer & Site Constants` be split into smaller, more focused modules?**
  _Cohesion score 0.08048780487804878 - nodes in this community are weakly interconnected._
- **Should `Dev Tooling (ESLint/Build)` be split into smaller, more focused modules?**
  _Cohesion score 0.07692307692307693 - nodes in this community are weakly interconnected._
- **Should `Full-Page Scroll Engine` be split into smaller, more focused modules?**
  _Cohesion score 0.13157894736842105 - nodes in this community are weakly interconnected._
- **Should `Home Page & About Section` be split into smaller, more focused modules?**
  _Cohesion score 0.12280701754385964 - nodes in this community are weakly interconnected._