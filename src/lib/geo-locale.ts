/**
 * Maps Vercel `x-vercel-ip-country` (ISO 3166-1 alpha-2) to a default locale.
 * Nordic: SE, FI, NO, DK → sv. Latin America + Caribbean (broad) → es. Else null (keep site default en).
 */

const NORDIC = new Set(["SE", "FI", "NO", "DK"]);

/** Latin America + Caribbean; includes Brazil (es default per product choice). */
const LATAM = new Set([
  "AR",
  "BO",
  "BR",
  "BZ",
  "CL",
  "CO",
  "CR",
  "CU",
  "DO",
  "EC",
  "SV",
  "GT",
  "GY",
  "HN",
  "HT",
  "JM",
  "MX",
  "NI",
  "PA",
  "PY",
  "PE",
  "SR",
  "TT",
  "UY",
  "VE",
  "FK",
  "GF",
  "GP",
  "MQ",
  "AG",
  "AI",
  "AW",
  "BB",
  "BM",
  "BS",
  "BQ",
  "CW",
  "DM",
  "GD",
  "KN",
  "LC",
  "MF",
  "MS",
  "PR",
  "SX",
  "TC",
  "VC",
  "VG",
  "VI",
  "KY",
  "BL",
]);

export type GeoLocaleHint = "es" | "sv" | null;

export function localeHintFromCountry(countryCode: string | null | undefined): GeoLocaleHint {
  if (!countryCode) return null;
  const c = countryCode.trim().toUpperCase();
  if (NORDIC.has(c)) return "sv";
  if (LATAM.has(c)) return "es";
  return null;
}
