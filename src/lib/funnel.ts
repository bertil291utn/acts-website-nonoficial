/**
 * Single source of truth for conversion: primary CTA, path to student,
 * and required home sections (vision, schools funnel, FAQ/contact).
 */
export const funnel = {
  /** Primary conversion goal — next school application */
  primaryCta: {
    href: "/ecuador",
    labelKey: "funnel.primaryCta",
  },
  secondaryCta: {
    href: "/schools",
    labelKey: "funnel.secondaryCta",
  },
  /** Driveit-inspired path without SaaS pricing */
  steps: [
    "funnel.steps.s1",
    "funnel.steps.s2",
    "funnel.steps.s3",
    "funnel.steps.s4",
  ] as const,
  /** Content blocks that must exist on the marketing home */
  requiredHomeSections: [
    "hero",
    "partners",
    "vision",
    "pillars",
    "gallery-teaser",
    "path",
    "stats",
    "ecuador",
    "testimonial",
    "closing",
  ] as const,
  coordinatorLink: {
    href: "/info#contact",
    labelKey: "funnel.coordinators",
  },
} as const;
