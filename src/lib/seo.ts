import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

export function getMetadataBase(): URL {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const trimmed = raw.endsWith("/") ? raw.slice(0, -1) : raw;
  return new URL(trimmed);
}

/** Pathname without locale prefix, e.g. `/`, `/blog`, `/post/ecuador`. */
export function localePath(locale: string, pathname: string): string {
  const p =
    pathname === "" || pathname === "/"
      ? "/"
      : pathname.startsWith("/")
        ? pathname
        : `/${pathname}`;
  if (locale === routing.defaultLocale) {
    return p;
  }
  return p === "/" ? `/${locale}` : `/${locale}${p}`;
}

export function absoluteUrl(locale: string, pathname: string): string {
  const origin = getMetadataBase().origin;
  return `${origin}${localePath(locale, pathname)}`;
}

export function openGraphLocale(locale: string): string {
  const map: Record<string, string> = {
    en: "en_US",
    es: "es_ES",
    sv: "sv_SE",
  };
  return map[locale] ?? "en_US";
}

export function buildAlternates(
  locale: string,
  pathname: string,
): NonNullable<Metadata["alternates"]> {
  const languages = Object.fromEntries(
    routing.locales.map((loc) => [loc, absoluteUrl(loc, pathname)]),
  ) as Record<string, string>;

  return {
    canonical: absoluteUrl(locale, pathname),
    languages,
  };
}

type PageSeoInput = {
  locale: string;
  pathname: string;
  title: string;
  description: string;
  siteName: string;
};

/** Merges route-specific canonical, hreflang, Open Graph URL, and Twitter card fields. */
export function buildPageMetadata({
  locale,
  pathname,
  title,
  description,
  siteName,
}: PageSeoInput): Metadata {
  const url = absoluteUrl(locale, pathname);
  const ogLoc = openGraphLocale(locale);

  return {
    title,
    description,
    alternates: buildAlternates(locale, pathname),
    openGraph: {
      type: "website",
      title,
      description,
      url,
      siteName,
      locale: ogLoc,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
