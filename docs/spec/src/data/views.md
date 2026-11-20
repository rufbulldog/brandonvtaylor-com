---
type: l1-file
spec_version: 1
source: src/data/views.ts
content_sha: 12a3c173991db82ca6cc9a11335cf4d30119479cf824ba9b17c9a2205f3cb3de
extractor_version: 1.1.0
renderer_version: 1.0.0
last_audited: 2026-11-20T06:41:23.954Z
---

# views.ts

**Path:** `src/data/views.ts`
**Lines:** 161
**Language:** TypeScript

## Exports

| Name | Kind | Signature |
|---|---|---|
| `ViewId` | type |  |
| `views` | const | `{
  id: ViewId;
  label: string;
  href: string;
  /** Chooser card: short pitch line + call to action. */
  headline: string;
  pitch: string;
  cta: string;
}[]` |
| `caseStudies` | const | `{
  title: string;
  meta: string;
  problem: string;
  bet: string;
  outcome: string;
  /** Optional YouTube id embedded above the case study. */
  video?: string;
  videoTitle?: string;
  /** Optional big-number treatment instead of the three columns. */
  figures?: { value: string; label: string }[];
}[]` |
| `paper` | const | `{ title: "Measure It, Then Make It Better: Evaluation, Latency and Signals in P…` |
| `memo` | const | `{ heading: string; paragraphs: string[] }[]` |
| `turnaround` | const | `[ { label: "Operational health, product line A", value: "25% → 90%" }, { label:…` |
