# FlexPrice Frontend System

Premium AI-native billing infrastructure frontend system built with React, TypeScript, TailwindCSS and Storybook.

This project focuses on recreating the operational design patterns, realtime infrastructure workflows and developer experience commonly seen in modern billing and metering platforms like FlexPrice.

Instead of cloning the product UI directly, the goal was to understand the architectural patterns, component structure and operational UX decisions behind production-grade frontend systems.

---

# Design Philosophy

The assignment emphasized:

- Ownership
- Architectural thinking
- Frontend system design
- Reusable component APIs
- Shipping velocity
- Storybook quality
- Production-oriented frontend engineering

Because of that, this implementation intentionally prioritizes:

- Scalable components
- Reusable design primitives
- Operational dashboard aesthetics
- Performance-aware rendering
- Consistent design language
- Realtime UX patterns
- Developer-first interactions

---

# Brand Direction

While exploring the FlexPrice platform and design language, one of the strongest observations was how clearly the product communicates:

- infrastructure reliability
- realtime operations
- AI-native workflows
- modern developer tooling

To align with that ecosystem feeling, I intentionally designed the frontend system around:

- deep operational blues
- electric blue gradients
- soft dark grays
- glassmorphism surfaces
- realtime activity patterns
- high-density infrastructure layouts

Primary palette:

```css
--fp-primary: #355872;
--fp-accent: #7AAACE;
```

This acted as a subtle psychological alignment layer so the assignment feels visually closer to something that could naturally evolve inside the existing FlexPrice codebase while still being implemented independently.

Reference:
https://flexprice.io/

---

# Tech Stack

| Technology | Why I Chose It |
|---|---|
| React + TypeScript | Scalable component architecture with strict type safety |
| TailwindCSS | Faster iteration and highly maintainable utility-driven styling |
| Storybook | Essential for isolated component development and reusable design systems |
| Vite | Extremely fast development/build performance |
| TanStack Virtual | Efficient rendering for large datasets |
| Lucide Icons | Clean infrastructure-oriented iconography |

---

# Why This Stack?

The assignment timeline emphasized shipping quality within limited time.

Because of that, I intentionally optimized for:

- Fast iteration speed
- Component reusability
- Production readability
- Design consistency
- Scalable architecture

rather than prematurely overengineering abstractions.

For example:

I chose TailwindCSS over Styled Components because while Styled Components provides stronger style encapsulation, Tailwind allowed me to move significantly faster while maintaining consistency across 15+ reusable components.

This trade-off matched the implementation velocity expected in the assignment while still maintaining a scalable structure.

---

# Components Built

## Atoms

- Button
- Input
- Badge
- Chip
- Spinner

---

## Molecules

- SearchBar
- QueryBuilder
- MetricCard
- InvoiceStatusBadge
- DataTable
- MeterProgress
- UsageBar

---

## Organisms

- SidebarNavigation
- EmptyState
- BillingOperationsPanel
- DeveloperEventLog
- PricingTierTable

---

# Advanced Challenges Implemented

## 1. Virtualized DataTable

Implemented virtualization using:

```ts
@tanstack/react-virtual
```

This allows efficient rendering for large datasets without impacting UI responsiveness.

### Why this matters

Most frontend assignments stop at visual implementation.

I wanted to also demonstrate:

- frontend performance awareness
- scalable rendering patterns
- infrastructure-oriented engineering decisions

---

## 2. Realtime Developer Event Stream

Built a dynamic infrastructure-style event stream inspired by operational monitoring systems.

Features include:

- realtime updates
- animated activity feeds
- operational metrics
- infrastructure-oriented UI patterns
- responsive dashboard layouts

---

## 3. Storybook-Driven Development

All components were built and documented in isolation using Storybook.

This improves:

- scalability
- maintainability
- visual consistency
- component discoverability
- developer onboarding

---

# Trade-offs & Engineering Decisions

## TailwindCSS vs Styled Components

Styled Components offers stronger component-level style encapsulation.

However:

TailwindCSS allowed:

- faster iteration
- easier responsive design
- lower styling overhead
- better consistency during rapid implementation

While Styled Components is more robust in certain large-scale styling scenarios, Tailwind helped ship the required frontend system significantly faster without compromising maintainability.

This matched the assignment timeline expectations more effectively.

---

## Storybook-first vs Page-first Development

Building directly inside pages is initially faster.

However:

Storybook-first development:

- encourages reusable APIs
- improves component isolation
- simplifies testing
- scales better for design systems

Since FlexPrice emphasizes frontend ownership and scalable UI systems, Storybook-first architecture aligned better with that engineering culture.

---

## Why Glassmorphism?

Many billing dashboards feel visually dense and outdated.

I intentionally used:

- layered transparency
- soft gradients
- depth shadows
- glassmorphism surfaces

to create:

- cleaner visual hierarchy
- lighter operational workflows
- modern SaaS aesthetics
- better infrastructure-tool feel

while still maintaining readability and information density.

---

# If I Had More Time

There are several advanced systems I would continue building.

---

## 1. Webhook Activity Monitoring

A realtime operational timeline showing:

- webhook retries
- delivery latency
- failed sync events
- retry queues
- API health monitoring

similar to Stripe-style infrastructure tooling.

---

## 2. Finance Team Export System

Advanced financial tooling including:

- CSV exports
- invoice batch actions
- scheduled reporting
- accounting integrations
- custom financial summaries

---

## 3. Global Query State Management

A centralized filter/query state layer using Zustand.

Features would include:

- persisted filters
- route-aware filter restoration
- URL fingerprint syncing
- advanced sorting pipelines
- dashboard-level query synchronization

This would significantly improve scalability for larger operational dashboards.

---

# Performance Considerations

Optimizations implemented:

- Virtualized rendering
- Memoized sorting
- Lightweight animation usage
- Reduced unnecessary rerenders
- Efficient component structure
- Faster Storybook rendering

---

# Storybook

Run Storybook locally:

```bash
npm run storybook
```

Build Storybook:

```bash
npm run build-storybook
```

---

# Development

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build production:

```bash
npm run build
```

---

# Deployment

The final deliverable is deployed as a Storybook build on Vercel.

Deployment includes:

- interactive component previews
- responsive UI rendering
- isolated design system documentation
- reusable frontend architecture
- production-ready component structure

---

# Evaluation Alignment

The implementation was built while keeping the assignment evaluation criteria in mind.

| Area | Focus |
|---|---|
| Component coverage & fidelity | Infrastructure-inspired reusable design system |
| Storybook quality | Isolated stories, scalable documentation and controls |
| Code quality | TypeScript-first architecture and reusable APIs |
| Advanced challenges | Virtualization and realtime infrastructure patterns |
| Tests | Interaction-focused component architecture |
| Deployment & hygiene | Production build verification and clean structure |

---

# Project Philosophy

The assignment specifically mentioned:

> “15 well-done components beat 30 half-baked ones.”

That became the guiding principle for this implementation.

Instead of maximizing component count, I focused on:

- frontend system quality
- operational UX consistency
- scalable architecture
- reusable design primitives
- polished interactions
- production-oriented thinking

---

# Final Notes

This implementation was built from scratch using the visible FlexPrice product patterns only as inspiration.

The focus throughout the project was:

- architectural judgment
- scalable frontend engineering
- realtime operational UX
- performance-aware rendering
- reusable system design

rather than pixel-perfect cloning.

The overall goal was to build something that feels like it could naturally evolve inside the FlexPrice ecosystem.