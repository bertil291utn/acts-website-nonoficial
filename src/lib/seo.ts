import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

/**
 * Base URL for `metadataBase`, canonical URLs, and OG/Twitter image absolutization.
 * - Prefer `NEXT_PUBLIC_SITE_URL` (set in Vercel to e.g. `https://acts29.vercel.app`).
 * - On Vercel, `VERCEL_URL` is injected automatically so previews/production get correct
 *   `og:image` without localhost.
 * - Fallback: local dev on `http://localhost:3000`.
 */
export function getMetadataBase(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    const withProtocol = /^https?:\/\//i.test(explicit)
      ? explicit
      : `https://${explicit}`;
    const trimmed = withProtocol.replace(/\/$/, "");
    return new URL(trimmed);
  }
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//i, "").split("/")[0];
    return new URL(`https://${host}`);
  }
  return new URL("http://localhost:3000");
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
