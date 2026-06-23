---
type: l3-system
spec_version: 1
name: tech-stack
discovered_from: code-graph + repo config
resource_count: 2
extractor_version: 1.0.2
renderer_version: 1.0.2
last_audited: 2026-06-23T03:11:23.275Z
---

# Technology stack — System Spec

What this system is built from — frameworks, languages, tooling, and cloud services — detected from dependencies, config files, AWS SDK / CDK imports, and the SAM template.

## Stack

```mermaid
flowchart TB
  subgraph n_cat_Frontend_framework["Frontend framework"]
    n_Astro["Astro"]
  end
  subgraph n_cat_Hosting_CI["Hosting / CI"]
    n_AWS_Amplify["AWS Amplify"]
  end
```

## Inventory

| Technology | Category | Detected from |
|---|---|---|
| Astro | Frontend framework | dep `astro` |
| AWS Amplify | Hosting / CI | `amplify.yml` |

## Cross-refs

- [`INDEX.md`](../INDEX.md)
