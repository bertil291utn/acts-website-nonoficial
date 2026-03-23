/**
 * BCP 47 tags for `Intl` date formatting (blog/post dates).
 */
export function localeToDateStringLocale(locale: string): string {
  const map: Record<string, string> = {
    en: "en-GB",
    es: "es",
    sv: "sv",
  };
  return map[locale] ?? "en-GB";
}
