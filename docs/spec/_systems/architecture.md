---
type: l3-system
spec_version: 1
name: architecture
discovered_from: code-graph + repo config
resource_count: 4
extractor_version: 1.0.2
renderer_version: 1.0.2
last_audited: 2026-06-23T05:21:42.221Z
---

# Architecture overview — System Spec

Repo-level view of how the source folders depend on each other, aggregated from the import graph. An arrow A → B means a file in A imports a file in B.

## Module dependency graph

Folders that import across folder boundaries (4 of 4). Self-contained folders are listed below.

```mermaid
flowchart LR
  n_src_components["src/components"]
  n_src_data["src/data"]
  n_src_layouts["src/layouts"]
  n_src_pages["src/pages"]
  n_src_components --> n_src_data
  n_src_pages --> n_src_components
  n_src_pages --> n_src_data
  n_src_pages --> n_src_layouts
```

## Cross-refs

- [`INDEX.md`](../INDEX.md)
