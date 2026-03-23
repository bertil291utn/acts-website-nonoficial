import { Link } from "@/i18n/navigation";
import {
  builderPortfolioUrl,
  ecuadorCountryPostPath,
  ecuadorPostPath,
  navRoutes,
  officialActs29Url,
  site,
} from "@/lib/site";
import { getTranslations } from "next-intl/server";
import { LocaleSwitcher } from "./locale-switcher";

export async function SiteFooter() {
  const t = await getTranslations("Footer");
  const tNav = await getTranslations("Nav");
  const tSite = await getTranslations("site");
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/10 bg-acts-slate">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <p className="font-serif text-lg font-semibold text-acts-cream">
            {tSite("name")}
          </p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-acts-muted">
            {tSite("description")}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-acts-cream">{t("explore")}</p>
          <ul className="mt-3 space-y-2 text-sm">
            {navRoutes.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-acts-muted hover:text-acts-teal"
                >
                  {tNav(item.navKey)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-acts-cream">{t("nextSchool")}</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link
                href="/ecuador"
                className="text-acts-muted hover:text-acts-teal"
              >
                {t("ecuadorHub")}
              </Link>
            </li>
            <li>
              <Link
                href={ecuadorCountryPostPath}
                className="text-acts-muted hover:text-acts-teal"
              >
                {t("ecuadorCountry")}
              </Link>
            </li>
            <li>
              <Link
                href="/schools"
                className="text-acts-muted hover:text-acts-teal"
              >
                {t("allSchools")}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-acts-cream">{t("connect")}</p>
          <ul className="mt-3 space-y-2 text-sm">
            {site.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="text-acts-muted hover:text-acts-teal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 bg-acts-charcoal">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-acts-muted sm:flex-row sm:items-center">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-6">
              <span>{t("copyright", { year })}</span>
              <LocaleSwitcher />
            </div>
            <span className="text-center sm:max-w-md sm:text-right">
              {t("coordinatorsLine")}{" "}
              <Link href="/info" className="underline hover:text-acts-teal">
                {t("infoLink")}
              </Link>
            </span>
          </div>
          <div className="mt-4 border-t border-white/5 pt-4 text-center text-xs leading-relaxed text-acts-muted sm:text-left">
            <p>
              {t.rich("footerCredit", {
                credit: (chunks) => (
                  <a
                    href={builderPortfolioUrl}
                    className="underline hover:text-acts-teal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {chunks}
                  </a>
                ),
              })}
            </p>
            <p className="mx-auto mt-2 max-w-3xl sm:mx-0">
              {t.rich("footerDisclaimer", {
                official: (chunks) => (
                  <a
                    href={officialActs29Url}
                    className="underline hover:text-acts-teal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {chunks}
                  </a>
                ),
              })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
