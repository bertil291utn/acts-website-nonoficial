"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const LANG_KEY = {
  en: "langEn",
  es: "langEs",
  sv: "langSv",
} as const satisfies Record<(typeof routing.locales)[number], string>;

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("Nav");

  return (
    <div
      className="flex flex-wrap items-center justify-center gap-1 rounded-full border border-slate-200 bg-white px-1 py-0.5 text-xs font-medium"
      role="navigation"
      aria-label={t("languageNav")}
    >
      {routing.locales.map((loc) => (
        <Link
          key={loc}
          href={pathname}
          locale={loc}
          className={
            locale === loc
              ? "rounded-full bg-acts-navy px-2 py-1 text-white"
              : "rounded-full px-2 py-1 text-slate-600 hover:text-acts-navy"
          }
        >
          {t(LANG_KEY[loc])}
        </Link>
      ))}
    </div>
  );
}
