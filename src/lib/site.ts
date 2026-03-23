import type { PostSlug } from "@/lib/posts";

export const site = {
  nameKey: "site.name" as const,
  taglineKey: "site.tagline" as const,
  descriptionKey: "site.description" as const,
  social: [
    { label: "Facebook", href: "https://www.facebook.com/apg29" },
    { label: "YouTube", href: "https://www.youtube.com/@user-se8hg3vl6y" },
    { label: "Instagram", href: "https://www.instagram.com/acts29discipleschool/" },
    { label: "TikTok", href: "https://www.tiktok.com/@acts29discipleschool" },
  ],
} as const;

/** Canonical official Acts29 site (acts29.world). */
export const officialActs29Url = "https://www.acts29.world/" as const;

/** General inquiries email (same in every locale). */
export const officialInfoEmail = "info@acts29.world" as const;

export const officialInfoMailto = `mailto:${officialInfoEmail}` as const;

/** Site author / builder portfolio. */
export const builderPortfolioUrl = "https://www.bertiltandayamo.dev/" as const;

export type NavRoute = {
  href: `/${string}` | "/";
  navKey: "home" | "schools" | "gallery" | "ecuador" | "blog";
};

export const navRoutes: NavRoute[] = [
  { href: "/", navKey: "home" },
  { href: "/schools", navKey: "schools" },
  { href: "/gallery", navKey: "gallery" },
  { href: "/ecuador", navKey: "ecuador" },
  { href: "/blog", navKey: "blog" },
];

/** Canonical URL for the Ecuador 2026 school hub (program, apply). */
export const ecuadorPostPath = "/ecuador" as const satisfies `/${string}`;

/** Country article — geography, culture, church context (not the school schedule). */
export const ecuadorCountryPostPath = "/post/ecuador" as const satisfies `/${string}`;

/** Official Spanish application documents (acts29.world / Wix). */
export const ecuadorApplyLatamDocx = {
  applicationForm:
    "https://www.acts29.world/_files/ugd/fd56e0_ce2c9b6647ef432296c20cd4243d5b44.docx?dn=Formulario%20Aplicacion%202026.docx",
  pastoralReference:
    "https://www.acts29.world/_files/ugd/fd56e0_83080e3b52eb42ee80aca4363db65e0e.docx?dn=REFERENCIA%20PASTORAL.docx",
} as const;

/** Official post anchor for European / non-Latino “Apply here” (opens acts29.world). */
export const ecuadorApplyEuropeExternalUrl =
  "https://equmenia.se/apg29/application-form-participant-leader" as const;

export function postPath(slug: PostSlug): `/post/${PostSlug}` {
  return `/post/${slug}`;
}
