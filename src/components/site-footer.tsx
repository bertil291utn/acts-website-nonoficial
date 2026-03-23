import { Link } from "@/i18n/navigation";
import {
  ecuadorCountryPostPath,
  ecuadorPostPath,
  navRoutes,
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
    <footer className="mt-auto border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <p className="font-serif text-lg font-semibold text-acts-navy">
            {tSite("name")}
          </p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-600">
            {tSite("description")}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-acts-navy">{t("explore")}</p>
          <ul className="mt-3 space-y-2 text-sm">
            {navRoutes.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-slate-600 hover:text-acts-navy"
                >
                  {tNav(item.navKey)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-acts-navy">{t("nextSchool")}</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link
                href="/ecuador"
                className="text-slate-600 hover:text-acts-navy"
              >
                {t("ecuadorHub")}
              </Link>
            </li>
            <li>
              <Link
                href={ecuadorCountryPostPath}
                className="text-slate-600 hover:text-acts-navy"
              >
                {t("ecuadorCountry")}
              </Link>
            </li>
            <li>
              <Link
                href="/schools"
                className="text-slate-600 hover:text-acts-navy"
              >
                {t("allSchools")}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-acts-navy">{t("connect")}</p>
          <ul className="mt-3 space-y-2 text-sm">
            {site.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="text-slate-600 hover:text-acts-navy"
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
      <div className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:px-6">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-6">
            <span>{t("copyright", { year })}</span>
            <LocaleSwitcher />
          </div>
          <span className="text-center sm:max-w-md sm:text-right">
            {t("coordinatorsLine")}{" "}
            <Link href="/info" className="underline hover:text-acts-navy">
              {t("infoLink")}
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
