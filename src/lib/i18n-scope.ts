/**
 * i18n scope — keep in sync with `src/i18n/routing.ts`.
 *
 * - Shipped: English (default URL), Spanish (`/es/...`), Swedish (`/sv/...`).
 * - Planned: Finnish (`fi`) when copy is ready.
 */
export const i18nScope = {
  locales: ["en", "es", "sv"] as const,
  defaultLocale: "en" as const,
  planned: ["fi"] as const,
} as const;
